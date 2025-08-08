import { useState, useEffect, useRef } from 'react';

interface UseCountAnimationProps {
  endValue: number;
  duration?: number;
  delay?: number;
}

export const useCountAnimation = ({ endValue, duration = 2000, delay = 0 }: UseCountAnimationProps) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            
            setTimeout(() => {
              const startTime = Date.now();
              const startValue = 0;
              
              const animate = () => {
                const currentTime = Date.now();
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                
                // Easing function for smooth animation
                const easeOutQuart = 1 - Math.pow(1 - progress, 4);
                const currentValue = Math.floor(startValue + (endValue - startValue) * easeOutQuart);
                
                setCount(currentValue);
                
                if (progress < 1) {
                  requestAnimationFrame(animate);
                }
              };
              
              requestAnimationFrame(animate);
            }, delay);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [endValue, duration, delay, hasAnimated]);

  return { count, elementRef };
};
