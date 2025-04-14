import { NextResponse } from 'next/server';

interface LeadData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

export async function POST(request: Request) {
  try {
    const data: LeadData = await request.json();
    const { firstName, lastName, email, phone, message } = data;

    const domain = process.env.VITE_KOMMO_DOMAIN;
    const secretKey = process.env.VITE_KOMMO_SECRET_KEY;
    const integrationId = process.env.VITE_KOMMO_INTEGRATION_ID;

    if (!domain || !secretKey || !integrationId) {
      return NextResponse.json(
        { error: 'Missing API configuration' },
        { status: 500 }
      );
    }

    const apiUrl = `https://${domain}/api/v4/leads`;

    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'X-Integration-Key': secretKey,
        'X-Integration-ID': integrationId
      },
      body: JSON.stringify({
        name: `${firstName} ${lastName}`,
        created_at: Math.floor(Date.now() / 1000),
        custom_fields_values: [
          {
            field_name: 'Email',
            values: [{ value: email }]
          },
          {
            field_name: 'Phone',
            values: [{ value: phone }]
          },
          {
            field_name: 'Message',
            values: [{ value: message }]
          }
        ],
        _embedded: {
          tags: [
            {
              name: "Website Contact Form"
            }
          ]
        }
      })
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error('KommoCRM API error:', errorData);
      
      return NextResponse.json(
        { error: `API error: ${response.status}` },
        { status: response.status }
      );
    }

    const result = await response.json();
    return NextResponse.json(result);
  } catch (error) {
    console.error('Server error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 