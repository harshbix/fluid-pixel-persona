import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export const Loader = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate initial loading sequence for assets/fonts
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000); // 2 second cinematic load

        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background"
                >
                    {/* Logo / Brand Element */}
                    <div className="relative flex flex-col items-center gap-6">
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 1, ease: 'easeOut' }}
                            className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-primary to-accent flex items-center justify-center text-primary-foreground text-2xl font-bold shadow-2xl relative overflow-hidden"
                        >
                            <motion.div
                                initial={{ x: '-100%' }}
                                animate={{ x: '100%' }}
                                transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
                            />
                            B
                        </motion.div>

                        {/* Cinematic Progress Line */}
                        <div className="h-[2px] w-48 bg-muted overflow-hidden rounded-full">
                            <motion.div
                                initial={{ width: '0%' }}
                                animate={{ width: '100%' }}
                                transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
                                className="h-full bg-gradient-to-r from-primary to-accent"
                            />
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
