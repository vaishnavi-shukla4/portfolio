import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { ExternalLink, Terminal } from 'lucide-react';
import { fadeUp, staggerContainer, staggerItem } from '../utils/animations';

const PROFILES = [
  {
    id: 'leetcode',
    name: 'LeetCode',
    username: 'Vaishnavi_Shukla_',
    description: 'DSA • Problem Solving',
    url: 'https://leetcode.com/u/Vaishnavi_Shukla_/',
    domain: 'leetcode.com',
    brandColor: '#FFA116',
    bgGradient: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 40%, #0f3460 100%)',
    iconBg: 'rgba(255,161,22,0.15)',
    Logo: ({ size = 24 }) => (
      <svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zM9.167 15.028a1.382 1.382 0 0 0-.002 0c-.376 0-.745.156-1.013.432a1.39 1.39 0 0 0 .011 1.96l4.45 4.321a1.381 1.381 0 0 0 1.947-.01 1.39 1.39 0 0 0-.01-1.96l-4.45-4.322a1.381 1.381 0 0 0-.933-.42z" />
      </svg>
    ),
  },
  {
    id: 'hackerrank',
    name: 'HackerRank',
    username: 'vaishnavishukla6',
    description: 'Algorithms • Logic',
    url: 'https://www.hackerrank.com/profile/vaishnavishukla6',
    domain: 'hackerrank.com',
    brandColor: '#00EA64',
    bgGradient: 'linear-gradient(135deg, #0d1117 0%, #161b22 100%)',
    iconBg: 'rgba(0, 234, 100, 0.15)',
    Logo: ({ size = 24 }) => (
      <svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path d="M11.967 0C5.357 0 0 5.358 0 11.968c0 6.608 5.357 11.967 11.967 11.967 6.611 0 11.968-5.36 11.968-11.967C23.935 5.358 18.578 0 11.967 0zM14.99 17.51h-2.16v-3.766h-1.688V17.51H8.98V6.438h2.162v3.74h1.688V6.438h2.16V17.51z" />
      </svg>
    ),
  },
];

/**
 * CodingProfiles – dark section showcasing coding/problem-solving profiles.
 */
export default function CodingProfiles() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.08 });

  return (
    <section
      id="coding"
      className="relative pt-28 md:pt-36 overflow-hidden"
      style={{ background: '#070d0d' }}
    >
      {/* Decorative blush blob */}
      <div
        className="absolute top-[-10%] right-[-5%] w-96 h-96 rounded-full pointer-events-none opacity-5"
        style={{ background: 'radial-gradient(circle, #f5cbd7, transparent 65%)' }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-6 pb-12">
        {/* Section heading */}
        <motion.div
          ref={ref}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="mb-12 md:mb-16"
        >
          <p
            className="section-label mb-3"
            style={{ color: 'rgba(245,203,215,0.4)' }}
          >
            Problem solving
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
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
              Coding{' '}
              <span style={{ color: 'rgba(255,247,236,0.35)' }}>Profiles</span>
            </h2>
            <p
              className="md:max-w-xs text-sm leading-relaxed"
              style={{ color: 'rgba(255,247,236,0.55)' }}
            >
              Consistent practice in data structures, algorithms, and competitive thinking.
            </p>
          </div>
        </motion.div>

        {/* Profile cards grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto"
        >
          {PROFILES.map((profile) => (
            <motion.div
              key={profile.id}
              variants={staggerItem}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="card-dark w-full overflow-hidden group"
              style={{ borderRadius: 24 }}
            >
              {/* Card header — Branded */}
              <div
                className="relative h-32 overflow-hidden flex items-center justify-center"
                style={{ background: profile.bgGradient }}
              >
                {/* Subtle grid pattern */}
                <div
                  className="absolute inset-0 opacity-[0.04]"
                  style={{
                    backgroundImage:
                      'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                    backgroundSize: '24px 24px',
                  }}
                  aria-hidden="true"
                />

                {/* Branding */}
                <div className="relative flex items-center gap-3 z-10">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                    style={{ background: profile.iconBg, color: profile.brandColor }}
                  >
                    <profile.Logo size={26} />
                  </div>
                  <div>
                    <p
                      className="font-semibold text-base"
                      style={{ color: '#fff7ec' }}
                    >
                      {profile.name}
                    </p>
                    <p
                      className="text-xs font-medium"
                      style={{ color: 'rgba(255,247,236,0.5)' }}
                    >
                      {profile.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Card body */}
              <div className="p-7 space-y-6">
                {/* Username */}
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(245,203,215,0.1)', border: '1px solid rgba(245,203,215,0.2)', color: '#f5cbd7' }}
                  >
                    <profile.Logo size={18} />
                  </div>
                  <div className="min-w-0">
                    <p
                      className="font-semibold text-sm"
                      style={{ color: '#fff7ec' }}
                    >
                      {profile.username}
                    </p>
                    <p
                      className="text-xs font-mono"
                      style={{ color: 'rgba(255,247,236,0.5)' }}
                    >
                      {profile.domain}
                    </p>
                  </div>
                </div>

                {/* View Profile link */}
                <motion.a
                  href={profile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  className="btn-outline-light w-full"
                  aria-label={`View ${profile.name} profile`}
                  style={{ fontSize: '0.85rem' }}
                >
                  View Profile
                  <ExternalLink size={14} />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
