import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import GithubIcon from './icons/GithubIcon';
import { fadeUp } from '../utils/animations';

/**
 * About – clean personal intro section.
 * Left: profile photo | Right: profile card, bio, stats.
 */
export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="about" className="py-28 relative overflow-hidden">
      {/* background accent */}
      <div
        className="glow-orb w-[350px] h-[350px] right-[-100px] top-1/2 -translate-y-1/2 opacity-10"
        style={{ background: 'radial-gradient(circle, #7c3aed, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-6">
        {/* Section heading + top-right links */}
        <motion.div
          ref={ref}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="mb-16"
        >
          {/* Top row: heading centered, links top-right */}
          <div className="relative">
            {/* Links: GitHub + Resume */}
            <div className="flex items-center gap-3 justify-center md:justify-end mb-6 md:absolute md:right-0 md:top-0">
              <a
                href="https://github.com/vaishnavi-shukla4"
                target="_blank"
                rel="noopener noreferrer"
                id="about-github-link"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-violet-500/30 text-violet-400 text-sm font-medium hover:bg-violet-500/10 hover:border-violet-500/60 transition-all duration-200"
              >
                <GithubIcon size={16} />
                GitHub ↗
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download
                id="about-resume-btn"
                className="btn-primary !py-2 !px-5 !text-sm"
              >
                <span className="flex items-center gap-2">
                  <Download size={16} />
                  Resume
                </span>
              </a>
            </div>

            {/* Centered heading */}
            <div className="text-center">
              <p className="font-mono text-violet-400 text-sm tracking-widest uppercase mb-3">
                Get to know me
              </p>
              <h2 className="section-title text-white">
                About <span className="gradient-text">Me</span>
              </h2>
            </div>
          </div>
        </motion.div>

        {/* Two-column layout: Photo left | Info right */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* ── Left: Profile Photo ──────────────────────────────── */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            transition={{ delay: 0.1 }}
            className="flex justify-center"
          >
            <div className="relative group">
              {/* Gradient ring behind photo */}
              <div className="absolute -inset-1 bg-gradient-to-br from-violet-600 via-cyan-500 to-violet-600 rounded-2xl opacity-60 blur-sm group-hover:opacity-80 transition-opacity duration-500" />
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-[340px] lg:h-[340px] rounded-2xl overflow-hidden border-2 border-violet-500/30">
                <img
                  src="/profile.png"
                  alt="Vaishnavi Shukla – profile photo"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              {/* Decorative dots */}
              <div
                className="absolute -bottom-4 -right-4 w-24 h-24 opacity-20"
                style={{
                  backgroundImage:
                    'radial-gradient(circle, #a78bfa 1.5px, transparent 1.5px)',
                  backgroundSize: '12px 12px',
                }}
                aria-hidden="true"
              />
            </div>
          </motion.div>

          {/* ── Right: Profile Info + Bio + Stats ─────────────────── */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            transition={{ delay: 0.25 }}
          >
            {/* Profile card */}
            <div className="flex items-center gap-5 mb-8">
              <div className="relative flex-shrink-0">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-600 to-cyan-500 flex items-center justify-center text-xl font-bold text-white shadow-glow-violet">
                  VS
                </div>
                {/* Online dot */}
                <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-navy-950" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Vaishnavi Shukla</h3>
                <p className="text-slate-400 text-sm">
                  B.Tech CSE · Manipal University Jaipur
                </p>
                <p className="font-mono text-violet-400 text-sm mt-0.5">CGPA: 8.84</p>
              </div>
            </div>

            {/* Bio paragraphs — broken into smaller chunks for breathing room */}
            <div className="space-y-5 text-slate-300 leading-relaxed mb-10">
              <p>
                I'm a Computer Science student passionate about building
                intelligent systems that bridge the gap between cutting-edge
                research and real-world impact.
              </p>
              <p>
                I love the intersection of{' '}
                <span className="text-violet-400 font-medium">machine learning</span>{' '}
                and{' '}
                <span className="text-cyan-400 font-medium">
                  full-stack development
                </span>
                — from LLM-powered resume tools to computer vision plant-health apps.
              </p>
              <p>
                I've built end-to-end systems using Python, FastAPI, React, and
                modern ML stacks. I'm driven by clean architecture, async
                performance, and thoughtful UX.
              </p>
              <p className="text-slate-400 italic">
                Currently seeking opportunities where I can push the boundaries
                of AI-powered product development.
              </p>
            </div>

            {/* Stat chips */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { label: 'CGPA', value: '8.84' },
                { label: 'Projects', value: '3+' },
                { label: 'Stack', value: 'Full' },
              ].map(({ label, value }) => (
                <div key={label} className="glass-card p-4 text-center">
                  <p className="text-2xl font-bold gradient-text">{value}</p>
                  <p className="text-xs text-slate-500 mt-1 uppercase tracking-wider">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
