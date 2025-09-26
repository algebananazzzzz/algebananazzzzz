export interface Endeavour {
    text: string;
    svgName: string; // optional SVG icon name
}

export interface AboutContent {
    title: string;
    description: string[]; // array of text lines
    endeavours?: Endeavour[]; // optional list of endeavours
}