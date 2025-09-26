export interface ContactButton {
    svgName: string;   // path to icon, e.g., contact/gitlab
    link: string;     // external URL
}

export interface ExternalLink {
    title: string;
    link?: string;     // external URL
    asset?: string;    // static asset in /static
}

export interface NavbarContent {
    title: string;
    contact_buttons: ContactButton[];
    external_links?: ExternalLink[];
}
