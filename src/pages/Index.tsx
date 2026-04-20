import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import SectionDivider from "@/components/SectionDivider";
import MarqueeBand from "@/components/MarqueeBand";
import OrbitGraphic from "@/components/OrbitGraphic";
import Constellation from "@/components/Constellation";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Code2, Shield, Wifi, Smartphone, Globe, Zap, Quote, Star } from "lucide-react";
import heroImg from "@/assets/hero-home.jpg";

const highlights = [
  { icon: Code2, title: "Software Development", desc: "Custom-built applications engineered for performance, scalability, and real-world reliability across web and desktop platforms." },
  { icon: Shield, title: "Cybersecurity", desc: "Comprehensive threat analysis, penetration testing, and zero-trust security architecture for organizations that cannot afford to fail." },
  { icon: Wifi, title: "Network Engineering", desc: "Enterprise-grade network design, deployment, and hardening for mission-critical operations from small offices to multi-site campuses." },
  { icon: Smartphone, title: "Mobile Solutions", desc: "Cross-platform mobile applications with native performance, offline-first design, and seamless user experience." },
  { icon: Globe, title: "Web Platforms", desc: "Modern web applications built on reactive architectures with real-time capabilities, designed for the African internet context." },
  { icon: Zap, title: "Cloud Infrastructure", desc: "Scalable cloud solutions with automated deployment pipelines, monitoring, and cost-aware architecture decisions." },
];

const stats = [
  { value: "90+", label: "Day Testing Cycles" },
  { value: "24/7", label: "System Monitoring" },
  { value: "100%", label: "Client Satisfaction" },
  { value: "5+", label: "Years of Expertise" },
];

const industries = ["FINTECH", "EDUCATION", "LOGISTICS", "HEALTHCARE", "RETAIL", "TELECOM", "GOVERNMENT", "NGO"];

const testimonials = [
  {
    quote: "Cosmos 8 didn't just deliver a product — they delivered confidence. Two years in, our platform still hasn't blinked.",
    name: "Operations Director",
    org: "Logistics Group, Kampala",
  },
  {
    quote: "Their security audit found things three previous firms had missed. The report alone was worth ten times what we paid.",
    name: "CTO",
    org: "Regional Fintech",
  },
  {
    quote: "Mugisha and his team treat your network like it's their own. Rare in this industry.",
    name: "IT Lead",
    org: "Education Sector",
  },
];

const Index = () => {
  return (
    <PageLayout>
      <PageHero
        bgImage={heroImg}
        eyebrow="Tech Done Right"
        title={<>COSMOS <span className="nexus-text">8</span></>}
        subtitle="A Kampala-born technology firm engineering software, networks, and security systems for organizations that demand the right thing, built right, the first time."
        alt="Cosmic vortex blending water and fire energies"
      >
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/projects" className="px-8 py-3 rounded-lg font-medium text-sm bg-primary text-primary-foreground hover:opacity-90 transition-opacity">
            View Our Work
          </Link>
          <Link to="/contact" className="px-8 py-3 rounded-lg font-medium text-sm border border-border bg-background/40 backdrop-blur text-foreground hover:bg-muted transition-colors">
            Get In Touch
          </Link>
        </div>
        <p className="mt-8 font-mono text-xs uppercase tracking-[0.4em] text-muted-foreground">
          Tech · Done · Right
        </p>
      </PageHero>

      <MarqueeBand items={industries} />

      {/* Why Cosmos 8 */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 relative z-10">
        <Constellation className="absolute inset-0 w-full h-full opacity-50" />
        <div className="container mx-auto max-w-6xl relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-xs sm:text-sm font-mono text-water uppercase tracking-widest mb-2 text-etched">◢ Why Choose Us ◣</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-3d mb-4">
              Technology That <span className="serif-italic fire-text">Delivers</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              At Cosmos 8, we don't just build software—we engineer solutions that withstand the test of time.
              Every line of code is crafted with precision, every system designed for resilience, every deployment
              hardened against the realities of production.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                className="glass-card p-6 sm:p-8 thermal-glow group relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <span className="absolute top-4 right-4 font-mono text-[10px] text-muted-foreground/60">0{i + 1}</span>
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-muted mb-5 group-hover:bg-primary/20 transition-colors">
                  <item.icon size={22} className="text-water group-hover:text-primary transition-colors" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2 text-lg">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Stats */}
      <section className="py-14 sm:py-16 md:py-20 px-4 sm:px-6 relative z-10">
        <div className="container mx-auto max-w-5xl">
          <div className="glass-card p-6 sm:p-8 md:p-12 lg:p-14 relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-fire/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-water/10 rounded-full blur-3xl" />
            <div className="relative grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  viewport={{ once: true }}
                >
                  <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold nexus-text">{stat.value}</p>
                  <p className="text-sm text-muted-foreground mt-2 font-mono uppercase tracking-widest">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* About preview with orbit graphic */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-xs sm:text-sm font-mono text-fire uppercase tracking-widest mb-2 text-etched">◢ About Cosmos 8 ◣</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-3d mb-6">
                Engineering excellence, <span className="serif-italic water-text">since day one.</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Founded by Mugisha Gordon, Cosmos 8 was born from a singular vision: to deliver technology
                solutions that are not just functional, but exceptional. Based in Kampala, Uganda, we serve
                clients across East Africa and beyond — from startups shipping their first MVP to established
                enterprises modernising decades of legacy infrastructure.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Our team combines deep technical expertise with a relentless commitment to quality.
                Every project undergoes our rigorous 90-day testing standard before deployment, ensuring
                what we deliver is battle-tested, performant, and production-ready from the first hour
                it goes live.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors group"
              >
                Learn more about us
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <OrbitGraphic className="w-[320px] md:w-[420px]" />
            </motion.div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Testimonials */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p className="text-xs sm:text-sm font-mono text-water uppercase tracking-widest mb-2 text-etched">◢ Voices From The Field ◣</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-3d">
              What our <span className="serif-italic fire-text">clients</span> say
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                className="glass-card p-6 sm:p-8 relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <Quote size={28} className="text-fire/40 mb-4" />
                <p className="text-foreground leading-relaxed italic mb-6">"{t.quote}"</p>
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, j) => <Star key={j} size={12} fill="hsl(var(--nexus))" className="text-nexus" />)}
                </div>
                <p className="font-display font-semibold text-foreground text-sm">{t.name}</p>
                <p className="text-xs text-muted-foreground font-mono">{t.org}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* CTA */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 relative z-10">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-display font-bold text-3d mb-6 leading-tight">
              Ready to build something <span className="nexus-text serif-italic">extraordinary?</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed text-lg">
              Whether you need a custom application, a network overhaul, or a complete security audit —
              Cosmos 8 has the expertise to make it happen. Let's talk.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="px-8 py-3 rounded-lg font-medium text-sm bg-primary text-primary-foreground hover:opacity-90 transition-opacity">
                Start a Project
              </Link>
              <Link to="/services" className="px-8 py-3 rounded-lg font-medium text-sm border border-border text-foreground hover:bg-muted transition-colors">
                Explore Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Index;
