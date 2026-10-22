import Section from './Section';
import Reveal from './Reveal';
import { skills, dsa } from '@/data/profile';

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <dl>
        {skills.map((g, i) => (
          <Reveal key={g.group} delay={i * 50} className="grid gap-3 border-t border-rule py-5 first:border-t-0 first:pt-0 sm:grid-cols-[170px_1fr]">
            <dt className="font-display text-[17px] font-semibold">{g.group}</dt>
            <dd>
              <ul className="flex flex-wrap gap-2">
                {g.items.map((i) => <li key={i} className="chip !text-[13.5px] !text-ink">{i}</li>)}
              </ul>
            </dd>
          </Reveal>
        ))}
      </dl>

      <Reveal className="mt-10 rounded-lg border border-rule bg-surface p-6">
        <h3 className="font-display text-lg font-semibold tracking-tight">Problem solving</h3>
        <p className="mt-1 text-[16px] text-muted">Data structures and algorithms: {dsa.level}.</p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {dsa.topics.map((t) => <li key={t} className="chip">{t}</li>)}
        </ul>
      </Reveal>
    </Section>
  );
}
