# Getting Started Guide

Complete setup instructions for Nocturnal Project. For a quick overview, see the [README](../README.md).

## Table of Contents
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Local Development](#local-development)
- [First Customization](#first-customization)
- [Deployment](#deployment)
- [Troubleshooting](#troubleshooting)

---

## Prerequisites

- **Node.js** v18+ – [Download](https://nodejs.org/)
- **Git** – [Download](https://git-scm.com/)
- **GitHub account** (for deployment)

**Optional:** Install Gatsby CLI globally for convenience
```bash
npm install -g gatsby-cli
```

---

## Installation

### 1. Clone and Setup

```bash
# Clone the repository
git clone https://github.com/algebananazzzzz/NocturnalProject.git
cd NocturnalProject

# Install dependencies
npm install

# Verify installation
gatsby --version
npm run typecheck
```

### 2. Configure for Your Repository

Remove the original remote and add your own:

```bash
# Remove original remote
git remote rm origin

# Add your repository
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git

# Verify
git remote -v
```

### 3. Update Path Prefix (If Needed)

If deploying to `username.github.io/repo-name` (not root), update `gatsby-config.ts`:

```typescript
const config: GatsbyConfig = {
  pathPrefix: `/YOUR_REPO_NAME`,  // Change this
  // ...
}
```

**Skip this step if:**
- Your repo is named `username.github.io` (GitHub user site)
- Deploying to custom domain

---

## Local Development

### Start Development Server

```bash
gatsby develop
```

**Access:**
- Site: `http://localhost:8000`
- GraphQL: `http://localhost:8000/___graphql`

Changes to YAML files auto-reload instantly.

### Available Commands

| Command | Purpose |
|---------|---------|
| `gatsby develop` | Start dev server with hot-reload |
| `gatsby build` | Build for production |
| `gatsby clean` | Clear cache (fixes weird issues) |
| `npm run typecheck` | Check TypeScript errors |
| `npm audit` | Security vulnerability check |

### File Structure Quick Reference

```
NocturnalProject/
├── src/content/          ← Edit these to customize
│   ├── navbar.yml
│   ├── aboutme.yml
│   ├── project.yml
│   ├── skills.yml
│   └── experience.yml
├── src/assets/svg/       ← Add custom SVG icons
├── static/               ← PDFs, images, videos
├── gatsby-config.ts      ← Site configuration
└── docs/                 ← Documentation
```

---

## First Customization

All portfolio content is managed through **5 YAML files** in `src/content/`:

| File | What to Customize |
|------|-------------------|
| `navbar.yml` | Your name, social links (GitHub, LinkedIn, etc.) |
| `aboutme.yml` | Introduction, bio, education, interests |
| `project.yml` | Projects with descriptions, tech stacks, demos |
| `skills.yml` | Technical skills, certifications, tech icons |
| `experience.yml` | Work history, job responsibilities, timeline |

**Quick start:**
1. Open any file in `src/content/`
2. Edit the YAML content
3. Save file
4. See changes instantly at `localhost:8000`

**📚 Complete guide:** [CUSTOMIZATION.md](./CUSTOMIZATION.md)
- Field reference for all 5 files
- SVG icon management (add custom icons from [svgrepo.com](https://www.svgrepo.com/))
- Static files (PDFs, videos, images)
- Examples and best practices

---

## Deployment

### GitHub Pages Setup

#### Step 1: Create GitHub Repository

1. Go to [github.com/new](https://github.com/new)
2. Name it (e.g., `portfolio` or `your-name.github.io`)
3. Choose **Public** (required for free GitHub Pages)
4. Click "Create repository"

#### Step 2: Configure GitHub Pages

```bash
# Update pathPrefix in gatsby-config.ts if needed (see Installation step 3)

# Commit your changes
git add -A
git commit -m "Initial portfolio setup"

# Set branch to main
git branch -M main

# Push to GitHub
git push -u origin main
```

#### Step 3: Enable GitHub Pages

1. Go to repository **Settings** → **Pages**
2. **Source:** Deploy from a branch
3. **Branch:** Select `gh-pages` (will appear after first deploy)
4. **Save**

#### Step 4: Monitor Deployment

1. Go to **Actions** tab in your repository
2. Watch the "Build and Deploy" workflow
3. Once complete (green checkmark), your site is live!

**Your site URL:**
- `https://USERNAME.github.io/` (if repo is `USERNAME.github.io`)
- `https://USERNAME.github.io/REPO_NAME/` (for other repo names)

### Subsequent Updates

Just push to main branch:

```bash
git add -A
git commit -m "Update content"
git push
```

GitHub Actions rebuilds automatically (takes ~2-3 minutes).

### Environment Variables (Optional)

For advanced configuration, create `.env.local`:

```bash
cp .env.example .env.local
```

Edit `.env.local`:
```env
PATH_PREFIX=/my-portfolio
SITE_URL=https://username.github.io/my-portfolio
SITE_TITLE=John Doe Portfolio
SITE_SHORT_NAME=Portfolio
```

**When to use:**
- Custom SEO metadata
- Different site titles
- Non-standard deployment paths

---

## Troubleshooting

### Port 8000 Already in Use

```bash
# Find process using port 8000
lsof -i :8000

# Kill it
kill -9 <PID>

# Or use different port
gatsby develop -p 3000
```

### Content Changes Not Showing

1. **Hard refresh:** `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
2. **Clear cache:**
   ```bash
   gatsby clean
   gatsby develop
   ```
3. **Check console:** Look for YAML syntax errors

### Build Fails

```bash
# Test build locally
gatsby build

# Check TypeScript errors
npm run typecheck

# Common fixes:
# - Fix YAML indentation (use 2 spaces)
# - Check required fields exist
# - Verify SVG icon names match files
```

### GitHub Actions Fails

1. Check **Actions** tab for error details
2. Look for validation errors in logs
3. Common issues:
   - Missing required YAML fields
   - Invalid YAML syntax
   - Incorrect pathPrefix
4. See [CUSTOMIZATION.md](./CUSTOMIZATION.md#validation--errors) for field requirements

### Site Looks Different After Deploy

1. Verify `pathPrefix` matches your URL structure
2. Wait 5-10 minutes for GitHub Pages cache
3. Hard refresh browser
4. Check browser console for 404 errors

### Missing Icons

- Ensure SVG file exists in `src/assets/svg/`
- Check exact filename (case-sensitive)
- Use correct folder: `contact/`, `about/`, `skills/`

---

## Next Steps

### Add More Content

- **Projects:** Add project showcases with tech stacks
- **Skills:** List certifications and technologies
- **Experiences:** Build professional timeline
- **Assets:** Add PDFs (resume), videos (demos), images

**Complete guides:**
- [CUSTOMIZATION.md](./CUSTOMIZATION.md) – All YAML options
- [DEVELOPER_GUIDE.md](./DEVELOPER_GUIDE.md) – Modify code/styles

### Enhance Your Portfolio

1. **Add custom SVG icons** – Place in `src/assets/svg/`
2. **Add project demos** – Videos in `static/`, reference in `project.yml`
3. **Include resume** – PDF in `static/`, link in `navbar.yml`
4. **Customize colors** – See [Tailwind guide](./DEVELOPER_GUIDE.md#styling-with-tailwind)

### Learn the Stack

- [Gatsby Docs](https://www.gatsbyjs.com/docs/)
- [React Docs](https://react.dev/)
- [TailwindCSS Docs](https://tailwindcss.com/docs/)
- [GitHub Pages](https://pages.github.com/)

---

## Getting Help

- **Content questions:** [CUSTOMIZATION.md](./CUSTOMIZATION.md)
- **Code questions:** [DEVELOPER_GUIDE.md](./DEVELOPER_GUIDE.md)
- **Validation errors:** [CONTENT_VALIDATION.md](./CONTENT_VALIDATION.md)
- **Bug reports:** [Open an issue](https://github.com/algebananazzzzz/NocturnalProject/issues)

---

**Happy building! 🚀**
