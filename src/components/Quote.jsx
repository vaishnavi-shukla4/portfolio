import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { revealText } from '../utils/animations';

/**
 * Quote – elegant full-bleed dark section with oversized quotation marks
 * and a centered inspirational quote. Subtly animated on scroll.
 */
export default function Quote() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.4 });

  return (
    <section
      id="quote"
      className="relative overflow-hidden py-28 md:py-40"
      style={{ background: '#070d0d' }}
      aria-label="Quote section"
    >
      {/* Subtle blush radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 50%, rgba(245,203,215,0.05) 0%, transparent 65%)',
        }}
        aria-hidden="true"
      />

      {/* Decorative lines */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 opacity-20"
        style={{ background: 'linear-gradient(to bottom, transparent, rgba(245,203,215,0.6))' }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-16 opacity-20"
        style={{ background: 'linear-gradient(to top, transparent, rgba(245,203,215,0.6))' }}
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto px-6 text-center" ref={ref}>
        {/* Oversized opening quote */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          aria-hidden="true"
        >
          <span
            className="font-serif block leading-none select-none"
            style={{
              fontSize: 'clamp(6rem, 18vw, 14rem)',
              color: 'rgba(245,203,215,0.12)',
              lineHeight: 0.7,
              marginBottom: '-1rem',
            }}
          >
            "
          </span>
        </motion.div>

        {/* Quote text */}
        <motion.blockquote
          variants={revealText}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          transition={{ delay: 0.2 }}
        >
          <p
            className="font-serif italic leading-snug"
            style={{
              fontSize: 'clamp(1.6rem, 4vw, 2.8rem)',
              color: 'rgba(255,247,236,0.88)',
              fontWeight: 400,
              letterSpacing: '-0.01em',
            }}
          >
            The best way to predict the future is to build it.
          </p>
        </motion.blockquote>

        {/* Attribution */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 flex items-center justify-center gap-4"
        >
          <div
            className="h-px w-12 opacity-30"
            style={{ background: '#f5cbd7' }}
          />
          <p
            className="text-sm font-medium tracking-widest uppercase"
            style={{ color: 'rgba(245,203,215,0.5)' }}
          >
            Alan Kay
          </p>
          <div
            className="h-px w-12 opacity-30"
            style={{ background: '#f5cbd7' }}
          />
        </motion.div>
      </div>
    </section>
  );
}
