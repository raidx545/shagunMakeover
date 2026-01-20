import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import LocationMap from "@/components/LocationMap";
import artistImage from "@/assets/makeup-artist.jpg";
import { Award, Heart, Users, Star, Sparkles, Camera, Palette } from "lucide-react";

const achievements = [
  { icon: Award, label: "Certified MUA", value: "International" },
  { icon: Heart, label: "Happy Brides", value: "500+" },
  { icon: Users, label: "Students Trained", value: "1000+" },
  { icon: Star, label: "5-Star Reviews", value: "300+" },
];

const skills = [
  { icon: Sparkles, title: "Bridal Expertise", description: "Specializing in Indian bridal looks including HD, airbrush, and traditional styles" },
  { icon: Camera, title: "Camera Ready", description: "Techniques perfected for photography and videography to ensure you look stunning in every frame" },
  { icon: Palette, title: "Custom Artistry", description: "Personalized looks designed to complement your features, outfit, and wedding theme" },
];

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Banner */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-cream to-background">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-playfair text-brown mb-4"
          >
            About <span className="text-gradient-gold">Shagun</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-brown/70 font-montserrat text-lg max-w-2xl mx-auto"
          >
            Your trusted bridal makeup artist with a passion for creating unforgettable beauty
          </motion.p>
        </div>
      </section>

      {/* Main About Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
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
              <span className="inline-block px-4 py-2 bg-secondary rounded-full font-montserrat text-sm font-medium text-brown/70 mb-4">
                Meet Your Artist
              </span>
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-brown mb-6">
                Creating Beauty,{" "}
                <span className="text-gradient-gold">One Bride at a Time</span>
              </h2>
              <p className="font-montserrat text-lg text-brown/80 leading-relaxed mb-6">
                With over a decade of experience in the beauty industry, I've had the 
                privilege of transforming hundreds of brides on their most special day. 
                My passion lies in bringing out the unique beauty in every face I work on.
              </p>
              <p className="font-montserrat text-brown/70 leading-relaxed mb-8">
                Trained internationally and certified in advanced airbrush techniques, 
                I specialize in creating flawless, long-lasting looks that photograph 
                beautifully. Whether you prefer traditional elegance or modern glam, 
                I craft personalized looks that celebrate you.
              </p>

              {/* Achievements Grid */}
              <div className="grid grid-cols-2 gap-4">
                {achievements.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 p-4 bg-cream rounded-xl"
                  >
                    <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-playfair text-xl font-bold text-brown">
                        {item.value}
                      </p>
                      <p className="font-montserrat text-xs text-brown/60">
                        {item.label}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-playfair text-brown mb-4">
              What I <span className="text-gradient-gold">Specialize In</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-lg text-center group hover:shadow-elegant transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <skill.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-playfair text-xl text-brown mb-3">{skill.title}</h3>
                <p className="font-montserrat text-brown/70 text-sm leading-relaxed">
                  {skill.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-playfair text-brown mb-4">
              Let's Create Magic Together
            </h2>
            <p className="text-brown/70 font-montserrat mb-8 max-w-xl mx-auto">
              Ready to book your bridal makeup session? Reach out and let's discuss your dream look.
            </p>
            <a
              href="https://wa.me/917078525809"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-gold text-white font-montserrat font-semibold rounded-full hover:shadow-gold transition-all duration-300 hover:scale-105"
            >
              Book a Consultation
            </a>
          </motion.div>
        </div>
      </section>

      <LocationMap />

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default AboutPage;
