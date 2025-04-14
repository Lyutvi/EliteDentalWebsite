import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { initializeMetaPixel } from "@/utils/metaPixel";

interface CookieSettings {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
}

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [settings, setSettings] = useState<CookieSettings>({
    necessary: true, // Always required
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setShowBanner(true);
    } else {
      const savedSettings = JSON.parse(consent);
      setSettings(savedSettings);
    }
  }, []);

  const handleAcceptAll = () => {
    const allSettings: CookieSettings = {
      necessary: true,
      analytics: true,
      marketing: true,
    };
    saveSettings(allSettings);
  };

  const saveSettings = (newSettings: CookieSettings) => {
    localStorage.setItem("cookieConsent", JSON.stringify(newSettings));
    setSettings(newSettings);
    setShowBanner(false);
    setShowSettings(false);
    
    // Apply cookie settings
    if (newSettings.marketing) {
      // Initialize Meta Pixel
      initializeMetaPixel();
    }
    if (newSettings.analytics) {
      // Initialize analytics
      // Add your analytics initialization code here
    }
  };

  if (!showBanner && !showSettings) return null;

  return (
    <>
      {showBanner && (
        <div className="fixed bottom-0 left-0 right-0 bg-white p-4 shadow-lg border-t z-50">
          <div className="container mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex-1">
              <p className="text-sm text-gray-600">
                We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. 
                By clicking "Accept All", you consent to our use of cookies.
              </p>
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                onClick={() => {
                  setShowBanner(false);
                  setShowSettings(true);
                }}
              >
                Cookie Settings
              </Button>
              <Button onClick={handleAcceptAll}>Accept All</Button>
            </div>
          </div>
        </div>
      )}

      <Dialog open={showSettings} onOpenChange={setShowSettings}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Cookie Preferences</DialogTitle>
            <DialogDescription>
              Customize your cookie preferences. Some cookies are necessary for the website to function and cannot be disabled.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Necessary Cookies</Label>
                <p className="text-sm text-muted-foreground">
                  Required for the website to function properly.
                </p>
              </div>
              <Switch checked disabled />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Analytics Cookies</Label>
                <p className="text-sm text-muted-foreground">
                  Help us understand how visitors interact with our website.
                </p>
              </div>
              <Switch
                checked={settings.analytics}
                onCheckedChange={(checked) =>
                  setSettings({ ...settings, analytics: checked })
                }
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Marketing Cookies</Label>
                <p className="text-sm text-muted-foreground">
                  Used to deliver personalized ads and content via Meta.
                </p>
              </div>
              <Switch
                checked={settings.marketing}
                onCheckedChange={(checked) =>
                  setSettings({ ...settings, marketing: checked })
                }
              />
            </div>
          </div>
          <div className="flex justify-end gap-2">
            <Button variant="outline" onClick={() => setShowSettings(false)}>
              Cancel
            </Button>
            <Button onClick={() => saveSettings(settings)}>Save Preferences</Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CookieConsent; 