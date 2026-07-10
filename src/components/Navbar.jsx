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
 * Navbar – adaptive navbar that switches between cream (light sections) and
 * noir (dark sections) backgrounds based on active scroll section.
 */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const active = useActiveSection(SECTIONS);

  // Determine if currently in a dark section
  const isDarkSection = ['skills', 'education'].includes(active);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const textColor = isDarkSection
    ? 'text-cream-100'
    : 'text-grey-brown-DEFAULT';

  const navBg = scrolled
    ? isDarkSection
      ? 'nav-scrolled-dark'
      : 'nav-scrolled-light'
    : 'bg-transparent';

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg} ${scrolled ? 'py-3' : 'py-5'}`}
      >
        <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollTo('home')}
            className={`font-serif font-semibold text-xl tracking-tight transition-colors duration-300 ${isDarkSection ? 'text-cream-100' : 'text-[#442f2a]'}`}
            aria-label="Go to top"
          >
            VS
            <span className={`font-sans text-sm font-normal ml-0.5 opacity-60`}>
              .portfolio
            </span>
          </button>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-1">
            {SECTIONS.map((id) => (
              <li key={id}>
                <button
                  onClick={() => scrollTo(id)}
                  id={`nav-${id}`}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200
                    ${active === id
                      ? isDarkSection
                        ? 'text-[#fff7ec]'
                        : 'text-[#442f2a]'
                      : isDarkSection
                        ? 'text-[rgba(255,247,236,0.55)] hover:text-[rgba(255,247,236,0.9)]'
                        : 'text-[rgba(68,47,42,0.5)] hover:text-[#442f2a]'
                    }
                  `}
                >
                  {NAV_LABELS[id]}
                  {active === id && (
                    <motion.span
                      layoutId="nav-indicator"
                      className={`absolute inset-0 rounded-lg ${isDarkSection ? 'bg-white/8' : 'bg-[#442f2a]/6'}`}
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
            className={`hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 border ${
              isDarkSection
                ? 'border-[rgba(245,203,215,0.25)] text-[rgba(255,247,236,0.7)] hover:border-[rgba(245,203,215,0.5)] hover:text-[#fff7ec] hover:bg-white/5'
                : 'border-[rgba(68,47,42,0.2)] text-[rgba(68,47,42,0.7)] hover:border-[rgba(68,47,42,0.4)] hover:text-[#442f2a] hover:bg-[rgba(68,47,42,0.05)]'
            }`}
          >
            GitHub ↗
          </a>

          {/* Mobile menu toggle */}
          <button
            className={`md:hidden p-2 transition-colors ${isDarkSection ? 'text-[rgba(255,247,236,0.7)] hover:text-[#fff7ec]' : 'text-[rgba(68,47,42,0.6)] hover:text-[#442f2a]'}`}
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
            transition={{ duration: 0.25 }}
            className="fixed top-[62px] left-0 right-0 z-40 md:hidden"
            style={{ background: 'rgba(255,247,236,0.97)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(68,47,42,0.08)' }}
          >
            <ul className="flex flex-col px-6 py-4 gap-1">
              {SECTIONS.map((id) => (
                <li key={id}>
                  <button
                    onClick={() => scrollTo(id)}
                    className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-colors
                      ${active === id
                        ? 'text-[#442f2a] bg-[rgba(68,47,42,0.07)]'
                        : 'text-[rgba(68,47,42,0.6)] hover:text-[#442f2a] hover:bg-[rgba(68,47,42,0.04)]'
                      }
                    `}
                  >
                    {NAV_LABELS[id]}
                  </button>
                </li>
              ))}
              <li className="mt-2 pt-2 border-t border-[rgba(68,47,42,0.08)]">
                <a
                  href="https://github.com/vaishnavi-shukla4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-3 text-sm font-medium text-[rgba(68,47,42,0.6)] hover:text-[#442f2a]"
                >
                  GitHub ↗
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
