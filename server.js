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

// Corrected UV config — package default uses wrong root paths, we fix them to /uv/
const UV_CONFIG = `/*global Ultraviolet*/
self.__uv$config = {
  prefix: '/service/',
  encodeUrl: Ultraviolet.codec.xor.encode,
  decodeUrl: Ultraviolet.codec.xor.decode,
  handler: '/uv/uv.handler.js',
  client: '/uv/uv.client.js',
  bundle: '/uv/uv.bundle.js',
  config: '/uv/uv.config.js',
  sw: '/uv/uv.sw.js',
};`;

if (foundUvPath) {
  // Both SW entry points need Service-Worker-Allowed header
  app.get('/uv/sw.js', (req, res) => {
    res.setHeader('Service-Worker-Allowed', '/');
    res.sendFile(join(foundUvPath, 'sw.js'));
  });
  app.get('/uv/uv.sw.js', (req, res) => {
    res.setHeader('Service-Worker-Allowed', '/');
    res.sendFile(join(foundUvPath, 'uv.sw.js'));
  });

  // Serve corrected config at /uv/uv.config.js
  app.get('/uv/uv.config.js', (req, res) => {
    res.setHeader('Content-Type', 'application/javascript');
    res.send(UV_CONFIG);
  });

  // The compiled uv.sw.js calls importScripts('/uv.bundle.js') with absolute root paths
  // so we also serve UV files at root level
  const uvFiles = ['uv.bundle.js', 'uv.handler.js', 'uv.client.js'];
  uvFiles.forEach(f => {
    app.get(`/${f}`, (req, res) => res.sendFile(join(foundUvPath, f)));
  });
  app.get('/uv.config.js', (req, res) => {
    res.setHeader('Content-Type', 'application/javascript');
    res.send(UV_CONFIG);
  });
  app.get('/uv.sw.js', (req, res) => {
    res.setHeader('Service-Worker-Allowed', '/');
    res.sendFile(join(foundUvPath, 'uv.sw.js'));
  });

  // Serve all UV files at /uv/ path
  app.use('/uv/', express.static(foundUvPath));
}

// Serve bare-mux and epoxy transport (required by UV v3)
const baremuxPath = join(__dirname, 'node_modules/@mercuryworkshop/bare-mux/dist');
const epoxyPath   = join(__dirname, 'node_modules/@mercuryworkshop/epoxy-transport/dist');
if (existsSync(baremuxPath)) { app.use('/baremux/', express.static(baremuxPath)); console.log('bare-mux served'); }
if (existsSync(epoxyPath))   { app.use('/epoxy/',   express.static(epoxyPath));   console.log('epoxy served'); }

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
