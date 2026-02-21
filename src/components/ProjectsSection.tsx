import { ExternalLink, Github, Eye } from 'lucide-react';
import { useState } from 'react';

const projects = [
  {
    id: 1,
    title: 'Bixx Dictionary',
    description: 'A lightning-fast dictionary web application featuring instant word lookups, phonetic pronunciations, and an elegant, typography-driven interface.',
    image: '/assets/projects/bixxdictionary.webp',
    tags: ['React', 'Dictionary API', 'Tailwind CSS'],
    liveUrl: 'https://bixxdictionary.vercel.app/',
    githubUrl: 'https://github.com/harshbix/bixxdictionary',
  },
  {
    id: 2,
    title: 'RECAN Foundation',
    description: 'A professional NGO landing page built to drive donations and awareness for Tanzanian children, featuring mobile money integrations and accessible UX.',
    image: '/assets/projects/recanfoundation.webp',
    tags: ['Next.js', 'React', 'Tailwind CSS', 'Charity Platform'],
    liveUrl: 'https://recanfoundation.org/',
    githubUrl: 'https://github.com/harshbix/recanfoundation',
  },
  {
    id: 3,
    title: 'Serene Palette',
    description: 'An interactive color palette generator with fluid UI controls, enabling designers to instantly extract, tweak, and export harmonious color combinations.',
    image: '/assets/projects/serene-palette-app.webp',
    tags: ['Vite', 'React', 'Lovable', 'UI Engineering'],
    liveUrl: 'https://serene-palette-app.vercel.app/',
    githubUrl: 'https://github.com/harshbix/serene-palette-app',
  },
  {
    id: 4,
    title: 'ToDo List Bix',
    description: 'A minimalist task management application with persistent local storage, seamless state transitions, and a clean, distraction-free design.',
    image: '/assets/projects/todolist-bix.webp',
    tags: ['Vite', 'React', 'State Management'],
    liveUrl: 'https://todolist-bix.vercel.app/',
    githubUrl: 'https://github.com/harshbix/todolist-bix',
  },
  {
    id: 5,
    title: 'Overspeed Security',
    description: 'A high-performance corporate website for a security firm, featuring a modern aesthetic, fluid animations, and a seamless device-responsive user experience.',
    image: '/assets/projects/overspeed-security.webp',
    tags: ['Vite', 'React', 'Tailwind CSS', 'AOS Animations'],
    liveUrl: 'https://overspeed-security.vercel.app/',
    githubUrl: 'https://github.com/harshbix/overspeed-security',
  },
];

const ProjectImage = ({ src, alt, priority }: { src: string, alt: string, priority?: boolean }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative overflow-hidden w-full aspect-[16/10] bg-muted/10">
      {/* Premium UI Skeleton Placeholder */}
      <div
        className={`absolute inset-0 z-20 flex items-center justify-center transition-all duration-700 ease-[0.22,1,0.36,1] ${loaded ? 'opacity-0 scale-110 blur-sm pointer-events-none' : 'opacity-100 scale-100 blur-0'
          }`}
      >
        {/* Animated gradient wash */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-muted/10 to-accent/5 animate-pulse" />

        {/* Liquid morphing spinner center */}
        <div className="relative w-16 h-16 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full water-morph bg-primary/20 backdrop-blur-md border border-primary/30 animate-glow-pulse" />
          <div className="w-6 h-6 rounded-full border-2 border-primary border-t-transparent animate-spin" />
        </div>
      </div>

      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover transition-all duration-1000 ease-[0.22,1,0.36,1] group-hover:scale-105 ${loaded ? 'blur-0 scale-100' : 'blur-md scale-105'}`}
        onLoad={() => setLoaded(true)}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />
    </div>
  );
};

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center md:text-left mb-16 md:mb-24 md:max-w-2xl">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight text-foreground">
            Selected Works.
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            A curated selection of technical projects and live applications showcasing my ability to architect scalable systems and craft intuitive user experiences.
          </p>
        </div>

        {/* Unified Projects Array (Awwwards Style Offset List) */}
        <div className="space-y-24 md:space-y-32 mb-12">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`flex flex-col gap-8 md:gap-16 ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'
                } items-center`}
            >
              <div className="w-full lg:w-5/12 flex flex-col items-start text-left space-y-6 lg:px-4">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 bg-secondary/80 text-foreground text-xs font-semibold uppercase tracking-widest rounded-full">
                    {`0${index + 1}`}
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
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex-1 sm:flex-none">
                    <button className="w-full px-6 py-3 rounded-xl bg-foreground text-background font-medium hover:scale-[1.02] transition-transform flex items-center justify-center gap-2">
                      <Eye className="w-4 h-4" />
                      Live Demo
                    </button>
                  </a>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex-1 sm:flex-none">
                    <button className="w-full px-6 py-3 rounded-xl border border-border bg-card/40 hover:bg-card/80 text-foreground font-medium transition-colors flex items-center justify-center gap-2">
                      <Github className="w-4 h-4" />
                      Code
                    </button>
                  </a>
                </div>
              </div>

              <div className="w-full lg:w-7/12 relative group">
                {/* Asymmetric offset block for human touch */}
                <div className="absolute -inset-4 bg-primary/5 rounded-[2rem] -z-10 translate-y-4 translate-x-4 mix-blend-multiply opacity-50 dark:hidden" />
                <div className="relative overflow-hidden rounded-[2rem] bg-muted/20 border border-border/40 shadow-xl">

                  <ProjectImage
                    src={project.image}
                    alt={project.title}
                    priority={index < 2}
                  />

                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="absolute top-4 right-4 md:top-6 md:right-6 w-12 h-12 bg-background/90 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0 text-foreground hover:bg-foreground hover:text-background shadow-lg z-30">
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
