import React from 'react';
import { Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#2D3436', color: '#FFFFFF' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <img 
              src="https://customer-assets.emergentagent.com/job_research-unleashed/artifacts/7yp7ujig_logo_minnerva.png" 
              alt="Minnerva Innov" 
              className="h-12 mb-4 brightness-0 invert"
            />
            <p className="text-base opacity-80">
              Fast, focused intelligence for FMCG leaders who don't have time to wait.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4" style={{ fontFamily: 'Space Grotesk' }}>
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#case-studies" className="opacity-80 hover:opacity-100 transition-opacity">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#services" className="opacity-80 hover:opacity-100 transition-opacity">
                  Services
                </a>
              </li>
              <li>
                <a href="#testimonials" className="opacity-80 hover:opacity-100 transition-opacity">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#contact" className="opacity-80 hover:opacity-100 transition-opacity">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-bold text-lg mb-4" style={{ fontFamily: 'Space Grotesk' }}>
              Connect
            </h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-3 rounded-full hover:scale-110 transition-transform"
                style={{ backgroundColor: '#BE2026' }}
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="p-3 rounded-full hover:scale-110 transition-transform"
                style={{ backgroundColor: '#EF5350' }}
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="p-3 rounded-full hover:scale-110 transition-transform"
                style={{ backgroundColor: '#FFB74D' }}
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/20 text-center opacity-80">
          <p>&copy; 2025 Minnerva Innov. Built for leaders who move fast.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
