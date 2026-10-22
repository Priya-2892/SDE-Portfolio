import { site } from '@/data/profile';
export default function robots() {
  return { rules: { userAgent: '*', allow: '/' }, sitemap: `${site.url}/sitemap.xml` };
}
