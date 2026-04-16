import { motion } from "framer-motion";
import { ShieldCheck, Clock, Bug, Lock } from "lucide-react";

const pillars = [
  {
    icon: Clock,
    title: "90-Day Testing Standard",
    description: "Every deployment undergoes a rigorous 90-day testing cycle before production release.",
  },
  {
    icon: ShieldCheck,
    title: "Penetration Testing",
    description: "Comprehensive vulnerability assessments and simulated attack vectors on all systems.",
  },
  {
    icon: Bug,
    title: "Bug Bounty Culture",
    description: "Internal bug bounty programs ensure continuous quality and security awareness.",
  },
  {
    icon: Lock,
    title: "Zero-Trust Architecture",
    description: "Every request is verified. No implicit trust granted at any layer of the stack.",
  },
];

const SecuritySection = () => {
  return (
    <section id="security" className="py-24 px-6 relative z-10">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-sm font-mono text-water uppercase tracking-widest mb-2">
            Security Pillar
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            Built to Withstand
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              className="glass-card p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-muted mb-4">
                <pillar.icon size={22} className="text-fire" />
              </div>
              <h3 className="font-display font-semibold text-foreground mb-2">
                {pillar.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;
