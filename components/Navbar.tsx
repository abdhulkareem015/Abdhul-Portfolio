'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Zap, Menu, X } from 'lucide-react';
import { NAV_LINKS, PERSONAL } from '@/lib/data';

export default function Navbar() {
  const [scrolled,   setScrolled]   = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -72, opacity: 0 }}
        animate={{ y: 0,   opacity: 1  }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="fixed top-0 inset-x-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? 'hsla(214,50%,8%,0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        }}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo — bigger name */}
          <button onClick={() => scrollTo('hero')} className="flex items-center gap-2.5">
            <span className="font-black text-2xl tracking-tight uppercase">
              Abdhul
            </span>
          </button>

          {/* Desktop links — pushed to right */}
          <div className="hidden md:flex items-center gap-1 ml-auto">
            {NAV_LINKS.map(l => (
              <button key={l} onClick={() => scrollTo(l)} className="btn-nav-ghost">{l}</button>
            ))}
          </div>

          {/* Right actions - empty on desktop */}
          <div className="hidden md:flex items-center gap-2">
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg"
            style={{ border: '1px solid var(--border)', color: 'var(--muted)' }}
          >
            {mobileOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1,  y: 0  }}
          className="fixed top-16 inset-x-0 z-40 md:hidden"
          style={{ background: 'var(--surface)', borderBottom: '1px solid var(--border)' }}
        >
          <div className="flex flex-col p-4 gap-1">
            {NAV_LINKS.map(l => (
              <button key={l} onClick={() => scrollTo(l)}
                className="text-left px-4 py-3 rounded-xl font-black uppercase tracking-widest text-sm transition-colors"
                style={{ color: 'var(--muted)' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--neon)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}
              >
                {l}
              </button>
            ))}
            {/* Mobile resume download */}
            <a
              href={PERSONAL.resume}
              download="Abdhul_Kareem_Resume.pdf"
              className="btn-neon mt-2 justify-center"
              style={{ fontSize: '0.8rem' }}
            >
              Download Resume ↓
            </a>
          </div>
        </motion.div>
      )}
    </>
  );
}
