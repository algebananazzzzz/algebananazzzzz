import { SkillsContent, Certificate } from "@/types/skills";

/**
 * Validates skills content
 * @throws Error with descriptive message if validation fails
 */
export const validateSkillsContent = (content: unknown): SkillsContent => {
  if (!content || typeof content !== 'object') {
    throw new Error('Skills content must be an object');
  }

  const data = content as Record<string, unknown>;

  if (!Array.isArray(data.description)) {
    throw new Error('Skills: requires description as array');
  }

  if (!data.description.every(item => typeof item === 'string')) {
    throw new Error('Skills: all description items must be strings');
  }

  // Validate certificates if present
  if (data.certificates) {
    if (!Array.isArray(data.certificates)) {
      throw new Error('Skills: certificates must be an array');
    }

    data.certificates.forEach((cert, idx) => {
      validateCertificate(cert, `Skills certificates[${idx}]`);
    });
  }

  // Validate skill icons if present
  if (data.skillicons) {
    if (!Array.isArray(data.skillicons)) {
      throw new Error('Skills: skillicons must be an array');
    }
    if (!data.skillicons.every(icon => typeof icon === 'string')) {
      throw new Error('Skills: all skillicons must be strings');
    }
  }

  // Validate skills if present
  if (data.skills) {
    if (typeof data.skills !== 'object' || Array.isArray(data.skills)) {
      throw new Error('Skills: skills must be an object');
    }

    const skills = data.skills as Record<string, unknown>;
    Object.entries(skills).forEach(([sectionName, values]) => {
      if (!Array.isArray(values)) {
        throw new Error(`Skills["${sectionName}"]: must be an array`);
      }
      if (!values.every(v => typeof v === 'string')) {
        throw new Error(`Skills["${sectionName}"]: all items must be strings`);
      }
    });
  }

  return data as unknown as SkillsContent;
};

/**
 * Validates a single certificate
 * @throws Error with descriptive message if validation fails
 */
export const validateCertificate = (cert: unknown, context: string = "Certificate"): Certificate => {
  if (!cert || typeof cert !== 'object') {
    throw new Error(`${context}: must be an object`);
  }

  const c = cert as Record<string, unknown>;

  if (!c.text || typeof c.text !== 'string') {
    throw new Error(`${context}: requires text as string`);
  }

  if (!c.link || typeof c.link !== 'string') {
    throw new Error(`${context}: requires link as string`);
  }

  if (!c.svgName || typeof c.svgName !== 'string') {
    throw new Error(`${context}: requires svgName as string`);
  }

  return c as unknown as Certificate;
};
