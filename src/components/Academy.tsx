import { motion } from "framer-motion";
import { GraduationCap, Clock, Award, Users } from "lucide-react";

const courses = [
  {
    title: "Professional Bridal Course",
    duration: "3 Months",
    type: "In-Studio",
    features: [
      "Complete bridal makeup mastery",
      "Hairstyling techniques",
      "Business building strategies",
      "Certificate upon completion",
    ],
    price: "₹75,000",
    popular: true,
  },
  {
    title: "Self-Makeup Masterclass",
    duration: "1 Week",
    type: "In-Studio / Online",
    features: [
      "Daily makeup techniques",
      "Skin preparation basics",
      "Product knowledge",
      "Personal kit guidance",
    ],
    price: "₹15,000",
    popular: false,
  },
  {
    title: "Advanced Airbrush Course",
    duration: "1 Month",
    type: "In-Studio",
    features: [
      "Airbrush equipment mastery",
      "Flawless application techniques",
      "Contouring & highlighting",
      "Hands-on practice",
    ],
    price: "₹45,000",
    popular: false,
  },
];

const Academy = () => {
  return (
    <section id="academy" className="py-20 lg:py-32 bg-background">
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
            Makeup Academy
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Become a <span className="text-gradient-gold">Pro Makeup Artist</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground">
            Start a magical career in the beauty industry. Learn from industry experts 
            and master the art of professional makeup.
          </p>
        </motion.div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative bg-card rounded-2xl p-8 border ${
                course.popular ? "border-gold" : "border-border"
              } hover:shadow-elegant transition-all duration-500`}
            >
              {course.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1 bg-gradient-gold text-primary-foreground font-body text-xs font-semibold rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Course Header */}
              <div className="mb-6">
                <div className="w-14 h-14 bg-gradient-gold rounded-xl flex items-center justify-center mb-4">
                  <GraduationCap className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                  {course.title}
                </h3>
                <div className="flex items-center gap-4 text-muted-foreground">
                  <span className="flex items-center gap-1 font-body text-sm">
                    <Clock className="w-4 h-4" />
                    {course.duration}
                  </span>
                  <span className="flex items-center gap-1 font-body text-sm">
                    <Users className="w-4 h-4" />
                    {course.type}
                  </span>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {course.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 font-body text-sm text-muted-foreground"
                  >
                    <Award className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Price & CTA */}
              <div className="pt-6 border-t border-border">
                <p className="font-heading text-2xl font-bold text-foreground mb-4">
                  {course.price}
                </p>
                <a
                  href={`https://wa.me/919999999999?text=Hi, I'm interested in the ${encodeURIComponent(course.title)}. Please share more details.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center justify-center w-full px-6 py-3 font-body font-semibold rounded-full transition-all duration-300 ${
                    course.popular
                      ? "bg-gradient-gold text-primary-foreground hover:shadow-gold hover:scale-105"
                      : "border-2 border-primary text-foreground hover:bg-primary/10"
                  }`}
                >
                  Enroll Now
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Online Courses CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          id="courses"
          className="mt-16 bg-gradient-gold rounded-3xl p-8 md:p-12 text-center"
        >
          <h3 className="font-heading text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
            Prefer Learning from Home?
          </h3>
          <p className="font-body text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
            Explore our comprehensive online courses designed for aspiring makeup artists 
            and beauty enthusiasts. Learn at your own pace with lifetime access.
          </p>
          <a
            href="https://wa.me/919999999999?text=Hi, I'm interested in your Online Makeup Courses. Please share more details."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-background text-foreground font-body font-semibold rounded-full hover:shadow-elegant transition-all duration-300 hover:scale-105"
          >
            Explore Online Courses
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Academy;
