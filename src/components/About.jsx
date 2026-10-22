import Image from 'next/image';
import Section from './Section';
import Reveal from './Reveal';
import { education, profile } from '@/data/profile';

export default function About() {
  return (
    <Section id="about" title="About">
      <Reveal className="grid gap-10 lg:grid-cols-[260px_1fr]">
        <Image
          src="/images/priya.jpg"
          alt="Portrait of Priya Kushwaha"
          width={900}
          height={1200}
          sizes="260px"
          className="aspect-[4/5] w-full max-w-[260px] rounded-md object-cover object-top"
        />
        <div className="max-w-[62ch] text-[17px] leading-relaxed text-ink/85">
          <p>
            I&apos;m a software engineer who started in web development and grew into full-stack work.
            Most of my day is React, Next.js and Node.js, and I&apos;m just as comfortable at the server end
            with Docker, Linux, a VPS or an EC2 instance when something has to go live.
          </p>
          <p className="mt-4">
            I came into engineering through design-to-code work, which is why the interfaces I build are
            accurate and fast. For SDE I roles I&apos;m strengthening the fundamentals: Java, data
            structures and algorithms, and API design.
          </p>

          <div className="mt-8 border-t border-rule pt-6">
            <h3 className="font-display text-lg font-semibold tracking-tight">Education</h3>
            <p className="mt-2 text-[16.5px]">{education.degree}</p>
            <p className="text-[15.5px] text-muted">
              {education.school}, {education.year}. {education.score}.
            </p>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
