import { Code, Palette, Zap, Users, Coffee, Heart } from 'lucide-react';
import { useCountAnimation } from '../hooks/useCountAnimation';
import { useState, useEffect, useRef } from 'react';

const skills = [
  // Core Development Skills
  { name: 'Frontend Development', icon: Code, level: 90, category: 'Development' },
  { name: 'Full-Stack Development', icon: Zap, level: 90, category: 'Development' },
  { name: 'Backend Development', icon: Code, level: 70, category: 'Development' },
  { name: 'Data Structures & C', icon: Code, level: 75, category: 'Development' },
  { name: 'React & TypeScript', icon: Code, level: 85, category: 'Development' },
  { name: 'Node.js & Express', icon: Code, level: 80, category: 'Development' },
  
  // Creative & Design Skills
  { name: 'UI/UX Design', icon: Palette, level: 95, category: 'Creative' },
  { name: 'Video Editing', icon: Palette, level: 60, category: 'Creative' },
  { name: 'Graphic Design', icon: Palette, level: 85, category: 'Creative' },
  { name: 'Prototyping', icon: Palette, level: 90, category: 'Creative' },
  { name: 'Design Systems', icon: Palette, level: 88, category: 'Creative' },
  
  // Technical Skills
  { name: 'Embedded Systems', icon: Zap, level: 70, category: 'Technical' },
  { name: 'IoT Development', icon: Zap, level: 75, category: 'Technical' },
  { name: 'Database Design', icon: Zap, level: 80, category: 'Technical' },
  { name: 'API Development', icon: Zap, level: 85, category: 'Technical' },
  { name: 'DevOps & CI/CD', icon: Zap, level: 65, category: 'Technical' },
  
  // Business & Marketing Skills
  { name: 'Marketing Strategy', icon: Users, level: 80, category: 'Business' },
  { name: 'Business Management', icon: Users, level: 75, category: 'Business' },
  { name: 'Gaming Analysis', icon: Heart, level: 80, category: 'Business' },
  { name: 'Project Management', icon: Users, level: 85, category: 'Business' },
  { name: 'Client Relations', icon: Users, level: 90, category: 'Business' },
  
  // Fun Skill
  { name: 'Coffee Making', icon: Coffee, level: 100, category: 'Fun' },
  { name: 'Gaming', icon: Heart, level: 95, category: 'Fun' },
  { name: 'Photography', icon: Palette, level: 70, category: 'Fun' },
];

const categories = [
  { id: 'Development', name: 'Development', icon: Code, color: 'from-blue-500 to-cyan-500' },
  { id: 'Creative', name: 'Creative & Design', icon: Palette, color: 'from-purple-500 to-pink-500' },
  { id: 'Technical', name: 'Technical', icon: Zap, color: 'from-yellow-500 to-orange-500' },
  { id: 'Business', name: 'Business & Marketing', icon: Users, color: 'from-green-500 to-emerald-500' },
  { id: 'Fun', name: 'Fun & Personal', icon: Coffee, color: 'from-red-500 to-rose-500' },
];

