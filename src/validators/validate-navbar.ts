import { NavbarContent, ContactButton, ExternalLink } from "@/types/navbar";

/**
 * Validates navbar content
 * @throws Error with descriptive message if validation fails
 */
export const validateNavbarContent = (content: unknown): NavbarContent => {
  if (!content || typeof content !== 'object') {
    throw new Error('Navbar content must be an object');
  }

  const data = content as Record<string, unknown>;

  if (!data.title || typeof data.title !== 'string') {
    throw new Error('Navbar: requires title as string');
  }

  if (!Array.isArray(data.contact_buttons)) {
    throw new Error('Navbar: requires contact_buttons as array');
  }

  data.contact_buttons.forEach((btn, idx) => {
    validateContactButton(btn, `Navbar contact_buttons[${idx}]`);
  });

  if (data.external_links) {
    if (!Array.isArray(data.external_links)) {
      throw new Error('Navbar: external_links must be an array');
    }

    data.external_links.forEach((link, idx) => {
      validateExternalLink(link, `Navbar external_links[${idx}]`);
    });
  }

  return data as unknown as NavbarContent;
};

/**
 * Validates a single contact button
 * @throws Error with descriptive message if validation fails
 */
export const validateContactButton = (btn: unknown, context: string = "Contact button"): ContactButton => {
  if (!btn || typeof btn !== 'object') {
    throw new Error(`${context}: must be an object`);
  }

  const b = btn as Record<string, unknown>;

  if (!b.svgName || typeof b.svgName !== 'string') {
    throw new Error(`${context}: requires svgName as string`);
  }

  if (!b.link || typeof b.link !== 'string') {
    throw new Error(`${context}: requires link as string`);
  }

  return b as unknown as ContactButton;
};

/**
 * Validates a single external link
 * @throws Error with descriptive message if validation fails
 */
export const validateExternalLink = (link: unknown, context: string = "External link"): ExternalLink => {
  if (!link || typeof link !== 'object') {
    throw new Error(`${context}: must be an object`);
  }

  const l = link as Record<string, unknown>;

  if (!l.title || typeof l.title !== 'string') {
    throw new Error(`${context}: requires title as string`);
  }

  if (l.link && typeof l.link !== 'string') {
    throw new Error(`${context}: link must be a string`);
  }

  if (l.asset && typeof l.asset !== 'string') {
    throw new Error(`${context}: asset must be a string`);
  }

  return l as unknown as ExternalLink;
};
