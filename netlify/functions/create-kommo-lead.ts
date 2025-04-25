import { Handler } from '@netlify/functions';
import fetch from 'node-fetch';

const KOMMO_DOMAIN = process.env.KOMMO_DOMAIN;
const KOMMO_ACCESS_TOKEN = process.env.KOMMO_ACCESS_TOKEN;
const WEBSITE_FORM_TAG_ID = 123456; // Replace with your actual tag ID

// Example lead structure for type inference
const leadExample = {
  name: '',
  price: 0,
  // These IDs must belong to the same pipeline in Kommo
  pipeline_id: 0,  // Verify this pipeline ID exists
  status_id: 0,    // This stage must belong to the specified pipeline
  responsible_user_id: 0, // Must be an active user in the account
  request_id: '',  // Used by Kommo for deduplication
  tag_ids: [WEBSITE_FORM_TAG_ID],
  custom_fields_values: [] as {
    field_code: string;
    values: Array<{
      value: string;
      enum_code?: "WORK" | "MOB" | "OTHER"; // Valid codes depend on field type
    }>;
  }[],
  _embedded: {
    contacts: [{
      first_name: '',
      last_name: '',
      custom_fields_values: [] as {
        field_code: string;
        values: Array<{
          value: string;
          enum_code?: "WORK" | "MOB" | "OTHER"; // EMAIL: "WORK"/"OTHER", PHONE: "WORK"/"MOB"/"OTHER"
        }>;
      }[]
    }]
  }
} as const;

type KommoLead = typeof leadExample;

const validateLead = (data: unknown): data is KommoLead => {
  console.log('Validating lead data');
  
  if (!data || typeof data !== 'object') {
    console.log('Data is not an object:', data);
    return false;
  }

  const lead = data as any;
  
  // Check required fields
  const requiredFields = {
    name: 'string',
    price: 'number',
    status_id: 'number',
    pipeline_id: 'number',
    responsible_user_id: 'number',
    request_id: 'string'
  } as const;

  for (const [field, type] of Object.entries(requiredFields)) {
    if (typeof lead[field] !== type) {
      console.log(`Field ${field} is not a ${type}:`, lead[field]);
      return false;
    }
  }

  // Check embedded contacts
  if (!lead._embedded?.contacts) {
    console.log('Missing _embedded.contacts');
    return false;
  }
  
  if (!Array.isArray(lead._embedded.contacts) || lead._embedded.contacts.length === 0) {
    console.log('_embedded.contacts is not a non-empty array:', lead._embedded.contacts);
    return false;
  }

  const contact = lead._embedded.contacts[0];
  if (!contact.first_name || typeof contact.first_name !== 'string') {
    console.log('Contact first_name is missing or not a string:', contact.first_name);
    return false;
  }
  if (!contact.last_name || typeof contact.last_name !== 'string') {
    console.log('Contact last_name is missing or not a string:', contact.last_name);
    return false;
  }

  // Check custom fields
  if (!Array.isArray(contact.custom_fields_values)) {
    console.log('Contact custom_fields_values is not an array:', contact.custom_fields_values);
    return false;
  }

  for (const field of contact.custom_fields_values) {
    if (!field.field_code || !Array.isArray(field.values) || field.values.length === 0) {
      console.log('Invalid custom field structure:', field);
      return false;
    }
    for (const value of field.values) {
      if (typeof value.value !== 'string') {
        console.log('Invalid custom field value:', value);
        return false;
      }
    }
  }

  console.log('Lead data validation passed');
  return true;
};

async function createLeadNote(leadId: number, message: string) {
  if (!message) return;

  try {
    const response = await fetch(`https://${KOMMO_DOMAIN}/api/v4/leads/${leadId}/notes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${KOMMO_ACCESS_TOKEN}`
      },
      body: JSON.stringify([{
        note_type: 'common',
        params: { text: message }
      }])
    });

    if (!response.ok) {
      console.error('Failed to create lead note:', await response.json());
    }
  } catch (error) {
    console.error('Error creating lead note:', error);
  }
}

const handler: Handler = async (event) => {
  console.log('Handler started - Request received');
  
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
  };

  if (event.httpMethod === 'OPTIONS') {
    console.log('Handling OPTIONS request');
    return {
      statusCode: 204,
      headers,
      body: '',
    };
  }

  if (event.httpMethod !== 'POST') {
    console.log('Invalid HTTP method:', event.httpMethod);
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ message: 'Method not allowed' }),
    };
  }

  try {
    console.log('Raw event body:', event.body);
    
    const rawData = JSON.parse(event.body || '[]');
    console.log('Parsed request data:', JSON.stringify(rawData, null, 2));

    if (!Array.isArray(rawData) || rawData.length === 0) {
      console.error('Invalid request: expected non-empty array of leads');
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({
          message: 'Invalid request: expected non-empty array of leads',
          receivedData: rawData
        })
      };
    }

    // Validate each lead in the array
    for (const lead of rawData) {
      if (!validateLead(lead)) {
        console.error('Invalid lead data structure:', lead);
        return {
          statusCode: 400,
          headers,
          body: JSON.stringify({
            message: 'Invalid lead data structure',
            receivedData: lead
          })
        };
      }
    }

    if (!KOMMO_DOMAIN || !KOMMO_ACCESS_TOKEN) {
      console.error('Missing environment variables');
      throw new Error('Missing required environment variables');
    }

    const kommoUrl = `https://${KOMMO_DOMAIN}/api/v4/leads/complex`;
    console.log('Making request to Kommo API:', {
      url: kommoUrl,
      data: JSON.stringify(rawData, null, 2)
    });

    const response = await fetch(kommoUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${KOMMO_ACCESS_TOKEN}`,
      },
      body: JSON.stringify(rawData),
    });

    const responseData = await response.json();
    console.log('Kommo API response status:', response.status);
    console.log('Kommo API response:', JSON.stringify(responseData, null, 2));

    if (!response.ok) {
      console.error('Kommo API error response:', {
        status: response.status,
        statusText: response.statusText,
        data: responseData
      });
      return {
        statusCode: response.status,
        headers,
        body: JSON.stringify({
          message: 'Error creating lead in Kommo CRM',
          error: responseData,
          requestData: rawData
        }),
      };
    }

    // Create notes for each lead if there's a message
    const typedResponse = responseData as { _embedded?: { leads: Array<{ id: number; request_id: string }> } };
    if (typedResponse._embedded?.leads) {
      for (const lead of typedResponse._embedded.leads) {
        const originalLead = rawData.find(l => l.request_id === lead.request_id);
        if (originalLead && 'message' in originalLead) {
          await createLeadNote(lead.id, originalLead.message);
        }
      }
    }

    console.log('Successfully created lead(s)');
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify(responseData),
    };
  } catch (error) {
    console.error('Error in handler:', error);
    console.error('Error stack:', error instanceof Error ? error.stack : 'No stack trace');
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        message: 'Internal server error',
        error: error instanceof Error ? error.message : String(error)
      }),
    };
  }
};

export { handler }; 