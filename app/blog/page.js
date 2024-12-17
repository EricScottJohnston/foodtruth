'use client';

import React from 'react';
import Link from 'next/link';

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold mb-8">Food Truth Blog</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link href="/blog/B1E1" className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-6">
            <h2 className="text-xl font-semibold mb-2">The Metabolism Show</h2>
            <p className="text-gray-600">Episode B1E1</p>
          </Link>

          <Link href="/blog/B1E2" className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-6">
            <h2 className="text-xl font-semibold mb-2">The Water Show</h2>
            <p className="text-gray-600">Episode B1E2</p>
          </Link>

          <Link href="/blog/B1E3" className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-6">
            <h2 className="text-xl font-semibold mb-2">The Electrolytes Show</h2>
            <p className="text-gray-600">Episode B1E3</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
