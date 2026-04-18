import { createServer } from 'http';
import { createBareServer } from '@nebula-services/bare-server-node';
import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { existsSync } from 'fs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PORT = process.env.PORT || 3000;

const app = express();
const bareServer = createBareServer('/bare/');

// Serve Ultraviolet static files
const uvPath = join(__dirname, 'node_modules', '@titaniumnetwork-dev', 'ultraviolet', 'dist');
if (existsSync(uvPath)) {
  app.use('/uv/', express.static(uvPath));
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
app.get('/health', (req, res) => res.json({ status: 'ok' }));

const server = createServer();

server.on('request', (req, res) => {
  if (bareServer.shouldRoute(req)) {
    bareServer.routeRequest(req, res);
  } else {
    app(req, res);
  }
});

server.on('upgrade', (req, socket, head) => {
  if (bareServer.shouldRoute(req)) {
    bareServer.routeUpgrade(req, socket, head);
  } else {
    socket.destroy();
  }
});

server.listen(PORT, () => {
  console.log(`Gaming site running on http://localhost:${PORT}`);
});
