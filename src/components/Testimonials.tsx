import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { HoverCard, HoverCardTrigger, HoverCardContent } from '@/components/ui/hover-card';

const Testimonials = () => {
  const allTestimonials = [
    // Google Reviews
    {
      id: 'g1',
      content: "Nothing short of perfect will do for this Clinic. Their attention to detail is second to none. The staff are so professional yet caring. English is widely spoken by all.",
      name: "Garry Gariside",
      type: "google",
      rating: 5,
      timeAgo: "4 weeks ago",
      initial: "G",
      bgColor: "bg-dental-tertiary/20",
      textColor: "text-dental-tertiary"
    },
    {
      id: 'g2',
      content: "I had the immense pleasure of receiving treatment at Elite Dental Solutions under the care of Dr. Hadzhialish, and I couldn't be more thrilled with the results. I opted for the All-on-4 implant procedure, and from the very beginning, I felt in safe hands.",
      name: "Olen Sr12",
      type: "google",
      rating: 5,
      timeAgo: "2 months ago",
      initial: "O",
      bgColor: "bg-dental-gold/20",
      textColor: "text-dental-dark"
    },
    {
      id: 'g3',
      content: "The clinic was immaculate. Doctors friendly and efficient. Very happy with the results. Couldn't have been looked after better.",
      name: "Loz Borg",
      type: "google",
      rating: 5,
      timeAgo: "3 months ago",
      initial: "L",
      bgColor: "bg-dental-mint/20",
      textColor: "text-dental-mint"
    },
    // Regular testimonials
    {
      id: 1,
      content: "I was nervous about getting dental implants, but the team at Elite Dental Solutions made the entire process smooth and stress-free. From my first consultation to the final result, they were professional, caring, and attentive. I now have a beautiful smile that I'm proud of, and I couldn't be happier with the outcome!",
      name: "Lynn M",
      location: "United Kingdom",
      rating: 5,
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80"
    },
    {
      id: 2,
      content: "I visited Elite Dental Solutions for teeth whitening before my wedding, and the results were incredible! The staff was so friendly, and they really took the time to explain the procedure to me. My teeth are several shades brighter, and I felt so confident on my big day. Thank you for making my smile picture-perfect!",
      name: "George L",
      location: "Germany",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
    },
    {
      id: 3,
      content: "After years of dealing with tooth sensitivity and gum issues, I finally found the solution at Elite Dental Solutions. Their thorough approach to my treatment and the personalized care I received made all the difference. I can eat and smile without pain now, and I'm so grateful for their expertise and kindness.",
      name: "Alex D",
      location: "Italy",
      rating: 5,
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80"
    },
    {
      id: 4,
      content: "Having avoided dental work for years due to anxiety, I was amazed by how comfortable the team at Elite Dental Solutions made me feel. They were patient, understanding, and explained everything clearly. The quality of work is outstanding, and for the first time in my life, I don't dread going to the dentist!",
      name: "Sarah K",
      location: "France",
      rating: 5,
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=761&q=80"
    },
    {
      id: 5,
      content: "As someone who traveled from abroad specifically for dental work, I couldn't be more impressed with Elite Dental Solutions. They arranged everything from airport pickup to accommodation recommendations. The dental work itself was top-notch, and the cost savings compared to my home country made the trip more than worthwhile.",
      name: "James W",
      location: "United States",
      rating: 5,
      image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1448&q=80"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === allTestimonials.length - 3 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? allTestimonials.length - 3 : prev - 1));
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star
        key={index}
        size={16}
        className={index < rating ? "text-dental fill-dental" : "text-gray-300"}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-dental-light/5 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-dental-light/5"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-dental-mint/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-dental/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-gradient-primary inline-block relative after:content-[''] after:absolute after:-bottom-2 after:left-1/4 after:right-1/4 after:h-1 after:bg-dental-tertiary after:rounded-full reveal" data-direction="up">
            HAPPY PATIENTS
          </h2>
          <p className="text-xl text-dental-dark/80 max-w-3xl mx-auto reveal" data-direction="up">
            See what our patients say about their experience with us
          </p>
        </div>

        {/* Google Reviews Header */}
        <div className="mb-8 reveal" data-direction="up">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="bg-white p-2 rounded-lg shadow-md">
                <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" alt="Google" className="h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-dental-dark">Google Reviews</h3>
                <div className="flex items-center space-x-2">
                  <div className="flex">
                    {renderStars(5)}
                  </div>
                  <span className="text-lg font-medium text-dental-dark">5.0</span>
                  <span className="text-sm text-dental-dark/70">(63 reviews)</span>
                </div>
              </div>
            </div>
            <a 
              href="https://www.google.com/maps/place/Elite+Dental+Solutions/@42.6594718,23.2852855,17z/data=!4m8!3m7!1s0x40aa85965801b4b1:0xacb1611cdcb876b9!8m2!3d42.6594679!4d23.2878604!9m1!1b1!16s%2Fg%2F11lv8zn33_?entry=ttu&g_ep=EgoyMDI1MDQwOS4wIKXMDSoASAFQAw%3D%3D" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center space-x-2 text-dental hover:text-dental-dark transition-colors"
            >
              <span className="font-medium">Read all reviews</span>
              <ArrowRight size={18} />
            </a>
          </div>
        </div>

        {/* Combined Testimonials Carousel */}
        <div className="relative reveal" data-direction="up">
          {/* Desktop Carousel */}
          <div className="hidden md:block overflow-hidden">
            <div 
              className="flex transition-all duration-500 ease-in-out" 
              style={{ transform: `translateX(-${currentSlide * 33.33}%)` }}
            >
              {allTestimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-1/3 flex-shrink-0 px-4">
                  <Card className="h-full bg-white border border-dental-light/20 shadow-card hover:shadow-blue-glow transition-shadow duration-300">
                    <CardContent className="p-6 h-full flex flex-col">
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex items-center space-x-3">
                          {'type' in testimonial ? (
                            <div className={`w-10 h-10 rounded-full ${testimonial.bgColor} flex items-center justify-center ${testimonial.textColor} font-bold`}>
                              {testimonial.initial}
                            </div>
                          ) : (
                            <img 
                              src={testimonial.image} 
                              alt={testimonial.name} 
                              className="w-10 h-10 rounded-full object-cover border-2 border-dental-light"
                            />
                          )}
                          <div>
                            <h4 className="font-medium text-dental-dark">{testimonial.name}</h4>
                            {'location' in testimonial && (
                              <p className="text-sm text-dental-dark/70">{testimonial.location}</p>
                            )}
                            <div className="flex mt-1">
                              {renderStars(testimonial.rating)}
                            </div>
                          </div>
                        </div>
                        {'timeAgo' in testimonial && (
                          <span className="text-xs text-dental-dark/60">{testimonial.timeAgo}</span>
                        )}
                      </div>
                      <p className="text-dental-dark/80 flex-grow">"{testimonial.content}"</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
            
            {/* Navigation Buttons */}
            <button 
              onClick={prevSlide} 
              className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-white rounded-full shadow-card w-10 h-10 flex items-center justify-center text-dental hover:text-dental-dark transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={nextSlide} 
              className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-white rounded-full shadow-card w-10 h-10 flex items-center justify-center text-dental hover:text-dental-dark transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
          
          {/* Mobile Version */}
          <div className="md:hidden space-y-6">
            {allTestimonials.slice(0, 3).map((testimonial) => (
              <Card key={testimonial.id} className="bg-white border border-dental-light/20 shadow-card">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center space-x-3">
                      {'type' in testimonial ? (
                        <div className={`w-10 h-10 rounded-full ${testimonial.bgColor} flex items-center justify-center ${testimonial.textColor} font-bold`}>
                          {testimonial.initial}
                        </div>
                      ) : (
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name} 
                          className="w-10 h-10 rounded-full object-cover border-2 border-dental-light"
                        />
                      )}
                      <div>
                        <h4 className="font-medium text-dental-dark">{testimonial.name}</h4>
                        {'location' in testimonial && (
                          <p className="text-sm text-dental-dark/70">{testimonial.location}</p>
                        )}
                        <div className="flex mt-1">
                          {renderStars(testimonial.rating)}
                        </div>
                      </div>
                    </div>
                    {'timeAgo' in testimonial && (
                      <span className="text-xs text-dental-dark/60">{testimonial.timeAgo}</span>
                    )}
                  </div>
                  <p className="text-dental-dark/80">"{testimonial.content}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Testimonial Metrics */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 reveal" data-direction="up">
          <div className="bg-white rounded-2xl p-6 shadow-card border border-dental-light/20 text-center">
            <h3 className="text-4xl font-bold text-dental mb-2">98%</h3>
            <p className="text-dental-dark">Satisfaction Rate</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-card border border-dental-light/20 text-center">
            <h3 className="text-4xl font-bold text-dental mb-2">5000+</h3>
            <p className="text-dental-dark">Positive Reviews</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-card border border-dental-light/20 text-center">
            <h3 className="text-4xl font-bold text-dental mb-2">30+</h3>
            <p className="text-dental-dark">Countries Served</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
