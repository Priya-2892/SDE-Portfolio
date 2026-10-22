'use client';
import { useEffect, useRef, useState } from 'react';

const bars = [38, 56, 44, 72, 64, 88, 70];
const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
const tiles = [
  { label: 'Published', value: '128' },
  { label: 'Drafts', value: '14' },
  { label: 'Edited this week', value: '36' },
];
const activity = [
  { title: 'Home page hero updated', status: 'Published' },
  { title: 'Pricing section copy', status: 'Draft' },
  { title: 'Case study: Solar site', status: 'Published' },
];

export default function DashboardPreview() {
  const ref = useRef(null);
  const [on, setOn] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setOn(true); io.disconnect(); } }, { threshold: 0.3 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <figure ref={ref} className="m-0">
      <div className="rounded-lg border border-rule bg-paper p-4 shadow-[0_18px_40px_-26px_rgba(14,23,38,0.35)]" role="img" aria-label="Illustrative dashboard layout with content totals, a weekly activity chart and recent activity">
        <div className="grid grid-cols-3 gap-2">
          {tiles.map((t) => (
            <div key={t.label} className="rounded-md border border-rule bg-surface px-3 py-2.5">
              <p className="font-display text-xl font-semibold tabular-nums">{t.value}</p>
              <p className="text-[11.5px] leading-tight text-muted">{t.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-3 rounded-md border border-rule bg-surface px-3 pb-2 pt-3">
          <p className="text-[12px] text-muted">Edits this week</p>
          <div className="mt-2 flex h-24 items-end gap-2">
            {bars.map((h, i) => (
              <div key={i} className="flex h-full flex-1 flex-col items-center justify-end">
                <div
                  className="w-full rounded-t bg-cobalt/85 transition-[height] duration-700 ease-out"
                  style={{ height: on ? `${h}%` : '0%', transitionDelay: `${i * 70}ms` }}
                />
              </div>
            ))}
          </div>
          <div className="mt-1 flex gap-2 text-[10.5px] text-muted">
            {days.map((d, i) => <span key={i} className="flex-1 text-center">{d}</span>)}
          </div>
        </div>

        <ul className="mt-3 space-y-1.5">
          {activity.map((a) => (
            <li key={a.title} className="flex items-center justify-between rounded-md border border-rule bg-surface px-3 py-2 text-[13px]">
              <span className="truncate pr-3">{a.title}</span>
              <span className={`shrink-0 rounded px-1.5 py-0.5 text-[11px] font-medium ${a.status === 'Published' ? 'bg-[#E3F6EC] text-[#0E6B3F]' : 'bg-[#FFF1D6] text-[#8A5A00]'}`}>{a.status}</span>
            </li>
          ))}
        </ul>
      </div>
      <figcaption className="mt-2 text-[12.5px] text-muted">Illustrative layout with sample data.</figcaption>
    </figure>
  );
}
