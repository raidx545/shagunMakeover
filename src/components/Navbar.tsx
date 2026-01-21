import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Gallery", href: "/gallery" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/#services" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname === href || location.pathname.startsWith(href);
  };

  const handleNavClick = (href: string) => {
    if (href.startsWith("/#")) {
      if (location.pathname !== "/") {
        window.location.href = href;
      }
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex flex-col leading-none">
            <span className="font-heading text-2xl md:text-3xl font-semibold text-gradient-gold">
              Shagun Makeover
            </span>
            <span className="font-body text-xs md:text-sm text-brown-light/70 mt-1">
              Premium Bridal Makeup Studio
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              link.href.startsWith("/#") ? (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="font-body text-sm font-medium text-brown-light hover:text-primary transition-colors duration-300 relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-gold group-hover:w-full transition-all duration-300" />
                </a>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`font-body text-sm font-medium transition-colors duration-300 relative group ${
                    isActive(link.href) ? "text-primary" : "text-brown-light hover:text-primary"
                  }`}
                >
                  {link.name}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-gold transition-all duration-300 ${
                    isActive(link.href) ? "w-full" : "w-0 group-hover:w-full"
                  }`} />
                </Link>
              )
            ))}
            <a
              href="https://wa.me/917078525809"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 bg-gradient-gold text-primary-foreground font-body text-sm font-semibold rounded-full hover:shadow-gold transition-all duration-300 hover:scale-105"
            >
              Book Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-t border-border"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                link.href.startsWith("/#") ? (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => {
                      handleNavClick(link.href);
                      setIsOpen(false);
                    }}
                    className="font-body text-base font-medium text-brown-light hover:text-primary transition-colors py-2"
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    key={link.name}
                    to={link.href}
                    className={`font-body text-base font-medium transition-colors py-2 ${
                      isActive(link.href) ? "text-primary" : "text-brown-light hover:text-primary"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                )
              ))}
              <a
                href="https://wa.me/917078525809"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 px-6 py-3 bg-gradient-gold text-primary-foreground font-body text-sm font-semibold rounded-full text-center hover:shadow-gold transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                Book Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
