import { Handler } from '@netlify/functions';
import fetch from 'node-fetch';

const KOMMO_DOMAIN = process.env.KOMMO_DOMAIN;
const KOMMO_ACCESS_TOKEN = process.env.KOMMO_ACCESS_TOKEN;

interface KommoCustomField {
  field_code: string;
  values: Array<{ value: string }>;
}

interface KommoContact {
  name: string;
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
    tags: Array<{ name: string }>;
  };
}

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
    // Parse the incoming request body
    const leadData: KommoLeadData = JSON.parse(event.body || '{}');

    // Validate required environment variables
    if (!KOMMO_DOMAIN || !KOMMO_ACCESS_TOKEN) {
      throw new Error('Missing required environment variables');
    }

    console.log('Making request to Kommo API:', {
      url: `https://${KOMMO_DOMAIN}/api/v4/leads`,
      data: leadData
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
    console.log('Kommo API response:', responseData);

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