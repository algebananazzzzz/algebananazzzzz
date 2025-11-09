import { ActionButtonField } from "./action-button";

export interface ExperienceItem {
    name: string;
    description: string[];
    date?: string;
    color?: string;
    actions?: ActionButtonField[];
}

export interface ExperiencesContent {
    description: string[];
    experiences: ExperienceItem[];
}
