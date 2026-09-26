import { Link } from "react-router-dom";
import { ArrowRight, Globe, Layers, Layout, Cpu, Check } from "lucide-react";
import { motion } from "framer-motion";
import { SERVICES } from "../../data/portfolioData";

const iconMap: Record<string, typeof Globe> = {
  Globe,
  Layers,
  Layout,
  Cpu,
};

export const ServicesSection = () => {
  return (
    <section id="services" className="bg-background dark:bg-background py-16 lg:py-24 transition-colors duration-300 border-b border-gray-200 dark:border-gray-800">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-block px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 mb-3">
              <p className="text-xs font-mono font-semibold text-[#1a3a35] dark:text-emerald-400 uppercase tracking-widest">
                SERVICES
              </p>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight tracking-[-0.03em]">
              What I Build.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-md font-normal leading-relaxed">
            Modern web applications, typed backend architectures, and interface systems designed for real use.
          </p>
        </div>

        {/* Contiguous Connected Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden">
          {SERVICES.map((service, index) => {
            const Icon = iconMap[service.icon] || Globe;

            return (
              <motion.div
                key={service.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <Link
                  to="/services"
                  className="group bg-white dark:bg-gray-900/60 border-r border-b border-gray-200 dark:border-gray-800 p-6 lg:p-7 flex flex-col justify-between h-full transition-all duration-300 hover:bg-[#1a3a35] dark:hover:bg-[#1a3a35]"
                >
                  <div>
                    {/* Top Bar with Number & Icon */}
                    <div className="flex items-center justify-between mb-5">
                      <span className="text-xs font-mono font-bold text-gray-500 dark:text-gray-400 group-hover:text-emerald-300 transition-colors">
                        {service.number}
                      </span>
                      <div className="w-9 h-9 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-[#1a3a35] dark:text-white group-hover:bg-white/10 group-hover:text-white transition-all duration-300">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-white transition-colors duration-300">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 group-hover:text-white/85 transition-colors duration-300 leading-relaxed mb-6">
                      {service.tagline}
                    </p>

                    {/* Key Deliverables */}
                    <ul className="space-y-2 mb-6 pt-4 border-t border-gray-100 dark:border-gray-800/80 group-hover:border-white/15 transition-colors">
                      {service.deliverables.slice(0, 3).map((item) => (
                        <li key={item} className="flex items-start gap-2 text-xs text-gray-500 dark:text-gray-400 group-hover:text-white/80 transition-colors">
                          <Check className="w-3.5 h-3.5 text-[#1a3a35] dark:text-emerald-400 group-hover:text-emerald-300 mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Bottom link / arrow */}
                  <div className="pt-4 border-t border-gray-100 dark:border-gray-800/80 group-hover:border-white/15 flex items-center justify-between text-xs font-semibold text-gray-900 dark:text-white group-hover:text-white transition-colors">
                    <span>View Details</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
