import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { skillCategories } from '../data/portfolioData';
import { fadeUp, staggerContainer, fastStagger, fastStaggerItem } from '../utils/animations';

/**
 * Skills – dark section with categorized skill chips on noir background.
 * Seven categories, each chip shows icon + name with blush hover.
 */
export default function Skills() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.06 });
  const [activeCategory, setActiveCategory] = useState(null);

  const visibleCategories = activeCategory
    ? skillCategories.filter((c) => c.id === activeCategory)
    : skillCategories;

  return (
    <section
      id="skills"
      className="relative py-28 md:py-36 overflow-hidden"
      style={{ background: '#070d0d' }}
    >
      {/* Decorative glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none opacity-5"
        style={{ background: 'radial-gradient(circle, #f5cbd7, transparent 65%)' }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        {/* Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="mb-16"
        >
          <p
            className="section-label mb-3"
            style={{ color: 'rgba(245,203,215,0.4)' }}
          >
            What I work with
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
            Skills &{' '}
            <span style={{ color: 'rgba(255,247,236,0.35)' }}>Tools</span>
          </h2>
        </motion.div>

        {/* Category filter tabs */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap gap-2 mb-14"
        >
          <button
            onClick={() => setActiveCategory(null)}
            className="px-4 py-2 rounded-full text-xs font-medium transition-all duration-200"
            style={{
              background: activeCategory === null ? 'rgba(245,203,215,0.18)' : 'rgba(245,203,215,0.06)',
              border: `1px solid ${activeCategory === null ? 'rgba(245,203,215,0.4)' : 'rgba(245,203,215,0.12)'}`,
              color: activeCategory === null ? '#fff7ec' : 'rgba(255,247,236,0.5)',
            }}
          >
            All
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(activeCategory === cat.id ? null : cat.id)}
              className="px-4 py-2 rounded-full text-xs font-medium transition-all duration-200"
              style={{
                background: activeCategory === cat.id ? 'rgba(245,203,215,0.18)' : 'rgba(245,203,215,0.04)',
                border: `1px solid ${activeCategory === cat.id ? 'rgba(245,203,215,0.4)' : 'rgba(245,203,215,0.1)'}`,
                color: activeCategory === cat.id ? '#fff7ec' : 'rgba(255,247,236,0.45)',
              }}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Skill categories */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="space-y-12"
        >
          {visibleCategories.map((category) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              layout
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-5">
                <span
                  className="text-base"
                  style={{ color: 'rgba(245,203,215,0.6)' }}
                  aria-hidden="true"
                >
                  {category.icon}
                </span>
                <h3
                  className="section-label"
                  style={{ color: 'rgba(245,203,215,0.5)' }}
                >
                  {category.label}
                </h3>
                <div
                  className="flex-1 h-px"
                  style={{ background: 'rgba(245,203,215,0.08)' }}
                />
              </div>

              {/* Skill chips */}
              <motion.div
                variants={fastStagger}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                className="flex flex-wrap gap-3"
              >
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={fastStaggerItem}
                    whileHover={{ y: -4, scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                    className="skill-chip skill-chip-dark group"
                  >
                    <span
                      className="text-base flex-shrink-0 transition-transform duration-200 group-hover:scale-110"
                      role="img"
                      aria-hidden="true"
                    >
                      {skill.icon}
                    </span>
                    <span className="font-medium">{skill.name}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
