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
      
      {/* Vintage Film Grain Overlay */}
      <div className="absolute inset-0 opacity-20 pointer-events-none z-5" 
           style={{
             backgroundImage: `radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
                              radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
                              radial-gradient(circle at 40% 80%, rgba(120, 119, 198, 0.2) 0%, transparent 50%)`,
             filter: 'contrast(1.2) brightness(0.8)'
           }}>
      </div>
      
      {/* Birthday Banner */}
      {isBirthday && (
        <div className="absolute top-8 left-1/2 -translate-x-1/2 z-20">
          <div className="relative">
            <div className="absolute inset-0 bg-primary/10 rounded-none transform -skew-x-6"></div>
            <div className="relative border-2 border-primary/30 bg-background/80 backdrop-blur-sm px-8 py-4 flex items-center gap-3 shadow-lg">
              <PartyPopper className="w-5 h-5 text-primary animate-bounce" />
              <span className="text-primary font-bold tracking-wide uppercase text-sm">
                🎉 Happy Birthday, Bix!
              </span>
              <PartyPopper className="w-5 h-5 text-primary animate-bounce" style={{ animationDelay: '0.2s' }} />
            </div>
          </div>
        </div>
      )}

      {/* Main Hero Content */}
      <div className="relative z-10 text-center max-w-7xl mx-auto px-6 w-full">
        {/* Vintage Frame Border */}
        <div className="absolute inset-0 border-8 border-primary/20 transform rotate-1 rounded-sm opacity-30"></div>
        <div className="absolute inset-0 border-4 border-accent/20 transform -rotate-1 rounded-sm opacity-20"></div>
        
        <div className="relative">
          {/* Desktop Layout */}
          <div className="hidden lg:flex items-center justify-between gap-8 px-8">
            {/* Left Side - Name and Tagline */}
            <div className="flex-1 text-left">
              <div className="relative mb-4">
                <h1 
                  className="text-4xl xl:text-6xl font-bold cursor-pointer transition-smooth ripple-effect relative select-none"
                  onClick={cycleSecretTheme}
                  style={{
                    fontFamily: 'serif',
                    textShadow: '4px 4px 8px rgba(0,0,0,0.3), 0 0 20px rgba(120, 119, 198, 0.3)',
                    letterSpacing: '0.1em'
                  }}
                >
                  <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-float inline-block">
                    Junior Jeconia
                  </span>
                  {/* Vintage Underline */}
                  <div className="absolute bottom-0 left-0 w-3/4 h-1 bg-gradient-to-r from-primary via-accent to-transparent opacity-60"></div>
                </h1>
              </div>

              {/* Tagline */}
              <div className="relative">
                <div className="absolute inset-0 bg-background/40 backdrop-blur-sm border border-primary/20 transform rotate-1 rounded-sm"></div>
                <p className="relative text-lg xl:text-xl text-muted-foreground py-4 px-4 animate-float" 
                   style={{ 
                     animationDelay: '0.5s',
                     fontFamily: 'serif',
                     fontStyle: 'italic'
                   }}>
                  Designer by day. Pixel perfectionist by night.
                  <br />
                  <span className="text-base text-muted-foreground/80 font-normal">
                    Currently making interfaces that don't make users cry.
                  </span>
                </p>
              </div>
            </div>

            {/* Right Side - Clock and Buttons */}
            <div className="flex-1 max-w-md space-y-6">
              {/* Live Clock */}
              <div className="relative animate-float" style={{ animationDelay: '1s' }}>
                <div className="absolute inset-0 bg-primary/10 transform -skew-x-3 rounded-sm"></div>
                <div className="relative border-2 border-primary/30 bg-background/80 backdrop-blur-sm rounded-sm p-6 shadow-lg">
                  <div className="text-xl xl:text-2xl font-mono text-primary mb-2 tracking-wider"
                       style={{ textShadow: '0 0 10px rgba(120, 119, 198, 0.5)' }}>
                    {formattedTime}
                  </div>
                  <div className="text-sm text-muted-foreground uppercase tracking-widest font-bold">
                    {formattedDate}
                  </div>
                  {/* Vintage Clock Decoration */}
                  <div className="absolute top-2 left-2 w-2 h-2 bg-primary/30 rounded-full"></div>
                  <div className="absolute top-2 right-2 w-2 h-2 bg-primary/30 rounded-full"></div>
                  <div className="absolute bottom-2 left-2 w-2 h-2 bg-primary/30 rounded-full"></div>
                  <div className="absolute bottom-2 right-2 w-2 h-2 bg-primary/30 rounded-full"></div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col gap-4 animate-float" style={{ animationDelay: '1.5s' }}>
                <button className="relative group">
                  <div className="absolute inset-0 bg-primary transform skew-x-3 group-hover:skew-x-0 transition-transform duration-300"></div>
                  <div className="relative border-2 border-primary bg-background hover:bg-primary px-6 py-3 text-primary hover:text-primary-foreground font-bold uppercase tracking-wide transition-all duration-300 shadow-lg">
                    View My Work
                  </div>
                </button>
                <button className="relative group">
                  <div className="absolute inset-0 bg-accent/20 transform -skew-x-3 group-hover:skew-x-0 transition-transform duration-300"></div>
                  <div className="relative border-2 border-accent/50 bg-background/80 backdrop-blur-sm hover:bg-accent/20 px-6 py-3 text-muted-foreground hover:text-primary font-bold uppercase tracking-wide transition-all duration-300 shadow-lg">
                    Get In Touch
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="lg:hidden text-center">
            {/* Logo/Name - clickable for secret theme */}
            <div className="relative mb-6">
              <h1 
                className="text-5xl md:text-7xl font-bold cursor-pointer transition-smooth ripple-effect relative select-none"
                onClick={cycleSecretTheme}
                style={{
                  fontFamily: 'serif',
                  textShadow: '4px 4px 8px rgba(0,0,0,0.3), 0 0 20px rgba(120, 119, 198, 0.3)',
                  letterSpacing: '0.1em'
                }}
              >
                <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-float inline-block">
                  Junior Jeconia
                </span>
                {/* Vintage Underline */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-60"></div>
              </h1>
            </div>

            {/* Tagline */}
            <div className="relative mb-8">
              <div className="absolute inset-0 bg-background/40 backdrop-blur-sm border border-primary/20 transform rotate-1 rounded-sm"></div>
              <p className="relative text-xl md:text-2xl text-muted-foreground py-6 px-4 animate-float" 
                 style={{ 
                   animationDelay: '0.5s',
                   fontFamily: 'serif',
                   fontStyle: 'italic'
                 }}>
                Designer by day. Pixel perfectionist by night.
                <br />
                <span className="text-lg text-muted-foreground/80 font-normal">
                  Currently making interfaces that don't make users cry.
                </span>
              </p>
            </div>

            {/* Live Clock */}
            <div className="relative mb-8 animate-float" style={{ animationDelay: '1s' }}>
              <div className="absolute inset-0 bg-primary/10 transform -skew-x-3 rounded-sm"></div>
              <div className="relative border-2 border-primary/30 bg-background/80 backdrop-blur-sm rounded-sm p-6 max-w-md mx-auto shadow-lg">
                <div className="text-2xl md:text-3xl font-mono text-primary mb-2 tracking-wider"
                     style={{ textShadow: '0 0 10px rgba(120, 119, 198, 0.5)' }}>
                  {formattedTime}
                </div>
                <div className="text-sm text-muted-foreground uppercase tracking-widest font-bold">
                  {formattedDate}
                </div>
                {/* Vintage Clock Decoration */}
                <div className="absolute top-2 left-2 w-2 h-2 bg-primary/30 rounded-full"></div>
                <div className="absolute top-2 right-2 w-2 h-2 bg-primary/30 rounded-full"></div>
                <div className="absolute bottom-2 left-2 w-2 h-2 bg-primary/30 rounded-full"></div>
                <div className="absolute bottom-2 right-2 w-2 h-2 bg-primary/30 rounded-full"></div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-float" style={{ animationDelay: '1.5s' }}>
              <button className="relative group">
                <div className="absolute inset-0 bg-primary transform skew-x-3 group-hover:skew-x-0 transition-transform duration-300"></div>
                <div className="relative border-2 border-primary bg-background hover:bg-primary px-8 py-4 text-primary hover:text-primary-foreground font-bold uppercase tracking-wide transition-all duration-300 shadow-lg">
                  View My Work
                </div>
              </button>
              <button className="relative group">
                <div className="absolute inset-0 bg-accent/20 transform -skew-x-3 group-hover:skew-x-0 transition-transform duration-300"></div>
                <div className="relative border-2 border-accent/50 bg-background/80 backdrop-blur-sm hover:bg-accent/20 px-8 py-4 text-muted-foreground hover:text-primary font-bold uppercase tracking-wide transition-all duration-300 shadow-lg">
                  Get In Touch
                </div>
              </button>
            </div>
          </div>

          {/* Easter Egg Hint */}
          <p className="text-xs text-muted-foreground/60 mt-8 animate-float uppercase tracking-wider font-mono text-center" 
             style={{ animationDelay: '2s' }}>
            Psst... try pressing "W" or clicking my name 🎨
          </p>
        </div>
      </div>

      {/* Vintage Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="relative">
          <div className="w-8 h-12 border-2 border-primary/30 bg-background/20 backdrop-blur-sm flex justify-center shadow-lg">
            <div className="w-1 h-4 bg-primary mt-2 animate-pulse" style={{ boxShadow: '0 0 10px rgba(120, 119, 198, 0.5)' }}></div>
          </div>
          {/* Vintage decoration */}
          <div className="absolute -top-1 -left-1 w-2 h-2 bg-primary/50 transform rotate-45"></div>
          <div className="absolute -top-1 -right-1 w-2 h-2 bg-primary/50 transform rotate-45"></div>
        </div>
      </div>
    </section>
  );
};