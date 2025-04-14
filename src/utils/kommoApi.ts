interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

export async function createKommoLead(formData: ContactFormData) {
  try {
    console.log('Submitting form data:', formData);

    // Structure the data according to Kommo's API requirements
    const kommoData = {
      name: [{
        value: `${formData.firstName} ${formData.lastName}`
      }],
      created_at: [{
        value: Math.floor(Date.now() / 1000) // Current timestamp in seconds
      }],
      created_by: [{
        value: 0
      }],
      status_id: [{
        value: 58844526 // Your pipeline's first status ID
      }],
      pipeline_id: [{
        value: 7114094 // Your pipeline ID
      }],
      custom_fields_values: [
        {
          field_code: "EMAIL",
          values: [{ value: formData.email }]
        },
        {
          field_code: "PHONE",
          values: [{ value: formData.phone }]
        },
        {
          field_code: "DESCRIPTION", // Using standard field for message
          values: [{ value: formData.message }]
        }
      ],
      _embedded: {
        tags: [
          {
            name: "Website Contact Form"
          }
        ],
        contacts: [{
          first_name: formData.firstName,
          last_name: formData.lastName,
          custom_fields_values: [
            {
              field_code: "EMAIL",
              values: [{ value: formData.email }]
            },
            {
              field_code: "PHONE",
              values: [{ value: formData.phone }]
            }
          ]
        }]
      }
    };

    // Send to Netlify Function
    const response = await fetch('/.netlify/functions/create-kommo-lead', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(kommoData)
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Form submission failed: ${JSON.stringify(errorData)}`);
    }

    const data = await response.json();
    console.log('Form submission successful:', data);
    return data;
  } catch (error) {
    console.error('Form submission error:', error);
    throw error;
  }
} 