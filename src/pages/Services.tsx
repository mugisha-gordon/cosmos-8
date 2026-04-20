import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import SectionDivider from "@/components/SectionDivider";
import MarqueeBand from "@/components/MarqueeBand";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Code2, Smartphone, Globe, Shield, Wifi, Cloud, ArrowRight, CheckCircle2 } from "lucide-react";
import heroImg from "@/assets/hero-services.jpg";

const services = [
  {
    icon: Code2,
    title: "Custom Software Development",
    desc: "We design and build bespoke software from the ground up. Internal tools, customer-facing platforms, complex distributed systems — our team architects software that scales with your business and earns its keep on day one.",
    features: ["Requirements analysis & system design", "Agile development methodology", "Full-stack implementation", "Post-launch support & maintenance"],
  },
  {
    icon: Smartphone,
    title: "Mobile Application Development",
    desc: "Native and cross-platform mobile applications built with performance at their core. We handle everything from UX research and design to app store deployment, ongoing iteration, and crash analytics.",
    features: ["iOS & Android development", "Cross-platform (React Native)", "CI/CD mobile pipelines", "App store optimization"],
  },
  {
    icon: Globe,
    title: "Web Application Development",
    desc: "Modern, reactive web applications built on industry-standard frameworks. From single-page applications to complex web platforms with real-time capabilities, designed to perform on the African internet — not just a fibre lab.",
    features: ["React & TypeScript expertise", "Progressive Web Apps (PWA)", "API design & integration", "Performance optimization"],
  },
  {
    icon: Shield,
    title: "Cybersecurity Services",
    desc: "Protect your digital assets with our comprehensive security services. We identify vulnerabilities before attackers do and implement defense-in-depth strategies that hold up against real adversaries.",
    features: ["Penetration testing", "Security audits & compliance", "Incident response planning", "Security awareness training"],
  },
  {
    icon: Wifi,
    title: "Network Infrastructure",
    desc: "Enterprise-grade network design, deployment, and management. We build networks that are fast, reliable, and secure — from small offices to large multi-site campus deployments with thousands of users.",
    features: ["Network architecture design", "Wireless & wired deployment", "Firewall & VPN configuration", "Network monitoring & management"],
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    desc: "Modernize your infrastructure with cloud-native solutions. We help businesses migrate, optimize, and manage their cloud environments for maximum efficiency and predictable cost.",
    features: ["Cloud migration strategy", "Infrastructure as Code", "CI/CD pipeline setup", "Container orchestration"],
  },
];

const process = [
  { step: "01", title: "Discovery", desc: "We start by understanding your business, your users, and your goals. This phase involves stakeholder interviews, requirement gathering, and competitive analysis." },
  { step: "02", title: "Architecture", desc: "Our engineers design the technical blueprint. System architecture, data models, API contracts, and infrastructure are all planned before a single line of code is written." },
  { step: "03", title: "Development", desc: "Using agile methodology, we build in iterative sprints with regular check-ins. You see progress every week and can provide feedback in real time." },
  { step: "04", title: "Testing", desc: "Our rigorous 90-day testing standard includes unit tests, integration tests, load testing, security testing, and user acceptance testing." },
  { step: "05", title: "Deployment", desc: "We handle the full deployment pipeline — from staging environments to production rollout with zero-downtime strategies and rollback safety." },
  { step: "06", title: "Support", desc: "Post-launch, we provide ongoing support, monitoring, and iterative improvements to keep your systems running at peak performance." },
];

const stack = ["REACT", "TYPESCRIPT", "NODE.JS", "POSTGRESQL", "DOCKER", "KUBERNETES", "AWS", "CLOUDFLARE", "TAILWIND", "REACT NATIVE"];

