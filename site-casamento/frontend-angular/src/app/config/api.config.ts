// Use localhost in dev, "/api" in prod (proxied by Vercel)
const DEV_LOCAL = 'http://localhost:8085';

function resolveApiBase(): string {
  const envValue =
    (import.meta as unknown as { env?: Record<string, string | undefined> })?.env?.['NG_APP_API_BASE_URL'] ??
    (globalThis as { NG_APP_API_BASE_URL?: string }).NG_APP_API_BASE_URL;

  if (!envValue?.trim()) {
    try {
      const isBrowser = typeof window !== 'undefined';
      const host = isBrowser ? window.location.hostname : '';
      if (host === 'localhost' || host === '127.0.0.1') {
        return DEV_LOCAL;
      }
      // Default for production deployments (Vercel rewrite to API subdomain)
      return '/api';
    } catch {
      return '/api';
    }
  }

  return envValue.replace(/\/$/, '');
}

export const API_BASE_URL = resolveApiBase();
