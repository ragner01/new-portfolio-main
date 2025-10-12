import { useState, useEffect } from 'react';
import { Github, Mail, ExternalLink, Code, Database, Laptop, Users, Target, MessageCircle, Linkedin, FileText, CheckSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useScrollAnimation, useStaggeredAnimation } from '@/hooks/use-scroll-animation';

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skills = [
    { name: 'React', level: 90, icon: <Code className="w-5 h-5" /> },
    { name: 'TypeScript', level: 85, icon: <Code className="w-5 h-5" /> },
    { name: 'JavaScript', level: 95, icon: <Code className="w-5 h-5" /> },
    { name: 'Java', level: 80, icon: <Laptop className="w-5 h-5" /> },
    { name: 'ASP.NET', level: 75, icon: <Database className="w-5 h-5" /> },
    { name: 'Project Management', level: 85, icon: <Target className="w-5 h-5" /> },
    { name: 'Team Leadership', level: 80, icon: <Users className="w-5 h-5" /> },
    { name: 'Communication', level: 90, icon: <MessageCircle className="w-5 h-5" /> },
  ];

  const projects = [
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
      title: 'Enterprise Task Management Platform',
      description: 'Comprehensive project management solution with real-time collaboration, Gantt charts, resource allocation, and advanced reporting. Supports teams up to 500+ members with role-based access control.',
      tech: ['React', 'TypeScript', 'ASP.NET Core', 'SQL Server', 'SignalR', 'Azure'],
      github: 'https://github.com/ragner01',
      demo: '#',
      category: 'Full-Stack',
      highlights: ['Real-time collaboration', 'Advanced analytics', 'Enterprise-grade security'],
      icon: <Code className="w-5 h-5" />
    }
  ];

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
    const { elementRef: gridRef, visibleItems } = useStaggeredAnimation(skills.length, 150);

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

          <div ref={gridRef} className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className={`transition-all duration-500 ${
                  visibleItems[index] ? 'animate-slide-up opacity-100' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
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
                      width: visibleItems[index] ? `${skill.level}%` : '0%',
                      transitionDelay: `${index * 0.1}s`
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
    const { elementRef: gridRef, visibleItems } = useStaggeredAnimation(projects.length, 200);

    return (
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div 
            ref={projectsRef}
            className={`text-center mb-16 transition-all duration-1000 ${
              projectsVisible ? 'animate-flip-in opacity-100' : 'opacity-0'
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
            <p className="text-xl text-muted-foreground">
              Some of my recent work and personal projects
            </p>
          </div>

          <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={`transition-all duration-500 ${
                  visibleItems[index] ? 'animate-zoom-in opacity-100' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Card className="bg-gradient-card backdrop-blur-sm border-glass-border shadow-card hover:shadow-glow transition-all duration-500 group h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-2 py-1 bg-accent/20 text-accent rounded-md text-xs font-medium">
                        {project.category}
                      </span>
                      <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                        {project.icon}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                      {project.description}
                    </p>
                    
                    {/* Highlights */}
                    <div className="mb-4">
                      <h4 className="text-xs font-semibold text-foreground/80 mb-2">Key Features:</h4>
                      <div className="flex flex-wrap gap-1">
                        {project.highlights.map((highlight) => (
                          <span 
                            key={highlight}
                            className="px-2 py-1 bg-primary/5 text-primary border border-primary/20 rounded text-xs"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Tech Stack */}
                    <div className="mb-6">
                      <h4 className="text-xs font-semibold text-foreground/80 mb-2">Tech Stack:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <span 
                            key={tech} 
                            className="px-3 py-1 bg-secondary/50 text-secondary-foreground rounded-full text-xs border border-secondary"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex gap-3">
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="flex-1 border-glass-border hover:bg-glass-bg transition-all duration-300"
                        onClick={() => window.open(project.github, '_blank')}
                      >
                        <Github className="w-4 h-4 mr-2" />
                        View Code
                      </Button>
                      <Button 
                        size="sm" 
                        className="flex-1 bg-gradient-primary hover:shadow-primary transition-all duration-300"
                        onClick={() => window.open(project.demo, '_blank')}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  const ContactSection = () => {
    const { elementRef: contactRef, isVisible: contactVisible } = useScrollAnimation();
    const { elementRef: cardRef, isVisible: cardVisible } = useScrollAnimation();

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
            <div ref={cardRef}>
              <Card className={`bg-gradient-card backdrop-blur-sm border-glass-border shadow-card transition-all duration-1000 ${
                cardVisible ? 'animate-zoom-in opacity-100' : 'opacity-0'
              }`}>
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-8">
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
                    <div className="flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-24 h-24 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center animate-glow">
                          <Mail className="w-12 h-12 text-white" />
                        </div>
                        <p className="text-muted-foreground mb-4">Ready to start a project?</p>
                        <Button 
                          size="lg"
                          className="bg-gradient-primary hover:shadow-glow"
                          onClick={() => window.open('mailto:alimiomotola20@gmail.com', '_blank')}
                        >
                          Send Email
                        </Button>
                      </div>
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

  const SkillBar = ({ skill, index }: { skill: typeof skills[0], index: number }) => {
    const { elementRef, isVisible } = useScrollAnimation();
    
    return (
      <div 
        ref={elementRef}
        className={`transition-all duration-500 ${
          isVisible ? 'animate-slide-up opacity-100' : 'opacity-0'
        }`}
        style={{ animationDelay: `${index * 0.1}s` }}
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
              transitionDelay: `${index * 0.1}s`
            }}
          />
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
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

      {/* Contact Section */}
      <ContactSection />

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
