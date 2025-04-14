import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";
import { trackFormStart, trackFormComplete, trackContactFormSubmission } from "@/utils/metaPixel";
import { createKommoLead } from "@/utils/kommoApi";
import MapComponent from './GoogleMap';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
}

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First Name is required';
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\+?[0-9\s-()]{8,}$/.test(formData.phone)) {
      newErrors.phone = 'Invalid phone number';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (Object.values(formData).every(val => val === '')) {
      trackFormStart('contact');
    }
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields correctly.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      await createKommoLead(formData);
      
      // Track successful form submission
      trackContactFormSubmission('contact');
      trackFormComplete('contact');
      
      toast({
        title: "Message Sent!",
        description: "We'll get back to you as soon as possible."
      });
      
      // Clear form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
      });
      setErrors({});
    } catch (error) {
      console.error('Form submission error:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact-form" className="py-20 bg-dental-light/5 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-dental-light/5"></div>
      <div className="absolute top-40 left-10 w-72 h-72 bg-dental-mint/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-60 h-60 bg-dental/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-gradient-primary inline-block relative after:content-[''] after:absolute after:-bottom-2 after:left-1/4 after:right-1/4 after:h-1 after:bg-dental-tertiary after:rounded-full reveal" data-direction="up">
            CONTACT US
          </h2>
          <p className="text-xl text-dental-dark/80 max-w-3xl mx-auto reveal" data-direction="up">
            We're here to answer your questions and help you schedule your visit
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="reveal" data-direction="left">
            {/* Contact Info Section */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-dental-gray/10">
              <h3 className="text-2xl font-display font-bold mb-6 text-dental-dark">Get in Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone className="w-5 h-5 mt-1 text-dental" />
                  <div className="ml-4">
                    <h4 className="font-medium text-dental-dark">Phone</h4>
                    <p className="text-dental-dark/80">+359 88 952 0202</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="w-5 h-5 mt-1 text-dental" />
                  <div className="ml-4">
                    <h4 className="font-medium text-dental-dark">Email</h4>
                    <p className="text-dental-dark/80">office@elitedentalsolutions.eu</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 mt-1 text-dental" />
                  <div className="ml-4">
                    <h4 className="font-medium text-dental-dark">Location</h4>
                    <p className="text-dental-dark/80">
                      ul. "Tsar Asen" 64, <br />
                      Plovdiv, Bulgaria
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="w-5 h-5 mt-1 text-dental" />
                  <div className="ml-4">
                    <h4 className="font-medium text-dental-dark">Working Hours</h4>
                    <p className="text-dental-dark/80">
                      Monday - Friday: 9:00 - 19:00 <br />
                      Saturday: By Appointment
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Map Component */}
              <div className="mt-8">
                <MapComponent />
              </div>
            </div>
          </div>
          
          <div className="reveal" data-direction="right">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-dental-gray/10">
              <h3 className="text-2xl font-display font-bold mb-6 text-dental-dark">Contact Us</h3>
              
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                {/* Netlify Forms hidden input */}
                <input type="hidden" name="form-name" value="contact" />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-dental-dark mb-2">
                      First Name*
                    </label>
                    <input 
                      type="text" 
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg bg-white border-2 ${errors.firstName ? 'border-red-500' : 'border-dental-gray/30'} focus:outline-none focus:ring-2 focus:ring-dental focus:border-transparent transition shadow-sm`}
                      required 
                    />
                    {errors.firstName && (
                      <p className="mt-1 text-sm text-red-500">{errors.firstName}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-dental-dark mb-2">
                      Last Name*
                    </label>
                    <input 
                      type="text" 
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg bg-white border-2 ${errors.lastName ? 'border-red-500' : 'border-dental-gray/30'} focus:outline-none focus:ring-2 focus:ring-dental focus:border-transparent transition shadow-sm`}
                      required 
                    />
                    {errors.lastName && (
                      <p className="mt-1 text-sm text-red-500">{errors.lastName}</p>
                    )}
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-dental-dark mb-2">
                      Email*
                    </label>
                    <input 
                      type="email" 
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg bg-white border-2 ${errors.email ? 'border-red-500' : 'border-dental-gray/30'} focus:outline-none focus:ring-2 focus:ring-dental focus:border-transparent transition shadow-sm`}
                      required 
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-dental-dark mb-2">
                      Phone*
                    </label>
                    <input 
                      type="tel" 
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg bg-white border-2 ${errors.phone ? 'border-red-500' : 'border-dental-gray/30'} focus:outline-none focus:ring-2 focus:ring-dental focus:border-transparent transition shadow-sm`}
                      required 
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
                    )}
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-dental-dark mb-2">
                    Message
                  </label>
                  <textarea 
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5} 
                    className="w-full px-4 py-3 rounded-lg bg-white border-2 border-dental-gray/30 focus:outline-none focus:ring-2 focus:ring-dental focus:border-transparent transition shadow-sm" 
                  ></textarea>
                </div>
                
                <div>
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className={`btn-shine group w-full flex items-center justify-center ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    {isSubmitting ? 'Sending...' : 'Submit'}
                    <Send size={18} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>
                
                <p className="text-xs text-dental-dark/70 text-center">
                  By submitting this form, you agree to our <a href="/privacy-policy" className="text-dental hover:underline">Privacy Policy</a>.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
