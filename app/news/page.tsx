"use client";

import { Header } from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import CtaSection from "../components/sections/CtaSection";
import { useNews } from "@/lib/hooks/useNews";
import { LoadingSpinner } from "../components/ui/LoadingSpinner";
import type { NewsPost } from "@/lib/types/news";

const categories = [
  "All",
  "Project & Product",
  "Process",
  "Quality",
  "FMEA Coaching",
];

export default function News() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const { posts, postsLoading, postsError } = useNews();

  const filteredPosts = posts.filter((post: NewsPost) => {
    const postCategory = post.categories.nodes[0]?.name || "";
    const matchesCategory = selectedCategory === "All" || postCategory === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  if (postsLoading) return <LoadingSpinner />;
  if (postsError) return <div>Error loading posts</div>;

  return (
    <>
      <Header />
      <div className="min-h-screen">
        <section className="relative h-[40vh] flex items-center">
          <div className="absolute inset-0 bg-[url(/images/news-image.jpg)] bg-cover bg-center before:content-[''] before:absolute before:inset-0 before:bg-black before:opacity-60" />
          <div className="relative z-10 w-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl font-candara-bold text-white sm:text-5xl md:text-6xl"
              >
                Our News
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-3 max-w-2xl mx-auto text-xl text-white/90 sm:mt-4 font-abadi-extralight"
              >
                Insights and Updates from Our Team
              </motion.p>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12 space-y-6">
              <div className="flex flex-wrap gap-4 justify-center">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-md transition-colors duration-300 font-candara-bold ${
                      selectedCategory === category
                        ? "bg-[#003840] text-white"
                        : "bg-gray-100 text-[#003840] hover:bg-gray-200"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
              <div className="max-w-md mx-auto">
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post: NewsPost, index: number) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <Link href={`/news/${post.slug}`} className="block group">
                    <div className="relative w-[380px] h-[200px] mb-4">
                      <Image
                        src={post.featuredImage?.node.sourceUrl || "/images/news-image.jpg"}
                        alt={post.featuredImage?.node.altText || post.title}
                        fill
                        className="object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="space-y-2">
                      <span className="text-sm text-teal-600 font-candara-bold">
                        {post.categories.nodes[0]?.name || "Uncategorized"}
                      </span>
                      <h2 className="text-xl font-candara-bold text-[#003840] group-hover:text-teal-600 transition-colors duration-300">
                        {post.title}
                      </h2>
                      <p
                        dangerouslySetInnerHTML={{ __html: post.excerpt }}
                        className="text-gray-600 font-abadi-extralight truncate"
                      />
                      <div className="flex justify-between items-center pt-2">
                        <span className="text-sm text-gray-500 font-abadi-extralight">
                          {new Date(post.date).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <CtaSection />
      <Footer />
    </>
  );
}
