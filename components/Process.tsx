'use client';

import { motion } from 'framer-motion';
import { EXPERIENCE } from '@/lib/data';
import { CheckCircle2 } from 'lucide-react';

export default function Process() {
  return (
    <section id="experience" className="py-28 px-6">
      <div className="max-w-4xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="section-label mb-3">Work History</p>
          <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tight">
            Experience
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-6 top-0 bottom-0 w-px"
            style={{ background: 'linear-gradient(to bottom, var(--neon), hsla(74,100%,50%,0.1))' }}
          />

          <div className="space-y-10">
            {EXPERIENCE.map((exp, i) => (
              <motion.div
                key={exp.role}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative pl-16"
              >
                {/* Timeline dot */}
                <div
                  className="absolute left-3.5 top-6 w-5 h-5 rounded-full flex items-center justify-center -translate-x-1/2"
                  style={{
                    background: 'var(--neon)',
                    boxShadow: '0 0 16px hsla(74,100%,50%,0.6)',
                  }}
                >
                  <div className="w-2 h-2 rounded-full bg-black" />
                </div>

                {/* Card */}
                <div className="card p-7 space-y-5">

                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                    <div>
                      <h3 className="text-xl font-black uppercase tracking-tight text-white">
                        {exp.role}
                      </h3>
                      <p className="text-sm font-black uppercase tracking-widest mt-1"
                        style={{ color: 'var(--muted)' }}>
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <span
                        className="text-xs font-black uppercase tracking-widest px-3 py-1.5 rounded-full"
                        style={{
                          background: 'hsla(74,100%,50%,0.1)',
                          color: 'var(--neon)',
                          border: '1px solid hsla(74,100%,50%,0.25)',
                        }}
                      >
                        {exp.period}
                      </span>
                      <span
                        className="text-xs font-black uppercase tracking-widest px-3 py-1.5 rounded-full"
                        style={{
                          background: 'var(--bg)',
                          color: 'var(--muted)',
                          border: '1px solid var(--border)',
                        }}
                      >
                        Internship
                      </span>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="h-px" style={{ background: 'var(--border)' }} />

                  {/* Responsibilities */}
                  <div>
                    <p className="text-xs font-black uppercase tracking-widest mb-4"
                      style={{ color: 'var(--muted)' }}>
                      Responsibilities
                    </p>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {exp.points.map((point, j) => (
                        <motion.div
                          key={point}
                          initial={{ opacity: 0, x: -12 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: 0.2 + j * 0.07 }}
                          className="flex items-start gap-3"
                        >
                          <CheckCircle2
                            size={15}
                            className="flex-shrink-0 mt-0.5"
                            style={{ color: 'var(--neon)' }}
                          />
                          <span className="text-sm leading-relaxed"
                            style={{ color: 'var(--muted)' }}>
                            {point}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Tech used */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {['MongoDB', 'Express.js', 'React.js', 'Node.js', 'REST APIs', 'JWT'].map(t => (
                      <span key={t}
                        className="text-xs font-black uppercase tracking-wider px-2.5 py-1 rounded-full"
                        style={{
                          background: 'var(--bg)',
                          color: 'var(--muted)',
                          border: '1px solid var(--border)',
                        }}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
