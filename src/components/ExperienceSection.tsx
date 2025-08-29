import { Briefcase, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    id: 1,
    role: 'Computer Engineer',
    company: 'Doctor Pc Tz.',
    location: 'Dar es Salaam, Tanzania',
    period: '2025 - Present',
    description: 'Leading design initiatives for a tech repair, And Heavy Duty Computer Sales company',
    achievements: [
      ' Grew market reach by 40% through innovative design solutions',
      'Learned to repair and troubleshoot various computer hardware and software issues',
      'Learned hands on skills in assembling, disassembling, and upgrading computer systems',
    ],
    logo: '🚀',
    current: true,
  },
  {
    id: 2,
    role: 'IT consultant',
    company: 'Tanzania Posts Corporation',
    location: 'Mbeya, Tanzania',
    period: '2023 - 2025',
    description: 'Provided IT consultancy services to improve internal systems and customer-facing applications.',
    achievements: [
      'Helped optimize internal workflows, boosting team productivity by 30%',
      'Online Application for client services',
      'Developed training materials and conducted workshops for staff on new technologies'
    ],
    logo: '💡',
    current: false,
  },
  {
    id: 3,
    role: 'UI Designer',
    company: 'Digital Agency Co.',
    location: 'New York, NY',
    period: '2019 - 2020',
    description: 'Created stunning web and mobile interfaces for Fortune 500 clients across various industries.',
    achievements: [
      'Delivered 25+ successful client projects',
      'Won "Best Digital Experience" award for e-commerce redesign',
      'Mentored 2 junior designers'
    ],
    logo: '🎨',
    current: false,
  },
  {
    id: 4,
    role: 'Junior Designer',
    company: 'Creative Studio',
    location: 'Los Angeles, CA',
    period: '2018 - 2019',
    description: 'Started my design journey creating brand identities and marketing materials for small businesses.',
    achievements: [
      'Completed 50+ branding projects',
      'Developed design skills in print and digital media',
      'Built foundation in user-centered design thinking'
    ],
    logo: '🌱',
    current: false,
  },
];

export const ExperienceSection = () => {
  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Experience Timeline
          </h2>
          <p className="text-xl text-muted-foreground">
            My journey through the design world, one pixel at a time.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-primary opacity-30 hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={exp.id}
                className={`relative animate-float`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg hidden md:block" 
                     style={{ top: '2rem' }} />
                
                {/* Current Role Indicator */}
                {exp.current && (
                  <div className="absolute left-4 w-8 h-8 rounded-full bg-primary/20 animate-ping hidden md:block" 
                       style={{ top: '1.5rem' }} />
                )}

                {/* Content Card */}
                <div className="md:ml-16 glass-panel rounded-2xl p-8 glass-glow transition-smooth hover:scale-[1.01]">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-2xl">
                        {exp.logo}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">{exp.role}</h3>
                        <p className="text-primary font-medium">{exp.company}</p>
                      </div>
                    </div>
                    
                    {exp.current && (
                      <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium self-start sm:ml-auto">
                        Current
                      </span>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {exp.description}
                  </p>

                  <div>
                    <h4 className="font-medium mb-3 flex items-center gap-2">
                      <Briefcase className="w-4 h-4 text-primary" />
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Evolution */}
        <div className="mt-20 text-center">
          <div className="glass-panel rounded-2xl p-8 glass-glow">
            <h3 className="text-2xl font-bold mb-6">Skills Evolution</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { skill: 'Design Tools', years: '6+' },
                { skill: 'User Research', years: '4+' },
                { skill: 'Prototyping', years: '5+' },
                { skill: 'Frontend', years: '3+' },
              ].map((item, index) => (
                <div 
                  key={item.skill}
                  className="text-center animate-float"
                  style={{ animationDelay: `${index * 0.2 + 1}s` }}
                >
                  <div className="text-2xl font-bold text-primary mb-2">{item.years}</div>
                  <div className="text-sm text-muted-foreground">{item.skill}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};