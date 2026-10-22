// Architecture diagram for the Admin Dashboard project, with a request packet travelling the path.
const INK = '#0E1726';
const MUTED = '#4F5B73';
const RULE = '#C5CCDA';
const COBALT = '#2845F5';

function Box({ x, y, w, h, title, sub, accent }) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx="8" fill="#fff" stroke={accent ? COBALT : INK} strokeWidth={accent ? 2 : 1.25} />
      <text x={x + w / 2} y={y + h / 2 - 3} textAnchor="middle" fontSize="15" fontWeight="600" fill={INK} fontFamily="inherit">{title}</text>
      <text x={x + w / 2} y={y + h / 2 + 16} textAnchor="middle" fontSize="12" fill={MUTED} fontFamily="inherit">{sub}</text>
    </g>
  );
}

function Arrow({ x1, x2, y, label }) {
  return (
    <g>
      <line x1={x1} y1={y} x2={x2 - 6} y2={y} stroke={INK} strokeWidth="1.25" />
      <path d={`M${x2 - 8} ${y - 4} L${x2} ${y} L${x2 - 8} ${y + 4}`} fill="none" stroke={INK} strokeWidth="1.25" />
      <text x={(x1 + x2) / 2} y={y - 8} textAnchor="middle" fontSize="11" fill={MUTED} fontFamily="inherit">{label}</text>
    </g>
  );
}

function Packet({ begin }) {
  return (
    <circle r="4.5" fill={COBALT} className="packet" opacity="0">
      <animateMotion dur="3.6s" begin={begin} repeatCount="indefinite" path="M124 115 L440 115" keyTimes="0;1" calcMode="linear" />
      <animate attributeName="opacity" dur="3.6s" begin={begin} repeatCount="indefinite" values="0;1;1;0" keyTimes="0;0.08;0.9;1" />
    </circle>
  );
}

export default function Architecture() {
  return (
    <svg viewBox="0 0 560 230" role="img" aria-label="Architecture: a React.js dashboard calls an Express and Node.js REST API running in Docker on a Linux VPS, which reads and writes MongoDB." className="h-auto w-full">
      <rect x="168" y="24" width="228" height="182" rx="12" fill="none" stroke={RULE} strokeWidth="1.5" strokeDasharray="6 5" />
      <text x="182" y="46" fontSize="12" fill={MUTED} fontFamily="inherit">Docker on Linux VPS</text>

      <Packet begin="0s" />
      <Packet begin="1.8s" />

      <Box x={8} y={85} w={116} h={60} title="React.js" sub="Dashboard UI" />
      <Box x={196} y={85} w={172} h={60} title="Express + Node.js" sub="REST API" accent />
      <Box x={440} y={85} w={112} h={60} title="MongoDB" sub="content data" />

      <Arrow x1={124} x2={196} y={115} label="HTTPS" />
      <Arrow x1={368} x2={440} y={115} label="queries" />

    </svg>
  );
}
