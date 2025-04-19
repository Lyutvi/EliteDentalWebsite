declare global {
  interface Window {
    fbq: any;
    _fbInitialized?: boolean;
  }
}

const PIXEL_ID = '449312234890267';
const IS_DEVELOPMENT = process.env.NODE_ENV === 'development';

const isPixelAvailable = () => {
  return typeof window !== 'undefined' && window.fbq;
};

export const initializeMetaPixel = () => {
  try {
    if (!isPixelAvailable()) {
      console.warn('Meta Pixel not available');
      return;
    }

    if (window._fbInitialized) {
      console.warn('Meta Pixel already initialized');
      return;
    }

    window.fbq('init', PIXEL_ID);
    window.fbq('track', 'PageView');
    window._fbInitialized = true;

    if (IS_DEVELOPMENT) {
      console.log('Meta Pixel initialized successfully');
    }
  } catch (error) {
    console.error('Error initializing Meta Pixel:', error);
  }
};

export const trackPageView = () => {
  try {
    if (!isPixelAvailable()) return;
    window.fbq('track', 'PageView');
    if (IS_DEVELOPMENT) {
      console.log('Tracked PageView event');
    }
  } catch (error) {
    console.error('Error tracking page view:', error);
  }
};

// Track when users view specific service pages
export const trackServiceView = (serviceName: string, language: 'en' | 'bg' = 'en') => {
  try {
    if (!isPixelAvailable()) return;
    window.fbq('track', 'ViewContent', {
      content_type: 'dental_service',
      content_name: serviceName,
      language: language
    });
    if (IS_DEVELOPMENT) {
      console.log('Tracked ServiceView event:', { serviceName, language });
    }
  } catch (error) {
    console.error('Error tracking service view:', error);
  }
};

// Track contact form submissions
export const trackContactFormSubmission = (formType: string, language: 'en' | 'bg' = 'en') => {
  try {
    if (!isPixelAvailable()) return;
    window.fbq('track', 'Lead', {
      content_category: 'contact',
      content_name: formType,
      language: language
    });
    if (IS_DEVELOPMENT) {
      console.log('Tracked ContactForm submission:', { formType, language });
    }
  } catch (error) {
    console.error('Error tracking contact form submission:', error);
  }
};

// Track appointment requests
export const trackAppointmentRequest = (serviceType?: string, language: 'en' | 'bg' = 'en') => {
  try {
    if (!isPixelAvailable()) return;
    window.fbq('track', 'Schedule', {
      content_category: 'appointment',
      content_name: serviceType || 'general',
      language: language
    });
    if (IS_DEVELOPMENT) {
      console.log('Tracked Appointment request:', { serviceType, language });
    }
  } catch (error) {
    console.error('Error tracking appointment request:', error);
  }
};

// Track when users engage with pricing information
export const trackPricingView = (serviceType: string, language: 'en' | 'bg' = 'en') => {
  try {
    if (!isPixelAvailable()) return;
    window.fbq('track', 'ViewContent', {
      content_type: 'pricing',
      content_name: serviceType,
      language: language
    });
    if (IS_DEVELOPMENT) {
      console.log('Tracked Pricing view:', { serviceType, language });
    }
  } catch (error) {
    console.error('Error tracking pricing view:', error);
  }
};

// Track when users start filling out forms
export const trackFormStart = (formType: string, language: 'en' | 'bg' = 'en') => {
  try {
    if (!isPixelAvailable()) return;
    window.fbq('track', 'InitiateCheckout', {
      content_category: 'form_start',
      content_name: formType,
      language: language
    });
    if (IS_DEVELOPMENT) {
      console.log('Tracked Form start:', { formType, language });
    }
  } catch (error) {
    console.error('Error tracking form start:', error);
  }
};

// Track successful form completions
export const trackFormComplete = (formType: string, language: 'en' | 'bg' = 'en') => {
  try {
    if (!isPixelAvailable()) return;
    window.fbq('track', 'CompleteRegistration', {
      content_category: 'form_complete',
      content_name: formType,
      language: language
    });
    if (IS_DEVELOPMENT) {
      console.log('Tracked Form completion:', { formType, language });
    }
  } catch (error) {
    console.error('Error tracking form completion:', error);
  }
};

export const trackEvent = (eventName: string, params?: object) => {
  try {
    if (!isPixelAvailable()) return;
    window.fbq('track', eventName, params);
    if (IS_DEVELOPMENT) {
      console.log('Tracked custom event:', { eventName, params });
    }
  } catch (error) {
    console.error('Error tracking custom event:', error);
  }
}; 