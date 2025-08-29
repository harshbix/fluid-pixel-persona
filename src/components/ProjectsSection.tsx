import { ExternalLink, Github, Eye } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'EcoTrack Dashboard',
    description: 'A comprehensive sustainability tracking platform for businesses to monitor their environmental impact.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400',
    tags: ['UI/UX', 'React', 'TypeScript', 'D3.js'],
    featured: true,
  },
  {
    id: 2,
    title: 'MindSpace App',
    description: 'Mobile meditation app designed to reduce stress and improve mental wellbeing.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400',
    tags: ['Mobile Design', 'Prototyping', 'User Research'],
    featured: false,
  },
  {
    id: 3,
    title: 'FinTech Redesign',
    description: 'Complete redesign of a cryptocurrency trading platform focusing on user safety and clarity.',
    image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=400',
    tags: ['Web Design', 'Design System', 'Figma'],
    featured: true,
  },
  {
    id: 4,
    title: 'Smart Home Interface',
    description: 'Intuitive control panel for IoT devices with voice integration and predictive automation.',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400',
    tags: ['IoT', 'UI Design', 'Smart Tech'],
    featured: false,
  },
  {
    id: 5,
    title: 'Healthcare Portal',
    description: 'Patient management system streamlining appointments, records, and telehealth consultations.',
    image: 'https://images.unsplash.com/photo-1487887235947-a955ef187fcc?w=600&h=400',
    tags: ['Healthcare', 'UX Research', 'Accessibility'],
    featured: false,
  },
];

export const ProjectsSection = () => {
  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Featured Work
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A curated selection of projects that showcase my approach to solving complex design challenges.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="space-y-16 mb-20">
          {featuredProjects.map((project, index) => (
            <div 
              key={project.id}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className="glass-panel rounded-2xl p-8 space-y-6 glass-glow">
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium">
                      Featured
                    </span>
                    <div className="h-px bg-border flex-1" />
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold">{project.title}</h3>
                  
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4 pt-4">
                    <button className="glass-panel px-6 py-3 rounded-full text-primary hover:bg-primary hover:text-primary-foreground transition-smooth flex items-center gap-2 ripple-effect">
                      <Eye className="w-4 h-4" />
                      View Project
                    </button>
                    <button className="glass-panel px-6 py-3 rounded-full text-muted-foreground hover:text-primary transition-smooth flex items-center gap-2 ripple-effect">
                      <Github className="w-4 h-4" />
                      Code
                    </button>
                  </div>
                </div>
              </div>
              
              <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                <div className="glass-panel rounded-2xl p-4 glass-glow group cursor-pointer">
                  <div className="relative overflow-hidden rounded-xl">
                    <img 
                      src={project.image}
                      alt={project.title}
                      className="w-full h-80 object-cover transition-smooth group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
                    <button className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-smooth ripple-effect">
                      <ExternalLink className="w-5 h-5 text-white" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects Grid */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-12">Other Projects</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherProjects.map((project, index) => (
              <div 
                key={project.id}
                className="glass-panel rounded-xl overflow-hidden glass-glow group cursor-pointer transition-smooth hover:scale-[1.02]"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-smooth group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
                  <button className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-smooth ripple-effect">
                    <ExternalLink className="w-4 h-4 text-white" />
                  </button>
                </div>
                
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-3">{project.title}</h4>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 2).map((tag) => (
                      <span 
                        key={tag}
                        className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 2 && (
                      <span className="px-2 py-1 rounded-full bg-muted text-muted-foreground text-xs">
                        +{project.tags.length - 2} more
                      </span>
                    )}
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <button className="text-primary hover:text-primary/80 transition-smooth font-medium text-sm">
                      View Details
                    </button>
                    <button className="text-muted-foreground hover:text-primary transition-smooth">
                      <Github className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
