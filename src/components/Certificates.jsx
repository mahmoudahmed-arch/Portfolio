import { motion } from 'framer-motion';
import { Award, CalendarDays } from 'lucide-react';
import { certificates } from '../data/portfolioData.js';
import { SectionHeading } from './About.jsx';

export default function Certificates() {
  return (
    <section id="certificates" aria-labelledby="cert-heading" className="section-pad relative">
      <div className="container-x">
        <SectionHeading
          eyebrow="Training"
          title="Certificates & Training"
          description="Verified learning experiences only — no invented IDs, authorities, or verification links."
        />
        <h3 id="cert-heading" className="sr-only">
          Certificates list
        </h3>

        <div className="mx-auto mt-12 grid max-w-3xl gap-6">
          {certificates.map((c, i) => (
            <motion.article
              key={c.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: 'easeOut' }}
              className="glass card-hover relative overflow-hidden rounded-2xl p-7 sm:p-8"
            >
              {/* decorative corner */}
              <div
                className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-violet-600/15 blur-3xl"
                aria-hidden="true"
              />
              <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                <span
                  className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-amber-300/20 bg-amber-400/10"
                  aria-hidden="true"
                >
                  <Award className="h-7 w-7 text-amber-300" />
                </span>
                <div className="flex-1">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-300/90">
                    Certificate of Training
                  </p>
                  <h3 className="mt-2 text-lg font-bold leading-snug text-white">{c.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-400">{c.description}</p>
                  <p className="mt-4 inline-flex items-center gap-1.5 rounded-lg bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-300">
                    <CalendarDays className="h-3.5 w-3.5 text-sky-300" aria-hidden="true" />
                    {c.date}
                  </p>
                </div>
              </div>

              {/* perforated edge effect */}
              <div className="mt-6 flex items-center gap-3 border-t border-dashed border-white/15 pt-4 text-xs text-slate-500" aria-hidden="true">
                <span className="font-mono">No. ——</span>
                <span>No certificate ID published · verification available on request</span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
