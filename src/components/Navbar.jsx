import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useActiveSection } from '../hooks/useActiveSection';

const SECTIONS = ['home', 'about', 'skills', 'projects', 'education', 'contact'];
const NAV_LABELS = {
  home: 'Home',
  about: 'About',
  skills: 'Skills',
  projects: 'Projects',
  education: 'Education',
  contact: 'Contact',
};

/**
 * Navbar – sticky navigation with active-section highlighting and mobile drawer.
 */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const active = useActiveSection(SECTIONS);

  // Background blur appears after scrolling 40px
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'glass border-b border-violet-500/10 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollTo('home')}
            className="font-mono font-bold text-lg tracking-tight group"
            aria-label="Go to top"
          >
            <span className="gradient-text">VS</span>
            <span className="text-slate-400 group-hover:text-slate-200 transition-colors">
              .dev
            </span>
          </button>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-1">
            {SECTIONS.map((id) => (
              <li key={id}>
                <button
                  onClick={() => scrollTo(id)}
                  id={`nav-${id}`}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200
                    ${active === id ? 'text-violet-400' : 'text-slate-400 hover:text-slate-200'}
                  `}
                >
                  {NAV_LABELS[id]}
                  {/* Active underline indicator */}
                  {active === id && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute inset-0 rounded-lg bg-violet-500/10"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    />
                  )}
                </button>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <a
            href="https://github.com/vaishnavi-shukla4"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-violet-500/30 text-violet-400 text-sm font-medium hover:bg-violet-500/10 hover:border-violet-500/60 transition-all duration-200"
          >
            GitHub ↗
          </a>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden p-2 text-slate-400 hover:text-slate-200 transition-colors"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Toggle menu"
            id="mobile-menu-toggle"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[60px] left-0 right-0 z-40 glass border-b border-violet-500/10 md:hidden"
          >
            <ul className="flex flex-col px-6 py-4 gap-1">
              {SECTIONS.map((id) => (
                <li key={id}>
                  <button
                    onClick={() => scrollTo(id)}
                    className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors
                      ${active === id
                        ? 'text-violet-400 bg-violet-500/10'
                        : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
                      }
                    `}
                  >
                    {NAV_LABELS[id]}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
