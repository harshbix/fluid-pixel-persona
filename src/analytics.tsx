// Google Analytics (GA4) integration
import { useEffect } from 'react';

const GA_MEASUREMENT_ID = process.env.VITE_GA_ID || '';

export function useAnalytics() {
  useEffect(() => {
    if (!GA_MEASUREMENT_ID || window.gtag) return;
    const script = document.createElement('script');
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    script.async = true;
    document.head.appendChild(script);
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: unknown[]) {
      window.dataLayer.push(args);
    }
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', GA_MEASUREMENT_ID);
  }, []);
}
