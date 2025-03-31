"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useQuery } from "@apollo/client";
import { GET_POSTS } from "@/lib/graphql/queries/posts";

interface Post {
  id: string;
  title: string;
  date: string;
  slug: string;
  featuredImage: {
    node: {
      sourceUrl: string;
      altText: string;
    }
  }
}

interface PostsData {
  posts: {
    nodes: Post[];
  }
}

const NewsCard = ({ post }: { post: Post }) => {
  return (
    <motion.div
      className="min-w-[400px] mr-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Link href={`/news/${post.slug}`} className="block">
        <div className="relative overflow-hidden">
          <Image
            src={post.featuredImage?.node?.sourceUrl || "/images/news-image.jpg"}
            alt={post.featuredImage?.node?.altText || post.title}
            width={300}
            height={200}
            className="object-cover w-full h-[200px] transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div className="mt-4">
          <p className="text-white text-xs mb-2">
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric"
            })}
          </p>
          <h3 className="text-white text-xl font-candara-bold">{post.title}</h3>
        </div>
      </Link>
    </motion.div>
  );
};

const NewsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const { data, loading, error } = useQuery<PostsData>(GET_POSTS, {
    variables: { first: 5 }
  });

  const posts = data?.posts?.nodes || [];

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      scrollToIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < posts.length - 1) {
      setCurrentIndex(currentIndex + 1);
      scrollToIndex(currentIndex + 1);
    }
  };

  const scrollToIndex = (index: number) => {
    if (sliderRef.current) {
      const slideWidth = 400 + 32; // card width + margin
      sliderRef.current.scrollTo({
        left: index * slideWidth,
        behavior: "smooth",
      });
    }
  };

  if (loading) return (
    <section className="bg-[#003840] py-10 md:py-20 relative overflow-y-hidden px-4 md:px-6">
      <div className="container mx-auto">
        <div className="flex items-center justify-center h-40">
          <div className="text-white">Loading news...</div>
        </div>
      </div>
    </section>
  );

  if (error) return (
    <section className="bg-[#003840] py-10 md:py-20 relative overflow-y-hidden px-4 md:px-6">
      <div className="container mx-auto">
        <div className="flex items-center justify-center h-40">
          <div className="text-white">Error loading news. Please try again later.</div>
        </div>
      </div>
    </section>
  );

  if (!posts.length) return (
    <section className="bg-[#003840] py-10 md:py-20 relative overflow-y-hidden px-4 md:px-6">
      <div className="container mx-auto">
        <div className="flex items-center justify-center h-40">
          <div className="text-white">No news posts available.</div>
        </div>
      </div>
    </section>
  );

  return (
    <section className="bg-[#003840] py-10 md:py-20 relative overflow-y-hidden px-4 md:px-6">
      {/* Background pattern */}
      <div className="absolute right-0 top-0 opacity-40">
        <Image src="/images/faded-element.svg" alt="background effect" width={100} height={100} />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="flex flex-row justify-between items-start md:items-center mb-8 md:mb-12 gap-4 md:gap-0">
          <motion.div 
            className="flex items-center gap-6 w-full"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-candara-bold text-white whitespace-nowrap">
              News
            </h2>
            <div className="h-[3px] bg-white/20 w-full md:mr-12 flex"></div>
          </motion.div>
          
          <div className="flex space-x-4">
            <button 
              onClick={handlePrev}
              className="cursor-pointer w-12 h-12 md:w-14 md:h-14 rounded-full border border-white flex items-center justify-center text-white hover:bg-[#003840] hover:border-[#3c6e76] transition-colors"
              disabled={currentIndex === 0}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 19L8 12L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            
            <button 
              onClick={handleNext}
              className="cursor-pointer w-12 h-12 md:w-14 md:h-14 rounded-full border border-white flex items-center justify-center text-white hover:bg-[#003840] hover:border-[#3c6e76] transition-colors"
              disabled={currentIndex === posts.length - 1}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 5L16 12L9 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
        
        <div 
          ref={sliderRef}
          className="flex overflow-x-auto overflow-y-hidden scrollbar-hide -mx-4 md:mx-0 px-4 md:px-0"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {posts.map((post) => (
            <NewsCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
