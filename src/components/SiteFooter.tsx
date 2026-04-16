import { Github, Instagram, Linkedin, Twitter } from "lucide-react";

const socials = [
  { name: "GitHub", href: "https://github.com/harshbix", icon: Github },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/junior-jeconia-90710b265", icon: Linkedin },
  { name: "X", href: "https://twitter.com/b1xson", icon: Twitter },
  { name: "Instagram", href: "https://instagram.com/bixx.tech", icon: Instagram },
];

export const SiteFooter = () => {
  return (
    <footer className="px-6 py-14">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 border-t border-border/40 pt-10 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xl font-bold tracking-tight text-foreground">Junior Jeconia</p>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
            Frontend engineer focused on motion, interface quality, and product experiences that people trust quickly.
          </p>
        </div>

        <div className="flex items-center gap-3">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border/50 bg-card/35 text-muted-foreground transition-transform duration-300 hover:-translate-y-1 hover:text-foreground"
              aria-label={social.name}
            >
              <social.icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};
