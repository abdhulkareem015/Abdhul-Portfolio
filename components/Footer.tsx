'use client';

import { Zap } from 'lucide-react';
import { NAV_LINKS } from '@/lib/data';

export default function Footer() {
  const scrollTo = (id: string) =>
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer
      className="border-t py-10 px-6"
      style={{ borderColor: 'var(--border)', background: 'var(--bg)' }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo */}
        <button onClick={() => scrollTo('hero')} className="flex items-center">
          <span className="font-black text-sm tracking-tight uppercase">
            Abdhul
          </span>
        </button>

        {/* Nav links */}
        <div className="flex flex-wrap items-center justify-center gap-6">
          {NAV_LINKS.map(l => (
            <button
              key={l}
              onClick={() => scrollTo(l)}
              className="text-xs font-black uppercase tracking-widest transition-colors"
              style={{ color: 'var(--muted)' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--neon)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}
            >
              {l}
            </button>
          ))}
        </div>

        {/* Copyright */}
        <p
          className="text-xs font-black uppercase tracking-widest"
          style={{ color: 'var(--muted)' }}
        >
          © {new Date().getFullYear()} Abdhul Kareem L
        </p>
      </div>
    </footer>
  );
}
