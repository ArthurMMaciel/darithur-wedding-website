type ImportMetaEnv = { env?: Record<string, string | undefined> };

function getEnvValue(key: string): string | undefined {
  const meta = import.meta as unknown as ImportMetaEnv;
  const fromMeta = meta?.env?.[key];
  if (fromMeta && fromMeta.trim()) {
    return fromMeta;
  }
  return (globalThis as unknown as Record<string, string | undefined>)[key];
}

function normalizeUrl(value?: string): string {
  return (value ?? '').trim().replace(/\/$/, '');
}

export const SUPABASE_URL = "https://wsoqneiaeudttbswklfw.supabase.co";
export const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indzb3FuZWlhZXVkdHRic3drbGZ3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njg2MDk4MzUsImV4cCI6MjA4NDE4NTgzNX0.HaUaSm2-eqm_E-7GU1rDeBdXshB00fhATGTQCM9QszQ";