import React from "react";
import Container from "./Container";
import { NAV_ITEMS, SOCIAL_LINKS, COMPANY } from "../constants";
import { Flame } from "lucide-react";
import * as LucideIcons from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-slate-700">
          <div>
            <a href="#home" className="flex items-center gap-2 text-2xl font-bold mb-4">
              <Flame className="text-amber-500" size={28} />
              {COMPANY.name}
            </a>
            <p className="text-slate-300 mb-6 max-w-sm">
              {COMPANY.description}
            </p>
            <div className="flex space-x-4">
              {SOCIAL_LINKS.map((link) => {
                const Icon = LucideIcons[link.icon as keyof typeof LucideIcons];
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-800 hover:bg-amber-600 transition-colors"
                    aria-label={link.name}
                  >
                    {Icon && <Icon size={18} />}
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-slate-300 hover:text-amber-400 transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <address className="not-italic text-slate-300 space-y-3">
              <p>{COMPANY.address}</p>
              <p>
                <a href={`tel:${COMPANY.phone}`} className="hover:text-amber-400 transition-colors">
                  {COMPANY.phone}
                </a>
              </p>
              <p>
                <a href={`mailto:${COMPANY.email}`} className="hover:text-amber-400 transition-colors">
                  {COMPANY.email}
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="pt-8 text-center text-slate-400">
          <p>&copy; {currentYear} {COMPANY.name}. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;