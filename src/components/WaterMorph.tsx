import { useEffect, useRef } from 'react';

interface WaterMorphProps {
  className?: string;
}

export const WaterMorph: React.FC<WaterMorphProps> = ({ className = '' }) => {
  const morphRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const morph = morphRef.current;
    if (!morph) return;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const rotation = scrollY * 0.1;
      const scale = 1 + (scrollY * 0.0005);
      
      morph.style.transform = `translateX(-50%) translateY(-50%) rotate(${rotation}deg) scale(${scale})`;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      ref={morphRef}
      className={`
        water-morph fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
        w-96 h-96 opacity-20 pointer-events-none z-0
        ${className}
      `}
      style={{
        background: 'var(--gradient-water)',
        borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
      }}
    />
  );
};