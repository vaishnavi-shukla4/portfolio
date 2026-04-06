import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { Mail, Send, CheckCircle, AlertCircle } from 'lucide-react';
import GithubIcon from './icons/GithubIcon';
import LinkedinIcon from './icons/LinkedinIcon';
import { fadeUp, staggerContainer, staggerItem } from '../utils/animations';

const SOCIALS = [
  {
    id: 'github',
    label: 'GitHub',
    handle: '@vaishnavi-shukla4',
    href: 'https://github.com/vaishnavi-shukla4',
    icon: <GithubIcon size={22} />,
    color: 'hover:text-violet-400 hover:border-violet-500/50 hover:bg-violet-500/5',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    handle: 'vaishnavi-shuklaa',
    href: 'https://www.linkedin.com/in/vaishnavi-shuklaa/',
    icon: <LinkedinIcon size={22} />,
    color: 'hover:text-cyan-400 hover:border-cyan-500/50 hover:bg-cyan-500/5',
  },
  {
    id: 'email',
    label: 'Email',
    handle: 'Open to reach out',
    href: 'mailto:vaishnavi@example.com',
    icon: <Mail size={22} />,
    color: 'hover:text-pink-400 hover:border-pink-500/50 hover:bg-pink-500/5',
  },
];

/** Simple email form with validation */
function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null); // 'sending' | 'success' | 'error'

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.trim()) {
      e.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = 'Enter a valid email';
    }
    if (!form.message.trim() || form.message.length < 10)
      e.message = 'Message must be at least 10 characters';
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name]) setErrors((err) => ({ ...err, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setStatus('sending');
    // Simulate async send (replace with actual API call / EmailJS / Formspree)
    await new Promise((r) => setTimeout(r, 1500));
    setStatus('success');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5" aria-label="Contact form">
      {/* Name */}
      <div>
        <label htmlFor="contact-name" className="block text-sm font-medium text-slate-300 mb-1.5">
          Name
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          autoComplete="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Your name"
          className={`form-input ${errors.name ? 'border-red-500/60' : ''}`}
        />
        {errors.name && (
          <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
            <AlertCircle size={11} /> {errors.name}
          </p>
        )}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="contact-email" className="block text-sm font-medium text-slate-300 mb-1.5">
          Email
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          value={form.email}
          onChange={handleChange}
          placeholder="your@email.com"
          className={`form-input ${errors.email ? 'border-red-500/60' : ''}`}
        />
        {errors.email && (
          <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
            <AlertCircle size={11} /> {errors.email}
          </p>
        )}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="contact-message" className="block text-sm font-medium text-slate-300 mb-1.5">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          value={form.message}
          onChange={handleChange}
          placeholder="Tell me about your project or opportunity..."
          className={`form-input resize-none ${errors.message ? 'border-red-500/60' : ''}`}
        />
        {errors.message && (
          <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
            <AlertCircle size={11} /> {errors.message}
          </p>
        )}
      </div>

      {/* Submit */}
      <motion.button
        id="contact-submit"
        type="submit"
        disabled={status === 'sending' || status === 'success'}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.97 }}
        className="btn-primary w-full disabled:opacity-70 disabled:cursor-not-allowed"
      >
        <span className="flex items-center justify-center gap-2">
          {status === 'sending' ? (
            <>
              <motion.span
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
              />
              Sending…
            </>
          ) : status === 'success' ? (
            <>
              <CheckCircle size={16} />
              Message Sent!
            </>
          ) : (
            <>
              <Send size={16} />
              Send Message
            </>
          )}
        </span>
      </motion.button>

      {status === 'success' && (
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center text-emerald-400 text-sm flex items-center justify-center gap-1.5"
        >
          <CheckCircle size={14} />
          Thanks! I'll get back to you soon.
        </motion.p>
      )}
    </form>
  );
}

/**
 * Contact – social links + validated contact form.
 */
export default function Contact() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="contact" className="py-28 relative overflow-hidden">
      <div
        className="glow-orb w-[500px] h-[500px] left-1/2 -translate-x-1/2 bottom-[-200px] opacity-10"
        style={{ background: 'radial-gradient(circle, #7c3aed, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          ref={ref}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <p className="font-mono text-violet-400 text-sm tracking-widest uppercase mb-3">
            Get in touch
          </p>
          <h2 className="section-title text-white">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="section-subtitle mt-4 max-w-lg mx-auto">
            Open to internships, full-time roles, and interesting projects. Drop me a
            message and I'll respond within 24 hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* ── Left: Socials + info ───────────────────────────── */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="space-y-6"
          >
            <motion.div variants={staggerItem} className="glass-card p-6">
              <h3 className="font-semibold text-white mb-1">
                Vaishnavi Shukla
              </h3>
              <p className="text-slate-400 text-sm mb-4">
                B.Tech CSE · Manipal University Jaipur
              </p>
              <p className="text-slate-300 text-sm leading-relaxed">
                I'm actively looking for opportunities to build impactful products
                at the intersection of AI and software engineering. Let's create
                something meaningful together.
              </p>
            </motion.div>

            {/* Social cards */}
            {SOCIALS.map((s) => (
              <motion.a
                key={s.id}
                id={`social-${s.id}`}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                variants={staggerItem}
                whileHover={{ x: 6 }}
                className={`flex items-center gap-4 glass-card p-5 text-slate-400 border border-white/5 transition-all duration-200 ${s.color}`}
                aria-label={`${s.label}: ${s.handle}`}
              >
                <div className="p-2.5 rounded-xl bg-white/5">{s.icon}</div>
                <div>
                  <p className="font-semibold text-sm text-slate-200">{s.label}</p>
                  <p className="text-xs text-slate-500 font-mono">{s.handle}</p>
                </div>
                <span className="ml-auto text-slate-600 text-lg">→</span>
              </motion.a>
            ))}
          </motion.div>

          {/* ── Right: Form ────────────────────────────────────── */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            transition={{ delay: 0.2 }}
            className="glass-card p-8"
          >
            <h3 className="font-semibold text-white mb-6 text-lg">Send a Message</h3>
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
