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
          field_code: "MESSAGE",
          values: [{ value: formData.message }]
        }
      ],
      _embedded: {
        tags: [
          {
            name: "Website Contact Form"
          }
        ]
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