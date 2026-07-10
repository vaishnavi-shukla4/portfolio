import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { Mail, Send, CheckCircle, AlertCircle, MapPin } from 'lucide-react';
import GithubIcon from './icons/GithubIcon';
import LinkedinIcon from './icons/LinkedinIcon';
import { personalInfo } from '../data/portfolioData';
import { fadeUp, staggerContainer, staggerItem } from '../utils/animations';

const SOCIALS = [
  {
    id: 'email',
    label: 'Email',
    handle: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    icon: <Mail size={20} />,
  },
  {
    id: 'github',
    label: 'GitHub',
    handle: '@vaishnavi-shukla4',
    href: personalInfo.github,
    icon: <GithubIcon size={20} />,
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    handle: 'vaishnavi-shuklaa',
    href: personalInfo.linkedin,
    icon: <LinkedinIcon size={20} />,
  },
  {
    id: 'location',
    label: 'Location',
    handle: personalInfo.location,
    href: null,
    icon: <MapPin size={20} />,
  },
];

/** Contact form with validation */
function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.trim()) {
      e.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = 'Enter a valid email';
    }
    if (!form.subject.trim()) e.subject = 'Subject is required';
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
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setStatus('sending');
    await new Promise((r) => setTimeout(r, 1500));
    setStatus('success');
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  const inputBase = `form-input`;
  const labelStyle = { color: 'rgba(68,47,42,0.7)', fontSize: '0.85rem', fontWeight: 500 };

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5" aria-label="Contact form">
      {/* Name + Email row */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="contact-name" className="block mb-1.5" style={labelStyle}>
            Full Name
          </label>
          <input
            id="contact-name" name="name" type="text" autoComplete="name"
            value={form.name} onChange={handleChange} placeholder="Vaishnavi Shukla"
            className={`${inputBase} ${errors.name ? 'form-input-error' : ''}`}
          />
          {errors.name && (
            <p className="mt-1 text-xs flex items-center gap-1" style={{ color: '#dc3c3c' }}>
              <AlertCircle size={11} /> {errors.name}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="contact-email" className="block mb-1.5" style={labelStyle}>
            Email Address
          </label>
          <input
            id="contact-email" name="email" type="email" autoComplete="email"
            value={form.email} onChange={handleChange} placeholder="you@example.com"
            className={`${inputBase} ${errors.email ? 'form-input-error' : ''}`}
          />
          {errors.email && (
            <p className="mt-1 text-xs flex items-center gap-1" style={{ color: '#dc3c3c' }}>
              <AlertCircle size={11} /> {errors.email}
            </p>
          )}
        </div>
      </div>

      {/* Subject */}
      <div>
        <label htmlFor="contact-subject" className="block mb-1.5" style={labelStyle}>
          Subject
        </label>
        <input
          id="contact-subject" name="subject" type="text"
          value={form.subject} onChange={handleChange} placeholder="Internship Opportunity / Collaboration"
          className={`${inputBase} ${errors.subject ? 'form-input-error' : ''}`}
        />
        {errors.subject && (
          <p className="mt-1 text-xs flex items-center gap-1" style={{ color: '#dc3c3c' }}>
            <AlertCircle size={11} /> {errors.subject}
          </p>
        )}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="contact-message" className="block mb-1.5" style={labelStyle}>
          Message
        </label>
        <textarea
          id="contact-message" name="message" rows={5}
          value={form.message} onChange={handleChange}
          placeholder="Tell me about your project, opportunity, or just say hello..."
          className={`${inputBase} resize-none ${errors.message ? 'form-input-error' : ''}`}
        />
        {errors.message && (
          <p className="mt-1 text-xs flex items-center gap-1" style={{ color: '#dc3c3c' }}>
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
        className="btn-noir w-full"
        style={{ opacity: status === 'sending' || status === 'success' ? 0.75 : 1 }}
      >
        {status === 'sending' ? (
          <>
            <motion.span
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
              className="w-4 h-4 border-2 rounded-full"
              style={{ borderColor: 'rgba(255,247,236,0.3)', borderTopColor: '#fff7ec' }}
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
      </motion.button>

      {status === 'success' && (
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center text-sm flex items-center justify-center gap-1.5"
          style={{ color: 'rgba(68,47,42,0.7)' }}
        >
          <CheckCircle size={14} />
          Thanks! I'll get back to you within 24 hours.
        </motion.p>
      )}
    </form>
  );
}

/**
 * Contact – cream section with side-by-side layout: socials left, form right.
 */
export default function Contact() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.08 });

  return (
    <section
      id="contact"
      className="relative py-28 md:py-36 overflow-hidden"
      style={{ background: '#fff7ec' }}
    >
      {/* Decorative blush blob */}
      <div
        className="absolute top-1/2 right-[-8%] -translate-y-1/2 w-80 h-80 rounded-full pointer-events-none opacity-25"
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
            Get in touch
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
              Let's{' '}
              <span style={{ color: 'rgba(68,47,42,0.4)' }}>Connect</span>
            </h2>
            <p
              className="md:max-w-xs text-sm leading-relaxed"
              style={{ color: 'rgba(68,47,42,0.55)' }}
            >
              Open to internships, full-time roles, and interesting collaborations. Drop me a message!
            </p>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* ── Left: Info + Socials ─────────────────────────────────── */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="space-y-4"
          >
            {/* Intro card */}
            <motion.div
              variants={staggerItem}
              className="card-light p-7"
            >
              <h3
                className="font-serif text-xl font-semibold mb-1"
                style={{ color: '#442f2a' }}
              >
                Vaishnavi Shukla
              </h3>
              <p
                className="text-sm mb-4"
                style={{ color: 'rgba(68,47,42,0.5)' }}
              >
                B.Tech CSE · Manipal University Jaipur · Class of 2027
              </p>
              <p
                className="text-sm leading-relaxed"
                style={{ color: 'rgba(68,47,42,0.65)' }}
              >
                I'm actively looking for opportunities to build impactful products
                at the intersection of AI and software engineering. Let's create
                something meaningful together.
              </p>
            </motion.div>

            {/* Social links */}
            {SOCIALS.map((s) => {
              const content = (
                <motion.div
                  key={s.id}
                  variants={staggerItem}
                  whileHover={{ x: 6 }}
                  className="card-light flex items-center gap-4 p-5 transition-shadow group"
                  style={{ cursor: s.href ? 'pointer' : 'default' }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-200 group-hover:bg-[rgba(245,203,215,0.4)]"
                    style={{
                      background: 'rgba(245,203,215,0.2)',
                      color: '#442f2a',
                    }}
                  >
                    {s.icon}
                  </div>
                  <div className="min-w-0">
                    <p
                      className="font-medium text-sm"
                      style={{ color: '#442f2a' }}
                    >
                      {s.label}
                    </p>
                    <p
                      className="text-xs font-mono truncate"
                      style={{ color: 'rgba(68,47,42,0.5)' }}
                    >
                      {s.handle}
                    </p>
                  </div>
                  {s.href && (
                    <span
                      className="ml-auto text-lg transition-opacity opacity-30 group-hover:opacity-70"
                      style={{ color: '#442f2a' }}
                    >
                      →
                    </span>
                  )}
                </motion.div>
              );

              return s.href ? (
                <a
                  key={s.id}
                  id={`social-${s.id}`}
                  href={s.href}
                  target={s.href.startsWith('mailto') ? '_self' : '_blank'}
                  rel="noopener noreferrer"
                  aria-label={`${s.label}: ${s.handle}`}
                >
                  {content}
                </a>
              ) : (
                <div key={s.id} id={`social-${s.id}`}>{content}</div>
              );
            })}
          </motion.div>

          {/* ── Right: Form ──────────────────────────────────────────── */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            transition={{ delay: 0.15 }}
            className="card-light p-8 md:p-10"
          >
            <h3
              className="font-serif text-xl font-semibold mb-7"
              style={{ color: '#442f2a' }}
            >
              Send a Message
            </h3>
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
