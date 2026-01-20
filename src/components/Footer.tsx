import { Instagram, Facebook, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="font-heading text-2xl font-bold text-cream mb-4">
              Shagun Makeover
            </h3>
            <p className="font-body text-cream/70 mb-6 max-w-md">
              Transforming brides into queens with luxury makeup artistry. 
              Experience the magic of professional bridal makeup.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/no1shagunmakeover/"
                className="w-10 h-10 bg-cream/10 hover:bg-cream/20 rounded-full flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-cream" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-cream/10 hover:bg-cream/20 rounded-full flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-cream" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-cream/10 hover:bg-cream/20 rounded-full flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5 text-cream" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-cream mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "/" },
                { name: "Gallery", href: "/gallery" },
                { name: "About", href: "/about" },
                { name: "Services", href: "/#services" },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="font-body text-cream/70 hover:text-cream transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-cream mb-4">
              Services
            </h4>
            <ul className="space-y-3">
              {[
                "Bridal Makeup",
                "Airbrush Makeup",
                "Engagement Look",
                "Party Makeup",
                "Hair Styling",
              ].map((service) => (
                <li key={service}>
                  <a
                    href="./#services"
                    className="font-body text-cream/70 hover:text-cream transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-cream/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="font-body text-sm text-cream/50">
              © 2026 Shagun Makeover. All rights reserved.
            </p>
            <p className="font-body text-sm text-cream/50">
              This website is developed and managed by{" "}
              <a
                href="https://www.instagram.com/raidx/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream/70 hover:text-cream transition-colors"
              >
                RAIDX (@raidx)
              </a>
            </p>
          </div>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="font-body text-sm text-cream/50 hover:text-cream transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="font-body text-sm text-cream/50 hover:text-cream transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
