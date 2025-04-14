
export const initScrollReveal = () => {
  const revealElements = document.querySelectorAll('.reveal');

  const reveal = () => {
    const windowHeight = window.innerHeight;
    
    revealElements.forEach((element) => {
      const elementPosition = element.getBoundingClientRect().top;
      const elementVisible = 150;
      
      if (elementPosition < windowHeight - elementVisible) {
        element.classList.add('active');
      }
    });
  };

  // Add initial check on load
  reveal();
  
  // Add scroll event listener
  window.addEventListener('scroll', reveal);
  
  // Remove event listener on cleanup
  return () => {
    window.removeEventListener('scroll', reveal);
  };
};
