'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, GitBranch, Clock } from 'lucide-react';
import { PROJECTS } from '@/lib/data';

function ProjectCard({ p, i }: { p: typeof PROJECTS[0]; i: number }) {
  const [glowing, setGlowing] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: i * 0.09 }}
      onMouseEnter={() => setGlowing(true)}
      onMouseLeave={() => setGlowing(false)}
      className="card p-7 flex flex-col gap-5 cursor-default"
      style={
        glowing
          ? { boxShadow: '0 0 40px hsla(74,100%,50%,0.06)', borderColor: 'hsla(74,100%,50%,0.35)' }
          : {}
      }
    >
      {/* Tag */}
      <div className="flex items-center justify-between gap-3">
        <span
          className="text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full"
          style={{
            background: 'hsla(74,100%,50%,0.1)',
            color: 'var(--neon)',
            border: '1px solid hsla(74,100%,50%,0.2)',
          }}
        >
          {p.tag}
        </span>
        {p.tag === 'Coming Soon' && (
          <span className="flex items-center gap-1 text-xs font-black uppercase tracking-widest"
            style={{ color: 'var(--muted)' }}>
            <Clock size={11} /> Soon
          </span>
        )}
      </div>

      {/* Title */}
      <h3
        className="text-xl font-black uppercase tracking-tight"
        style={{ color: glowing ? 'var(--neon)' : '#fff' }}
      >
        {p.title}
      </h3>

      {/* Desc */}
      <p className="text-sm leading-relaxed flex-1" style={{ color: 'var(--muted)' }}>
        {p.desc}
      </p>

      {/* Tech pills */}
      <div className="flex flex-wrap gap-2">
        {p.tech.map(t => (
          <span
            key={t}
            className="text-xs font-black uppercase tracking-wider px-2.5 py-1 rounded-full"
            style={{ background: 'var(--bg)', color: 'var(--muted)', border: '1px solid var(--border)' }}
          >
            {t}
          </span>
        ))}
      </div>

      {/* Buttons */}
      {!p.tag.includes('Coming') && (
        <div className="flex gap-3 pt-1">
          {p.repo && (
            <a
              href={p.repo}
              target="_blank"
              rel="noreferrer"
              className="btn-ghost"
              style={{ padding: '0.45rem 1.1rem', fontSize: '0.72rem' }}
            >
              <GitBranch size={13} /> GitHub
            </a>
          )}
          {p.live && (
            <a
              href={p.live}
              target="_blank"
              rel="noreferrer"
              className="btn-neon"
              style={{ padding: '0.45rem 1.1rem', fontSize: '0.72rem' }}
            >
              <ExternalLink size={13} /> Live Demo
            </a>
          )}
        </div>
      )}
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-28 px-6" style={{ background: 'var(--surface)' }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="section-label mb-3">What I&apos;ve Built</p>
          <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tight">
            Featured{' '}
            <span style={{ color: 'var(--neon)' }}>Projects</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.title} p={p} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
