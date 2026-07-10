import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import GithubIcon from './icons/GithubIcon';
import { projects } from '../data/portfolioData';
import { fadeUp, staggerContainer, staggerItem } from '../utils/animations';

/** Project gradient backgrounds for visual variety */
const PROJECT_VISUALS = [
  {
    bg: 'linear-gradient(135deg, #442f2a 0%, #6b4c45 50%, #2d1f1b 100%)',
    pattern: '🤖 AI · NLP · LLM',
  },
  {
    bg: 'linear-gradient(135deg, #0f1a1a 0%, #1a3030 50%, #0a2020 100%)',
    pattern: '📚 RAG · Embeddings · PDF',
  },
  {
    bg: 'linear-gradient(135deg, #1a1a0f 0%, #2a2a10 50%, #442f2a 100%)',
    pattern: '🌿 CNN · IoT · Weather',
  },
];

/** Single project card */
function ProjectCard({ project, index }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const visual = PROJECT_VISUALS[index % PROJECT_VISUALS.length];

  return (
    <motion.article
      ref={ref}
      variants={staggerItem}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="card-light flex flex-col overflow-hidden group"
      aria-label={`Project: ${project.title}`}
      style={{ borderRadius: 24 }}
    >
      {/* Project visual header */}
      <div
        className="relative h-48 overflow-hidden flex-shrink-0"
        style={{ background: visual.bg }}
      >
        {/* Decorative pattern text */}
        <div
          className="absolute inset-0 flex items-center justify-center"
          aria-hidden="true"
        >
          <div
            className="text-center select-none"
            style={{ color: 'rgba(255,247,236,0.12)', fontSize: '0.7rem', letterSpacing: '0.3em' }}
          >
            {Array.from({ length: 20 }).map((_, i) => (
              <p key={i} className="font-mono">
                {visual.pattern}
              </p>
            ))}
          </div>
        </div>

        {/* Big emoji icon centered */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl transition-transform duration-300 group-hover:scale-110"
            style={{ background: 'rgba(255,247,236,0.12)', backdropFilter: 'blur(8px)' }}
          >
            {project.icon}
          </div>
        </div>

        {/* Index number */}
        <span
          className="absolute top-4 right-5 font-mono font-black select-none pointer-events-none"
          style={{ fontSize: '5rem', color: 'rgba(255,247,236,0.06)', lineHeight: 1 }}
          aria-hidden="true"
        >
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>

      {/* Card body */}
      <div className="p-7 flex flex-col flex-1 gap-4">
        <div>
          <h3
            className="font-semibold text-lg mb-1 leading-tight"
            style={{ color: '#442f2a' }}
          >
            {project.title}
          </h3>
          <p
            className="text-xs font-medium"
            style={{ color: 'rgba(68,47,42,0.45)' }}
          >
            {project.subtitle}
          </p>
        </div>

        <p
          className="text-sm leading-relaxed flex-1"
          style={{ color: 'rgba(68,47,42,0.65)' }}
        >
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5">
          {project.tech.slice(0, 6).map((t) => (
            <span
              key={t}
              className="px-2.5 py-1 rounded-md text-xs font-mono font-medium"
              style={{
                background: 'rgba(68,47,42,0.06)',
                color: 'rgba(68,47,42,0.65)',
                border: '1px solid rgba(68,47,42,0.08)',
              }}
            >
              {t}
            </span>
          ))}
          {project.tech.length > 6 && (
            <span
              className="px-2.5 py-1 rounded-md text-xs font-mono"
              style={{ color: 'rgba(68,47,42,0.4)' }}
            >
              +{project.tech.length - 6} more
            </span>
          )}
        </div>

        {/* Links */}
        <div
          className="flex items-center gap-3 pt-3"
          style={{ borderTop: '1px solid rgba(68,47,42,0.06)' }}
        >
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm font-medium transition-all duration-200 hover:scale-105"
            style={{ color: '#442f2a' }}
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
              className="flex items-center gap-1.5 text-sm font-medium transition-all duration-200 hover:scale-105"
              style={{ color: 'rgba(68,47,42,0.6)' }}
              aria-label={`Live demo for ${project.title}`}
            >
              <ExternalLink size={15} />
              Live Demo
            </a>
          ) : (
            <span
              className="flex items-center gap-1.5 text-xs"
              style={{ color: 'rgba(68,47,42,0.3)' }}
            >
              <ExternalLink size={13} />
              Demo Soon
            </span>
          )}

          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ x: 4 }}
            className="ml-auto text-xs font-medium transition-colors"
            style={{ color: 'rgba(68,47,42,0.35)' }}
            aria-label={`Explore ${project.title}`}
          >
            Explore →
          </motion.a>
        </div>
      </div>
    </motion.article>
  );
}

/**
 * Projects – cream background, editorial card grid with project visuals.
 */
export default function Projects() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section
      id="projects"
      className="relative py-28 md:py-36 overflow-hidden"
      style={{ background: '#fff7ec' }}
    >
      {/* Decorative blob */}
      <div
        className="absolute bottom-[-10%] left-[-5%] w-96 h-96 rounded-full pointer-events-none opacity-20"
        style={{ background: 'radial-gradient(circle, #f5cbd7, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          ref={ref}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="mb-16 md:mb-20"
        >
          <p
            className="section-label mb-3"
            style={{ color: 'rgba(68,47,42,0.45)' }}
          >
            What I've built
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2
              className="font-serif"
              style={{
                fontSize: 'clamp(2.8rem, 6vw, 5rem)',
                fontWeight: 600,
                color: '#442f2a',
                lineHeight: 1.05,
                letterSpacing: '-0.01em',
              }}
            >
              Featured{' '}
              <span style={{ color: 'rgba(68,47,42,0.4)' }}>Projects</span>
            </h2>
            <p
              className="md:max-w-xs text-sm leading-relaxed"
              style={{ color: 'rgba(68,47,42,0.55)' }}
            >
              End-to-end systems spanning AI, full-stack, and data science — each solving a real problem.
            </p>
          </div>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}

          {/* Future project placeholder */}
          <motion.div
            variants={staggerItem}
            className="card-light flex flex-col items-center justify-center p-10 text-center min-h-[360px]"
            style={{ borderRadius: 24, border: '1.5px dashed rgba(68,47,42,0.15)' }}
          >
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-5"
              style={{ background: 'rgba(245,203,215,0.3)' }}
            >
              ✨
            </div>
            <p
              className="font-semibold text-base mb-2"
              style={{ color: 'rgba(68,47,42,0.5)' }}
            >
              Coming Soon
            </p>
            <p
              className="text-xs leading-relaxed"
              style={{ color: 'rgba(68,47,42,0.35)' }}
            >
              More exciting projects in the pipeline. Stay tuned!
            </p>
          </motion.div>
        </motion.div>

        {/* GitHub CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          transition={{ delay: 0.4 }}
          className="text-center mt-14"
        >
          <a
            href="https://github.com/vaishnavi-shukla4"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-dark inline-flex"
            id="view-all-github"
          >
            <GithubIcon size={16} />
            View all on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
