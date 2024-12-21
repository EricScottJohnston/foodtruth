'use client';

import Link from 'next/link'
import React, { useState } from 'react';
import { Play, Book, Radio, Users, Search } from 'lucide-react';
import { Outfit } from 'next/font/google'

const outfit = Outfit({ subsets: ['latin'] })

export default function Homepage() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-800 text-white">
        <div className="container mx-auto px-6 py-16">
          <h1 className={`text-4xl md:text-6xl font-bold mb-4 ${outfit.className}`}>
            Food Truth
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Understanding the science of nutrition, one bite at a time.
          </p>
          <div className="relative inline-block">
            <button 
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="bg-white text-blue-800 px-6 py-3 rounded-lg font-semibold flex items-center hover:bg-blue-50"
            >
              <Play className="mr-2" />
              Listen Now
            </button>
            
            {isDropdownOpen && (
              <div className="absolute mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-10">
                <a 
                  href="https://spotify.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block px-4 py-2 text-gray-800 hover:bg-blue-50"
                >
                  Spotify
                </a>
                <a 
                  href="https://podcasts.apple.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block px-4 py-2 text-gray-800 hover:bg-blue-50"
                >
                  Apple Podcasts
                </a>
                <a 
                  href="https://podcasts.google.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block px-4 py-2 text-gray-800 hover:bg-blue-50"
                >
                  Google Podcasts
                </a>
                <a 
                  href="https://youtube.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block px-4 py-2 text-gray-800 hover:bg-blue-50"
                >
                  YouTube
                </a>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Quick Navigation */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <Radio className="w-8 h-8 text-blue-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Latest Episodes</h3>
            <p className="text-gray-600">Explore our latest podcast episodes and show notes.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <Link href="/blog" className="block">
              <div className="flex flex-col h-full">
                <div className="flex-grow">
                  <svg className="w-8 h-8 text-blue-600 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2.5 2.5 0 00-2.5-2.5H15" />
                  </svg>
                  <h3 className="text-lg font-semibold mb-2">Blog</h3>
                  <p className="text-gray-600">Read our latest insights and articles.</p>
                </div>
              </div>
            </Link>
          </div>
          <Link href="/nutrikinetics" className="block">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Book className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Nutrikinetics</h3>
              <p className="text-gray-600">Dive deep into how your body processes nutrients.</p>
            </div>
          </Link>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <Users className="w-8 h-8 text-blue-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Expert Insights</h3>
            <p className="text-gray-600">Learn from leading nutrition experts.</p>
          </div>
          <Link href="/resources">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Search className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Resources</h3>
              <p className="text-gray-600">Find books, articles, and research.</p>
            </div>
          </Link>
        </div>
      </div>

      {/* Featured Content */}
      <div className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold mb-8">Latest Episodes</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="bg-blue-100 rounded-lg p-4 mb-4">
              <Play className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">The Metabolism Show</h3>
            <p className="text-gray-600 mb-4">Discover how your body's foundry turns food into energy.</p>
            <button className="text-blue-600 font-semibold hover:text-blue-800">
              Listen Now →
            </button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="bg-blue-100 rounded-lg p-4 mb-4">
              <Play className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">The Water Show</h3>
            <p className="text-gray-600 mb-4">Explore how water flows through your body's systems.</p>
            <button className="text-blue-600 font-semibold hover:text-blue-800">
              Listen Now →
            </button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="bg-blue-100 rounded-lg p-4 mb-4">
              <Play className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">The Electrolytes Show</h3>
            <p className="text-gray-600 mb-4">Understanding your body's electrical system.</p>
            <button className="text-blue-600 font-semibold hover:text-blue-800">
              Listen Now →
            </button>
          </div>
        </div>
      </div>

      {/* Support Section */}
      <div className="bg-gray-100">
        <div className="container mx-auto px-6 py-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Support Food Truth</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Help us continue bringing you accurate, accessible nutrition science. Your support makes a difference.
            </p>
            <div className="space-x-4">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700">
                Donate Now
              </button>
              <Link href="/contact" className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 border border-blue-600">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
