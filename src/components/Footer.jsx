import { Linkedin, Mail } from 'lucide-react';
import { navLinks, personal } from '../data/portfolioData.js';

export default function Footer() {
  const year = new Date().getFullYear();

  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="border-t border-white/10 bg-navy-900/60" aria-label="Footer">
      <div className="container-x grid gap-10 py-12 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2.5">
            <span
              className="flex h-10 w-10 items-center justify-center rounded-xl text-sm font-extrabold text-white"
              style={{ background: 'linear-gradient(135deg,#2563eb,#8b5cf6)' }}
              aria-hidden="true"
            >
              {personal.initials}
            </span>
            <span className="text-base font-bold text-white">{personal.displayName}</span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-7 text-slate-400">
            {personal.title} crafting responsive web experiences with clean code and structured
            project thinking.
          </p>
          <div className="mt-5 flex gap-2.5">
            <a
              href={`mailto:${personal.email}`}
              aria-label={`Email ${personal.displayName}`}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition-colors hover:border-sky-400/50 hover:text-white"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
            </a>
            {personal.linkedin ? (
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition-colors hover:border-sky-400/50 hover:text-white"
              >
                <Linkedin className="h-4 w-4" aria-hidden="true" />
              </a>
            ) : (
              <span
                title="LinkedIn URL not added yet"
                aria-label="LinkedIn coming soon"
                className="flex h-10 w-10 cursor-not-allowed items-center justify-center rounded-xl border border-dashed border-white/15 text-slate-600"
              >
                <Linkedin className="h-4 w-4" aria-hidden="true" />
              </span>
            )}
          </div>
        </div>

        <nav aria-label="Footer">
          <h2 className="text-sm font-bold uppercase tracking-[0.16em] text-slate-300">Explore</h2>
          <ul className="mt-4 grid grid-cols-2 gap-2">
            {navLinks.map((l) => (
              <li key={l.id}>
                <button
                  type="button"
                  onClick={() => go(l.id)}
                  className="text-sm text-slate-400 transition-colors hover:text-white"
                >
                  {l.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.16em] text-slate-300">Get in touch</h2>
          <ul className="mt-4 space-y-2 text-sm text-slate-400">
            <li>
              <a href={`mailto:${personal.email}`} className="break-all hover:text-white">
                {personal.email}
              </a>
            </li>
            <li>
              <a href={personal.phoneHref} className="hover:text-white">
                {personal.phone}
              </a>
            </li>
            <li>{personal.location}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-2 py-5 text-xs text-slate-500 sm:flex-row">
          <p>© {year} {personal.displayName}. All rights reserved.</p>
          <p className="inline-flex items-center gap-1.5">
            Designed & built by {personal.displayName}
          </p>
        </div>
      </div>
    </footer>
  );
}
