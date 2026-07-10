'use client';

import { motion } from 'framer-motion';
import { STATS } from '@/lib/data';

export default function StatsBar() {
  return (
    <div className="stats-band">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.09 }}
              className="text-center"
            >
              <div
                className="text-4xl font-black tracking-tight"
                style={{ color: 'var(--neon)' }}
              >
                {s.value}
              </div>
              <div
                className="text-xs font-black uppercase tracking-widest mt-1"
                style={{ color: 'var(--muted)' }}
              >
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
