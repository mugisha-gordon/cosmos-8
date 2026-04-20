import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import SectionDivider from "@/components/SectionDivider";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Smartphone, Globe, Shield, Wifi, Database, Layers } from "lucide-react";
import heroImg from "@/assets/hero-projects.jpg";

const categories = ["All", "Mobile", "Web", "Security", "Network"];

const projects = [
  {
    title: "Semkat",
    description: "A full-featured e-commerce and social platform built for real-world deployment across East Africa. Real-time messaging, payment processing, and dynamic content delivery — all engineered for low-bandwidth conditions.",
    details: "Built with React, Node.js, and PostgreSQL. Microservices architecture handling thousands of concurrent users.",
    tags: ["Mobile", "Web"], icon: Globe, status: "Live", year: "2020",
  },
  {
    title: "Mobile Deployment Pipeline",
    description: "End-to-end mobile CI/CD architecture enabling rapid, reliable releases across Android and iOS. Automated testing, build distribution, crash reporting, and feature flag management.",
    details: "Reduced deployment time from days to hours. Integrated with GitHub Actions and Firebase App Distribution.",
    tags: ["Mobile"], icon: Smartphone, status: "Active", year: "2021",
  },
  {
    title: "Network Sentinel",
    description: "Intrusion detection and network monitoring system for enterprise security infrastructure. Real-time alerting, traffic analysis, and threat intelligence integration with custom playbooks.",
    details: "Monitors network traffic patterns using ML-based anomaly detection. Deployed across multiple enterprise clients.",
    tags: ["Security", "Network"], icon: Shield, status: "Active", year: "2022",
  },
  {
    title: "Reactive Dashboard Engine",
    description: "High-performance React dashboard framework with real-time data streams and modular widget architecture. Customizable layouts with drag-and-drop, role-based widget visibility, and saved views.",
    details: "Powers internal analytics dashboards for multiple clients. WebSocket-based real-time updates with sub-second latency.",
    tags: ["Web"], icon: Layers, status: "Live", year: "2023",
  },
  {
    title: "Campus Network Redesign",
    description: "Complete network infrastructure overhaul for a 500+ user campus environment. Designed and deployed enterprise Wi-Fi, segmented VLANs, and centralized management with role-based access.",
    details: "Achieved 99.9% uptime in the first year. Reduced network incidents by 80% compared to the previous infrastructure.",
    tags: ["Network"], icon: Wifi, status: "Completed", year: "2022",
  },
  {
    title: "SecureVault API",
    description: "RESTful API service for secure document storage and retrieval with end-to-end encryption, role-based access control, and tamper-evident audit logging.",
    details: "AES-256 encryption at rest, TLS 1.3 in transit. Comprehensive audit trail for compliance requirements.",
    tags: ["Security", "Web"], icon: Database, status: "Live", year: "2024",
  },
];

const Projects = () => {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? projects : projects.filter((p) => p.tags.includes(filter));

  return (
    <PageLayout>
      <PageHero
        bgImage={heroImg}
        eyebrow="Selected Work · The Reactor"
        title={<>The <span className="nexus-text">Reactor</span> gallery</>}
        subtitle="A curated showcase of the systems we've built, deployed, and continue to maintain. Each project here represents a real production deployment — battle-tested, monitored, and still humming along."
        alt="Plasma reactor with floating data crystals"
      />

      {/* Filter + Grid */}
      <section className="py-12 sm:py-14 md:py-16 px-4 sm:px-6 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="flex justify-center gap-3 mb-10 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === cat
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-muted text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((project) => (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="glass-card thermal-glow p-8 group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <project.icon size={24} className="text-water" />
                      <span className={`text-xs font-mono px-2 py-0.5 rounded-full ${
                        project.status === "Live" ? "bg-fire/20 text-fire" :
                        project.status === "Active" ? "bg-water/20 text-water" :
                        "bg-muted text-muted-foreground"
                      }`}>
                        {project.status}
                      </span>
                      <span className="text-xs font-mono text-muted-foreground">{project.year}</span>
                    </div>
                    <ExternalLink size={16} className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <h3 className="text-xl font-display font-semibold text-foreground mb-2">{project.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-3">{project.description}</p>
                  <p className="text-xs text-muted-foreground/70 leading-relaxed mb-4 italic">{project.details}</p>
                  <div className="flex gap-2 flex-wrap">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs font-mono px-3 py-1 rounded-full bg-muted text-muted-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Reactor Specs — surprise stat block */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 relative z-10">
        <div className="container mx-auto max-w-5xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <p className="text-xs sm:text-sm font-mono text-fire uppercase tracking-widest mb-2 text-etched">◢ Reactor Specs ◣</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-3d">By the <span className="serif-italic water-text">numbers</span></h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { v: "99.9%", l: "Uptime SLA" },
              { v: "<200ms", l: "P95 Response" },
              { v: "0", l: "Major Incidents" },
              { v: "6+", l: "Production Deploys" },
            ].map((s, i) => (
              <motion.div key={s.l} className="glass-card p-6 text-center" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.08 }} viewport={{ once: true }}>
                <p className="text-3xl md:text-4xl font-display font-bold nexus-text">{s.v}</p>
                <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mt-2">{s.l}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Approach */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 relative z-10">
        <div className="container mx-auto max-w-4xl">
          <motion.div className="glass-card p-10 md:p-14 text-center relative overflow-hidden" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-water/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-fire/10 rounded-full blur-3xl" />
            <div className="relative">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-display font-bold text-3d mb-6">
                Every project follows our <span className="serif-italic fire-text">standard</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-6">
                No matter the size or scope, every Cosmos 8 project goes through our full engineering lifecycle:
                architecture review, iterative development, comprehensive testing (including our 90-day standard),
                and monitored deployment. We don't cut corners, and we won't pretend we did when we didn't.
              </p>
              <p className="serif-italic text-xl text-water">
                "If it's not tested, it's not ready." — Mugisha Gordon
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Projects;
