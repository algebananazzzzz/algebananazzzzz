import { AboutContent, AboutItem } from "@/types/about";

/**
 * Validates about page content
 * @throws Error with descriptive message if validation fails
 */
export const validateAboutContent = (content: unknown): AboutContent => {
  if (!content || typeof content !== 'object') {
    throw new Error('About content must be an object');
  }

  const data = content as Record<string, unknown>;

  if (!data.title || typeof data.title !== 'string') {
    throw new Error('About: requires title as string');
  }

  if (!Array.isArray(data.description)) {
    throw new Error('About: requires description as array');
  }

  if (!data.description.every(item => typeof item === 'string')) {
    throw new Error('About: all description items must be strings');
  }

  // Validate about sections if present
  if (data.about) {
    if (typeof data.about !== 'object') {
      throw new Error('About: about sections must be an object');
    }

    const aboutSections = data.about as Record<string, unknown>;
    Object.entries(aboutSections).forEach(([sectionName, items]) => {
      if (!Array.isArray(items)) {
        throw new Error(`About["${sectionName}"]: must be an array`);
      }

      items.forEach((item, idx) => {
        validateAboutItem(item, `About["${sectionName}"][${idx}]`);
      });
    });
  }

  return data as unknown as AboutContent;
};

/**
 * Validates a single about item
 * @throws Error with descriptive message if validation fails
 */
export const validateAboutItem = (item: unknown, context: string = "About item"): AboutItem => {
  if (!item || typeof item !== 'object') {
    throw new Error(`${context}: must be an object`);
  }

  const obj = item as Record<string, unknown>;

  if (!obj.text || typeof obj.text !== 'string') {
    throw new Error(`${context}: requires text as string`);
  }

  if (obj.svgName && typeof obj.svgName !== 'string') {
    throw new Error(`${context}: svgName must be a string`);
  }

  return obj as unknown as AboutItem;
};
