import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import fetch from 'node-fetch';
import type { Request, Response } from 'express';

dotenv.config();

const app = express();

// Enable CORS for our frontend
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: false,
  methods: ['POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Accept', 'Origin']
}));

// Parse JSON bodies
app.use(express.json());

interface LeadData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

app.post('/api/leads', async (req: Request<any, any, LeadData>, res: Response) => {
  try {
    const data: LeadData = req.body;
    const { firstName, lastName, email, phone, message } = data;

    const domain = process.env.VITE_KOMMO_DOMAIN;
    const secretKey = process.env.VITE_KOMMO_SECRET_KEY;
    const integrationId = process.env.VITE_KOMMO_INTEGRATION_ID;

    if (!domain || !secretKey || !integrationId) {
      console.error('Missing API configuration:', {
        hasDomain: !!domain,
        hasSecretKey: !!secretKey,
        hasIntegrationId: !!integrationId
      });
      return res.status(500).json({ error: 'Missing API configuration' });
    }

    const apiUrl = `https://${domain}/api/v4/leads`;

    console.log('Creating lead with data:', {
      url: apiUrl,
      name: `${firstName} ${lastName}`,
      email,
      phone
    });

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
      return res.status(response.status).json({ error: `API error: ${response.status}` });
    }

    const result = await response.json();
    return res.json(result);
  } catch (error) {
    console.error('Server error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 