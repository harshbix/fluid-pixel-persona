import { Code, Palette, Zap, Users, Coffee, Heart } from 'lucide-react';
import { useCountAnimation } from '../hooks/useCountAnimation';
import { useState } from 'react';

const skills = [
  // Core Development Skills
  { name: 'Frontend Development', icon: Code, level: 90, category: 'Development' },
  { name: 'Full-Stack Development', icon: Zap, level: 90, category: 'Development' },
  { name: 'Backend Development', icon: Code, level: 70, category: 'Development' },
  { name: 'Data Structures & C', icon: Code, level: 75, category: 'Development' },
  
  // Creative & Design Skills
  { name: 'UI/UX Design', icon: Palette, level: 95, category: 'Creative' },
  { name: 'Video Editing', icon: Palette, level: 60, category: 'Creative' },
  
  // Technical Skills
  { name: 'Embedded Systems', icon: Zap, level: 70, category: 'Technical' },
  
  // Business & Marketing Skills
  { name: 'Marketing Strategy', icon: Users, level: 80, category: 'Business' },
  { name: 'Business Management', icon: Users, level: 75, category: 'Business' },
  { name: 'Gaming Analysis', icon: Heart, level: 80, category: 'Business' },
  
  // Fun Skill
  { name: 'Coffee Making', icon: Coffee, level: 100, category: 'Fun' },
];

const categories = [
  { id: 'Development', name: 'Development', icon: Code, color: 'from-blue-500 to-cyan-500' },
  { id: 'Creative', name: 'Creative & Design', icon: Palette, color: 'from-purple-500 to-pink-500' },
  { id: 'Technical', name: 'Technical', icon: Zap, color: 'from-yellow-500 to-orange-500' },
  { id: 'Business', name: 'Business & Marketing', icon: Users, color: 'from-green-500 to-emerald-500' },
  { id: 'Fun', name: 'Fun & Personal', icon: Coffee, color: 'from-red-500 to-rose-500' },
];

export const AboutSection = () => {
  const [currentCategory, setCurrentCategory] = useState(0);

  const currentCategoryData = categories[currentCategory];
  const currentSkills = skills.filter(skill => skill.category === currentCategoryData.id);

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

        <div className="grid lg:grid-cols-2 gap-12 items-center">
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

          {/* Skills Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6">Skills & Expertise</h3>
            
                         {/* Category Navigation */}
             <div className="bg-background/80 backdrop-blur-24px border border-border/50 rounded-2xl p-4 shadow-lg mb-6">
               <div className="flex flex-col items-center gap-3">
                 <div className="text-sm text-muted-foreground font-medium">
                   Skills & Expertise
                 </div>
                 <div className="flex gap-2 justify-center">
                   {categories.map((category, index) => {
                     const Icon = category.icon;
                     const isActive = currentCategory === index;

                     return (
                                               <div
                          key={category.id}
                          onClick={() => setCurrentCategory(index)}
                          className={`
                            relative group p-3 rounded-xl transition-all duration-300 cursor-pointer
                            ${isActive
                              ? 'bg-primary/20 text-primary shadow-lg scale-110'
                              : 'text-muted-foreground hover:text-primary hover:bg-primary/10'
                            }
                          `}
                          title={category.name}
                          role="button"
                          tabIndex={0}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              e.preventDefault();
                              setCurrentCategory(index);
                            }
                          }}
                        >
                         <Icon className="w-5 h-5" />

                         {/* Active indicator */}
                         {isActive && (
                           <div className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full animate-pulse" />
                         )}

                                                   {/* Hover tooltip */}
                          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs bg-background/90 backdrop-blur-sm rounded-md border border-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10">
                            {category.name}
                          </div>
                        </div>
                     );
                   })}
                 </div>
               </div>
             </div>

            {/* Current Category Skills */}
            <div className="glass-panel rounded-2xl p-6 glass-glow">
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${currentCategoryData.color} p-0.5`}>
                  <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                    <currentCategoryData.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold">{currentCategoryData.name}</h4>
                  <p className="text-sm text-muted-foreground">
                    {currentSkills.length} skill{currentSkills.length !== 1 ? 's' : ''} in this category
                  </p>
                </div>
              </div>
              
              <div className="space-y-4">
                {currentSkills.map((skill, index) => {
                  const { count, elementRef } = useCountAnimation({
                    endValue: skill.level,
                    delay: index * 150,
                    duration: 2000
                  });

                  return (
                    <div 
                      key={skill.name}
                      ref={elementRef}
                      className="flex items-center gap-4 p-4 rounded-xl bg-secondary/30 transition-smooth hover:bg-secondary/50 hover:scale-[1.02]"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <skill.icon className="w-6 h-6 text-primary flex-shrink-0" />
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-sm text-muted-foreground">{count}%</span>
                        </div>
                        
                        <div className="w-full bg-secondary rounded-full h-2">
                          <div 
                            className={`bg-gradient-to-r ${currentCategoryData.color} h-2 rounded-full transition-all duration-1000 ease-out`}
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