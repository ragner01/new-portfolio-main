import { useState, useEffect } from 'react';
import { Github, Mail, ExternalLink, Code, Database, Laptop, Users, Target, MessageCircle, Linkedin, FileText, CheckSquare, Building2, Home, BarChart3, DollarSign, Cloud, Server, Box, GitBranch, Shield, Zap, Stethoscope, Factory } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useScrollAnimation, useStaggeredAnimation } from '@/hooks/use-scroll-animation';
import { ContactForm } from '@/components/ContactFormNetlify';
import { ThemeToggle } from '@/components/ThemeToggle';
import { ProjectFilter, ProjectCategory } from '@/components/ProjectFilter';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { BlogSection } from '@/components/BlogSection';
import { GoogleAnalytics } from '@/components/GoogleAnalytics';
import { SEOHead } from '@/components/SEOHead';
import { ResumeDownload } from '@/components/ResumeDownload';

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All');
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skills = [
    // Frontend Technologies
    { name: 'React', level: 92, icon: <Code className="w-5 h-5" /> },
    { name: 'TypeScript', level: 88, icon: <Code className="w-5 h-5" /> },
    { name: 'JavaScript', level: 95, icon: <Code className="w-5 h-5" /> },
    { name: 'Next.js', level: 85, icon: <Code className="w-5 h-5" /> },
    
    // Backend Technologies
    { name: 'Java', level: 85, icon: <Laptop className="w-5 h-5" /> },
    { name: 'ASP.NET Core', level: 80, icon: <Code className="w-5 h-5" /> },
    { name: 'Spring Boot', level: 85, icon: <Server className="w-5 h-5" /> },
    
    // Databases
    { name: 'SQL & SQL Server', level: 90, icon: <Database className="w-5 h-5" /> },
    { name: 'PostgreSQL', level: 85, icon: <Database className="w-5 h-5" /> },
    { name: 'MongoDB', level: 80, icon: <Database className="w-5 h-5" /> },
    { name: 'Redis', level: 80, icon: <Database className="w-5 h-5" /> },
    
    // Cloud & DevOps
    { name: 'Docker', level: 85, icon: <Box className="w-5 h-5" /> },
    { name: 'Kubernetes', level: 78, icon: <Box className="w-5 h-5" /> },
    { name: 'AWS', level: 80, icon: <Cloud className="w-5 h-5" /> },
    { name: 'Azure', level: 75, icon: <Cloud className="w-5 h-5" /> },
    { name: 'Kafka', level: 82, icon: <Zap className="w-5 h-5" /> },
    
    // Tools & Others
    { name: 'Git & GitHub', level: 92, icon: <GitBranch className="w-5 h-5" /> },
    
    // Soft Skills
    { name: 'Project Management', level: 88, icon: <Target className="w-5 h-5" /> },
    { name: 'Team Leadership', level: 85, icon: <Users className="w-5 h-5" /> },
    { name: 'Communication', level: 93, icon: <MessageCircle className="w-5 h-5" /> },
  ];

  const projects = [
    {
      title: 'AtlasBank - Enterprise Fintech Platform',
      description: 'Production-ready fintech platform built with .NET 8 for Tier-1 Nigerian banks. Features microservices architecture, PCI DSS compliance, React Native mobile app, event-driven design with Kafka, and comprehensive observability with OpenTelemetry, Grafana, and Jaeger.',
      tech: ['.NET 8', 'React Native', 'PostgreSQL', 'Kafka', 'Kubernetes', 'Docker', 'OpenTelemetry', 'Grafana', 'Jaeger'],
      github: 'https://github.com/ragner01/Atlas-bank',
      demo: '#',
      category: 'Enterprise Platform',
      highlights: ['PCI DSS Compliance', 'Microservices', 'Mobile App', 'Event-Driven', 'Banking Grade Security'],
      icon: <Building2 className="w-5 h-5" />
    },
    {
      title: 'OSUTH - Hospital Information System',
      description: 'Production-ready hospital information system for Nigeria featuring multi-facility support, FHIR interoperability, enterprise-grade security. Comprehensive EMR with patient management, appointments, lab/radiology orders, billing, pharmacy, and operational analytics.',
      tech: ['Spring Boot', 'React', 'PostgreSQL', 'Docker', 'Kubernetes', 'FHIR R4', 'Keycloak', 'AWS', 'Terraform'],
      github: 'https://github.com/ragner01/OSUTH',
      demo: '#',
      category: 'Enterprise Platform',
      highlights: ['FHIR Interoperability', 'Multi-Facility', 'Clinical Workflows', 'NHIA/HMO Claims', 'Production Ready'],
      icon: <Stethoscope className="w-5 h-5" />
    },
    {
      title: 'DeltaGrid - Oil & Gas Operations Platform',
      description: 'Enterprise Nigerian upstream O&G operations platform featuring ingestion, allocation, integrity management, PTW, events, optimization, custody transfer, lab management, digital twin, leak detection. Includes Blazor Ops Console, MAUI Field App, API Gateway, observability, data lakehouse, and MLOps capabilities.',
      tech: ['.NET', 'Blazor Server', '.NET MAUI', 'Azure', 'PostgreSQL', 'Azure Data Lake', 'Delta Lake', 'OpenTelemetry', 'YARP', 'MLOps'],
      github: 'https://github.com/ragner01/DeltaGrid',
      demo: '#',
      category: 'Enterprise Platform',
      highlights: ['Digital Twin', 'MLOps', 'Data Lakehouse', 'Offline-First MAUI', 'Production Ready'],
      icon: <Factory className="w-5 h-5" />
    },
    {
      title: 'MicroJobs Marketplace - Enterprise Platform',
      description: 'Production-ready multi-tenant micro-jobs marketplace built with Spring Boot, featuring Domain-Driven Design (DDD), Hexagonal Architecture, and Event Sourcing. Includes microservices, Kafka, PostgreSQL, Redis, Elasticsearch, Keycloak, and comprehensive testing.',
      tech: ['Spring Boot', 'Java 11', 'Kafka', 'PostgreSQL', 'Redis', 'Elasticsearch', 'Keycloak', 'Docker', 'Kubernetes'],
      github: 'https://github.com/ragner01/microjobs-marketplace',
      demo: '#',
      category: 'Enterprise Platform',
      highlights: ['DDD Architecture', 'Event Sourcing', 'Microservices', 'Multi-tenant', 'Production Ready'],
      icon: <Building2 className="w-5 h-5" />
    },
    {
      title: 'InvoicePro - Invoice & Billing Management',
      description: 'A production-ready .NET 8 web application for managing invoices, clients, products, and payments with Clean Architecture principles. Features PDF generation, email integration, and comprehensive business analytics.',
      tech: ['ASP.NET Core 8', 'Entity Framework Core', 'SQLite', 'MediatR', 'AutoMapper', 'Serilog', 'Docker'],
      github: 'https://github.com/ragner01/InvoicePro',
      demo: '#',
      category: 'Backend System',
      highlights: ['Clean Architecture', 'PDF Generation', 'Email Integration', 'Docker Support'],
      icon: <FileText className="w-5 h-5" />
    },
    {
      title: 'Todo API - Minimal Task Management',
      description: 'A minimal ASP.NET Core Todo API with EF Core (SQLite), ETags, JSON Patch, JWT-protected writes, rate limiting, Serilog, Swagger, health checks, and OpenTelemetry for comprehensive task management.',
      tech: ['ASP.NET Core', 'Entity Framework Core', 'SQLite', 'JWT', 'Swagger', 'OpenTelemetry', 'Docker'],
      github: 'https://github.com/ragner01/todo-api',
      demo: '#',
      category: 'API Development',
      highlights: ['JWT Authentication', 'Rate Limiting', 'Health Checks', 'OpenTelemetry'],
      icon: <CheckSquare className="w-5 h-5" />
    },
    {
      title: 'TaxGuru NG - Nigerian Tax Calculator',
      description: 'A comprehensive Nigerian tax calculation platform built with React, TypeScript, and Tailwind CSS. Provides accurate, FIRS-compliant tax calculations for individuals and businesses with real-time calculations and educational resources.',
      tech: ['React', 'TypeScript', 'Tailwind CSS', 'shadcn/ui', 'Vite', 'Netlify'],
      github: 'https://github.com/ragner01/taxguru-ng',
      demo: 'https://taxesguru.netlify.app/',
      category: 'Tax Calculator',
      highlights: ['FIRS Compliant', 'Real-time calculations', 'Educational content', 'Mobile responsive'],
      icon: <Code className="w-5 h-5" />
    },
    {
      title: 'E-School Nigeria Portal',
      description: 'A comprehensive educational portal for Nigerian schools built with React and TypeScript. Features include student management, course tracking, and modern UI/UX design.',
      tech: ['React', 'TypeScript', 'Tailwind CSS', 'shadcn/ui', 'Vite', 'Netlify'],
      github: 'https://github.com/ragner01/e-school-nigeria-portal',
      demo: 'https://e-school-nigeria.netlify.app/',
      category: 'Educational Platform',
      highlights: ['Student management', 'Course tracking', 'Modern UI/UX', 'Responsive design'],
      icon: <Code className="w-5 h-5" />
    },
    {
      title: 'Naija Stock Radar',
      description: 'A stock market tracking and analysis platform for Nigerian stocks. Provides real-time market data, portfolio management, and investment insights for the Nigerian stock market.',
      tech: ['React', 'TypeScript', 'Tailwind CSS', 'shadcn/ui', 'Vite', 'Netlify'],
      github: 'https://github.com/ragner01/naija-stock-radar',
      demo: 'https://naija-stock.netlify.app/',
      category: 'Financial Platform',
      highlights: ['Real-time data', 'Portfolio tracking', 'Market analysis', 'Investment insights'],
      icon: <Code className="w-5 h-5" />
    },
    {
      title: 'SmartRent - Property Management System',
      description: 'Comprehensive property management system built for Nigerian landlords and tenants, featuring modern web technologies and Nigerian localization. Includes Next.js frontend, Spring Boot backend, and integrated payment processing.',
      tech: ['Next.js 15', 'TypeScript', 'Spring Boot', 'Java 11', 'Material-UI', 'JWT', 'Docker'],
      github: 'https://github.com/ragner01/SmartRent',
      demo: '#',
      category: 'Full-Stack',
      highlights: ['Nigerian Localization', 'JWT Authentication', 'Payment Integration', 'Mobile-First Design'],
      icon: <Home className="w-5 h-5" />
    },
    {
      title: 'Currency Converter - MVP Architecture Demo',
      description: 'A Java 17 Maven project demonstrating Model-View-Presenter (MVP) architecture with JavaFX user interface. Features mockable exchange rate service, clean architecture, and support for multiple currency conversions.',
      tech: ['Java 17', 'Maven', 'JavaFX', 'MVP Architecture', 'Mockito', 'JUnit'],
      github: 'https://github.com/ragner01/CurrencyConverter',
      demo: '#',
      category: 'Backend System',
      highlights: ['MVP Architecture', 'JavaFX UI', 'Mockable services', 'Clean Architecture'],
      icon: <DollarSign className="w-5 h-5" />
    },
    {
      title: 'Real-Time Analytics Dashboard',
      description: 'Interactive business intelligence dashboard with live data visualization, custom report generation, and predictive analytics. Integrates with multiple data sources and APIs for comprehensive business insights.',
      tech: ['React', 'TypeScript', 'ASP.NET Core', 'MongoDB', 'Chart.js', 'WebSocket'],
      github: 'https://github.com/ragner01/Real-Time-Analytics-Dashboard',
      demo: '#',
      category: 'Data Visualization',
      highlights: ['Real-time updates', 'Custom charts', 'Export capabilities', 'Predictive Analytics'],
      icon: <BarChart3 className="w-5 h-5" />
    },
    {
      title: 'TaxGuru NG - Nigerian Tax Calculator',
      description: 'A comprehensive Nigerian tax calculation platform built with React, TypeScript, and Tailwind CSS. Provides accurate, FIRS-compliant tax calculations for individuals and businesses with real-time calculations and educational resources.',
      tech: ['React', 'TypeScript', 'Tailwind CSS', 'shadcn/ui', 'Vite', 'Netlify'],
      github: 'https://github.com/ragner01/taxguru-ng',
      demo: 'https://taxesguru.netlify.app/',
      category: 'Tax Calculator',
      highlights: ['FIRS Compliant', 'Real-time calculations', 'Educational content', 'Mobile responsive'],
      icon: <Code className="w-5 h-5" />
    },
    {
      title: 'E-School Nigeria Portal',
      description: 'A comprehensive educational portal for Nigerian schools built with React and TypeScript. Features include student management, course tracking, and modern UI/UX design.',
      tech: ['React', 'TypeScript', 'Tailwind CSS', 'shadcn/ui', 'Vite', 'Netlify'],
      github: 'https://github.com/ragner01/e-school-nigeria-portal',
      demo: 'https://e-school-nigeria.netlify.app/',
      category: 'Educational Platform',
      highlights: ['Student management', 'Course tracking', 'Modern UI/UX', 'Responsive design'],
      icon: <Code className="w-5 h-5" />
    },
    {
      title: 'Naija Stock Radar',
      description: 'A stock market tracking and analysis platform for Nigerian stocks. Provides real-time market data, portfolio management, and investment insights for the Nigerian stock market.',
      tech: ['React', 'TypeScript', 'Tailwind CSS', 'shadcn/ui', 'Vite', 'Netlify'],
      github: 'https://github.com/ragner01/naija-stock-radar',
      demo: 'https://naija-stock.netlify.app/',
      category: 'Financial Platform',
      highlights: ['Real-time data', 'Portfolio tracking', 'Market analysis', 'Investment insights'],
      icon: <Code className="w-5 h-5" />
    },
    {
      title: 'Nexus Chat - Real-Time Messaging Platform',
      description: 'Modern full-stack chat application with real-time messaging capabilities, user profiles, and multiple authentication methods. Built with React, TypeScript, and Firebase for seamless real-time communication.',
      tech: ['React', 'TypeScript', 'Firebase', 'Tailwind CSS', 'React Router', 'Context API'],
      github: 'https://github.com/ragner01/Nexus-Chat',
      demo: '#',
      category: 'Communication Platform',
      highlights: ['Real-time messaging', 'Firebase integration', 'User authentication', 'Modern UI/UX'],
      icon: <MessageCircle className="w-5 h-5" />
    }
  ];

  // Get unique categories from projects
  const projectCategories: ProjectCategory[] = ['All', ...Array.from(new Set(projects.map(p => p.category as ProjectCategory)))];
  
  // Filter projects based on active category
  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const AboutSection = () => {
    const { elementRef: aboutRef, isVisible: aboutVisible } = useScrollAnimation();
    const { elementRef: card1Ref, isVisible: card1Visible } = useScrollAnimation();
    const { elementRef: card2Ref, isVisible: card2Visible } = useScrollAnimation();

    return (
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div 
            ref={aboutRef}
            className={`text-center mb-16 transition-all duration-1000 ${
              aboutVisible ? 'animate-slide-down opacity-100' : 'opacity-0'
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              I'm a versatile developer with expertise in both frontend and backend technologies. 
              My passion lies in building scalable applications and leading teams to deliver exceptional results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div ref={card1Ref}>
              <Card className={`bg-gradient-card backdrop-blur-sm border-glass-border shadow-card transition-all duration-1000 ${
                card1Visible ? 'animate-slide-left opacity-100' : 'opacity-0'
              }`}>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4">Technical Expertise</h3>
                  <p className="text-foreground/80 mb-6">
                    With years of experience in full-stack development, I specialize in creating robust, 
                    scalable applications using modern technologies. My technical stack includes React, 
                    TypeScript, Java, ASP.NET, and various databases.
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <h4 className="font-semibold mb-2">Frontend</h4>
                      <ul className="space-y-1 text-muted-foreground">
                        <li>React & TypeScript</li>
                        <li>JavaScript ES6+</li>
                        <li>HTML5 & CSS3</li>
                        <li>Tailwind CSS</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Backend</h4>
                      <ul className="space-y-1 text-muted-foreground">
                        <li>Java & Spring Boot</li>
                        <li>ASP.NET Core</li>
                        <li>SQL Server</li>
                        <li>PostgreSQL</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div ref={card2Ref}>
              <Card className={`bg-gradient-card backdrop-blur-sm border-glass-border shadow-card transition-all duration-1000 ${
                card2Visible ? 'animate-slide-right opacity-100' : 'opacity-0'
              }`}>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4">Leadership & Management</h3>
                  <p className="text-foreground/80 mb-6">
                    Beyond technical skills, I excel in project management and team leadership. 
                    I have successfully managed cross-functional teams and delivered projects on time and within budget.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Target className="w-5 h-5 text-primary" />
                      <span>Project Planning & Execution</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users className="w-5 h-5 text-primary" />
                      <span>Team Leadership & Mentoring</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MessageCircle className="w-5 h-5 text-primary" />
                      <span>Stakeholder Communication</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    );
  };

  const SkillsSection = () => {
    const { elementRef: skillsRef, isVisible: skillsVisible } = useScrollAnimation();
    const { elementRef: gridRef, visibleItems } = useStaggeredAnimation(skills.length, 200);

    return (
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div 
            ref={skillsRef}
            className={`text-center mb-16 transition-all duration-1000 ${
              skillsVisible ? 'animate-zoom-in opacity-100' : 'opacity-0'
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills & Expertise</h2>
            <p className="text-xl text-muted-foreground">
              A comprehensive overview of my technical and soft skills
            </p>
          </div>

          <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className={`transition-all duration-500 ${
                  visibleItems[index] ? 'animate-slide-up opacity-100' : 'opacity-0'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    {skill.icon}
                    <span className="text-sm font-medium">{skill.name}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2 overflow-hidden">
                  <div 
                    className="h-full bg-gradient-primary rounded-full transition-all duration-2000 ease-out"
                    style={{ 
                      width: visibleItems[index] ? `${skill.level}%` : '0%'
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  const ProjectsSection = () => {
    const { elementRef: projectsRef, isVisible: projectsVisible } = useScrollAnimation();
    const { elementRef: gridRef, visibleItems } = useStaggeredAnimation(filteredProjects.length, 100);

    return (
      <section id="projects" className="py-20 bg-background relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div 
            ref={projectsRef}
            className={`text-center mb-16 transition-all duration-1000 ${
              projectsVisible ? 'animate-slide-down opacity-100' : 'opacity-0'
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-xl text-muted-foreground">
              Some of my recent work and personal projects
            </p>
          </div>

          <ProjectFilter
            categories={projectCategories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
            projectCount={filteredProjects.length}
          />

          <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {filteredProjects.map((project, index) => (
              <div
                key={project.title}
                className={`transition-all duration-1000 ${
                  visibleItems[index] 
                    ? 'animate-slide-down opacity-100' 
                    : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative group">
                  {/* Gradient background with animation */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-700 opacity-0 group-hover:opacity-100"></div>
                  
                  {/* Main content */}
                  <div className="relative bg-gradient-to-br from-background/90 via-background/80 to-background/90 backdrop-blur-xl rounded-3xl p-8 border border-border/40 shadow-2xl hover:shadow-primary/20 transition-all duration-300 hover:border-primary/40 hover:-translate-y-1 h-full flex flex-col">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-lg text-xs font-semibold border border-primary/20">
                        {project.category}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center border border-primary/20 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                        {project.icon}
                      </div>
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-xl font-bold mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-accent group-hover:bg-clip-text transition-all duration-500 line-clamp-2">
                      {project.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed text-sm mb-6 flex-grow line-clamp-3">
                      {project.description}
                    </p>
                    
                    {/* Highlights */}
                    <div className="mb-4 flex flex-wrap gap-2">
                      {project.highlights.slice(0, 3).map((highlight) => (
                        <span 
                          key={highlight}
                          className="px-2 py-1 bg-primary/10 text-xs rounded-md border border-primary/20"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                    
                    {/* Tech Stack */}
                    <div className="mb-6 flex flex-wrap gap-2">
                      {project.tech.slice(0, 5).map((tech) => (
                        <span 
                          key={tech} 
                          className="px-2 py-1 bg-background/60 text-xs rounded border border-border/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    {/* Action buttons */}
                    <div className="flex gap-2 mt-auto">
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="flex-1"
                        onClick={() => window.open(project.github, '_blank')}
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                      <Button 
                        size="sm" 
                        className="flex-1 bg-gradient-to-r from-primary to-accent"
                        onClick={() => project.demo !== '#' ? window.open(project.demo, '_blank') : null}
                        disabled={project.demo === '#'}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        {project.demo !== '#' ? 'Demo' : 'Coming Soon'}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  const ContactSection = () => {
    const { elementRef: contactRef, isVisible: contactVisible } = useScrollAnimation();

    return (
      <section id="contact" className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div 
            ref={contactRef}
            className={`text-center mb-16 transition-all duration-1000 ${
              contactVisible ? 'animate-slide-down opacity-100' : 'opacity-0'
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
            <p className="text-xl text-muted-foreground">
              Let's work together to bring your ideas to life
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
                  <p className="text-foreground/80 mb-6">
                    I'm always open to discussing new opportunities, interesting projects, 
                    or just having a chat about technology and development.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-primary" />
                      <a 
                        href="mailto:alimiomotola20@gmail.com"
                        className="text-foreground hover:text-primary transition-colors"
                      >
                        alimiomotola20@gmail.com
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Github className="w-5 h-5 text-primary" />
                      <a 
                        href="https://github.com/ragner01"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground hover:text-primary transition-colors"
                      >
                        github.com/ragner01
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Linkedin className="w-5 h-5 text-primary" />
                      <a 
                        href="https://linkedin.com/in/abdul-jeleel-alimi-1a2380219"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground hover:text-primary transition-colors"
                      >
                        linkedin.com/in/abdul-jeleel-alimi-1a2380219
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <Button 
                    size="lg"
                    className="bg-gradient-primary hover:shadow-glow"
                    onClick={() => window.open('mailto:alimiomotola20@gmail.com', '_blank')}
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Send Email
                  </Button>
                  <ResumeDownload />
                </div>
              </div>
              
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    );
  };

  const SkillBar = ({ skill, index }: { skill: typeof skills[0], index: number }) => {
    const { elementRef, isVisible } = useScrollAnimation();
    
    return (
      <div 
        ref={elementRef}
        className={`transition-all duration-500 ${
          isVisible ? 'animate-slide-up opacity-100' : 'opacity-0'
        }`}
        style={{ animationDelay: `${index * 0.2}s` }}
      >
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            {skill.icon}
            <span className="text-sm font-medium">{skill.name}</span>
          </div>
          <span className="text-sm text-muted-foreground">{skill.level}%</span>
        </div>
        <div className="w-full bg-secondary rounded-full h-2 overflow-hidden">
          <div 
            className="h-full bg-gradient-primary rounded-full transition-all duration-2000 ease-out"
            style={{ 
              width: isVisible ? `${skill.level}%` : '0%',
              transitionDelay: `${index * 0.2}s`
            }}
          />
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead />
      <GoogleAnalytics />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-glass-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Alimi Omotola
            </div>
            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-8">
                <a href="#about" className="text-foreground hover:text-primary transition-colors">About</a>
                <a href="#skills" className="text-foreground hover:text-primary transition-colors">Skills</a>
                <a href="#projects" className="text-foreground hover:text-primary transition-colors">Projects</a>
                <a href="#blog" className="text-foreground hover:text-primary transition-colors">Blog</a>
                <a href="#testimonials" className="text-foreground hover:text-primary transition-colors">Testimonials</a>
                <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
              </div>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main>
        <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden" role="banner">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-32 h-32 bg-primary/20 rounded-full animate-parallax-float"></div>
          <div className="absolute top-40 right-32 w-24 h-24 bg-accent/20 rounded-full animate-parallax-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-32 left-1/4 w-16 h-16 bg-primary/30 rounded-full animate-parallax-float" style={{ animationDelay: '4s' }}></div>
          <div className="absolute bottom-20 right-20 w-20 h-20 bg-accent/25 rounded-full animate-parallax-float" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className={`transition-all duration-1000 ${isVisible ? 'animate-zoom-in' : 'opacity-0'}`}>
            <div className="relative w-32 h-32 mx-auto mb-6">
              <div className="absolute inset-0 rounded-full bg-gradient-primary animate-glow opacity-30"></div>
              <img 
                src="/profile-image.jpg" 
                alt="Alimi Omotola" 
                className="w-full h-full object-cover rounded-full border-4 border-glass-border animate-float"
              />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Alimi Omotola
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Full-Stack Developer & Project Manager
            </p>
            <p className="text-lg text-foreground/80 mb-8 max-w-2xl mx-auto">
              Passionate about creating innovative solutions with React, Java, ASP.NET, and modern web technologies. 
              Experienced in leading teams and managing complex projects from conception to deployment.
            </p>
            <div className="flex gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get In Touch
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-glass-border hover:bg-glass-bg transition-all duration-300"
                onClick={() => window.open('https://github.com/ragner01', '_blank')}
              >
                <Github className="w-5 h-5 mr-2" />
                GitHub
              </Button>
            </div>
          </div>
        </div>
      </section>

        {/* About Section */}
        <AboutSection />

        {/* Skills Section */}
        <SkillsSection />

        {/* Projects Section */}
        <ProjectsSection />

        {/* Blog Section */}
        <BlogSection />

        {/* Testimonials Section */}
        <TestimonialsSection />

        {/* Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <footer className="py-8 bg-background border-t border-glass-border">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2024 Alimi Omotola. Built with React, TypeScript, and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
