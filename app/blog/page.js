'use client';

import React from 'react';
import Link from 'next/link';
import { Book } from 'lucide-react';

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-blue-50 py-12">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold mb-2 text-gray-800">Food Truth Blog</h1>
        <p className="text-gray-600 mb-8">Explore our detailed show notes and additional resources</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Episode 1 */}
          <Link href="/blog/B1E1">
            <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:border-blue-200">
              <div className="flex items-center mb-4">
                <Book className="w-6 h-6 text-blue-600 mr-2" />
                <span className="text-sm font-medium text-blue-600">Episode B1E1</span>
              </div>
              <h2 className="text-xl font-semibold mb-2 text-gray-800">The Metabolism Show</h2>
              <p className="text-gray-600 mb-4">Discover how your body's foundry turns food into energy</p>
              <div className="flex justify-between text-sm text-gray-500">
                <span>January 2024</span>
                <span>10 min read</span>
              </div>
            </div>
          </Link>

          {/* Episode 2 */}
          <Link href="/blog/B1E2">
            <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:border-blue-200">
              <div className="flex items-center mb-4">
                <Book className="w-6 h-6 text-blue-600 mr-2" />
                <span className="text-sm font-medium text-blue-600">Episode B1E2</span>
              </div>
              <h2 className="text-xl font-semibold mb-2 text-gray-800">The Water Show</h2>
              <p className="text-gray-600 mb-4">Explore how water flows through your body's systems</p>
              <div className="flex justify-between text-sm text-gray-500">
                <span>February 2024</span>
                <span>8 min read</span>
              </div>
            </div>
          </Link>

          {/* Episode 3 */}
          <Link href="/blog/B1E3">
            <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:border-blue-200">
              <div className="flex items-center mb-4">
                <Book className="w-6 h-6 text-blue-600 mr-2" />
                <span className="text-sm font-medium text-blue-600">Episode B1E3</span>
              </div>
              <h2 className="text-xl font-semibold mb-2 text-gray-800">The Electrolytes Show</h2>
              <p className="text-gray-600 mb-4">Understanding your body's electrical system</p>
              <div className="flex justify-between text-sm text-gray-500">
                <span>March 2024</span>
                <span>12 min read</span>
              </div>
            </div>
          </Link>

          {/* Episode 4 */}
          <Link href="/blog/B1E4">
            <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:border-blue-200">
              <div className="flex items-center mb-4">
                <Book className="w-6 h-6 text-blue-600 mr-2" />
                <span className="text-sm font-medium text-blue-600">Episode B1E4</span>
              </div>
              <h2 className="text-xl font-semibold mb-2 text-gray-800">The Salt Show</h2>
              <p className="text-gray-600 mb-4">The essential mineral that keeps your cells in balance</p>
              <div className="flex justify-between text-sm text-gray-500">
                <span>April 2024</span>
                <span>9 min read</span>
              </div>
            </div>
          </Link>

          {/* Episode 5 */}
          <Link href="/blog/B1E5">
            <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:border-blue-200">
              <div className="flex items-center mb-4">
                <Book className="w-6 h-6 text-blue-600 mr-2" />
                <span className="text-sm font-medium text-blue-600">Episode B1E5</span>
              </div>
              <h2 className="text-xl font-semibold mb-2 text-gray-800">The Carbohydrates Show</h2>
              <p className="text-gray-600 mb-4">Your body's preferred energy source explained</p>
              <div className="flex justify-between text-sm text-gray-500">
                <span>May 2024</span>
                <span>11 min read</span>
              </div>
            </div>
          </Link>

          {/* Episode 6 */}
          <Link href="/blog/B1E6">
            <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:border-blue-200">
              <div className="flex items-center mb-4">
                <Book className="w-6 h-6 text-blue-600 mr-2" />
                <span className="text-sm font-medium text-blue-600">Episode B1E6</span>
              </div>
              <h2 className="text-xl font-semibold mb-2 text-gray-800">The Sugar Show</h2>
              <p className="text-gray-600 mb-4">Sweet science and metabolic mysteries unveiled</p>
              <div className="flex justify-between text-sm text-gray-500">
                <span>June 2024</span>
                <span>10 min read</span>
              </div>
            </div>
          </Link>

          {/* Episode 7 */}
          <Link href="/blog/B1E7">
            <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:border-blue-200">
              <div className="flex items-center mb-4">
                <Book className="w-6 h-6 text-blue-600 mr-2" />
                <span className="text-sm font-medium text-blue-600">Episode B1E7</span>
              </div>
              <h2 className="text-xl font-semibold mb-2 text-gray-800">The Protein Show</h2>
              <p className="text-gray-600 mb-4">Building blocks of life and cellular construction</p>
              <div className="flex justify-between text-sm text-gray-500">
                <span>July 2024</span>
                <span>13 min read</span>
              </div>
            </div>
          </Link>

          {/* Episode 8 */}
          <Link href="/blog/B1E8">
            <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:border-blue-200">
              <div className="flex items-center mb-4">
                <Book className="w-6 h-6 text-blue-600 mr-2" />
                <span className="text-sm font-medium text-blue-600">Episode B1E8</span>
              </div>
              <h2 className="text-xl font-semibold mb-2 text-gray-800">The Fats Show</h2>
              <p className="text-gray-600 mb-4">Essential nutrients and energy storage revealed</p>
              <div className="flex justify-between text-sm text-gray-500">
                <span>August 2024</span>
                <span>11 min read</span>
              </div>
            </div>
          </Link>

          {/* Episode 9 */}
          <Link href="/blog/B1E9">
            <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:border-blue-200">
              <div className="flex items-center mb-4">
                <Book className="w-6 h-6 text-blue-600 mr-2" />
                <span className="text-sm font-medium text-blue-600">Episode B1E9</span>
              </div>
              <h2 className="text-xl font-semibold mb-2 text-gray-800">The Vitamins Show</h2>
              <p className="text-gray-600 mb-4">Crucial compounds that power your cellular processes</p>
              <div className="flex justify-between text-sm text-gray-500">
                <span>September 2024</span>
                <span>12 min read</span>
              </div>
            </div>
          </Link>

          {/* Episode 10 */}
          <Link href="/blog/B1E10">
            <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:border-blue-200">
              <div className="flex items-center mb-4">
                <Book className="w-6 h-6 text-blue-600 mr-2" />
                <span className="text-sm font-medium text-blue-600">Episode B1E10</span>
              </div>
              <h2 className="text-xl font-semibold mb-2 text-gray-800">The Dieting Show</h2>
              <p className="text-gray-600 mb-4">Science-based approaches to nutrition and health</p>
              <div className="flex justify-between text-sm text-gray-500">
                <span>October 2024</span>
                <span>14 min read</span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
