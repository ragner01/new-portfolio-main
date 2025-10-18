import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, ArrowRight, BookOpen } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  featured?: boolean;
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
    featured: true
  },
  {
    id: '2',
    title: 'Nigerian Market Localization: Building Apps That Work for Africa',
    excerpt: 'Essential considerations for building applications tailored to the Nigerian market, including payment integration, cultural nuances, and technical challenges.',
    date: '2024-01-10',
    readTime: '6 min read',
    category: 'Product Development',
    tags: ['Localization', 'Nigeria', 'Payments', 'UX']
  },
  {
    id: '3',
    title: 'Modern React Patterns: From Hooks to Server Components',
    excerpt: 'Exploring advanced React patterns including custom hooks, context optimization, and the future of React with Server Components and Suspense.',
    date: '2024-01-05',
    readTime: '7 min read',
    category: 'Frontend Development',
    tags: ['React', 'Hooks', 'Server Components', 'Performance']
  },
  {
    id: '4',
    title: 'Clean Architecture in .NET: Building Maintainable Applications',
    excerpt: 'Implementing Clean Architecture principles in .NET applications using MediatR, AutoMapper, and FluentValidation for robust, testable code.',
    date: '2024-01-01',
    readTime: '9 min read',
    category: 'Backend Development',
    tags: ['.NET', 'Clean Architecture', 'MediatR', 'Testing']
  }
];

export const BlogSection = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div 
          ref={elementRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'animate-flip-in opacity-100' : 'opacity-0'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Latest Articles</h2>
          <p className="text-xl text-muted-foreground">
            Technical insights and development experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {blogPosts.map((post, index) => (
            <Card 
              key={post.id}
              className={`bg-gradient-card backdrop-blur-sm border-glass-border shadow-card hover:shadow-glow transition-all duration-500 group ${
                isVisible ? 'animate-slide-up opacity-100' : 'opacity-0'
              } ${post.featured ? 'md:col-span-2' : ''}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary" className="text-xs">
                    {post.category}
                  </Badge>
                  {post.featured && (
                    <Badge className="bg-gradient-primary text-white text-xs">
                      Featured
                    </Badge>
                  )}
                </div>
                <CardTitle className={`group-hover:text-primary transition-colors ${
                  post.featured ? 'text-2xl' : 'text-xl'
                }`}>
                  {post.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(post.date).toLocaleDateString()}
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
                  >
                    Read more
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="border-glass-border hover:bg-glass-bg transition-all duration-300"
          >
            <BookOpen className="w-5 h-5 mr-2" />
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  );
};
