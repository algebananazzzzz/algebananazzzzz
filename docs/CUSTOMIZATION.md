# Content Customization Guide

Quick reference for customizing your portfolio through YAML files. All content is in `src/content/`.

## Quick Reference

| File | Purpose | Required Fields |
|------|---------|----------------|
| `navbar.yml` | Header, contact buttons | `title` |
| `aboutme.yml` | Introduction, bio | `description` |
| `project.yml` | Project showcase | `description`, `projects` |
| `skills.yml` | Skills, certifications | `description` |
| `experience.yml` | Work timeline | `description`, `experiences` |

---

## YAML Basics

```yaml
# Use 2 spaces for indentation (not tabs)
field: "value"

# Lists use dashes
items:
  - "First item"
  - "Second item"

# Comments start with #
title: "My Name"  # This is a comment
```

**Common mistakes:**
- ❌ Using tabs instead of spaces
- ❌ Missing space after colon `field:"value"`
- ✅ Use 2 spaces: `  - item`

---

## Navbar (`navbar.yml`)

### Structure

```yaml
title: "Your Name"

contact_buttons:
  - svgName: "contact/github"
    link: "https://github.com/username"
  - svgName: "contact/linkedin"
    link: "https://linkedin.com/in/username"

external_links:
  - title: "Resume"
    asset: "resume.pdf"
  - title: "Blog"
    link: "https://blog.example.com"
```

### Fields

| Field | Required | Type | Description |
|-------|----------|------|-------------|
| `title` | ✅ | String | Your name/site title |
| `contact_buttons` | ❌ | Array | Social/contact icons (max 3-4) |
| `external_links` | ❌ | Array | Additional nav links |

**Contact button options:**
- `svgName`: Icon from `src/assets/svg/contact/`
- `link`: External URL
- `asset`: File from `static/` folder

**Available icons:** `github`, `gitlab`, `linkedin`, `email`, `twitter`

---

## About (`aboutme.yml`)

### Structure

```yaml
title: "About Me"

description:
  - "Paragraph 1..."
  - "Paragraph 2..."

about:
  Education:
    - text: "B.S. Computer Science"
      svgName: "about/graduation"

  Skills:
    - text: "Full-stack Development"
      svgName: "about/code"
```

### Fields

| Field | Required | Type | Description |
|-------|----------|------|-------------|
| `title` | ❌ | String | Section heading (default: "About") |
| `description` | ✅ | Array | Introduction paragraphs |
| `about` | ❌ | Object | Custom sections with items |

**Custom sections:** Create any section name (Education, Skills, Interests, etc.)

**Item fields:**
- `text` (required): Description
- `svgName` (optional): Icon from `src/assets/svg/about/`

---

## Projects (`project.yml`)

### Structure

```yaml
description:
  - "My project portfolio"

projects:
  - name: "Project Name"
    description: "Short description"
    additional_description: "Detailed info with metrics"
    date: "Mar 2024"
    svgIcons: [react, nodejs, docker]
    actions:
      - text: "GitHub"
        link: "https://github.com/..."
      - text: "Demo"
        video: "demo.mp4"

# Optional: Add categories
Hobby Projects:
  - name: "Side Project"
    description: "Fun project"
```

### Fields

| Field | Required | Type | Description |
|-------|----------|------|-------------|
| `description` | ✅ | Array | Section introduction |
| `projects` | ✅ | Array | Main projects list |
| `name` | ✅ | String | Project title |
| `description` | ✅ | String | One-line summary |
| `additional_description` | ❌ | String | Detailed explanation |
| `date` | ❌ | String | Completion date |
| `svgIcons` | ❌ | Array | Tech stack icons |
| `actions` | ❌ | Array | Links/buttons |

**Action types:**
- `link`: External URL
- `asset`: File from `static/`
- `video`: Video file for popup

**Custom categories:** Add sections like "Upcoming Projects", "Archived", etc.

---

## Skills (`skills.yml`)

### Structure

```yaml
description:
  - "My technical skills"

certificates:
  - text: "AWS Certified Solutions Architect"
    link: "https://credly.com/badges/..."
    svgName: "aws"

skillicons:
  - react
  - nodejs
  - docker
  - aws

skills:
  Proficient:
    - "JavaScript/TypeScript"
    - "React & Node.js"

  Competent:
    - "Python"
    - "Docker & Kubernetes"
```

### Fields

| Field | Required | Type | Description |
|-------|----------|------|-------------|
| `description` | ✅ | Array | Section intro |
| `certificates` | ❌ | Array | Professional certifications |
| `skillicons` | ❌ | Array | Tech icons to display |
| `skills` | ❌ | Object | Categorized skill lists |

**Certificate fields:**
- `text` (required): Certification name
- `link` (optional): Badge URL
- `svgName` (optional): Icon

**Skill categories:** Create custom levels (Proficient, Competent, Learning, etc.)

---

## Experiences (`experience.yml`)

### Structure

