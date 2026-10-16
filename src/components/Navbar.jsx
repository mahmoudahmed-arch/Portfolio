import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, MessageCircle, X } from 'lucide-react';
import { navLinks, personal } from '../data/portfolioData.js';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Active section indication while scrolling
  useEffect(() => {
    const ids = navLinks.map((l) => l.id);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0.05 }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open ]);

  const go = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-strong shadow-card' : 'bg-transparent'
      }`}
    >
      <nav aria-label="Primary" className="container-x flex h-[72px] items-center justify-between">
        <button
          type="button"
          onClick={() => go('home')}
          className="group flex items-center gap-2.5"
          aria-label="Mahmoud Ahmed Hassan — back to home"
        >
          <span
            className="flex h-10 w-10 items-center justify-center rounded-xl text-sm font-extrabold tracking-wide text-white"
            style={{ background: 'linear-gradient(135deg,#2563eb,#8b5cf6)' }}
            aria-hidden="true"
          >
            {personal.initials}
          </span>
          <span className="hidden text-left leading-tight sm:block">
            <span className="block text-sm font-bold text-white">{personal.displayName}</span>
            <span className="block text-[11px] font-medium uppercase tracking-[0.16em] text-sky-300/80">
              {personal.title}
            </span>
          </span>
        </button>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                type="button"
                onClick={() => go(link.id)}
                aria-current={active === link.id ? 'true' : undefined}
                className={`relative rounded-lg px-3.5 py-2 text-sm font-medium transition-colors duration-200 ${
                  active === link.id ? 'text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                {link.label}
                {active === link.id && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full"
                    style={{ background: 'linear-gradient(90deg,#38bdf8,#a78bfa)' }}
                  />
                )}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => go('contact')}
            className="btn-primary hidden !px-5 !py-2.5 sm:inline-flex"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            Let&apos;s Talk
          </button>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl text-slate-200 transition-colors hover:bg-white/10 lg:hidden"
          >
            {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: 'easeInOut' }}
            className="glass-strong overflow-hidden border-t border-white/10 lg:hidden"
          >
            <ul className="space-y-1 px-5 py-4">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.id}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * i }}
                >
                  <button
                    type="button"
                    onClick={() => go(link.id)}
                    className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-[15px] font-medium transition-colors ${
                      active === link.id
                        ? 'bg-sky-500/15 text-white'
                        : 'text-slate-300 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    {link.label}
                    {active === link.id && (
                      <span className="h-2 w-2 rounded-full bg-sky-400" aria-hidden="true" />
                    )}
                  </button>
                </motion.li>
              ))}
              <li className="pt-2">
                <button type="button" onClick={() => go('contact')} className="btn-primary w-full">
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  Let&apos;s Talk
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
