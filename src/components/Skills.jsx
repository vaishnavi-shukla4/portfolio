import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { skills } from '../data/portfolioData';
import { fadeUp, staggerContainer, staggerItem } from '../utils/animations';

/** Category color mapping for skill pills */
const CATEGORY_COLORS = {
  Languages: {
    pill: 'bg-violet-500/10 border-violet-500/30 text-violet-300 hover:bg-violet-500/25 hover:border-violet-500/60 hover:shadow-[0_0_16px_rgba(139,92,246,0.35)]',
    heading: 'text-violet-400',
  },
  Frameworks: {
    pill: 'bg-cyan-500/10 border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/25 hover:border-cyan-500/60 hover:shadow-[0_0_16px_rgba(6,182,212,0.35)]',
    heading: 'text-cyan-400',
  },
  Tools: {
    pill: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300 hover:bg-emerald-500/25 hover:border-emerald-500/60 hover:shadow-[0_0_16px_rgba(52,211,153,0.35)]',
    heading: 'text-emerald-400',
  },
  'ML / AI': {
    pill: 'bg-pink-500/10 border-pink-500/30 text-pink-300 hover:bg-pink-500/25 hover:border-pink-500/60 hover:shadow-[0_0_16px_rgba(244,114,182,0.35)]',
    heading: 'text-pink-400',
  },
};

/** Role highlight cards at the top of the section */
const ROLE_CARDS = [
  {
    emoji: '💻',
    title: 'Full-Stack Developer',
    description:
      'End-to-end application development with React, FastAPI, and modern databases.',
    gradient: 'from-violet-600/20 to-cyan-600/20',
    border: 'border-violet-500/20 hover:border-violet-500/50',
    glow: 'hover:shadow-[0_8px_40px_rgba(124,58,237,0.2)]',
  },
  {
    emoji: '🧠',
    title: 'Problem Solver',
    description:
      'Strong DSA fundamentals with a focus on clean, efficient, and scalable solutions.',
    gradient: 'from-cyan-600/20 to-emerald-600/20',
    border: 'border-cyan-500/20 hover:border-cyan-500/50',
    glow: 'hover:shadow-[0_8px_40px_rgba(6,182,212,0.2)]',
  },
  {
    emoji: '🤖',
    title: 'AI / ML Enthusiast',
    description:
      'Building intelligent systems with TensorFlow, NLP, computer vision, and LLM APIs.',
    gradient: 'from-pink-600/20 to-violet-600/20',
    border: 'border-pink-500/20 hover:border-pink-500/50',
    glow: 'hover:shadow-[0_8px_40px_rgba(244,114,182,0.2)]',
  },
];

/**
 * Skills – dedicated section showcasing role cards and categorized skill pills.
 */
export default function Skills() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="skills" className="py-28 relative overflow-hidden">
      {/* Background accents */}
      <div
        className="glow-orb w-[400px] h-[400px] left-[-120px] top-1/4 opacity-10"
        style={{ background: 'radial-gradient(circle, #06b6d4, transparent 70%)' }}
        aria-hidden="true"
      />
      <div
        className="glow-orb w-[300px] h-[300px] right-[-80px] bottom-1/4 opacity-10"
        style={{ background: 'radial-gradient(circle, #7c3aed, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-6">
        {/* Section heading */}
        <motion.div
          ref={ref}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <p className="font-mono text-violet-400 text-sm tracking-widest uppercase mb-3">
            What I work with
          </p>
          <h2 className="section-title text-white">
            My Skill <span className="gradient-text">Set</span>
          </h2>
        </motion.div>

        {/* ── Role Cards ──────────────────────────────────────────── */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20"
        >
          {ROLE_CARDS.map(({ emoji, title, description, gradient, border, glow }) => (
            <motion.div
              key={title}
              variants={staggerItem}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className={`glass-card p-6 bg-gradient-to-br ${gradient} ${border} ${glow} transition-all duration-300 cursor-default`}
            >
              <span className="text-3xl mb-4 block">{emoji}</span>
              <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* ── Skill Categories with Pill Tags ─────────────────────── */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="space-y-12"
        >
          {Object.entries(skills).map(([category, items]) => {
            const colors = CATEGORY_COLORS[category];
            return (
              <motion.div key={category} variants={staggerItem}>
                <h4
                  className={`font-mono text-sm tracking-widest uppercase mb-5 ${colors.heading}`}
                >
                  {category}
                </h4>
                <div className="flex flex-wrap gap-3">
                  {items.map((skill) => (
                    <motion.span
                      key={skill.name}
                      whileHover={{ y: -3, scale: 1.05 }}
                      whileTap={{ scale: 0.97 }}
                      className={`inline-flex items-center px-4 py-2 rounded-full border text-sm font-medium cursor-default transition-all duration-250 ${colors.pill}`}
                    >
                      {skill.name}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
