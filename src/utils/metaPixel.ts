declare global {
  interface Window {
    fbq: any;
  }
}

const PIXEL_ID = '449312234890267';

export const initializeMetaPixel = () => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('init', PIXEL_ID);
    window.fbq('track', 'PageView');
  }
};

export const trackPageView = () => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'PageView');
  }
};

// Track when users view specific service pages
export const trackServiceView = (serviceName: string) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'ViewContent', {
      content_type: 'dental_service',
      content_name: serviceName
    });
  }
};

// Track contact form submissions
export const trackContactFormSubmission = (formType: string) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'Lead', {
      content_category: 'contact',
      content_name: formType
    });
  }
};

// Track appointment requests
export const trackAppointmentRequest = (serviceType?: string) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'Schedule', {
      content_category: 'appointment',
      content_name: serviceType || 'general'
    });
  }
};

// Track when users engage with pricing information
export const trackPricingView = (serviceType: string) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'ViewContent', {
      content_type: 'pricing',
      content_name: serviceType
    });
  }
};

// Track when users start filling out forms
export const trackFormStart = (formType: string) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'InitiateCheckout', {
      content_category: 'form_start',
      content_name: formType
    });
  }
};

// Track successful form completions
export const trackFormComplete = (formType: string) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'CompleteRegistration', {
      content_category: 'form_complete',
      content_name: formType
    });
  }
};

export const trackEvent = (eventName: string, params?: object) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', eventName, params);
  }
}; 