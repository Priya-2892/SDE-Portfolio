'use client';
import { useEffect, useRef, useState } from 'react';
import { stats } from '@/data/profile';

function Counter({ value }) {
  const m = /^(\d+(?:\.\d+)?)(.*)$/.exec(value);
  const target = m ? parseFloat(m[1]) : 0;
  const suffix = m ? m[2] : '';
  const decimals = m && m[1].includes('.') ? 1 : 0;
  const ref = useRef(null);
  const [n, setN] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      if (reduce) { setN(target); return; }
      const t0 = performance.now();
      const dur = 1300;
      const tick = (t) => {
        const k = Math.min(1, (t - t0) / dur);
        setN(target * (1 - Math.pow(1 - k, 3)));
        if (k < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, { threshold: 0.6 });
    io.observe(el);
    return () => io.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      <span className="sr-only">{value}</span>
      <span aria-hidden="true" className="tabular-nums">{n.toFixed(decimals)}{suffix}</span>
    </span>
  );
}

export default function Stats() {
  return (
    <dl className="mx-auto grid max-w-page grid-cols-2 gap-y-8 px-5 py-10 sm:px-8 md:grid-cols-4">
      {stats.map((s, i) => (
        <div key={s.label} className={`rise pr-6 ${i > 0 ? 'md:border-l md:border-rule md:pl-8' : ''}`} style={{ '--d': `${500 + i * 100}ms` }}>
          <dt className="font-display text-4xl font-semibold tracking-tight"><Counter value={s.value} /></dt>
          <dd className="mt-1 max-w-[22ch] text-[14.5px] leading-snug text-muted">{s.label}</dd>
        </div>
      ))}
    </dl>
  );
}
