import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Zap, CheckCircle2, MessageCircle, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { BookingModal } from "../common/BookingModal";

export const ConversionCTASection = () => {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <>
      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />

      <section className="bg-background dark:bg-background py-20 lg:py-28 transition-colors duration-300 relative overflow-hidden">
        <div className="mx-auto max-w-5xl px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Section Tag */}
            <p className="text-xs sm:text-sm font-mono font-semibold uppercase tracking-widest text-[#1a3a35] dark:text-emerald-400">
              Start a Conversation
            </p>

            {/* Headline */}
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white tracking-[-0.03em] leading-tight">
              Let&apos;s build something useful.
            </h2>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Have a website, application, or digital product in mind? Let&apos;s talk.
            </p>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact">
                <button
                  type="button"
                  className="w-full sm:w-auto px-8 py-4 bg-[#1a3a35] hover:bg-[#142d29] text-white font-bold text-xs uppercase tracking-wider rounded-full transition-all duration-300 shadow-md hover:scale-[1.02] flex items-center justify-center gap-2"
                >
                  <span>Start a Project</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </Link>

              <button
                type="button"
                onClick={() => setBookingOpen(true)}
                className="w-full sm:w-auto px-8 py-4 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white font-bold text-xs uppercase tracking-wider rounded-full transition-all duration-300 shadow-sm flex items-center justify-center gap-2"
              >
                <Zap className="w-4 h-4 text-emerald-600 dark:text-emerald-400 fill-current" />
                <span>Schedule a Call</span>
              </button>
            </div>

            {/* Kepha Bottom Stats Strip */}
            <div className="pt-12 mt-8 border-t border-gray-200 dark:border-gray-800 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="flex items-center justify-center gap-2 text-xs font-semibold text-gray-600 dark:text-gray-400">
                <Clock className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>15 min Free Consultation</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-xs font-semibold text-gray-600 dark:text-gray-400">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>100% Direct Developer Access</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-xs font-semibold text-gray-600 dark:text-gray-400">
                <MessageCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>Sub-24h Response Time</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};
