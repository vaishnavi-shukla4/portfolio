import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar, BookOpen } from 'lucide-react';
import { education } from '../data/portfolioData';
import { fadeUp } from '../utils/animations';

/** Single timeline entry */
function TimelineEntry({ item, index }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });
  const isFirst = index === 0;

  return (
    <div ref={ref} className="relative flex gap-6 md:gap-8">
      {/* Left column: dot + line */}
      <div className="flex flex-col items-center flex-shrink-0">
        {/* Dot */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          className="timeline-dot-outer"
        >
          <div
            className="w-3 h-3 rounded-full"
            style={{ background: '#f5cbd7' }}
          />
        </motion.div>
        {/* Vertical line (not on last item) */}
        {index < education.length - 1 && (
          <div
            className="flex-1 w-px mt-3 min-h-[60px]"
            style={{ background: 'linear-gradient(to bottom, rgba(245,203,215,0.4), rgba(245,203,215,0.05))' }}
          />
        )}
      </div>

      {/* Right column: card */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
        className="card-dark flex-1 p-6 md:p-8 mb-8"
      >
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-5">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ background: 'rgba(245,203,215,0.1)', border: '1px solid rgba(245,203,215,0.2)' }}
          >
            <GraduationCap size={18} style={{ color: '#f5cbd7' }} />
          </div>
          <div className="flex-1">
            <h3
              className="font-semibold text-base mb-1 leading-tight"
              style={{ color: '#fff7ec' }}
            >
              {item.degree}
            </h3>
            <p
              className="text-sm font-medium"
              style={{ color: 'rgba(245,203,215,0.7)' }}
            >
              {item.institution}
            </p>
          </div>
        </div>

        {/* Meta row */}
        <div className="flex flex-wrap gap-3 mb-5">
          <span
            className="flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded-full"
            style={{
              color: 'rgba(255,247,236,0.5)',
              background: 'rgba(255,247,236,0.05)',
              border: '1px solid rgba(255,247,236,0.08)',
            }}
          >
            <Calendar size={11} />
            {item.duration}
          </span>
          <span
            className="flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded-full"
            style={{
              color: 'rgba(245,203,215,0.9)',
              background: 'rgba(245,203,215,0.1)',
              border: '1px solid rgba(245,203,215,0.2)',
            }}
          >
            <Award size={11} />
            {item.score}
          </span>
        </div>

        <p
          className="text-sm leading-relaxed mb-5"
          style={{ color: 'rgba(255,247,236,0.55)' }}
        >
          {item.description}
        </p>

        {/* Coursework */}
        {item.coursework && item.coursework.length > 0 && (
          <div className="mb-4">
            <div className="flex items-center gap-2 mb-3">
              <BookOpen size={13} style={{ color: 'rgba(245,203,215,0.4)' }} />
              <p
                className="text-xs font-semibold tracking-widest uppercase"
                style={{ color: 'rgba(245,203,215,0.4)' }}
              >
                Coursework
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {item.coursework.map((c) => (
                <span
                  key={c}
                  className="px-2.5 py-1 rounded-md text-xs font-medium"
                  style={{
                    background: 'rgba(255,247,236,0.05)',
                    border: '1px solid rgba(255,247,236,0.08)',
                    color: 'rgba(255,247,236,0.5)',
                  }}
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Achievements */}
        {item.achievements && item.achievements.length > 0 && (
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Award size={13} style={{ color: 'rgba(245,203,215,0.4)' }} />
              <p
                className="text-xs font-semibold tracking-widest uppercase"
                style={{ color: 'rgba(245,203,215,0.4)' }}
              >
                Achievements
              </p>
            </div>
            <ul className="space-y-2">
              {item.achievements.map((a) => (
                <li
                  key={a}
                  className="flex items-start gap-2 text-xs leading-relaxed"
                  style={{ color: 'rgba(255,247,236,0.55)' }}
                >
                  <span
                    className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ background: '#f5cbd7' }}
                  />
                  {a}
                </li>
              ))}
            </ul>
          </div>
        )}
      </motion.div>
    </div>
  );
}

/**
 * Education – noir section with animated vertical timeline.
 */
export default function Education() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.06 });

  return (
    <section
      id="education"
      className="relative py-28 md:py-36 overflow-hidden"
      style={{ background: '#070d0d' }}
    >
      {/* Decorative glow top-right */}
      <div
        className="absolute top-0 right-[-5%] w-80 h-80 rounded-full pointer-events-none opacity-5"
        style={{ background: 'radial-gradient(circle, #f5cbd7, transparent 65%)' }}
        aria-hidden="true"
      />

      <div className="max-w-3xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          ref={ref}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="mb-16"
        >
          <p
            className="section-label mb-3"
            style={{ color: 'rgba(245,203,215,0.4)' }}
          >
            Academic journey
          </p>
          <h2
            className="font-serif"
            style={{
              fontSize: 'clamp(2.8rem, 6vw, 5rem)',
              fontWeight: 600,
              color: '#fff7ec',
              lineHeight: 1.05,
              letterSpacing: '-0.01em',
            }}
          >
            Education
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {education.map((item, i) => (
            <TimelineEntry key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
