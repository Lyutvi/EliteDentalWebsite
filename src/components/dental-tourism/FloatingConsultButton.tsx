import React from 'react';
import { Calendar } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const FloatingConsultButton = () => {
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/');
    setTimeout(() => {
      const contactForm = document.getElementById('contact-form');
      const formInput = document.querySelector('form input[name="firstName"]');
      if (formInput) {
        const y = formInput.getBoundingClientRect().top + window.pageYOffset - 120;
        window.scrollTo({ top: y, behavior: 'smooth' });
        // Focus on the first input
        (formInput as HTMLInputElement).focus();
      }
    }, 100);
  };

  return (
    <div className="fixed bottom-6 left-6 md:hidden z-50">
      <a
        href="/#contact"
        onClick={handleClick}
        className="flex items-center justify-center gap-2 bg-dental text-white px-4 py-3 rounded-full shadow-lg hover:bg-dental-dark transition-colors duration-300"
      >
        <Calendar className="w-5 h-5" />
        <span className="font-medium">Book Free Consultation</span>
      </a>
    </div>
  );
};

export default FloatingConsultButton; 