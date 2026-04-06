import { lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';

// Lazy-load below-the-fold sections for performance
const About     = lazy(() => import('./components/About'));
const Projects  = lazy(() => import('./components/Projects'));
const Education = lazy(() => import('./components/Education'));
const Contact   = lazy(() => import('./components/Contact'));

/** Lightweight section skeleton while lazy chunk loads */
function SectionSkeleton() {
  return (
    <div className="py-28 flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-violet-500/30 border-t-violet-500 rounded-full animate-spin" />
    </div>
  );
}

/**
 * App – root shell. Navbar + each section in order.
 * Below-the-fold sections are lazily loaded for performance.
 */
export default function App() {
  return (
    <div className="min-h-screen bg-navy-950 text-slate-200 relative">
      {/* Subtle noise texture overlay */}
      <div className="noise-overlay" aria-hidden="true" />

      {/* Navigation */}
      <Navbar />

      {/* Main content – semantic landmark */}
      <main id="main-content">
        {/* Hero loads immediately (above the fold) */}
        <Hero />

        <Suspense fallback={<SectionSkeleton />}>
          <About />
        </Suspense>

        <Suspense fallback={<SectionSkeleton />}>
          <Projects />
        </Suspense>

        <Suspense fallback={<SectionSkeleton />}>
          <Education />
        </Suspense>

        <Suspense fallback={<SectionSkeleton />}>
          <Contact />
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}
