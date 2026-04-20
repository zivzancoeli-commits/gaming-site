module.exports = {
  apps: [{
    name: 'gaming-site',
    script: 'server.js',
    instances: 'max',   // use all CPU cores
    exec_mode: 'cluster',
    max_memory_restart: '400M',
    env: {
      NODE_ENV: 'production',
      PORT: 3000
    }
  }]
};
