import { lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';

// Lazy-load below-the-fold sections for performance
const Quote     = lazy(() => import('./components/Quote'));
const About     = lazy(() => import('./components/About'));
const Skills    = lazy(() => import('./components/Skills'));
const Projects  = lazy(() => import('./components/Projects'));
const Education = lazy(() => import('./components/Education'));
const CodingProfiles = lazy(() => import('./components/CodingProfiles'));
const Contact   = lazy(() => import('./components/Contact'));

/** Section skeleton – minimal spinner for lazy-load fallback */
function SectionSkeleton() {
  return (
    <div className="py-32 flex items-center justify-center" style={{ background: '#fff7ec' }}>
      <div
        className="w-7 h-7 border-2 rounded-full animate-spin"
        style={{ borderColor: 'rgba(245,203,215,0.3)', borderTopColor: '#442f2a' }}
      />
    </div>
  );
}

/**
 * App – root shell.
 * Section order: Hero → Quote → About → Skills → Projects → Education → Contact → Footer
 */
export default function App() {
  return (
    <div className="min-h-screen relative" style={{ background: '#fff7ec', color: '#442f2a' }}>
      {/* Subtle noise texture overlay */}
      <div className="noise-overlay" aria-hidden="true" />

      {/* Navigation */}
      <Navbar />

      {/* Main content */}
      <main id="main-content">
        {/* Hero loads immediately (above the fold) */}
        <Hero />

        {/* Quote – dark interlude after hero */}
        <Suspense fallback={<div className="py-32" style={{ background: '#070d0d' }} />}>
          <Quote />
        </Suspense>

        <Suspense fallback={<SectionSkeleton />}>
          <About />
        </Suspense>

        <Suspense fallback={<div className="py-32" style={{ background: '#070d0d' }} />}>
          <Skills />
        </Suspense>

        <Suspense fallback={<SectionSkeleton />}>
          <Projects />
        </Suspense>

        <Suspense fallback={<div className="py-32" style={{ background: '#070d0d' }} />}>
          <Education />
        </Suspense>

        <Suspense fallback={<SectionSkeleton />}>
          <CodingProfiles />
        </Suspense>

        <Suspense fallback={<SectionSkeleton />}>
          <Contact />
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}
