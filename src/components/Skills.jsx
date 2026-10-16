import { motion } from 'framer-motion';
import { Briefcase, LayoutDashboard, Users } from 'lucide-react';
import { skillGroups } from '../data/portfolioData.js';
import { SectionHeading } from './About.jsx';

const icons = {
  layout: LayoutDashboard,
  users: Users,
  briefcase: Briefcase,
};

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-heading" className="section-pad relative">
      <div className="container-x">
        <SectionHeading
          eyebrow="Skills"
          title="What I Bring to the Table"
          description="A practical toolkit across front-end development, project coordination, and everyday professional tools — presented honestly, without inflated proficiency claims."
        />
        <h3 id="skills-heading" className="sr-only">
          Skills grouped by area
        </h3>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, gi) => {
            const Icon = icons[group.icon] ?? LayoutDashboard;
            return (
              <motion.article
                key={group.id}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.55, delay: gi * 0.1, ease: 'easeOut' }}
                className="glass card-hover flex flex-col rounded-2xl p-7"
              >
                <div className="flex items-center gap-3">
                  <span
                    className="flex h-11 w-11 items-center justify-center rounded-xl"
                    style={{ background: 'linear-gradient(135deg,#2563eb,#7c3aed)' }}
                  >
                    <Icon className="h-5 w-5 text-white" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-[15px] font-bold leading-snug text-white">{group.title}</h3>
                    <p className="text-xs text-slate-500">{group.subtitle}</p>
                  </div>
                </div>

                <ul className="mt-6 flex flex-wrap gap-2" aria-label={`${group.title} skills`}>
                  {group.skills.map((skill) => (
                    <li key={skill} className="skill-pill">
                      <span
                        className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-sky-400 to-violet-400"
                        aria-hidden="true"
                      />
                      {skill}
                    </li>
                  ))}
                </ul>

                <p className="mt-auto pt-6 text-xs leading-6 text-slate-500">
                  {group.id === 'frontend'
                    ? 'Used in coursework, templates, and hands-on practice.'
                    : group.id === 'pm'
                      ? 'Applied in coordinating study & project work.'
                      : 'Confident daily user in professional contexts.'}
                </p>
              </motion.article>
            );
          })}
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-center text-xs leading-6 text-slate-500">
          Note: skill levels are intentionally not shown as percentages — proficiency grows with
          real project experience, and I&apos;m actively developing these areas.
        </p>
      </div>
    </section>
  );
}
