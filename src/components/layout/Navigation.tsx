'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

interface NavLink {
  label: string;
  sectionId: string;
}

const navLinks: NavLink[] = [
  { label: 'Trang chủ', sectionId: 'hero' },
  { label: 'Cặp đôi', sectionId: 'couple' },
  { label: 'Sự kiện', sectionId: 'events' },
  { label: 'Đếm ngược', sectionId: 'countdown' },
  { label: 'Album ảnh', sectionId: 'gallery' },
  { label: 'Lời chúc', sectionId: 'guestbook' },
];

interface NavigationProps {
  coupleNames?: string;
}

export default function Navigation({ coupleNames = 'Nam & Nga' }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Determine active section based on scroll position
      const scrollY = window.scrollY + 100;
      for (let i = navLinks.length - 1; i >= 0; i--) {
        const section = document.getElementById(navLinks[i].sectionId);
        if (section && section.offsetTop <= scrollY) {
          setActiveSection(navLinks[i].sectionId);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const scrollToSection = useCallback((sectionId: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-surface/95 shadow-md backdrop-blur-sm'
            : 'bg-transparent'
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          {/* Couple names / logo */}
          <button
            onClick={() => scrollToSection('hero')}
            className="font-script text-2xl text-primary transition-colors hover:text-primary-dark sm:text-3xl"
          >
            {coupleNames}
          </button>

          {/* Desktop nav links */}
          <ul className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <li key={link.sectionId}>
                <button
                  onClick={() => scrollToSection(link.sectionId)}
                  className={`relative rounded-full px-3 py-1.5 text-sm font-medium transition-colors lg:px-4 ${
                    activeSection === link.sectionId
                      ? 'text-primary'
                      : 'text-txt-light hover:text-primary'
                  }`}
                >
                  {link.label}
                  {activeSection === link.sectionId && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute inset-0 -z-10 rounded-full bg-primary/10"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-full text-txt transition-colors hover:bg-primary/10 hover:text-primary md:hidden"
            aria-label={isMobileMenuOpen ? 'Đóng menu' : 'Mở menu'}
          >
            {isMobileMenuOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
          </button>
        </nav>
      </header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="absolute top-0 right-0 bottom-0 w-72 bg-surface shadow-2xl"
            >
              {/* Close button area */}
              <div className="flex items-center justify-between border-b border-border px-6 py-4">
                <span className="font-script text-2xl text-primary">
                  {coupleNames}
                </span>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex h-10 w-10 items-center justify-center rounded-full text-txt-muted transition-colors hover:bg-primary/10 hover:text-primary"
                  aria-label="Đóng menu"
                >
                  <HiX size={22} />
                </button>
              </div>

              {/* Nav links */}
              <ul className="flex flex-col px-4 py-4">
                {navLinks.map((link, index) => (
                  <motion.li
                    key={link.sectionId}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <button
                      onClick={() => scrollToSection(link.sectionId)}
                      className={`flex w-full items-center rounded-lg px-4 py-3 text-left text-base font-medium transition-colors ${
                        activeSection === link.sectionId
                          ? 'bg-primary/10 text-primary'
                          : 'text-txt-light hover:bg-primary/5 hover:text-primary'
                      }`}
                    >
                      {link.label}
                    </button>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
