"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    
    // If we're on a different page, navigate to home first
    if (pathname !== "/") {
      router.push("/" + targetId);
      // Wait for navigation then scroll
      setTimeout(() => {
        const element = document.querySelector(targetId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    } else {
      // Already on home page, just scroll
      const element = document.querySelector(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
    
    closeMobileMenu();
  };

  return (
    <header className="fixed top-0 w-full z-50 glass-header border-b border-primary/10 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="text-primary">
              <span
              className="material-symbols-outlined leading-none"
              style={{ fontSize: "35px" }}
            >
              water_drop
            </span>

            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-black tracking-tighter text-primary uppercase leading-none">
                ARULMURUGAN
              </span>
              <span className="text-[9px] sm:text-[12px] font-bold tracking-widest text-slate-500 dark:text-slate-400 uppercase">
                Borewell Services
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-6 lg:gap-8 text-sm font-semibold">
            <Link
                    href="/"
                    className="hover:text-primary transition-colors">
                    Home
              </Link>
            <a
              href="#services"
              onClick={(e) => handleNavClick(e, "#services")}
              className="hover:text-primary transition-colors"
            >
              Services
            </a>
            <a 
              href="#CustomerReviews" 
              onClick={(e) => handleNavClick(e, "#CustomerReviews")}
              className="hover:text-primary transition-colors"
            >
              Reviews
            </a>
            <a 
              href="#gallery" 
              onClick={(e) => handleNavClick(e, "#gallery")}
              className="hover:text-primary transition-colors"
            >
              Work
            </a>
            <a 
              href="#contact" 
              onClick={(e) => handleNavClick(e, "#contact")}
              className="hover:text-primary transition-colors"
            >
              Location
            </a>
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex gap-2 lg:gap-3">
            <a
              href="https://wa.me/919566649871?text=Hi%20Arulmurgan%2C%20I%20need%20borewell%20Neerotam%20service.%20Please%20call%20me."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-primary text-white px-3 lg:px-4 py-2.5 rounded-lg text-sm font-bold shadow-lg shadow-primary/25 hover:shadow-xl hover:bg-primary/90 transition-all"
            >
              <span className="material-symbols-outlined text-lg">chat</span>
              <span>WhatsApp</span>
            </a>
            <a
              href="tel:+919566649871"
              className="flex items-center gap-2 bg-primary text-white px-3 lg:px-5 py-2.5 rounded-lg text-sm font-bold shadow-lg shadow-primary/25 hover:shadow-xl hover:bg-primary/90 transition-all"
            >
              <span className="material-symbols-outlined text-lg">call</span>
              <span>Call Now</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-2xl">
              {isMobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700 shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
            <nav className="flex flex-col gap-1">
              {/* Navigation Links */}
              <a
                href="/"
                className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-900 dark:text-slate-100 font-semibold"
              >
                <span className="material-symbols-outlined text-primary">
                  home
                </span>
                Home
              </a>
             
              <a
                href="#services"
                onClick={(e) => handleNavClick(e, "#services")}
                className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-900 dark:text-slate-100 font-semibold"
              >
                <span className="material-symbols-outlined text-primary">
                  engineering
                </span>
                Services
              </a>
              <a
                href="#CustomerReviews"
                onClick={(e) => handleNavClick(e, "#CustomerReviews")}
                className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-900 dark:text-slate-100 font-semibold"
              >
                <span className="material-symbols-outlined text-primary">
                  donut_small
                </span>
                 Reviews
              </a>
              <a
                href="#gallery"
                onClick={(e) => handleNavClick(e, "#gallery")}
                className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-900 dark:text-slate-100 font-semibold"
              >
                <span className="material-symbols-outlined text-primary">
                  photo_library
                </span>
                Work
              </a>
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-900 dark:text-slate-100 font-semibold"
              >
                <span className="material-symbols-outlined text-primary">
                  location_on
                </span>
                Location
              </a>

              {/* Divider */}
              <div className="h-px bg-slate-200 dark:bg-slate-700 my-2"></div>

              {/* WhatsApp Button */}
              <a
               href="https://wa.me/919566649871?text=Hi%20Arulmurgan%2C%20I%20need%20borewell%20Neerotam%20service.%20Please%20call%20me."
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMobileMenu}
                className="flex items-center justify-center gap-2 bg-primary text-white px-4 py-3 rounded-lg font-bold shadow-lg hover:bg-primary/90 transition-all"
              >
                <span className="material-symbols-outlined text-xl">chat</span>
                WhatsApp
              </a>

              {/* Call Now Button */}
              <a
                href="tel:+919566649871"
                onClick={closeMobileMenu}
                className="flex items-center justify-center gap-2 bg-primary text-white px-4 py-3 rounded-lg font-bold shadow-lg hover:bg-primary/90 transition-all"
              >
                <span className="material-symbols-outlined text-xl">call</span>
                Call Now
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
