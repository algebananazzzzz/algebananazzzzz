import { ActionButton } from "./common";

export interface ProjectItem {
    name: string;
    description: string;
    additional_description?: string;
    date?: string;
    svgIcons?: string[]; // list of SVG names
    actions?: ActionButton[];
}

export interface ProjectSection {
    [sectionName: string]: ProjectItem[];
}

export interface ProjectContent {
    description: string[];
    projects: ProjectItem[];
    other_sections?: ProjectSection;
}