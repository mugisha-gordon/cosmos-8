import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/256765181438";

const WhatsAppButton = () => {
  return (
    <motion.a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-5 py-3 rounded-full bg-[#25D366] text-white font-medium text-sm shadow-lg hover:shadow-xl hover:scale-105 transition-all"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.08 }}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={20} fill="white" />
      <span className="hidden sm:inline">Chat with us</span>
    </motion.a>
  );
};

export default WhatsAppButton;
