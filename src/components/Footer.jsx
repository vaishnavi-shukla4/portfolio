import { Mail, Heart } from 'lucide-react';
import GithubIcon from './icons/GithubIcon';
import LinkedinIcon from './icons/LinkedinIcon';

/**
 * Footer – minimal footer with links and copyright.
 */
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div className="text-center md:text-left">
          <p className="font-mono font-bold text-sm mb-1">
            <span className="gradient-text">VS</span>
            <span className="text-slate-500">.dev</span>
          </p>
          <p className="text-slate-600 text-xs">
            Built with React + Tailwind + Framer Motion
          </p>
        </div>

        {/* Nav links */}
        <div className="flex items-center gap-6 text-sm text-slate-500">
          {['home', 'about', 'projects', 'education', 'contact'].map((id) => (
            <button
              key={id}
              onClick={() =>
                document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
              }
              className="hover:text-violet-400 transition-colors capitalize"
            >
              {id}
            </button>
          ))}
        </div>

        {/* Social icons */}
        <div className="flex items-center gap-3">
          {[
            { href: 'https://github.com/vaishnavi-shukla4', icon: <GithubIcon size={17} />, label: 'GitHub' },
            { href: 'https://www.linkedin.com/in/vaishnavi-shuklaa/', icon: <LinkedinIcon size={17} />, label: 'LinkedIn' },
            { href: 'mailto:vaishnavi@example.com', icon: <Mail size={17} />, label: 'Email' },
          ].map(({ href, icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="p-2 rounded-lg text-slate-600 hover:text-violet-400 hover:bg-violet-500/10 transition-all duration-200"
            >
              {icon}
            </a>
          ))}
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="mt-6 text-center">
        <p className="text-slate-700 text-xs flex items-center justify-center gap-1.5">
          © {year} Vaishnavi Shukla · Made with{' '}
          <Heart size={11} className="text-violet-500" fill="currentColor" />
        </p>
      </div>
    </footer>
  );
}
