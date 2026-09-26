import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fast initial reveal without blocking visitors
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 250);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background pointer-events-none"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-primary to-accent flex items-center justify-center text-primary-foreground font-black text-sm shadow-xl">
              JJ
            </div>
            <span className="font-bold text-foreground text-sm tracking-tight">Junior Jeconia</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
