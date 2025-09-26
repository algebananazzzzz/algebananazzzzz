export interface Certificate {
    text: string;
    link: string;
    svgName: string;
}

export interface SkillsContent {
    description: string[];
    certificates?: Certificate[];
    skillicons?: string[];
    skills?: {
        [section: string]: string[];
    };
}