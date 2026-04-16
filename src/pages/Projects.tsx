import PageLayout from "@/components/PageLayout";
import SectionDivider from "@/components/SectionDivider";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Smartphone, Globe, Shield, Wifi, Database, Layers } from "lucide-react";

const categories = ["All", "Mobile", "Web", "Security", "Network"];

const projects = [
  {
    title: "Semkat",
    description: "A full-featured e-commerce and social platform built for real-world deployment across East Africa. Features include real-time messaging, payment processing, and dynamic content delivery.",
    details: "Built with React, Node.js, and PostgreSQL. Handles thousands of concurrent users with a microservices architecture.",
    tags: ["Mobile", "Web"],
    icon: Globe,
    status: "Live",
  },
  {
    title: "Mobile Deployment Pipeline",
    description: "End-to-end mobile CI/CD architecture enabling rapid, reliable releases across Android and iOS platforms. Automated testing, build distribution, and crash reporting.",
    details: "Reduced deployment time from days to hours. Integrated with GitHub Actions and Firebase App Distribution.",
    tags: ["Mobile"],
    icon: Smartphone,
    status: "Active",
  },
  {
    title: "Network Sentinel",
    description: "Intrusion detection and network monitoring system for enterprise-grade security infrastructure. Real-time alerting, traffic analysis, and threat intelligence integration.",
    details: "Monitors network traffic patterns using ML-based anomaly detection. Deployed across multiple enterprise clients.",
    tags: ["Security", "Network"],
    icon: Shield,
    status: "Active",
  },
  {
    title: "Reactive Dashboard Engine",
    description: "High-performance React dashboard framework with real-time data streams and modular widget architecture. Customizable layouts with drag-and-drop functionality.",
    details: "Powers internal analytics dashboards for multiple clients. WebSocket-based real-time updates with sub-second latency.",
    tags: ["Web"],
    icon: Layers,
    status: "Live",
  },
  {
    title: "Campus Network Redesign",
    description: "Complete network infrastructure overhaul for a 500+ user campus environment. Designed and deployed enterprise Wi-Fi, segmented VLANs, and centralized management.",
    details: "Achieved 99.9% uptime in the first year. Reduced network incidents by 80% compared to the previous infrastructure.",
    tags: ["Network"],
    icon: Wifi,
    status: "Completed",
  },
  {
    title: "SecureVault API",
    description: "RESTful API service for secure document storage and retrieval with end-to-end encryption, role-based access control, and audit logging.",
    details: "AES-256 encryption at rest, TLS 1.3 in transit. Comprehensive audit trail for compliance requirements.",
    tags: ["Security", "Web"],
    icon: Database,
    status: "Live",
  },
];

const Projects = () => {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? projects : projects.filter((p) => p.tags.includes(filter));

  return (
    <PageLayout>
      {/* Hero */}
      <section className="py-32 px-6 relative z-10">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-sm font-mono text-fire uppercase tracking-widest mb-2">Our Work</p>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6">
              The <span className="nexus-text">Reactor</span> Gallery
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              A showcase of the systems we've built, deployed, and continue to maintain. Each project 
              represents our commitment to engineering excellence and real-world impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="py-12 px-6 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="flex justify-center gap-3 mb-10 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === cat
                    ? "bg-primary text-primary-foreground"
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

      {/* Approach */}
      <section className="py-24 px-6 relative z-10">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            className="glass-card p-10 md:p-14 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-6">
              Every Project Follows Our Standard
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-6">
              No matter the size or scope, every Cosmos 8 project goes through our full engineering lifecycle: 
              architecture review, iterative development, comprehensive testing (including our 90-day standard), 
              and monitored deployment. We don't cut corners.
            </p>
            <p className="text-sm font-mono text-water">
              "If it's not tested, it's not ready." — Mugisha Gordon
            </p>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Projects;
