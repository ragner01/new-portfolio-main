import { Button } from '@/components/ui/button';
import { Download, FileText } from 'lucide-react';

export const ResumeDownload = () => {
  const handleDownload = () => {
    // Create a simple resume content (in a real app, this would be a PDF file)
    const resumeContent = `
ALIMI OMOTOLA
Full-Stack Developer & Project Manager

CONTACT
Email: alimiomotola20@gmail.com
GitHub: github.com/ragner01
LinkedIn: linkedin.com/in/abdul-jeleel-alimi-1a2380219

EXPERIENCE
• Enterprise Platform Development with Spring Boot, DDD, and Event Sourcing
• Full-Stack Applications using React, Next.js, ASP.NET Core, and Java
• Nigerian Market Localization and Payment Integration
• Production-Ready System Architecture and Deployment

TECHNICAL SKILLS
Frontend: React, Next.js, TypeScript, Tailwind CSS, Material-UI
Backend: Spring Boot, ASP.NET Core, Java, C#
Databases: PostgreSQL, MongoDB, SQLite, Redis
Cloud & DevOps: Docker, Kubernetes, Azure
Architecture: DDD, Hexagonal Architecture, Microservices, Event Sourcing

PROJECTS
• MicroJobs Marketplace - Enterprise microservices platform
• InvoicePro - .NET 8 invoice management system
• SmartRent - Property management for Nigerian market
• Real-Time Analytics Dashboard - Business intelligence platform
• TaxGuru NG - Nigerian tax calculation platform
    `;

    const blob = new Blob([resumeContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Alimi_Omotola_Resume.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  return (
    <Button
      onClick={handleDownload}
      variant="outline"
      size="sm"
      className="border-glass-border hover:bg-glass-bg transition-all duration-300"
    >
      <Download className="w-4 h-4 mr-2" />
      Resume
    </Button>
  );
};
