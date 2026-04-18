import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import SectionDivider from "@/components/SectionDivider";
import OrbitGraphic from "@/components/OrbitGraphic";
import { motion } from "framer-motion";
import { Terminal, Users, Target, Award, Rocket, Compass, Heart, Brain } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import heroImg from "@/assets/hero-about.jpg";

const competencies = [
  "→ Mobile Deployment Architecture",
  "→ React & Cross-Platform Systems",
  "→ Network Security & Hardening",
  "→ Full-Stack Application Design",
  "→ Cybersecurity Threat Analysis",
  "→ Cloud Infrastructure & DevOps",
];

const values = [
  { icon: Target, title: "Precision", desc: "Every solution is tailored to exact specifications. No templates, no shortcuts, no one-size-fits-all." },
  { icon: Award, title: "Excellence", desc: "Our 90-day testing standard means nothing ships until it has earned the right to be production." },
  { icon: Users, title: "Partnership", desc: "We work alongside our clients, not just for them. Your success is the only metric that matters." },
  { icon: Rocket, title: "Innovation", desc: "We stay ahead of the curve, adopting cutting-edge technologies that give you a real competitive edge." },
  { icon: Heart, title: "Integrity", desc: "Honest scoping. Transparent invoicing. Clear architecture decisions. We say what we mean." },
  { icon: Brain, title: "Mastery", desc: "Continuous learning is non-negotiable. Every engineer is expected to grow with the field." },
];

const timeline = [
  { year: "2019", title: "The Beginning", desc: "Cosmos 8 was founded by Mugisha Gordon with a vision to deliver world-class technology from the heart of East Africa." },
  { year: "2020", title: "First Major Deployment", desc: "Launched Semkat, our flagship platform, proving that enterprise-grade software can be built locally and shipped reliably." },
  { year: "2021", title: "Security Division", desc: "Expanded into cybersecurity consulting, offering penetration testing, security audits, and incident response retainers." },
  { year: "2022", title: "Network Engineering", desc: "Added network infrastructure design and deployment to our growing service portfolio, serving multi-site enterprises." },
  { year: "2023", title: "Regional Expansion", desc: "Began serving clients across multiple East African countries with hybrid remote and on-site engagement models." },
  { year: "2024", title: "Cloud & DevOps", desc: "Introduced cloud architecture and CI/CD pipeline services, modernizing client infrastructure end-to-end." },
  { year: "2025", title: "Five Years Strong", desc: "Crossed 5 years of operation with zero major security incidents across the entire client portfolio." },
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
        <span className="ml-auto flex gap-1">
          <span className="w-2 h-2 rounded-full bg-fire/60" />
          <span className="w-2 h-2 rounded-full bg-nexus/60" />
          <span className="w-2 h-2 rounded-full bg-water/60" />
        </span>
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
      <PageHero
        bgImage={heroImg}
        eyebrow="About Us · Chapter One"
        title={<>The company behind the <span className="nexus-text">code</span></>}
        subtitle="Cosmos 8 is a Kampala-based technology firm built on the conviction that African innovation can — and should — compete on the world stage."
        alt="Holographic blueprint of a digital cathedral"
      />

      {/* Mission / Manifesto */}
      <section className="py-24 px-6 relative z-10">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-sm font-mono text-water uppercase tracking-widest mb-2">◢ Our Manifesto ◣</p>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-8 leading-tight">
              We build software the way <span className="serif-italic fire-text">it should be built</span> — and we refuse to apologise for it.
            </h2>
            <div className="space-y-5 text-muted-foreground text-lg leading-relaxed">
              <p>
                The technology industry has a quiet crisis: software shipped half-finished, networks held together with hope,
                and security treated as a checkbox. Cosmos 8 exists because that approach is unacceptable when real businesses,
                real users, and real money depend on the systems we ship.
              </p>
              <p>
                Our name draws from the cosmos — vast, interconnected, indifferent to mediocrity. The "8" is infinity turned upright:
                limitless possibility, when paired with discipline. We bring both.
              </p>
              <p className="serif-italic text-2xl text-foreground">
                "If it's not tested, it's not ready. If it's not secure, it's not finished."
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <SectionDivider />

      {/* Founder */}
      <section className="py-24 px-6 relative z-10">
        <div className="container mx-auto max-w-5xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <p className="text-sm font-mono text-fire uppercase tracking-widest mb-2">◢ Leadership ◣</p>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground">Meet the <span className="serif-italic water-text">founder</span></h2>
          </motion.div>
          <motion.div className="glass-card p-8 md:p-12 grid md:grid-cols-2 gap-10" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div>
              <p className="text-sm font-mono text-water uppercase tracking-widest mb-2">Founder & Lead Computer Scientist</p>
              <h3 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">Mugisha Gordon</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Mugisha Gordon is the founder and lead computer scientist at Cosmos 8. With years of hands-on experience
                in software engineering, mobile deployment architecture, and cybersecurity, he leads a team dedicated
                to building resilient, production-grade systems for organisations that cannot afford downtime.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Gordon's approach to technology is rooted in rigorous testing, security-first design, and a commitment
                to delivering solutions that work under real-world pressure. His expertise spans reactive front-end
                architectures, network security hardening, and full-stack application development.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                He believes the next decade of African tech will be defined not by who can build fastest, but by who
                can build best — and Cosmos 8 is his answer to that bet.
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
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <p className="text-sm font-mono text-water uppercase tracking-widest mb-2">◢ Our Foundation ◣</p>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground">Six <span className="serif-italic fire-text">core values</span></h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">The principles every engagement, every commit, and every conversation is filtered through.</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <motion.div key={v.title} className="glass-card p-6 thermal-glow" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }} viewport={{ once: true }}>
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-muted mb-4">
                  <v.icon size={22} className="text-water" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2 text-lg">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Orbit + Where We Stand */}
      <section className="py-24 px-6 relative z-10">
        <div className="container mx-auto max-w-6xl grid md:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="flex justify-center">
            <OrbitGraphic className="w-[300px] md:w-[400px]" />
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <p className="text-sm font-mono text-fire uppercase tracking-widest mb-2">◢ Where We Stand ◣</p>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">
              Rooted in <span className="serif-italic water-text">Kampala.</span><br/>Reaching <span className="serif-italic fire-text">everywhere.</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Our headquarters sit in Kampala — a city that has, in less than a generation, transformed itself into
              one of the most dynamic technology hubs on the continent. We are proud to be part of that story.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              From Uganda we serve clients across East Africa, the Middle East, and Europe. Our delivery model
              blends on-site presence where it matters with a remote-first engineering culture that scales.
              Distance is a logistics problem; trust is the only one that's hard.
            </p>
          </motion.div>
        </div>
      </section>

      <SectionDivider />

      {/* Timeline */}
      <section className="py-24 px-6 relative z-10">
        <div className="container mx-auto max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <p className="text-sm font-mono text-fire uppercase tracking-widest mb-2">◢ Our Journey ◣</p>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground">A <span className="serif-italic nexus-text">timeline</span> of milestones</h2>
          </motion.div>
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-water via-nexus to-fire" />
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                className={`relative flex items-start gap-6 mb-10 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
                viewport={{ once: true }}
              >
                <div className={`hidden md:block md:w-1/2 ${i % 2 === 0 ? "text-right pr-10" : "text-left pl-10"}`}>
                  <p className="font-mono text-sm text-water mb-1">{item.year}</p>
                  <h3 className="font-display font-semibold text-foreground mb-1 text-lg">{item.title}</h3>
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
