import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

const BackToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="fixed bottom-[9.5rem] sm:bottom-[10.5rem] right-4 sm:right-6 z-50 flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full text-primary-foreground border border-glass-border/60 backdrop-blur-xl"
          style={{
            background:
              "linear-gradient(135deg, hsl(var(--water)) 0%, hsl(var(--nexus)) 50%, hsl(var(--fire)) 100%)",
            boxShadow:
              "0 8px 28px hsl(var(--fire) / 0.35), 0 4px 14px hsl(var(--water) / 0.3), inset 0 1px 0 hsl(0 0% 100% / 0.25)",
          }}
          initial={{ scale: 0, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0, opacity: 0, y: 20 }}
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.92 }}
          transition={{ type: "spring", stiffness: 240, damping: 18 }}
        >
          <ArrowUp size={20} strokeWidth={2.5} className="relative z-10" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTopButton;
