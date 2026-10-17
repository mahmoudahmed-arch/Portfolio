import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDown, Download, FolderGit2, Mail } from 'lucide-react';
import { heroTechBadges, personal } from '../data/portfolioData.js';

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.08 * i, ease: 'easeOut' },
  }),
};

function CodeVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[460px]" aria-hidden="true">
      {/* glow blobs */}
      <div className="absolute -inset-8 -z-10 overflow-visible">
        <div className="absolute left-6 top-4 h-56 w-56 rounded-full bg-blue-600/30 blur-[90px] animate-blob" />
        <div className="absolute bottom-2 right-4 h-56 w-56 rounded-full bg-violet-600/30 blur-[90px] animate-blob" />
      </div>

      <div className="glass relative overflow-hidden rounded-2xl shadow-card animate-float">
        {/* window bar */}
        <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-red-400/80" />
          <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
          <span className="h-3 w-3 rounded-full bg-green-400/80" />
          <span className="ml-3 font-mono text-xs text-slate-400">portfolio.jsx</span>
          <span className="ml-auto rounded-md bg-emerald-400/10 px-2 py-0.5 font-mono text-[11px] text-emerald-300">
            ● live
          </span>
        </div>
        <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-7">
          <code>
            <span className="text-violet-300">const</span> <span className="text-sky-300">developer</span>{' '}
            <span className="text-slate-400">=</span> <span className="text-slate-300">{'{'}</span>
            {'\n'}  name: <span className="text-emerald-300">&quot;Mahmoud Ahmed Hassan&quot;</span>
            <span className="text-slate-400">,</span>
            {'\n'}  role: <span className="text-emerald-300">&quot;Software Engineer&quot;</span>
            <span className="text-slate-400">,</span>
            {'\n'}  stack: <span className="text-slate-300">[</span>
            <span className="text-amber-300">&quot;HTML&quot;</span>
            <span className="text-slate-400">,</span>{' '}
            <span className="text-amber-300">&quot;CSS&quot;</span>
            <span className="text-slate-400">,</span>{' '}
            <span className="text-amber-300">&quot;JS&quot;</span>
            <span className="text-slate-300">]</span>
            <span className="text-slate-400">,</span>
            {'\n'}  passion: <span className="text-emerald-300">&quot;clean UI&quot;</span>
            {'\n'}
            <span className="text-slate-300">{'};'}</span>
            {'\n'}
            <span className="text-violet-300">while</span>
            <span className="text-slate-300">(alive)</span> <span className="text-slate-300">{'{'}</span>
            {'\n '} <span className="text-sky-300">learn</span>
            <span className="text-slate-300">()</span>
            <span className="text-slate-400">;</span> <span className="text-sky-300">build</span>
            <span className="text-slate-300">()</span>
            <span className="text-slate-400">;</span>
            {'\n'}
            <span className="text-slate-300">{'}'}</span>
          </code>
        </pre>
        {/* scan line */}
        <div className="pointer-events-none absolute inset-x-6 top-10 h-10 rounded-lg bg-gradient-to-b from-transparent via-sky-400/15 to-transparent animate-scan" />
      </div>

      {/* floating badges */}
      <div className="glass absolute -left-4 top-8 flex items-center gap-2 rounded-xl px-3 py-2 text-xs font-semibold text-slate-100 shadow-card animate-float-slow sm:-left-8">
        <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-sky-500/20 font-mono text-sky-300">
          {'</>'}
        </span>
        Front-End
      </div>
      <div className="glass absolute -right-3 bottom-10 flex items-center gap-2 rounded-xl px-3 py-2 text-xs font-semibold text-slate-100 shadow-card animate-float sm:-right-6">
        <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-violet-500/20 font-mono text-violet-300">
          {'{}'}
        </span>
        Clean Code
      </div>
      <div className="glass absolute -bottom-5 left-10 flex items-center gap-2 rounded-xl px-3 py-2 text-xs font-semibold text-slate-100 shadow-card">
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
        </span>
        Open to work
      </div>
    </div>
  );
}

export default function Hero() {
  const reduce = useReducedMotion();
  const anim = (i) => (reduce ? {} : { variants: fadeUp, initial: 'hidden', animate: 'show', custom: i });

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="home" aria-labelledby="hero-heading" className="relative overflow-hidden pt-[72px]">
      <div className="bg-grid absolute inset-0" aria-hidden="true" />
      <div className="container-x relative grid items-center gap-14 pb-20 pt-14 sm:pt-20 lg:grid-cols-[1.05fr_0.95fr] lg:pb-28 lg:pt-24">
        <div>
          <motion.p
            {...anim(0)}
            className="inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-4 py-1.5 text-xs font-semibold text-emerald-300"
          >
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="absolute h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            {personal.availability}
          </motion.p>

          <motion.h1
            {...anim(1)}
            id="hero-heading"
            className="mt-6 text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl"
          >
            Hi, I&apos;m <span className="gradient-text">Mahmoud Ahmed Hassan</span>
          </motion.h1>

          <motion.p {...anim(2)} className="mt-4 text-base font-semibold text-sky-300 sm:text-lg">
            {personal.headline}
          </motion.p>

          <motion.p {...anim(3)} className="mt-4 max-w-xl text-[15px] leading-8 text-slate-400 sm:text-base">
            {personal.heroDescription}
          </motion.p>

          <motion.div {...anim(4)} className="mt-8 flex flex-wrap items-center gap-3">
            <button type="button" onClick={() => scrollTo('projects')} className="btn-primary">
              <FolderGit2 className="h-4 w-4" aria-hidden="true" />
              View My Projects
            </button>
            <button type="button" onClick={() => scrollTo('contact')} className="btn-ghost">
              <Mail className="h-4 w-4" aria-hidden="true" />
              Contact Me
            </button>
            <a
              href={personal.cvFile}
              download={personal.cvFileName}
              className="btn-ghost"
              aria-label="Download Mahmoud Ahmed Hassan CV (PDF)"
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              Download CV
            </a>
          </motion.div>

          <motion.div {...anim(5)} className="mt-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Tech I work with
            </p>
            <ul className="mt-3 flex flex-wrap gap-2" aria-label="Technologies">
              {heroTechBadges.map((t) => (
                <li key={t} className="skill-pill">
                  <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-sky-400 to-violet-400" aria-hidden="true" />
                  {t}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={reduce ? {} : { opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <CodeVisual />
        </motion.div>
      </div>

      <div className="relative flex justify-center pb-8">
        <button
          type="button"
          onClick={() => scrollTo('about')}
          aria-label="Scroll to about section"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-slate-300 transition-colors hover:border-sky-400/50 hover:text-white"
        >
          <ArrowDown className="h-5 w-5 animate-bounce" aria-hidden="true" />
        </button>
      </div>
    </section>
  );
}
