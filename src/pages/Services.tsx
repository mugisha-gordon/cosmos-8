import PageLayout from "@/components/PageLayout";
import SectionDivider from "@/components/SectionDivider";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Code2, Smartphone, Globe, Shield, Wifi, Cloud, Database, 
  Monitor, ArrowRight, CheckCircle2, Layers
} from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Custom Software Development",
    desc: "We design and build bespoke software solutions from the ground up. Whether it's an internal tool, a customer-facing platform, or a complex distributed system—our team architects software that scales with your business.",
    features: ["Requirements analysis & system design", "Agile development methodology", "Full-stack implementation", "Post-launch support & maintenance"],
  },
  {
    icon: Smartphone,
    title: "Mobile Application Development",
    desc: "Native and cross-platform mobile applications built with performance at their core. We handle everything from UI/UX design to app store deployment and ongoing iteration.",
    features: ["iOS & Android development", "Cross-platform (React Native)", "CI/CD mobile pipelines", "App store optimization"],
  },
  {
    icon: Globe,
    title: "Web Application Development",
    desc: "Modern, reactive web applications built on industry-standard frameworks. From single-page applications to complex web platforms with real-time capabilities.",
    features: ["React & TypeScript expertise", "Progressive Web Apps (PWA)", "API design & integration", "Performance optimization"],
  },
  {
    icon: Shield,
    title: "Cybersecurity Services",
    desc: "Protect your digital assets with our comprehensive security services. We identify vulnerabilities before attackers do and implement defense-in-depth strategies.",
    features: ["Penetration testing", "Security audits & compliance", "Incident response planning", "Security awareness training"],
  },
  {
    icon: Wifi,
    title: "Network Infrastructure",
    desc: "Enterprise-grade network design, deployment, and management. We build networks that are fast, reliable, and secure—from small offices to large campus deployments.",
    features: ["Network architecture design", "Wireless & wired deployment", "Firewall & VPN configuration", "Network monitoring & management"],
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    desc: "Modernize your infrastructure with cloud-native solutions. We help businesses migrate, optimize, and manage their cloud environments for maximum efficiency.",
    features: ["Cloud migration strategy", "Infrastructure as Code", "CI/CD pipeline setup", "Container orchestration"],
  },
];

const process = [
  { step: "01", title: "Discovery", desc: "We start by understanding your business, your users, and your goals. This phase involves stakeholder interviews, requirement gathering, and competitive analysis." },
  { step: "02", title: "Architecture", desc: "Our engineers design the technical blueprint. System architecture, data models, API contracts, and infrastructure are all planned before a single line of code is written." },
  { step: "03", title: "Development", desc: "Using agile methodology, we build in iterative sprints with regular check-ins. You see progress every week and can provide feedback in real time." },
  { step: "04", title: "Testing", desc: "Our rigorous 90-day testing standard includes unit tests, integration tests, load testing, security testing, and user acceptance testing." },
  { step: "05", title: "Deployment", desc: "We handle the full deployment pipeline—from staging environments to production rollout with zero-downtime strategies." },
  { step: "06", title: "Support", desc: "Post-launch, we provide ongoing support, monitoring, and iterative improvements to keep your systems running at peak performance." },
];

const Services = () => {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="py-32 px-6 relative z-10">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-sm font-mono text-fire uppercase tracking-widest mb-2">What We Do</p>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6">
              Services Built for <span className="nexus-text">Impact</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              From concept to deployment, Cosmos 8 delivers end-to-end technology services. 
              We combine deep technical expertise with a client-first approach to solve complex 
              problems and build systems that last.
            </p>
          </motion.div>
        </div>
      </section>

      <SectionDivider />

      {/* Services Grid */}
      <section className="py-24 px-6 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="space-y-8">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                className="glass-card p-8 md:p-10 thermal-glow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="md:col-span-2">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-muted">
                        <service.icon size={20} className="text-water" />
                      </div>
                      <h3 className="text-xl font-display font-semibold text-foreground">{service.title}</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{service.desc}</p>
                  </div>
                  <div>
                    <p className="text-xs font-mono text-water uppercase tracking-widest mb-3">Includes</p>
                    <ul className="space-y-2">
                      {service.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 size={14} className="text-fire mt-0.5 shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Process */}
      <section className="py-24 px-6 relative z-10">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p className="text-sm font-mono text-water uppercase tracking-widest mb-2">How We Work</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">Our Process</h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              A structured, proven approach that ensures quality and transparency at every stage.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {process.map((p, i) => (
              <motion.div
                key={p.step}
                className="glass-card p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <p className="text-3xl font-display font-bold nexus-text mb-3">{p.step}</p>
                <h3 className="font-display font-semibold text-foreground mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* CTA */}
      <section className="py-24 px-6 relative z-10">
        <div className="container mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
              Have a Project in Mind?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              Let's discuss your requirements and find the right solution. Our team is ready to turn your vision into reality.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-lg font-medium text-sm bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
            >
              Get a Free Consultation <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Services;
