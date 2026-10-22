'use client';
import { useEffect, useRef } from 'react';

export default function ScrollProgress() {
  const bar = useRef(null);
  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const h = document.documentElement.scrollHeight - window.innerHeight;
      const p = h > 0 ? Math.min(1, window.scrollY / h) : 0;
      if (bar.current) bar.current.style.transform = `scaleX(${p})`;
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll); if (raf) cancelAnimationFrame(raf); };
  }, []);
  return <div ref={bar} aria-hidden="true" className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-cobalt" style={{ transform: 'scaleX(0)' }} />;
}
