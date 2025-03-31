"use client";

import { Header } from "@/app/components/layout/Header";
import Footer from "@/app/components/layout/Footer";
import { LoadingSpinner } from "@/app/components/ui/LoadingSpinner";
import Image from "next/image";
import { motion } from "framer-motion";
import { useNews } from "@/lib/hooks/useNews";
import { useParams } from "next/navigation";
import CtaSection from "@/app/components/sections/CtaSection";

export default function PostPage() {
  const params = useParams<{ slug: string }>();
  const { usePost } = useNews();
  const { post, loading, error } = usePost(params.slug);

  if (loading) return <LoadingSpinner />;
  if (error) return <div>Error loading post</div>;
  if (!post) return <div>Post not found</div>;

  return (
    <>
      <Header />
      <article className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-[50vh] flex items-center">
          <div className="absolute inset-0">
            <Image
              src={post.featuredImage?.node.sourceUrl || "/images/news-image.jpg"}
              alt={post.featuredImage?.node.altText || post.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black opacity-60" />
          </div>
          <div className="relative z-10 w-full">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl font-candara-bold text-white sm:text-5xl md:text-6xl"
              >
                {post.title}
              </motion.h1>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-4 text-white/90 space-y-2"
              >
                <p className="text-sm">
                  {new Date(post.date).toLocaleDateString()}
                </p>
                <div className="flex justify-center gap-2">
                  {post.categories.nodes.map((category: any) => (
                    <span
                      key={category.slug}
                      className="px-3 py-1 bg-teal-600/20 rounded-full text-sm"
                    >
                      {category.name}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div
              dangerouslySetInnerHTML={{ __html: post.content }}
              className="prose prose-lg max-w-none
                [&>h1]:text-3xl [&>h1]:font-candara-bold [&>h1]:text-[#003840] [&>h1]:mb-6
                [&>h2]:text-2xl [&>h2]:font-candara-bold [&>h2]:text-[#003840] [&>h2]:mb-4 [&>h2]:mt-8
                [&>h3]:text-xl [&>h3]:font-candara-bold [&>h3]:text-[#003840] [&>h3]:mb-3 [&>h3]:mt-6
                [&>p]:text-gray-600 [&>p]:font-abadi-extralight [&>p]:leading-relaxed [&>p]:mb-4
                [&>ul]:list-disc [&>ul]:ml-6 [&>ul]:mb-4 [&>ul]:text-gray-600
                [&>ol]:list-decimal [&>ol]:ml-6 [&>ol]:mb-4 [&>ol]:text-gray-600
                [&>li]:mb-2
                [&>a]:text-teal-600 [&>a]:underline [&>a:hover]:text-teal-700
                [&>blockquote]:border-l-4 [&>blockquote]:border-teal-600 [&>blockquote]:pl-4 [&>blockquote]:italic [&>blockquote]:my-6
                [&>img]:rounded-lg [&>img]:my-6"
            />
          </div>
        </section>
      </article>
      <CtaSection />
      <Footer />
    </>
  );
}
