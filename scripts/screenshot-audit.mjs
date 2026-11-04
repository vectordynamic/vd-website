import { spawn, execSync } from 'node:child_process';
import path from 'node:path';
import fs from 'node:fs';

const PORT = 3110;
const BASE = `http://127.0.0.1:${PORT}`;
const LOCAL_DIR = path.resolve('screenshots');
const ARTIFACT_DIR = '/home/m8m/.gemini/antigravity/brain/d6f47994-5edd-4b99-a339-2e5c0622f34a';

if (!fs.existsSync(LOCAL_DIR)) fs.mkdirSync(LOCAL_DIR, { recursive: true });

const SIZES = [
  { name: 'desktop_1280', width: 1280, height: 900 },
  { name: 'tablet_768', width: 768, height: 1024 },
  { name: 'mobile_390', width: 390, height: 844 },
  { name: 'mobile_320', width: 320, height: 640 },
];

async function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function ping() {
  try {
    const res = await fetch(BASE);
    return res.status === 200;
  } catch {
    return false;
  }
}

async function main() {
  console.log(`Starting Next.js production server on port ${PORT}...`);
  const server = spawn('npx', ['next', 'start', '-p', String(PORT)], {
    stdio: 'ignore',
    detached: false,
  });

  const cleanup = () => {
    try {
      server.kill('SIGTERM');
    } catch {}
  };

  process.on('exit', cleanup);
  process.on('SIGINT', cleanup);
  process.on('SIGTERM', cleanup);

  let online = false;
  for (let i = 0; i < 30; i++) {
    if (await ping()) {
      online = true;
      break;
    }
    await wait(300);
  }

  if (!online) {
    cleanup();
    throw new Error('Next.js server failed to come online');
  }

  console.log(`Server online at ${BASE}. Capturing screenshots with Firefox headless...`);

  for (const { name, width, height } of SIZES) {
    const localFile = path.join(LOCAL_DIR, `screenshot_${name}_home.png`);
    const artFile = path.join(ARTIFACT_DIR, `screenshot_${name}_home.png`);
    const cmd = `firefox --headless --screenshot "${localFile}" --window-size=${width},${height} "${BASE}"`;
    console.log(`Capturing ${name} (${width}x${height})...`);
    try {
      execSync(cmd, { stdio: 'inherit', timeout: 25000 });
      if (fs.existsSync(localFile)) {
        fs.copyFileSync(localFile, artFile);
        const stat = fs.statSync(artFile);
        console.log(`✓ ${name}: ${stat.size} bytes -> ${artFile}`);
      }
    } catch (err) {
      console.error(`Failed to capture ${name}:`, err.message);
    }
  }

  for (const route of ['faq', 'work']) {
    const localFile = path.join(LOCAL_DIR, `screenshot_desktop_${route}.png`);
    const artFile = path.join(ARTIFACT_DIR, `screenshot_desktop_${route}.png`);
    const cmd = `firefox --headless --screenshot "${localFile}" --window-size=1280,900 "${BASE}/${route}"`;
    console.log(`Capturing ${route} (1280x900)...`);
    try {
      execSync(cmd, { stdio: 'inherit', timeout: 25000 });
      if (fs.existsSync(localFile)) {
        fs.copyFileSync(localFile, artFile);
        const stat = fs.statSync(artFile);
        console.log(`✓ ${route}: ${stat.size} bytes -> ${artFile}`);
      }
    } catch (err) {
      console.error(`Failed to capture ${route}:`, err.message);
    }
  }

  cleanup();
  console.log('Screenshots complete.');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
