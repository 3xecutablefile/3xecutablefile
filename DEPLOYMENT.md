# Deployment Instructions

This portfolio is configured to deploy to **GitHub Pages** with the build output in `/docs`.

## Quick Deploy

### Option 1: Automatic Deployment (Recommended)

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Initial portfolio"
   git push origin main
   ```

2. **GitHub Actions will automatically:**
   - Build the project
   - Deploy to the `gh-pages` branch
   - Make it live at `https://[username].github.io/[repo-name]`

3. **Enable GitHub Pages:**
   - Go to your repo → Settings → Pages
   - Source: Deploy from branch
   - Branch: `gh-pages` / `root`
   - Save

### Option 2: Manual Build & Push

1. **Build locally:**
   ```bash
   npm run build
   ```

2. **Commit the `/docs` folder:**
   ```bash
   git add docs
   git commit -m "Build for GitHub Pages"
   git push origin main
   ```

3. **Enable GitHub Pages:**
   - Go to repo Settings → Pages
   - Source: Deploy from branch
   - Branch: `main` / `docs`
   - Save

Your site will be live at `https://[username].github.io/[repo-name]` within a few minutes.

## GitHub API Rate Limits

If you're fetching repositories frequently during development, you may hit GitHub's API rate limit (60 requests/hour for unauthenticated requests).

**To increase the limit:**

1. Create a GitHub Personal Access Token (PAT):
   - Go to GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
   - Generate new token with `public_repo` scope
   
2. Add to your environment (for local dev):
   ```bash
   export VITE_GITHUB_TOKEN=your_token_here
   ```

3. Update the fetch in `Projects.tsx`:
   ```typescript
   const response = await fetch("https://api.github.com/users/3xecutablefile/repos", {
     headers: {
       Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN || ''}`
     }
   });
   ```

**Note:** For production builds, the current implementation will use cached data or fallback to placeholders if rate-limited.

## Custom Domain (Optional)

To use a custom domain:

1. Add a `CNAME` file to `/public` with your domain:
   ```
   yourdomain.com
   ```

2. Configure DNS with your domain provider:
   - Type: `CNAME`
   - Name: `@` (or `www`)
   - Value: `[username].github.io`

3. Enable HTTPS in GitHub Pages settings

## Troubleshooting

- **404 on refresh:** GitHub Pages doesn't support client-side routing by default. The current setup uses hash routing to avoid this.
- **Assets not loading:** Ensure `base: "./"` is set in `vite.config.build.ts`
- **Build fails:** Check Node.js version (requires v18+)

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build to `/docs` for GitHub Pages
- `npm run preview` - Preview production build locally

**Note:** The default `npm run build` command now outputs to `/docs` directory for GitHub Pages compatibility.
