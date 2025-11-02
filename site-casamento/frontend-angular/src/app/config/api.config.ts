const LOCAL_FALLBACK = 'http://localhost:8085';

function resolveApiBase(): string {
  const envValue =
    (import.meta as unknown as { env?: Record<string, string | undefined> })?.env?.['NG_APP_API_BASE_URL'] ??
    (globalThis as { NG_APP_API_BASE_URL?: string }).NG_APP_API_BASE_URL;

  if (!envValue?.trim()) {
    return LOCAL_FALLBACK;
  }

  return envValue.replace(/\/$/, '');
}

export const API_BASE_URL = resolveApiBase();
