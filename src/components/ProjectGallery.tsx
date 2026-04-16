import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Smartphone, Globe, Shield } from "lucide-react";

const categories = ["All", "Mobile", "Web", "Security"];

const projects = [
  {
    title: "Semkat",
    description: "A full-featured platform built for real-world deployment. Engineered with performance and scalability at its core.",
    tags: ["Mobile", "Web"],
    icon: Globe,
  },
  {
    title: "Mobile Deployment Pipeline",
    description: "End-to-end mobile CI/CD architecture enabling rapid, reliable releases across Android and iOS platforms.",
    tags: ["Mobile"],
    icon: Smartphone,
  },
  {
    title: "Network Sentinel",
    description: "Intrusion detection and network monitoring system for enterprise-grade security infrastructure.",
    tags: ["Security"],
    icon: Shield,
  },
  {
    title: "Reactive Dashboard Engine",
    description: "High-performance React dashboard framework with real-time data streams and modular widget architecture.",
    tags: ["Web"],
    icon: Globe,
  },
];

const ProjectGallery = () => {
  const [filter, setFilter] = useState("All");

  const filtered = filter === "All"
    ? projects
    : projects.filter((p) => p.tags.includes(filter));

  return (
    <section id="projects" className="py-24 px-6 relative z-10">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-sm font-mono text-fire uppercase tracking-widest mb-2">
            The Reactor
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            Project Gallery
          </h2>
        </motion.div>

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
                className="glass-card thermal-glow p-8 group cursor-pointer"
              >
                <div className="flex items-start justify-between mb-4">
                  <project.icon size={28} className="text-water" />
                  <ExternalLink size={16} className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="text-xl font-display font-semibold text-foreground mb-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono px-3 py-1 rounded-full bg-muted text-muted-foreground"
                    >
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
  );
};

export default ProjectGallery;
