const LOCAL_FALLBACK = 'http://localhost:8085';

function resolveApiBase(): string {
  const envValue = import.meta.env['NG_APP_API_BASE_URL'];

  if (!envValue || !envValue.trim()) {
    return LOCAL_FALLBACK;
  }

  return envValue.replace(/\/$/, '');
}

export const API_BASE_URL = resolveApiBase();

