import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download, Mail } from 'lucide-react';
import GithubIcon from './icons/GithubIcon';
import LinkedinIcon from './icons/LinkedinIcon';
import { personalInfo } from '../data/portfolioData';

const ROLES = [
  'Software Engineer',
  'AI/ML Enthusiast',
  'Full-Stack Developer',
  'Backend Developer',
  'Problem Solver',
];

/**
 * Hero – two-column editorial layout with photo right, animated text left,
 * floating decorative elements, and cursor interaction.
 */
export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: -300, y: -300 });
  const heroRef = useRef(null);

  // Typewriter effect
  useEffect(() => {
    const currentRole = ROLES[roleIdx];
    let timeout;

    if (!isDeleting) {
      if (displayText.length < currentRole.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        }, 75);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 2200);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 38);
      } else {
        setIsDeleting(false);
        setRoleIdx((i) => (i + 1) % ROLES.length);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIdx]);

  // Cursor glow tracking
  useEffect(() => {
    const handleMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: '#fff7ec' }}
    >
      {/* Cursor glow */}
      <div
        className="cursor-glow hidden lg:block"
        style={{ left: cursorPos.x, top: cursorPos.y }}
        aria-hidden="true"
      />

      {/* Decorative floating shapes */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-[12%] right-[8%] w-20 h-20 rounded-full opacity-40 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #f5cbd7, #fae4ec)' }}
        aria-hidden="true"
      />
      <motion.div
        animate={{ y: [0, 15, 0], rotate: [0, -8, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute bottom-[20%] right-[18%] w-12 h-12 rounded-full opacity-30 pointer-events-none"
        style={{ background: '#f5cbd7' }}
        aria-hidden="true"
      />
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute top-[30%] left-[6%] w-8 h-8 rounded-full opacity-20 pointer-events-none"
        style={{ background: '#442f2a' }}
        aria-hidden="true"
      />
      {/* Decorative ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        className="absolute top-[8%] left-[15%] w-32 h-32 rounded-full pointer-events-none opacity-10"
        style={{ border: '1px dashed #442f2a' }}
        aria-hidden="true"
      />
      {/* Large blush blob bottom-left */}
      <div
        className="absolute bottom-[-10%] left-[-5%] w-80 h-80 rounded-full pointer-events-none opacity-20"
        style={{ background: 'radial-gradient(circle, #f5cbd7, transparent 70%)' }}
        aria-hidden="true"
      />

      {/* Main layout */}
      <div className="max-w-6xl mx-auto px-6 w-full py-28 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-screen">

          {/* ── Left: Content ─────────────────────────────────────── */}
          <div className="flex flex-col justify-center">
            {/* Eyebrow badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="inline-flex items-center gap-2.5 mb-7 self-start"
            >
              <span
                className="w-2 h-2 rounded-full animate-pulse-slow"
                style={{ background: '#442f2a' }}
              />
              <span className="section-label text-[#442f2a] opacity-60">
                B.Tech CSE · Manipal University Jaipur · Class of 2027
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif mb-3"
              style={{
                fontSize: 'clamp(3.2rem, 8vw, 6rem)',
                fontWeight: 600,
                lineHeight: 1.02,
                color: '#442f2a',
                letterSpacing: '-0.02em',
              }}
            >
              Vaishnavi
              <br />
              <span style={{ color: '#442f2a', opacity: 0.85 }}>Shukla</span>
            </motion.h1>

            {/* Typewriter role */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex items-center gap-2 mb-6"
              style={{ minHeight: '2rem' }}
            >
              <span
                className="text-lg font-medium"
                style={{ color: 'rgba(68,47,42,0.55)' }}
              >
                {displayText}
              </span>
              <span
                className="w-0.5 h-5 animate-pulse rounded-full"
                style={{ background: '#f5cbd7' }}
              />
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55 }}
              className="text-base leading-relaxed mb-10 max-w-lg"
              style={{ color: 'rgba(68,47,42,0.65)' }}
            >
              4th-year Computer Science Engineering student passionate about
              software engineering, AI-powered applications, scalable backend
              systems, and building intuitive user experiences.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="flex flex-wrap items-center gap-3 mb-10"
            >
              <a
                href={personalInfo.resumeUrl}
                id="cta-resume"
                className="btn-noir"
                aria-label="Download Resume"
              >
                <Download size={15} />
                <span>Resume</span>
              </a>
              <button
                id="cta-contact"
                className="btn-outline-dark"
                onClick={() => scrollTo('contact')}
                aria-label="Go to contact section"
              >
                <Mail size={15} />
                <span>Contact Me</span>
              </button>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex items-center gap-4"
            >
              {[
                { icon: <GithubIcon size={18} />, href: personalInfo.github, label: 'GitHub' },
                { icon: <LinkedinIcon size={18} />, href: personalInfo.linkedin, label: 'LinkedIn' },
                { icon: <Mail size={18} />, href: `mailto:${personalInfo.email}`, label: 'Email' },
              ].map(({ icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ scale: 1.12, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2.5 rounded-xl transition-all duration-200"
                  style={{
                    color: 'rgba(68,47,42,0.5)',
                    border: '1px solid rgba(68,47,42,0.12)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#442f2a';
                    e.currentTarget.style.borderColor = 'rgba(68,47,42,0.3)';
                    e.currentTarget.style.background = 'rgba(245,203,215,0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'rgba(68,47,42,0.5)';
                    e.currentTarget.style.borderColor = 'rgba(68,47,42,0.12)';
                    e.currentTarget.style.background = 'transparent';
                  }}
                >
                  {icon}
                </motion.a>
              ))}
              <div
                className="h-4 w-px mx-1 opacity-20"
                style={{ background: '#442f2a' }}
              />
              <span className="text-xs font-mono" style={{ color: 'rgba(68,47,42,0.4)' }}>
                vaishnavishukla441@gmail.com
              </span>
            </motion.div>
          </div>

          {/* ── Right: Photo ───────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Blush background blob */}
              <div
                className="absolute -inset-6 rounded-[40px] opacity-40 blur-2xl"
                style={{ background: 'radial-gradient(circle, #f5cbd7, transparent 70%)' }}
                aria-hidden="true"
              />

              {/* Floating ring decorations */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                className="absolute -top-4 -right-4 w-20 h-20 rounded-full pointer-events-none"
                style={{ border: '1px solid rgba(245,203,215,0.5)' }}
                aria-hidden="true"
              />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
                className="absolute -bottom-4 -left-4 w-14 h-14 rounded-full pointer-events-none"
                style={{ border: '1px dashed rgba(68,47,42,0.2)' }}
                aria-hidden="true"
              />

              {/* Photo container */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="relative"
              >
                <div
                  className="relative overflow-hidden"
                  style={{
                    width: 'clamp(280px, 35vw, 420px)',
                    height: 'clamp(320px, 42vw, 500px)',
                    borderRadius: '32px',
                    boxShadow: '0 24px 80px rgba(68,47,42,0.18)',
                  }}
                >
                  <img
                    src="/profile.png"
                    alt="Vaishnavi Shukla – profile photo"
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                  {/* Subtle overlay gradient */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background: 'linear-gradient(to top, rgba(68,47,42,0.08) 0%, transparent 50%)',
                    }}
                  />
                </div>

                {/* Stats badges */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.1, duration: 0.5 }}
                  className="absolute -left-8 top-1/4 bg-white rounded-2xl px-4 py-3 shadow-medium"
                  style={{ border: '1px solid rgba(68,47,42,0.06)' }}
                >
                  <p className="text-xl font-bold font-serif text-[#442f2a]">8.85</p>
                  <p className="text-xs text-[rgba(68,47,42,0.5)] font-medium">CGPA</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.3, duration: 0.5 }}
                  className="absolute -right-8 bottom-1/4 bg-white rounded-2xl px-4 py-3 shadow-medium"
                  style={{ border: '1px solid rgba(68,47,42,0.06)' }}
                >
                  <p className="text-xl font-bold font-serif text-[#442f2a]">600+</p>
                  <p className="text-xs text-[rgba(68,47,42,0.5)] font-medium">DSA Problems</p>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        onClick={() => scrollTo('about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 group"
        style={{ color: 'rgba(68,47,42,0.4)' }}
        aria-label="Scroll to about section"
      >
        <span className="section-label text-[10px]" style={{ letterSpacing: '0.25em' }}>
          Explore
        </span>
        <div className="scroll-indicator">
          <ArrowDown size={14} />
        </div>
      </motion.button>
    </section>
  );
}
