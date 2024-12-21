'use client';
// app/blog/page.jsx

import Link from 'next/link'

export default function BlogPage() {
  const posts = [
    {
      id: 1,
      title: 'Welcome to Food Truth',
      publishedAt: '2024-01-01',
      summary: 'Learn about our mission to make nutrition science accessible and understandable for everyone.',
      slug: '/blog/welcome'
    },
    // Add more posts here manually for now
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
                <time className="text-sm text-gray-500" dateTime={post.publishedAt}>
                  {new Date(post.publishedAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>
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
