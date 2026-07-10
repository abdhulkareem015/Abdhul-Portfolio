'use client';

import { motion } from 'framer-motion';
import { EXPERIENCE, CERTS, EDUCATION, CODING_PROFILES, PERSONAL } from '@/lib/data';

export default function About() {
  return (
    <section id="about" className="py-28 px-6" style={{ background: 'var(--surface)' }}>
      <div className="max-w-6xl mx-auto space-y-20">

        {/* ── Bio ──────────────────────────────────────────── */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="mb-14"
          >
            <p className="section-label mb-3">Who I Am</p>
            <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tight">
              About <span style={{ color: 'var(--neon)' }}>Me</span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-10 items-start">
            {/* Bio text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.55, delay: 0.09 }}
              className="space-y-5"
            >
              <p className="text-lg leading-relaxed" style={{ color: 'var(--muted)' }}>
                I&apos;m{' '}
                <span className="text-white font-black">Abdhul Kareem L</span>, a
                Computer Science Engineering student at Sri Eshwar College of Engineering,
                Coimbatore. Currently in my 3rd semester with a CGPA of 7.71.
              </p>
              <p className="text-base leading-relaxed" style={{ color: 'var(--muted)' }}>
                My journey started with a Diploma (91%) at Al-Ameen Polytechnic College,
                where I built strong programming foundations. I&apos;m now a MERN Stack
                developer expanding into{' '}
                <span className="text-white font-black">Cloud Engineering with AWS</span>{' '}
                and DevOps.
              </p>
              <p className="text-base leading-relaxed" style={{ color: 'var(--muted)' }}>
                Outside code I sharpen algorithms daily — 160+ Skillrack (Rank 128961),
                100+ LeetCode, 30+ CodeChef.
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                {['MERN Stack','AWS Cloud','DevOps','System Design','DSA','Backend','OOP','DBMS'].map(t => (
                  <span key={t}
                    className="text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full"
                    style={{ background:'var(--bg)', color:'var(--muted)', border:'1px solid var(--border)' }}>
                    {t}
                  </span>
                ))}
              </div>
              {/* Resume download */}
              <a
                href={PERSONAL.resume}
                download="Abdhul_Kareem_Resume.pdf"
                className="btn-neon inline-flex mt-2"
                style={{ fontSize: '0.8rem', width: 'fit-content' }}
              >
                📄 Download Resume
              </a>
            </motion.div>

            {/* Experience + Certs */}
            <div className="space-y-5">
              {EXPERIENCE.map((e, i) => (
                <motion.div key={e.role}
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.09 }}
                  className="card p-6 space-y-3"
                >
                  <div className="flex items-start justify-between gap-3 flex-wrap">
                    <div>
                      <h3 className="text-base font-black uppercase tracking-tight text-white">{e.role}</h3>
                      <p className="text-xs font-black uppercase tracking-widest mt-0.5"
                        style={{ color: 'var(--muted)' }}>{e.company} · {e.period}</p>
                    </div>
                    <span className="text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full"
                      style={{ background:'hsla(74,100%,50%,0.1)', color:'var(--neon)', border:'1px solid hsla(74,100%,50%,0.2)' }}>
                      Internship
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-1.5">
                    {e.points.map(p => (
                      <div key={p} className="flex items-center gap-2 text-xs" style={{ color: 'var(--muted)' }}>
                        <span style={{ color: 'var(--neon)' }}>›</span> {p}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}

              {/* Certifications */}
              <motion.div
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.18 }}
                className="card p-6"
              >
                <p className="section-label mb-4">Certifications</p>
                <div className="space-y-3">
                  {CERTS.map(c => (
                    <div key={c.name} className="flex items-center justify-between gap-3 flex-wrap">
                      <span className="text-sm font-black uppercase tracking-tight text-white">{c.name}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-black uppercase tracking-widest px-2.5 py-0.5 rounded-full"
                          style={{ background:'var(--bg)', color:'var(--muted)', border:'1px solid var(--border)' }}>
                          {c.org}
                        </span>
                        <span className="text-xs font-black" style={{ color: 'var(--neon)' }}>{c.year}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* ── Education — alternating timeline ─────────────── */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="mb-14"
          >
            <p className="section-label mb-3">Academic Background</p>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight">
              Education
            </h2>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            {/* Centre vertical line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 hidden md:block"
              style={{ background: 'linear-gradient(to bottom, var(--neon), hsla(74,100%,50%,0.05))' }} />

            <div className="space-y-12">
              {EDUCATION.map((edu, i) => {
                const isLeft = i % 2 === 0;
                return (
                  <motion.div
                    key={edu.degree}
                    initial={{ opacity: 0, x: isLeft ? -32 : 32 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    className={`relative flex items-center gap-0 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col`}
                  >
                    {/* Card */}
                    <div className={`w-full md:w-[45%] ${isLeft ? 'md:pr-10' : 'md:pl-10'}`}>
                      <div
                        className="card p-6 space-y-3"
                        style={i % 2 === 1 ? {
                          background: 'hsl(214,45%,15%)',
                          borderColor: 'hsl(214,35%,22%)',
                        } : {}}
                      >
                        {/* Period */}
                        <p className="text-xs font-black uppercase tracking-widest text-right"
                          style={{ color: 'var(--neon)' }}>
                          {edu.period}
                        </p>

                        {/* Degree */}
                        <h3 className="text-lg font-black uppercase tracking-tight text-white leading-tight">
                          {edu.degree}
                        </h3>

                        {/* School */}
                        <p className="text-sm" style={{ color: 'var(--muted)' }}>
                          {edu.school}
                        </p>

                        {/* Score */}
                        <p className="text-sm font-black" style={{ color: 'var(--neon)' }}>
                          {edu.score}
                        </p>
                      </div>
                    </div>

                    {/* Centre dot */}
                    <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full items-center justify-center z-10 flex-shrink-0"
                      style={{
                        background: 'var(--surface)',
                        border: '2px solid var(--neon)',
                        boxShadow: '0 0 16px hsla(74,100%,50%,0.4)',
                      }}>
                      <span className="text-xs font-black" style={{ color: 'var(--neon)' }}>
                        {edu.icon}
                      </span>
                    </div>

                    {/* Spacer for opposite side */}
                    <div className="hidden md:block w-[45%]" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ── Coding Profiles ──────────────────────────────── */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <p className="section-label mb-3">Problem Solving</p>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight">
              Coding <span style={{ color: 'var(--neon)' }}>Profiles</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-5">
            {CODING_PROFILES.map((cp, i) => (
              <motion.div key={cp.platform}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.09 }}
                className="card p-6 text-center"
              >
                <div className="text-4xl mb-3">{cp.icon}</div>
                <p className="text-xs font-black uppercase tracking-widest mb-2"
                  style={{ color: 'var(--muted)' }}>{cp.platform}</p>
                <p className="text-4xl font-black" style={{ color: 'var(--neon)' }}>{cp.solved}</p>
                <p className="text-xs font-black uppercase tracking-widest mt-1"
                  style={{ color: 'var(--muted)' }}>Problems Solved</p>
                {cp.detail && (
                  <p className="text-xs mt-2 font-black uppercase tracking-widest"
                    style={{ color: 'var(--muted)' }}>{cp.detail}</p>
                )}
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
