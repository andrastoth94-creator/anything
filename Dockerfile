# Multi-stage Dockerfile for React Router app

# Stage 1: Build the application
FROM oven/bun:1 AS builder

WORKDIR /app

# Copy package files
COPY apps/web/package.json apps/web/bun.lock* ./apps/web/

# Install dependencies
WORKDIR /app/apps/web
RUN bun install

# Copy source code
COPY apps/web ./

# Build the application
RUN bun run build

# Stage 2: Serve with Nginx
FROM nginx:alpine

# Copy custom nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy built files from builder stage
COPY --from=builder /app/apps/web/build/client /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
