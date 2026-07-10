import { Mail, ArrowUp } from 'lucide-react';
import GithubIcon from './icons/GithubIcon';
import LinkedinIcon from './icons/LinkedinIcon';
import { personalInfo } from '../data/portfolioData';

const NAV_LINKS = ['home', 'about', 'projects', 'skills', 'education', 'contact'];

/**
 * Footer – minimal noir footer with social links, nav links, and back-to-top.
 */
export default function Footer() {
  const year = new Date().getFullYear();

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer
      className="relative overflow-hidden"
      style={{ background: '#070d0d', borderTop: '1px solid rgba(245,203,215,0.06)' }}
    >
      {/* Subtle top glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px pointer-events-none"
        style={{ background: 'linear-gradient(to right, transparent, rgba(245,203,215,0.3), transparent)' }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-10 items-center">

          {/* Brand */}
          <div>
            <button
              onClick={scrollToTop}
              className="font-serif text-xl font-semibold mb-2 block text-left transition-opacity hover:opacity-70"
              style={{ color: '#fff7ec' }}
              aria-label="Back to top"
            >
              VS
              <span
                className="font-sans text-xs font-normal ml-0.5"
                style={{ color: 'rgba(255,247,236,0.35)' }}
              >
                .portfolio
              </span>
            </button>
            <p
              className="text-xs"
              style={{ color: 'rgba(255,247,236,0.3)' }}
            >
              Built with React · Tailwind · Framer Motion
            </p>
          </div>

          {/* Nav links */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
              {NAV_LINKS.map((id) => (
                <li key={id}>
                  <button
                    onClick={() => scrollTo(id)}
                    className="text-xs font-medium transition-colors capitalize"
                    style={{ color: 'rgba(255,247,236,0.35)' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'rgba(255,247,236,0.75)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,247,236,0.35)')}
                  >
                    {id}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social icons + back-to-top */}
          <div className="flex items-center justify-end gap-3">
            {[
              { href: personalInfo.github, icon: <GithubIcon size={16} />, label: 'GitHub' },
              { href: personalInfo.linkedin, icon: <LinkedinIcon size={16} />, label: 'LinkedIn' },
              { href: `mailto:${personalInfo.email}`, icon: <Mail size={16} />, label: 'Email' },
            ].map(({ href, icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? '_self' : '_blank'}
                rel="noopener noreferrer"
                aria-label={label}
                className="p-2.5 rounded-xl transition-all duration-200"
                style={{ color: 'rgba(255,247,236,0.35)', border: '1px solid rgba(255,247,236,0.08)' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#f5cbd7';
                  e.currentTarget.style.borderColor = 'rgba(245,203,215,0.3)';
                  e.currentTarget.style.background = 'rgba(245,203,215,0.06)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'rgba(255,247,236,0.35)';
                  e.currentTarget.style.borderColor = 'rgba(255,247,236,0.08)';
                  e.currentTarget.style.background = 'transparent';
                }}
              >
                {icon}
              </a>
            ))}

            {/* Back to top */}
            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="p-2.5 rounded-xl transition-all duration-200 ml-1"
              style={{ color: 'rgba(255,247,236,0.35)', border: '1px solid rgba(255,247,236,0.08)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#f5cbd7';
                e.currentTarget.style.borderColor = 'rgba(245,203,215,0.3)';
                e.currentTarget.style.background = 'rgba(245,203,215,0.06)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'rgba(255,247,236,0.35)';
                e.currentTarget.style.borderColor = 'rgba(255,247,236,0.08)';
                e.currentTarget.style.background = 'transparent';
              }}
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>

        {/* Bottom copyright */}
        <div
          className="mt-10 pt-6 text-center"
          style={{ borderTop: '1px solid rgba(255,247,236,0.05)' }}
        >
          <p
            className="text-xs"
            style={{ color: 'rgba(255,247,236,0.2)' }}
          >
            © {year} Vaishnavi Shukla · All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
