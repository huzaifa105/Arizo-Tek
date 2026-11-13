import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-[#626262] border-t border-[#402015]/10">
      {/* Subtle brand horizon stripe inspired by the ArizoTek logo */}
      <div
        className="h-1 w-full bg-gradient-to-r from-[#402015] via-[#D66A25] to-[#E9A04A]"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand Summary */}
          <div className="lg:col-span-4 space-y-5">
            <Link
              to="/"
              className="inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D66A25] rounded-md"
              aria-label="ArizoTek Home"
            >
              <img
                src={SITE_CONFIG.logoPath}
                alt="ArizoTek — IT Automation for Small to Mid-Size Businesses"
                referrerPolicy="no-referrer"
                className="h-12 w-auto object-contain"
              />
            </Link>

            <p className="text-sm leading-relaxed text-[#626262] max-w-sm">
              Practical AI automation, business process streamlining, and
              connected workflow solutions built for small and mid-sized
              businesses.
            </p>

            <div className="pt-1">
              <p className="text-xs font-bold text-[#402015] mb-2.5">
                Social Channels (Configurable Placeholders)
              </p>
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                {SITE_CONFIG.socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    onClick={(e) => {
                      if (social.isPlaceholder) {
                        e.preventDefault();
                      }
                    }}
                    title={
                      social.isPlaceholder
                        ? `${social.name} placeholder — update in src/config/siteConfig.ts`
                        : social.name
                    }
                    className="inline-flex items-center gap-1 text-sm font-semibold text-[#402015] hover:text-[#D66A25] transition-colors"
                  >
                    <span>{social.name}</span>
                    <ArrowUpRight
                      className="w-3.5 h-3.5 text-[#D66A25]"
                      aria-hidden="true"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-bold text-[#402015] mb-4">
              Navigation
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  to="/"
                  className="hover:text-[#D66A25] transition-colors font-medium"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-[#D66A25] transition-colors font-medium"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-[#D66A25] transition-colors font-medium"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Links */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-bold text-[#402015] mb-4">
              Automation Services
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  to="/services#ai-automation"
                  className="hover:text-[#D66A25] transition-colors"
                >
                  AI Automation Solutions
                </Link>
              </li>
              <li>
                <Link
                  to="/services#process-automation"
                  className="hover:text-[#D66A25] transition-colors"
                >
                  Business Process Automation
                </Link>
              </li>
              <li>
                <Link
                  to="/services#ai-chatbots"
                  className="hover:text-[#D66A25] transition-colors"
                >
                  AI Chatbots &amp; Virtual Assistants
                </Link>
              </li>
              <li>
                <Link
                  to="/services#workflow-integration"
                  className="hover:text-[#D66A25] transition-colors"
                >
                  Workflow Integration &amp; Automation
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Placeholders */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-bold text-[#402015] mb-4">
              Contact Details
            </h3>
            <ul className="space-y-3.5 text-sm">
              <li className="flex items-start gap-2.5">
                <Mail
                  className="w-4 h-4 text-[#D66A25] shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <div>
                  <span className="block text-[#402015] font-semibold break-all">
                    {SITE_CONFIG.contact.email}
                  </span>
                  <span className="text-xs text-[#626262]">
                    Placeholder email
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone
                  className="w-4 h-4 text-[#D66A25] shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <div>
                  <span className="block text-[#402015] font-semibold">
                    {SITE_CONFIG.contact.phone}
                  </span>
                  <span className="text-xs text-[#626262]">
                    Placeholder phone
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin
                  className="w-4 h-4 text-[#D66A25] shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <div>
                  <span className="block text-[#402015] font-semibold">
                    {SITE_CONFIG.contact.location}
                  </span>
                  <span className="text-xs text-[#626262]">
                    Placeholder location
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright Row */}
        <div className="mt-12 pt-8 border-t border-[#402015]/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#626262]">
          <p className="font-medium text-[#402015]">
            © 2026 ArizoTek. All Rights Reserved.
          </p>
          <p>{SITE_CONFIG.tagline}</p>
        </div>
      </div>
    </footer>
  );
};
