export interface NewsPost {
  id: string
  title: string
  slug: string
  date: string
  excerpt: string
  featuredImage?: {
    node: {
      sourceUrl: string
      altText: string
    }
  }
  categories: {
    nodes: {
      name: string
      slug: string
    }[]
  }
} 