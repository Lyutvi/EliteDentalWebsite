import { Handler } from '@netlify/functions';
import fetch from 'node-fetch';

const KOMMO_DOMAIN = process.env.KOMMO_DOMAIN;
const KOMMO_ACCESS_TOKEN = process.env.KOMMO_ACCESS_TOKEN;

interface KommoCustomFieldValue {
  value: string | number;
}

interface KommoCustomField {
  field_id: number;
  values: KommoCustomFieldValue[];
}

interface KommoContact {
  first_name: string;
  last_name: string;
  custom_fields_values: KommoCustomField[];
}

interface KommoLeadData {
  name: string;
  price: number;
  status_id: number;
  pipeline_id: number;
  responsible_user_id: number;
  custom_fields_values: KommoCustomField[];
  _embedded: {
    contacts: KommoContact[];
  };
}

const validateLeadData = (data: any): data is KommoLeadData => {
  console.log('Starting validation of lead data');
  
  if (!data || typeof data !== 'object') {
    console.log('Data is not an object:', data);
    return false;
  }
  
  // Check required fields
  const requiredFields = ['name', 'price', 'status_id', 'pipeline_id', 'responsible_user_id'] as const;
  for (const field of requiredFields) {
    if (typeof data[field] === 'undefined') {
      console.log(`Missing required field: ${field}`);
      return false;
    }
  }

  // Validate types
  if (typeof data.name !== 'string') {
    console.log('Name is not a string:', data.name);
    return false;
  }
  if (typeof data.price !== 'number') {
    console.log('Price is not a number:', data.price);
    return false;
  }
  if (typeof data.status_id !== 'number') {
    console.log('Status ID is not a number:', data.status_id);
    return false;
  }
  if (typeof data.pipeline_id !== 'number') {
    console.log('Pipeline ID is not a number:', data.pipeline_id);
    return false;
  }
  if (typeof data.responsible_user_id !== 'number') {
    console.log('Responsible user ID is not a number:', data.responsible_user_id);
    return false;
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
    if (!field.field_id || !Array.isArray(field.values) || field.values.length === 0) {
      console.log('Invalid custom field structure:', field);
      return false;
    }
  }

  console.log('Lead data validation passed');
  return true;
};

// Store recent submissions to prevent duplicates
const recentSubmissions = new Map<string, number>();
const DUPLICATE_WINDOW_MS = 5000; // 5 seconds

const isDuplicateSubmission = (data: KommoLeadData): boolean => {
  // Create a unique key from the submission data
  const key = JSON.stringify({
    name: data.name,
    contact: data._embedded.contacts[0]
  });

  const now = Date.now();
  const lastSubmission = recentSubmissions.get(key);

  // Clean up old entries
  for (const [storedKey, timestamp] of recentSubmissions.entries()) {
    if (now - timestamp > DUPLICATE_WINDOW_MS) {
      recentSubmissions.delete(storedKey);
    }
  }

  if (lastSubmission && now - lastSubmission < DUPLICATE_WINDOW_MS) {
    console.log('Duplicate submission detected within window');
    return true;
  }

  recentSubmissions.set(key, now);
  return false;
};

const handler: Handler = async (event) => {
  console.log('Handler started - Request received');
  
  // Enable CORS
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
  };

  // Handle preflight requests
  if (event.httpMethod === 'OPTIONS') {
    console.log('Handling OPTIONS request');
    return {
      statusCode: 204,
      headers,
      body: '',
    };
  }

  // Only allow POST requests
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
    
    // Parse and validate the incoming request body
    const rawData = JSON.parse(event.body || '{}');
    console.log('Parsed request data:', JSON.stringify(rawData, null, 2));

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

    // Check for duplicate submissions
    if (isDuplicateSubmission(leadData)) {
      console.log('Duplicate submission rejected');
      return {
        statusCode: 409,
        headers,
        body: JSON.stringify({
          message: 'Duplicate submission',
          status: 'rejected'
        })
      };
    }

    // Validate required environment variables
    if (!KOMMO_DOMAIN || !KOMMO_ACCESS_TOKEN) {
      console.error('Missing environment variables');
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ message: 'Server configuration error' }),
      };
    }

    // Make the API request to Kommo
    const kommoResponse = await fetch(`https://${KOMMO_DOMAIN}/api/v4/leads`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${KOMMO_ACCESS_TOKEN}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(leadData)
    });

    const kommoData = await kommoResponse.json();

    if (!kommoResponse.ok) {
      console.error('Kommo API error:', kommoData);
      return {
        statusCode: kommoResponse.status,
        headers,
        body: JSON.stringify({
          message: 'Error creating lead in Kommo',
          kommoError: kommoData
        })
      };
    }

    console.log('Lead created successfully:', kommoData);
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        message: 'Lead created successfully',
        data: kommoData
      })
    };

  } catch (error) {
    console.error('Error processing request:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        message: 'Internal server error',
        error: error instanceof Error ? error.message : 'Unknown error'
      })
    };
  }
};

export { handler }; 