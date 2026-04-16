import PageLayout from "@/components/PageLayout";
import SectionDivider from "@/components/SectionDivider";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ShieldCheck, Clock, Bug, Lock, Eye, Server, 
  AlertTriangle, FileCheck, ArrowRight, CheckCircle2
} from "lucide-react";
import logo from "@/assets/cosmos8-logo.png";

const pillars = [
  { icon: Clock, title: "90-Day Testing Standard", description: "Every deployment undergoes a rigorous 90-day testing cycle. Unit tests, integration tests, load tests, and security scans—all before production." },
  { icon: ShieldCheck, title: "Penetration Testing", description: "We simulate real-world attack vectors on your systems. Our pentest reports include detailed findings, risk ratings, and remediation guidance." },
  { icon: Bug, title: "Bug Bounty Culture", description: "Internal bug bounty programs and code review processes ensure continuous quality. Every engineer is a security engineer." },
  { icon: Lock, title: "Zero-Trust Architecture", description: "No implicit trust at any layer. Every request is authenticated, authorized, and encrypted. Defense in depth is our default." },
  { icon: Eye, title: "24/7 Monitoring", description: "Real-time system monitoring with intelligent alerting. We detect anomalies before they become incidents." },
  { icon: Server, title: "Infrastructure Hardening", description: "Server configurations, firewall rules, and network segmentation—all optimized to minimize attack surface." },
  { icon: AlertTriangle, title: "Incident Response", description: "Documented incident response procedures with clear escalation paths. When something happens, we respond fast." },
  { icon: FileCheck, title: "Compliance & Auditing", description: "Comprehensive audit logs, access controls, and documentation to meet regulatory and compliance requirements." },
];

const securityProcess = [
  { title: "Assessment", desc: "We begin with a thorough assessment of your current security posture. This includes infrastructure scans, code audits, and process reviews." },
  { title: "Threat Modeling", desc: "We identify potential threat vectors specific to your business, industry, and technology stack. Every system has unique risks." },
  { title: "Implementation", desc: "Based on our findings, we implement security controls, update configurations, and deploy monitoring tools." },
  { title: "Verification", desc: "Post-implementation penetration testing verifies that all identified vulnerabilities have been properly addressed." },
  { title: "Ongoing Protection", desc: "Security isn't a one-time event. We provide continuous monitoring, regular re-assessments, and security updates." },
];

const Security = () => {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="py-32 px-6 relative z-10">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-sm font-mono text-fire uppercase tracking-widest mb-2">Security Division</p>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6">
              Built to <span className="nexus-text">Withstand</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              In a world of increasing cyber threats, Cosmos 8's security division provides 
              the expertise and tools to protect your most valuable digital assets. Security 
              isn't an afterthought—it's embedded in everything we build.
            </p>
          </motion.div>
        </div>
      </section>

      <SectionDivider />

      {/* Pillars */}
      <section className="py-24 px-6 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p className="text-sm font-mono text-water uppercase tracking-widest mb-2">Our Approach</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">Security Pillars</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                className="glass-card p-6 text-center thermal-glow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06, duration: 0.5 }}
                viewport={{ once: true }}
              >
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

      {/* Security Process */}
      <section className="py-24 px-6 relative z-10">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p className="text-sm font-mono text-fire uppercase tracking-widest mb-2">How It Works</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">Security Engagement Process</h2>
          </motion.div>

          <div className="space-y-6">
            {securityProcess.map((step, i) => (
              <motion.div
                key={step.title}
                className="glass-card p-6 md:p-8 flex gap-6 items-start"
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <span className="text-3xl font-display font-bold nexus-text shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Trust Block */}
      <section className="py-24 px-6 relative z-10">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            className="glass-card p-10 md:p-14 flex flex-col md:flex-row items-center gap-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <img src={logo} alt="Cosmos 8" className="w-32 md:w-40 shrink-0" />
            <div>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
                Trust Is Earned Through Transparency
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We provide detailed reporting on every security engagement. Our clients receive full access to 
                test results, vulnerability data, and remediation status. No black boxes, no hidden findings.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
              >
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
