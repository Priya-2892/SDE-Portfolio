import { NextResponse } from 'next/server';
import { consoleTabs } from '@/data/profile';

// Real route handlers behind the hero console: GET /api/priya/profile, /stack, /infra, /contact
export const dynamicParams = false;

export function generateStaticParams() {
  return consoleTabs.map((t) => ({ section: t.route.slice(1) }));
}

export function GET(_req, { params }) {
  const tab = consoleTabs.find((t) => t.route === `/${params.section}`);
  if (!tab) return NextResponse.json({ error: 'not_found' }, { status: 404 });
  return NextResponse.json(tab.data, { headers: { 'Cache-Control': 'public, max-age=300' } });
}
