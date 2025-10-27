import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, ArrowRight, BookOpen, ExternalLink } from 'lucide-react';
import { useScrollAnimation, useStaggeredAnimation } from '@/hooks/use-scroll-animation';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  featured?: boolean;
  link?: string;
}

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Building Scalable Microservices with Spring Boot and Domain-Driven Design',
    excerpt: 'Learn how to architect enterprise-grade microservices using DDD principles, event sourcing, and modern Spring Boot patterns for production-ready applications.',
    date: '2024-01-15',
    readTime: '8 min read',
    category: 'Backend Development',
    tags: ['Spring Boot', 'Microservices', 'DDD', 'Event Sourcing'],
    featured: true,
    link: 'https://github.com/ragner01/microjobs-marketplace'
  },
  {
    id: '2',
    title: 'Hospital Management Systems: FHIR Interoperability and Multi-Facility Architecture',
    excerpt: 'Designing production-ready hospital information systems with FHIR R4 compliance, multi-facility support, and enterprise security for Nigerian healthcare.',
    date: '2024-01-20',
    readTime: '10 min read',
    category: 'Healthcare Tech',
    tags: ['FHIR', 'Healthcare', 'Spring Boot', 'Enterprise'],
    featured: true,
    link: 'https://github.com/ragner01/OSUTH'
  },
  {
    id: '3',
    title: 'Enterprise Fintech Architecture: PCI DSS Compliance and Banking Security',
    excerpt: 'Building tier-1 banking platforms with .NET 8, microservices, event-driven design, and comprehensive observability for Nigerian banks.',
    date: '2024-01-18',
    readTime: '9 min read',
    category: 'Fintech',
    tags: ['.NET 8', 'Banking', 'Security', 'Microservices'],
    link: 'https://github.com/ragner01/Atlas-bank'
  },
  {
    id: '4',
    title: 'Clean Architecture in .NET: Building Maintainable Applications',
    excerpt: 'Implementing Clean Architecture principles in .NET applications using MediatR, AutoMapper, and FluentValidation for robust, testable code.',
    date: '2024-01-01',
    readTime: '9 min read',
    category: 'Backend Development',
    tags: ['.NET', 'Clean Architecture', 'MediatR', 'Testing'],
    link: 'https://github.com/ragner01/InvoicePro'
  },
  {
    id: '5',
    title: 'Nigerian Market Localization: Building Apps That Work for Africa',
    excerpt: 'Essential considerations for building applications tailored to the Nigerian market, including payment integration, cultural nuances, and technical challenges.',
    date: '2024-01-10',
    readTime: '6 min read',
    category: 'Product Development',
    tags: ['Localization', 'Nigeria', 'Payments', 'UX']
  },
  {
    id: '6',
    title: 'Modern React Patterns: From Hooks to Server Components',
    excerpt: 'Exploring advanced React patterns including custom hooks, context optimization, and the future of React with Server Components and Suspense.',
    date: '2024-01-05',
    readTime: '7 min read',
    category: 'Frontend Development',
    tags: ['React', 'Hooks', 'Server Components', 'Performance']
  },
  {
    id: '7',
    title: 'API Security Best Practices: JWT, Rate Limiting, and OpenTelemetry',
    excerpt: 'Comprehensive guide to securing REST APIs with JWT authentication, rate limiting, health checks, and distributed tracing.',
    date: '2024-01-12',
    readTime: '8 min read',
    category: 'API Development',
    tags: ['JWT', 'Security', 'OpenTelemetry', 'Best Practices'],
    link: 'https://github.com/ragner01/todo-api'
  },
  {
    id: '8',
    title: 'Property Management Systems: Next.js and Spring Boot Integration',
    excerpt: 'Building full-stack property management systems with Nigerian localization, JWT authentication, and mobile-first design.',
    date: '2024-01-08',
    readTime: '7 min read',
    category: 'Full-Stack',
    tags: ['Next.js', 'Spring Boot', 'Integration', 'Nigerian Market'],
    link: 'https://github.com/ragner01/SmartRent'
  }
];

export const BlogSection = () => {
  const { elementRef, isVisible } = useScrollAnimation();
  const { visibleItems, elementRef: gridRef } = useStaggeredAnimation(blogPosts.length, 100);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const handleReadMore = (post: BlogPost) => {
    if (post.link) {
      window.open(post.link, '_blank');
    } else {
      setSelectedPost(post);
    }
  };

  return (
    <>
      <section id="blog" className="py-20 bg-background relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div 
            ref={elementRef}
            className={`text-center mb-16 transition-all duration-1000 ${
              isVisible ? 'animate-flip-in opacity-100' : 'opacity-0'
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Latest Articles & Insights
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Technical insights, development experiences, and architectural deep-dives
            </p>
          </div>

          <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {blogPosts.map((post, index) => (
              <div
                key={post.id}
                className={`transition-all duration-700 ease-out ${
                  visibleItems[index] 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 60}ms` }}
              >
                <Card 
                  className="bg-gradient-to-br from-background/90 via-background/80 to-background/90 backdrop-blur-xl rounded-3xl border border-border/40 shadow-2xl hover:shadow-primary/20 transition-all duration-300 hover:border-primary/40 hover:-translate-y-1 h-full flex flex-col group cursor-pointer"
                  onClick={() => handleReadMore(post)}
                >
                  {/* Header */}
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary" className="text-xs border-primary/20">
                        {post.category}
                      </Badge>
                      {post.featured && (
                        <Badge className="bg-gradient-to-r from-primary to-accent text-white text-xs">
                          Featured
                        </Badge>
                      )}
                    </div>
                    <CardTitle className="text-xl group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-accent group-hover:bg-clip-text transition-all duration-500 line Neural-clamp-2">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="flex-grow flex flex-col">
                    <p className="text-muted-foreground mb-4 leading-relaxed line-clamp-3 flex-grow">
                      {post.excerpt}
                    </p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs border-primary/20">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    {/* Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-border/40">
                      <div className="flex items-center gap-3 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {post.readTime}
                        </div>
                      </div>
                      
                      <Button 
                        variant="ghost" 
                        size="sm"
                        className="group-hover:text-primary transition-colors"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleReadMore(post);
                        }}
                      >
                        {post.link ? (
                          <>
                            View Project
                            <ExternalLink className="w-4 h-4 ml-1" />
                          </>
                        ) : (
                          <>
                            Read more
                            <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                          </>
                        )}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
          
          {/* View All Button */}
          <div className="text-center mt-12">
            <Button
              variant="outline" 
              size="lg"
              className="border-glass-border hover:bg-glass-bg transition-all duration-300 group"
              onClick={() => window.open('https://medium.com/@alimiomotola', '_blank')}
            >
              <BookOpen className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
              Read More on Medium
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Blog Post Dialog */}
      <Dialog open={!!selectedPost} onOpenChange={() => setSelectedPost(null)}>
        <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl">{selectedPost?.title}</DialogTitle>
            <DialogDescription className="flex items-center gap-4 pt-2">
              <span>{new Date(selectedPost?.date || '').toLocaleDateString()}</span>
              <span>•</span>
              <span>{selectedPost?.readTime}</span>
              <span>•</span>
              <Badge>{selectedPost?.category}</Badge>
            </DialogDescription>
          </DialogHeader>
          <div className="pt-4">
            <p className="text-muted-foreground leading-relaxed mb-4">{selectedPost?.excerpt}</p>
            <Button 
              onClick={() => window.open('https://medium.com/@alimiomotola', '_blank')}
              className="w-full"
            >
              Read Full Article on Medium
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};