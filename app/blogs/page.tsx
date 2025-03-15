"use client";

import { Header } from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import CtaSection from '../components/sections/CtaSection';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image: string;
  author: string;
  slug: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Future of Project Management in 2024",
    excerpt: "Discover how AI and automation are transforming project management practices and what it means for businesses.",
    category: "Project Management",
    date: "March 15, 2024",
    image: "/images/blog-image.jpg",
    author: "Sarah Johnson",
    slug: "future-of-project-management-2024"
  },
  {
    id: 2,
    title: "Agile Methodologies in Modern Business",
    excerpt: "Learn how agile methodologies are being adapted for different industries and business sizes.",
    category: "Process Management",
    date: "March 12, 2024",
    image: "/images/blog-image.jpg",
    author: "Michael Chen",
    slug: "agile-methodologies-modern-business"
  },
  {
    id: 3,
    title: "Quality Assurance in Remote Teams",
    excerpt: "Best practices for maintaining high quality standards with distributed teams.",
    category: "Quality Management",
    date: "March 10, 2024",
    image: "/images/blog-image.jpg",
    author: "Emma Wilson",
    slug: "quality-assurance-remote-teams"
  },
  {
    id: 4,
    title: "Product Strategy for Startups",
    excerpt: "Essential product management strategies for early-stage startups and scale-ups.",
    category: "Product Management",
    date: "March 8, 2024",
    image: "/images/blog-image.jpg",
    author: "David Park",
    slug: "product-strategy-startups"
  },
  {
    id: 5,
    title: "Digital Transformation Success Stories",
    excerpt: "Real-world examples of successful digital transformation initiatives.",
    category: "Process Management",
    date: "March 5, 2024",
    image: "/images/blog-image.jpg",
    author: "Lisa Martinez",
    slug: "digital-transformation-success"
  },
  {
    id: 6,
    title: "Building High-Performance Teams",
    excerpt: "Strategies for assembling and managing teams that consistently deliver results.",
    category: "Project Management",
    date: "March 3, 2024",
    image: "/images/blog-image.jpg",
    author: "James Wilson",
    slug: "building-high-performance-teams"
  },
  {
    id: 7,
    title: "Innovation in Quality Control",
    excerpt: "New technologies and methodologies reshaping quality control processes.",
    category: "Quality Management",
    date: "March 1, 2024",
    image: "/images/blog-image.jpg",
    author: "Rachel Kim",
    slug: "innovation-quality-control"
  },
  {
    id: 8,
    title: "User-Centric Product Development",
    excerpt: "How to keep users at the center of your product development process.",
    category: "Product Management",
    date: "February 28, 2024",
    image: "/images/blog-image.jpg",
    author: "Tom Anderson",
    slug: "user-centric-product-development"
  },
  {
    id: 9,
    title: "Sustainable Project Practices",
    excerpt: "Implementing environmentally conscious project management methodologies.",
    category: "Project Management",
    date: "February 25, 2024",
    image: "/images/blog-image.jpg",
    author: "Nina Patel",
    slug: "sustainable-project-practices"
  },
  {
    id: 10,
    title: "The Rise of No-Code Solutions",
    excerpt: "How no-code platforms are revolutionizing process management.",
    category: "Process Management",
    date: "February 23, 2024",
    image: "/images/blog-image.jpg",
    author: "Alex Thompson",
    slug: "rise-of-no-code-solutions"
  }
];

const categories = ["All", "Project Management", "Process Management", "Quality Management", "Product Management"];

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Header />
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-[40vh] flex items-center">
          <div className="absolute inset-0 bg-[url(/images/blog-image.jpg)] bg-cover bg-center before:content-[''] before:absolute before:inset-0 before:bg-black before:opacity-60" />
          <div className="relative z-10 w-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl font-candara-bold text-white sm:text-5xl md:text-6xl"
              >
                Our Blog
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

        {/* Blog Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            {/* Filters */}
            <div className="mb-12 space-y-6">
              <div className="flex flex-wrap gap-4 justify-center">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-md transition-colors duration-300 font-candara-bold ${
                      selectedCategory === category
                        ? 'bg-[#003840] text-white'
                        : 'bg-gray-100 text-[#003840] hover:bg-gray-200'
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

            {/* Blog Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Link href={`/blogs/${post.slug}`} className="block group">
                    <div className="relative aspect-w-16 aspect-h-9 mb-4">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="space-y-2">
                      <span className="text-sm text-teal-600 font-candara-bold">
                        {post.category}
                      </span>
                      <h2 className="text-xl font-candara-bold text-[#003840] group-hover:text-teal-600 transition-colors duration-300">
                        {post.title}
                      </h2>
                      <p className="text-gray-600 font-abadi-extralight">
                        {post.excerpt}
                      </p>
                      <div className="flex justify-between items-center pt-2">
                        <span className="text-sm text-gray-500 font-abadi-extralight">
                          {post.author}
                        </span>
                        <span className="text-sm text-gray-500 font-abadi-extralight">
                          {post.date}
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