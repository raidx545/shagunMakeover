import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "917078525809";
  const message = encodeURIComponent(
    "Hi! I'm interested in learning more about your makeup services."
  );

  return (
    <motion.a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5, type: "spring" }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Chat on WhatsApp"
    >
    <div className="relative">
        {/* Pulse Animation */}
        <div className="absolute inset-0 bg-[hsl(142_70%_45%)] rounded-full animate-ping opacity-25" />
        
        {/* Button */}
        <div className="relative w-14 h-14 bg-[hsl(142_70%_45%)] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow">
          <MessageCircle className="w-7 h-7 text-cream" />
        </div>

        {/* Tooltip */}
        <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-4 py-2 bg-foreground text-cream text-sm font-body whitespace-nowrap rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Book via WhatsApp
          <div className="absolute left-full top-1/2 -translate-y-1/2 border-8 border-transparent border-l-foreground" />
        </div>
      </div>
    </motion.a>
  );
};

export default WhatsAppButton;
