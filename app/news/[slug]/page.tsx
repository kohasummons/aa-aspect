import Image from "next/image";
import Link from "next/link";

export default function BlogPost() {
  const post = {
    title: "Improving Process management with AI",
    date: "February 20, 2023",
    image: "/images/news-image.jpg",
    content: `
      <h2>Introduction</h2>
      <p>Artificial Intelligence is revolutionizing how businesses manage their processes. In this article, we'll explore how AI-powered solutions can transform your operations.</p>
      
      <h2>The Impact of AI on Process Management</h2>
      <p>Modern businesses are increasingly turning to AI to streamline their operations and improve efficiency. Here's how AI is making a difference:</p>
      
      <ul>
        <li>Automated workflow optimization</li>
        <li>Predictive analytics for better decision making</li>
        <li>Real-time process monitoring and adjustment</li>
      </ul>
      
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

      <h2>Key Benefits</h2>
      <p>Implementing AI in process management offers several key advantages:</p>
      
      <ul>
        <li>Increased efficiency and productivity</li>
        <li>Reduced operational costs</li>
        <li>Better resource allocation</li>
        <li>Improved decision-making capabilities</li>
      </ul>

      <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    `
  };

  return (
    <article className="min-h-screen bg-[#003840]">
      {/* Hero Section */}
      <div className="relative h-[60vh] w-full">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-candara-bold text-white mb-4">
              {post.title}
            </h1>
            <p className="text-white/80">{post.date}</p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <Link 
            href="/" 
            className="text-[#00FFB2] mb-8 inline-block hover:underline"
          >
            ← Back to Blogs
          </Link>
          
          <div 
            className="text-white space-y-6"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </div>
    </article>
  );
} 