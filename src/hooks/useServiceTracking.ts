import { useEffect } from 'react';
import { trackServiceView, trackAppointmentRequest } from '@/utils/metaPixel';

export const useServiceTracking = (serviceName: string) => {
  useEffect(() => {
    // Track service page view
    trackServiceView(serviceName);
  }, [serviceName]);

  const handleAppointmentClick = () => {
    trackAppointmentRequest(serviceName);
  };

  return {
    handleAppointmentClick
  };
}; 