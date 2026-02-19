import { ExternalLink, Github, Eye } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'EcoTrack Analytics Dashboard',
    description: 'Engineered a scalable data visualization platform enabling enterprise clients to monitor and reduce their environmental footprint in real-time.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400',
    tags: ['React', 'TypeScript', 'D3.js', 'System Architecture'],
    featured: true,
  },
  {
    id: 2,
    title: 'MindSpace Mobile App',
    description: 'Designed and prototyped a cross-platform mobile application utilizing proactive UX research to optimize user retention and mental wellbeing.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400',
    tags: ['Mobile Development', 'Prototyping', 'User Research'],
    featured: false,
  },
  {
    id: 3,
    title: 'FinTech Trading Platform',
    description: 'Spearheaded the UX/UI overhaul of a high-volume cryptocurrency trading platform, standardizing design systems and improving transaction clarity.',
    image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=400',
    tags: ['Frontend Architecture', 'Design Systems', 'Figma'],
    featured: true,
  },
  {
    id: 4,
    title: 'IoT Smart Infrastructure',
    description: 'Developed an intuitive centralized control interface for interconnected IoT devices, integrating predictive automation algorithms.',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400',
    tags: ['IoT Integration', 'UI Engineering', 'Predictive Systems'],
    featured: false,
  },
  {
    id: 5,
    title: 'Enterprise Healthcare Portal',
    description: 'Architected a secure patient management console that streamlined clinical appointments, digital records, and secure telehealth routing.',
    image: 'https://images.unsplash.com/photo-1487887235947-a955ef187fcc?w=600&h=400',
    tags: ['Full-Stack', 'Accessibility (WCAG)', 'Data Security'],
    featured: false,
  },
];

export const ProjectsSection = () => {
  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center md:text-left mb-16 md:mb-24 md:max-w-2xl">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight text-foreground">
            Featured Engineering.
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            A curated selection of technical projects showcasing my ability to architect scalable systems and craft intuitive user experiences.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="space-y-24 md:space-y-32 mb-32">
          {featuredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`flex flex-col gap-8 md:gap-16 ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'
                } items-center`}
            >
              <div className="w-full lg:w-5/12 flex flex-col items-start text-left space-y-6 lg:px-4">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 bg-secondary/80 text-foreground text-xs font-semibold uppercase tracking-widest rounded-full">
                    Featured
                  </span>
                  <div className="h-px bg-border flex-1" />
                </div>

                <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">{project.title}</h3>

                <p className="text-muted-foreground text-lg leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full border border-border/50 text-muted-foreground text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 pt-6 w-full sm:w-auto">
                  <button className="flex-1 sm:flex-none px-6 py-3 rounded-xl bg-foreground text-background font-medium hover:scale-[1.02] transition-transform flex items-center justify-center gap-2">
                    <Eye className="w-4 h-4" />
                    View Case
                  </button>
                  <button className="flex-1 sm:flex-none px-6 py-3 rounded-xl border border-border bg-card/40 hover:bg-card/80 text-foreground font-medium transition-colors flex items-center justify-center gap-2">
                    <Github className="w-4 h-4" />
                    Code
                  </button>
                </div>
              </div>

              <div className="w-full lg:w-7/12 relative group">
                {/* Asymmetric offset block for human touch */}
                <div className="absolute -inset-4 bg-primary/5 rounded-[2rem] -z-10 translate-y-4 translate-x-4 mix-blend-multiply opacity-50 dark:hidden" />
                <div className="relative overflow-hidden rounded-[2rem] bg-muted/20 border border-border/40 shadow-xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full aspect-[4/3] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                  <a href="#" className="absolute top-4 right-4 md:top-6 md:right-6 w-12 h-12 bg-background/90 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0 text-foreground hover:bg-foreground hover:text-background shadow-lg">
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects Grid */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-12">Other Projects</h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {otherProjects.map((project, index) => (
              <div
                key={project.id}
                className="group flex flex-col bg-card/30 rounded-2xl border border-border/40 overflow-hidden hover:bg-card/60 transition-colors"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-muted/30">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 border border-black/5 rounded-t-2xl pointer-events-none" />
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h4 className="text-xl font-bold tracking-tight text-foreground mb-2">{project.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium text-muted-foreground bg-muted/50 px-2 py-1 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-between items-center pt-4 border-t border-border/40 mt-auto">
                    <a href="#" className="text-sm font-semibold text-foreground hover:text-primary transition-colors flex items-center gap-1">
                      Details <ExternalLink className="w-3 h-3" />
                    </a>
                    <a href="#" className="p-2 -mr-2 text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-muted/50">
                      <Github className="w-4 h-4" />
                    </a>
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
