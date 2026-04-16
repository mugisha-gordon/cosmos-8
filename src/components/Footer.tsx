import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/cosmos8-logo.png";

const Footer = () => {
  return (
    <footer className="relative z-10 border-t border-border/50 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <img src={logo} alt="Cosmos 8" className="h-16 w-auto mb-4" />
            <p className="text-sm text-muted-foreground leading-relaxed">
              Cosmos 8 is a technology company specializing in software development, 
              network engineering, and cybersecurity solutions for businesses across East Africa and beyond.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Company</h4>
            <div className="flex flex-col gap-2">
              {[
                { label: "About Us", path: "/about" },
                { label: "Our Services", path: "/services" },
                { label: "Projects", path: "/projects" },
                { label: "Security", path: "/security" },
                { label: "Contact", path: "/contact" },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Services</h4>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <span>Custom Software Development</span>
              <span>Mobile App Development</span>
              <span>Network Infrastructure</span>
              <span>Cybersecurity Audits</span>
              <span>Cloud Architecture</span>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Get In Touch</h4>
            <div className="flex flex-col gap-3 text-sm text-muted-foreground">
              <a href="tel:+256765181438" className="flex items-center gap-2 hover:text-foreground transition-colors">
                <Phone size={14} className="text-water" /> +256 765 181 438
              </a>
              <a href="mailto:info@cosmos8.tech" className="flex items-center gap-2 hover:text-foreground transition-colors">
                <Mail size={14} className="text-fire" /> info@cosmos8.tech
              </a>
              <span className="flex items-center gap-2">
                <MapPin size={14} className="text-nexus" /> Kampala, Uganda
              </span>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/30 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground font-mono">
            © {new Date().getFullYear()} Cosmos 8 — Tech. Done Right.
          </p>
          <div className="flex items-center gap-6 text-xs text-muted-foreground">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
