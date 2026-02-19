import { useState, useRef, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, Check, AlertCircle } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export const ContactSection = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Cinematic parallax tracking
  const sectionRef = useRef<HTMLElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [smoothMouse, setSmoothMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let animationFrameId: number;
    const smoothInterpolation = () => {
      setSmoothMouse((prev) => {
        const x = prev.x + (mousePos.x - prev.x) * 0.05;
        const y = prev.y + (mousePos.y - prev.y) * 0.05;
        return { x, y };
      });
      animationFrameId = requestAnimationFrame(smoothInterpolation);
    };
    animationFrameId = requestAnimationFrame(smoothInterpolation);
    return () => cancelAnimationFrame(animationFrameId);
  }, [mousePos]);

  const onMouseMove = (e: React.MouseEvent) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  // Magnetic button logic
  const handleMagnetMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    e.currentTarget.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
  };

  const handleMagnetLeave = (e: React.MouseEvent<HTMLElement>) => {
    e.currentTarget.style.transform = `translate(0px, 0px)`;
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'juniorjeconia@icloud.com',
      href: 'mailto:juniorjeconia@icloud.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+255 (0) 755-063-711',
      href: 'tel:+255755063711'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Dar es Salaam, TZ',
      href: '#'
    }
  ];

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <section
      ref={sectionRef}
      onMouseMove={onMouseMove}
      className="py-20 px-6 relative overflow-hidden"
    >
      {/* Cinematic Liquid Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="absolute inset-0 will-change-transform"
          style={{ transform: `translate3d(${smoothMouse.x * 25}px, ${smoothMouse.y * 25}px, 0)` }}
        >
          <div className="absolute top-[30%] left-[20%] w-[50vw] h-[50vw] max-w-[700px] max-h-[700px] bg-accent/10 rounded-full blur-[100px] animate-liquid-morph mix-blend-multiply dark:mix-blend-screen opacity-50" />
        </div>
        <div
          className="absolute inset-0 will-change-transform"
          style={{ transform: `translate3d(${smoothMouse.x * -50}px, ${smoothMouse.y * -50}px, 0)` }}
        >
          <div className="absolute bottom-[20%] right-[20%] w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] bg-primary/15 rounded-full blur-[80px] animate-liquid-morph opacity-60" style={{ animationDelay: '-8s', animationDuration: '25s' }} />
        </div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-text-reveal">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground text-shadow-cinematic mb-6">
            Let's Create Together.
          </h2>
          <p className="text-xl text-muted-foreground/90 max-w-3xl mx-auto leading-relaxed">
            Have a project in mind? I'd love to hear about it. Let's discuss how we can bring your vision to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 animate-text-reveal" style={{ animationDelay: "0.2s" }}>
            <div className="bg-card/40 backdrop-blur-2xl rounded-[2rem] p-8 border border-white/10 dark:border-white/5 shadow-2xl">
              <h3 className="text-2xl font-bold mb-6 text-foreground text-shadow-cinematic">Get in Touch</h3>

              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onMouseMove={handleMagnetMove}
                    onMouseLeave={handleMagnetLeave}
                    className="btn-magnetic group flex items-center gap-4 p-4 rounded-2xl bg-muted/40 hover:bg-muted/80 backdrop-blur-md border border-border/40 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-xl bg-foreground flex items-center justify-center group-hover:scale-110 transition-transform">
                      <item.icon className="w-5 h-5 text-background" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground tracking-tight">{item.label}</p>
                      <p className="text-muted-foreground text-sm">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="bg-card/40 backdrop-blur-2xl rounded-[2rem] p-8 border border-white/10 dark:border-white/5 shadow-2xl">
              <h4 className="text-xl font-bold mb-4 text-foreground">Current Availability</h4>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                <span className="text-green-600 font-semibold tracking-tight">Available for new projects</span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                I'm currently accepting new projects.
                Typical project timelines range from 4-12 weeks depending on scope.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card/40 backdrop-blur-2xl rounded-[2rem] p-8 border border-white/10 dark:border-white/5 shadow-2xl animate-text-reveal" style={{ animationDelay: "0.4s" }}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl glass-panel border-0 focus:ring-2 focus:ring-primary transition-smooth ${errors.name ? 'ring-2 ring-red-500' : ''
                      }`}
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl glass-panel border-0 focus:ring-2 focus:ring-primary transition-smooth ${errors.email ? 'ring-2 ring-red-500' : ''
                      }`}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl glass-panel border-0 focus:ring-2 focus:ring-primary transition-smooth ${errors.subject ? 'ring-2 ring-red-500' : ''
                    }`}
                  placeholder="What's this about?"
                />
                {errors.subject && (
                  <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.subject}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className={`w-full px-4 py-3 rounded-xl glass-panel border-0 focus:ring-2 focus:ring-primary transition-smooth resize-none ${errors.message ? 'ring-2 ring-red-500' : ''
                    }`}
                  placeholder="Tell me about your project, timeline, and any specific requirements..."
                />
                {errors.message && (
                  <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                onMouseMove={handleMagnetMove}
                onMouseLeave={handleMagnetLeave}
                disabled={isSubmitting || isSubmitted}
                className={`btn-magnetic group relative w-full py-5 rounded-2xl font-bold uppercase tracking-widest text-sm transition-smooth flex items-center justify-center gap-3 overflow-hidden ${isSubmitted
                    ? 'bg-green-500 text-white'
                    : 'btn-magnetic-hover text-background bg-foreground shadow-2xl'
                  } ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                <span className="relative z-10 flex items-center gap-2">
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : isSubmitted ? (
                    <>
                      <Check className="w-4 h-4" />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      Send Message
                    </>
                  )}
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};