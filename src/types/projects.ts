import { ActionButtonField } from "./action-button";

export interface ProjectItem {
    name: string;
    description: string;
    additional_description?: string;
    date?: string;
    svgIcons?: string[]; // list of SVG names
    actions?: ActionButtonField[];
}

export interface ProjectContent {
    description: string[];
    projects: ProjectItem[];
}