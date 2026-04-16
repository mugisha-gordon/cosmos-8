import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Copy, Check, Phone, Mail } from "lucide-react";

const PHONE = "+256765181438";

const ContactFooter = () => {
  const [copied, setCopied] = useState(false);

  const copyPhone = async () => {
    await navigator.clipboard.writeText(PHONE);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer id="contact" className="py-24 px-6 relative z-10 border-t border-border/50">
      <div className="container mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-mono text-fire uppercase tracking-widest mb-2">
            Initiate Contact
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Let's Build Something
          </h2>
          <p className="text-muted-foreground mb-10 max-w-lg mx-auto">
            Ready to bring your vision to life? Reach out to Cosmos 8 and let's engineer 
            the future together.
          </p>

          <div className="glass-card inline-flex items-center gap-4 px-6 py-4 mb-6">
            <Phone size={18} className="text-water" />
            <span className="font-mono text-foreground tracking-wide">{PHONE}</span>
            <button
              onClick={copyPhone}
              className="relative ml-2 p-2 rounded-md hover:bg-muted transition-colors"
              aria-label="Copy phone number"
            >
              <AnimatePresence mode="wait">
                {copied ? (
                  <motion.div
                    key="check"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                  >
                    <Check size={16} className="text-fire" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="copy"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                  >
                    <Copy size={16} className="text-muted-foreground" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>

          {/* Toast notification */}
          <AnimatePresence>
            {copied && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="block mt-4"
              >
                <span className="inline-block px-4 py-2 rounded-full text-sm font-mono bg-muted nexus-text">
                  ✓ Copied to clipboard
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        <div className="mt-16 pt-8 border-t border-border/30 text-xs text-muted-foreground font-mono">
          © {new Date().getFullYear()} Cosmos 8 — Tech. Done Right.
        </div>
      </div>
    </footer>
  );
};

export default ContactFooter;
