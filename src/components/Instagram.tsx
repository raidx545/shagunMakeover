import { motion } from "framer-motion";
import { Instagram as InstagramIcon } from "lucide-react";

const instagramEmbeds = [
  {
    id: 1,
    src: "https://www.instagram.com/p/DSsB1BKiZGu/embed",
    title: "Instagram post 1",
  },
  {
    id: 2,
    src: "https://www.instagram.com/p/DSUOahlCeVI/embed",
    title: "Instagram post 2",
  },
  {
    id: 3,
    src: "https://www.instagram.com/p/DQVqvaqCTQS/embed",
    title: "Instagram post 3",
  },
];

const Instagram = () => {
  return (
    <section id="instagram" className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <InstagramIcon className="w-8 h-8 text-gold" />
            <h2 className="text-3xl md:text-4xl font-playfair text-brown">
              Follow Us on Instagram
            </h2>
          </div>
          <p className="text-brown/70 font-montserrat">
            @no1shagunmakeover
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {instagramEmbeds.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-lg shadow-lg bg-white"
            >
              <iframe
                src={post.src}
                title={post.title}
                className="w-full"
                style={{ border: 0, height: 560 }}
                loading="lazy"
                allowFullScreen
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <a
            href="https://instagram.com/no1shagunmakeover"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-gold text-white font-montserrat font-medium rounded-full hover:shadow-lg transition-shadow duration-300"
          >
            <InstagramIcon className="w-5 h-5" />
            Follow @no1shagunmakeover
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Instagram;
