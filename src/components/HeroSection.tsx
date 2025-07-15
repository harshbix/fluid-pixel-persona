import { useTheme } from '@/hooks/useTheme';
import { useClock } from '@/hooks/useClock';
import { WaterMorph } from './WaterMorph';
import { PartyPopper } from 'lucide-react';

export const HeroSection = () => {
  const { isBirthday, cycleSecretTheme } = useTheme();
  const { formattedTime, formattedDate } = useClock();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <WaterMorph />
      
      {/* Birthday Banner */}
      {isBirthday && (
        <div className="absolute top-8 left-1/2 -translate-x-1/2 z-20">
          <div className="glass-panel rounded-full px-6 py-3 flex items-center gap-2 animate-glow-pulse">
            <PartyPopper className="w-5 h-5 text-primary animate-bounce" />
            <span className="text-primary font-medium">
              🎉 Happy Birthday, Bix!
            </span>
            <PartyPopper className="w-5 h-5 text-primary animate-bounce" style={{ animationDelay: '0.2s' }} />
          </div>
        </div>
      )}

      {/* Main Hero Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        {/* Logo/Name - clickable for secret theme */}
        <h1 
          className="text-6xl md:text-8xl font-bold mb-6 cursor-pointer transition-smooth glass-glow ripple-effect"
          onClick={cycleSecretTheme}
        >
          <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-float">
            Bix Chen
          </span>
        </h1>

        {/* Tagline with humor */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-float" style={{ animationDelay: '0.5s' }}>
          Designer by day. Pixel perfectionist by night.
          <br />
          <span className="text-lg text-muted-foreground/80">
            Currently making interfaces that don't make users cry.
          </span>
        </p>

        {/* Live Clock */}
        <div className="glass-panel rounded-2xl p-6 max-w-md mx-auto mb-8 animate-float" style={{ animationDelay: '1s' }}>
          <div className="text-2xl md:text-3xl font-mono text-primary mb-2">
            {formattedTime}
          </div>
          <div className="text-sm text-muted-foreground">
            {formattedDate}
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-float" style={{ animationDelay: '1.5s' }}>
          <button className="glass-panel px-8 py-3 rounded-full text-primary font-medium hover:bg-primary hover:text-primary-foreground transition-smooth glass-glow ripple-effect">
            View My Work
          </button>
          <button className="glass-panel px-8 py-3 rounded-full text-muted-foreground hover:text-primary transition-smooth glass-glow ripple-effect">
            Get In Touch
          </button>
        </div>

        {/* Easter Egg Hint */}
        <p className="text-xs text-muted-foreground/60 mt-8 animate-float" style={{ animationDelay: '2s' }}>
          Psst... try pressing "W" or clicking my name 🎨
        </p>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};