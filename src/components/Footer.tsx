import React from 'react';
import { ChevronRight } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  
  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/');
    // Add a small delay to ensure navigation completes before scrolling
    setTimeout(() => {
      const contactForm = document.getElementById('contact-form');
      if (contactForm) {
        const yOffset = -100; // Offset to account for fixed header
        const y = contactForm.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }, 100);
  };
  
  return (
    <footer className="bg-dental-dark text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-dental-gray/30 to-transparent opacity-30"></div>
      <div className="absolute top-20 right-0 w-80 h-80 bg-dental/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-60 h-60 bg-dental-tertiary/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 mb-6">
              <img 
                src="/images/logo.png"
                alt="Elite Dental Solutions Logo"
                className="w-10 h-10 object-contain"
              />
              <span className="text-xl font-display font-bold">
                Elite Dental Solutions
              </span>
            </div>
            <p className="text-white/70">
              Premium dental care in Sofia, Bulgaria. We combine advanced technology with personalized 
              treatments to give you the perfect smile you deserve.
            </p>
            <div className="pt-4 flex space-x-3">
              <a 
                href="https://www.facebook.com/profile.php?id=61567153801029" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-9 h-9 rounded-full bg-dental/20 flex items-center justify-center hover:bg-dental transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a 
                href="https://x.com/ElitedentalS" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-9 h-9 rounded-full bg-dental/20 flex items-center justify-center hover:bg-dental transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a 
                href="https://www.instagram.com/elite.dental.solutions/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-9 h-9 rounded-full bg-dental/20 flex items-center justify-center hover:bg-dental transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-display font-bold mb-6 relative after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-1 after:bg-dental after:rounded-full">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="flex items-center text-white/70 hover:text-dental transition-colors">
                  <ChevronRight size={16} className="mr-1" />
                  <span>Home</span>
                </a>
              </li>
              <li>
                <a href="#about" className="flex items-center text-white/70 hover:text-dental transition-colors">
                  <ChevronRight size={16} className="mr-1" />
                  <span>About Us</span>
                </a>
              </li>
              <li>
                <a href="#services" className="flex items-center text-white/70 hover:text-dental transition-colors">
                  <ChevronRight size={16} className="mr-1" />
                  <span>Services</span>
                </a>
              </li>
              <li>
                <a href="#testimonials" className="flex items-center text-white/70 hover:text-dental transition-colors">
                  <ChevronRight size={16} className="mr-1" />
                  <span>Happy Clients</span>
                </a>
              </li>
              <li>
                <a href="#gallery" className="flex items-center text-white/70 hover:text-dental transition-colors">
                  <ChevronRight size={16} className="mr-1" />
                  <span>Gallery</span>
                </a>
              </li>
              <li>
                <a href="#contact" className="flex items-center text-white/70 hover:text-dental transition-colors">
                  <ChevronRight size={16} className="mr-1" />
                  <span>Contact Us</span>
                </a>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-lg font-display font-bold mb-6 relative after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-1 after:bg-dental after:rounded-full">
              Our Services
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="/implantology" className="flex items-center text-white/70 hover:text-dental transition-colors">
                  <ChevronRight size={16} className="mr-1" />
                  <span>Implantology</span>
                </a>
              </li>
              <li>
                <a href="/endodontics" className="flex items-center text-white/70 hover:text-dental transition-colors">
                  <ChevronRight size={16} className="mr-1" />
                  <span>Endodontics</span>
                </a>
              </li>
              <li>
                <a href="/oral-surgery" className="flex items-center text-white/70 hover:text-dental transition-colors">
                  <ChevronRight size={16} className="mr-1" />
                  <span>Oral Surgery</span>
                </a>
              </li>
              <li>
                <a href="/periodontology" className="flex items-center text-white/70 hover:text-dental transition-colors">
                  <ChevronRight size={16} className="mr-1" />
                  <span>Periodontology</span>
                </a>
              </li>
              <li>
                <a href="/orthodontics" className="flex items-center text-white/70 hover:text-dental transition-colors">
                  <ChevronRight size={16} className="mr-1" />
                  <span>Orthodontics</span>
                </a>
              </li>
              <li>
                <a href="/prosthetics" className="flex items-center text-white/70 hover:text-dental transition-colors">
                  <ChevronRight size={16} className="mr-1" />
                  <span>Prosthetics</span>
                </a>
              </li>
            </ul>
          </div>
          
          {/* Questions Section (Formerly Newsletter) */}
          <div>
            <h4 className="text-lg font-display font-bold mb-6 relative after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-1 after:bg-dental after:rounded-full">
              Have Questions?
            </h4>
            <p className="text-white/70 mb-4">
              We're here to help! Contact us for any questions about our dental services or to schedule an appointment.
            </p>
            <a 
              href="/"
              className="w-full btn-shine inline-block text-center"
              onClick={handleContactClick}
            >
              Contact Us
            </a>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <div className="text-white/70 text-sm">
            © {currentYear} Elite Dental Solutions. All rights reserved.
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <div className="flex items-center space-x-4">
              <Link 
                to="/privacy-policy" 
                className="text-white/70 hover:text-white transition-colors duration-300"
              >
                Privacy Policy
              </Link>
            </div>
            <Link 
              to="/terms-of-service"
              className="text-white/70 hover:text-white transition-colors duration-300"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
