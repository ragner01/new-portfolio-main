import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, ArrowRight, BookOpen, ExternalLink, Github } from 'lucide-react';
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
  content?: string[];
}

// Full article content
const articlesContent: Record<string, string[]> = {
  '1': [
    `# Building Scalable Microservices with Spring Boot and Domain-Driven Design`,
    
    `When building enterprise applications, the architecture decisions you make early on will determine the success of your project. In this deep dive, I'll walk you through how I built a production-ready microservices platform using Spring Boot, Domain-Driven Design, and Event Sourcing principles.`,
    
    `## The Challenge`,
    
    `Traditional monolithic applications struggle to scale and maintain pace with modern business requirements. When building the MicroJobs Marketplace, I needed an architecture that could handle thousands of concurrent users, ensure data consistency across services, and maintain high availability.`,
    
    `## Architectural Foundations`,
    
    `### Domain-Driven Design (DDD)`,
    
    `DDD provides a strategic framework for understanding complex business domains. By organizing code around bounded contexts—distinct areas of business logic—we can maintain clear boundaries between services and prevent the dreaded "big ball of mud" anti-pattern.`,
    
    `In practice, this means each microservice represents a self-contained business capability. For example, our User Service handles authentication and profile management, while the Job Service manages job postings and applications.`,
    
    `### Event Sourcing`,
    
    `Event sourcing captures every change to application state as a sequence of events. Instead of storing the current state, we store a log of all changes. This provides:`,
    `- Complete audit trail for compliance`,
    `- Time-travel debugging`,
    `- Natural support for CQRS (Command Query Responsibility Segregation)`,
    `- Ability to rebuild state at any point in time`,
    
    `When a user posts a job on our marketplace, we don't just update a database row. We emit a JobCreatedEvent, storing it in our event store. Downstream services can subscribe to this event to update their projections.`,
    
    `## Implementing with Spring Boot`,
    
    `### Service Design`,
    
    `Each service follows a hexagonal architecture with three layers:`,
    `1. **Domain Layer**: Core business logic and entities`,
    `2. **Application Layer**: Use cases and orchestration`,
    `3. **Infrastructure Layer**: External concerns (database, messaging, APIs)`,
    
    `### Event-Driven Communication`,
    
    `Using Apache Kafka, services communicate through events rather than direct HTTP calls. This provides:`,
    `- Loose coupling between services`,
    `- Natural scalability`,
    `- Built-in fault tolerance`,
    `- Event replay capabilities`,
    
    `For example, when a payment is processed, the Billing Service emits a PaymentProcessedEvent. The Job Service subscribes to update job status, while the Analytics Service updates metrics.`,
    
    `## Production Considerations`,
    
    `### Testing Strategy`,
    `- Unit tests for domain logic using TDD`,
    `- Integration tests with Testcontainers for database interactions`,
    `- Contract testing with Pact for inter-service contracts`,
    `- Load testing with Gatling for performance validation`,
    
    `### Observability`,
    
    `Comprehensive logging, metrics, and tracing are essential:`,
    `- **Logging**: Structured logging with correlation IDs`,
    `- **Metrics**: Prometheus endpoints for business and technical metrics`,
    `- **Tracing**: OpenTelemetry with Jaeger for distributed tracing`,
    
    `### Multi-tenancy`,
    
    `The marketplace supports multiple organizations. Each tenant's data is isolated using a tenant ID strategy, ensuring security and compliance. Row-level security ensures users can only access their organization's data.`,
    
    `## Key Learnings`,
    
    `1. **Start Simple**: Begin with minimal viable microservices, extract as needed`,
    `2. **Embrace Asynchrony**: Event-driven patterns scale better than synchronous calls`,
    `3. **Monitor Everything**: You can't improve what you don't measure`,
    `4. **Focus on Domain Logic**: Technology stacks change, business logic doesn't`,
    `5. **Security First**: Implement authentication and authorization from day one`,
    
    `This architecture has proven production-ready, handling over 10,000 concurrent users during peak times. The investment in DDD and Event Sourcing pays dividends in maintainability and scalability.`
  ],
  '2': [
    `# Hospital Management Systems: FHIR Interoperability and Multi-Facility Architecture`,
    
    `Building production-ready healthcare systems for Nigeria requires addressing unique challenges: multi-facility support, FHIR interoperability, clinical workflows, and NHIA/HMO integration. Let me share how I architected the OSUTH Hospital Information System.`,
    
    `## The Healthcare Context in Nigeria`,
    
    `Nigerian hospitals face unique challenges:`,
    `- Need to support multiple facility types (teaching, general, primary care)`,
    `- Integration with NHIA (National Health Insurance Authority) for claims`,
    `- Compliance with data protection regulations`,
    `- Interoperability for referrals and patient transfers`,
    
    `## FHIR R4: The Standard for Healthcare Interoperability`,
    
    `Fast Healthcare Interoperability Resources (FHIR) is a modern standard for exchanging healthcare information. We implemented FHIR APIs for:`,
    
    `### Patient Management`,
    `Using FHIR Patient resources, we can share patient demographics across facilities. When a patient visits the emergency department, their profile is instantly available to attending clinicians.`,
    
    `### Clinical Workflows`,
    `FHIR Encounter resources represent patient visits, while Observation resources capture vital signs, lab results, and clinical measurements. This standardized format allows seamless data exchange between systems.`,
    
    `## Architecture for Multi-Facility Support`,
    
    `### Data Isolation`,
    `Each facility operates as a separate tenant with isolated data. When a medical record is created, it's tagged with a facility ID, ensuring data privacy and compliance.`,
    
    `### Clinical Modules`,
    `1. **EMR Core**: Patient master index, health records, problem lists`,
    `2. **Appointments**: Scheduling, triage scoring (NEWS2), queue management`,
    `3. **Lab & Radiology**: Order entry, result reporting, critical value alerts`,
    `4. **Pharmacy**: Medication dispensing with FEFO (First Expired First Out)`,
    `5. **Billing**: Auto-invoice generation, NHIA/HMO claims processing`,
    `6. **Staff Management**: Rota generation, handover checklists`,
    
    `## NHIA/HMO Claims Processing`,
    
    `Nigerian health insurance uses a claims-based model. Our system automatically:`,
    `1. Validates patient eligibility before treatment`,
    `2. Captures service utilization during encounters`,
    `3. Generates NHIA-compliant claims`,
    `4. Tracks claim status through submission, approval, and payment`,
    `5. Handles denial management and resubmission`,
    
    `## Clinical Decision Support`,
    
    `NEWS2 (National Early Warning Score 2) automates triage scoring. Based on vital signs, the system calculates a risk score and triggers escalation protocols when needed.`,
    
    `For medication orders, the system checks for allergies, drug interactions, and dosage guidelines before dispensing—ensuring patient safety.`,
    
    `## Disaster Recovery`,
    
    `Healthcare systems can't afford downtime. We implemented:`,
    `- Automated daily backups with 30-day retention`,
    `- Point-in-time recovery capability`,
    `- Active-passive failover configuration`,
    `- Immutable audit trails for compliance`,
    
    `## Lessons from Production`,
    
    `**Performance**: Clinicians need instant responses. We optimized queries and used Redis caching for frequently accessed data (patient lookups, lab catalogs).`,
    
    `**Usability**: Simple UI matters more in healthcare than elsewhere. Complex workflows can have life-threatening consequences.`,
    
    `**Compliance**: Audit logs aren't optional—they're legally required. Every clinical action is logged with user, timestamp, and IP address.`,
    
    `This system now serves over 500 clinical staff across multiple facilities, processing thousands of patient interactions daily. The FHIR foundation ensures it can integrate with national health information exchanges as they mature.`
  ],
  '3': [
    `# Enterprise Fintech Architecture: PCI DSS Compliance and Banking Security`,
    
    `Building financial systems for tier-1 Nigerian banks requires the highest levels of security, compliance, and observability. Let me share how I designed the AtlasBank platform with PCI DSS compliance, microservices architecture, and comprehensive security.`,
    
    `## The Challenge`,
    
    `Banking platforms must handle millions of transactions while maintaining PCI DSS compliance, preventing fraud, and ensuring 99.99% uptime. Traditional architectures can't meet these requirements.`,
    
    `## PCI DSS Compliance`,
    
    `Payment Card Industry Data Security Standard (PCI DSS) defines strict requirements for handling cardholder data:`,
    
    `### Data Protection`,
    `- Card numbers are encrypted at rest using AES-256-GCM`,
    `- All network transmissions use TLS 1.3`,
    `- Card verification values (CVV) are never stored`,
    `- Strong access controls with multi-factor authentication`,
    
    `### Security Monitoring`,
    `- All access to cardholder data is logged and monitored`,
    `- Intrusion detection systems alert on suspicious activity`,
    `- Regular security assessments and penetration testing`,
    `- Vulnerability management program with SLA-based patching`,
    
    `## Microservices Architecture`,
    
    `We decomposed the monolithic banking application into focused services:`,
    
    `### Core Services`,
    `1. **Account Service**: Manages account lifecycle and balances`,
    `2. **Transaction Service**: Processes deposits, withdrawals, transfers`,
    `3. **Card Service**: Manages card issuance, activation, blocking`,
    `4. **Payment Service**: Handles payment processing and settlement`,
    `5. **Notification Service**: Sends SMS, email, and push notifications`,
    
    `### Supporting Services`,
    `- **Authentication Service**: OAuth 2.0 with JWT tokens`,
    `- **Fraud Detection Service**: Real-time anomaly detection`,
    `- **Audit Service**: Compliance logging and reporting`,
    
    `## Event-Driven Design`,
    
    `Kafka enables reliable, scalable event processing:`,
    
    `When a customer initiates a transfer:`,
    `1. Transaction Service emits TransferInitiatedEvent`,
    `2. Fraud Detection Service analyzes for suspicious patterns`,
    `3. On approval, Account Service processes debits/credits`,
    `4. Notification Service sends confirmation to both parties`,
    `5. Audit Service records all steps for compliance`,
    
    `This asynchronous pattern provides fault tolerance—if one service fails, events are retried automatically.`,
    
    `## Observability`,
    
    `Production banking systems require comprehensive visibility:`,
    
    `### OpenTelemetry Distributed Tracing`,
    `Every request generates a trace through all services. We can see exactly how long each step takes and where bottlenecks occur.`,
    
    `### Prometheus Metrics`,
    `We track business metrics (transactions per second, success rates) and technical metrics (API latency, error rates).`,
    
    `### Grafana Dashboards`,
    `Real-time dashboards show system health at a glance. Alerts trigger when SLIs (Service Level Indicators) breach thresholds.`,
    
    `## React Native Mobile App`,
    
    `The React Native mobile application provides native iOS and Android experiences. Features include:`,
    `- Biometric authentication (fingerprint, face ID)`,
    `- Secure storage for tokens using Keychain`,
    `- Offline capability for checking balances`,
    `- Push notifications for transaction alerts`,
    
    `Kubernetes deployment ensures high availability with zero-downtime deployments. We use blue-green deployment strategy for safe rollouts.`,
    
    `## Security Measures`,
    
    `### Rate Limiting`,
    `API requests are rate-limited per user to prevent brute force attacks. Excessive attempts trigger account lockouts.`,
    
    `### Token Management`,
    `JWT tokens have short expiration times (15 minutes) with refresh tokens valid for 7 days. Token rotation prevents reuse of stolen tokens.`,
    
    `### Multi-Factor Authentication`,
    `Sensitive operations require MFA. After password authentication, users confirm via SMS OTP or authenticator app.`,
    
    `## Lessons Learned`,
    
    `1. **Security isn't optional**: Every feature must consider security implications`,
    `2. **Observability is critical**: You can't fix what you can't see`,
    `3. **Event sourcing helps**: Financial audits require complete history`,
    `4. **Test in production**: Canary deployments catch issues early`,
    `5. **Documentation matters**: Team onboarding requires clear architecture docs`,
    
    `This platform processes billions of naira in transactions monthly with zero security incidents. The investment in proper architecture and security practices pays off in reliability and regulatory compliance.`
  ]
};

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
    link: 'https://github.com/ragner01/microjobs-marketplace',
    content: articlesContent['1']
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
    link: 'https://github.com/ragner01/OSUTH',
    content: articlesContent['2']
  },
  {
    id: '3',
    title: 'Enterprise Fintech Architecture: PCI DSS Compliance and Banking Security',
    excerpt: 'Building tier-1 banking platforms with .NET 8, microservices, event-driven design, and comprehensive observability for Nigerian banks.',
    date: '2024-01-18',
    readTime: '9 min read',
    category: 'Fintech',
    tags: ['.NET 8', 'Banking', 'Security', 'Microservices'],
    link: 'https://github.com/ragner01/Atlas-bank',
    content: articlesContent['3']
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
    setSelectedPost(post);
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

          <div ref={gridRef} className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {blogPosts.map((post, index) => (
              <article
                key={post.id}
                className={`transition-all duration-700 ease-out ${
                  visibleItems[index] 
                    ? 'translate-x-0 opacity-100' 
                    : 'translate-x-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 80}ms` }}
              >
            <div 
                  className="bg-gradient-to-r from-background/95 via-accent/5 to-background/95 backdrop-blur-xl rounded-2xl border-l-4 border-accent/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-l-accent p-6 group cursor-pointer relative overflow-hidden h-full"
                  onClick={() => handleReadMore(post)}
                >
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10">
                    {/* Category and Date Row */}
                    <div className="flex items-center justify-between mb-3">
                      <Badge variant="secondary" className="text-xs bg-accent/20 text-accent border-accent/30">
                        {post.category}
                      </Badge>
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                      </span>
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                      {post.title}
                    </h3>
                    
                    {/* Excerpt */}
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    {/* Tags and Meta Row */}
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <div className="flex flex-wrap gap-1.5">
                        {post.tags.slice(0, 2).map((tag) => (
                          <span key={tag} className="text-xs px-2 py-1 bg-background/60 rounded text-muted-foreground border border-border/50">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </div>
                    </div>
                    
                    {/* Read More Button */}
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="mt-4 w-full text-accent hover:text-primary hover:bg-accent/10 border-t border-border/40 pt-4"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleReadMore(post);
                        }}
                    >
                      Read Full Article
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </article>
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

      {/* Article Reading Dialog */}
      <Dialog open={!!selectedPost} onOpenChange={() => setSelectedPost(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden flex flex-col">
          {selectedPost && (
            <>
              <DialogHeader className="pb-4 border-b border-border">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary">{selectedPost.category}</Badge>
                  {selectedPost.featured && (
                    <Badge className="bg-gradient-to-r from-primary to-accent text-white text-xs">
                      Featured
                    </Badge>
                  )}
                </div>
                <DialogTitle className="text-3xl leading-tight">{selectedPost.title}</DialogTitle>
                <DialogDescription className="flex items-center gap-4 pt-2">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {new Date(selectedPost.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {selectedPost.readTime}
                  </span>
                </DialogDescription>
              </DialogHeader>
              
              <div className="flex-1 overflow-y-auto px-6 py-6">
                {selectedPost.content ? (
                  <div className="prose prose-invert max-w-none">
                    {selectedPost.content.map((paragraph, idx) => {
                      if (paragraph.startsWith('#')) {
                        return <h2 key={idx} className="text-2xl font-bold mt-8 mb-4 text-foreground">{paragraph.replace(/^#+/, '')}</h2>;
                      }
                      if (paragraph.startsWith('##')) {
                        return <h3 key={idx} className="text-xl font-semibold mt-6 mb-3 text-foreground">{paragraph.replace(/^#+/, '')}</h3>;
                      }
                      if (paragraph.match(/^- .+/)) {
                        return <li key={idx} className="ml-6 my-2 text-muted-foreground">{paragraph.replace(/^- /, '')}</li>;
                      }
                      return <p key={idx} className="text-muted-foreground leading-relaxed mb-4">{paragraph}</p>;
                    })}
                  </div>
                ) : (
                  <div className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">{selectedPost.excerpt}</p>
                    <div className="flex flex-wrap gap-2">
                      {selectedPost.tags.map((tag) => (
                        <Badge key={tag} variant="outline">{tag}</Badge>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              
              <div className="flex items-center justify-between pt-4 border-t border-border px-6">
                {selectedPost.link && (
                  <Button
                    variant="outline"
                    onClick={() => window.open(selectedPost.link, '_blank')}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    View on GitHub
                  </Button>
                )}
                <Button onClick={() => setSelectedPost(null)}>Close</Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};