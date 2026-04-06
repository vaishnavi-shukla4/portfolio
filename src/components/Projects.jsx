import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight } from 'lucide-react';
import GithubIcon from './icons/GithubIcon';
import { projects } from '../data/portfolioData';
import { fadeUp, staggerContainer, staggerItem } from '../utils/animations';

const COLOR_CONFIG = {
  violet: {
    icon: 'bg-violet-500/15 border-violet-500/30',
    badge: 'bg-violet-500/10 border-violet-500/25 text-violet-300',
    accent: 'from-violet-500/20 to-transparent',
    glow: 'hover:shadow-[0_8px_40px_rgba(124,58,237,0.3)]',
    tag: 'border-violet-500/40 text-violet-400',
    number: 'text-violet-500/30',
  },
  cyan: {
    icon: 'bg-cyan-500/15 border-cyan-500/30',
    badge: 'bg-cyan-500/10 border-cyan-500/25 text-cyan-300',
    accent: 'from-cyan-500/20 to-transparent',
    glow: 'hover:shadow-[0_8px_40px_rgba(6,182,212,0.3)]',
    tag: 'border-cyan-500/40 text-cyan-400',
    number: 'text-cyan-500/30',
  },
  pink: {
    icon: 'bg-pink-500/15 border-pink-500/30',
    badge: 'bg-pink-500/10 border-pink-500/25 text-pink-300',
    accent: 'from-pink-500/20 to-transparent',
    glow: 'hover:shadow-[0_8px_40px_rgba(244,114,182,0.3)]',
    tag: 'border-pink-500/40 text-pink-400',
    number: 'text-pink-500/30',
  },
};

/** Single project card */
function ProjectCard({ project, index }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });
  const c = COLOR_CONFIG[project.color];

  return (
    <motion.article
      ref={ref}
      variants={staggerItem}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      whileHover={{ y: -8 }}
      transition={{ type: 'spring', stiffness: 300, damping: 24 }}
      className={`glass-card relative overflow-hidden flex flex-col transition-shadow duration-300 ${c.glow}`}
      aria-label={`Project: ${project.title}`}
    >
      {/* Top gradient accent stripe */}
      <div className={`absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r ${c.accent} via-current`} />

      {/* Large faded project number */}
      <span
        className={`absolute top-4 right-5 font-mono text-6xl font-black select-none pointer-events-none ${c.number}`}
        aria-hidden="true"
      >
        {String(index + 1).padStart(2, '0')}
      </span>

      <div className="p-7 flex flex-col flex-1 gap-5">
        {/* Icon + title */}
        <div className="flex items-start gap-4">
          <div
            className={`w-12 h-12 rounded-xl border flex items-center justify-center text-2xl flex-shrink-0 ${c.icon}`}
            aria-hidden="true"
          >
            {project.icon}
          </div>
          <div className="flex-1 min-w-0 pr-10">
            <h3 className="font-bold text-white text-lg leading-tight mb-1">
              {project.title}
            </h3>
            <p className={`text-xs font-medium border rounded-md px-2 py-0.5 inline-block ${c.tag}`}>
              {project.subtitle}
            </p>
          </div>
        </div>

        {/* Description */}
        <p className="text-slate-400 text-sm leading-relaxed flex-1">
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-2.5 py-1 rounded-md bg-navy-800 border border-white/5 text-slate-400 text-xs font-mono"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-3 pt-2 border-t border-white/5">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-violet-400 transition-colors font-medium"
            aria-label={`View ${project.title} on GitHub`}
          >
            <GithubIcon size={15} />
            GitHub
          </a>
          {project.live ? (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-cyan-400 transition-colors font-medium"
              aria-label={`View ${project.title} live demo`}
            >
              <ExternalLink size={15} />
              Live Demo
            </a>
          ) : (
            <span className="flex items-center gap-1.5 text-sm text-slate-600 cursor-not-allowed select-none">
              <ExternalLink size={15} />
              Demo Soon
            </span>
          )}

          <span className="ml-auto">
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ x: 4 }}
              className="flex items-center gap-1 text-xs text-slate-500 hover:text-violet-400 transition-colors"
              aria-label={`Explore ${project.title}`}
            >
              Explore <ArrowRight size={12} />
            </motion.a>
          </span>
        </div>
      </div>
    </motion.article>
  );
}

/**
 * Projects – featured project cards in a responsive 3-column grid.
 */
export default function Projects() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="projects" className="py-28 relative">
      {/* bg orb */}
      <div
        className="glow-orb w-[400px] h-[400px] left-[-150px] top-1/3 opacity-10"
        style={{ background: 'radial-gradient(circle, #06b6d4, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          ref={ref}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <p className="font-mono text-cyan-400 text-sm tracking-widest uppercase mb-3">
            What I've built
          </p>
          <h2 className="section-title text-white">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle mt-4 max-w-xl mx-auto">
            End-to-end systems spanning AI, full-stack, and data science — each
            solving a real problem.
          </p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-7"
        >
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </motion.div>

        {/* GitHub CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          transition={{ delay: 0.5 }}
          className="text-center mt-14"
        >
          <a
            href="https://github.com/vaishnavi-shukla4"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex"
            id="view-all-github"
          >
            <GithubIcon size={18} />
            View all on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
