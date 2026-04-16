import PageLayout from "@/components/PageLayout";
import HeroSection from "@/components/HeroSection";
import SectionDivider from "@/components/SectionDivider";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Code2, Shield, Wifi, Smartphone, Globe, Zap } from "lucide-react";
import logo from "@/assets/cosmos8-logo.png";

const highlights = [
  { icon: Code2, title: "Software Development", desc: "Custom-built applications engineered for performance, scalability, and real-world reliability." },
  { icon: Shield, title: "Cybersecurity", desc: "Comprehensive threat analysis, penetration testing, and zero-trust security architecture." },
  { icon: Wifi, title: "Network Engineering", desc: "Enterprise-grade network design, deployment, and hardening for mission-critical operations." },
  { icon: Smartphone, title: "Mobile Solutions", desc: "Cross-platform mobile applications with native performance and seamless user experience." },
  { icon: Globe, title: "Web Platforms", desc: "Modern web applications built on reactive architectures with real-time capabilities." },
  { icon: Zap, title: "Cloud Infrastructure", desc: "Scalable cloud solutions with automated deployment pipelines and monitoring." },
];

const stats = [
  { value: "90+", label: "Day Testing Cycles" },
  { value: "24/7", label: "System Monitoring" },
  { value: "100%", label: "Client Satisfaction" },
  { value: "5+", label: "Years of Expertise" },
];

const Index = () => {
  return (
    <PageLayout>
      <HeroSection />

      {/* Why Cosmos 8 */}
      <section className="py-24 px-6 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-sm font-mono text-water uppercase tracking-widest mb-2">Why Choose Us</p>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">
              Technology That Delivers
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              At Cosmos 8, we don't just build software—we engineer solutions that withstand the test of time. 
              Every line of code is crafted with precision, every system designed for resilience.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                className="glass-card p-8 thermal-glow group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                viewport={{ once: true }}
              >
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
      <section className="py-20 px-6 relative z-10">
        <div className="container mx-auto max-w-5xl">
          <div className="glass-card p-10 md:p-14">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  viewport={{ once: true }}
                >
                  <p className="text-4xl md:text-5xl font-display font-bold nexus-text">{stat.value}</p>
                  <p className="text-sm text-muted-foreground mt-2 font-mono">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* About Preview */}
      <section className="py-24 px-6 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-sm font-mono text-fire uppercase tracking-widest mb-2">About Cosmos 8</p>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                Engineering Excellence Since Day One
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Founded by Mugisha Gordon, Cosmos 8 was born from a singular vision: to deliver technology 
                solutions that are not just functional, but exceptional. Based in Kampala, Uganda, we serve 
                clients across East Africa and beyond.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Our team combines deep technical expertise with a relentless commitment to quality. 
                Every project undergoes our rigorous 90-day testing standard before deployment, 
                ensuring that what we deliver is battle-tested and production-ready.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
              >
                Learn more about us <ArrowRight size={16} />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <div className="relative">
                <img src={logo} alt="Cosmos 8" className="w-64 md:w-80 relative z-10" />
                <div className="absolute inset-0 bg-water/10 blur-[60px] rounded-full" />
                <div className="absolute inset-0 bg-fire/10 blur-[60px] rounded-full translate-x-8" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* CTA */}
      <section className="py-24 px-6 relative z-10">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">
              Ready to Build Something <span className="nexus-text">Extraordinary?</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed">
              Whether you need a custom application, network infrastructure, or a complete security overhaul—Cosmos 8 
              has the expertise to make it happen. Let's talk.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="px-8 py-3 rounded-lg font-medium text-sm bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
              >
                Start a Project
              </Link>
              <Link
                to="/services"
                className="px-8 py-3 rounded-lg font-medium text-sm border border-border text-foreground hover:bg-muted transition-colors"
              >
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
