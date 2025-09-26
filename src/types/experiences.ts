import { ActionButton } from "./common";

export interface ExperienceItem {
    name: string;
    description: string[];
    date?: string;
    color?: string;
    actions?: ActionButton[];
}

export interface ExperiencesContent {
    description: string[];
    experiences: ExperienceItem[];
}
