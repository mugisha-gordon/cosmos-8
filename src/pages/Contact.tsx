import PageLayout from "@/components/PageLayout";
import SectionDivider from "@/components/SectionDivider";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Phone, Mail, MapPin, Copy, Check, MessageCircle, Clock } from "lucide-react";
import logo from "@/assets/cosmos8-logo.png";

const PHONE = "+256765181438";

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const copyPhone = async () => {
    await navigator.clipboard.writeText(PHONE);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <PageLayout>
      {/* Hero */}
      <section className="py-32 px-6 relative z-10">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-sm font-mono text-fire uppercase tracking-widest mb-2">Get In Touch</p>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6">
              Let's Build <span className="nexus-text">Together</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              Ready to bring your vision to life? Whether you have a detailed specification or 
              just an idea, we're here to help you turn it into reality.
            </p>
          </motion.div>
        </div>
      </section>

      <SectionDivider />

      {/* Contact Cards */}
      <section className="py-24 px-6 relative z-10">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <motion.div
              className="glass-card p-8 text-center thermal-glow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-muted mb-4">
                <Phone size={24} className="text-water" />
              </div>
              <h3 className="font-display font-semibold text-foreground mb-2">Call Us</h3>
              <a href="tel:+256765181438" className="text-muted-foreground hover:text-foreground transition-colors">
                +256 765 181 438
              </a>
              <div className="mt-3">
                <button
                  onClick={copyPhone}
                  className="inline-flex items-center gap-2 text-xs font-mono text-muted-foreground hover:text-foreground transition-colors"
                >
                  {copied ? <Check size={12} className="text-fire" /> : <Copy size={12} />}
                  {copied ? "Copied!" : "Copy number"}
                </button>
              </div>
            </motion.div>

            <motion.a
              href="https://wa.me/256765181438"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-8 text-center thermal-glow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-muted mb-4">
                <MessageCircle size={24} className="text-[#25D366]" />
              </div>
              <h3 className="font-display font-semibold text-foreground mb-2">WhatsApp</h3>
              <p className="text-muted-foreground">Chat with us directly</p>
              <p className="text-xs text-muted-foreground/60 mt-2">Tap to open WhatsApp</p>
            </motion.a>

            <motion.div
              className="glass-card p-8 text-center thermal-glow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-muted mb-4">
                <Mail size={24} className="text-fire" />
              </div>
              <h3 className="font-display font-semibold text-foreground mb-2">Email</h3>
              <a href="mailto:info@cosmos8.tech" className="text-muted-foreground hover:text-foreground transition-colors">
                info@cosmos8.tech
              </a>
            </motion.div>
          </div>

          {/* Info Section */}
          <motion.div
            className="glass-card p-10 md:p-14 grid md:grid-cols-2 gap-10 items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-6">
                How We Engage
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
                  <MessageCircle size={18} className="text-fire mt-1 shrink-0" />
                  <div>
                    <p className="font-medium text-foreground text-sm">Initial Consultation</p>
                    <p className="text-sm text-muted-foreground">Every engagement starts with a free consultation to understand your needs and goals.</p>
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
              <div className="relative">
                <img src={logo} alt="Cosmos 8" className="w-48 md:w-56 relative z-10" />
                <div className="absolute -inset-6 bg-water/8 blur-[50px] rounded-full" />
                <div className="absolute -inset-6 bg-fire/8 blur-[50px] rounded-full translate-x-6" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Contact;