```yaml
description:
  - "My professional experience"

experiences:
  - name: "Senior Engineer at TechCorp"
    date: "Jan 2022 - Present"
    color: blue
    description:
      - "Led team of 5 developers"
      - "Improved API performance by 40%"
    actions:
      - text: "Recommendation"
        asset: "letter.pdf"

  - name: "Developer at StartupCo"
    date: "Jun 2020 - Dec 2021"
    color: purple
    description:
      - "Built full-stack features"
```

### Fields

| Field | Required | Type | Description |
|-------|----------|------|-------------|
| `description` | ✅ | Array | Section intro |
| `experiences` | ✅ | Array | Experience entries |
| `name` | ✅ | String | Job title + company |
| `date` | ✅ | String | Time period |
| `color` | ❌ | String | Timeline dot color |
| `description` | ❌ | Array | Responsibilities/achievements |
| `actions` | ❌ | Array | Supporting documents |

**Colors:** `blue`, `purple`, `red`, `green`, `yellow`, `pink`, `cyan`, `orange`

---

## SVG Icon Management

### How SVG Icons Work

All SVG icons are stored in `src/assets/svg/` and referenced by **relative path from that folder**.

**Path Resolution:**
```
Reference: docker.svg
Resolves to: src/assets/svg/docker.svg

Reference: contact/github.svg
Resolves to: src/assets/svg/contact/github.svg
```

Icons are automatically loaded when you reference them by name in YAML files.

### Built-in Icon Categories

Icons are organized in folders by usage:

| Folder | Purpose | Examples |
|--------|---------|----------|
| `contact/` | Social/contact links | github, gitlab, linkedin, email, twitter |
| `about/` | About section items | graduation, code, briefcase, cloud, book |
| `skills/` | Technology icons | react, nodejs, python, docker, aws, kubernetes |
| `theme/` | Page illustrations | home.svg, projects.svg, skills.svg |

### Using Icons in YAML

**Simple reference (from root of `src/assets/svg/`):**
```yaml
# Technology icons (in skills/ folder)
svgIcons: [docker, react, nodejs]
# Resolves to: src/assets/svg/docker.svg, src/assets/svg/react.svg, etc.

# Single icon
svgName: "aws"
# Resolves to: src/assets/svg/aws.svg
```

**With folder prefix:**
```yaml
# Contact icons
svgName: "contact/github"
# Resolves to: src/assets/svg/contact/github.svg

# About icons
svgName: "about/graduation"
# Resolves to: src/assets/svg/about/graduation.svg
```

### Adding Your Own Icons

#### Step 1: Find Icons

