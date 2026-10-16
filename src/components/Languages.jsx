import { motion } from 'framer-motion';
import { Languages as LanguagesIcon } from 'lucide-react';
import { languages } from '../data/portfolioData.js';
import { SectionHeading } from './About.jsx';

export default function Languages() {
  return (
    <section id="languages" aria-labelledby="lang-heading" className="relative pb-4">
      <div className="container-x">
        <SectionHeading eyebrow="Languages" title="Languages" />
        <h3 id="lang-heading" className="sr-only">
          Spoken languages
        </h3>

        <div className="mx-auto mt-10 grid max-w-3xl gap-5 sm:grid-cols-2">
          {languages.map((lang, i) => (
            <motion.article
              key={lang.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
              className="glass card-hover flex items-center gap-4 rounded-2xl p-6"
            >
              <span
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-sky-500/12 text-lg font-bold text-sky-300"
                style={{ border: '1px solid rgba(56,189,248,.25)' }}
                aria-hidden="true"
              >
                {lang.name === 'Arabic' ? 'ع' : 'En'}
              </span>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="flex items-center gap-2 text-base font-bold text-white">
                    <LanguagesIcon className="h-4 w-4 text-slate-500" aria-hidden="true" />
                    {lang.name}
                  </h3>
                  <span className="rounded-full bg-white/5 px-3 py-1 text-xs font-semibold text-sky-300">
                    {lang.level}
                  </span>
                </div>
                <div className="mt-3 flex gap-1.5" role="img" aria-label={`${lang.name}: ${lang.level}`}>
                  {Array.from({ length: 5 }).map((_, d) => (
                    <span
                      key={d}
                      className={`h-2 flex-1 rounded-full ${d < lang.dots ? 'bg-gradient-to-r from-sky-400 to-violet-400' : 'bg-white/10'}`}
                      aria-hidden="true"
                    />
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
