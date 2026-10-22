'use client';
import { useEffect, useRef, useState } from 'react';

// Fades and lifts its children into view once, when they scroll on screen.
export default function Reveal({ as: Tag = 'div', delay = 0, className = '', children, ...rest }) {
  const ref = useRef(null);
  const [on, setOn] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setOn(true); io.disconnect(); } },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag ref={ref} style={{ transitionDelay: on ? `${delay}ms` : '0ms' }} className={`reveal ${on ? 'is-in' : ''} ${className}`} {...rest}>
      {children}
    </Tag>
  );
}
