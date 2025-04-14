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

    const fullName = `${formData.firstName} ${formData.lastName}`;

    // Structure the data according to Kommo's API requirements
    const kommoData = {
      name: [{ value: fullName }],
      price: [{ value: 0 }],
      status_id: [{ value: 58844526 }],
      pipeline_id: [{ value: 7114094 }],
      responsible_user_id: [{ value: 0 }],
      _embedded: {
        contacts: [
          {
            name: fullName,
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
          }
        ],
        tags: [
          {
            name: "Website Contact Form"
          }
        ]
      },
      custom_fields_values: [
        {
          field_code: "DESCRIPTION",
          values: [{ value: formData.message || "Contact form submission" }]
        }
      ]
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