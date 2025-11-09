# Content Validation Guide

This document explains how to use the modular content validators to ensure YAML content files are properly structured.

## Overview

The `src/validators/` directory provides modular validation functions for all content YAML files:
- `validate-about.ts` - About page content validation
- `validate-projects.ts` - Projects content validation
- `validate-skills.ts` - Skills content validation
- `validate-experiences.ts` - Experiences content validation
- `validate-navbar.ts` - Navigation bar content validation
- `validate-action-button.ts` - Shared action button validation
- `index.ts` - Central exports for easy importing

These validators:
- Reuse existing TypeScript type definitions (no duplication)
- Check that required fields are present
- Verify field types are correct
- Provide clear, contextual error messages if validation fails

## Validation Functions

### About Content
**File**: `src/content/aboutme.yml`
**Validator**: `validateAboutContent()`

Required fields:
- `title` (string): Page title
- `description` (string[]): Array of description paragraphs

Optional fields:
- `about` (object): Sections with items containing:
  - `text` (string): Required text content
  - `svgName` (string): Optional icon name

Example:
```yaml
title: About Me
description:
  - First paragraph about yourself
  - Second paragraph about yourself
about:
  Endeavors:
    - svgName: icon_name
      text: Endeavor description
```

### Projects Content
**File**: `src/content/project.yml`
**Validator**: `validateProjectContent()`

Required fields:
- `description` (string[]): Array of description paragraphs
- `projects` (object[]): Array of project items with:
  - `name` (string): Project name
  - `description` (string): Short description

Optional fields:
- `additional_description` (string): Longer description
- `date` (string): Project date
- `svgIcons` (string[]): Array of technology icons
- `actions` (object[]): Array of action buttons (see below)

### Skills Content
**File**: `src/content/skills.yml`
**Validator**: `validateSkillsContent()`

Required fields:
- `description` (string[]): Array of description paragraphs

Optional fields:
- `certificates` (object[]): Array of certifications with:
  - `text` (string): Certificate name
  - `link` (string): URL to certificate
  - `svgName` (string): Icon name
- `skillicons` (string[]): Array of skill/tech icons
- `skills` (object): Categories with arrays of skill strings

### Experiences Content
**File**: `src/content/experience.yml`
**Validator**: `validateExperiencesContent()`

Required fields:
- `description` (string[]): Array of description paragraphs
- `experiences` (object[]): Array of experience items with:
  - `name` (string): Job title or company name
  - `date` (string): Employment dates
  - `color` (string): Tailwind color (e.g., "red", "blue")
  - `description` (string[]): Array of bullet points

Optional fields:
- `actions` (object[]): Array of action buttons (see below)

### Navbar Content
**File**: `src/content/navbar.yml`
**Validator**: `validateNavbarContent()`

Required fields:
- `title` (string): Site title
- `contact_buttons` (object[]): Array of contact buttons with:
  - `svgName` (string): Icon name
  - `link` (string): URL

Optional fields:
- `external_links` (object[]): Array of external links with:
  - `title` (string): Link text
  - `link` (string): Optional URL
  - `asset` (string): Optional asset path

## Action Buttons
Used in projects and experiences. Structure:
```
- text: "Button text"
  link: "https://example.com"      # Optional: external link
  asset: "/path/to/file"           # Optional: local file
  video: "video-name"              # Optional: video to play
  color: "blue"                     # Optional: Tailwind color
```

At least one of `link`, `asset`, or `video` should be provided.

## Using Validators in Code

Import validators from the main index and use them to catch content errors:

```typescript
import { validateProjectContent } from '@/validators';
import rawProjectContent from '@/content/project.yml';

try {
  const projects = validateProjectContent(rawProjectContent);
  // Use projects safely - types are guaranteed
} catch (err) {
  console.error('Invalid project content:', err.message);
}
```

Or import specific validators:

```typescript
import { validateAboutContent, validateSkillsContent } from '@/validators';

const aboutData = validateAboutContent(rawAbout);
const skillsData = validateSkillsContent(rawSkills);
```

## Error Messages

Validators provide detailed error messages indicating:
- Which field is missing or invalid
- What type is expected
- Which item in an array failed (if applicable)

Example errors:
```
"Project[2] requires description as string"
"Experience[1] action[0]: Action button requires text field as string"
"Skills content requires description as array"
```

## Best Practices

1. **Validate at build time**: Add validation to `gatsby-node.ts` to catch errors before build
2. **Use TypeScript interfaces**: Import interfaces from validators for type safety
3. **Provide clear error messages**: Read validator error messages carefully
4. **Test after changes**: Run validators after editing YAML files
5. **Use the provided types**: Components expect validated content

## Integration Example

To validate all content at build time, add to `gatsby-node.ts`:

```typescript
import {
  validateAboutContent,
  validateProjectContent,
  validateSkillsContent,
  validateExperiencesContent,
  validateNavbarContent
} from '@/validators';

export const onCreateNode = () => {
  try {
    const aboutContent = require('@/content/aboutme.yml').default;
    validateAboutContent(aboutContent);

    const projectContent = require('@/content/project.yml').default;
    validateProjectContent(projectContent);

    const skillsContent = require('@/content/skills.yml').default;
    validateSkillsContent(skillsContent);

    const experienceContent = require('@/content/experience.yml').default;
    validateExperiencesContent(experienceContent);

    const navbarContent = require('@/content/navbar.yml').default;
    validateNavbarContent(navbarContent);

    console.log('✓ All content validation passed');
  } catch (err) {
    console.error('✗ Content validation failed:', err.message);
    process.exit(1);
  }
};
```

## Troubleshooting

**"X requires Y as string"**
- The field value is not a string. Check YAML syntax - strings shouldn't have quotes in some cases where they're needed

**"X must be an array"**
- Expected an array but got an object or string. In YAML, arrays use `-` prefix

**"X[n] must be an object"**
- Item at index `n` is not properly formatted as an object. Check indentation and structure

**Type mismatch errors**
- Verify field types in YAML match the expected types in validation functions
