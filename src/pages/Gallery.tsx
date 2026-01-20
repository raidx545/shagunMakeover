import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import bridalMakeup from "@/assets/bridal-makeup.jpg";
import airbrushMakeup from "@/assets/airbrush-makeup.jpg";
import engagementMakeup from "@/assets/engagement-makeup.jpg";
import heroImage from "@/assets/hero-bridal.jpg";

const galleryImages = [
  {
    id: 1,
    src: bridalMakeup,
    alt: "Bridal Makeup Look",
    category: "Bridal",
  },
  {
    id: 2,
    src: airbrushMakeup,
    alt: "Airbrush Makeup",
    category: "Airbrush",
  },
  {
    id: 3,
    src: engagementMakeup,
    alt: "Engagement Makeup",
    category: "Engagement",
  },
  {
    id: 4,
    src: heroImage,
    alt: "Bridal Beauty",
    category: "Bridal",
  },
  {
    id: 5,
    src: bridalMakeup,
    alt: "Wedding Day Glam",
    category: "Bridal",
  },
];

const Gallery = () => {
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
            Our <span className="text-gradient-gold">Gallery</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-brown/70 font-montserrat text-lg max-w-2xl mx-auto"
          >
            Explore our portfolio of stunning bridal transformations and makeup artistry
          </motion.p>
        </div>
      </section>

      {/* Featured Carousel */}
      <section className="py-16 bg-cream/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-playfair text-brown mb-4">
              Featured <span className="text-gradient-gold">Looks</span>
            </h2>
            <p className="text-brown/70 font-montserrat">Swipe through our best work</p>
          </motion.div>
          
          <div className="max-w-4xl mx-auto px-12">
            <Carousel
              opts={{
                align: "center",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {galleryImages.map((image) => (
                  <CarouselItem key={image.id} className="md:basis-1/2 lg:basis-1/2">
                    <div className="p-2">
                      <div className="group relative aspect-[4/5] overflow-hidden rounded-xl shadow-lg">
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-brown/80 via-brown/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="absolute bottom-0 left-0 right-0 p-6">
                            <span className="inline-block px-3 py-1 bg-gold/90 text-white text-xs font-montserrat font-medium rounded-full mb-2">
                              {image.category}
                            </span>
                            <h3 className="text-white font-playfair text-xl">
                              {image.alt}
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="bg-gold/90 border-gold text-white hover:bg-gold hover:text-white" />
              <CarouselNext className="bg-gold/90 border-gold text-white hover:bg-gold hover:text-white" />
            </Carousel>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-playfair text-brown mb-4">
              Complete <span className="text-gradient-gold">Portfolio</span>
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative aspect-[4/5] overflow-hidden rounded-xl shadow-lg cursor-pointer"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brown/80 via-brown/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="inline-block px-3 py-1 bg-gold/90 text-white text-xs font-montserrat font-medium rounded-full mb-2">
                      {image.category}
                    </span>
                    <h3 className="text-white font-playfair text-xl">
                      {image.alt}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-playfair text-brown mb-4">
              Ready to Look Your Best?
            </h2>
            <p className="text-brown/70 font-montserrat mb-8 max-w-xl mx-auto">
              Book your bridal makeup session today and let us make your special day even more memorable.
            </p>
            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-gold text-white font-montserrat font-semibold rounded-full hover:shadow-gold transition-all duration-300 hover:scale-105"
            >
              Book on WhatsApp
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Gallery;
