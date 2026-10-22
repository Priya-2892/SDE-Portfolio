import Section from './Section';
import Reveal from './Reveal';
import { experience } from '@/data/profile';

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <ol className="space-y-12">
        {experience.map((e) => (
          <Reveal as="li" key={e.role + e.company} className="border-l-2 border-rule pl-6 sm:pl-8">
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
              <h3 className="font-display text-xl font-semibold tracking-tight">{e.role}</h3>
              <p className="text-[14.5px] text-muted">{e.period}</p>
            </div>
            <p className="mt-1 text-[16px] text-cobalt">
              {e.company}
              {e.place && <span className="text-muted">, {e.place}</span>}
            </p>
            <ul className="mt-4 space-y-2.5 text-[16px] leading-relaxed text-ink/85">
              {e.points.map((p) => (
                <li key={p} className="relative pl-5 before:absolute before:left-0 before:top-[0.8em] before:h-px before:w-3 before:bg-cobalt">
                  {p}
                </li>
              ))}
            </ul>
            <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies used">
              {e.stack.map((s) => (
                <li key={s} className="chip">{s}</li>
              ))}
            </ul>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
