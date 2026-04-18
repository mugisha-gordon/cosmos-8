import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import SectionDivider from "@/components/SectionDivider";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ShieldCheck, Clock, Bug, Lock, Eye, Server, AlertTriangle, FileCheck, ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-security.jpg";

const pillars = [
  { icon: Clock, title: "90-Day Testing Standard", description: "Every deployment undergoes a rigorous 90-day testing cycle. Unit, integration, load, and security scans — all before production." },
  { icon: ShieldCheck, title: "Penetration Testing", description: "We simulate real-world attack vectors on your systems. Pentest reports include detailed findings, risk ratings, and concrete remediation guidance." },
  { icon: Bug, title: "Bug Bounty Culture", description: "Internal bug bounty programs and code review processes ensure continuous quality. Every engineer is also a security engineer." },
  { icon: Lock, title: "Zero-Trust Architecture", description: "No implicit trust at any layer. Every request authenticated, authorized, and encrypted. Defense in depth is the default, not an upgrade." },
  { icon: Eye, title: "24/7 Monitoring", description: "Real-time system monitoring with intelligent alerting. We detect anomalies before they become incidents — and incidents before they become breaches." },
  { icon: Server, title: "Infrastructure Hardening", description: "Server configurations, firewall rules, and network segmentation — all optimized to minimize attack surface and blast radius." },
  { icon: AlertTriangle, title: "Incident Response", description: "Documented incident response procedures with clear escalation paths. When something happens, we respond fast and we respond calmly." },
  { icon: FileCheck, title: "Compliance & Auditing", description: "Comprehensive audit logs, access controls, and documentation to meet regulatory and compliance requirements across jurisdictions." },
];

const securityProcess = [
  { title: "Assessment", desc: "We begin with a thorough assessment of your current security posture — infrastructure scans, code audits, process reviews, and human-factor analysis." },
  { title: "Threat Modeling", desc: "We identify potential threat vectors specific to your business, industry, and technology stack. Every system has unique risks; off-the-shelf models miss them." },
  { title: "Implementation", desc: "Based on our findings, we implement security controls, update configurations, and deploy monitoring tools — with documentation your team can actually use." },
  { title: "Verification", desc: "Post-implementation penetration testing verifies that all identified vulnerabilities have been properly addressed and no new issues were introduced." },
  { title: "Ongoing Protection", desc: "Security isn't a one-time event. We provide continuous monitoring, regular re-assessments, threat intelligence updates, and tabletop exercises." },
];

const threats = [
  { name: "Ransomware", stat: "+74%", desc: "Year-over-year increase in ransomware attacks targeting African SMEs in 2024." },
  { name: "Phishing", stat: "1 in 3", desc: "Employees click a phishing link within their first year — without training." },
  { name: "Misconfig", stat: "60%", desc: "Of cloud breaches trace back to a single misconfigured permission or storage bucket." },
];

const Security = () => {
  return (
    <PageLayout>
      <PageHero
        bgImage={heroImg}
        eyebrow="Security Division · The Vault"
        title={<>Built to <span className="nexus-text">withstand</span></>}
        subtitle="In a world of escalating cyber threats, Cosmos 8's security division provides the expertise and the tooling to protect your most valuable digital assets. Security isn't an afterthought here — it's embedded in everything we ship."
        alt="Hexagonal cyber shield against digital rain"
      />

      {/* Threat landscape — surprise data block */}
      <section className="py-20 px-6 relative z-10">
        <div className="container mx-auto max-w-5xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <p className="text-sm font-mono text-fire uppercase tracking-widest mb-2">◢ Threat Landscape ◣</p>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground">Why this <span className="serif-italic fire-text">matters</span></h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {threats.map((t, i) => (
              <motion.div key={t.name} className="glass-card p-8 thermal-glow" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }}>
                <p className="font-mono text-xs text-fire uppercase tracking-widest mb-3">{t.name}</p>
                <p className="text-5xl font-display font-bold nexus-text mb-3">{t.stat}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{t.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Pillars */}
      <section className="py-24 px-6 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <p className="text-sm font-mono text-water uppercase tracking-widest mb-2">◢ Our Approach ◣</p>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground">Eight security <span className="serif-italic water-text">pillars</span></h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar, i) => (
              <motion.div key={pillar.title} className="glass-card p-6 thermal-glow text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.06 }} viewport={{ once: true }}>
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-muted mb-4">
                  <pillar.icon size={22} className="text-fire" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2">{pillar.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{pillar.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Process */}
      <section className="py-24 px-6 relative z-10">
        <div className="container mx-auto max-w-5xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <p className="text-sm font-mono text-fire uppercase tracking-widest mb-2">◢ How It Works ◣</p>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground">Security engagement <span className="serif-italic fire-text">process</span></h2>
          </motion.div>

          <div className="space-y-6">
            {securityProcess.map((step, i) => (
              <motion.div key={step.title} className="glass-card p-6 md:p-8 flex gap-6 items-start" initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <span className="text-4xl md:text-5xl font-display font-bold nexus-text shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display font-semibold text-foreground mb-2 text-lg">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Trust block */}
      <section className="py-24 px-6 relative z-10">
        <div className="container mx-auto max-w-4xl">
          <motion.div className="glass-card p-10 md:p-14 text-center relative overflow-hidden" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="absolute inset-0 grid-overlay opacity-20" />
            <div className="relative">
              <h2 className="text-2xl md:text-4xl font-display font-bold text-foreground mb-4">
                Trust is earned through <span className="serif-italic water-text">transparency</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto">
                We provide detailed reporting on every security engagement. Our clients receive full access to
                test results, vulnerability data, and remediation status. No black boxes. No hidden findings.
                No "trust us, it's fine." Just evidence.
              </p>
              <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity">
                Request a Security Assessment <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Security;
