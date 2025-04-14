interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message?: string;
}

export const createKommoLead = async (formData: ContactFormData) => {
  console.log('Submitting form data: ', formData);

  const kommoData = {
    name: `${formData.firstName} ${formData.lastName}`,
    price: 0,
    status_id: 58844526,
    pipeline_id: 7114094,
    responsible_user_id: 9531198,
    _embedded: {
      contacts: [
        {
          name: `${formData.firstName} ${formData.lastName}`,
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
      tags: [{ name: "Website Contact Form" }]
    },
    custom_fields_values: formData.message ? [
      {
        field_code: "DESCRIPTION",
        values: [{ value: formData.message }]
      }
    ] : []
  };

  console.log('Sending to Kommo:', JSON.stringify(kommoData, null, 2));

  try {
    const response = await fetch('/.netlify/functions/create-kommo-lead', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(kommoData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Form submission error:', errorData);
      throw new Error(`Form submission failed: ${JSON.stringify(errorData)}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Form submission error:', error);
    throw error;
  }
}; 