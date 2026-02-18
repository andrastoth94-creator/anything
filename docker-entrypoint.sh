#!/bin/sh
set -e

echo "Building application..."
bun run build

echo "Starting nginx..."
nginx -g 'daemon off;' &

echo "Watching for changes..."
while inotifywait -r -e modify,create,delete,moved_to,moved_from \
    /app/apps/web/src \
    /app/apps/web/public \
    /app/apps/web/plugins \
    /app/apps/web/vite.config.ts \
    /app/apps/web/tailwind.config.js 2>/dev/null; do
  echo "Changes detected, rebuilding..."
  bun run build
done
