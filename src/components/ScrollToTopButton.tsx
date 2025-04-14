import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={cn(
        'fixed bottom-8 right-8 z-50 p-3 rounded-full bg-dental shadow-lg transition-all duration-300 hover:bg-dental-dark focus:outline-none focus:ring-2 focus:ring-dental focus:ring-offset-2',
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
      )}
      aria-label="Scroll to top"
    >
      <ChevronUp className="w-6 h-6 text-white" />
    </button>
  );
};

export default ScrollToTopButton; 