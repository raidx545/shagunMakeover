import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Instagram from "@/components/Instagram";
import LocationMap from "@/components/LocationMap";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  const offers = [
    "10% Off Bridal Makeup",
    "Free Consultation",
    "Bridal Trial Available",
    "Group Booking Discount",
    "Limited Time Offer",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />

      <section className="bg-secondary/70 border-y border-border/40 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="py-3">
            <motion.div
              className="flex items-center gap-10 whitespace-nowrap"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 18, ease: "linear", repeat: Infinity }}
            >
              {[...offers, ...offers].map((offer, idx) => (
                <span
                  key={`${offer}-${idx}`}
                  className="inline-flex items-center gap-3 font-body text-sm md:text-base font-semibold text-brown"
                >
                  <span className="w-2 h-2 rounded-full bg-gradient-gold" />
                  {offer}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <About />
      <Services />
      <Instagram />
      <LocationMap />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
