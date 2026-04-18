import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import SectionDivider from "@/components/SectionDivider";
import OrbitGraphic from "@/components/OrbitGraphic";
import { motion } from "framer-motion";
import { useState } from "react";
import { Phone, Mail, MapPin, Copy, Check, MessageCircle, Clock, Calendar } from "lucide-react";
import heroImg from "@/assets/hero-contact.jpg";

const PHONE = "+256765181438";

const faqs = [
  { q: "How quickly can you start?", a: "Discovery calls within 48 hours. Most engagements kick off within 2 weeks." },
  { q: "Do you work with international clients?", a: "Yes. We currently serve clients across East Africa, the Middle East, and Europe." },
  { q: "What's your minimum engagement?", a: "Project work starts at 4 weeks. Retainers start at 20 hours/month of senior engineering time." },
  { q: "Can you sign an NDA?", a: "Always. We'll sign yours, or send ours — whichever moves faster." },
];

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const copyPhone = async () => {
    await navigator.clipboard.writeText(PHONE);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <PageLayout>
      <PageHero
        bgImage={heroImg}
        eyebrow="Contact · Open A Channel"
        title={<>Let's build <span className="nexus-text">together</span></>}
        subtitle="Ready to bring your vision to life? Whether you arrive with a detailed specification or just a half-formed idea on a napkin, we're here to help you turn it into something real, secure, and shippable."
        alt="Communication tower beaming signals into space"
      />

      {/* Contact Cards */}
      <section className="py-20 px-6 relative z-10">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <motion.div className="glass-card p-8 text-center thermal-glow" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-muted mb-4">
                <Phone size={24} className="text-water" />
              </div>
              <h3 className="font-display font-semibold text-foreground mb-2 text-lg">Call Us</h3>
              <a href="tel:+256765181438" className="text-muted-foreground hover:text-foreground transition-colors block mb-3">
                +256 765 181 438
              </a>
              <button onClick={copyPhone} className="inline-flex items-center gap-2 text-xs font-mono text-muted-foreground hover:text-foreground transition-colors">
                {copied ? <Check size={12} className="text-fire" /> : <Copy size={12} />}
                {copied ? "Copied!" : "Copy number"}
              </button>
            </motion.div>

            <motion.a href="https://wa.me/256765181438" target="_blank" rel="noopener noreferrer" className="glass-card p-8 text-center thermal-glow" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} viewport={{ once: true }}>
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-muted mb-4">
                <MessageCircle size={24} className="text-[#25D366]" />
              </div>
              <h3 className="font-display font-semibold text-foreground mb-2 text-lg">WhatsApp</h3>
              <p className="text-muted-foreground">Chat with us directly</p>
              <p className="text-xs text-muted-foreground/60 mt-2">Tap to open WhatsApp</p>
            </motion.a>

            <motion.div className="glass-card p-8 text-center thermal-glow" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} viewport={{ once: true }}>
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-muted mb-4">
                <Mail size={24} className="text-fire" />
              </div>
              <h3 className="font-display font-semibold text-foreground mb-2 text-lg">Email</h3>
              <a href="mailto:info@cosmos8.tech" className="text-muted-foreground hover:text-foreground transition-colors">
                info@cosmos8.tech
              </a>
              <p className="text-xs text-muted-foreground/60 mt-2">Replies within 24 hours</p>
            </motion.div>
          </div>

          {/* Info + Orbit */}
          <motion.div className="glass-card p-10 md:p-14 grid md:grid-cols-2 gap-10 items-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div>
              <p className="text-sm font-mono text-water uppercase tracking-widest mb-2">◢ How We Engage ◣</p>
              <h2 className="text-2xl md:text-4xl font-display font-bold text-foreground mb-6">
                The first <span className="serif-italic fire-text">conversation</span> is on us
              </h2>
              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <Clock size={18} className="text-water mt-1 shrink-0" />
                  <div>
                    <p className="font-medium text-foreground text-sm">Response Time</p>
                    <p className="text-sm text-muted-foreground">We respond to all inquiries within 24 hours during business days.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Calendar size={18} className="text-fire mt-1 shrink-0" />
                  <div>
                    <p className="font-medium text-foreground text-sm">Initial Consultation</p>
                    <p className="text-sm text-muted-foreground">Every engagement starts with a free consultation to understand your needs and goals — no commitment required.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="text-nexus mt-1 shrink-0" />
                  <div>
                    <p className="font-medium text-foreground text-sm">Location</p>
                    <p className="text-sm text-muted-foreground">Based in Kampala, Uganda. We serve clients across East Africa and work remotely with international clients.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <OrbitGraphic className="w-[280px] md:w-[340px]" />
            </div>
          </motion.div>
        </div>
      </section>

      <SectionDivider />

      {/* FAQ */}
      <section className="py-24 px-6 relative z-10">
        <div className="container mx-auto max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <p className="text-sm font-mono text-fire uppercase tracking-widest mb-2">◢ Quick Questions ◣</p>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground">Frequently <span className="serif-italic water-text">asked</span></h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6">
            {faqs.map((f, i) => (
              <motion.div key={f.q} className="glass-card p-6" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }} viewport={{ once: true }}>
                <h3 className="font-display font-semibold text-foreground mb-2">{f.q}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Contact;
