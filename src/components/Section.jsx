import Reveal from './Reveal';

export default function Section({ id, title, children }) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="scroll-mt-14 border-t border-rule">
      <div className="mx-auto grid max-w-page gap-8 px-5 py-16 sm:px-8 md:grid-cols-[190px_1fr] md:gap-14 md:py-24">
        <Reveal
          as="h2"
          id={`${id}-title`}
          className="self-start font-display text-[28px] font-semibold leading-tight tracking-tight md:sticky md:top-24 md:text-[32px]"
        >
          {title}
        </Reveal>
        <div className="min-w-0">{children}</div>
      </div>
    </section>
  );
}
