'use client';

import React from 'react'
import Link from 'next/link'

export default function BlogPage() {
  // Hardcoded posts for now
  const posts = [
    {
      id: 1,
      title: 'Welcome to Food Truth',
      publishedAt: '2024-01-01',
      summary: 'Learn about our mission to make nutrition science accessible and understandable for everyone.',
      href: '#'  // We'll update these links later
    },
    {
      id: 2,
      title: 'Understanding Protein Absorption',
      publishedAt: '2024-01-15',
      summary: 'A deep dive into how your body processes protein and what factors affect its absorption.',
      href: '#'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Blog</h1>
        <div className="grid gap-8">
          {posts.map((post) => (
            <article 
              key={post.id} 
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
            >
              <h2 className="text-2xl font-semibold text-gray-900 hover:text-blue-600 transition-colors duration-200">
                {post.title}
              </h2>
              <time className="text-sm text-gray-500" dateTime={post.publishedAt}>
                {new Date(post.publishedAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
              <p className="mt-4 text-gray-600">{post.summary}</p>
              <div className="mt-4 flex items-center text-blue-600 font-medium">
                Coming soon
                <span className="ml-2">→</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
