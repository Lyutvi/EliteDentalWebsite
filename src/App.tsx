import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import ScrollToTop from "./components/ScrollToTop";
import ScrollToTopButton from "./components/ScrollToTopButton";
import CookieConsent from "./components/CookieConsent";
import { trackPageView, trackServiceView } from "@/utils/metaPixel";
import Index from "./pages/Index";
import Implantology from "./pages/Implantology";
import Endodontics from "./pages/Endodontics";
import OralSurgery from "./pages/OralSurgery";
import Periodontology from "./pages/Periodontology";
import Orthodontics from "./pages/Orthodontics";
import Bonding from "./pages/Bonding";
import Prosthetics from "./pages/Prosthetics";
import LipFiller from "./pages/LipFiller";
import Cariesology from "./pages/Cariesology";
import TeethWhitening from "./pages/TeethWhitening";
import DentalTourism from "./pages/DentalTourism";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const servicePages = {
  '/implantology': 'Implantology',
  '/endodontics': 'Endodontics',
  '/oral-surgery': 'Oral Surgery',
  '/periodontology': 'Periodontology',
  '/orthodontics': 'Orthodontics',
  '/bonding': 'Dental Bonding',
  '/prosthetics': 'Dental Prosthetics',
  '/lip-filler': 'Lip Filler',
  '/cariesology': 'Cariesology',
  '/teeth-whitening': 'Teeth Whitening',
  '/dental-tourism': 'Dental Tourism'
};

const PageViewTracker = () => {
  const location = useLocation();

  useEffect(() => {
    const cookieConsent = localStorage.getItem("cookieConsent");
    if (cookieConsent) {
      const settings = JSON.parse(cookieConsent);
      if (settings.marketing) {
        // Track general page view
        trackPageView();
        
        // Track service-specific views
        const serviceName = servicePages[location.pathname as keyof typeof servicePages];
        if (serviceName) {
          trackServiceView(serviceName);
        }
      }
    }
  }, [location]);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <ScrollToTopButton />
        <CookieConsent />
        <PageViewTracker />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/implantology" element={<Implantology />} />
          <Route path="/endodontics" element={<Endodontics />} />
          <Route path="/oral-surgery" element={<OralSurgery />} />
          <Route path="/periodontology" element={<Periodontology />} />
          <Route path="/orthodontics" element={<Orthodontics />} />
          <Route path="/bonding" element={<Bonding />} />
          <Route path="/prosthetics" element={<Prosthetics />} />
          <Route path="/lip-filler" element={<LipFiller />} />
          <Route path="/cariesology" element={<Cariesology />} />
          <Route path="/teeth-whitening" element={<TeethWhitening />} />
          <Route path="/dental-tourism" element={<DentalTourism />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
