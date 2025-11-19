import { MetadataRoute } from 'next'
import { client } from '@/lib/graphql/client'
import { GET_POSTS } from '@/lib/graphql/queries/posts'

const baseRoutes = [
    {
      url: 'https://aa-aspect.com',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://aa-aspect.com/about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://aa-aspect.com/contact-us',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://aa-aspect.com/news',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://aa-aspect.com/services/quality-management',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://aa-aspect.com/services/process-management',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://aa-aspect.com/services/project-management',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://aa-aspect.com/services/fmea-coaching',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ] as const;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  let newsRoutes: MetadataRoute.Sitemap = [];

  try {
    const { data } = await client.query({
      query: GET_POSTS,
      variables: { first: 100 },
      context: {
        fetchOptions: {
          next: { revalidate: 3600 },
        },
      },
    });

    newsRoutes =
      (data?.posts?.nodes || []).map((post: { slug: string; date: string }) => ({
        url: `https://aa-aspect.com/news/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: 'monthly',
        priority: 0.6,
      })) ?? [];
  } catch {
    newsRoutes = [];
  }

  return [...baseRoutes, ...newsRoutes];
} 