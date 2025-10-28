# 3xecutablefile Portfolio

Dark terminal-themed portfolio showcasing offensive security, DFIR, and AI automation work.

## Features

- **Terminal aesthetic:** Monospace fonts, blinking cursor, command-prompt sections
- **GitHub integration:** Auto-fetches repositories via GitHub API
- **Responsive design:** Mobile-friendly with horizontal scrolling for ASCII art
- **SEO optimized:** Proper meta tags and semantic HTML
- **GitHub Pages ready:** Builds to `/docs` for easy deployment

## Tech Stack

- React 18 + TypeScript
- Tailwind CSS (custom terminal color system)
- Vite
- TanStack Query (for GitHub API)
- shadcn/ui components

## Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production (outputs to /docs)
npm run build
```

## Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed GitHub Pages deployment instructions.

**Quick deploy:**
1. Push to GitHub
2. Enable Pages in repo settings (branch: `gh-pages` or `main/docs`)
3. Site live at `https://[username].github.io/[repo-name]`

## Customization

- **Colors:** Edit `src/index.css` (HSL color system)
- **Content:** Update components in `src/components/`
- **Sections:** Modify `src/pages/Index.tsx`
- **GitHub username:** Change in `Projects.tsx` fetch URL

## Project Structure

```
src/
├── components/
│   ├── Hero.tsx          # ASCII banner + badges
│   ├── Whoami.tsx        # Bio section
│   ├── Capabilities.tsx  # Skills breakdown
│   ├── Projects.tsx      # GitHub repos
│   ├── Stack.tsx         # Tech stack JSON
│   ├── Roadmap.tsx       # Future plans
│   └── Contact.tsx       # Contact links
├── pages/
│   └── Index.tsx         # Main page
└── index.css             # Design system
```

## Ethics Notice

All offensive tooling and techniques showcased are for authorized testing, ethical research, and defensive improvement only. No unauthorized access or exploitation.

---

**LinkedIn/Twitter Copy:**

Terminal-first security portfolio for @3xecutablefile (alias: mrrobot). Red Team ops, DFIR engineering, and AI-assisted automation. Built with React + Tailwind, deployed on GitHub Pages. All tooling is lab-only and ethical research focused. Check it out: [your-deployed-url]
