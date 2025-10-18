import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star, Quote } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar?: string;
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'Product Manager',
    company: 'TechCorp Nigeria',
    content: 'Alimi delivered an exceptional property management system that streamlined our operations. His attention to detail and understanding of Nigerian market needs was impressive.',
    rating: 5,
    avatar: '/api/placeholder/40/40'
  },
  {
    id: '2',
    name: 'Michael Adebayo',
    role: 'CTO',
    company: 'FinTech Solutions',
    content: 'Working with Alimi on our analytics dashboard was a game-changer. His expertise in both frontend and backend technologies brought our vision to life.',
    rating: 5,
    avatar: '/api/placeholder/40/40'
  },
  {
    id: '3',
    name: 'Dr. Fatima Ibrahim',
    role: 'Director',
    company: 'EduTech Nigeria',
    content: 'The e-school portal Alimi built transformed how we manage our educational programs. His understanding of educational workflows is remarkable.',
    rating: 5,
    avatar: '/api/placeholder/40/40'
  }
];

export const TestimonialsSection = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div 
          ref={elementRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'animate-slide-down opacity-100' : 'opacity-0'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">What People Say</h2>
          <p className="text-xl text-muted-foreground">
            Testimonials from clients and colleagues
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id}
              className={`bg-gradient-card backdrop-blur-sm border-glass-border shadow-card hover:shadow-glow transition-all duration-500 ${
                isVisible ? 'animate-zoom-in opacity-100' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <Quote className="w-8 h-8 text-primary/20 mb-4" />
                
                <p className="text-foreground/80 mb-6 italic leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center gap-3">
                  <Avatar className="w-10 h-10">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback className="bg-gradient-primary text-white">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-sm">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
