FROM oven/bun:1

# Install nginx
RUN apt-get update && apt-get install -y nginx inotify-tools && rm -rf /var/lib/apt/lists/*

WORKDIR /app/apps/web

# Copy package files and install dependencies
COPY apps/web/package.json apps/web/bun.lock* ./
RUN bun install

# Copy source code
COPY apps/web ./

# Copy nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy and prepare entrypoint
COPY docker-entrypoint.sh /docker-entrypoint.sh
RUN chmod +x /docker-entrypoint.sh

EXPOSE 80

ENTRYPOINT ["/docker-entrypoint.sh"]
