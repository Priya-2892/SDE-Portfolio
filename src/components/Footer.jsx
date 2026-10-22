import { profile } from '@/data/profile';

export default function Footer() {
  return (
    <footer className="border-t border-rule">
      <div className="mx-auto flex max-w-page flex-col gap-3 px-5 py-8 text-[14.5px] text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <p>Built with Next.js and Tailwind CSS</p>
      </div>
    </footer>
  );
}
