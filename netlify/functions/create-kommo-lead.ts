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
  if (!data || typeof data !== 'object') return false;
  
  // Check required array fields
  const arrayFields = ['name', 'price', 'status_id', 'pipeline_id', 'responsible_user_id'];
  for (const field of arrayFields) {
    if (!Array.isArray(data[field]) || !data[field][0]?.value) return false;
  }

  // Check embedded contacts
  if (!data._embedded?.contacts?.[0]) return false;
  const contact = data._embedded.contacts[0];
  if (!contact.name || !contact.first_name || !contact.last_name) return false;

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