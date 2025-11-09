import { ExperiencesContent, ExperienceItem } from "@/types/experiences";
import { validateActionButton } from "./validate-action-button";

/**
 * Validates experiences content
 * @throws Error with descriptive message if validation fails
 */
export const validateExperiencesContent = (content: unknown): ExperiencesContent => {
  if (!content || typeof content !== 'object') {
    throw new Error('Experiences content must be an object');
  }

  const data = content as Record<string, unknown>;

  if (!Array.isArray(data.description)) {
    throw new Error('Experiences: requires description as array');
  }

  if (!data.description.every(item => typeof item === 'string')) {
    throw new Error('Experiences: all description items must be strings');
  }

  if (!Array.isArray(data.experiences)) {
    throw new Error('Experiences: requires experiences as array');
  }

  data.experiences.forEach((exp, idx) => {
    validateExperienceItem(exp, `Experiences[${idx}]`);
  });

  return data as unknown as ExperiencesContent;
};

/**
 * Validates a single experience item
 * @throws Error with descriptive message if validation fails
 */
export const validateExperienceItem = (exp: unknown, context: string = "Experience"): ExperienceItem => {
  if (!exp || typeof exp !== 'object') {
    throw new Error(`${context}: must be an object`);
  }

  const e = exp as Record<string, unknown>;

  if (!e.name || typeof e.name !== 'string') {
    throw new Error(`${context}: requires name as string`);
  }

  if (!Array.isArray(e.description)) {
    throw new Error(`${context}: requires description as array`);
  }

  if (!e.description.every(item => typeof item === 'string')) {
    throw new Error(`${context}: all descriptions must be strings`);
  }

  // Optional fields
  if (e.date && typeof e.date !== 'string') {
    throw new Error(`${context}: date must be a string`);
  }

  if (e.color && typeof e.color !== 'string') {
    throw new Error(`${context}: color must be a string`);
  }

  if (e.actions) {
    if (!Array.isArray(e.actions)) {
      throw new Error(`${context}: actions must be an array`);
    }
    e.actions.forEach((action, actionIdx) => {
      validateActionButton(action, `${context} action[${actionIdx}]`);
    });
  }

  return e as unknown as ExperienceItem;
};
