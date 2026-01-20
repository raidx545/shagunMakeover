import { motion } from "framer-motion";
import { MapPin, Clock, Phone } from "lucide-react";

const LocationMap = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 bg-secondary rounded-full font-montserrat text-sm font-medium text-brown/70 mb-4">
            Visit Us
          </span>
          <h2 className="text-3xl md:text-4xl font-playfair text-brown mb-4">
            Find <span className="text-gradient-gold">Our Studio</span>
          </h2>
          <p className="text-brown/70 font-montserrat max-w-xl mx-auto">
            Visit our studio for consultations, trials, and your special day makeup
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2 rounded-2xl overflow-hidden shadow-lg h-[400px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d891.4876896699006!2d79.148852!3d26.650059!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39760f36cdb7b18f%3A0x32fd08b55e91fe72!2sNo%201%20Shagun%20makeover%20lakhna!5e0!3m2!1sen!2sus!4v1768934065660!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Shagun Makeover Location"
              className="w-full h-full"
            />
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-cream rounded-2xl p-8 flex flex-col justify-center"
          >
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-playfair text-lg text-brown font-semibold mb-1">
                    Our Address
                  </h4>
                  <p className="font-montserrat text-brown/70 text-sm">
                    Ganj Muhal Lakhna<br />
                    Etawah, Uttar Pradesh 206127
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-playfair text-lg text-brown font-semibold mb-1">
                    Working Hours
                  </h4>
                  <p className="font-montserrat text-brown/70 text-sm">
                    Mon - Sat: 10:00 AM - 8:00 PM<br />
                    Sunday: By Appointment
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-playfair text-lg text-brown font-semibold mb-1">
                    Contact Us
                  </h4>
                  <p className="font-montserrat text-brown/70 text-sm">
                    +91 70785 25809<br />
                    shagunmakeover@email.com
                  </p>
                </div>
              </div>

              <a
                href="https://maps.app.goo.gl/9tnkEr5fUxKUVJc48"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full mt-4 px-6 py-3 bg-gradient-gold text-white font-montserrat font-semibold rounded-full hover:shadow-gold transition-all duration-300 hover:scale-105"
              >
                Get Directions
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;
