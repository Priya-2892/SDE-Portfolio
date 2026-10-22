import { FiDownload, FiMail } from 'react-icons/fi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import ApiConsole from './ApiConsole';
import Marquee from './Marquee';
import Stats from './Stats';
import { profile, site } from '@/data/profile';

const d = (ms) => ({ '--d': `${ms}ms` });

export default function Hero() {
  return (
    <div id="top" className="relative isolate overflow-hidden">
      <div aria-hidden="true" className="drift pointer-events-none absolute -right-20 top-24 -z-10 h-[420px] w-[420px] rounded-full bg-cobalt/15 blur-3xl" />
      <div aria-hidden="true" className="drift pointer-events-none absolute -left-24 bottom-10 -z-10 h-[300px] w-[300px] rounded-full bg-[#19B26B]/10 blur-3xl [animation-delay:-6s]" />

      <section className="mx-auto grid max-w-page items-center gap-12 px-5 pb-16 pt-28 sm:px-8 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:pb-20 lg:pt-36">
        <div>
          <p className="rise mb-6 flex items-center gap-2 text-[15px] text-muted" style={d(0)}>
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#19B26B] opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#19B26B]" />
            </span>
            {profile.availability}
          </p>
          <h1 className="rise font-display text-[44px] font-bold leading-[1.02] tracking-tight sm:text-6xl lg:text-[58px] xl:text-[64px]" style={d(80)}>
            {profile.name}
          </h1>
          <p className="rise mt-5 font-display text-xl font-medium leading-snug text-ink sm:text-2xl" style={d(180)}>
            {profile.role}. {profile.headline}
          </p>
          <p className="rise mt-5 max-w-[56ch] text-[17px] leading-relaxed text-muted" style={d(280)}>{profile.summary}</p>

          <div className="rise mt-9 flex flex-wrap items-center gap-3" style={d(380)}>
            <a href={site.resume} download className="btn btn-primary hover:-translate-y-0.5 active:translate-y-0">
              <FiDownload aria-hidden="true" /> Download resume
            </a>
            <a href="#projects" className="btn btn-outline hover:-translate-y-0.5 active:translate-y-0">View projects</a>
          </div>

          <div className="rise mt-8 flex items-center gap-5 text-ink" style={d(460)}>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" className="p-1 transition duration-200 hover:-translate-y-0.5 hover:text-cobalt"><FaGithub size={22} /></a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" className="p-1 transition duration-200 hover:-translate-y-0.5 hover:text-cobalt"><FaLinkedin size={22} /></a>
            <a href={`mailto:${profile.email}`} aria-label="Send an email" className="p-1 transition duration-200 hover:-translate-y-0.5 hover:text-cobalt"><FiMail size={22} /></a>
          </div>
        </div>

        <div className="rise" style={d(240)}>
          <ApiConsole />
        </div>
      </section>

      <Marquee />
      <Stats />
    </div>
  );
}
