const items = ['React.js', 'Next.js', 'Node.js', 'Express.js', 'MongoDB', 'MySQL', 'Java', 'DSA', 'REST APIs', 'Docker', 'Linux', 'AWS EC2', 'Git', 'Tailwind CSS'];

function Row({ hidden }) {
  return (
    <ul className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {items.map((t) => (
        <li key={t} className="flex items-center font-display text-[17px] font-medium text-muted">
          <span className="px-6">{t}</span>
          <span className="h-1 w-1 rounded-full bg-cobalt/60" aria-hidden="true" />
        </li>
      ))}
    </ul>
  );
}

export default function Marquee() {
  return (
    <div className="marquee overflow-hidden border-y border-rule bg-surface/60 py-4" aria-label="Technologies I work with">
      <div className="marquee-track flex">
        <Row />
        <Row hidden />
      </div>
    </div>
  );
}
