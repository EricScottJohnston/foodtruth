'use client';

import React from 'react'
import Link from 'next/link'

export default function BlogPage() {
  const posts = [
    {
      id: 1,
      title: 'Your Body\'s Foundry: Understanding Your Metabolic Symphony',
      publishedAt: '2024-12-23',
      summary: 'Explore how your body\'s metabolic processes work together like a sophisticated chemical foundry, transforming food into life itself.',
      slug: '/blog/b1e1'
    },
    {
      id: 2,
      title: 'The Universal Solvent: Your Body\'s Remarkable Water System',
      publishedAt: '2024-01-28',
      summary: 'Discover how water, far from being simple H2O, plays a crucial role in every aspect of your body\'s function.',
      slug: '/blog/b1e2'
    },
    {
      id: 3,
      title: 'The Electric Body: How Charged Particles Power Your Life',
      publishedAt: '2024-02-04',
      summary: 'Learn how electrolytes create the electrical gradients that power your cellular machinery and keep you alive.',
      slug: '/blog/b1e3'
    },
    {
      id: 4,
      title: 'The Crystal of Life: Salt\'s Remarkable Journey',
      publishedAt: '2024-02-11',
      summary: 'Explore the profound role of salt in human history and its crucial function in maintaining cellular balance.',
      slug: '/blog/b1e4'
    },
    {
      id: 5,
      title: 'The Carbohydrate Code: Your Body\'s Primary Energy Source',
      publishedAt: '2024-02-18',
      summary: 'Understanding how plants transform sunlight into the carbohydrates that power your life.',
      slug: '/blog/b1e5'
    },
    {
      id: 6,
      title: 'Sweet Science: The Complex Truth About Sugar',
      publishedAt: '2024-02-25',
      summary: 'Uncover the complex science behind different types of sugar and how your body processes them.',
      slug: '/blog/b1e6'
    },
    {
      id: 7,
      title: 'Fat: The Misunderstood Nutrient',
      publishedAt: '2024-03-03',
      summary: 'Discover why fat is not just stored energy, but a crucial building block for life itself.',
      slug: '/blog/b1e7'
    },
    {
      id: 8,
      title: 'The Protein Puzzle: Building Blocks of Life',
      publishedAt: '2024-03-10',
      summary: 'Explore how proteins function as molecular LEGOs that build and maintain your body.',
      slug: '/blog/b1e8'
    },
    {
      id: 9,
      title: 'Vitamins: The Essential Catalysts',
      publishedAt: '2024-03-17',
      summary: 'Learn how vitamins act as molecular keys that unlock your body\'s chemical reactions.',
      slug: '/blog/b1e9'
    },
    {
      id: 10,
      title: 'The Diet Dilemma: Understanding Weight Management',
      publishedAt: '2024-03-24',
      summary: 'Examine the complex science of weight management and why there\'s no one-size-fits-all solution.',
      slug: '/blog/b1e10'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Blog</h1>
        <div className="grid gap-8">
          {posts.map((post) => (
            <Link 
              key={post.id} 
              href={post.slug}
              className="block group"
            >
              <article className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 transform group-hover:-translate-y-1">
                <h2 className="text-2xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                  {post.title}
                </h2>

                <p className="mt-4 text-gray-600">{post.summary}</p>
                <div className="mt-4 flex items-center text-blue-600 font-medium">
                  Read more 
                  <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-200">
                    →
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
