import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6">
      <div className="text-center z-10">
        <motion.h1
          className="text-6xl sm:text-8xl md:text-9xl font-display font-bold tracking-tighter nexus-text"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          COSMOS 8
        </motion.h1>
        <motion.p
          className="mt-4 text-lg sm:text-xl font-mono text-muted-foreground tracking-widest uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          Tech. Done Right.
        </motion.p>
        <motion.div
          className="mt-10 flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <a
            href="#projects"
            className="px-8 py-3 rounded-lg font-medium text-sm bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-8 py-3 rounded-lg font-medium text-sm border border-border text-foreground hover:bg-muted transition-colors"
          >
            Get In Touch
          </a>
        </motion.div>
      </div>

      {/* Ambient gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-water/10 blur-[120px]" />
        <div className="absolute top-1/4 -right-32 w-96 h-96 rounded-full bg-fire/10 blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-nexus/5 blur-[80px]" />
      </div>
    </section>
  );
};

export default HeroSection;
