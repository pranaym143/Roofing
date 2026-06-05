import React, { useState, useEffect } from 'react';
import { Shield, Menu, X, Phone, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const navLinks = [
    { label: 'About', target: 'about' },
    { label: 'Services', target: 'services' },
    { label: 'Portfolio', target: 'showcase' },
    { label: 'The Process', target: 'process' },
    { label: 'FAQ', target: 'faq' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div
        className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-4 transition-all duration-300 ${
          isScrolled 
            ? 'mt-2' 
            : 'mt-5'
        }`}
      >
        <div
          className={`glass-panel rounded-2xl transition-all duration-300 px-6 py-4 flex items-center justify-between ${
            isScrolled 
              ? 'bg-brand-bg/85 shadow-lg shadow-black/40 border-white/10' 
              : 'bg-brand-bg/40'
          }`}
        >
          {/* Logo */}
          <div 
            onClick={() => scrollToSection('hero')} 
            className="flex items-center space-x-3 cursor-pointer group"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-brand-red/10 border border-brand-red/30 transition-transform duration-500 group-hover:rotate-180">
              <Shield className="w-5 h-5 text-brand-red" />
              <div className="absolute inset-0 rounded-xl bg-brand-red/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div>
              <span className="font-display font-bold text-lg tracking-wider text-white">
                ROOFING <span className="text-brand-red">REDEFINED</span>
              </span>
              <p className="font-mono text-[9px] text-brand-muted tracking-[0.2em] uppercase leading-none mt-1">
                Luxury Architectural Armor
              </p>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.target)}
                className="text-sm font-medium text-brand-muted hover:text-white transition-colors cursor-pointer relative py-1 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-red transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Pulsing Status Dot indicator */}
            <div className="flex items-center space-x-2 text-xs text-brand-muted bg-neutral-900 border border-neutral-800 rounded-full py-1.5 px-3.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="font-mono tracking-wide">EMERGENCY ACTIVE</span>
            </div>

            <button
              onClick={() => scrollToSection('calculator')}
              className="group flex items-center space-x-2 bg-brand-red hover:bg-red-700 text-white font-medium text-sm py-2.5 px-5 rounded-xl cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-brand-red/20 active:scale-95"
            >
              <span>Instant Estimate</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="md:hidden flex items-center space-x-4">
            <a 
              href="tel:1-800-555-ROOF" 
              className="flex items-center justify-center p-2 rounded-xl bg-brand-red/10 border border-brand-red/20 text-brand-red"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-xl bg-white/5 border border-white/10 text-white cursor-pointer"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-full left-0 right-0 px-4 mt-2"
          >
            <div className="glass-panel rounded-2xl bg-brand-bg/95 backdrop-blur-xl p-6 shadow-2xl border-white/10">
              <nav className="flex flex-col space-y-4 mb-6">
                {navLinks.map((link) => (
                  <button
                    key={link.label}
                    onClick={() => scrollToSection(link.target)}
                    className="text-left text-base font-medium text-brand-muted hover:text-white py-2 border-b border-white/5 cursor-pointer"
                  >
                    {link.label}
                  </button>
                ))}
              </nav>

              <div className="flex flex-col space-y-3">
                <div className="flex items-center justify-between p-3 rounded-xl bg-neutral-900 border border-neutral-800">
                  <div className="flex items-center space-x-2 text-xs text-brand-muted">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <span className="font-mono">EMERGENCY LINE RE-DUMPED</span>
                  </div>
                  <a href="tel:1-800-555-ROOF" className="text-brand-red font-mono text-sm font-semibold">
                    1-800-555-7663
                  </a>
                </div>

                <button
                  onClick={() => scrollToSection('calculator')}
                  className="w-full text-center bg-brand-red hover:bg-red-700 text-white font-medium py-3 rounded-xl transition-all block cursor-pointer"
                >
                  Get Instant Estimate
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
