import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "./ThemeProvider";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="relative h-10 w-[72px] rounded-full p-1 overflow-hidden border border-glass-border/60 transition-colors"
      style={{
        background: isDark
          ? "linear-gradient(135deg, hsl(216 30% 8%), hsl(216 25% 14%))"
          : "linear-gradient(135deg, hsl(45 100% 78%), hsl(25 95% 70%) 60%, hsl(15 88% 60%))",
        boxShadow: isDark
          ? "inset 0 0 14px hsl(195 80% 30% / 0.35), 0 0 18px hsl(195 80% 40% / 0.25)"
          : "inset 0 0 16px hsl(45 100% 60% / 0.5), 0 0 22px hsl(25 95% 60% / 0.4)",
      }}
    >
      {/* dark mode stars */}
      {isDark && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <span
              key={i}
              className="absolute rounded-full bg-nexus animate-pulse-glow"
              style={{
                width: `${1 + (i % 2)}px`,
                height: `${1 + (i % 2)}px`,
                top: `${15 + (i * 11) % 70}%`,
                left: `${10 + (i * 17) % 60}%`,
                animationDelay: `${i * 0.3}s`,
              }}
            />
          ))}
        </div>
      )}

      {/* sun rays in light mode */}
      {!isDark && (
        <div className="absolute right-1 top-1/2 -translate-y-1/2 w-8 h-8 pointer-events-none">
          <div
            className="absolute inset-0 rounded-full animate-spin-slow"
            style={{
              background:
                "conic-gradient(from 0deg, transparent 0deg, hsl(45 100% 92%) 10deg, transparent 30deg, transparent 60deg, hsl(45 100% 92%) 70deg, transparent 90deg, transparent 130deg, hsl(45 100% 92%) 140deg, transparent 160deg, transparent 200deg, hsl(45 100% 92%) 210deg, transparent 230deg, transparent 280deg, hsl(45 100% 92%) 290deg, transparent 310deg)",
              opacity: 0.7,
              filter: "blur(1px)",
            }}
          />
        </div>
      )}

      <motion.div
        layout
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        className={`relative z-10 h-8 w-8 rounded-full flex items-center justify-center ${
          isDark ? "ml-0" : "ml-auto"
        }`}
        style={{
          background: isDark
            ? "radial-gradient(circle at 30% 30%, hsl(210 30% 88%), hsl(216 15% 70%) 60%, hsl(216 20% 50%))"
            : "radial-gradient(circle at 30% 30%, hsl(50 100% 92%), hsl(40 100% 60%) 70%, hsl(20 90% 50%))",
          boxShadow: isDark
            ? "inset -3px -3px 6px hsl(216 25% 30% / 0.6), 0 0 8px hsl(210 30% 88% / 0.4)"
            : "0 0 16px hsl(45 100% 60% / 0.9), 0 0 32px hsl(25 95% 60% / 0.6)",
        }}
      >
        <AnimatePresence mode="wait">
          {isDark ? (
            <motion.div
              key="moon"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-5 h-5"
            >
              {/* crescent */}
              <div className="absolute inset-0 rounded-full bg-[hsl(210_30%_92%)]" />
              <div
                className="absolute rounded-full"
                style={{
                  width: "85%",
                  height: "85%",
                  top: "-5%",
                  right: "-15%",
                  background: "radial-gradient(circle at 30% 30%, hsl(216 30% 8%), hsl(216 25% 14%))",
                }}
              />
              {/* crater */}
              <span className="absolute w-1 h-1 rounded-full bg-[hsl(210_15%_70%)] top-[55%] left-[15%]" />
              <span className="absolute w-0.5 h-0.5 rounded-full bg-[hsl(210_15%_70%)] top-[30%] left-[30%]" />
            </motion.div>
          ) : (
            <motion.div
              key="sun"
              initial={{ rotate: 90, opacity: 0, scale: 0.5 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              exit={{ rotate: -90, opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.3 }}
              className="w-4 h-4 rounded-full"
              style={{
                background: "radial-gradient(circle, hsl(50 100% 96%), hsl(40 100% 70%))",
                boxShadow: "0 0 8px hsl(50 100% 90%), inset 0 0 4px hsl(40 100% 80%)",
              }}
            />
          )}
        </AnimatePresence>
      </motion.div>
    </button>
  );
};

export default ThemeToggle;
