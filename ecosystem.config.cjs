module.exports = {
  apps: [
    {
      name: 'alberts-portfolio',
      script: '/home/alber/.openclaw/workspace-forge/Alberts-Portfolio/node_modules/.bin/vite',
      args: 'preview --port 3003 --host',
      cwd: '/home/alber/.openclaw/workspace-forge/Alberts-Portfolio',
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
}
