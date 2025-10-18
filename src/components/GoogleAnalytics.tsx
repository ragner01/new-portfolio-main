import { useEffect } from 'react';

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

export const GoogleAnalytics = () => {
  useEffect(() => {
    // Load Google Analytics
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = 'https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID';
    document.head.appendChild(script1);

    // Initialize gtag
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) {
      window.dataLayer.push(args);
    }
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', 'GA_MEASUREMENT_ID', {
      page_title: 'Alimi Omotola Portfolio',
      page_location: window.location.href,
    });

    return () => {
      // Cleanup
      document.head.removeChild(script1);
    };
  }, []);

  return null;
};
