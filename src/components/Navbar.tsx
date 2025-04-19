import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import LanguageSwitcher from './LanguageSwitcher';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
        document.documentElement.style.setProperty('--navbar-height', '56px');
      } else {
        setScrolled(false);
        document.documentElement.style.setProperty('--navbar-height', '72px');
      }
    };

    // Set initial navbar height
    document.documentElement.style.setProperty('--navbar-height', scrolled ? '56px' : '72px');

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.documentElement.style.removeProperty('--navbar-height');
    };
  }, [scrolled]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? 'hidden' : '';
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = '';
  };

  // Cleanup effect to ensure body scroll is restored when component unmounts
  useEffect(() => {
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  const handleHomeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleServiceClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'instant'
    });
  };

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    
    // Get window width for mobile detection
    const isMobile = window.innerWidth < 768;
    
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const contactForm = document.getElementById('contact-form');
        const formSection = document.getElementById('contact-form-section');
        if (isMobile && formSection) {
          const y = formSection.getBoundingClientRect().top + window.pageYOffset - 80;
          window.scrollTo({ top: y, behavior: 'smooth' });
        } else if (contactForm) {
          const y = contactForm.getBoundingClientRect().top + window.pageYOffset - 100;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 200);
    } else {
      const contactForm = document.getElementById('contact-form');
      const formSection = document.getElementById('contact-form-section');
      if (isMobile && formSection) {
        const y = formSection.getBoundingClientRect().top + window.pageYOffset - 80;
        window.scrollTo({ top: y, behavior: 'smooth' });
      } else if (contactForm) {
        const y = contactForm.getBoundingClientRect().top + window.pageYOffset - 100;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
    
    setIsMenuOpen(false);
  };

  const serviceLinks = [
    { name: 'Implantology', href: '/implantology', description: 'High-quality, long-term tooth replacements' },
    { name: 'Endodontics', href: '/endodontics', description: 'Advanced root canal treatments' },
    { name: 'Oral Surgery', href: '/oral-surgery', description: 'Precision oral surgical procedures' },
    { name: 'Periodontology', href: '/periodontology', description: 'Specialized gum treatments and care' },
    { name: 'Orthodontics', href: '/orthodontics', description: 'Expert treatments for misaligned teeth' },
    { name: 'Bonding', href: '/bonding', description: 'Cosmetic repairs with tooth-colored resin' },
    { name: 'Prosthetics', href: '/prosthetics', description: 'Custom-designed bridges and dentures' },
    { name: 'Lip Filler', href: '/lip-filler', description: 'Premium lip augmentation treatments' },
    { name: 'Cariesology', href: '/cariesology', description: 'Prevention and treatment of tooth decay' },
    { name: 'Teeth Whitening', href: '/teeth-whitening', description: 'Professional teeth whitening for a brighter smile' },
    { name: 'Dental Tourism', href: '/dental-tourism', description: 'Comprehensive dental care packages for international patients' },
  ];

  const mainNavLinks = [
    { name: 'Home', href: '/#home', onClick: handleHomeClick },
    { name: 'About Us', href: '/#about' },
    { name: 'Services', href: '/#services', isServicesMenu: true },
    { name: 'Happy Patients', href: '/#testimonials' },
    { name: 'Gallery', href: '/#gallery' },
    { name: 'Contact Us', href: '/#contact', onClick: handleContactClick },
  ];

  return (
    <nav 
      className={cn(
        'fixed top-0 left-0 w-full transition-all duration-300',
        scrolled 
          ? 'bg-white/90 shadow-md backdrop-blur-md py-2' 
          : 'bg-transparent py-4'
      )}
      style={{ zIndex: 9999 }}
    >
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="flex items-center justify-between">
          <a 
            href="/#home" 
            className="flex items-center space-x-2"
            onClick={handleHomeClick}
          >
            <img 
              src="/images/logo.png"
              alt="Elite Dental Solutions Logo"
              className="w-10 h-10 object-contain"
            />
            <span className="logo-text text-sm md:text-xl">
              Elite Dental Solutions
            </span>
          </a>

          <div className="flex items-center space-x-4">
            {/* Mobile Language Switcher */}
            <div className="lg:hidden">
              <LanguageSwitcher />
            </div>
            <button 
              className="lg:hidden text-dental-dark hover:text-dental transition-colors duration-300 relative z-50"
              onClick={toggleMenu}
              aria-label="Toggle mobile menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          <div className="hidden lg:flex items-center space-x-8">
            <NavigationMenu>
              <NavigationMenuList>
                {mainNavLinks.map((link, index) => {
                  if (link.isServicesMenu) {
                    return (
                      <NavigationMenuItem key={link.name}>
                        <NavigationMenuTrigger className="nav-link relative text-dental-dark hover:text-dental transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:w-0 after:bg-dental-coral after:transition-all after:duration-300 hover:after:w-full px-4 py-2 text-base bg-transparent hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent">
                          Services
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                            {serviceLinks.map((service) => (
                              <li key={service.name}>
                                <NavigationMenuLink asChild>
                                  <Link
                                    to={service.href}
                                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                    onClick={handleServiceClick}
                                  >
                                    <div className="text-sm font-medium leading-none">{service.name}</div>
                                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                      {service.description}
                                    </p>
                                  </Link>
                                </NavigationMenuLink>
                              </li>
                            ))}
                            <li className="col-span-2 mt-3 border-t pt-3">
                              <NavigationMenuLink asChild>
                                <a
                                  href="/#services"
                                  className="flex items-center justify-center w-full select-none rounded-md p-3 text-sm font-medium leading-none no-underline outline-none transition-colors bg-dental text-white hover:bg-dental-dark focus:bg-dental-dark"
                                >
                                  View All Services
                                </a>
                              </NavigationMenuLink>
                            </li>
                          </ul>
                        </NavigationMenuContent>
                      </NavigationMenuItem>
                    );
                  }
                  
                  const isExternalPage = !link.href.startsWith('/#');
                  
                  if (isExternalPage) {
                    return (
                      <NavigationMenuItem key={link.name}>
                        <Link
                          to={link.href}
                          className={`relative text-dental-dark hover:text-dental font-medium transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:w-0 ${index % 3 === 0 ? 'after:bg-dental' : index % 3 === 1 ? 'after:bg-dental-coral' : 'after:bg-dental-mint'} after:transition-all after:duration-300 hover:after:w-full px-4 py-2 inline-block`}
                        >
                          {link.name}
                        </Link>
                      </NavigationMenuItem>
                    );
                  } else {
                    return (
                      <NavigationMenuItem key={link.name}>
                        <a
                          href={link.href}
                          className={`relative text-dental-dark hover:text-dental font-medium transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:w-0 ${index % 3 === 0 ? 'after:bg-dental' : index % 3 === 1 ? 'after:bg-dental-coral' : 'after:bg-dental-mint'} after:transition-all after:duration-300 hover:after:w-full px-4 py-2 inline-block`}
                          onClick={link.onClick || undefined}
                        >
                          {link.name}
                        </a>
                      </NavigationMenuItem>
                    );
                  }
                })}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-dental" />
              <span>+359 897 800 430</span>
            </div>
            {/* Desktop Language Switcher */}
            <div className="hidden lg:block">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </div>

      <div 
        className={cn(
          'fixed left-0 right-0 bg-white/95 backdrop-blur-sm lg:hidden transition-all duration-300 ease-in-out overflow-y-auto h-[calc(100vh-var(--navbar-height))]',
          isMenuOpen ? 'visible opacity-100' : 'invisible opacity-0'
        )}
        style={{ 
          top: 'var(--navbar-height)',
          zIndex: 9998,
          WebkitOverflowScrolling: 'touch'
        }}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4 pb-20">
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-dental" />
            <span>+359 897 800 430</span>
          </div>

          {mainNavLinks.map((link, index) => {
            const isExternalPage = !link.href.startsWith('/#');
            
            if (isExternalPage) {
              return (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`text-dental-dark hover:text-dental font-medium py-2 border-b ${index % 3 === 0 ? 'border-dental/30' : index % 3 === 1 ? 'border-dental-coral/30' : 'border-dental-mint/30'} transition-colors duration-300`}
                  onClick={() => closeMenu()}
                >
                  {link.name}
                </Link>
              );
            } else {
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-dental-dark hover:text-dental font-medium py-2 border-b ${index % 3 === 0 ? 'border-dental/30' : index % 3 === 1 ? 'border-dental-coral/30' : 'border-dental-mint/30'} transition-colors duration-300`}
                  onClick={(e) => {
                    closeMenu();
                    if (link.onClick) {
                      link.onClick(e);
                    }
                  }}
                >
                  {link.name}
                </a>
              );
            }
          })}
          
          <div className="py-2 border-b border-dental/30">
            <div className="font-medium text-dental-dark mb-2">Services</div>
            <div className="pl-4 space-y-2">
              {serviceLinks.map((service) => (
                <Link
                  key={service.name}
                  to={service.href}
                  className="block text-dental-dark/80 hover:text-dental transition-colors duration-300"
                  onClick={() => closeMenu()}
                >
                  {service.name}
                </Link>
              ))}
              <a
                href="/#services"
                className="block text-dental-dark/80 hover:text-dental transition-colors duration-300"
                onClick={() => closeMenu()}
              >
                All Services
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
