# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A React Router v7 landing page application for NDRS car detailing services, deployed on GitHub Pages. Built with Bun, Vite, and Tailwind CSS v4, containerized with Docker/Nginx.

## Build/Development Commands

**IMPORTANT**: This project uses Docker for development. Bun is not required on the host machine - all commands run inside the Docker container.

### Docker Workflow (Recommended)

Run from project root:

- **Start app**: `docker compose up` (serves on http://localhost:8080)
- **Rebuild container**: `docker compose up --build`
- **Stop**: `docker compose down`
- **View logs**: `docker compose logs -f`
- **Shell access**: `docker compose exec web sh`

### Running Commands Inside Container

All `bun` and build commands must run inside the Docker container using `docker compose exec web`:

- **Build**: `docker compose exec web bun run build`
- **Type checking**: `docker compose exec web bun run typecheck`
- **Install dependencies**: `docker compose exec web bun install`
- **Run tests**: `docker compose exec web vitest` or `docker compose exec web vitest run`

Alternatively, open a shell in the container and run commands directly:
```bash
docker compose exec web sh
# Inside container:
bun run build
bun run typecheck
vitest
```

## Architecture

### GitHub Pages Configuration

The app is configured for subdirectory deployment at `/anything/`:

- **Vite base**: `/anything/` in `vite.config.ts` (for asset paths)
- **React Router basename**: `/anything` in `react-router.config.ts` (for routing)
- **SSR disabled**: `ssr: false` (static site generation only)
- **Prerendering**: Only root `/` path is prerendered

**Important**: When changing repository name, update both `base` and `basename` configs.

### Custom Vite Plugins

The project uses several custom plugins in `apps/web/plugins/`:

1. **layoutWrapperPlugin** - Wraps routes with layout components
2. **loadFontsFromTailwindSource** - Auto-loads Google Fonts from Tailwind config
3. **nextPublicProcessEnv** - Makes `NEXT_PUBLIC_*` env vars available via `process.env`
4. **restart** - Auto-restarts dev server on page/layout file changes
5. **restartEnvFileChange** - Restarts dev server on `.env` changes
6. **consoleToParent** - Forwards console logs to parent window (for iframe usage)
7. **aliases** - Custom module path aliases

These plugins enable unique behaviors not standard in React Router.

### Application Structure

```
apps/web/
├── src/
│   ├── app/
│   │   ├── root.tsx          # Root layout with error boundaries, HMR monitoring
│   │   ├── layout.jsx        # React Query provider wrapper
│   │   ├── page.jsx          # Landing page component
│   │   ├── routes.ts         # Route definitions
│   │   └── __create/         # Dev utilities (error overlay, not-found page)
│   ├── __create/             # HMR utilities, dev error handling
│   └── global.css            # Tailwind entry point
├── plugins/                  # Custom Vite plugins (critical to build process)
├── public/images/           # Static assets
└── test/                    # Vitest setup
```

### Key Technical Details

**Root Layout (`root.tsx`)**:
- Custom error boundary with parent window communication
- HMR connection monitoring (`useHmrConnection`)
- Screenshot capture capability via `html-to-image`
- Message passing for iframe embedding
- Font loading integration via virtual module `virtual:load-fonts.jsx`

**Import Aliases**:
- `@/` maps to `src/` directory
- Use `@/__create/fetch` for custom fetch wrapper

**Tailwind v4**:
- Uses `@tailwindcss/vite` plugin (not PostCSS)
- Extensive Google Fonts integration (700+ font families in `tailwind.config.js`)

## Deployment

### GitHub Pages Deployment

Manual deployment via GitHub Actions (`.github/workflows/static.yml`):

1. Go to **Actions** tab on GitHub
2. Select **"Deploy React app to Pages"**
3. Click **"Run workflow"**
4. Enter version (e.g., `v1.0.0`)
5. Workflow will:
   - Build with Bun
   - Fix directory structure (moves `index.html` from `anything/` to root)
   - Deploy to `gh-pages` branch
   - Create Git tag
   - Create GitHub Release

**Version Numbering**: Follow semantic versioning (`v{major}.{minor}.{patch}`)

### Docker Deployment

Multi-stage build:
1. **Builder stage**: Bun builds the app (`apps/web/build/client`)
2. **Production stage**: Nginx serves static files

The build output is optimized for static hosting with all assets properly linked via the `/anything/` base path.

## Testing

- **Framework**: Vitest with jsdom
- **Setup file**: `test/setupTests.ts`
- **Testing Library**: React Testing Library + jest-dom
- **Config**: `vitest.config.ts` with custom alias resolution

Run tests with `vitest` for watch mode or `vitest run` for CI.

## Environment Variables

Prefix environment variables with `NEXT_PUBLIC_` to access them in the client:

```bash
NEXT_PUBLIC_API_URL=https://api.example.com
```

Access via `process.env.NEXT_PUBLIC_API_URL` or `import.meta.env.NEXT_PUBLIC_API_URL`.

The `nextPublicProcessEnv` plugin makes both syntaxes work.

## Common Patterns

### Adding Images

Place images in `apps/web/public/images/` and reference as `/images/filename.jpg` (not `./images`).

### Modifying Routes

React Router v7 file-based routing is disabled. Routes are defined in `src/app/routes.ts`.

### Changing Base Path

If deploying to a different repository or path:
1. Update `base: '/anything/'` in `vite.config.ts`
2. Update `basename: '/anything'` in `react-router.config.ts`
3. Update repository name in GitHub Actions workflow

### Font Integration

Fonts are auto-loaded from `tailwind.config.js`. To add a font:
1. Add to `fontFamily` in Tailwind config
2. Font will be automatically loaded from Google Fonts via plugin
3. Use via `font-{name}` utility classes

## Git Commits

When creating commits, do NOT include "Co-Authored-By: Claude" or any AI attribution in commit messages. Keep commits clean and professional without AI signatures.

## Development Notes

- **HMR**: Dev server runs on port 4000 with custom HMR monitoring
- **Production**: Docker serves on port 8080 via Nginx
- **Hot Reload**: Custom indicator shows HMR status (see `HotReload.tsx`)
- **Error Handling**: Custom error boundary with "Try to fix" button for iframe context
- **Caching**: React Query configured with 5min stale time, 30min cache time
