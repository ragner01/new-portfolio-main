import { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { Button } from '@/components/ui/button';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar?: string;
  companyLogo?: string;
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'Product Manager',
    company: 'TechCorp Nigeria',
    content: 'Alimi delivered an exceptional property management system that streamlined our operations. His attention to detail and understanding of Nigerian market needs was impressive.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=200&q=80',
    companyLogo: '/logos/techcorp.svg'
  },
  {
    id: '2',
    name: 'Michael Adebayo',
    role: 'CTO',
    company: 'FinTech Solutions',
    content: 'Working with Alimi on our analytics dashboard was a game-changer. His expertise in both frontend and backend technologies brought our vision to life.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1502764613149-7f1d229e2300?auto=format&fit=crop&w=200&q=80',
    companyLogo: '/logos/fintech.svg'
  },
  {
    id: '3',
    name: 'Dr. Fatima Ibrahim',
    role: 'Director',
    company: 'EduTech Nigeria',
    content: 'The e-school portal Alimi built transformed how we manage our educational programs. His understanding of educational workflows is remarkable.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=80',
    companyLogo: '/logos/edutech.svg'
  },
  {
    id: '4',
    name: 'Kunle Peters',
    role: 'Head of Digital Transformation',
    company: 'Union Manufacturing',
    content: 'He guided our legacy systems modernization and delivered a cloud-native platform with zero downtime migration.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=200&q=80',
    companyLogo: '/logos/union.svg'
  }
];

export const TestimonialsSection = () => {
  const { elementRef, isVisible } = useScrollAnimation();
  const sliderRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const totalSlides = testimonials.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide(prev => (prev + 1) % totalSlides);
    }, 6000);

    return () => clearInterval(interval);
  }, [totalSlides]);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;
    const firstChild = slider.children[0] as HTMLElement | undefined;
    if (!firstChild) return;
    const computedStyles = getComputedStyle(slider);
    const rawGap = parseFloat(computedStyles.columnGap || '0');
    const gap = Number.isNaN(rawGap) ? 0 : rawGap;

    slider.scrollTo({
      left: activeSlide * (firstChild.clientWidth + gap),
      behavior: 'smooth'
    });
  }, [activeSlide]);

  const handleNavigate = (direction: 'prev' | 'next') => {
    setActiveSlide(prev => {
      if (direction === 'prev') {
        return prev === 0 ? totalSlides - 1 : prev - 1;
      }
      return (prev + 1) % totalSlides;
    });
  };

  return (
    <section className="py-20 bg-secondary/20" id="testimonials">
      <div className="container mx-auto px-4">
        <div 
          ref={elementRef}
          className={`text-center mb-12 transition-all duration-1000 ${
            isVisible ? 'animate-slide-down opacity-100' : 'opacity-0'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">What People Say</h2>
          <p className="text-xl text-muted-foreground">
            Testimonials from clients and colleagues
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div 
            ref={sliderRef}
            className="flex gap-6 overflow-hidden pb-4"
          >
            {testimonials.map((testimonial, index) => (
              <Card 
                key={testimonial.id}
                className={`flex-shrink-0 w-full md:w-1/2 lg:w-1/3 bg-gradient-card backdrop-blur-sm border-glass-border shadow-card hover:shadow-glow transition-all duration-700 ${
                  isVisible ? 'animate-zoom-in opacity-100' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-6 h-full flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    {testimonial.companyLogo && (
                      <img 
                        src={testimonial.companyLogo} 
                        alt={`${testimonial.company} logo`} 
                        className="h-6 w-fit opacity-70"
                      />
                    )}
                  </div>
                  
                  <Quote className="w-8 h-8 text-primary/20 mb-4" />
                  
                  <p className="text-foreground/80 mb-6 italic leading-relaxed flex-grow">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="flex items-center gap-3">
                    <Avatar className="w-12 h-12 border border-primary/20 shadow-inner">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                      <AvatarFallback className="bg-gradient-primary text-white">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {testimonial.role} at {testimonial.company}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex items-center justify-between mt-6">
            <div className="flex gap-2">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <span
                  key={`dot-${index}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === activeSlide ? 'w-8 bg-primary' : 'w-2 bg-muted-foreground/40'
                  }`}
                />
              ))}
            </div>
            <div className="flex gap-3">
              <Button 
                variant="outline" 
                size="icon" 
                className="border-glass-border" 
                onClick={() => handleNavigate('prev')}
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                className="border-glass-border" 
                onClick={() => handleNavigate('next')}
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
