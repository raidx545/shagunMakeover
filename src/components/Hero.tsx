import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import heroImage1 from "@/assets/hero-bridal.jpg";
import heroImage2 from "@/assets/bridal-makeup.jpg";
import heroImage3 from "@/assets/engagement-makeup.jpg";
import heroImage4 from "@/assets/airbrush-makeup.jpg";

const Hero = () => {
  const images = useMemo(() => {
    const base = [heroImage1, heroImage2, heroImage3, heroImage4];
    for (let i = base.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [base[i], base[j]] = [base[j], base[i]];
    }
    return base;
  }, []);

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 4500);

    return () => window.clearInterval(intervalId);
  }, [images.length]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={activeIndex}
            src={images[activeIndex]}
            alt="Professional bridal makeup transformation"
            className="w-full h-full object-cover object-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block px-4 py-2 bg-secondary/80 backdrop-blur-sm rounded-full font-body text-sm font-medium text-brown-light mb-6">
              ✨ Premium Bridal Makeup Studio
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight mb-6"
          >
            Transforming Brides{" "}
            <span className="text-gradient-gold">into Queens</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-xl"
          >
            Experience the artistry of luxury bridal makeup. From ethereal airbrush 
            finishes to timeless traditional looks, we craft beauty that photographs 
            like a dream.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#services"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-gold text-primary-foreground font-body font-semibold rounded-full hover:shadow-gold transition-all duration-300 hover:scale-105"
            >
              Explore Services
            </a>
            <a
              href="https://wa.me/917078525809?text=i%20want%20to%20join%20this%20academy"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-primary text-foreground font-body font-semibold rounded-full hover:bg-primary/10 transition-all duration-300"
            >
              Join Academy
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            className="flex flex-wrap gap-8 mt-12 pt-8 border-t border-border/50"
          >
            <div>
              <p className="font-heading text-3xl md:text-4xl font-bold text-gradient-gold">
                500+
              </p>
              <p className="font-body text-sm text-muted-foreground mt-1">
                Happy Brides
              </p>
            </div>
            <div>
              <p className="font-heading text-3xl md:text-4xl font-bold text-gradient-gold">
                10+
              </p>
              <p className="font-body text-sm text-muted-foreground mt-1">
                Years Experience
              </p>
            </div>
            <div>
              <p className="font-heading text-3xl md:text-4xl font-bold text-gradient-gold">
                1000+
              </p>
              <p className="font-body text-sm text-muted-foreground mt-1">
                Students Trained
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-x-0 bottom-4 sm:bottom-10 z-10 flex justify-center"
      >
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <span className="font-body text-sm">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-3 bg-primary rounded-full"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
