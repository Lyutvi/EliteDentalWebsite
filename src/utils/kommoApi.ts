interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message?: string;
}

interface KommoLead {
  name: string;
  request_id: string;
  custom_fields_values?: Array<{
    field_code: string;
    values: Array<{ value: string }>;
  }>;
  _embedded: {
    contacts: Array<{
      first_name: string;
      last_name: string;
      custom_fields_values: Array<{
        field_code: string;
        values: Array<{
          value: string;
          enum_code?: "WORK" | "MOB" | "OTHER";
        }>;
      }>;
    }>;
  };
}

// Track if a request is in progress
let isSubmitting = false;

export const createKommoLead = async (formData: ContactFormData) => {
  if (isSubmitting) return;
  isSubmitting = true;

  try {
    console.log('Starting form submission with data:', formData);

    const lead: KommoLead = {
      name: `${formData.firstName} ${formData.lastName}`,
      request_id: `web-${Date.now()}`,
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

    // Add message if provided
    if (formData.message) {
      lead.custom_fields_values = [{
        field_code: "DESCRIPTION",
        values: [{ value: formData.message }]
      }];
    }

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