import { motion } from "framer-motion";
import artistImage from "@/assets/makeup-artist.jpg";
import { Award, Heart, Users, Star } from "lucide-react";

const achievements = [
  { icon: Award, label: "Certified MUA", value: "International" },
  { icon: Heart, label: "Happy Brides", value: "500+" },
  { icon: Users, label: "Students Trained", value: "1000+" },
  { icon: Star, label: "5-Star Reviews", value: "300+" },
];

const About = () => {
  return (
    <section id="about" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-elegant">
              <img
                src={artistImage}
                alt="Shagun - Professional Makeup Artist"
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Decorative Frame */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-gold rounded-2xl -z-10" />
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-gold rounded-full blur-2xl opacity-30" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-2 bg-secondary rounded-full font-body text-sm font-medium text-brown-light mb-4">
              Meet Your Artist
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Hello, I'm{" "}
              <span className="text-gradient-gold">Shagun</span>
            </h2>
            <p className="font-body text-lg text-muted-foreground leading-relaxed mb-6">
              With over a decade of experience in the beauty industry, I've had the 
              privilege of transforming hundreds of brides on their most special day. 
              My passion lies in bringing out the unique beauty in every face I work on.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed mb-8">
              Trained internationally and certified in advanced airbrush techniques, 
              I specialize in creating flawless, long-lasting looks that photograph 
              beautifully. Whether you prefer traditional elegance or modern glam, 
              I craft personalized looks that celebrate you.
            </p>

            {/* Achievements Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {achievements.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-3 p-4 bg-card rounded-xl"
                >
                  <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-heading text-xl font-bold text-foreground">
                      {item.value}
                    </p>
                    <p className="font-body text-xs text-muted-foreground">
                      {item.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="https://wa.me/919999999999?text=Hey%20Mam%20I%20Want%20to%20Join%20This%20Academy"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-gold text-primary-foreground font-body font-semibold rounded-full hover:shadow-gold transition-all duration-300 hover:scale-105"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
