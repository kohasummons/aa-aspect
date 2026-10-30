import { Metadata } from "next";
import { client } from "@/lib/graphql/client";
import { GET_POST_BY_SLUG } from "@/lib/graphql/queries/posts";

type Props = {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
};

const stripHtml = (html: string) =>
  html.replace(/<[^>]+>/g, " ").replace(/&[^;\s]+;/g, " ").replace(/\s+/g, " ").trim();

export async function generateMetadata({ params }: Omit<Props, "children">): Promise<Metadata> {
  const { slug } = await params;
  const canonical = `/news/${slug}`;

  try {
    const { data } = await client.query({
      query: GET_POST_BY_SLUG,
      variables: { slug },
      context: { fetchOptions: { next: { revalidate: 3600 } } },
    });
    const post = data?.post;
    if (!post) return { alternates: { canonical } };

    const description = stripHtml(post.excerpt || post.content || "").slice(0, 160);
    const image = post.featuredImage?.node?.sourceUrl;

    return {
      title: post.title,
      description,
      alternates: { canonical },
      openGraph: {
        title: post.title,
        description,
        url: `https://www.aa-aspect.com${canonical}`,
        type: "article",
        ...(image ? { images: [{ url: image }] } : {}),
      },
    };
  } catch {
    return { alternates: { canonical } };
  }
}

export default function NewsPostLayout({ children }: Props) {
  return children;
}
