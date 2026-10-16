import { motion } from 'framer-motion';
import { CalendarRange, GraduationCap, MapPin } from 'lucide-react';
import { education } from '../data/portfolioData.js';
import { SectionHeading } from './About.jsx';

export default function Education() {
  return (
    <section id="education" aria-labelledby="education-heading" className="section-pad relative">
      <div className="container-x">
        <SectionHeading eyebrow="Education" title="Education" />
        <h3 id="education-heading" className="sr-only">
          Education history
        </h3>

        <div className="mx-auto mt-12 max-w-3xl">
          <motion.ol
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="relative space-y-0 border-l-2 border-white/10 pl-0"
          >
            <li className="relative pl-10 sm:pl-14">
              <span
                className="absolute -left-[22px] flex h-11 w-11 items-center justify-center rounded-full text-white shadow-glow"
                style={{ background: 'linear-gradient(135deg,#2563eb,#8b5cf6)' }}
                aria-hidden="true"
              >
                <GraduationCap className="h-5 w-5" />
              </span>

              <article className="glass card-hover rounded-2xl p-6 sm:p-8">
                <p className="inline-flex items-center gap-1.5 rounded-full bg-sky-500/10 px-3 py-1 text-xs font-semibold text-sky-300">
                  <CalendarRange className="h-3.5 w-3.5" aria-hidden="true" />
                  {education.duration}
                </p>
                <h3 className="mt-4 text-xl font-bold text-white">{education.degree}</h3>
                <p className="mt-2 flex items-center gap-1.5 text-sm font-medium text-slate-300">
                  <MapPin className="h-4 w-4 text-violet-300" aria-hidden="true" />
                  {education.institution}
                </p>

                <div className="mt-5 rounded-xl border border-white/10 bg-white/[0.03] p-4">
                  <p className="text-sm text-slate-300">
                    <span className="font-semibold text-white">Grade: </span>
                    {education.grade}
                  </p>
                  {education.gradeNote && (
                    <p className="mt-1 text-xs italic leading-6 text-slate-500">
                      Note: {education.gradeNote}
                    </p>
                  )}
                </div>
              </article>
            </li>
          </motion.ol>
        </div>
      </div>
    </section>
  );
}
