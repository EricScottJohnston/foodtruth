'use client';

import React from 'react';
import Link from 'next/link';
import { Book } from 'lucide-react';

export default function BlogPage() {
  const blogPosts = [
    {
      id: "B1E1",
      title: "The Metabolism Show",
      description: "Discover how your body's foundry turns food into energy",
      date: "2024-01",
      readTime: "10 min read"
    },
    {
      id: "B1E2",
      title: "The Water Show",
      description: "Explore how water flows through your body's systems",
      date: "2024-02",
      readTime: "8 min read"
    },
    {
      id: "B1E3",
      title: "The Electrolytes Show",
      description: "Understanding your body's electrical system",
      date: "2024-03",
      readTime: "12 min read"
    }
    // Add more blog posts as they're published
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold mb-8">Food Truth Blog</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <Link href={`/blog/${post.id}`} key={post.id}>
              <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-6">
                <div className="flex items-center mb-4">
                  <Book className="w-6 h-6 text-blue-600 mr-2" />
                  <span className="text-sm text-gray-500">Episode {post.id}</span>
                </div>
                <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                <p className="text-gray-600 mb-4">{post.description}</p>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
