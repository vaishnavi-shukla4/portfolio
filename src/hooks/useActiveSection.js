import { useState, useEffect, useCallback } from 'react';

/**
 * useActiveSection – returns the id of the section currently in view.
 * Drives navbar highlighting without any external library dependency.
 */
export function useActiveSection(sectionIds, offset = 100) {
  const [active, setActive] = useState(sectionIds[0]);

  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;

    // Iterate in reverse so deepest visible section wins
    for (let i = sectionIds.length - 1; i >= 0; i--) {
      const el = document.getElementById(sectionIds[i]);
      if (el) {
        const top = el.getBoundingClientRect().top + scrollY - offset;
        if (scrollY >= top) {
          setActive(sectionIds[i]);
          return;
        }
      }
    }
    setActive(sectionIds[0]);
  }, [sectionIds, offset]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // run on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return active;
}
