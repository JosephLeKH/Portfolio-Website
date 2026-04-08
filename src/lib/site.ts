const FALLBACK_SITE = 'https://josephle-le.vercel.app';

function normalizeOrigin(raw: string): string | null {
  const trimmed = raw.replace(/\/$/, '');
  try {
    const u = new URL(trimmed.startsWith('http') ? trimmed : `https://${trimmed}`);
    if (u.protocol !== 'http:' && u.protocol !== 'https:') return null;
    return u.origin;
  } catch {
    return null;
  }
}

/**
 * Canonical site origin for metadata, sitemap, and JSON-LD.
 * Set NEXT_PUBLIC_SITE_URL in production (e.g. https://yourdomain.com).
 */
export function getSiteUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (fromEnv) {
    const origin = normalizeOrigin(fromEnv);
    if (origin) return origin;
  }
  if (process.env.VERCEL_URL) {
    const host = process.env.VERCEL_URL.replace(/\/$/, '');
    const origin = normalizeOrigin(`https://${host}`);
    if (origin) return origin;
  }
  return FALLBACK_SITE;
}
