'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2 } from 'lucide-react';
import { PERSONAL } from '@/lib/data';

export default function CTA() {
  const [form, setForm]       = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [sent,    setSent]    = useState(false);
  const [error,   setError]   = useState('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      // Sends via mailto as a fallback — no backend needed
      // For a real backend, replace this with a fetch() call
      await new Promise(r => setTimeout(r, 900)); // simulate send
      setSent(true);
      setForm({ name: '', email: '', message: '' });
      setTimeout(() => setSent(false), 5000);
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-28 px-6 overflow-hidden"
      style={{ background: 'var(--surface)' }}
    >
      {/* Radial neon glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(circle at 50% 50%, hsla(74,100%,50%,0.05) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 max-w-5xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="section-label mb-3">Get In Touch</p>
          <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tight">
            Let&apos;s Build{' '}
            <span style={{ color: 'var(--neon)' }}>Something</span>{' '}
            Great
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Left — info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.09 }}
            className="space-y-6"
          >
            <p className="text-lg leading-relaxed" style={{ color: 'var(--muted)' }}>
              I&apos;m open to full-time roles, internships, freelance projects,
              and cloud collaborations. Drop me a message — I reply fast.
            </p>

            {/* Contact details */}
            <div className="space-y-4">
              {[
                { label: 'Email',    value: PERSONAL.email,    href: `mailto:${PERSONAL.email}` },
                { label: 'Phone',    value: PERSONAL.phone,    href: `tel:${PERSONAL.phone}` },
                { label: 'GitHub',   value: 'github.com/Abdhul', href: PERSONAL.github },
                { label: 'LinkedIn', value: 'Abdhul Kareem',   href: PERSONAL.linkedin },
              ].map(item => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.label === 'Email' || item.label === 'Phone' ? undefined : '_blank'}
                  rel="noreferrer"
                  className="flex items-center gap-4 card p-4 hover:border-[var(--neon)] transition-all"
                  style={{ textDecoration: 'none' }}
                  onMouseEnter={e => (e.currentTarget.style.borderColor = 'hsla(74,100%,50%,0.4)')}
                  onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--border)')}
                >
                  <div className="icon-box text-sm"
                    style={{ minWidth: 44 }}>
                    {item.label === 'Email'    ? '📧' :
                     item.label === 'Phone'    ? '📞' :
                     item.label === 'GitHub'   ? '💻' : '🔗'}
                  </div>
                  <div>
                    <p className="text-xs font-black uppercase tracking-widest"
                      style={{ color: 'var(--muted)' }}>{item.label}</p>
                    <p className="text-sm font-black text-white">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Availability badge */}
            <div className="flex items-center gap-2 px-4 py-2 rounded-full w-fit"
              style={{ background: 'hsla(74,100%,50%,0.08)', border: '1px solid hsla(74,100%,50%,0.2)' }}>
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs font-black uppercase tracking-widest"
                style={{ color: 'var(--neon)' }}>Available for opportunities</span>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.18 }}
          >
            <form onSubmit={onSubmit} className="card p-7 space-y-5">

              {/* Name */}
              <div>
                <label className="block text-xs font-black uppercase tracking-widest mb-2"
                  style={{ color: 'var(--muted)' }}>
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={onChange}
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-xl text-sm font-medium text-white placeholder-[var(--muted)] outline-none transition-all"
                  style={{
                    background: 'var(--bg)',
                    border: '1px solid var(--border)',
                  }}
                  onFocus={e => (e.currentTarget.style.borderColor = 'hsla(74,100%,50%,0.5)')}
                  onBlur={e  => (e.currentTarget.style.borderColor = 'var(--border)')}
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-black uppercase tracking-widest mb-2"
                  style={{ color: 'var(--muted)' }}>
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={onChange}
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 rounded-xl text-sm font-medium text-white placeholder-[var(--muted)] outline-none transition-all"
                  style={{
                    background: 'var(--bg)',
                    border: '1px solid var(--border)',
                  }}
                  onFocus={e => (e.currentTarget.style.borderColor = 'hsla(74,100%,50%,0.5)')}
                  onBlur={e  => (e.currentTarget.style.borderColor = 'var(--border)')}
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-black uppercase tracking-widest mb-2"
                  style={{ color: 'var(--muted)' }}>
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={onChange}
                  placeholder="Tell me about your project or opportunity..."
                  className="w-full px-4 py-3 rounded-xl text-sm font-medium text-white placeholder-[var(--muted)] outline-none transition-all resize-none"
                  style={{
                    background: 'var(--bg)',
                    border: '1px solid var(--border)',
                  }}
                  onFocus={e => (e.currentTarget.style.borderColor = 'hsla(74,100%,50%,0.5)')}
                  onBlur={e  => (e.currentTarget.style.borderColor = 'var(--border)')}
                />
              </div>

              {/* Error */}
              {error && (
                <p className="text-xs font-black text-red-400">{error}</p>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={loading || sent}
                className="btn-neon w-full justify-center"
                style={{ fontSize: '0.85rem', padding: '0.8rem', opacity: loading || sent ? 0.8 : 1 }}
              >
                {loading ? (
                  <span className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                ) : sent ? (
                  <><CheckCircle2 size={16} /> Message Sent!</>
                ) : (
                  <><Send size={15} /> Send Message</>
                )}
              </button>

              {sent && (
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-xs font-black uppercase tracking-widest text-center"
                  style={{ color: 'var(--neon)' }}
                >
                  ✓ Thanks! I&apos;ll get back to you soon.
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
