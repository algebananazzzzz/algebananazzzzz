/**
 * Content Validation - Modular validators for YAML content files
 *
 * Each validator:
 * - Validates content structure and types
 * - Reuses existing TypeScript type definitions
 * - Provides clear, contextual error messages
 * - Exports both collection and item validators
 *
 * Usage:
 * import { validateProjectContent } from '@/validators';
 * const projects = validateProjectContent(rawContent);
 */

export { validateAboutContent, validateAboutItem } from './validate-about';
export { validateProjectContent, validateProjectItem } from './validate-projects';
export { validateSkillsContent, validateCertificate } from './validate-skills';
export { validateExperiencesContent, validateExperienceItem } from './validate-experiences';
export { validateNavbarContent, validateContactButton, validateExternalLink } from './validate-navbar';
export { validateActionButton } from './validate-action-button';
