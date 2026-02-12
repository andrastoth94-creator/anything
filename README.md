# NDRS Car Detailing - Landing Page

A modern, responsive landing page for NDRS car detailing services built with React Router v7 and deployed on GitHub Pages.

## 🚀 Quick Start

### Prerequisites

**Required:**
- **[Git](https://git-scm.com/)** - Version control
- **[Docker](https://www.docker.com/)** - Containerized development environment

That's it! Bun and all dependencies are included in the Docker container.

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/andrastoth94-creator/anything.git
   cd anything
   ```

2. **Start developing with Docker** (see below)

## 💻 Local Development

### Recommended: Docker (Easiest Setup)

No need to install Bun or Node.js - everything runs in the container!

**Start with Docker Compose:**
```bash
# From project root
docker compose up --build
```

The site will be available at: **http://localhost:8080**

**Features:**
- 🐳 Production-like environment
- 📦 Consistent builds across systems
- 🔒 Isolated from local dependencies

**Stop the container:**
```bash
docker compose down
```

**Rebuild after making changes:**

You can rebuild the app inside the running container without rebuilding the entire Docker image:

```bash
# Make your changes to the code, then rebuild
docker compose exec web bun run build

# The container will automatically serve the new build
```

This is much faster than `docker compose up --build` because it only rebuilds the app, not the entire container.

## 🏗️ Building for Production

### Test the production build locally

Use Docker to test in a production-like environment:
```bash
docker compose up --build
```

This automatically:
- Builds the application with Bun
- Creates optimized static files
- Serves them with Nginx (production web server)
- Makes the site available at **http://localhost:8080**

## 📦 Deployment to GitHub Pages

The project uses GitHub Actions for automated deployment with version tagging.

### Manual Deployment

1. Go to your repository on GitHub
2. Navigate to **Actions** tab
3. Select **"Deploy React app to Pages"** workflow
4. Click **"Run workflow"**
5. Enter a version number (e.g., `v1.0.0`, `v1.1.0`)
6. Click **"Run workflow"** button

### What Happens During Deployment

1. ✅ Installs dependencies with Bun
2. ✅ Builds the React application
3. ✅ Deploys to `gh-pages` branch
4. ✅ Creates a Git tag with your version number
5. ✅ Creates a GitHub Release
6. ✅ Updates GitHub Pages site

### Version Numbering

Follow [Semantic Versioning](https://semver.org/):
- **Major** (`v1.0.0` → `v2.0.0`): Breaking changes
- **Minor** (`v1.0.0` → `v1.1.0`): New features, backwards compatible
- **Patch** (`v1.0.0` → `v1.0.1`): Bug fixes

## 🗂️ Project Structure

```
anything/
├── apps/
│   └── web/                    # Main React application
│       ├── src/
│       │   ├── app/
│       │   │   ├── page.jsx    # Landing page component
│       │   │   ├── layout.jsx  # Root layout
│       │   │   └── root.tsx    # App entry point
│       │   └── __create/       # Dev tools & utilities
│       ├── public/             # Static assets (add images here!)
│       │   └── images/         # Your images go here
│       ├── package.json        # Dependencies
│       ├── vite.config.ts      # Vite configuration
│       └── react-router.config.ts  # React Router config
├── .github/
│   └── workflows/
│       └── static.yml          # GitHub Pages deployment
├── docker-compose.yml          # Docker Compose configuration
├── Dockerfile                  # Docker build instructions
├── nginx.conf                  # Nginx config for production
└── README.md                   # This file
```

## 🛠️ Development Commands

All commands should be run from the project root:

| Command | Description |
|---------|-------------|
| `docker compose up` | Start development server |
| `docker compose up --build` | Rebuild Docker image and start (first time only) |
| `docker compose exec web bun run build` | Rebuild app inside running container (fast!) |
| `docker compose down` | Stop the server |
| `docker compose logs -f` | View server logs |
| `docker compose exec web sh` | Open shell inside container |

## 🔧 Configuration

### GitHub Pages Configuration

The app is configured for GitHub Pages deployment at `/anything/`:

- **Vite base**: `/anything/` (for asset paths)
- **React Router basename**: `/anything` (for client-side routing)

If deploying to a different repository, update these in:
- `apps/web/vite.config.ts` - Change `base: '/anything/'`
- `apps/web/react-router.config.ts` - Change `basename: '/anything'`

### Environment Variables

Currently, no environment variables are required for basic operation.

For future customization, create a `.env` file in `apps/web/`:
```env
# Add your environment variables here
# NEXT_PUBLIC_API_URL=https://api.example.com
```

Variables prefixed with `NEXT_PUBLIC_` are available in the client bundle.

## 🐛 Troubleshooting

### Docker Build Fails

1. Make sure Docker is running: `docker --version`
2. Remove old images and rebuild:
   ```bash
   docker compose down --volumes
   docker compose up --build
   ```

### GitHub Pages Shows 404

1. Check GitHub Pages settings: Settings → Pages → Source should be "Deploy from a branch" → `gh-pages` branch
2. Wait a few minutes after deployment for changes to propagate
3. Hard refresh your browser: `Ctrl+Shift+R` (or `Cmd+Shift+R` on Mac)

### Changes Don't Appear on GitHub Pages

1. Clear browser cache
2. Check the latest workflow run completed successfully
3. Verify the correct version was deployed in Releases

## 📝 Making Changes

### Edit the Landing Page

1. Open `apps/web/src/app/page.jsx`
2. Make your changes
3. Save the file - changes will auto-reload in development mode

### Add or Replace Images

**Current Setup:**
The app currently uses **external images** hosted online (from createusercontent.com). This works fine but you can replace them with your own local images.

**To use local images instead:**

1. **Add images to the public directory:**
   ```bash
   apps/web/public/images/your-image.jpg
   ```

2. **Update the image URL in `apps/web/src/app/page.jsx`:**
   ```jsx
   // Change from external URL:
   url: "https://raw.createusercontent.com/...",

   // To local path:
   url: "/images/your-image.jpg",
   ```

3. **Rebuild the app:**
   ```bash
   docker compose exec web bun run build
   ```

**Supported formats:**
- `.jpg`, `.jpeg` - Photos
- `.png` - Images with transparency
- `.svg` - Vector graphics (logos, icons)
- `.webp` - Modern optimized format
- `.gif` - Animations

**Example - Replace gallery image:**
```bash
# 1. Add your image
cp before-detailing.jpg apps/web/public/images/

# 2. Edit apps/web/src/app/page.jsx
# Find: url: "https://raw.createusercontent.com/e0380093..."
# Replace with: url: "/images/before-detailing.jpg"

# 3. Rebuild
docker compose exec web bun run build
```

### Update Styles

- Global styles: `apps/web/src/app/global.css`
- Tailwind classes: Use utility classes directly in JSX
- Custom CSS: Can be added to component files

### Deploy Your Changes

1. Make your changes to the code (files are auto-synced to container)
2. Rebuild inside container: `docker compose exec web bun run build`
3. Verify everything works at http://localhost:8080
4. Commit your changes: `git add . && git commit -m "Your message"`
5. Push to GitHub: `git push`
6. Deploy via GitHub Actions (see Deployment section)

## 📚 Tech Stack

- **[React Router v7](https://reactrouter.com/)** - Framework for React
- **[React](https://react.dev/)** - UI library
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Motion](https://motion.dev/)** - Animation library (Framer Motion)
- **[Vite](https://vitejs.dev/)** - Build tool and dev server
- **[Bun](https://bun.sh/)** - JavaScript runtime and package manager
- **[Nginx](https://nginx.org/)** - Production web server (in Docker)
- **[GitHub Pages](https://pages.github.com/)** - Static site hosting

## 🤝 Contributing

1. Create a new branch: `git checkout -b feature/your-feature`
2. Make your changes
3. Test thoroughly locally
4. Commit: `git commit -m "Add your feature"`
5. Push: `git push origin feature/your-feature`
6. Create a Pull Request on GitHub

## 📄 License

[Add your license here]

## 🆘 Getting Help

- Check the [GitHub Issues](https://github.com/andrastoth94-creator/anything/issues)
- Review the [React Router Documentation](https://reactrouter.com/start/framework/installation)
- Check [Bun Documentation](https://bun.sh/docs)

## 🌐 Live Site

Visit the live site at: [https://andrastoth94-creator.github.io/anything/](https://andrastoth94-creator.github.io/anything/)
