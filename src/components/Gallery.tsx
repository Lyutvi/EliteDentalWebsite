import React, { useState } from 'react';
import { X } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages = [
    {
      id: 1,
      src: "/images/IMG_3984.jpeg",
      alt: "Elite Dental Solutions clinic interior",
      category: "Clinic"
    },
    {
      id: 2,
      src: "/images/IMG_3985.jpeg",
      alt: "Modern dental treatment room",
      category: "Clinic"
    },
    {
      id: 3,
      src: "/images/IMG_3986.jpeg",
      alt: "State-of-the-art dental equipment",
      category: "Equipment"
    },
    {
      id: 4,
      src: "/images/IMG_3987.jpeg",
      alt: "Advanced dental technology",
      category: "Equipment"
    },
    {
      id: 5,
      src: "/images/IMG_3989.jpeg",
      alt: "Dental consultation room",
      category: "Clinic"
    },
    {
      id: 6,
      src: "/images/IMG_3991.jpeg",
      alt: "Dental clinic reception area",
      category: "Clinic"
    },
    {
      id: 7,
      src: "/images/x-ray.jpeg",
      alt: "Advanced dental X-ray technology",
      category: "Technology"
    },
    {
      id: 8,
      src: "/images/IMG_3839.jpeg",
      alt: "Dental practice environment",
      category: "Clinic"
    },
    {
      id: 9,
      src: "/images/IMG_3878.jpeg",
      alt: "Modern dental facilities",
      category: "Clinic"
    },
    {
      id: 10,
      src: "/images/IMG_3958.jpeg",
      alt: "Advanced dental workspace",
      category: "Equipment"
    },
    {
      id: 11,
      src: "/images/IMG_3962.jpeg",
      alt: "Professional dental setup",
      category: "Equipment"
    },
    {
      id: 12,
      src: "/images/IMG_3967.jpeg",
      alt: "State-of-the-art dental office",
      category: "Clinic"
    }
  ];

  const openModal = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto'; // Restore scrolling
  };

  // Navigation within the modal
  const nextImage = () => {
    if (selectedImage === null) return;
    setSelectedImage((selectedImage + 1) % galleryImages.length);
  };

  const prevImage = () => {
    if (selectedImage === null) return;
    setSelectedImage((selectedImage - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <section id="gallery" className="py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-dental-light/5 to-white"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-dental-mint/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-dental/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-gradient-primary inline-block relative after:content-[''] after:absolute after:-bottom-2 after:left-1/4 after:right-1/4 after:h-1 after:bg-dental-tertiary after:rounded-full reveal" data-direction="up">
            PHOTO GALLERY
          </h2>
          <p className="text-xl text-dental-dark/80 max-w-3xl mx-auto reveal" data-direction="up">
            Explore our collection of beautiful smile transformations
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 reveal" data-direction="up">
          {galleryImages.map((image, index) => (
            <div 
              key={image.id} 
              className="relative group overflow-hidden rounded-xl shadow-card cursor-pointer transition-transform duration-300 hover:-translate-y-2"
              onClick={() => openModal(index)}
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dental-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <div>
                  <span className="text-xs text-dental-light uppercase">{image.category}</span>
                  <h4 className="text-white font-medium">{image.alt}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Full Screen Modal */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-dental-dark/95 z-50 flex items-center justify-center p-4">
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 text-white hover:text-dental-tertiary transition-colors"
              aria-label="Close gallery"
            >
              <X size={24} />
            </button>
            
            <img 
              src={galleryImages[selectedImage].src} 
              alt={galleryImages[selectedImage].alt} 
              className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-blue-glow-lg"
            />
            
            {/* Navigation Arrows */}
            <button 
              onClick={prevImage}
              className="absolute left-4 bg-white/10 hover:bg-white/20 rounded-full p-2 text-white transition-colors"
              aria-label="Previous image"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
            </button>
            <button 
              onClick={nextImage}
              className="absolute right-4 bg-white/10 hover:bg-white/20 rounded-full p-2 text-white transition-colors"
              aria-label="Next image"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
