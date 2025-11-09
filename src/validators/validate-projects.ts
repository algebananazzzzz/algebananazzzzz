import { ProjectContent, ProjectItem } from "@/types/projects";
import { validateActionButton } from "./validate-action-button";

/**
 * Validates projects content
 * @throws Error with descriptive message if validation fails
 */
export const validateProjectContent = (content: unknown): ProjectContent => {
  if (!content || typeof content !== 'object') {
    throw new Error('Projects content must be an object');
  }

  const data = content as Record<string, unknown>;

  if (!Array.isArray(data.description)) {
    throw new Error('Projects: requires description as array');
  }

  if (!data.description.every(item => typeof item === 'string')) {
    throw new Error('Projects: all description items must be strings');
  }

  if (!Array.isArray(data.projects)) {
    throw new Error('Projects: requires projects as array');
  }

  data.projects.forEach((project, idx) => {
    validateProjectItem(project, `Projects[${idx}]`);
  });

  return data as unknown as ProjectContent;
};

/**
 * Validates a single project item
 * @throws Error with descriptive message if validation fails
 */
export const validateProjectItem = (project: unknown, context: string = "Project"): ProjectItem => {
  if (!project || typeof project !== 'object') {
    throw new Error(`${context}: must be an object`);
  }

  const proj = project as Record<string, unknown>;

  if (!proj.name || typeof proj.name !== 'string') {
    throw new Error(`${context}: requires name as string`);
  }

  if (!proj.description || typeof proj.description !== 'string') {
    throw new Error(`${context}: requires description as string`);
  }

  // Optional fields
  if (proj.additional_description && typeof proj.additional_description !== 'string') {
    throw new Error(`${context}: additional_description must be a string`);
  }

  if (proj.date && typeof proj.date !== 'string') {
    throw new Error(`${context}: date must be a string`);
  }

  if (proj.svgIcons) {
    if (!Array.isArray(proj.svgIcons)) {
      throw new Error(`${context}: svgIcons must be an array`);
    }
    if (!proj.svgIcons.every(icon => typeof icon === 'string')) {
      throw new Error(`${context}: all svgIcons must be strings`);
    }
  }

  if (proj.actions) {
    if (!Array.isArray(proj.actions)) {
      throw new Error(`${context}: actions must be an array`);
    }
    proj.actions.forEach((action, actionIdx) => {
      validateActionButton(action, `${context} action[${actionIdx}]`);
    });
  }

  return proj as unknown as ProjectItem;
};
