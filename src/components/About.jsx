import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { Code2, Cpu, Lightbulb, Rocket, BookOpen, Heart } from 'lucide-react';
import { fadeUp, staggerContainer, staggerItem } from '../utils/animations';

const ABOUT_CARDS = [
  {
    icon: <Heart size={20} />,
    title: 'Who I Am',
    content:
      'A passionate Computer Science Engineering undergraduate at Manipal University Jaipur, driven by curiosity and a love for building things that matter. I thrive at the intersection of elegance and functionality.',
    accent: '#f5cbd7',
  },
  {
    icon: <Code2 size={20} />,
    title: 'What I Build',
    content:
      'End-to-end full-stack applications, AI-powered platforms with LLM and RAG pipelines, scalable backend systems with FastAPI and async task queues, and intuitive user experiences with React.',
    accent: '#f5cbd7',
  },
  {
    icon: <Cpu size={20} />,
    title: 'Areas of Interest',
    content:
      'Artificial Intelligence & Machine Learning, Natural Language Processing, Scalable Backend Systems, Computer Vision, and building developer tools that improve engineering workflows.',
    accent: '#f5cbd7',
  },
  {
    icon: <BookOpen size={20} />,
    title: 'Currently Learning',
    content:
      'Advanced system design patterns, distributed systems, cloud-native architectures on AWS, and deepening my expertise in RAG (Retrieval-Augmented Generation) pipelines and vector databases.',
    accent: '#f5cbd7',
  },
  {
    icon: <Lightbulb size={20} />,
    title: 'What Drives Me',
    content:
      'Clean code, thoughtful architecture, and the satisfaction of solving real problems at scale. I love bridging the gap between cutting-edge ML research and production-ready engineering.',
    accent: '#f5cbd7',
  },
  {
    icon: <Rocket size={20} />,
    title: 'Career Aspirations',
    content:
      'Seeking software engineering internships and full-time roles where I can contribute to impactful products, collaborate with world-class teams, and grow into a well-rounded engineer.',
    accent: '#f5cbd7',
  },
];

const STAT_ITEMS = [
  { value: '8.85', label: 'CGPA' },
  { value: '600+', label: 'DSA Problems' },
  { value: '3+', label: 'Projects Built' },
  { value: 'Top 2.23%', label: 'Amazon ML School' },
];

/**
 * About – editorial card grid with personal narrative and stats strip.
 */
export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.08 });

  return (
    <section
      id="about"
      className="relative py-28 md:py-36 overflow-hidden"
      style={{ background: '#fff7ec' }}
    >
      {/* Decorative blush blob top-right */}
      <div
        className="absolute top-[-10%] right-[-5%] w-80 h-80 rounded-full pointer-events-none opacity-25"
        style={{ background: 'radial-gradient(circle, #f5cbd7, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-6">
        {/* Section heading */}
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
            Get to know me
          </p>
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
            About <span style={{ color: 'rgba(68,47,42,0.4)' }}>Me</span>
          </h2>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-20"
        >
          {ABOUT_CARDS.map(({ icon, title, content }) => (
            <motion.div
              key={title}
              variants={staggerItem}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="card-light p-7 group cursor-default"
            >
              {/* Icon */}
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
                style={{
                  background: 'rgba(245,203,215,0.35)',
                  color: '#442f2a',
                }}
              >
                {icon}
              </div>
              <h3
                className="font-semibold text-base mb-3"
                style={{ color: '#442f2a' }}
              >
                {title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: 'rgba(68,47,42,0.62)' }}
              >
                {content}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats strip */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-px overflow-hidden rounded-2xl"
          style={{ background: 'rgba(68,47,42,0.08)' }}
        >
          {STAT_ITEMS.map(({ value, label }, i) => (
            <div
              key={label}
              className="flex flex-col items-center justify-center py-8 px-4 text-center"
              style={{ background: '#fff7ec' }}
            >
              <p
                className="font-serif font-semibold mb-1"
                style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', color: '#442f2a' }}
              >
                {value}
              </p>
              <p
                className="text-xs font-medium"
                style={{ color: 'rgba(68,47,42,0.45)', letterSpacing: '0.05em' }}
              >
                {label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}