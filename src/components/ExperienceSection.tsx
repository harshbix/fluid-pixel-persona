import { Briefcase, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    id: 1,
    role: 'Senior Computer Engineer',
    company: 'Doctor Pc Tanzania',
    location: 'Dar es Salaam, Tanzania',
    period: '2025 - Present',
    description: 'Directing enterprise-level hardware diagnostics, system optimization, and technical infrastructure operations.',
    achievements: [
      'Spearheaded the integration of advanced diagnostic tooling, expanding regional market presence by over 40%.',
      'Engineered standardized maintenance protocols that accelerated service delivery efficiency by 60%.',
      'Architected and deployed large-scale hardware upgrade strategies for key enterprise clients.',
    ],
    logo: '💻',
    current: true,
  },
  {
    id: 5,
    role: 'Technical Project Manager',
    company: 'Farols Company',
    location: 'Mbeya, Tanzania',
    period: '2026 - Present',
    description: 'Overseeing end-to-end digital transformation lifecycles, specializing in modern web systems and scalable product development.',
    achievements: [
      'Directed cross-functional engineering and design teams to deliver high-impact web platforms for a diverse B2B portfolio.',
      'Optimized agile development workflows, significantly reducing time-to-market for digital deliverables.',
      'Aligned technical execution with business objectives to capture and retain high-value enterprise accounts.'
    ],
    logo: <img src="/assets/Farols white word down.png" alt="Farols Company Logo" className="w-8 h-8 object-contain" />,
    current: true,
  },
  {
    id: 2,
    role: 'IT Systems Consultant',
    company: 'Tanzania Posts Corporation',
    location: 'Mbeya, Tanzania',
    period: '2023 - 2025',
    description: 'Led digital modernization initiatives, transitioning legacy infrastructure into resilient, automated operational systems.',
    achievements: [
      'Architected an enterprise-wide digital service platform, resulting in a 30% aggregate increase in operational productivity.',
      'Automated critical logistical workflows, minimizing manual data-entry bottlenecks and reducing system downtime.',
      'Devised and conducted comprehensive technical training programs, upskilling an internal staff of 100+ employees.'
    ],
    logo: <img src="/assets/posta.png" alt="TPC Logo" className="w-8 h-8 object-contain" />,
    current: false,
  },
  {
    id: 3,
    role: 'Frontend Development Specialist',
    company: 'Quickdrop Co.',
    location: 'Dar es Salaam, Tanzania',
    period: '2022 - 2023',
    description: 'Engineered responsive, high-performance web applications and established foundational frontend development standards.',
    achievements: [
      'Developed and shipped 10+ production-grade web applications utilizing React and modern JavaScript ecosystems.',
      'Optimized core web vitals, reducing page load times by 40% through advanced asset delivery and state management.',
      'Authored technical documentation and established CI/CD best practices while actively mentoring junior developers.'
    ],
    logo: <img src="/assets/QuickDrop.png" alt="Quickdrop Logo" className="w-8 h-8 object-contain" />,
    current: false,
  },
  {
    id: 4,
    role: 'Technical Solutions Analyst',
    company: 'Web Technologies Ltd.',
    location: 'Dodoma, Tanzania',
    period: '2023 (2 months)',
    description: 'Facilitated the deployment of Electronic Fiscal Device (EFD) systems and engineered client-facing billing integrations.',
    achievements: [
      'Successfully executed the deployment and configuration of EFD compliance software for 20+ corporate clients.',
      'Engineered automated billing integrations that streamlined financial data processing between client applications.',
      'Produced detailed technical operational manuals and delivered onboarding sessions to ensure client self-sufficiency.'
    ],
    logo: '⚡',
    current: false,
  },
];

export const ExperienceSection = () => {
  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <p className="text-xl text-muted-foreground">
            A detailed timeline of my engineering, leadership, and technical consulting trajectory.
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
                <div className={`md:ml-16 glass-panel rounded-2xl p-8 glass-glow transition-all duration-500 hover:scale-[1.01] hover:rotate-0 ${index % 2 === 0 ? 'rotate-[0.4deg]' : '-rotate-[0.4deg]'}`}>
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
                { skill: 'Hardware Arch', years: '3+' },
                { skill: 'IT Systems Consulting', years: '2+' },
                { skill: 'Frontend Engineering', years: '2+' },
                { skill: 'Technical Management', years: '1+' },
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