**Recommended source:** [SVG Repo](https://www.svgrepo.com/)
- 500,000+ free SVG icons
- Searchable by category
- Downloadable in various sizes

**Other sources:**
- [Feather Icons](https://feathericons.com/) – Minimal line icons
- [Heroicons](https://heroicons.com/) – Tailwind's icon set
- [Simple Icons](https://simpleicons.org/) – Brand logos

#### Step 2: Download and Prepare

1. **Download SVG file** from source
2. **Rename file** (lowercase, hyphens): `my-icon.svg`
3. **Optional:** Optimize using [SVGOMG](https://jakearchibald.github.io/svgomg/)

#### Step 3: Place in Folder

Move SVG to appropriate folder in `src/assets/svg/`:

```bash
# For tech stack icons
src/assets/svg/golang.svg
src/assets/svg/tensorflow.svg

# For social icons (in contact/ folder)
src/assets/svg/contact/discord.svg
src/assets/svg/contact/mastodon.svg

# For about section (in about/ folder)
src/assets/svg/about/certificate.svg
src/assets/svg/about/award.svg
```

#### Step 4: Reference by Name

Use the filename (without `.svg` extension) in YAML:

```yaml
# Tech icons (in experiences.yml)
svgIcons: [golang, tensorflow, docker]

# Contact icons (with folder prefix)
contact_buttons:
  - svgName: "contact/discord"
    link: "https://discord.gg/..."

# About icons (with folder prefix)
about:
  Achievements:
    - text: "AWS Certified"
      svgName: "about/certificate"
```

### Complete Example: Adding Go Icon

**1. Visit [svgrepo.com](https://www.svgrepo.com/) and search "golang"**

**2. Download SVG and save as `golang.svg`**

**3. Move to icon folder:**
```bash
# Place in src/assets/svg/ for tech stack icons
mv ~/Downloads/golang.svg src/assets/svg/golang.svg
```

**4. Use in YAML:**
```yaml
# In project.yml
projects:
  - name: "Backend API"
    description: "REST API built with Go"
    svgIcons: [golang, docker, postgresql]
    # ↑ golang.svg is now available!
```

### Icon Best Practices

**File naming:**
- ✅ `docker.svg`, `my-tech.svg`, `custom-icon.svg`
- ❌ `Docker.svg`, `my_tech.svg`, `custom icon.svg`

**Organization:**
- Put tech/tool icons at root: `src/assets/svg/`
- Put social icons in: `src/assets/svg/contact/`
- Put about icons in: `src/assets/svg/about/`

**Optimization:**
- SVGs should be small (< 10KB ideal)
- Use [SVGOMG](https://jakearchibald.github.io/svgomg/) to reduce file size
- Remove unnecessary metadata

**Colors:**
- Icons should work in both light and dark mode
- Use single-color or inherit currentColor for best results

---

## Static Files (PDFs, Videos, Images)

### Location

All static files go in the `static/` folder at project root.

**Supported formats:**
- **PDFs** – Resume, certificates, documents
- **Videos** – MP4, WebM (for project demos)
- **Images** – JPG, PNG, GIF

### Usage in YAML

```yaml
# Link to PDF
asset: "resume.pdf"
# References: static/resume.pdf

# Link to video (opens popup)
video: "demo.mp4"
# References: static/demo.mp4

# Link to image
asset: "screenshot.png"
# References: static/screenshot.png
```

### Examples

**Resume link in navbar:**
```yaml
external_links:
  - title: "Resume"
    asset: "resume.pdf"
```

**Project demo video:**
```yaml
projects:
  - name: "My App"
    actions:
      - text: "Watch Demo"
        video: "app-demo.mp4"
```

**Certificate link:**
```yaml
experiences:
  - name: "AWS Training"
    actions:
      - text: "Certificate"
        asset: "aws-cert.pdf"
```

---

## Quick Examples

### Minimal Setup (3 files)

**navbar.yml**
```yaml
title: "John Doe"
contact_buttons:
  - svgName: "contact/github"
    link: "https://github.com/johndoe"
```

**aboutme.yml**
```yaml
description:
  - "Hi! I'm a developer passionate about web technologies."
```

**project.yml**
```yaml
description:
  - "My projects"
projects:
  - name: "Todo App"
    description: "Task management application"
```

### Complete Example

**project.yml with all features**
```yaml
description:
  - "Portfolio of my work"

projects:
  - name: "E-Commerce Platform"
    description: "Full-stack marketplace"
    additional_description: "Built with React, Node.js, and PostgreSQL. Handles 10K+ daily users with real-time inventory management."
    date: "Mar 2024"
    svgIcons: [react, nodejs, postgresql, docker]
    actions:
      - text: "GitHub"
        link: "https://github.com/user/project"
      - text: "Live Demo"
        link: "https://demo.example.com"
      - text: "Video Walkthrough"
        video: "demo.mp4"

Upcoming:
  - name: "Mobile App"
    description: "React Native project (in progress)"
```

---

## Validation & Errors

### Common Errors

**"Field is required"**
```yaml
# ❌ Missing description
projects:
  - name: "Project"
    # description missing!

# ✅ Fixed
projects:
  - name: "Project"
    description: "Description here"
```

**"Invalid YAML syntax"**
```yaml
# ❌ Tab indentation
projects:
→   - name: "Project"  # Tab character

# ✅ Use 2 spaces
projects:
  - name: "Project"
```

**"SVG not found"**
```yaml
# ❌ Icon doesn't exist
svgName: "github"

# ✅ Use correct path
svgName: "contact/github"
```

### Testing Locally

```bash
# Check for errors
gatsby develop

# Look for validation messages in console
npm run typecheck
```

---

## Tips & Best Practices

### Writing Descriptions

✅ **Good:**
```yaml
description:
  - "Led team of 5 developers, improving deployment speed by 60%"
  - "Built REST API serving 1M+ requests daily"
```

❌ **Avoid:**
```yaml
description:
  - "Did some work on the backend and frontend and also helped with DevOps stuff"
```

**Tips:**
- Use specific numbers/metrics
- Start with action verbs (Led, Built, Improved, Designed)
- Keep it concise

### Organization

**For projects:** Use categories
```yaml
projects:
  - name: "Main project 1"

Web Development:
  - name: "Web project"

Mobile Apps:
  - name: "Mobile project"
```

**For skills:** Group by type
```yaml
skills:
  Languages:
    - "JavaScript, TypeScript, Python"

  Frameworks:
    - "React, Node.js, Express"

  DevOps:
    - "Docker, Kubernetes, AWS"
```

### SEO Tips

- Include relevant keywords in descriptions
- Use your name in `navbar.yml` title
- List specific technologies you know
- Add date info to projects

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Changes not showing | Hard refresh (`Ctrl+Shift+R`) or `gatsby clean` |
| YAML syntax error | Check indentation (2 spaces), quotes, colons |
| Icon not displaying | Verify file exists in `src/assets/svg/` |
| Build fails | Run `npm run typecheck` to see errors |
| Video not playing | Ensure file is in `static/` and correct format (MP4) |

**Need more help?**
- [GETTING_STARTED.md](./GETTING_STARTED.md) – Setup issues
- [DEVELOPER_GUIDE.md](./DEVELOPER_GUIDE.md) – Code questions
- [CONTENT_VALIDATION.md](./CONTENT_VALIDATION.md) – Validation details

---

**Quick customization = edit YAML, save, refresh. That's it! 🚀**
