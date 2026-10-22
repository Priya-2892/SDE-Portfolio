import '@fontsource-variable/bricolage-grotesque';
import '@fontsource/hanken-grotesk/400.css';
import '@fontsource/hanken-grotesk/500.css';
import '@fontsource/hanken-grotesk/600.css';
import '@fontsource/jetbrains-mono/400.css';
import './globals.css';
import { profile, site } from '@/data/profile';

const title = `${profile.name} | Software Engineer (SDE I), MERN, Java, AWS`;
const description =
  'Software Engineer with 2+ years of experience in the MERN stack and Next.js, with hands-on Docker, Linux VPS and AWS EC2 deployment, Java and DSA. Open to SDE I roles.';

export const metadata = {
  metadataBase: new URL(site.url),
  title,
  description,
  keywords: [
    'Priya Kushwaha', 'SDE I', 'Software Engineer', 'MERN Stack Developer', 'React.js', 'Next.js',
    'Node.js', 'Java', 'DSA', 'Docker', 'AWS EC2', 'Linux', 'Full Stack Developer',
  ],
  authors: [{ name: profile.name }],
  alternates: { canonical: '/' },
  openGraph: { title, description, url: site.url, siteName: profile.name, type: 'website', locale: 'en_IN' },
  twitter: { card: 'summary_large_image', title, description },
  robots: { index: true, follow: true },
};

export const viewport = { themeColor: '#F4F6FA' };

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: profile.name,
  jobTitle: profile.role,
  url: site.url,
  email: `mailto:${profile.email}`,
  sameAs: [profile.github, profile.linkedin],
  alumniOf: { '@type': 'CollegeOrUniversity', name: 'JNCT College of Technology' },
  knowsAbout: ['React.js', 'Next.js', 'Node.js', 'MongoDB', 'Java', 'Data Structures and Algorithms', 'Docker', 'Linux', 'AWS EC2'],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-ink focus:px-4 focus:py-2 focus:text-paper"
        >
          Skip to content
        </a>
        <noscript><style>{'.reveal{opacity:1!important;transform:none!important}'}</style></noscript>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
