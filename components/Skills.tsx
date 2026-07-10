'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '@/lib/data';

function SkillCard({ skill, i }: { skill: typeof SKILLS[0]; i: number }) {
  const [glowing, setGlowing] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: i * 0.09 }}
      onMouseEnter={() => setGlowing(true)}
      onMouseLeave={() => setGlowing(false)}
      className="card p-6 flex flex-col gap-4 cursor-default"
      style={
        glowing
          ? { boxShadow: '0 0 40px hsla(74,100%,50%,0.06)', borderColor: 'hsla(74,100%,50%,0.35)' }
          : {}
      }
    >
      {/* Icon box */}
      <div className="icon-box text-xl">{skill.icon}</div>

      {/* Title */}
      <h3
        className="text-sm font-black uppercase tracking-widest"
        style={{ color: glowing ? 'var(--neon)' : '#fff' }}
      >
        {skill.title}
      </h3>

      {/* Desc */}
      <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
        {skill.desc}
      </p>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="section-label mb-3">What I Do</p>
          <h2
            className="text-5xl md:text-6xl font-black uppercase tracking-tight"
          >
            Skills &amp;{' '}
            <span style={{ color: 'var(--neon)' }}>Expertise</span>
          </h2>
        </motion.div>

        {/* 3-col grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SKILLS.map((s, i) => (
            <SkillCard key={s.title} skill={s} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
