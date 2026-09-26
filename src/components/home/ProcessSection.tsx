import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { BookingModal } from "../common/BookingModal";
import { PROCESS_STAGES } from "../../data/portfolioData";

export const ProcessSection = () => {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <>
      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />

      <section id="process" className="relative py-16 lg:py-24 bg-background dark:bg-background transition-colors duration-300 border-b border-gray-200 dark:border-gray-800">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Header with Call Button */}
          <div className="mb-12 lg:mb-16">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 lg:gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex-1"
              >
                <div className="inline-block px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 mb-4">
                  <p className="text-xs font-mono font-semibold text-[#1a3a35] dark:text-emerald-400 uppercase tracking-widest">
                    PROCESS
                  </p>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-[-0.03em]">
                  <span className="text-gray-900 dark:text-white">How I Work.</span>
                  <br />
                  <span className="text-gray-500 dark:text-gray-400 text-2xl sm:text-3xl lg:text-4xl font-normal">
                    From requirements to deployment.
                  </span>
                </h2>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <button
                  type="button"
                  onClick={() => setBookingOpen(true)}
                  className="bg-[#1a3a35] hover:bg-[#142d29] text-white font-semibold px-8 py-3.5 rounded-full transition-all duration-300 flex items-center gap-2 shadow-sm hover:scale-[1.02] text-xs uppercase tracking-wider"
                >
                  <span>Schedule a Call</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            </div>
          </div>

          {/* 4 Process Columns - Architectural Editorial Layout (Unboxed) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-b border-gray-200 dark:border-gray-800 divide-y md:divide-y-0 md:divide-x divide-gray-200 dark:divide-gray-800">
            {PROCESS_STAGES.map((stage, index) => (
              <motion.div
                key={stage.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="py-8 md:px-6 lg:px-7 first:pl-0 last:pr-0 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-baseline justify-between mb-4">
                    <span className="text-2xl font-bold font-mono text-[#1a3a35] dark:text-emerald-400">
                      {stage.number}
                    </span>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-gray-500 dark:text-gray-400">
                      {stage.phase.split(" & ")[0]}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 tracking-tight">
                    {stage.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                    {stage.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100 dark:border-gray-800/80 space-y-1.5">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-gray-500 dark:text-gray-400 block mb-1">
                    Deliverables:
                  </span>
                  {stage.deliverables.map((del) => (
                    <div key={del} className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#1a3a35] dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span className="leading-snug">{del}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
