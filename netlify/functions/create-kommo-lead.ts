import { Handler } from '@netlify/functions';
import fetch from 'node-fetch';

const KOMMO_DOMAIN = process.env.KOMMO_DOMAIN;
const KOMMO_ACCESS_TOKEN = process.env.KOMMO_ACCESS_TOKEN;

interface KommoValue<T> {
  value: T;
}

interface KommoCustomField {
  field_code: string;
  values: Array<KommoValue<string>>;
}

interface KommoContact {
  name: string;
  first_name: string;
  last_name: string;
  custom_fields_values: KommoCustomField[];
}

interface KommoLeadData {
  name: Array<KommoValue<string>>;
  price: Array<KommoValue<number>>;
  status_id: Array<KommoValue<number>>;
  pipeline_id: Array<KommoValue<number>>;
  responsible_user_id: Array<KommoValue<number>>;
  custom_fields_values: KommoCustomField[];
  _embedded: {
    contacts: KommoContact[];
    tags: Array<{ name: string }>;
  };
}

const validateLeadData = (data: any): data is KommoLeadData => {
  console.log('Starting validation of lead data');
  
  if (!data || typeof data !== 'object') {
    console.log('Data is not an object:', data);
    return false;
  }
  
  // Check required array fields
  const arrayFields = ['name', 'price', 'status_id', 'pipeline_id', 'responsible_user_id'] as const;
  for (const field of arrayFields) {
    if (!Array.isArray(data[field])) {
      console.log(`Field ${field} is not an array:`, data[field]);
      return false;
    }
    if (data[field].length === 0) {
      console.log(`Field ${field} array is empty`);
      return false;
    }
    if (typeof data[field][0]?.value === 'undefined') {
      console.log(`Field ${field} first element does not have a value property:`, data[field][0]);
      return false;
    }
  }

  // Check embedded contacts
  if (!data._embedded?.contacts) {
    console.log('Missing _embedded.contacts');
    return false;
  }
  
  if (!Array.isArray(data._embedded.contacts) || data._embedded.contacts.length === 0) {
    console.log('_embedded.contacts is not a non-empty array:', data._embedded.contacts);
    return false;
  }

  const contact = data._embedded.contacts[0];
  if (!contact.name || typeof contact.name !== 'string') {
    console.log('Contact name is missing or not a string:', contact.name);
    return false;
  }
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
  }

  console.log('Lead data validation passed');
  return true;
};

const handler: Handler = async (event) => {
  // Enable CORS
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
  };

  // Handle preflight requests
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 204,
      headers,
      body: '',
    };
  }

  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ message: 'Method not allowed' }),
    };
  }

  try {
    // Parse and validate the incoming request body
    const rawData = JSON.parse(event.body || '{}');
    console.log('Received data:', JSON.stringify(rawData, null, 2));

    if (!validateLeadData(rawData)) {
      console.error('Invalid lead data structure:', rawData);
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({
          message: 'Invalid lead data structure',
          receivedData: rawData
        })
      };
    }

    const leadData: KommoLeadData = rawData;

    // Validate required environment variables
    if (!KOMMO_DOMAIN || !KOMMO_ACCESS_TOKEN) {
      throw new Error('Missing required environment variables');
    }

    // Log the data being sent
    console.log('Making request to Kommo API:', {
      url: `https://${KOMMO_DOMAIN}/api/v4/leads`,
      data: JSON.stringify(leadData, null, 2)
    });

    // Make request to Kommo API
    const response = await fetch(`https://${KOMMO_DOMAIN}/api/v4/leads`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${KOMMO_ACCESS_TOKEN}`,
      },
      body: JSON.stringify(leadData),
    });

    const responseData = await response.json();
    console.log('Kommo API response:', JSON.stringify(responseData, null, 2));

    if (!response.ok) {
      console.error('Kommo API error:', responseData);
      return {
        statusCode: response.status,
        headers,
        body: JSON.stringify({
          message: 'Error creating lead in Kommo CRM',
          error: responseData
        }),
      };
    }

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify(responseData),
    };
  } catch (error) {
    console.error('Error creating lead:', error);

    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ 
        message: 'Error creating lead in Kommo CRM',
        error: error instanceof Error ? error.message : 'Unknown error'
      }),
    };
  }
};

export { handler }; 