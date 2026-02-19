import { Check, HelpCircle } from "lucide-react";

const packages = [
  {
    name: "Basic",
    tagline: "Digital Business Card",
    priceRange: "1.4M – 5.6M Tsh",
    description: "Best for businesses that need a professional home on Google. We set everything up so customers can easily find your services and contact details.",
    features: [
      "1-3 Pages",
      "Mobile Friendly Design",
      "Contact Form",
      "Social Media Links",
      "Google Maps Integration",
      "Basic SEO Setup"
    ],
    popular: false,
    cta: "Get Started",
  },
  {
    name: "Standard",
    tagline: "Growth Website",
    priceRange: "8.4M – 22.4M Tsh",
    description: "Designed for businesses ready to stand out. This website matches your brand and includes tools that help turn visitors into real customers.",
    features: [
      "5-10 Pages",
      "Custom Brand Design",
      "Blog / News Section",
      "Content Management System",
      "Advanced SEO Optimization",
      "Google Analytics Setup",
      "WhatsApp Chat Integration"
    ],
    popular: true,
    cta: "Choose Growth",
  },
  {
    name: "Premium",
    tagline: "Full Digital Platform",
    priceRange: "Starting from 28M Tsh",
    description: "For businesses that want to sell online or automate operations. This is a powerful custom-built system designed for growth, secure payments, and high traffic.",
    features: [
      "Unlimited Pages",
      "E-commerce / Online Payments",
      "User Accounts & Logins",
      "Custom Web Applications",
      "Database Integration",
      "Priority Support 24/7",
      "Performance Optimization"
    ],
    popular: false,
    cta: "Contact for Quote",
  },
];

export const PricingSection = () => {
  return (
    <section className="py-20 px-6 relative" id="pricing">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Website Pricing Guide
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transparent pricing packages tailored for Tanzanian businesses. Choose the plan that fits your growth stage.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20 mt-4 relative z-10">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative flex flex-col h-full glass-panel glass-glow rounded-2xl transition-all duration-300 ${
                pkg.popular
                  ? "border-primary/50 shadow-xl scale-105 z-20"
                  : "hover:border-primary/30 hover:shadow-md"
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                  <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold shadow-md whitespace-nowrap">
                    Most Popular
                  </span>
                </div>
              )}

              <div className={`p-8 pb-0 flex-1 ${pkg.popular ? "pt-10" : ""}`}>
                <div className="mb-2">
                  <h3 className="text-2xl font-bold">{pkg.name}</h3>
                  <p className="text-primary font-medium text-sm uppercase tracking-wide">{pkg.tagline}</p>
                </div>
                
                <div className="my-6">
                  <span className="text-3xl font-bold block bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent">
                    {pkg.priceRange}
                  </span>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed mb-6 min-h-[72px]">
                  {pkg.description}
                </p>

                <div className="w-full h-px bg-border/50 mb-6" />

                <h4 className="font-semibold mb-4 text-xs uppercase tracking-widest text-muted-foreground">Why Choose This?</h4>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm">
                      <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/90">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-8 pt-0 mt-auto">
                <button
                  className={`w-full py-3 px-4 rounded-xl font-semibold transition-all duration-300 shadow-md ${
                    pkg.popular
                      ? "bg-primary text-primary-foreground hover:bg-primary/90"
                      : "bg-secondary text-foreground hover:bg-primary hover:text-primary-foreground"
                  }`}
                >
                  {pkg.cta}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Running Costs Section */}
        <div className="glass-panel rounded-2xl p-8 md:p-10 border border-primary/10 bg-primary/5 relative overflow-hidden">
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl opacity-50 pointer-events-none" />
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center lg:items-start gap-8">
            <div className="flex-1 space-y-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <HelpCircle className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold">Website Running Costs</h3>
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Just like a physical shop needs rent and utilities, a website needs a domain and hosting to stay online. These are annual costs paid to service providers.
              </p>
            </div>
            
            <div className="flex-1 w-full lg:w-auto grid sm:grid-cols-2 gap-4">
              <div className="bg-background/40 backdrop-blur-md p-6 rounded-xl border border-border/40 hover:border-primary/30 transition-colors">
                <span className="font-bold block text-lg mb-1">Domain Name</span>
                <span className="text-sm text-muted-foreground block mb-3">Your website address (e.g., .co.tz)</span>
                <div className="text-2xl text-primary font-bold">~25k - 50k <span className="text-sm font-normal text-muted-foreground">/ year</span></div>
              </div>
              <div className="bg-background/40 backdrop-blur-md p-6 rounded-xl border border-border/40 hover:border-primary/30 transition-colors">
                <span className="font-bold block text-lg mb-1">Hosting</span>
                <span className="text-sm text-muted-foreground block mb-3">Server space for your files</span>
                <div className="text-2xl text-primary font-bold">~150k+ <span className="text-sm font-normal text-muted-foreground">/ year</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

