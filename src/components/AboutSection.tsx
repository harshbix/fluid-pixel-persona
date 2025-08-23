import { Code, Palette, Zap, Users, Coffee, Heart } from 'lucide-react';
import { useCountAnimation } from '../hooks/useCountAnimation';
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: 'Frontend Development', icon: Code, level: 90, category: 'Development' },
  { name: 'Full-Stack Development', icon: Zap, level: 90, category: 'Development' },
  { name: 'Backend Development', icon: Code, level: 70, category: 'Development' },
  { name: 'Data Structures & C', icon: Code, level: 75, category: 'Development' },
  { name: 'React & TypeScript', icon: Code, level: 85, category: 'Development' },
  { name: 'Node.js & Express', icon: Code, level: 80, category: 'Development' },
  { name: 'UI/UX Design', icon: Palette, level: 95, category: 'Creative' },
  { name: 'Video Editing', icon: Palette, level: 60, category: 'Creative' },
  { name: 'Graphic Design', icon: Palette, level: 85, category: 'Creative' },
  { name: 'Prototyping', icon: Palette, level: 90, category: 'Creative' },
  { name: 'Design Systems', icon: Palette, level: 88, category: 'Creative' },
  { name: 'Embedded Systems', icon: Zap, level: 70, category: 'Technical' },
  { name: 'IoT Development', icon: Zap, level: 75, category: 'Technical' },
  { name: 'Database Design', icon: Zap, level: 80, category: 'Technical' },
  { name: 'API Development', icon: Zap, level: 85, category: 'Technical' },
  { name: 'DevOps & CI/CD', icon: Zap, level: 65, category: 'Technical' },
  { name: 'Marketing Strategy', icon: Users, level: 80, category: 'Business' },
  { name: 'Business Management', icon: Users, level: 75, category: 'Business' },
  { name: 'Gaming Analysis', icon: Heart, level: 80, category: 'Business' },
  { name: 'Project Management', icon: Users, level: 85, category: 'Business' },
  { name: 'Client Relations', icon: Users, level: 90, category: 'Business' },
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

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const scrollLeft = scrollContainerRef.current.scrollLeft;
      setScrollPosition(scrollLeft);
      setIsScrolling(true);
      scrollContainerRef.current.classList.add('scrolling');
      setTimeout(() => {
        setIsScrolling(false);
        scrollContainerRef.current?.classList.remove('scrolling');
      }, 500);
    }
  };

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

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <section className="py-16 px-4 relative sm:px-6 overflow-hidden">
      {/* subtle moving particles in background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:24px_24px] animate-[pulse_6s_ease-in-out_infinite]" />
      </div>

      <div className="max-w-6xl mx-auto relative">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent tracking-tight">
            About Me
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            A passionate designer who believes great design should feel like magic, not frustration.
          </p>
        </div>

        <div className="space-y-12">
          {/* Profile Section */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glass-panel rounded-3xl p-8 glass-glow relative overflow-hidden"
          >
            {/* animated glowing ring */}
            <motion.div 
              className="absolute -inset-2 rounded-full bg-gradient-to-r from-primary to-accent opacity-30 blur-3xl"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            />
            <div className="flex items-center gap-6 relative z-10 mb-6">
              <div className="relative">
                <motion.div
                  className="absolute inset-0 rounded-full border-4 border-primary/30 animate-spin-slow"
                />
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-primary to-accent p-1">
                  <div className="w-full h-full rounded-full bg-background flex items-center justify-center text-4xl">
                    🎮
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-foreground">Junior Jeconia</h3>
                <p className="text-base sm:text-lg text-muted-foreground">Creative Designer & Developer</p>
                <p className="text-sm text-accent">Dar es Salaam, TZ</p>
              </div>
            </div>
            <p className="text-base text-muted-foreground leading-relaxed mb-6 relative z-10">
              With over 5 years of experience crafting digital experiences, I specialize in creating 
              interfaces that users actually enjoy using. I believe in the power of thoughtful design 
              to solve real problems and create meaningful connections.
            </p>
            <div className="flex flex-wrap gap-2 relative z-10">
              {['Design Systems', 'React', 'Figma', 'TypeScript', 'Prototyping'].map((tag) => (
                <span 
                  key={tag}
                  className="px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Skills Section */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold mb-6">Skills & Expertise</h3>
            <div className="relative">
              <div 
                ref={scrollContainerRef}
                className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide snap-x snap-mandatory"
              >
                {categories.map((category, categoryIndex) => {
                  const categorySkills = skills.filter(skill => skill.category === category.id);

                  return (
                    <motion.div
                      whileHover={{ rotateY: 6, rotateX: -3, scale: 1.03 }}
                      transition={{ type: "spring", stiffness: 200 }}
                      key={category.id}
                      className="flex-shrink-0 w-[280px] sm:w-[320px] snap-start"
                    >
                      <div className="glass-panel rounded-2xl p-6 glass-glow relative overflow-hidden">
                        {/* subtle reflection */}
                        <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent opacity-20" />
                        <div className="flex items-center gap-3 mb-4 relative z-10">
                          <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${category.color} p-0.5`}>
                            <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                              <category.icon className="w-6 h-6 text-primary" />
                            </div>
                          </div>
                          <div>
                            <h4 className="text-lg font-bold">{category.name}</h4>
                            <p className="text-sm text-muted-foreground">{categorySkills.length} skills</p>
                          </div>
                        </div>
                        <div className="space-y-4 relative z-10">
                          {categorySkills.map((skill, index) => {
                            const { count, elementRef } = useCountAnimation({
                              endValue: skill.level,
                              delay: index * 120,
                              duration: 2000
                            });
                            return (
                              <div 
                                key={skill.name}
                                ref={elementRef}
                                className="flex items-center gap-3 p-3 rounded-xl bg-secondary/30"
                              >
                                <skill.icon className="w-5 h-5 text-primary" />
                                <div className="flex-1">
                                  <div className="flex justify-between mb-1">
                                    <span className="text-sm font-medium">{skill.name}</span>
                                    <span className="text-xs text-muted-foreground">{count}%</span>
                                  </div>
                                  <div className="w-full bg-secondary rounded-full h-2 overflow-hidden relative">
                                    <motion.div
                                      initial={{ width: 0 }}
                                      animate={{ width: `${count}%` }}
                                      transition={{ duration: 1.2, delay: index * 0.1 }}
                                      className={`bg-gradient-to-r ${category.color} h-2 rounded-full`}
                                    >
                                      <div className="absolute right-0 top-0 h-2 w-2 rounded-full bg-white/70 animate-pulse" />
                                    </motion.div>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
              {/* Scroll Indicators */}
              <div className="flex justify-center gap-3 mt-4">
                {categories.map((cat, index) => (
                  <motion.button
                    key={index}
                    onClick={() => scrollToCategory(index)}
                    animate={{
                      width: scrollPosition > (index * 280) - 140 && scrollPosition < (index * 280) + 140 ? 24 : 8
                    }}
                    className={`h-2 rounded-full transition-all ${
                      scrollPosition > (index * 280) - 140 && scrollPosition < (index * 280) + 140
                        ? 'bg-primary shadow-lg shadow-primary/40'
                        : 'bg-primary/30 hover:bg-primary/50'
                    }`}
                    aria-label={`Go to ${cat.name}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Fun Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-12">
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
                <motion.div 
                  key={stat.label}
                  ref={elementRef}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="glass-panel rounded-xl p-6 text-center glass-glow hover:scale-105 transition-transform"
                >
                  <div className="text-2xl font-bold text-primary mb-2">
                    {stat.isInfinity ? (
                      <motion.span 
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                      >
                        ∞
                      </motion.span>
                    ) : `${count}${stat.suffix}`}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
