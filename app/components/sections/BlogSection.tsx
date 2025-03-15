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
      <Link href={`/blogs/${post.slug}`} className="block">
        <div className="relative overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            width={400}
            height={300}
            className="object-cover w-full h-[300px] transition-transform duration-300 hover:scale-105"
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
    <section className="bg-[#003840] py-10 md:py-20 relative overflow-hidden px-4 md:px-6">
      {/* Background pattern */}
      <div className="absolute right-0 top-0 opacity-40">
        <Image src={FadedElementSVG} alt="background effect"/>
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
              Blogs
            </h2>
            <div className="h-[3px] bg-white/20 w-full md:mr-12 flex"></div>
          </motion.div>
          
          <div className="flex space-x-4">
            <button 
              onClick={handlePrev}
              className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-white flex items-center justify-center text-white"
              disabled={currentIndex === 0}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 19L8 12L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            
            <button 
              onClick={handleNext}
              className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-white flex items-center justify-center text-white"
              disabled={currentIndex === blogPosts.length - 1}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 5L16 12L9 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
        
        <div 
          ref={sliderRef}
          className="flex overflow-x-auto scrollbar-hide -mx-4 md:mx-0 px-4 md:px-0"
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
