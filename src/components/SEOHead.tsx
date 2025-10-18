import { Helmet } from 'react-helmet-async';

export const SEOHead = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Alimi Omotola",
    "jobTitle": "Full-Stack Developer & Project Manager",
    "description": "Experienced Full-Stack Developer specializing in React, Java, ASP.NET Core, and modern web technologies. Building scalable applications for Nigerian and international markets.",
    "url": "https://omotolaportfolio.netlify.app",
    "image": "https://omotolaportfolio.netlify.app/profile-image.jpg",
    "sameAs": [
      "https://github.com/ragner01",
      "https://linkedin.com/in/abdul-jeleel-alimi-1a2380219"
    ],
    "email": "alimiomotola20@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "Nigeria"
    },
    "knowsAbout": [
      "React",
      "TypeScript",
      "JavaScript",
      "Java",
      "Spring Boot",
      "ASP.NET Core",
      "Node.js",
      "PostgreSQL",
      "MongoDB",
      "Docker",
      "Kubernetes",
      "Microservices",
      "Domain-Driven Design",
      "Event Sourcing",
      "Full-Stack Development",
      "Project Management"
    ],
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Full-Stack Developer",
      "occupationLocation": {
        "@type": "Country",
        "name": "Nigeria"
      }
    },
    "worksFor": {
      "@type": "Organization",
      "name": "Freelance Developer"
    }
  };

  const websiteStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Alimi Omotola Portfolio",
    "url": "https://omotolaportfolio.netlify.app",
    "description": "Professional portfolio showcasing full-stack development projects, technical expertise, and professional experience.",
    "author": {
      "@type": "Person",
      "name": "Alimi Omotola"
    },
    "inLanguage": "en-US",
    "copyrightYear": "2024",
    "genre": "Portfolio"
  };

  const portfolioStructuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Portfolio Projects",
    "description": "Collection of full-stack development projects showcasing technical expertise",
    "itemListElement": [
      {
        "@type": "CreativeWork",
        "position": 1,
        "name": "MicroJobs Marketplace",
        "description": "Enterprise microservices platform built with Spring Boot, DDD, and Event Sourcing",
        "url": "https://github.com/ragner01/microjobs-marketplace",
        "programmingLanguage": ["Java", "Spring Boot", "Kafka", "PostgreSQL"],
        "applicationCategory": "Enterprise Platform"
      },
      {
        "@type": "CreativeWork",
        "position": 2,
        "name": "InvoicePro",
        "description": "Production-ready .NET 8 invoice management system with Clean Architecture",
        "url": "https://github.com/ragner01/InvoicePro",
        "programmingLanguage": ["C#", "ASP.NET Core", "Entity Framework Core"],
        "applicationCategory": "Backend System"
      },
      {
        "@type": "CreativeWork",
        "position": 3,
        "name": "SmartRent",
        "description": "Property management system for Nigerian landlords and tenants",
        "url": "https://github.com/ragner01/SmartRent",
        "programmingLanguage": ["Next.js", "TypeScript", "Spring Boot", "Java"],
        "applicationCategory": "Full-Stack Application"
      },
      {
        "@type": "CreativeWork",
        "position": 4,
        "name": "Real-Time Analytics Dashboard",
        "description": "Business intelligence platform with live data visualization",
        "url": "https://github.com/ragner01/Real-Time-Analytics-Dashboard",
        "programmingLanguage": ["React", "TypeScript", "ASP.NET Core", "MongoDB"],
        "applicationCategory": "Data Visualization"
      }
    ]
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>Alimi Omotola - Full-Stack Developer & Project Manager | React, Java, ASP.NET Expert</title>
      <meta name="title" content="Alimi Omotola - Full-Stack Developer & Project Manager | React, Java, ASP.NET Expert" />
      <meta name="description" content="Experienced Full-Stack Developer specializing in React, Java, ASP.NET Core, Spring Boot, and modern web technologies. Building scalable applications for Nigerian and international markets. Available for freelance projects." />
      <meta name="keywords" content="Full-Stack Developer, React Developer, Java Developer, ASP.NET Developer, Spring Boot, TypeScript, JavaScript, Node.js, Microservices, DDD, Event Sourcing, Nigeria Developer, Freelance Developer, Project Manager, Portfolio" />
      <meta name="author" content="Alimi Omotola" />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="bingbot" content="index, follow" />
      
      {/* Language and Location */}
      <meta name="language" content="English" />
      <meta name="geo.region" content="NG" />
      <meta name="geo.country" content="Nigeria" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://omotolaportfolio.netlify.app/" />
      <meta property="og:title" content="Alimi Omotola - Full-Stack Developer & Project Manager" />
      <meta property="og:description" content="Experienced Full-Stack Developer specializing in React, Java, ASP.NET Core, and modern web technologies. Building scalable applications for Nigerian and international markets." />
      <meta property="og:image" content="https://omotolaportfolio.netlify.app/profile-image.jpg" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Alimi Omotola - Full-Stack Developer" />
      <meta property="og:site_name" content="Alimi Omotola Portfolio" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://omotolaportfolio.netlify.app/" />
      <meta property="twitter:title" content="Alimi Omotola - Full-Stack Developer & Project Manager" />
      <meta property="twitter:description" content="Experienced Full-Stack Developer specializing in React, Java, ASP.NET Core, and modern web technologies." />
      <meta property="twitter:image" content="https://omotolaportfolio.netlify.app/profile-image.jpg" />
      <meta property="twitter:image:alt" content="Alimi Omotola - Full-Stack Developer" />
      
      {/* Additional SEO */}
      <link rel="canonical" href="https://omotolaportfolio.netlify.app/" />
      <meta name="theme-color" content="#3b82f6" />
      <meta name="msapplication-TileColor" content="#3b82f6" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Alimi Omotola Portfolio" />
      
      {/* Preload critical resources */}
      <link rel="preload" href="/profile-image.jpg" as="image" type="image/jpeg" />
      <link rel="preload" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" as="style" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(websiteStructuredData)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(portfolioStructuredData)}
      </script>
      
      {/* Additional Meta Tags for Better SEO */}
      <meta name="application-name" content="Alimi Omotola Portfolio" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="msapplication-config" content="/browserconfig.xml" />
      <meta name="msapplication-tap-highlight" content="no" />
      
      {/* Performance and Accessibility */}
      <meta name="referrer" content="origin-when-cross-origin" />
      <meta name="color-scheme" content="light dark" />
    </Helmet>
  );
};
