import { ActionButtonField } from "@/types/action-button";

/**
 * Validates an action button field
 * @throws Error with descriptive message if validation fails
 */
export const validateActionButton = (action: unknown, context: string = "Action button"): ActionButtonField => {
  if (!action || typeof action !== 'object') {
    throw new Error(`${context}: must be an object`);
  }

  const button = action as Record<string, unknown>;

  if (!button.text || typeof button.text !== 'string') {
    throw new Error(`${context}: requires text field as string`);
  }

  // Optional fields validation
  if (button.link && typeof button.link !== 'string') {
    throw new Error(`${context}: link must be a string`);
  }

  if (button.asset && typeof button.asset !== 'string') {
    throw new Error(`${context}: asset must be a string`);
  }

  if (button.video && typeof button.video !== 'string') {
    throw new Error(`${context}: video must be a string`);
  }

  if (button.color && typeof button.color !== 'string') {
    throw new Error(`${context}: color must be a string`);
  }

  return {
    text: button.text,
    link: button.link as string | undefined,
    asset: button.asset as string | undefined,
    video: button.video as string | undefined,
    color: button.color as string | undefined,
  };
};
