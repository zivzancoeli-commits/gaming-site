import { createServer } from 'http';
import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { existsSync } from 'fs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PORT = process.env.PORT || 3000;

const app = express();

// Try to load bare server (proxy support) — optional, site works without it
let bareServer = null;
try {
  const { createBareServer } = await import('@nebula-services/bare-server-node');
  bareServer = createBareServer('/bare/');
  console.log('Bare server loaded (proxy enabled)');
} catch {
  console.log('Bare server not available — proxy disabled, site still works');
}

// Find UV static files location
const uvPaths = [
  join(__dirname, 'node_modules', '@titaniumnetwork-dev', 'ultraviolet', 'dist'),
  join(__dirname, 'node_modules', '@titaniumnetwork-dev', 'ultraviolet-static', 'dist'),
  join(__dirname, 'public', 'uv'),
];
let foundUvPath = uvPaths.find(p => existsSync(p)) || null;
if (foundUvPath) console.log('UV static files found at:', foundUvPath);

// Service-Worker-Allowed header MUST come before static middleware
app.get('/uv/uv.sw.js', (req, res) => {
  res.setHeader('Service-Worker-Allowed', '/');
  if (foundUvPath) {
    res.sendFile(join(foundUvPath, 'uv.sw.js'));
  } else {
    res.status(404).send('UV not installed');
  }
});

// Serve remaining UV static files
if (foundUvPath) {
  app.use('/uv/', express.static(foundUvPath));
}

// Serve public files
app.use(express.static(join(__dirname, 'public')));

// Routes
app.get('/', (req, res) =>
  res.sendFile(join(__dirname, 'public', 'index.html'))
);
app.get('/proxy', (req, res) =>
  res.sendFile(join(__dirname, 'public', 'proxy.html'))
);
app.get('/music', (req, res) =>
  res.sendFile(join(__dirname, 'public', 'music.html'))
);
app.get('/links', (req, res) =>
  res.sendFile(join(__dirname, 'public', 'links.html'))
);

// Health check
app.get('/health', (req, res) => res.json({ status: 'ok', proxy: !!bareServer }));

const server = createServer();

server.on('request', (req, res) => {
  if (bareServer && bareServer.shouldRoute(req)) {
    bareServer.routeRequest(req, res);
  } else {
    app(req, res);
  }
});

server.on('upgrade', (req, socket, head) => {
  if (bareServer && bareServer.shouldRoute(req)) {
    bareServer.routeUpgrade(req, socket, head);
  } else {
    socket.destroy();
  }
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`Gaming site running on http://0.0.0.0:${PORT}`);
});
