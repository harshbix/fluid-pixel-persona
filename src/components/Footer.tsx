import { Github, Dribbble, Linkedin, Twitter, Heart, Coffee } from 'lucide-react';

const socialLinks = [
  {
    name: 'GitHub',
    icon: Github,
    href: 'https://github.com/bixchen',
    color: 'hover:text-gray-900 dark:hover:text-white'
  },
  {
    name: 'Dribbble',
    icon: Dribbble,
    href: 'https://dribbble.com/bixchen',
    color: 'hover:text-pink-500'
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    href: 'https://linkedin.com/in/bixchen',
    color: 'hover:text-blue-600'
  },
  {
    name: 'Twitter',
    icon: Twitter,
    href: 'https://twitter.com/bixchen',
    color: 'hover:text-blue-400'
  }
];

const quickLinks = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' }
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="glass-panel rounded-2xl p-6 glass-glow">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
                Bix Chen
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                A passionate designer crafting digital experiences that delight users and drive business success. 
                Let's create something amazing together.
              </p>
              
              {/* Social Links */}
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 rounded-xl glass-panel flex items-center justify-center text-muted-foreground transition-smooth glass-glow ripple-effect ${social.color}`}
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-6 text-foreground">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-smooth block py-1"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-6 text-foreground">Get in Touch</h4>
            <div className="space-y-3 text-muted-foreground">
              <p>hello@bixchen.design</p>
              <p>+1 (555) 123-4567</p>
              <p>San Francisco, CA</p>
              
              <div className="pt-4">
                <div className="flex items-center gap-2 text-green-600 text-sm">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  Available for projects
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Fun Stats */}
        <div className="glass-panel rounded-2xl p-6 mb-12 glass-glow">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { label: 'Pixels Perfected', value: '∞', icon: '🎯' },
              { label: 'Coffee Consumed', value: '2,847', icon: '☕' },
              { label: 'Happy Clients', value: '50+', icon: '😊' },
              { label: 'Late Night Designs', value: '∞', icon: '🌙' }
            ].map((stat, index) => (
              <div 
                key={stat.label}
                className="animate-float"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-2xl mb-1">{stat.icon}</div>
                <div className="text-xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-xs text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter */}
        <div className="glass-panel rounded-2xl p-8 mb-12 text-center glass-glow">
          <h4 className="text-xl font-bold mb-4">Stay Updated</h4>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Get occasional updates about new projects, design insights, and creative musings. 
            No spam, just good vibes.
          </p>
          
          <div className="flex gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="your.email@example.com"
              className="flex-1 px-4 py-3 rounded-xl glass-panel border-0 focus:ring-2 focus:ring-primary transition-smooth"
            />
            <button className="px-6 py-3 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-smooth glass-glow ripple-effect">
              Subscribe
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border/50">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0 flex items-center gap-2">
            © {currentYear} Bix Chen. Made with 
            <Heart className="w-4 h-4 text-red-500 animate-pulse" /> 
            and lots of 
            <Coffee className="w-4 h-4 text-amber-600" />
          </p>
          
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-smooth">Privacy</a>
            <a href="#" className="hover:text-primary transition-smooth">Terms</a>
            <a href="#" className="hover:text-primary transition-smooth">Sitemap</a>
          </div>
        </div>

        {/* Fun Easter Egg */}
        <div className="text-center mt-8">
          <p className="text-xs text-muted-foreground/50">
            🎨 Designed & built with attention to every pixel • Press 'W' for a surprise
          </p>
        </div>
      </div>
    </footer>
  );
};