'use client';

import React from 'react';
import Link from 'next/link';
import { Book } from 'lucide-react';

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold mb-8">Food Truth Blog</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link href="/blog/B1E1">
            <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-6">
              <div className="flex items-center mb-4">
                <Book className="w-6 h-6 text-blue-600 mr-2" />
                <span className="text-sm text-gray-500">Episode B1E1</span>
              </div>
              <h2 className="text-xl font-semibold mb-2">The Metabolism Show</h2>
              <p className="text-gray-600 mb-4">Discover how your body's foundry turns food into energy</p>
              <div className="flex justify-between text-sm text-gray-500">
                <span>January 2024</span>
                <span>10 min read</span>
              </div>
            </div>
          </Link>

          <Link href="/blog/B1E2">
            <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-6">
              <div className="flex items-center mb-4">
                <Book className="w-6 h-6 text-blue-600 mr-2" />
                <span className="text-sm text-gray-500">Episode B1E2</span>
              </div>
              <h2 className="text-xl font-semibold mb-2">The Water Show</h2>
              <p className="text-gray-600 mb-4">Explore how water flows through your body's systems</p>
              <div className="flex justify-between text-sm text-gray-500">
                <span>February 2024</span>
                <span>8 min read</span>
              </div>
            </div>
          </Link>

          <Link href="/blog/B1E3">
            <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-6">
              <div className="flex items-center mb-4">
                <Book className="w-6 h-6 text-blue-600 mr-2" />
                <span className="text-sm text-gray-500">Episode B1E3</span>
              </div>
              <h2 className="text-xl font-semibold mb-2">The Electrolytes Show</h2>
              <p className="text-gray-600 mb-4">Understanding your body's electrical system</p>
              <div className="flex justify-between text-sm text-gray-500">
                <span>March 2024</span>
                <span>12 min read</span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
