export interface AboutItem {
    text: string;
    svgName?: string; // optional SVG icon name
}

export interface AboutSection {
    [sectionName: string]: AboutItem[];
}

export interface AboutContent {
    title: string;
    description: string[]; // array of text lines
    about?: AboutSection; // optional list of endeavours
}