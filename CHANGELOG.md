# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [2.0.0] - 2025-11-09

### Added

#### Documentation
- **Comprehensive documentation suite** in `/docs` directory:
  - `GETTING_STARTED.md` - Step-by-step setup guide for new users
  - `CUSTOMIZATION.md` - Detailed content customization instructions
  - `DEVELOPER_GUIDE.md` - Technical guide for developers
  - `CONTENT_VALIDATION.md` - Schema validation documentation
- **Enhanced README.md** with improved quick-start guide and feature highlights
- **Environment configuration** - `.env.example` file for easy configuration
- **SEO improvements** - `robots.txt` for search engine optimization

#### Features
- **Content validation system** - Type-safe YAML content validation:
  - Validators for all content types (navbar, about, skills, experiences, projects)
  - Runtime validation with helpful error messages
  - TypeScript interfaces for content schemas
  - Located in `src/validators/`
- **Error boundary component** - Production-ready error handling with user-friendly fallback UI
- **Tailwind utilities** - Reusable utility functions in `src/styles/tailwind-utils.ts`
- **Sitemap generation** - Automatic sitemap.xml generation via `gatsby-plugin-sitemap`
- **Bundle analysis** - Webpack bundle analyzer for performance optimization

#### Configuration
- **Environment-based configuration** in `gatsby-config.ts`:
  - Configurable `PATH_PREFIX` for GitHub Pages deployment
  - Configurable `SITE_URL` for production domains
  - Configurable `SITE_TITLE` and `SITE_SHORT_NAME`
- **Sitemap plugin** with weekly update frequency and priority settings
- **Bundle analyzer plugin** for development optimization

### Changed

#### Code Quality & Architecture
- **TypeScript improvements** across all components:
  - Enhanced type safety in theme context (`src/components/theme/theme-context.tsx`)
  - Improved component prop types throughout the application
  - Better error handling with TypeScript types
- **Component refactoring**:
  - Updated `home-layout.tsx` with improved structure
  - Enhanced `dark-toggler.tsx` with better accessibility
  - Refined `contact-button.tsx` and `svg.tsx` components
  - Improved page components (404, experiences, index, projects, skills)

#### Configuration Updates
- **tsconfig.json** - Updated TypeScript configuration for better type checking
- **gatsby-config.ts** - Refactored with environment variable support

#### Content Structure
- **Updated content files** with improved schemas:
  - `navbar.yml` - Enhanced navigation structure
  - `experience.yml` - Improved experience data format
  - `project.yml` - Better project metadata organization

### Dependencies

#### Added
- `gatsby-plugin-sitemap@^6.15.0` - SEO sitemap generation
- `gatsby-plugin-webpack-bundle-analyser-v2@^1.1.32` - Bundle size analysis

#### Updated
- `package-lock.json` - Updated dependency tree for security and performance

### Developer Experience
- **Better error messages** - Improved validation error reporting
- **Type safety** - Enhanced TypeScript coverage across the codebase
- **Documentation** - Comprehensive guides for both users and developers
- **Tooling** - Added bundle analyzer for performance monitoring

### Infrastructure
- **Environment configuration** - Flexible deployment configuration via environment variables
- **SEO optimization** - Sitemap and robots.txt for better search engine indexing

---

## Previous Releases

### [0.2.0] - Previous Release
- Major improvements to CSS and styles
- About section paragraphing support for custom sections
- Removed html-react-parser dependency
- Fixed site metadata "updated at" date display
- Fixed repository prefix path
- Refactored project files to TypeScript
- Refactored to use SVG plugin

### [0.1.0] - Initial Release
- Initial portfolio template with GatsbyJS
- YAML-based content management
- GitHub Actions CI/CD pipeline
- TailwindCSS styling
- Dark mode support
- Responsive design
- Project showcase
- Skills display
- Experience timeline
- About section

---

## Migration Guide

If you're upgrading from a previous version:

1. **Create `.env` file** - Copy `.env.example` and configure your settings
2. **Update content files** - Run validation to ensure YAML files match new schemas
3. **Review documentation** - Check `/docs` folder for new customization options
4. **Test locally** - Run `gatsby develop` to verify all changes work correctly

---

[Unreleased]: https://github.com/algebananazzzzz/NocturnalProject/compare/v2.0.0...HEAD
[2.0.0]: https://github.com/algebananazzzzz/NocturnalProject/compare/v1.0.0...v2.0.0
