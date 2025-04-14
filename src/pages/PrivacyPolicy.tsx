import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const PrivacyPolicy = () => {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-12 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm p-8">
            <h1 className="text-3xl font-bold text-dental-dark mb-8">Privacy Policy</h1>
            
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-dental-dark mb-4">1. Introduction</h2>
              <p className="text-gray-600 mb-4">
                Elite Dental Solutions ("we," "our," or "us") respects your privacy and is committed to protecting your personal data. 
                This privacy policy explains how we collect, use, and protect your personal information when you use our website and services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-dental-dark mb-4">2. Information We Collect</h2>
              <p className="text-gray-600 mb-4">We collect information that you provide directly to us, including:</p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
                <li>Name and contact information</li>
                <li>Medical and dental history</li>
                <li>Appointment requests and preferences</li>
                <li>Communications with us</li>
                <li>Payment information</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-dental-dark mb-4">3. How We Use Your Information</h2>
              <p className="text-gray-600 mb-4">We use your information to:</p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
                <li>Provide dental services and process appointments</li>
                <li>Communicate about your treatment</li>
                <li>Send appointment reminders</li>
                <li>Process payments</li>
                <li>Improve our services</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-dental-dark mb-4">4. Data Protection</h2>
              <p className="text-gray-600 mb-4">
                We implement appropriate security measures to protect your personal information from unauthorized access, 
                disclosure, alteration, or destruction. Your medical information is handled in accordance with applicable 
                healthcare privacy laws and regulations.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-dental-dark mb-4">5. Your Rights</h2>
              <p className="text-gray-600 mb-4">You have the right to:</p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Object to processing of your information</li>
                <li>Receive a copy of your information</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-dental-dark mb-4">6. Cookies and Tracking</h2>
              <p className="text-gray-600 mb-4">
                Our website uses cookies and similar tracking technologies to improve your browsing experience. 
                You can control cookie settings through your browser preferences.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-dental-dark mb-4">7. Contact Information</h2>
              <p className="text-gray-600 mb-4">
                For questions about this privacy policy or our privacy practices, please contact us at:<br />
                Email: info@elitedentalsolutions.com<br />
                Phone: +359 897 376 002
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-dental-dark mb-4">8. Updates to This Policy</h2>
              <p className="text-gray-600">
                We may update this privacy policy from time to time. The latest version will always be available on our website.
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default PrivacyPolicy; 