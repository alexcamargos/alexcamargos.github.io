export interface Project {
    id: number;
    title: string;
    shortDescription: string;
    businessImpact: string; // O diferencial do portfólio
    techStack: string[];
    imageUrl?: string; // Opcional
    links: {
        github?: string;
        live?: string;
    };
}
