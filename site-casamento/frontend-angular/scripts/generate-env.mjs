import fs from 'node:fs';
import path from 'node:path';

const rootDir = process.cwd();
const envFiles = ['.env.local', '.env'];
const fileVars = {};

for (const filename of envFiles) {
  const filepath = path.join(rootDir, filename);
  if (!fs.existsSync(filepath)) {
    continue;
  }
  const contents = fs.readFileSync(filepath, 'utf8');
  for (const line of contents.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) {
      continue;
    }
    const separatorIndex = trimmed.indexOf('=');
    if (separatorIndex === -1) {
      continue;
    }
    const key = trimmed.slice(0, separatorIndex).trim();
    const value = trimmed.slice(separatorIndex + 1).trim();
    if (key && value) {
      fileVars[key] = value;
    }
  }
}

function resolveVar(key) {
  return process.env[key] || fileVars[key] || '';
}

const supabaseUrl = resolveVar('NG_APP_SUPABASE_URL');
const supabaseAnonKey = resolveVar('NG_APP_SUPABASE_ANON_KEY');

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing NG_APP_SUPABASE_URL or NG_APP_SUPABASE_ANON_KEY for env generation.');
}

const outputPath = path.join(rootDir, 'src', 'assets', 'env.js');
const output = [
  `window.NG_APP_SUPABASE_URL = ${JSON.stringify(supabaseUrl)};`,
  `window.NG_APP_SUPABASE_ANON_KEY = ${JSON.stringify(supabaseAnonKey)};`
].join('\n');

fs.writeFileSync(outputPath, `${output}\n`, 'utf8');