export const AboutSection = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  // Handle scroll events with dramatic effects
  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const scrollLeft = scrollContainerRef.current.scrollLeft;
      setScrollPosition(scrollLeft);
      setIsScrolling(true);
      
      // Add dramatic scroll effect
      scrollContainerRef.current.classList.add('scrolling');
      
      // Reset scrolling state after animation
      setTimeout(() => {
        setIsScrolling(false);
        scrollContainerRef.current?.classList.remove('scrolling');
      }, 500);
    }
  };

  // Smooth scroll to category
  const scrollToCategory = (index: number) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const itemWidth = container.scrollWidth / categories.length;
      const targetScroll = itemWidth * index;
      
      container.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      });
    }
  };

  // Auto-scroll effect on mount
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A passionate designer who believes great design should feel like magic, not frustration.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Profile Section */}
          <div className="space-y-6">
            <div className="glass-panel rounded-3xl p-8 glass-glow">
              <div className="flex items-center gap-6 mb-6">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-accent p-1">
                  <div className="w-full h-full rounded-full bg-background flex items-center justify-center text-4xl">
                    🎨
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">Junior Jeconia</h3>
                  <p className="text-muted-foreground">Creative Designer & Developer</p>
                  <p className="text-sm text-accent">Dar es Salaam, TZ</p>
                </div>
              </div>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                With over 5 years of experience crafting digital experiences, I specialize in creating 
                interfaces that users actually enjoy using. I believe in the power of thoughtful design 
                to solve real problems and create meaningful connections.
              </p>

              <div className="flex flex-wrap gap-3">
                {['Design Systems', 'React', 'Figma', 'TypeScript', 'Prototyping'].map((tag) => (
                  <span 
                    key={tag}
                    className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Skills Section with Horizontal Scroll */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6" id="skills-section">Skills & Expertise</h3>
            
            {/* Scroll Container */}
            <div className="relative">
              {/* Watery Scroll Container */}
              <div 
                ref={scrollContainerRef}
                className="flex gap-6 overflow-x-auto overflow-y-hidden pb-6 scrollbar-hide water-scroll-container"
                style={{
                  scrollSnapType: 'x mandatory',
                  WebkitOverflowScrolling: 'touch'
                }}
              >
                {categories.map((category, categoryIndex) => {
                  const categorySkills = skills.filter(skill => skill.category === category.id);
                  
                  return (
                    <div
                      key={category.id}
                      className="flex-shrink-0 w-80 scroll-snap-start"
                      style={{ scrollSnapAlign: 'start' }}
                    >
                      {/* Category Card with Watery Effects */}
                      <div className="glass-panel rounded-2xl p-6 glass-glow water-card relative overflow-hidden">
                        {/* Fish-eye reflection effect */}
                        <div className="absolute inset-0 water-reflection opacity-20 pointer-events-none" />
                        
                        {/* Category Header */}
                        <div className="flex items-center gap-3 mb-6 relative z-10">
                          <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${category.color} p-0.5 water-icon-container`}>
                            <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                              {(() => {
                                const IconComponent = category.icon;
                                return <IconComponent className="w-6 h-6 text-primary" />;
                              })()}
                            </div>
                          </div>
                          <div>
                            <h4 className="text-xl font-bold">{category.name}</h4>
                            <p className="text-sm text-muted-foreground">
                              {categorySkills.length} skill{categorySkills.length !== 1 ? 's' : ''}
                            </p>
                          </div>
                        </div>
                        
                        {/* Skills List */}
                        <div className="space-y-4 relative z-10">
                          {categorySkills.map((skill, index) => {
                            const { count, elementRef } = useCountAnimation({
                              endValue: skill.level,
                              delay: index * 150,
                              duration: 2000
                            });

                            return (
                              <div 
                                key={skill.name}
                                ref={elementRef}
                                className="flex items-center gap-4 p-4 rounded-xl bg-secondary/30 skill-item animate-skill-fade-in water-skill-item"
                                style={{ animationDelay: `${index * 0.1}s` }}
                              >
                                {(() => {
                                  const SkillIcon = skill.icon;
                                  return <SkillIcon className="w-6 h-6 text-primary flex-shrink-0" />;
                                })()}
                                <div className="flex-1">
                                  <div className="flex items-center justify-between mb-2">
                                    <span className="font-medium">{skill.name}</span>
                                    <span className="text-sm text-muted-foreground">{count}%</span>
                                  </div>
                                  
                                  <div className="w-full bg-secondary rounded-full h-2 overflow-hidden">
                                    <div 
                                      className={`bg-gradient-to-r ${category.color} h-2 rounded-full skill-progress-bar water-progress`}
                                      style={{ 
                                        width: `${count}%`,
                                        animationDelay: `${index * 0.2}s` 
                                      }}
                                    />
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              
              {/* Scroll Indicators */}
              <div className="flex justify-center gap-2 mt-6">
                {categories.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => scrollToCategory(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-500 water-indicator ${
                      scrollPosition > (index * 320) - 160 && scrollPosition < (index * 320) + 160
                        ? 'bg-primary scale-125 shadow-lg shadow-primary/50'
                        : 'bg-primary/30 hover:bg-primary/50'
                    }`}
                    aria-label={`Go to ${categories[index].name} category`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Fun Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {[
            { label: 'Projects Completed', value: 150, suffix: '+' },
            { label: 'Happy Clients', value: 50, suffix: '+' },
            { label: 'Cups of Coffee', value: '∞', isInfinity: true },
            { label: 'Years Experience', value: 5, suffix: '+' },
          ].map((stat, index) => {
            const { count, elementRef } = useCountAnimation({
              endValue: stat.isInfinity ? 0 : (stat.value as number),
              delay: index * 200,
              duration: 2000
            });

            return (
              <div 
                key={stat.label}
                ref={elementRef}
                className="glass-panel rounded-xl p-6 text-center glass-glow animate-float"
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                <div className="text-2xl md:text-3xl font-bold text-primary mb-2">
                  {stat.isInfinity ? '∞' : `${count}${stat.suffix}`}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
