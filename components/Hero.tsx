'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import Image from 'next/image';
import { HERO_ROLES, PERSONAL } from '@/lib/data';

export default function Hero() {
  const item = {
    hidden: { opacity: 0, y: 24 },
    show:   { opacity: 1, y: 0  },
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Radial glow */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(circle at 60% 40%, hsla(74,100%,50%,0.06) 0%, transparent 65%)' }} />

      {/* Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: 'linear-gradient(hsl(214,35%,18%) 1px,transparent 1px),linear-gradient(90deg,hsl(214,35%,18%) 1px,transparent 1px)',
          backgroundSize: '48px 48px',
        }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-16 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* ── LEFT — Text ── */}
          <motion.div
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
            initial="hidden"
            animate="show"
            className="flex-1 flex flex-col items-start gap-6"
          >
            {/* Eyebrow */}
            <motion.p variants={item} className="section-label">
              Full Stack Developer &amp; Cloud Engineer
            </motion.p>

            {/* Headline */}
            <motion.h1 variants={item}
              className="text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight leading-none">
              Hi, I&apos;m{' '}
              <br />
              <span style={{ color: 'var(--neon)' }}>Abdhul</span>{' '}
              <span className="text-white">Kareem</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p variants={item} className="text-lg leading-relaxed max-w-lg"
              style={{ color: 'var(--muted)' }}>
              B.E CSE student at <span className="text-white font-black">Sri Eshwar College of Engineering</span>.
              I build scalable MERN stack applications and am expanding into Cloud Engineering with AWS.
            </motion.p>

            {/* CTA buttons */}
            <motion.div variants={item} className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-neon">
                <ArrowRight size={15} /> View Projects
              </button>
              <a href={PERSONAL.resume} download="Abdhul_Kareem_Resume.pdf" className="btn-ghost">
                <Download size={15} /> Download Resume
              </a>
            </motion.div>
          </motion.div>

          {/* ── RIGHT — Profile photo ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1,  scale: 1     }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="flex-shrink-0 flex items-center justify-center"
          >
            <div className="relative">
              {/* Outer neon glow ring */}
              <div
                className="absolute -inset-1 rounded-3xl opacity-60"
                style={{
                  background: 'linear-gradient(135deg, var(--neon), hsla(74,100%,50%,0.1), var(--neon))',
                  filter: 'blur(8px)',
                }}
              />

              {/* Neon border frame */}
              <div
                className="relative rounded-3xl p-0.5"
                style={{ background: 'linear-gradient(135deg, var(--neon), hsla(214,45%,20%,1), var(--neon))' }}
              >
                {/* Photo */}
                <div className="relative w-64 h-72 md:w-72 md:h-80 rounded-3xl overflow-hidden"
                  style={{ background: 'var(--surface)' }}>
                  <Image
                    src="/profile2.jpeg"
                    alt="Abdhul Kareem L"
                    fill
                    className="object-cover"
                    style={{ objectPosition: '50% 15%', transform: 'scale(1.05)', transformOrigin: '50% 15%' }}
                    priority
                    sizes="(max-width: 768px) 256px, 288px"
                  />
                  {/* Bottom gradient overlay */}
                  <div className="absolute bottom-0 inset-x-0 h-20 pointer-events-none"
                    style={{ background: 'linear-gradient(to top, var(--surface), transparent)' }} />
                </div>
              </div>

              {/* Floating name badge */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest"
                style={{
                  background: 'var(--surface)',
                  border: '1px solid var(--neon)',
                  color: 'var(--neon)',
                  boxShadow: '0 0 20px hsla(74,100%,50%,0.3)',
                }}
              >
                Abdhul Kareem L
              </motion.div>

              {/* Floating available badge */}
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.1 }}
                className="absolute -top-3 -right-3 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-black uppercase tracking-widest"
                style={{
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  color: 'var(--muted)',
                }}
              >
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                Open to work
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 inset-x-0 h-32 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, var(--bg))' }} />
    </section>
  );
}
