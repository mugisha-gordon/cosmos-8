import { motion } from "framer-motion";
import { ReactNode } from "react";

interface PageHeroProps {
  bgImage: string;
  eyebrow: string;
  title: ReactNode;
  subtitle: string;
  alt?: string;
  children?: ReactNode;
}

const PageHero = ({ bgImage, eyebrow, title, subtitle, alt = "", children }: PageHeroProps) => {
  return (
    <section className="relative min-h-[70vh] sm:min-h-[80vh] flex items-center justify-center px-4 sm:px-6 py-20 sm:py-24 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src={bgImage}
          alt={alt}
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        {/* Layered gradients for legibility in both themes */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-water/10 via-transparent to-fire/10" />
        <div className="absolute inset-0 grid-overlay opacity-40" />
        <div className="noise-overlay" />
      </div>

      {/* Corner brackets — surprise detail */}
      <div className="absolute top-24 left-6 md:left-10 w-10 h-10 border-l-2 border-t-2 border-water/60 z-10" />
      <div className="absolute top-24 right-6 md:right-10 w-10 h-10 border-r-2 border-t-2 border-fire/60 z-10" />
      <div className="absolute bottom-10 left-6 md:left-10 w-10 h-10 border-l-2 border-b-2 border-fire/60 z-10" />
      <div className="absolute bottom-10 right-6 md:right-10 w-10 h-10 border-r-2 border-b-2 border-water/60 z-10" />

      {/* Coordinates marker — hidden on small screens to avoid clutter */}
      <div className="hidden sm:block absolute top-24 left-1/2 -translate-x-1/2 z-10 font-mono text-[10px] text-muted-foreground tracking-widest opacity-70 whitespace-nowrap">
        N 00°18'49" · E 32°34'52" · KAMPALA
      </div>

      <div className="container mx-auto max-w-4xl text-center relative z-10">
        <motion.p
          className="text-[10px] sm:text-xs md:text-sm font-mono text-fire uppercase tracking-[0.25em] sm:tracking-[0.3em] mb-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          ◢ {eyebrow} ◣
        </motion.p>
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-foreground mb-6 leading-[1.05] break-words"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          {title}
        </motion.h1>
        <motion.p
          className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed px-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
        >
          {subtitle}
        </motion.p>
        {children && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10"
          >
            {children}
          </motion.div>
        )}
      </div>

      {/* Scroll cue */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="font-mono text-[10px] text-muted-foreground tracking-widest">SCROLL</span>
        <div className="w-px h-10 bg-gradient-to-b from-water via-nexus to-fire" />
      </motion.div>
    </section>
  );
};

export default PageHero;
