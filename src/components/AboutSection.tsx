import { Code, Palette, Zap, Users, Coffee, Heart } from 'lucide-react';

const skills = [
  { name: 'UI/UX Design', icon: Palette, level: 95 },
  { name: 'Frontend Dev', icon: Code, level: 90 },
  { name: 'Creative Direction', icon: Zap, level: 88 },
  { name: 'User Research', icon: Users, level: 85 },
  { name: 'Prototyping', icon: Heart, level: 92 },
  { name: 'Coffee Making', icon: Coffee, level: 100 },
];

export const AboutSection = () => {
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
                  <h3 className="text-2xl font-bold text-foreground">Bix Chen</h3>
                  <p className="text-muted-foreground">Creative Designer & Developer</p>
                  <p className="text-sm text-accent">San Francisco, CA</p>
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
            
            {skills.map((skill, index) => (
              <div 
                key={skill.name}
                className="glass-panel rounded-xl p-4 glass-glow transition-smooth hover:scale-[1.02]"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-4 mb-3">
                  <skill.icon className="w-6 h-6 text-primary" />
                  <span className="font-medium">{skill.name}</span>
                  <span className="ml-auto text-sm text-muted-foreground">{skill.level}%</span>
                </div>
                
                <div className="w-full bg-secondary rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-primary to-accent h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ 
                      width: `${skill.level}%`,
                      animationDelay: `${index * 0.2}s` 
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Fun Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {[
            { label: 'Projects Completed', value: '150+' },
            { label: 'Happy Clients', value: '50+' },
            { label: 'Cups of Coffee', value: '∞' },
            { label: 'Years Experience', value: '5+' },
          ].map((stat, index) => (
            <div 
              key={stat.label}
              className="glass-panel rounded-xl p-6 text-center glass-glow animate-float"
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              <div className="text-2xl md:text-3xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};