import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Terminal } from "lucide-react";

const competencies = [
  "→ Mobile Deployment Architecture",
  "→ React & Cross-Platform Systems",
  "→ Network Security & Hardening",
  "→ Full-Stack Application Design",
  "→ Cybersecurity Threat Analysis",
];

const FounderCard = () => {
  const [lines, setLines] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStarted(true);
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started || currentLine >= competencies.length) return;
    const timeout = setTimeout(() => {
      const line = competencies[currentLine];
      if (currentChar < line.length) {
        setLines((prev) => {
          const copy = [...prev];
          copy[currentLine] = line.slice(0, currentChar + 1);
          return copy;
        });
        setCurrentChar((c) => c + 1);
      } else {
        setCurrentLine((l) => l + 1);
        setCurrentChar(0);
        setLines((prev) => [...prev, ""]);
      }
    }, 35);
    return () => clearTimeout(timeout);
  }, [started, currentLine, currentChar]);

  return (
    <section id="about" className="py-24 px-6 relative z-10">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          ref={ref}
          className="glass-card p-8 md:p-12 grid md:grid-cols-2 gap-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div>
            <p className="text-sm font-mono text-water uppercase tracking-widest mb-2">
              Founder & Lead
            </p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Mugisha Gordon
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Lead Computer Scientist at Cozmos 8, specializing in building resilient, 
              production-grade applications. With deep expertise spanning mobile deployment, 
              reactive front-end architecture, and network security—every system is engineered 
              to perform under pressure.
            </p>
          </div>

          <div className="bg-background/80 rounded-lg p-5 font-mono text-sm border border-border/50">
            <div className="flex items-center gap-2 mb-4 text-muted-foreground">
              <Terminal size={14} />
              <span className="text-xs">system_status.sh</span>
            </div>
            <div className="text-water/80 space-y-1">
              <p className="text-muted-foreground">$ scanning core competencies...</p>
              {lines.map((line, i) => (
                <p key={i} className="text-foreground">
                  {line}
                  {i === currentLine && currentLine < competencies.length && (
                    <span className="inline-block w-2 h-4 bg-water ml-0.5 animate-pulse-glow" />
                  )}
                </p>
              ))}
              {currentLine >= competencies.length && (
                <p className="text-fire mt-2">✓ All systems operational.</p>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FounderCard;
