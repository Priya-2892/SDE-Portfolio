'use client';
import { useEffect, useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { profile, site } from '@/data/profile';

const links = [
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
];

export default function Nav() {
  const [active, setActive] = useState('');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const els = links.map((l) => document.getElementById(l.id)).filter(Boolean);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    els.forEach((el) => io.observe(el));
    const onScroll = () => { if (window.scrollY < 200) setActive(''); };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => { io.disconnect(); window.removeEventListener('scroll', onScroll); };
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-rule bg-paper/90 backdrop-blur">
      <nav aria-label="Primary" className="mx-auto flex h-14 max-w-page items-center justify-between px-5 sm:px-8">
        <a href="#top" className="font-display text-lg font-semibold tracking-tight">
          {profile.name}
        </a>

        <ul className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                aria-current={active === l.id ? 'true' : undefined}
                className={`border-b-2 py-1 text-[15px] transition-colors ${
                  active === l.id ? 'border-cobalt text-ink' : 'border-transparent text-muted hover:text-ink'
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a href={site.resume} download className="btn btn-outline !px-4 !py-1.5 !text-sm">
              Resume
            </a>
          </li>
        </ul>

        <button
          className="-mr-2 p-2 md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </nav>

      {open && (
        <ul id="mobile-menu" className="border-t border-rule bg-paper px-5 pb-4 md:hidden">
          {links.map((l) => (
            <li key={l.id}>
              <a href={`#${l.id}`} onClick={() => setOpen(false)} className="block border-b border-rule py-3 text-base">
                {l.label}
              </a>
            </li>
          ))}
          <li className="pt-3">
            <a href={site.resume} download className="btn btn-primary w-full">Download resume</a>
          </li>
        </ul>
      )}
    </header>
  );
}
