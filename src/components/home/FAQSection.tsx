import { useState } from "react";
import { Plus, Minus, ArrowRight, Zap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { BookingModal } from "../common/BookingModal";
import { FAQS } from "../../data/portfolioData";

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [bookingOpen, setBookingOpen] = useState(false);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <>
      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />

      <section id="faq" className="bg-background dark:bg-background py-16 lg:py-24 transition-colors duration-300 border-b border-gray-200 dark:border-gray-800">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">
            {/* Left Column: Kepha Signature Visual Block with Overlapping Corner Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative min-h-[480px] sm:min-h-[560px] w-full"
            >
              {/* Background Image Frame */}
              <div className="absolute inset-0 rounded-[12px] overflow-hidden border border-gray-200 dark:border-gray-800 shadow-md">
                <img
                  src="/assets/about-2.jpg"
                  alt="Junior Jeconia workspace"
                  className="w-full h-full object-cover grayscale-[15%]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/45" />

                <div className="absolute top-10 left-8 sm:top-12 sm:left-10 max-w-xs z-10">
                  <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight">
                    Need Help? <br />
                    Start Here...
                  </h2>
                </div>
              </div>

              {/* Kepha Signature Corner Accent Overlapping Box */}
              <div
                onClick={() => setBookingOpen(true)}
                className="absolute bottom-0 right-0 w-[260px] sm:w-[280px] h-[190px] sm:h-[200px] bg-[#1a3a35] rounded-tl-[16px] rounded-br-[12px] z-20 p-7 flex flex-col justify-center shadow-2xl cursor-pointer hover:bg-[#142d29] transition-all duration-300 group"
              >
                <div className="flex items-center gap-2 mb-2 text-emerald-300 text-xs font-mono font-semibold uppercase tracking-wider">
                  <Zap className="w-3.5 h-3.5 fill-current" />
                  Free Strategy
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">Get Started</h3>
                <p className="text-2xl font-bold text-emerald-300 mb-4">Free Call?</p>
                <span className="text-xs font-bold uppercase tracking-wider text-white/90 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1.5">
                  Schedule Now &rarr;
                </span>
              </div>
            </motion.div>

            {/* Right Column: Kepha Accordion List */}
            <div className="space-y-3 flex flex-col justify-center">
              {FAQS.map((faq, index) => {
                const isOpen = openIndex === index;

                return (
                  <motion.div
                    key={faq.question}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className={`rounded-xl overflow-hidden transition-all duration-300 border ${
                      isOpen
                        ? "bg-[#1a3a35] dark:bg-[#1a3a35] border-[#1a3a35] shadow-lg text-white"
                        : "bg-white dark:bg-gray-900/60 border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 text-gray-900 dark:text-white"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => toggle(index)}
                      className="w-full px-6 sm:px-8 py-5 text-left flex items-center justify-between group cursor-pointer focus:outline-none"
                    >
                      <h3
                        className={`text-base sm:text-lg font-bold pr-6 transition-colors duration-200 ${
                          isOpen ? "text-white" : "text-gray-900 dark:text-white group-hover:text-[#1a3a35] dark:group-hover:text-emerald-400"
                        }`}
                      >
                        {faq.question}
                      </h3>

                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center border flex-shrink-0 transition-all duration-300 ${
                          isOpen
                            ? "border-white/30 bg-white/10 text-white"
                            : "border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-300"
                        }`}
                      >
                        {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                      </div>
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 sm:px-8 pb-6">
                            <p className="text-sm leading-relaxed border-t pt-4 text-white/90 border-white/20">
                              {faq.answer}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
