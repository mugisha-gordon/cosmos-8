import PageLayout from "@/components/PageLayout";
import SectionDivider from "@/components/SectionDivider";
import { motion } from "framer-motion";
import { Terminal, Users, Target, Award, Rocket } from "lucide-react";
import logo from "@/assets/cosmos8-logo.png";
import { useState, useEffect, useRef } from "react";

const competencies = [
  "→ Mobile Deployment Architecture",
  "→ React & Cross-Platform Systems",
  "→ Network Security & Hardening",
  "→ Full-Stack Application Design",
  "→ Cybersecurity Threat Analysis",
  "→ Cloud Infrastructure & DevOps",
];

const values = [
  { icon: Target, title: "Precision", desc: "Every solution is tailored to exact specifications. We don't do one-size-fits-all." },
  { icon: Award, title: "Excellence", desc: "Our 90-day testing standard means nothing ships until it's battle-tested." },
  { icon: Users, title: "Partnership", desc: "We work alongside our clients, not just for them. Your success is our success." },
  { icon: Rocket, title: "Innovation", desc: "We stay ahead of the curve, adopting cutting-edge technologies that give you a competitive edge." },
];

const timeline = [
  { year: "2019", title: "The Beginning", desc: "Cosmos 8 was founded by Mugisha Gordon with a vision to deliver world-class technology from the heart of East Africa." },
  { year: "2020", title: "First Major Deployment", desc: "Launched Semkat, our flagship platform, proving that enterprise-grade software can be built locally." },
  { year: "2021", title: "Security Division", desc: "Expanded into cybersecurity consulting, offering penetration testing and security audits." },
  { year: "2022", title: "Network Engineering", desc: "Added network infrastructure design and deployment to our growing service portfolio." },
  { year: "2023", title: "Regional Expansion", desc: "Began serving clients across multiple East African countries with remote and on-site services." },
  { year: "2024", title: "Cloud & DevOps", desc: "Introduced cloud architecture and CI/CD pipeline services, modernizing client infrastructure." },
];

const TerminalEffect = () => {
  const [lines, setLines] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
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
    <div ref={ref} className="bg-background/80 rounded-lg p-5 font-mono text-sm border border-border/50">
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
  );
};

const About = () => {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="py-32 px-6 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-sm font-mono text-water uppercase tracking-widest mb-2">About Us</p>
              <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6">
                The Company Behind the <span className="nexus-text">Code</span>
              </h1>
              <p className="text-muted-foreground leading-relaxed mb-4 text-lg">
                Cosmos 8 is a Kampala-based technology firm founded on the principle that African innovation 
                can compete on the world stage. We build software systems, design network infrastructure, 
                and secure digital assets for organizations that demand nothing less than excellence.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our name draws from the cosmos—vast, interconnected, and full of potential. The "8" represents 
                infinity turned upright: limitless possibilities in technology when approached with discipline 
                and vision.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="relative">
                <img src={logo} alt="Cosmos 8" className="w-72 md:w-96 relative z-10" />
                <div className="absolute -inset-8 bg-water/5 blur-[80px] rounded-full" />
                <div className="absolute -inset-8 bg-fire/5 blur-[80px] rounded-full translate-x-10" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Founder Section */}
      <section className="py-24 px-6 relative z-10">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p className="text-sm font-mono text-fire uppercase tracking-widest mb-2">Leadership</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">Meet the Founder</h2>
          </motion.div>
          <motion.div
            className="glass-card p-8 md:p-12 grid md:grid-cols-2 gap-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div>
              <p className="text-sm font-mono text-water uppercase tracking-widest mb-2">Founder & Lead Computer Scientist</p>
              <h3 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">Mugisha Gordon</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Mugisha Gordon is the founder and lead computer scientist at Cosmos 8. With years of hands-on experience 
                in software engineering, mobile deployment architecture, and cybersecurity, he leads a team dedicated 
                to building resilient, production-grade systems.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Gordon's approach to technology is rooted in rigorous testing, security-first design, and a commitment 
                to delivering solutions that work under real-world pressure. His expertise spans reactive front-end 
                architectures, network security hardening, and full-stack application development.
              </p>
            </div>
            <TerminalEffect />
          </motion.div>
        </div>
      </section>

      <SectionDivider />

      {/* Values */}
      <section className="py-24 px-6 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p className="text-sm font-mono text-water uppercase tracking-widest mb-2">Our Foundation</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">Core Values</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                className="glass-card p-6 text-center thermal-glow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-muted mb-4">
                  <v.icon size={22} className="text-water" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Timeline */}
      <section className="py-24 px-6 relative z-10">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p className="text-sm font-mono text-fire uppercase tracking-widest mb-2">Our Journey</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">Company Timeline</h2>
          </motion.div>
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-water via-nexus to-fire" />
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                className={`relative flex items-start gap-6 mb-10 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className={`hidden md:block md:w-1/2 ${i % 2 === 0 ? "text-right pr-10" : "text-left pl-10"}`}>
                  <p className="font-mono text-sm text-water mb-1">{item.year}</p>
                  <h3 className="font-display font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
                <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-primary -translate-x-1/2 mt-1 ring-4 ring-background" />
                <div className="md:hidden pl-10">
                  <p className="font-mono text-sm text-water mb-1">{item.year}</p>
                  <h3 className="font-display font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default About;
