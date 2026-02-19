import { Quote, Star } from 'lucide-react';
import { useCountAnimation } from '@/hooks/useCountAnimation';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Product Manager',
    company: 'TechFlow Inc.',
    avatar: '👩‍💼',
    rating: 5,
    content: "Bix has an incredible ability to translate complex user needs into elegant, intuitive designs. Their attention to detail and user-first approach consistently delivers exceptional results.",
    project: 'FinTech Dashboard'
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'CEO',
    company: 'StartupXYZ',
    avatar: '👨‍💻',
    rating: 5,
    content: "Working with Bix was a game-changer for our startup. They didn't just design our product, they helped us understand our users better and shaped our entire product strategy.",
    project: 'SaaS Platform MVP'
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Marketing Director',
    company: 'Digital Agency Co.',
    avatar: '👩‍🎨',
    rating: 5,
    content: "Bix brings both creative vision and strategic thinking to every project. Their designs don't just look beautiful, they drive real business results for our clients.",
    project: 'E-commerce Redesign'
  },
  {
    id: 4,
    name: 'David Park',
    role: 'CTO',
    company: 'HealthTech Solutions',
    avatar: '👨‍⚕️',
    rating: 5,
    content: "In the healthcare space, user experience can literally save lives. Bix understands this responsibility and consistently delivers designs that are both usable and compliant.",
    project: 'Healthcare Portal'
  },
  {
    id: 5,
    name: 'Lisa Wang',
    role: 'Design Lead',
    company: 'Creative Studio',
    avatar: '👩‍🎨',
    rating: 5,
    content: "As a fellow designer, I'm constantly impressed by Bix's ability to balance user needs with business goals. They're a true strategic design partner.",
    project: 'Design System'
  },
  {
    id: 6,
    name: 'James Thompson',
    role: 'Founder',
    company: 'EcoTech Startup',
    avatar: '👨‍🌾',
    rating: 5,
    content: "Bix helped us create a sustainability platform that users actually want to engage with. Their design made complex environmental data feel accessible and actionable.",
    project: 'Sustainability Dashboard'
  }
];

export const TestimonialsSection = () => {
  return (
    <section className="py-20 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            What People Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take my word for it: here's what clients and colleagues have to say about our collaborations.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="glass-panel rounded-xl p-6 glass-glow transition-smooth hover:scale-[1.02] animate-float"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote Icon */}
              <div className="flex justify-between items-start mb-4">
                <Quote className="w-8 h-8 text-primary/40" />
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
              </div>

              {/* Content */}
              <p className="text-muted-foreground leading-relaxed mb-6 italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-2xl">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role} at {testimonial.company}
                  </p>
                  <p className="text-xs text-primary font-medium mt-1">
                    Project: {testimonial.project}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="glass-panel rounded-2xl p-8 glass-glow">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: 'Client Satisfaction', value: 98, suffix: '%', icon: '😊' },
              { label: 'Projects Delivered', value: 150, suffix: '+', icon: '🚀' },
              { label: 'Repeat Clients', value: 85, suffix: '%', icon: '🔄' },
              { label: 'Average Rating', value: 4.9, suffix: '/5', icon: '⭐' },
            ].map((stat, index) => {
              const { count, elementRef } = useCountAnimation({
                endValue: stat.value,
                delay: index * 200,
                duration: 2000
              });

              return (
                <div
                  key={stat.label}
                  ref={elementRef}
                  className="animate-float"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <div className="text-2xl md:text-3xl font-bold text-primary mb-2">
                    {count}{stat.suffix}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="glass-panel rounded-2xl p-8 max-w-2xl mx-auto glass-glow">
            <h3 className="text-2xl font-bold mb-4">Ready to Work Together?</h3>
            <p className="text-muted-foreground mb-6">
              Let's create something amazing that your users will love and your business will benefit from.
            </p>
            <button className="glass-panel px-8 py-3 rounded-full text-primary hover:bg-primary hover:text-primary-foreground transition-smooth glass-glow ripple-effect">
              Start a Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};