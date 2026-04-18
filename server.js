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

// Try to serve Ultraviolet static files — optional
const uvPaths = [
  join(__dirname, 'node_modules', '@titaniumnetwork-dev', 'ultraviolet', 'dist'),
  join(__dirname, 'node_modules', '@titaniumnetwork-dev', 'ultraviolet-static', 'dist'),
  join(__dirname, 'public', 'uv'),
];
for (const uvPath of uvPaths) {
  if (existsSync(uvPath)) {
    app.use('/uv/', express.static(uvPath));
    console.log('UV static files served from:', uvPath);
    break;
  }
}

// Service-Worker-Allowed header required for UV scope
app.get('/uv/uv.sw.js', (req, res) => {
  res.setHeader('Service-Worker-Allowed', '/');
  res.sendFile(join(__dirname, 'public', 'uv', 'uv.sw.js'));
});

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
