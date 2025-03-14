"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import FadedElementSVG from '../../../public/images/faded-element.svg'

interface BlogPost {
  id: number;
  title: string;
  date: string;
  image: string;
  slug: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Improving Process management with AI",
    date: "February 20, 2023",
    image: "/images/blog-image.jpg",
    slug: "improving-process-management-with-ai",
  },
  {
    id: 2,
    title: "Improving Process management with AI",
    date: "February 20, 2023",
    image: "/images/blog-image.jpg",
    slug: "improving-process-management-with-ai-2",
  },
  {
    id: 3,
    title: "Improving Process management with AI",
    date: "February 20, 2023",
    image: "/images/blog-image.jpg",
    slug: "improving-process-management-with-ai-3",
  },
  {
    id: 4,
    title: "Improving Process management with AI",
    date: "February 20, 2023",
    image: "/images/blog-image.jpg",
    slug: "improving-process-management-with-ai-4",
  },
  {
    id: 5,
    title: "Improving Process management with AI",
    date: "February 20, 2023",
    image: "/images/blog-image.jpg",
    slug: "improving-process-management-with-ai-5",
  },
];

const BlogCard = ({ post }: { post: BlogPost }) => {
  return (
    <motion.div
      className="min-w-[400px] mr-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Link href={`/blogs/${post.slug}`}>
        <div className="relative overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            width={400}
            height={300}
            className="object-cover w-full h-[300px]"
          />
        </div>
        <div className="mt-4">
          <p className="text-white text-sm mb-2">{post.date}</p>
          <h3 className="text-white text-2xl font-candara-bold">{post.title}</h3>
        </div>
      </Link>
    </motion.div>
  );
};

const BlogSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      scrollToIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < blogPosts.length - 1) {
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

  return (
    <section className="bg-[#003840] py-20 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute right-0 top-0 opacity-40">
        <Image src={FadedElementSVG} alt="background effect"/>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="flex justify-between items-center mb-12">
          <motion.h2 
            className="text-6xl font-candara-bold text-white"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Blogs
          </motion.h2>
          
          <div className="flex space-x-4">
            <button 
              onClick={handlePrev}
              className="w-14 h-14 rounded-full border border-white flex items-center justify-center text-white"
              disabled={currentIndex === 0}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 19L8 12L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            
            <button 
              onClick={handleNext}
              className="w-14 h-14 rounded-full border border-white flex items-center justify-center text-white"
              disabled={currentIndex === blogPosts.length - 1}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 5L16 12L9 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
        
        <div 
          ref={sliderRef}
          className="flex overflow-x-auto scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
