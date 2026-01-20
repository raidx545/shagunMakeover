import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 lg:py-32 bg-gradient-cream">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-2 bg-secondary rounded-full font-body text-sm font-medium text-brown-light mb-4">
              Get in Touch
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Let's Create{" "}
              <span className="text-gradient-gold">Magic Together</span>
            </h2>
            <p className="font-body text-lg text-muted-foreground mb-8">
              Ready to book your bridal trial or enroll in our academy? 
              Reach out and let's discuss how we can make your special day unforgettable.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-heading text-lg font-semibold text-foreground mb-1">
                    Studio Location
                  </h4>
                  <p className="font-body text-muted-foreground">
                    123 Beauty Lane, Fashion District<br />
                    Mumbai, Maharashtra 400001
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-heading text-lg font-semibold text-foreground mb-1">
                    Phone
                  </h4>
                  <p className="font-body text-muted-foreground">
                    +91 70785 25809
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-heading text-lg font-semibold text-foreground mb-1">
                    Email
                  </h4>
                  <p className="font-body text-muted-foreground">
                    hello@shagunmakeover.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-heading text-lg font-semibold text-foreground mb-1">
                    Working Hours
                  </h4>
                  <p className="font-body text-muted-foreground">
                    Mon - Sat: 10:00 AM - 7:00 PM<br />
                    Sunday: By Appointment
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form className="bg-card rounded-2xl p-8 shadow-elegant">
              <h3 className="font-heading text-2xl font-bold text-foreground mb-6">
                Send a Message
              </h3>

              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-body text-sm font-medium text-foreground mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your name"
                      className="w-full px-4 py-3 bg-background border border-input rounded-lg font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    />
                  </div>
                  <div>
                    <label className="block font-body text-sm font-medium text-foreground mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full px-4 py-3 bg-background border border-input rounded-lg font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-body text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 bg-background border border-input rounded-lg font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  />
                </div>

                <div>
                  <label className="block font-body text-sm font-medium text-foreground mb-2">
                    Interested In
                  </label>
                  <select className="w-full px-4 py-3 bg-background border border-input rounded-lg font-body text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all">
                    <option value="">Select a service</option>
                    <option value="bridal">Bridal Makeup</option>
                    <option value="airbrush">Airbrush Makeup</option>
                    <option value="engagement">Engagement Look</option>
                    <option value="academy">Makeup Academy</option>
                    <option value="online">Online Courses</option>
                  </select>
                </div>

                <div>
                  <label className="block font-body text-sm font-medium text-foreground mb-2">
                    Your Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your requirements..."
                    className="w-full px-4 py-3 bg-background border border-input rounded-lg font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-gold text-primary-foreground font-body font-semibold rounded-full hover:shadow-gold transition-all duration-300 hover:scale-105"
                >
                  Send Message
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
