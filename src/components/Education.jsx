import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar } from 'lucide-react';
import { education } from '../data/portfolioData';
import { fadeUp } from '../utils/animations';

/** Single timeline entry */
function TimelineEntry({ item, index }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const isLeft = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`relative flex items-start gap-6 ${
        isLeft ? 'flex-row' : 'flex-row-reverse'
      } md:w-1/2 ${isLeft ? 'md:pr-12 md:self-start' : 'md:pl-12 md:self-end md:ml-auto'}`}
    >
      {/* Timeline dot (visible only on MD+) */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={inView ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 0.4, delay: index * 0.15 }}
        className={`hidden md:flex absolute ${
          isLeft ? 'right-[-7px]' : 'left-[-7px]'
        } top-6 w-4 h-4 rounded-full bg-gradient-to-br from-violet-500 to-cyan-400 z-10 shadow-[0_0_16px_rgba(124,58,237,0.7)]`}
        aria-hidden="true"
      />

      {/* Mobile dot */}
      <div className="md:hidden timeline-dot mt-1.5 flex-shrink-0" aria-hidden="true" />

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
        className="glass-card flex-1 p-6"
      >
        <div className="flex items-start justify-between gap-4 mb-3">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-violet-500/10 border border-violet-500/20 text-violet-400">
              <GraduationCap size={18} />
            </div>
            <div>
              <h3 className="font-bold text-white text-base leading-tight">
                {item.degree}
              </h3>
              <p className="text-violet-400 text-sm font-medium">{item.institution}</p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4 mb-4 flex-wrap">
          <span className="flex items-center gap-1.5 text-xs text-slate-500 font-mono">
            <Calendar size={12} />
            {item.duration}
          </span>
          {item.cgpa && (
            <span className="flex items-center gap-1.5 text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-2.5 py-0.5">
              <Award size={11} />
              CGPA {item.cgpa}
            </span>
          )}
        </div>

        <p className="text-slate-400 text-sm leading-relaxed mb-4">
          {item.description}
        </p>

        {/* Highlight chips */}
        <div className="flex flex-wrap gap-2">
          {item.highlights.map((h) => (
            <span
              key={h}
              className="px-2.5 py-1 rounded-full bg-navy-800 border border-white/5 text-slate-400 text-xs"
            >
              {h}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

/**
 * Education – vertical alternating timeline with scroll-reveal animations.
 */
export default function Education() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="education" className="py-28 relative overflow-hidden">
      <div
        className="glow-orb w-[300px] h-[300px] right-[-80px] top-1/4 opacity-10"
        style={{ background: 'radial-gradient(circle, #7c3aed, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          ref={ref}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <p className="font-mono text-violet-400 text-sm tracking-widest uppercase mb-3">
            Academic journey
          </p>
          <h2 className="section-title text-white">
            My <span className="gradient-text">Education</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Central vertical line (MD+) */}
          <div
            className="hidden md:block absolute left-1/2 -translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-violet-500/60 via-cyan-500/40 to-transparent"
            aria-hidden="true"
          />

          {/* Mobile: simple left border */}
          <div
            className="md:hidden absolute left-[7px] top-0 bottom-0 w-px bg-gradient-to-b from-violet-500/60 to-transparent"
            aria-hidden="true"
          />

          <div className="flex flex-col gap-12 md:gap-0 pl-8 md:pl-0">
            {education.map((item, i) => (
              <div key={item.id} className="md:relative md:flex md:mb-16">
                <TimelineEntry item={item} index={i} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
