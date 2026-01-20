import { motion } from "framer-motion";
import bridalImage from "@/assets/bridal-makeup.jpg";
import airbrushImage from "@/assets/airbrush-makeup.jpg";
import engagementImage from "@/assets/engagement-makeup.jpg";

const services = [
  {
    title: "Bridal Makeup",
    description:
      "Traditional and contemporary bridal looks crafted with premium products for your perfect day. Long-lasting, photo-ready finish.",
    image: bridalImage,
    features: ["HD Makeup", "Trial Session", "Touch-up Kit"],
  },
  {
    title: "Airbrush Makeup",
    description:
      "Flawless, lightweight coverage with our advanced airbrush technique. Perfect for a natural, dewy glow that lasts all day.",
    image: airbrushImage,
    features: ["Waterproof", "Sweat-proof", "Natural Finish"],
  },
  {
    title: "Engagement Look",
    description:
      "Soft, romantic makeup that enhances your natural beauty. Perfect for photos and intimate celebrations.",
    image: engagementImage,
    features: ["Soft Glam", "Custom Colors", "Hair Styling"],
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 lg:py-32 bg-gradient-cream">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 bg-secondary rounded-full font-body text-sm font-medium text-brown-light mb-4">
            Our Services
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Crafting <span className="text-gradient-gold">Timeless Beauty</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground">
            From traditional bridal looks to modern airbrush techniques, we bring your 
            vision to life with artistry and precision.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-elegant transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-80 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                
                {/* Title Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-heading text-2xl font-bold text-cream">
                    {service.title}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="font-body text-muted-foreground mb-4 leading-relaxed">
                  {service.description}
                </p>
                
                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-3 py-1 bg-secondary rounded-full font-body text-xs font-medium text-brown-light"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <a
                  href={`https://wa.me/919999999999?text=Hi, I'm interested in ${encodeURIComponent(service.title)}. Please share more details.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center font-body text-sm font-semibold text-primary hover:text-gold-dark transition-colors group/link"
                >
                  Book Now
                  <svg
                    className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
