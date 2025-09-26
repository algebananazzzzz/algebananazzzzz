export interface ActionButton {
    text: string;
    link?: string;       // external link
    asset?: string;      // static file
    color?: string;      // Tailwind color
    video?: string;      // optional video for popup
}