const Services = () => {
  return (
    <PageLayout>
      <PageHero
        bgImage={heroImg}
        eyebrow="Services · The Workshop"
        title={<>Services built for <span className="nexus-text">impact</span></>}
        subtitle="From the first sketch on the whiteboard to the late-night production deploy, Cosmos 8 delivers end-to-end technology services. We combine deep technical expertise with a client-first approach to solve complex problems and build systems that endure."
        alt="Glowing water and fire gears interlocking"
      />

      <MarqueeBand items={stack} />

      {/* Services Grid */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <p className="text-xs sm:text-sm font-mono text-water uppercase tracking-widest mb-2 text-etched">◢ The Catalogue ◣</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-3d">Six <span className="serif-italic fire-text">disciplines</span>, one standard.</h2>
          </motion.div>
          <div className="space-y-8">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                className="glass-card p-8 md:p-10 thermal-glow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
              >
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="md:col-span-2">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-muted">
                        <service.icon size={22} className="text-water" />
                      </div>
                      <h3 className="text-xl md:text-2xl font-display font-semibold text-foreground">{service.title}</h3>
                      <span className="ml-auto font-mono text-xs text-muted-foreground">0{i + 1} / 06</span>
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

      {/* Networking Deep Dive */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <p className="text-xs sm:text-sm font-mono text-water uppercase tracking-widest mb-2 text-etched">◢ Networking Deep Dive ◣</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-3d">
              Networks that <span className="serif-italic water-text">never blink</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto leading-relaxed">
              A network is the silent nervous system of every modern business. When it fails, everything stops — sales, support, security, sanity. Cosmos 8 designs, deploys, and defends networks engineered for the realities of African infrastructure: power dips, ISP churn, fibre cuts, and growth that arrives faster than budgets.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Site Surveys & Heat Mapping", desc: "Professional Wi-Fi site surveys with predictive and post-installation heat maps. We measure signal, interference, and capacity — never guess." },
              { title: "Structured Cabling", desc: "Cat6/6A and OS2 fibre installations to TIA-568 standards. Labelled, tested, certified, and documented so the next engineer thanks you." },
              { title: "Enterprise Wi-Fi 6/6E", desc: "Mesh and controller-based deployments using MikroTik, Ubiquiti UniFi, Aruba Instant On, and Cisco Meraki — chosen by what your environment actually needs." },
              { title: "Routing, Switching & VLANs", desc: "Layer-2/3 segmentation, VLAN design, OSPF/BGP where it earns its keep. Guest, IoT, voice, and admin traffic kept in their own lanes." },
              { title: "Firewalls & VPN", desc: "Next-gen firewall configuration (FortiGate, pfSense, MikroTik), site-to-site IPsec tunnels, and WireGuard remote access for staff working from anywhere." },
              { title: "ISP Failover & Load Balancing", desc: "Dual-WAN, SD-WAN-style failover, and intelligent load balancing so a single ISP outage no longer empties your office in five minutes." },
              { title: "Network Monitoring (NOC)", desc: "Zabbix, LibreNMS, PRTG, and Grafana dashboards — real-time visibility into every link, switch, AP, and tunnel with intelligent paging when something matters." },
              { title: "VoIP & Unified Comms", desc: "Asterisk, FreePBX, and 3CX deployments with QoS-tuned networks so calls stay crisp even when the office is streaming a webinar." },
              { title: "Network Hardening & Audits", desc: "Configuration audits, port-security lockdowns, rogue-device detection, and policy reviews — closing the doors most networks leave open by default." },
            ].map((n, i) => (
              <motion.div key={n.title} className="glass-card p-6 thermal-glow" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} viewport={{ once: true }}>
                <span className="font-mono text-[10px] text-water tracking-widest">N0{i + 1}</span>
                <h3 className="font-display font-semibold text-foreground mt-2 mb-2">{n.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{n.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Cybersecurity Deep Dive */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <p className="text-xs sm:text-sm font-mono text-fire uppercase tracking-widest mb-2 text-etched">◢ Cybersecurity Deep Dive ◣</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-3d">
              Defence in <span className="serif-italic fire-text">depth</span>, not theatre
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto leading-relaxed">
              Most breaches in our region don't come from elite nation-state hackers — they come from a forgotten admin password, an unpatched router, a phishing email opened on a Monday morning. We build security programmes that answer real threats with real controls, not certificates on a wall.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Vulnerability Assessments", desc: "Authenticated and unauthenticated scans across your external surface, internal network, and cloud workloads using Nessus, OpenVAS, and Nuclei — followed by triage that separates noise from genuine risk." },
              { title: "Penetration Testing", desc: "Black-box, grey-box, and white-box engagements covering web apps (OWASP Top 10), APIs, mobile apps, internal networks, and Wi-Fi. Every finding ships with proof, business impact, and a clear fix." },
              { title: "Web & API Security", desc: "Hardening for the endpoints attackers love most: authentication, session handling, IDOR, SSRF, deserialisation, rate-limiting, and JWT misuse — backed by automated regression tests." },
              { title: "Endpoint Protection (EDR)", desc: "Deployment and tuning of modern EDR (CrowdStrike, SentinelOne, Microsoft Defender for Business) with policy baselines, exclusions that don't open holes, and response runbooks." },
              { title: "Email Security & Anti-Phishing", desc: "SPF, DKIM, and DMARC enforcement to stop spoofing of your own domain, plus phishing simulation campaigns and staff training that actually changes behaviour." },
              { title: "Identity & Access Management", desc: "MFA rollouts, SSO integration (Google Workspace, Microsoft Entra), conditional access policies, privileged-access workstations, and quarterly access reviews." },
              { title: "Cloud Security Posture", desc: "AWS, Azure, GCP, and Cloudflare audits using ScoutSuite and Prowler — IAM least-privilege, public-bucket detection, key rotation, and CIS benchmark alignment." },
              { title: "Incident Response & Forensics", desc: "On-call IR retainers, breach containment playbooks, log forensics, and post-incident reports that satisfy boards, insurers, and regulators." },
              { title: "Security Awareness Training", desc: "Engaging quarterly training in English and Luganda — phishing, password hygiene, social engineering, mobile safety, and the human side of security." },
              { title: "Compliance & Policy", desc: "Policy authoring and gap analysis for ISO 27001, PCI-DSS, GDPR, and Uganda's Data Protection and Privacy Act — practical documents your team will actually follow." },
            ].map((c, i) => (
              <motion.div key={c.title} className="glass-card p-6 thermal-glow" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} viewport={{ once: true }}>
                <div className="flex items-start gap-4">
                  <span className="font-mono text-xs text-fire tracking-widest shrink-0 mt-1">C{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className="font-display font-semibold text-foreground mb-2">{c.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-10 glass-card p-8 md:p-10 text-center">
            <p className="font-mono text-xs text-water uppercase tracking-widest mb-3">◢ Our Stance ◣</p>
            <p className="text-foreground font-display text-xl md:text-2xl leading-snug max-w-3xl mx-auto">
              "Security is not a product you buy — it is a practice you maintain. We help you maintain it, week after week, until it's just how the company breathes."
            </p>
          </motion.div>
        </div>
      </section>

      <SectionDivider />

      {/* Process */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 relative z-10">
        <div className="container mx-auto max-w-5xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <p className="text-xs sm:text-sm font-mono text-water uppercase tracking-widest mb-2 text-etched">◢ How We Work ◣</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-3d">A six-step <span className="serif-italic water-text">process</span></h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">A structured, proven approach that ensures quality and transparency at every stage of the engagement.</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {process.map((p, i) => (
              <motion.div
                key={p.step}
                className="glass-card p-6 relative overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                viewport={{ once: true }}
              >
                <p className="text-5xl font-display font-bold nexus-text mb-3 opacity-90">{p.step}</p>
                <h3 className="font-display font-semibold text-foreground mb-2 text-lg">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Engagement Models */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 relative z-10">
        <div className="container mx-auto max-w-5xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <p className="text-xs sm:text-sm font-mono text-fire uppercase tracking-widest mb-2 text-etched">◢ Engagement Models ◣</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-3d">Pick your <span className="serif-italic fire-text">shape</span></h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Project-based", desc: "Fixed scope, fixed timeline, fixed price. Best for well-defined deliverables with clear acceptance criteria.", tag: "BEST FOR MVPs" },
              { title: "Retainer", desc: "A reserved block of senior engineering hours each month for ongoing work, support, and strategic improvements.", tag: "BEST FOR GROWTH" },
              { title: "Embedded Team", desc: "We integrate fully with your in-house team — daily stand-ups, your tools, your sprint cadence — for the duration of the engagement.", tag: "BEST FOR SCALE" },
            ].map((m, i) => (
              <motion.div key={m.title} className="glass-card p-8 thermal-glow" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }}>
                <span className="font-mono text-xs text-water tracking-widest">{m.tag}</span>
                <h3 className="font-display font-semibold text-foreground text-2xl mt-2 mb-3">{m.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* CTA */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 relative z-10">
        <div className="container mx-auto max-w-3xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-3d mb-6">
              Have a project in <span className="serif-italic nexus-text">mind?</span>
            </h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto text-lg">
              Let's discuss your requirements and find the right solution. Initial consultations are always on us.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-3 rounded-lg font-medium text-sm bg-primary text-primary-foreground hover:opacity-90 transition-opacity">
              Get a Free Consultation <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Services;
