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

    // Structure the data to match KommoCRM's expectations
    const formattedData = {
      _kommo: {
        name: `${formData.firstName} ${formData.lastName}`,
        custom_fields_values: [
          {
            field_name: 'Email',
            values: [{ value: formData.email }]
          },
          {
            field_name: 'Phone',
            values: [{ value: formData.phone }]
          },
          {
            field_name: 'Message',
            values: [{ value: formData.message }]
          }
        ],
        tags: ["Website Contact Form"]
      },
      // Keep original fields for email notifications
      name: `${formData.firstName} ${formData.lastName}`,
      email: formData.email,
      phone: formData.phone,
      message: formData.message
    };

    const response = await fetch('https://formspree.io/f/xdoqbwrw', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(formattedData)
    });

    if (!response.ok) {
      throw new Error(`Form submission failed: ${response.status}`);
    }

    const data = await response.json();
    console.log('Form submission successful:', data);
    return data;
  } catch (error) {
    console.error('Form submission error:', error);
    throw error;
  }
} 