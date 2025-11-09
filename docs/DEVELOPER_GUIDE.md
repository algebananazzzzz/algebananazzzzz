# Developer Guide

This guide is for developers who want to understand and modify the Nocturnal codebase, contribute to the project, or customize components and styling.

## Table of Contents
- [Project Architecture](#project-architecture)
- [Technology Stack](#technology-stack)
- [Directory Structure](#directory-structure)
- [Component System](#component-system)
- [Styling with Tailwind](#styling-with-tailwind)
- [Type System](#type-system)
- [Content Validation](#content-validation)
- [Data Flow](#data-flow)
- [Dark Mode Implementation](#dark-mode-implementation)
- [Adding New Features](#adding-new-features)
- [Performance & Optimization](#performance--optimization)
- [Testing & Quality](#testing--quality)
- [Deployment Pipeline](#deployment-pipeline)

---

## Project Architecture

### High-Level Overview

```
User visits portfolio site
         ↓
Content (YAML) → Validators → Type System
         ↓
Components (React) ← Styles (Tailwind)
         ↓
Static site (Gatsby) → GitHub Pages
```

### Key Design Principles

1. **Content-Driven Architecture**: All content comes from YAML files, not hardcoded in React
2. **Type Safety**: Full TypeScript support with strict mode enabled
3. **Separation of Concerns**: Content, styling, and components are separate
4. **Dark Mode Support**: Every color explicitly supports dark mode
5. **Minimal Dependencies**: Only essential packages included to reduce bloat

---

## Technology Stack

### Core Technologies

| Technology | Purpose | Version |
|-----------|---------|---------|
| **Gatsby** | Static site generator & React framework | Latest |
| **React** | UI library for components | 18+ |
| **TypeScript** | Type-safe JavaScript | 5+ |
| **TailwindCSS** | Utility-first CSS framework | 3+ |
| **GraphQL** | Data querying in Gatsby | Built-in |

### Build Tools

| Tool | Purpose |
|------|---------|
| Gatsby CLI | Local development & building |
| Node.js/npm | Package management & scripts |
| GitHub Actions | CI/CD automation |

### Key Libraries

```json
{
  "gatsby": "Latest version",
  "react": "For UI components",
  "typescript": "Type safety",
  "tailwindcss": "Styling",
  "yaml": "Content parsing"
}
```

---

## Directory Structure

### Complete Project Layout

```
NocturnalProject/
│
├── src/
│   ├── pages/
│   │   ├── index.tsx           # About/home page
│   │   ├── projects.tsx        # Projects showcase
│   │   ├── skills.tsx          # Skills & certifications
│   │   ├── experiences.tsx     # Work experience timeline
│   │   └── 404.tsx             # Custom 404 page
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   └── home-layout.tsx     # Main layout wrapper
│   │   ├── ui/
│   │   │   ├── contact-button.tsx  # Social contact buttons
│   │   │   ├── dynamic-link.tsx    # Link that handles assets/URLs
│   │   │   ├── svg.tsx             # SVG icon component
│   │   │   ├── project-card.tsx    # Project display card
│   │   │   ├── action-button.tsx   # Action/call-to-action button
│   │   │   ├── video-popup.tsx     # Modal for video playback
│   │   │   └── error-boundary.tsx  # React error handling
│   │   └── theme/
│   │       ├── theme-context.tsx   # Dark mode context
│   │       └── dark-toggler.tsx    # Theme toggle button
│   │
│   ├── content/                 # YAML content files
│   │   ├── navbar.yml           # Navigation & contact
│   │   ├── aboutme.yml          # About section
│   │   ├── project.yml          # Projects
│   │   ├── skills.yml           # Skills & certs
│   │   └── experience.yml       # Experience timeline
│   │
│   ├── styles/
│   │   ├── tailwind-utils.ts    # Reusable Tailwind classes
│   │   └── globals.css          # Global styles
│   │
│   ├── types/                   # TypeScript type definitions
│   │   ├── about.ts
│   │   ├── projects.ts
│   │   ├── skills.ts
│   │   ├── experiences.ts
│   │   ├── navbar.ts
│   │   ├── action-button.ts
│   │   ├── svg.d.ts             # SVG type declarations
│   │   ├── yaml.d.ts            # YAML import types
│   │   └── gatsby-types.d.ts
│   │
│   ├── validators/              # Content validation logic
│   │   ├── index.ts             # Exports all validators
│   │   ├── validate-about.ts
│   │   ├── validate-projects.ts
│   │   ├── validate-skills.ts
│   │   ├── validate-experiences.ts
│   │   ├── validate-navbar.ts
│   │   └── validate-action-button.ts
│   │
│   └── assets/
│       └── svg/                 # Icon and illustration SVGs
│           ├── contact/         # Social icons
│           ├── about/           # About section icons
│           ├── skills/          # Technology icons
│           └── theme/           # Page illustrations
│
├── static/                      # Static assets
│   ├── resume.pdf
│   ├── project-demo.mp4
│   └── ... (user-provided files)
│
├── .github/workflows/
│   └── deployment.yml           # GitHub Actions CI/CD
│
├── gatsby-config.ts             # Gatsby configuration
├── gatsby-browser.tsx           # Gatsby browser APIs
├── gatsby-node.ts               # Gatsby build APIs
├── tsconfig.json                # TypeScript configuration
├── tailwind.config.js           # Tailwind configuration
├── package.json                 # Dependencies & scripts
├── README.md                     # Project overview
├── LICENSE.txt                  # MIT License
│
└── docs/                         # Documentation folder
    ├── GETTING_STARTED.md       # Setup guide (for users)
    ├── CUSTOMIZATION.md         # Content customization (for users)
    ├── DEVELOPER_GUIDE.md       # Architecture guide (for developers)
    └── CONTENT_VALIDATION.md    # Validation system docs
```

### Key Files Explained

#### **src/pages/** - Page Components
Each file here becomes a route:
- `index.tsx` → `/` (About page)
- `projects.tsx` → `/projects`
- `skills.tsx` → `/skills`
- `experiences.tsx` → `/experiences`

#### **src/components/** - Reusable UI Components
Organized by category:
- `layout/` - Page layout wrappers
- `ui/` - Reusable UI components
- `theme/` - Theme-related components

#### **src/content/** - YAML Data Files
All portfolio content is stored here as YAML, not hardcoded.

#### **src/types/** - Type Definitions
TypeScript interfaces for all data structures. Ensures type safety throughout the app.

#### **src/validators/** - Content Validation
Runtime validation for YAML content. Catches errors early and provides helpful messages.

---

## Component System

### Component Architecture

All components follow a functional, React hooks-based architecture.

#### **Layout Component** (`home-layout.tsx`)
The main layout wrapper for all pages.

```typescript
// Props interface
interface Props {
  children: React.ReactNode;
}

// Component structure
const HomeLayout: React.FC<Props> = ({ children }) => {
  // Theme context
  const { theme, toggleTheme } = React.useContext(ThemeContext);

  // GraphQL query for metadata
  const data = useStaticQuery(graphql`...`);

  return (
    <>
      <header>... Navigation ...</header>
      <main>{children}</main>
      <footer>... Footer info ...</footer>
    </>
  );
};
```

**Responsibilities**:
- Header/navbar (title, contact buttons, theme toggle)
- Navigation menu (links to pages)
- Footer (build info, stack credits)
- Layout styling

#### **UI Components** - Reusable Widgets

**ContactButton** (`ui/contact-button.tsx`)
```typescript
interface ContactButtonProps {
  svgName: string;
  link: string;
}
```
- Displays social/contact icons
- Opens link in new tab
- Used in navbar and footer

**DynamicLink** (`ui/dynamic-link.tsx`)
```typescript
interface DynamicLinkProps {
  link?: string;      // External URL
  asset?: string;     // File from static/
}
```
- Smart link component that handles both URLs and static files
- Opens files appropriately (PDF in new tab, etc.)

**SVG** (`ui/svg.tsx`)
```typescript
interface SvgProps {
  name: string;
  className?: string;
  alt?: string;
}
```
- Loads SVG icons by name from `src/assets/svg/`
- Type-safe icon resolution
- Accessibility support (alt text)

**ProjectCard** (`ui/project-card.tsx`)
```typescript
interface ProjectCardProps {
  project: Project;
  setPopup: (video: string | null) => void;
}
```
- Displays individual project in grid
- Shows tech stack icons
- Handles video popup trigger

**ActionButton** (`ui/action-button.tsx`)
```typescript
interface ActionButtonProps {
  text: string;
  link?: string;
  asset?: string;
  video?: () => void;
  color?: string;
}
```
- Call-to-action button
- Supports links, assets, and video actions
- Styled with optional color

**VideoPopup** (`ui/video-popup.tsx`)
```typescript
interface VideoPopupProps {
  popup: string | null;
  setPopup: (value: string | null) => void;
}
```
- Modal for video playback
- Opens videos from `static/` folder
- Handles close/backdrop click

**ErrorBoundary** (`error-boundary.tsx`)
```typescript
interface Props {
  children: React.ReactNode;
}
```
- Catches React errors gracefully
- Displays fallback UI instead of crashing
- Logs errors for debugging

#### **Theme Components** - Dark Mode

**ThemeContext** (`theme/theme-context.tsx`)
```typescript
type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}
```
- Manages theme state globally
- Persists to localStorage
- Triggers page re-renders on change

**ThemeToggler** (`theme/dark-toggler.tsx`)
- Button to toggle theme
- Uses context to switch between light/dark

### Component Patterns

#### **Using Context**
```typescript
const { theme, toggleTheme } = React.useContext(ThemeContext);
```

#### **Using GraphQL Query**
```typescript
const data = useStaticQuery(graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`);
```

#### **Conditional Rendering**
```typescript
{theme === 'dark' ? (
  <MoonIcon className={iconSize.sm} />
) : (
  <SunIcon className={iconSize.sm} />
)}
```

---

## Styling with Tailwind

### Tailwind CSS Approach

Nocturnal uses **utility-first CSS** with TailwindCSS.

### Style Organization

**tailwind-utils.ts** - Reusable Style Collections

Group related Tailwind classes for reusability:

```typescript
export const iconSize = {
  sm: "w-4 h-4 md:w-5 md:h-5",
  xs: "w-4 h-4",
} as const;

export const textColor = {
  secondary: "text-gray-600 dark:text-gray-400",
  muted: "text-gray-700 dark:text-gray-400",
  navLink: "text-gray-700 hover:text-gray-500 dark:text-gray-400 dark:hover:text-gray-500",
} as const;

export const pageSection = {
  headerGrid: "pt-10 md:pt-0 grid lg:grid-cols-7 lg:gap-x-8 xl:gap-x-12 flex items-center",
  title: "flex-none font-medium text-gray-800 dark:text-gray-200 text-3xl md:text-4xl lg:text-5xl inline-flex items-center",
  // ... more utilities
} as const;
```

### Using Tailwind Classes

**Direct in JSX:**
```typescript
<div className="flex gap-4 p-6">
  <p className="text-lg font-semibold">Title</p>
</div>
```

**From tailwind-utils:**
```typescript
import { pageSection, iconSize, textColor } from "@/styles/tailwind-utils";

<div className={pageSection.headerGrid}>
  <h1 className={pageSection.title}>Welcome</h1>
  <Svg name="contact/github" className={iconSize.sm} />
</div>
```

**Template Literals for Conditions:**
```typescript
<div className={`${baseClass} ${condition && 'additional-class'}`}>
  Content
</div>
```

### Dark Mode Support

All colors explicitly support dark mode:

```typescript
// ✅ Good - supports both light and dark
className="text-gray-800 dark:text-gray-200"

// ❌ Bad - no dark mode support
className="text-gray-800"
```

### Responsive Design

Tailwind's breakpoints are used extensively:

```typescript
// Small (default) → Medium → Large
className="text-base md:text-lg lg:text-xl"
className="flex flex-col lg:flex-row"
className="hidden lg:flex"  // Hidden on mobile, visible on desktop
```

**Breakpoints:**
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px

### Customization Examples

#### **Changing Colors**

In `tailwind-utils.ts`:
```typescript
export const textColor = {
  secondary: "text-blue-600 dark:text-blue-400",  // Changed from gray
};
```

#### **Adding New Utility Collection**

```typescript
export const card = {
  container: "rounded-lg border border-gray-200 dark:border-gray-700 p-4 shadow-sm",
  title: "font-semibold text-lg text-gray-900 dark:text-gray-100",
} as const;
```

Then use:
```typescript
import { card } from "@/styles/tailwind-utils";

<div className={card.container}>
  <h3 className={card.title}>Card Title</h3>
</div>
```

---

## Type System

### TypeScript Configuration

Strict mode enabled for maximum type safety:

```json
{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "strictFunctionTypes": true,
    "esModuleInterop": true
  }
}
```

### Type Definitions

All data structures have corresponding TypeScript types:

#### **Content Types** (`src/types/`)

**about.ts**
```typescript
export interface AboutContent {
  title?: string;
  description: string[];
  about?: Record<string, AboutItem[]>;
}

export interface AboutItem {
  text: string;
  svgName?: string;
}
```

**projects.ts**
```typescript
export interface Project {
  name: string;
  description: string;
  additional_description?: string;
  date?: string;
  svgIcons?: string[];
  actions?: ActionButton[];
}
```

**skills.ts**
```typescript
export interface Certificate {
  text: string;
  link?: string;
  svgName?: string;
}

export interface SkillsContent {
  description: string[];
  certificates?: Certificate[];
  skillicons?: string[];
  skills?: Record<string, string[]>;
}
```

### Using Types in Components

```typescript
import type { Project } from '@/types/projects';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div>
      <h3>{project.name}</h3>
      <p>{project.description}</p>
    </div>
  );
};
```

### Type Checking

Run type validation:
```bash
npm run typecheck
```

This ensures:
- No implicit `any` types
- All function arguments are properly typed
- All object properties exist
- Type compatibility

---

## Content Validation

### Validation System

Each content type has a validator to ensure correctness at runtime.

#### **Validation Flow**

```
YAML File
   ↓
Parser (raw data)
   ↓
Validator (check structure & types)
   ↓
✅ Valid → Component renders
   ↓
❌ Invalid → Error message logged
```

#### **Validators** (`src/validators/`)

**validate-about.ts**
```typescript
export function validateAbout(data: unknown): AboutContent {
  // Checks:
  // - description is array of strings
  // - about items have required fields
  // - optional fields are correct type
}
```

**validate-projects.ts**
```typescript
export function validateProjects(data: unknown): ProjectContent {
  // Checks:
  // - projects array exists
  // - each project has name and description
  // - dates are valid format
  // - svgIcons are strings
}
```

Similar validators exist for all content types.

### Error Messages

Validators provide helpful error messages:

```
Error: About validation failed: description must be an array of strings
Error: Projects validation failed: project at index 0 missing required field 'name'
```

### Adding Validation

1. **Define type** in `src/types/`
2. **Create validator** in `src/validators/`
3. **Export from** `src/validators/index.ts`
4. **Import and use** in page component

---

## Data Flow

### Complete Data Path

```
1. User edits YAML file
   (src/content/aboutme.yml)
        ↓
2. Gatsby loads YAML
   (gatsby-config.ts plugins)
        ↓
3. File parsed as raw data
   (JavaScript object)
        ↓
4. Validator checks structure
   (src/validators/validate-about.ts)
        ↓
5. Type-safe data
   (AboutContent type)
        ↓
6. Component receives data
   (src/pages/index.tsx)
        ↓
7. Render with Tailwind styling
   (className from tailwind-utils.ts)
        ↓
8. Static HTML generated
   (Gatsby build)
        ↓
9. Deployed to GitHub Pages
   (via GitHub Actions)
```

### Code Example: Complete Flow

**1. YAML File** (`src/content/aboutme.yml`)
```yaml
description:
  - "Hello! I'm a developer."
```

**2. Type Definition** (`src/types/about.ts`)
```typescript
export interface AboutContent {
  description: string[];
}
```

**3. Validator** (`src/validators/validate-about.ts`)
```typescript
export function validateAbout(data: unknown): AboutContent {
  // Validates structure
  return data as AboutContent;
}
```

**4. Page Component** (`src/pages/index.tsx`)
```typescript
import rawAboutContent from '@/content/aboutme.yml';
import type { AboutContent } from '@/types/about';
import { validateAbout } from '@/validators';

const about = validateAbout(rawAboutContent) as AboutContent;

const IndexPage = () => {
  return (
    <HomeLayout>
      {about.description.map((desc, i) => (
        <p key={i} className={pageSection.description}>
          {desc}
        </p>
      ))}
    </HomeLayout>
  );
};
```

**5. Rendered HTML** (in browser)
```html
<p class="flex mt-5 text-justify text-base md:text-lg text-gray-700 dark:text-gray-400">
  Hello! I'm a developer.
</p>
```

---

## Dark Mode Implementation

### How Dark Mode Works

**Theme Context** manages the current theme globally:

```typescript
type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = React.createContext<ThemeContextType | undefined>(undefined);
```

### Implementation Details

**1. Theme Provider** (`gatsby-browser.tsx`)
Wraps entire app with ThemeContext:
```typescript
<ThemeProvider>
  {children}
</ThemeProvider>
```

**2. Theme Persistence** (`theme-context.tsx`)
Saves theme preference to localStorage:
```typescript
const savedTheme = localStorage.getItem('theme') as Theme;
const [theme, setTheme] = useState<Theme>(savedTheme || 'light');

const toggleTheme = () => {
  const newTheme = theme === 'light' ? 'dark' : 'light';
  setTheme(newTheme);
  localStorage.setItem('theme', newTheme);
};
```

**3. HTML Class** (`gatsby-browser.tsx`)
Adds `dark` class to `<html>` element:
```typescript
if (theme === 'dark') {
  document.documentElement.classList.add('dark');
} else {
  document.documentElement.classList.remove('dark');
}
```

**4. Tailwind Dark Mode**
Uses Tailwind's `dark:` prefix for dark mode styles:
```typescript
// Light mode (default)
className="bg-white text-gray-900"

// Dark mode (when dark class is on html)
className="dark:bg-slate-900 dark:text-gray-100"
```

### Adding Dark Mode Support

When styling, always include dark mode:

```typescript
// ✅ Good - supports dark mode
<div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
  Content
</div>

// ❌ Bad - no dark mode
<div className="bg-white text-gray-900">
  Content
</div>
```

### Color Palette

**Light Mode Colors:**
- Background: `white` / `gray-50`
- Text: `gray-900` / `gray-800`
- Secondary: `gray-600` / `gray-700`
- Borders: `gray-200`

**Dark Mode Colors:**
- Background: `slate-900` / `gray-900`
- Text: `gray-100` / `gray-200`
- Secondary: `gray-400`
- Borders: `gray-700` / `gray-800`

---

## Adding New Features

### Example: Add a New Page Section

#### **Step 1: Create Type Definition**
`src/types/portfolio.ts`
```typescript
export interface PortfolioContent {
  title: string;
  items: PortfolioItem[];
}

export interface PortfolioItem {
  name: string;
  description: string;
  image: string;
}
```

#### **Step 2: Create Validator**
`src/validators/validate-portfolio.ts`
```typescript
export function validatePortfolio(data: unknown): PortfolioContent {
  // Validation logic
  return data as PortfolioContent;
}
```

Export from `src/validators/index.ts`:
```typescript
export { validatePortfolio } from './validate-portfolio';
```

#### **Step 3: Create YAML Content**
`src/content/portfolio.yml`
```yaml
title: "Portfolio"
items:
  - name: "Item 1"
    description: "Description"
    image: "image.jpg"
```

#### **Step 4: Create Page Component**
`src/pages/portfolio.tsx`
```typescript
import rawPortfolioContent from '@/content/portfolio.yml';
import type { PortfolioContent } from '@/types/portfolio';
import { validatePortfolio } from '@/validators';
import HomeLayout from '@/components/layout/home-layout';

const PortfolioPage = () => {
  const portfolio = validatePortfolio(rawPortfolioContent) as PortfolioContent;

  return (
    <HomeLayout>
      <div className={pageSection.headerGrid}>
        <h1 className={pageSection.title}>{portfolio.title}</h1>
      </div>
      {portfolio.items.map(item => (
        <div key={item.name}>
          <h3 className={pageSection.sectionHeading}>{item.name}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </HomeLayout>
  );
};

export default PortfolioPage;

export const Head = () => (
  <>
    <title>Portfolio</title>
    <meta name="description" content="My portfolio" />
  </>
);
```

#### **Step 5: Add Navigation Link**
Update `src/content/navbar.yml` to include the new page in external_links.

---

## Performance & Optimization

### Built-in Optimizations

1. **Static Site Generation**: Gatsby builds static HTML, no server needed
2. **Code Splitting**: Each page loads only its required code
3. **Image Optimization**: Images automatically optimized
4. **CSS Purging**: Only used Tailwind classes included in build
5. **Lazy Loading**: Components load on demand

### Performance Best Practices

**1. Minimize Bundle Size**
- Keep dependencies minimal
- Use tree-shaking compatible imports
- Avoid unnecessary polyfills

**2. Optimize Images**
- Use SVGs for icons (already done)
- Compress images in `static/`
- Use correct file formats

**3. CSS Performance**
- Use utility-first approach (Tailwind)
- Avoid inline styles
- Extract reusable utilities to tailwind-utils.ts

**4. Component Performance**
- Use React.memo for expensive components
- Avoid unnecessary re-renders
- Use useCallback for event handlers

### Measuring Performance

```bash
# Build and analyze
gatsby build
```

Check build size and warning messages.

---

## Testing & Quality

### Type Checking

```bash
npm run typecheck
```

Validates all TypeScript types.

### Code Quality

**ESLint** (if configured):
```bash
npm run lint
```

### Pre-Deployment Checks

1. **TypeScript**: `npm run typecheck`
2. **Build**: `gatsby build`
3. **Tests**: Manual testing in dev server

---

## Deployment Pipeline

### GitHub Actions CI/CD

**File**: `.github/workflows/deployment.yml`

### Deployment Flow

```
1. Developer pushes to main
         ↓
2. GitHub Actions triggered
         ↓
3. Node.js environment set up
         ↓
4. Dependencies installed
         ↓
5. TypeScript type check
         ↓
6. Gatsby build (static HTML)
         ↓
7. Deploy to gh-pages branch
         ↓
8. GitHub Pages serves site
         ↓
9. Site live at https://...
```

### Manual Deployment

If needed, deploy locally:

```bash
# Build static site
gatsby build

# Deploy to gh-pages
gatsby deploy --prefix-paths
```

### Customizing Deployment

Edit `.github/workflows/deployment.yml` to:
- Change build commands
- Add testing steps
- Deploy to different hosts
- Add deployment notifications

---

## Troubleshooting for Developers

### Common Issues

#### **GraphQL Type Errors**
```bash
gatsby clean
gatsby develop
```

Clear cache and regenerate types.

#### **Tailwind Classes Not Applied**
1. Check class syntax
2. Ensure class is in `content` array in `tailwind.config.js`
3. Rebuild: `gatsby build`

#### **SVG Not Found**
1. Verify file exists in `src/assets/svg/`
2. Check exact filename and path
3. Use correct folder prefix (contact/, about/, etc.)

#### **Content Not Updating**
1. Restart dev server
2. Check YAML syntax
3. Verify validation passes

---

## Contributing Guidelines

### Before Submitting PR

1. ✅ Run `npm run typecheck` - no errors
2. ✅ Test locally with `gatsby develop`
3. ✅ Follow existing code patterns
4. ✅ Update types if adding new fields
5. ✅ Update validators if changing data structure
6. ✅ Document changes in comments

### Code Style

- Use TypeScript for all code
- Follow existing component patterns
- Use utility-first CSS (Tailwind)
- Include JSDoc comments for exports
- Keep components focused and single-responsibility

---

## Additional Resources

### Official Documentation

- [Gatsby Documentation](https://www.gatsbyjs.com/docs/)
- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [TailwindCSS Documentation](https://tailwindcss.com/docs/)

### Project Documentation

- [GETTING_STARTED.md](./GETTING_STARTED.md) - Setup guide
- [CUSTOMIZATION.md](./CUSTOMIZATION.md) - Content customization
- [CONTENT_VALIDATION.md](./CONTENT_VALIDATION.md) - Validation system
- [README.md](../README.md) - Project overview

---

**Happy coding! If you have questions, check the relevant documentation or open an issue on GitHub.**
