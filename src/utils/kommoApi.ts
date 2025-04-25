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
  if (isSubmitting) return;
  isSubmitting = true;

  try {
    console.log('Starting form submission with data:', formData);

    const lead = {
      name: `${formData.firstName} ${formData.lastName}`,
      price: 0,
      // IMPORTANT: These IDs must belong to the same pipeline in Kommo
      pipeline_id: 7114094,  // Verify this pipeline ID exists
      status_id: 58844526,   // This stage must belong to pipeline 7114094
      responsible_user_id: 9531198, // Verify this is an active user
      // request_id is used by Kommo for deduplication
      request_id: `web-${Date.now()}`,
      tag_ids: [123456], // Replace with your actual Website Contact Form tag ID
      custom_fields_values: formData.message
        ? [{
            field_code: "DESCRIPTION",
            values: [{ value: formData.message }]
          }]
        : [],
      _embedded: {
        contacts: [{
          first_name: formData.firstName,
          last_name: formData.lastName,
          custom_fields_values: [
            {
              field_code: "EMAIL",
              values: [{ 
                value: formData.email, 
                enum_code: "WORK"  // Available options: "WORK", "OTHER"
              }]
            },
            {
              field_code: "PHONE",
              values: [{ 
                value: formData.phone, 
                enum_code: "WORK"  // Available options: "WORK", "MOB", "OTHER"
              }]
            }
          ]
        }]
      }
    };

    console.log('Sending to Kommo:', JSON.stringify([lead], null, 2));

    const response = await fetch('/.netlify/functions/create-kommo-lead', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify([lead]), // Send as array of leads
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