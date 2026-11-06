export interface ArticleFrontmatter {
  title: string;
  description: string;
  date: string;
  published: boolean;
  featured?: boolean;
  tags: string[];
  canonical_url?: string;
  devto_id?: number | null;
  series?: string;
  cover_image?: string;
}

export interface Article extends ArticleFrontmatter {
  slug: string;
  readingTime: number;
  contentPath: string;
  excerpt?: string;
}
