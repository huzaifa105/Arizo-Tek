import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

const NAV_ITEMS = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Contact Us', to: '/contact' },
];

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#402015]/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-16 sm:h-20">
          {/* Zone 1: ArizoTek Brand Logo */}
          <Link
            to="/"
            onClick={closeMenu}
            className="flex items-center shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D66A25] rounded-md"
            aria-label="ArizoTek Home"
          >
            <img
              src={SITE_CONFIG.logoPath}
              alt="ArizoTek — IT Automation for Small to Mid-Size Businesses"
              referrerPolicy="no-referrer"
              className="h-10 sm:h-12 w-auto object-contain"
            />
          </Link>

          {/* Zone 2: Desktop Navigation Links */}
          <nav
            className="hidden md:flex items-center gap-8"
            aria-label="Primary Navigation"
          >
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  `relative py-2 text-sm font-semibold whitespace-nowrap shrink-0 transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D66A25] rounded-sm ${
                    isActive
                      ? 'text-[#D66A25]'
                      : 'text-[#402015] hover:text-[#D66A25]'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{item.label}</span>
                    <span
                      className={`absolute inset-x-0 bottom-0 h-0.5 bg-[#D66A25] transition-transform duration-200 origin-left ${
                        isActive ? 'scale-x-100' : 'scale-x-0'
                      }`}
                      aria-hidden="true"
                    />
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Zone 3: Primary Action CTA + Mobile Toggle */}
          <div className="flex items-center gap-3 shrink-0">
            <Link
              to="/contact"
              className="hidden md:inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white bg-[#D66A25] hover:bg-[#B8571A] rounded-lg shadow-xs transition-colors duration-150 whitespace-nowrap shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#D66A25]"
            >
              Book a Consultation
            </Link>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg text-[#402015] hover:bg-[#FAF7F3] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D66A25]"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="md:hidden bg-white border-t border-[#402015]/10 px-4 py-5 space-y-2 shadow-lg"
        >
          <nav className="flex flex-col space-y-1" aria-label="Mobile Navigation">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-lg text-base font-semibold transition-colors ${
                    isActive
                      ? 'bg-[#FAF7F3] text-[#D66A25]'
                      : 'text-[#402015] hover:bg-[#FAF7F3] hover:text-[#D66A25]'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
          <div className="pt-3 border-t border-[#402015]/10">
            <Link
              to="/contact"
              onClick={closeMenu}
              className="flex items-center justify-center w-full px-5 py-3 text-sm font-semibold text-white bg-[#D66A25] hover:bg-[#B8571A] rounded-lg transition-colors"
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
