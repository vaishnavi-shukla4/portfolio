import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { skills } from '../data/portfolioData';
import { fadeUp, staggerContainer, staggerItem } from '../utils/animations';

const CATEGORY_COLORS = {
  Languages: 'violet',
  Frameworks: 'cyan',
  Tools: 'emerald',
  'ML / AI': 'pink',
};

const COLOR_MAP = {
  violet: {
    bar: 'from-violet-600 to-violet-400',
    badge: 'bg-violet-500/10 border-violet-500/30 text-violet-300',
    glow: 'shadow-[0_0_12px_rgba(139,92,246,0.5)]',
    heading: 'text-violet-400',
  },
  cyan: {
    bar: 'from-cyan-600 to-cyan-400',
    badge: 'bg-cyan-500/10 border-cyan-500/30 text-cyan-300',
    glow: 'shadow-[0_0_12px_rgba(6,182,212,0.5)]',
    heading: 'text-cyan-400',
  },
  emerald: {
    bar: 'from-emerald-600 to-emerald-400',
    badge: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300',
    glow: 'shadow-[0_0_12px_rgba(52,211,153,0.5)]',
    heading: 'text-emerald-400',
  },
  pink: {
    bar: 'from-pink-600 to-pink-400',
    badge: 'bg-pink-500/10 border-pink-500/30 text-pink-300',
    glow: 'shadow-[0_0_12px_rgba(244,114,182,0.5)]',
    heading: 'text-pink-400',
  },
};

/** Animated skill progress bar */
function SkillBar({ name, level, color, delay }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const c = COLOR_MAP[color];

  return (
    <div ref={ref} className="group">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm font-medium text-slate-300">{name}</span>
        <span className={`text-xs font-mono font-medium ${c.heading}`}>{level}%</span>
      </div>
      <div className="h-1.5 w-full bg-navy-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.1, delay, ease: [0.22, 1, 0.36, 1] }}
          className={`h-full rounded-full bg-gradient-to-r ${c.bar} ${inView ? c.glow : ''}`}
        />
      </div>
    </div>
  );
}

/**
 * About – personal intro, photo placeholder, and animated skill bars.
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
        {/* Section heading */}
        <motion.div
          ref={ref}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <p className="font-mono text-violet-400 text-sm tracking-widest uppercase mb-3">
            Get to know me
          </p>
          <h2 className="section-title text-white">
            About <span className="gradient-text">Me</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* ── Left: Bio ─────────────────────────────────────────── */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            transition={{ delay: 0.1 }}
          >
            {/* Avatar / initials block */}
            <div className="flex items-center gap-5 mb-8">
              <div className="relative flex-shrink-0">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-violet-600 to-cyan-500 flex items-center justify-center text-2xl font-bold text-white shadow-glow-violet">
                  VS
                </div>
                {/* Online dot */}
                <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-400 border-2 border-navy-950" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Vaishnavi Shukla</h3>
                <p className="text-slate-400 text-sm">
                  B.Tech CSE · Manipal University Jaipur
                </p>
                <p className="font-mono text-violet-400 text-sm mt-0.5">CGPA: 8.84</p>
              </div>
            </div>

            <div className="space-y-4 text-slate-300 leading-relaxed mb-8">
              <p>
                I'm a Computer Science student passionate about building intelligent
                systems that bridge the gap between cutting-edge research and
                real-world impact. I love the intersection of{' '}
                <span className="text-violet-400 font-medium">machine learning</span>{' '}
                and{' '}
                <span className="text-cyan-400 font-medium">
                  full-stack development
                </span>
                .
              </p>
              <p>
                From LLM-powered resume tools to computer vision plant-health apps,
                I've built end-to-end systems using Python, FastAPI, React, and
                modern ML stacks. I'm driven by clean architecture, async performance,
                and thoughtful UX.
              </p>
              <p>
                Currently seeking opportunities where I can push the boundaries of
                AI-powered product development.
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

          {/* ── Right: Skills ─────────────────────────────────────── */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="space-y-8"
          >
            {Object.entries(skills).map(([category, items]) => {
              const color = CATEGORY_COLORS[category];
              const c = COLOR_MAP[color];
              return (
                <motion.div key={category} variants={staggerItem}>
                  <h4 className={`font-mono text-xs tracking-widest uppercase mb-4 ${c.heading}`}>
                    {category}
                  </h4>
                  <div className="glass-card p-5 space-y-4">
                    {items.map((skill, i) => (
                      <SkillBar
                        key={skill.name}
                        name={skill.name}
                        level={skill.level}
                        color={color}
                        delay={i * 0.08}
                      />
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
