import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const TermsOfService = () => {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-12 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm p-8">
            <h1 className="text-3xl font-bold text-dental-dark mb-8">Terms of Service</h1>
            
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-dental-dark mb-4">1. Agreement to Terms</h2>
              <p className="text-gray-600 mb-4">
                By accessing and using the services of Elite Dental Solutions ("we," "our," or "us"), 
                you agree to be bound by these Terms of Service. If you do not agree to these terms, 
                please do not use our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-dental-dark mb-4">2. Description of Services</h2>
              <p className="text-gray-600 mb-4">
                We provide dental and oral healthcare services, including but not limited to:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
                <li>Dental examinations and consultations</li>
                <li>Preventive dental care</li>
                <li>Restorative treatments</li>
                <li>Cosmetic dental procedures</li>
                <li>Oral surgery</li>
                <li>Emergency dental care</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-dental-dark mb-4">3. Appointments and Cancellations</h2>
              <p className="text-gray-600 mb-4">
                We require 24 hours notice for appointment cancellations. Late cancellations or missed 
                appointments may incur a fee. We reserve the right to request a deposit for certain 
                procedures or treatments.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-dental-dark mb-4">4. Payment Terms</h2>
              <p className="text-gray-600 mb-4">
                Payment is required at the time of service unless other arrangements have been made. 
                We accept various payment methods including cash, credit cards, and approved payment plans. 
                Insurance claims are the responsibility of the patient.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-dental-dark mb-4">5. Medical Information</h2>
              <p className="text-gray-600 mb-4">
                You agree to provide accurate and complete medical history information. Failure to disclose 
                relevant medical information may affect your treatment outcomes and could be dangerous to 
                your health.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-dental-dark mb-4">6. Treatment Decisions</h2>
              <p className="text-gray-600 mb-4">
                While we provide professional recommendations, you have the right to make informed decisions 
                about your treatment. We will explain treatment options, risks, and benefits to help you 
                make these decisions.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-dental-dark mb-4">7. Website Use</h2>
              <p className="text-gray-600 mb-4">
                Our website is for informational purposes only. While we strive to provide accurate 
                information, it should not be considered medical advice. Always consult with a dental 
                professional for specific medical advice.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-dental-dark mb-4">8. Limitation of Liability</h2>
              <p className="text-gray-600 mb-4">
                We strive to provide the highest quality dental care but cannot guarantee specific 
                outcomes. We are not liable for any indirect, consequential, or incidental damages 
                related to our services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-dental-dark mb-4">9. Changes to Terms</h2>
              <p className="text-gray-600">
                We reserve the right to modify these terms at any time. Changes will be effective 
                immediately upon posting to our website. Continued use of our services constitutes 
                acceptance of modified terms.
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

export default TermsOfService; 