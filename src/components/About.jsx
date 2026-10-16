import { motion } from 'framer-motion';
import { BookOpenCheck, Code2, KanbanSquare, MapPin } from 'lucide-react';
import { aboutCards, personal } from '../data/portfolioData.js';

const icons = {
  code: Code2,
  kanban: KanbanSquare,
  learning: BookOpenCheck,
};

export function SectionHeading({ eyebrow, title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
      className="mx-auto max-w-2xl text-center"
    >
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">{title}</h2>
      {description && <p className="mt-4 leading-7 text-slate-400">{description}</p>}
      <div className="mx-auto mt-6 h-1 w-20 rounded-full" style={{ background: 'linear-gradient(90deg,#38bdf8,#a78bfa)' }} aria-hidden="true" />
    </motion.div>
  );
}

export default function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="section-pad relative">
      <div className="container-x">
        <SectionHeading eyebrow="About Me" title="About Me" />
        <h3 id="about-heading" className="sr-only">
          About Mahmoud Ahmed Hassan
        </h3>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1fr] lg:gap-12">
          {/* Text column */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="glass card-hover rounded-2xl p-7 sm:p-9"
          >
            <div className="flex items-center gap-4">
              <span
                className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl text-xl font-extrabold text-white shadow-glow"
                style={{ background: 'linear-gradient(135deg,#2563eb,#8b5cf6)' }}
                aria-hidden="true"
              >
                {personal.initials}
              </span>
              <div>
                <p className="text-lg font-bold text-white">{personal.fullName}</p>
                <p className="text-sm text-sky-300">{personal.title} · Front-End Focus</p>
              </div>
            </div>

            <p className="mt-6 leading-8 text-slate-300">{personal.about}</p>
            <p className="mt-4 leading-8 text-slate-400">{personal.summary}</p>

            <div className="mt-6 flex flex-wrap gap-2 text-sm">
              <span className="skill-pill">
                <MapPin className="h-3.5 w-3.5 text-sky-300" aria-hidden="true" />
                {personal.location}
              </span>
              <span className="skill-pill">Benha University · CS Graduate</span>
              <span className="skill-pill">Agile & Team Collaboration</span>
            </div>
          </motion.div>

          {/* Feature cards */}
          <div className="grid gap-5 sm:grid-cols-1">
            {aboutCards.map((card, i) => {
              const Icon = icons[card.icon] ?? Code2;
              return (
                <motion.article
                  key={card.title}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.55, delay: i * 0.1, ease: 'easeOut' }}
                  className="glass card-hover flex items-start gap-4 rounded-2xl p-6"
                >
                  <span
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl"
                    style={{
                      background: i === 0 ? 'rgba(56,189,248,.14)' : i === 1 ? 'rgba(139,92,246,.14)' : 'rgba(52,211,153,.14)',
                      border: '1px solid rgba(255,255,255,.1)',
                    }}
                  >
                    <Icon
                      className={`h-6 w-6 ${i === 0 ? 'text-sky-300' : i === 1 ? 'text-violet-300' : 'text-emerald-300'}`}
                      aria-hidden="true"
                    />
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-white">
                      <span className="mr-2 font-mono text-xs text-slate-500">0{i + 1}</span>
                      {card.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-7 text-slate-400">{card.text}</p>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
