import { motion } from 'framer-motion';
import { Award, CalendarDays, ExternalLink, FolderGit2, Github, LayoutTemplate, ScanLine } from 'lucide-react';
import { projects } from '../data/portfolioData.js';
import { SectionHeading } from './About.jsx';

function ProjectVisual({ kind }) {
  if (kind === 'medical') {
    return (
      <div
        className="relative flex h-44 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-sky-950 via-navy-900 to-violet-950"
        role="img"
        aria-label="Stylized medical imaging illustration, no real patient data"
      >
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              'linear-gradient(rgba(56,189,248,.15) 1px,transparent 1px),linear-gradient(90deg,rgba(56,189,248,.15) 1px,transparent 1px)',
            backgroundSize: '26px 26px',
          }}
          aria-hidden="true"
        />
        <div className="relative flex h-24 w-24 items-center justify-center rounded-full border-2 border-sky-400/40 bg-sky-500/10" aria-hidden="true">
          <ScanLine className="h-10 w-10 text-sky-300" />
          <div className="absolute inset-x-3 top-3 h-0.5 rounded-full bg-sky-300/80 shadow-glow animate-scan" />
        </div>
        <span className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-emerald-400/10 px-2.5 py-1 text-[11px] font-semibold text-emerald-300">
          <Award className="h-3.5 w-3.5" aria-hidden="true" /> Excellent
        </span>
      </div>
    );
  }
  const gradient = kind === 'template1'
    ? 'from-blue-600/40 via-navy-900 to-violet-600/30'
    : 'from-violet-600/40 via-navy-900 to-sky-600/30';
  return (
    <div
      className={`relative h-44 overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br ${gradient}`}
      role="img"
      aria-label="Stylized website layout preview"
    >
      <div className="absolute inset-4 rounded-lg border border-white/15 bg-navy-950/70 p-3" aria-hidden="true">
        <div className="h-3 w-2/5 rounded bg-gradient-to-r from-sky-400/70 to-violet-400/70" />
        <div className="mt-3 grid grid-cols-3 gap-2">
          <div className="h-12 rounded bg-white/10" />
          <div className="h-12 rounded bg-white/10" />
          <div className="h-12 rounded bg-white/10" />
        </div>
        <div className="mt-2 h-2.5 w-3/4 rounded bg-white/10" />
        <div className="mt-1.5 h-2.5 w-1/2 rounded bg-white/10" />
      </div>
      <LayoutTemplate className="absolute bottom-3 right-3 h-5 w-5 text-white/40" aria-hidden="true" />
    </div>
  );
}

function ActionButton({ url, label, icon: Icon, primary }) {
  if (!url) {
    return (
      <span
        aria-disabled="true"
        title="Link coming soon — URL not provided yet"
        className="inline-flex cursor-not-allowed items-center gap-1.5 rounded-lg px-4 py-2.5 text-[13px] font-semibold text-slate-500"
        style={{ background: 'rgba(255,255,255,.04)', border: '1px dashed rgba(255,255,255,.15)' }}
      >
        <Icon className="h-4 w-4" aria-hidden="true" />
        {label} · Soon
      </span>
    );
  }
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={
        primary
          ? 'btn-primary !px-4 !py-2.5 !text-[13px]'
          : 'btn-ghost !px-4 !py-2.5 !text-[13px]'
      }
    >
      <Icon className="h-4 w-4" aria-hidden="true" />
      {label}
    </a>
  );
}

export default function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-heading" className="section-pad relative">
      <div className="container-x">
        <SectionHeading
          eyebrow="Portfolio"
          title="Featured Projects"
          description="A selection of university and front-end work. Unavailable links are clearly marked as coming soon — never disguised as working links."
        />
        <h3 id="projects-heading" className="sr-only">
          Featured projects list
        </h3>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.article
              key={p.id}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: (i % 3) * 0.1, ease: 'easeOut' }}
              className="glass card-hover flex flex-col overflow-hidden rounded-2xl p-5"
            >
              <ProjectVisual kind={p.visual} />

              <div className="flex flex-1 flex-col pt-5">
                <div className="flex items-center justify-between gap-2 text-[11px] font-semibold uppercase tracking-[0.14em]">
                  <span className="text-sky-300">{p.category}</span>
                  <FolderGit2 className="h-4 w-4 text-slate-500" aria-hidden="true" />
                </div>
                <h3 className="mt-2 text-lg font-bold text-white">{p.name}</h3>
                <p className="mt-1.5 flex items-center gap-1.5 text-xs text-slate-500">
                  <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
                  {p.date}
                </p>
                <p className="mt-3 flex-1 text-sm leading-7 text-slate-400">{p.description}</p>
                {p.techNote && (
                  <p className="mt-2 text-xs italic leading-6 text-slate-500">{p.techNote}</p>
                )}

                <ul className="mt-4 flex flex-wrap gap-2" aria-label={`${p.name} technologies`}>
                  {p.technologies.map((t) => (
                    <li key={t} className="skill-pill !text-xs">
                      {t}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2 border-t border-white/10 pt-4">
                  <ActionButton url={p.liveUrl} label="Live Demo" icon={ExternalLink} primary />
                  <ActionButton url={p.sourceUrl} label="Source" icon={Github} />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
