import { useState, useEffect } from 'react';

/**
 * useTypewriter – loops through an array of strings with a typewriter effect.
 * @param {string[]} words    - array of strings to cycle through
 * @param {number}   speed    - typing speed in ms per character (default 80)
 * @param {number}   pause    - pause duration after full word (default 1800)
 * @param {number}   backSpeed - backspace speed in ms (default 40)
 */
export function useTypewriter(words, speed = 80, pause = 1800, backSpeed = 40) {
  const [displayed, setDisplayed] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (!words || words.length === 0) return;

    const currentWord = words[wordIndex % words.length];

    const delay = deleting ? backSpeed : speed;

    const timeout = setTimeout(() => {
      if (!deleting) {
        // Typing forward
        setDisplayed(currentWord.slice(0, charIndex + 1));
        if (charIndex + 1 === currentWord.length) {
          // Full word typed – pause then start deleting
          setTimeout(() => setDeleting(true), pause);
        } else {
          setCharIndex((c) => c + 1);
        }
      } else {
        // Backspacing
        setDisplayed(currentWord.slice(0, charIndex - 1));
        if (charIndex - 1 === 0) {
          setDeleting(false);
          setWordIndex((w) => (w + 1) % words.length);
          setCharIndex(0);
        } else {
          setCharIndex((c) => c - 1);
        }
      }
    }, delay);

    return () => clearTimeout(timeout);
  }, [words, wordIndex, charIndex, deleting, speed, pause, backSpeed]);

  return displayed;
}
