import Image from 'next/image';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import Section from './Section';
import Reveal from './Reveal';
import Architecture from './Architecture';
import DashboardPreview from './DashboardPreview';
import { featured, useCase, caseStudy, projects, sites, designs } from '@/data/profile';

const FEATURED_SITES = 4;
const bullet = 'relative pl-5 before:absolute before:left-0 before:top-[0.8em] before:h-px before:w-3 before:bg-cobalt';

function Links({ github, live }) {
  if (!github && !live) return null;
  return (
    <div className="mt-4 flex flex-wrap gap-5 text-[15px]">
      {github && (
        <a href={github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 link-quiet">
          <FiGithub aria-hidden="true" /> Source code
        </a>
      )}
      {live && (
        <a href={live} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 link-quiet">
          <FiExternalLink aria-hidden="true" /> Live demo
        </a>
      )}
    </div>
  );
}

function SiteCard({ s, delay = 0 }) {
  return (
    <Reveal delay={delay}>
      <a href={s.live} target="_blank" rel="noopener noreferrer" className="group block">
        <div className="overflow-hidden rounded-md border border-rule bg-surface transition-shadow duration-300 group-hover:shadow-[0_18px_36px_-22px_rgba(14,23,38,0.45)]">
          <Image src={s.img} alt={`Screenshot of the ${s.title} website`} width={1200} height={620} sizes="(min-width:1280px) 340px, (min-width:640px) 45vw, 100vw" className="aspect-[16/10] w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]" />
        </div>
        <p className="mt-3 flex items-center gap-1.5 font-display text-[17px] font-semibold transition-colors group-hover:text-cobalt">
          {s.title} <FiExternalLink size={14} aria-hidden="true" />
        </p>
        <p className="mt-0.5 text-[15px] leading-snug text-muted">{s.note}</p>
        <p className="mt-1 text-[13.5px] text-muted/80">{s.stack}</p>
      </a>
    </Reveal>
  );
}

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      {/* Featured: dashboard with use case */}
      <Reveal as="article" className="rounded-lg border border-rule bg-surface p-6 sm:p-8">
        <h3 className="font-display text-2xl font-semibold tracking-tight">{featured.title}</h3>
        <p className="mt-2 max-w-[62ch] text-[16.5px] leading-relaxed text-muted">{featured.tagline}</p>

        <div className="mt-8 grid items-start gap-10 xl:grid-cols-[1fr_0.95fr]">
          <div>
            <ul className="space-y-3 text-[16px] leading-relaxed text-ink/85">
              {featured.points.map((p) => <li key={p} className={bullet}>{p}</li>)}
            </ul>

            <div className="mt-8 rounded-md bg-cobalt-tint/70 p-5">
              <h4 className="font-display text-[17px] font-semibold">{useCase.title}</h4>
              <p className="mt-2 text-[15.5px] leading-relaxed text-ink/85">{useCase.scenario}</p>
              <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-[15.5px] leading-relaxed text-ink/85 marker:font-semibold marker:text-cobalt">
                {useCase.flow.map((f) => <li key={f}>{f}</li>)}
              </ol>
              <p className="mt-3 text-[15.5px] font-medium leading-relaxed">{useCase.outcome}</p>
            </div>
          </div>

          <DashboardPreview />
        </div>

        <div className="mt-10 max-w-[800px]">
          <Architecture />
        </div>

        <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies used">
          {featured.stack.map((s) => <li key={s} className="chip">{s}</li>)}
        </ul>
        <Links github={featured.github} live={featured.live} />

        <details className="group mt-8 border-t border-rule pt-5">
          <summary className="cursor-pointer list-none font-display text-[17px] font-semibold marker:content-none hover:text-cobalt [&::-webkit-details-marker]:hidden">
            <span className="group-open:hidden">Read the case study (+)</span>
            <span className="hidden group-open:inline">Hide the case study (−)</span>
          </summary>
          <dl className="mt-5 grid gap-x-8 gap-y-6 text-[16px] leading-relaxed sm:grid-cols-[150px_1fr]">
            <dt className="font-display font-semibold">Problem</dt>
            <dd className="text-ink/85">{caseStudy.problem}</dd>
            <dt className="font-display font-semibold">Design</dt>
            <dd><ul className="space-y-2 text-ink/85">{caseStudy.design.map((d) => <li key={d} className={bullet}>{d}</li>)}</ul></dd>
            <dt className="font-display font-semibold">Trade-offs</dt>
            <dd className="text-ink/85">{caseStudy.tradeoffs}</dd>
            <dt className="font-display font-semibold">Deployment</dt>
            <dd className="text-ink/85">{caseStudy.deployment}</dd>
            <dt className="font-display font-semibold">What I would improve</dt>
            <dd><ul className="space-y-2 text-ink/85">{caseStudy.improve.map((d) => <li key={d} className={bullet}>{d}</li>)}</ul></dd>
          </dl>
        </details>
      </Reveal>

      {/* Other builds */}
      <div className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal as="article" key={p.title} delay={(i % 2) * 90} className="border-t border-ink pt-5">
            <h3 className="font-display text-lg font-semibold tracking-tight">{p.title}</h3>
            <p className="mt-2 text-[16px] leading-relaxed text-muted">{p.desc}</p>
            <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies used">
              {p.stack.map((s) => <li key={s} className="chip">{s}</li>)}
            </ul>
            <Links github={p.github} live={p.live} />
          </Reveal>
        ))}
      </div>

      {/* Other work */}
      <Reveal className="mt-20">
        <h3 className="font-display text-xl font-semibold tracking-tight">Other work</h3>
        <p className="mt-2 max-w-[60ch] text-[16px] text-muted">Client websites I built and deployed alongside product engineering.</p>
      </Reveal>
      <div className="mt-8 grid gap-x-6 gap-y-9 sm:grid-cols-2 xl:grid-cols-4">
        {sites.slice(0, FEATURED_SITES).map((s, i) => <SiteCard key={s.title} s={s} delay={i * 80} />)}
      </div>

      <details className="group mt-10">
        <summary className="cursor-pointer list-none font-display text-[17px] font-semibold marker:content-none hover:text-cobalt [&::-webkit-details-marker]:hidden">
          <span className="group-open:hidden">More work (+)</span>
          <span className="hidden group-open:inline">Less (−)</span>
        </summary>
        <div className="mt-8 grid gap-x-6 gap-y-9 sm:grid-cols-2 xl:grid-cols-4">
          {sites.slice(FEATURED_SITES).map((s) => <SiteCard key={s.title} s={s} />)}
        </div>
        <p className="mt-10 text-[16px] text-muted">Figma designs I implemented:</p>
        <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-2 text-[16px]">
          {designs.map((d) => (
            <li key={d.title}>
              <a href={d.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 link-quiet">
                {d.title} <FiExternalLink size={13} aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
      </details>
    </Section>
  );
}
