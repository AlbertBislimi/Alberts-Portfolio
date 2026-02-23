module.exports = {
  apps: [{
    name: 'alberts-portfolio',
    script: 'npx',
    args: 'vite preview --port 3003 --host',
    cwd: '/home/alber/.openclaw/workspace/alberts-portfolio',
    env: { NODE_ENV: 'production' }
  }]
}
