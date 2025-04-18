interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message?: string;
}

// Track if a request is in progress
let isSubmitting = false;

export const createKommoLead = async (formData: ContactFormData) => {
  // Prevent multiple simultaneous submissions
  if (isSubmitting) {
    console.log('Submission already in progress, skipping');
    return;
  }

  try {
    isSubmitting = true;
    console.log('Starting form submission with data:', formData);

    const kommoData = {
      name: [{ value: `${formData.firstName} ${formData.lastName}` }],
      price: [{ value: 0 }],
      status_id: [{ value: 58844526 }],
      pipeline_id: [{ value: 7114094 }],
      responsible_user_id: [{ value: 9531198 }],
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

    const response = await fetch('/.netlify/functions/create-kommo-lead', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(kommoData),
    });

    const responseData = await response.json();
    
    if (!response.ok) {
      console.error('Form submission error:', responseData);
      throw new Error(`Form submission failed: ${JSON.stringify(responseData)}`);
    }

    console.log('Form submission successful:', responseData);
    return responseData;
  } catch (error) {
    console.error('Form submission error:', error);
    throw error;
  } finally {
    isSubmitting = false;
  }
}; 