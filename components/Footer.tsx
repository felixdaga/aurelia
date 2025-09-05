"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const footerSections = [
    {
      title: "Collections",
      links: ["Living Room", "Dining Room", "Bedroom", "Office"],
    },
    {
      title: "Company",
      links: ["About Us", "Our Story", "Sustainability", "Contact"],
    },
    {
      title: "Support",
      links: ["Help Center", "Care Instructions", "Returns", "FAQ"],
    },
  ];

  return (
    <footer id="contact" className="bg-neutral-900 text-white">
      {/* Newsletter Section */}
      <div className="border-b border-neutral-800">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h3 className="text-3xl font-light mb-6">
              Stay Connected with Aurelia
            </h3>
            <p className="text-neutral-300 text-lg mb-12 max-w-2xl mx-auto">
              Be the first to know about new collections and exclusive offers.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row items-center justify-center max-w-md mx-auto space-y-4 sm:space-y-0"
            >
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full sm:flex-1 px-6 py-4 bg-transparent border border-neutral-700 text-white placeholder-neutral-400 focus:outline-none focus:border-primary-900 transition-colors"
              />
              <button className="w-full sm:w-auto bg-primary-900 hover:bg-primary-800 px-8 py-4 font-normal transition-colors duration-200">
                Subscribe
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-medium mb-8">Aurelia</h2>
            <p className="text-neutral-300 text-lg mb-8 leading-relaxed max-w-md">
              Transforming spaces with exceptional furniture and timeless
              design.
            </p>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-neutral-400" />
                <span className="text-neutral-300">
                  123 Design Street, NY 10001
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-neutral-400" />
                <span className="text-neutral-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-neutral-400" />
                <span className="text-neutral-300">hello@aurelia.com</span>
              </div>
            </div>
          </motion.div>

          {/* Footer Links */}
          <div className="grid grid-cols-3 gap-8">
            {footerSections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <h3 className="text-lg font-normal mb-6">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-neutral-400 hover:text-white transition-colors duration-200"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-neutral-800">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-neutral-400">
              © 2024 Aurelia. All rights reserved.
            </p>

            {/* Back to Top Button */}
            <button
              onClick={scrollToTop}
              className="w-10 h-10 border border-neutral-700 hover:border-primary-900 flex items-center justify-center transition-colors duration-200"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
