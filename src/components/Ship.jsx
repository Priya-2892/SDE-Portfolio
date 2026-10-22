'use client';
import { useEffect, useRef, useState } from 'react';
import Section from './Section';
import { shipFlow } from '@/data/profile';

export default function Ship() {
  const ref = useRef(null);
  const [on, setOn] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setOn(true); io.disconnect(); } }, { threshold: 0.35 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Section id="ship" title="How I ship">
      <p className="max-w-[60ch] text-[17px] leading-relaxed text-muted">
        I don&apos;t stop at the pull request. I package the app, put it on a server I can manage, and
        point a domain at it. This is the path my production work follows.
      </p>
      <ol ref={ref} className="mt-10 grid gap-0 md:grid-cols-5">
        {shipFlow.map((s, i) => (
          <li key={s.title} className="relative pb-8 pl-8 md:pb-0 md:pl-0 md:pr-4 md:pt-8">
            {i < shipFlow.length - 1 && (
              <span
                aria-hidden="true"
                style={{ transitionDelay: `${i * 220 + 150}ms` }}
                className={`absolute left-[7px] top-4 h-full w-px origin-top bg-rule transition-transform duration-700 ease-out md:left-4 md:top-[7px] md:h-px md:w-full md:origin-left ${
                  on ? 'scale-y-100 md:scale-x-100 md:scale-y-100' : 'scale-y-0 md:scale-x-0 md:scale-y-100'
                }`}
              />
            )}
            <span
              aria-hidden="true"
              style={{ transitionDelay: `${i * 220}ms` }}
              className={`absolute left-0 top-1 h-[15px] w-[15px] rounded-full border-2 border-cobalt transition duration-500 md:left-0 md:top-0 ${
                on ? 'scale-100 bg-cobalt' : 'scale-50 bg-paper'
              }`}
            />
            <div
              style={{ transitionDelay: `${i * 220 + 100}ms` }}
              className={`transition duration-700 ease-out ${on ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'}`}
            >
              <p className="font-display text-[17px] font-semibold leading-snug">{s.title}</p>
              <p className="mt-1 text-[14.5px] text-muted">{s.detail}</p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
