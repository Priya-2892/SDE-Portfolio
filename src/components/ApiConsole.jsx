'use client';
import { useEffect, useMemo, useState } from 'react';
import { consoleTabs } from '@/data/profile';

const COLORS = { key: '#8FB0FF', str: '#8EE3B0', num: '#F5B93A', p: '#6B7894', '': '#C9D3EA' };

function toLines(obj) {
  const entries = Object.entries(obj);
  const lines = [[['{', 'p']]];
  entries.forEach(([k, v], i) => {
    const comma = i < entries.length - 1 ? ',' : '';
    const line = [['  ', ''], [`"${k}"`, 'key'], [': ', 'p']];
    if (Array.isArray(v)) {
      line.push(['[', 'p']);
      v.forEach((x, j) => {
        line.push([`"${x}"`, 'str']);
        if (j < v.length - 1) line.push([', ', 'p']);
      });
      line.push([`]${comma}`, 'p']);
    } else if (typeof v === 'number') {
      line.push([String(v), 'num'], [comma, 'p']);
    } else {
      line.push([`"${v}"`, 'str'], [comma, 'p']);
    }
    lines.push(line);
  });
  lines.push([['}', 'p']]);
  return lines;
}

export default function ApiConsole() {
  const [active, setActive] = useState(0);
  const [res, setRes] = useState(null); // { data, ms, offline }
  const [shown, setShown] = useState(0);
  const route = consoleTabs[active].route;

  // Real request to the Next.js route handler in /app/api/priya/[section]
  useEffect(() => {
    let cancelled = false;
    setRes(null);
    const t0 = performance.now();
    fetch(`/api/priya${route}`)
      .then((r) => { if (!r.ok) throw new Error(String(r.status)); return r.json(); })
      .then((data) => { if (!cancelled) setRes({ data, ms: Math.round(performance.now() - t0), offline: false }); })
      .catch(() => { if (!cancelled) setRes({ data: consoleTabs[active].data, ms: null, offline: true }); });
    return () => { cancelled = true; };
  }, [active, route]);

  const lines = useMemo(() => (res ? toLines(res.data) : []), [res]);

  useEffect(() => {
    if (!lines.length) { setShown(0); return; }
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) { setShown(lines.length); return; }
    setShown(0);
    let n = 0;
    const id = setInterval(() => {
      n += 1;
      setShown(n);
      if (n >= lines.length) clearInterval(id);
    }, 85);
    return () => clearInterval(id);
  }, [lines]);

  const done = lines.length > 0 && shown >= lines.length;

  return (
    <div className="overflow-hidden rounded-lg bg-console text-console-text shadow-[0_24px_60px_-28px_rgba(14,23,38,0.55)]">
      <div role="tablist" aria-label="API routes" className="flex gap-1 overflow-x-auto border-b border-console-line px-2 pt-2">
        {consoleTabs.map((t, i) => (
          <button
            key={t.route}
            role="tab"
            aria-selected={i === active}
            onClick={() => setActive(i)}
            className={`whitespace-nowrap rounded-t-md px-3 py-2 font-mono text-[13px] transition-colors ${
              i === active ? 'bg-console-line text-white' : 'text-console-dim hover:text-console-text'
            }`}
          >
            {t.route}
          </button>
        ))}
      </div>

      <div className="flex items-center gap-3 border-b border-console-line px-4 py-3 font-mono text-[13px]">
        <span className="rounded bg-[#1B3A2C] px-1.5 py-0.5 text-[11px] font-medium text-[#8EE3B0]">GET</span>
        <span className="truncate text-console-text">/api/priya{route}</span>
      </div>

      <pre
        role="tabpanel"
        aria-live="polite"
        className="min-h-[286px] overflow-x-auto whitespace-pre-wrap break-words px-4 py-4 font-mono text-[13.5px] leading-[1.75]"
      >
        {!res && <span className="text-console-dim">Requesting…</span>}
        {lines.slice(0, shown).map((line, i) => (
          <div key={i} className={i === shown - 1 && !done ? 'caret' : undefined}>
            {line.map(([text, cls], j) => (
              <span key={j} style={{ color: COLORS[cls] }}>{text}</span>
            ))}
          </div>
        ))}
      </pre>

      <div className="flex items-center justify-between border-t border-console-line px-4 py-2.5 font-mono text-[12px] text-console-dim">
        <span className="flex items-center gap-2">
          <span className={`h-1.5 w-1.5 rounded-full ${res?.offline ? 'bg-[#F5B93A]' : 'bg-[#4ADE80]'}`} aria-hidden="true" />
          {!res ? 'Pending' : res.offline ? 'Offline, showing cached data' : `200 OK · ${res.ms} ms`}
        </span>
        <span>Live Next.js route handler</span>
      </div>
    </div>
  );
}
