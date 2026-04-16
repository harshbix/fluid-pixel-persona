import { motion } from "framer-motion";
import { Mail, MessageCircle, PhoneCall } from "lucide-react";

const contactMethods = [
  {
    label: "WhatsApp",
    value: "+255 755 063 711",
    href: "https://wa.me/255755063711?text=Hi%20Junior%2C%20I%20saw%20your%20portfolio%20and%20would%20love%20to%20talk.",
    icon: MessageCircle,
  },
  {
    label: "Email",
    value: "juniorjeconia@icloud.com",
    href: "mailto:juniorjeconia@icloud.com?subject=Portfolio%20Inquiry",
    icon: Mail,
  },
  {
    label: "Call",
    value: "+255 755 063 711",
    href: "tel:+255755063711",
    icon: PhoneCall,
  },
];

export const ContactCtaSection = () => {
  return (
    <section id="contact" className="border-b border-border/40 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="glass-panel rounded-[32px] p-8 lg:p-10"
        >
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-muted-foreground">Contact</p>
              <h2 className="mt-5 text-[clamp(2.4rem,5vw,4.4rem)] font-black tracking-tight text-foreground">
                Let&apos;s build something with more taste than noise.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                Open to product roles, freelance collaborations, and redesign work where visual quality, motion, and trust matter. Best response time is usually within one business day.
              </p>
            </div>

            <div className="grid gap-4">
              {contactMethods.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.75, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="group flex items-center gap-4 rounded-[24px] border border-border/40 bg-background/35 p-5 transition-transform duration-300 hover:-translate-y-1"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/12 text-primary">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">{item.label}</p>
                    <p className="mt-1 text-lg font-medium text-foreground">{item.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
