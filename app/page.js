'use client';

import Link from 'next/link'
import React, { useState } from 'react';
import { Play, Book, Radio, Search, BookOpen } from 'lucide-react';
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
              className="bg-white text-blue-800 px-6 py-3 rounded-lg font-semibold flex items-center hover:bg-blue-50 transition-all duration-200"
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
                  className="block px-4 py-2 text-gray-800 hover:bg-blue-50 transition-colors duration-200"
                >
                  Spotify
                </a>
                <a 
                  href="https://podcasts.apple.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block px-4 py-2 text-gray-800 hover:bg-blue-50 transition-colors duration-200"
                >
                  Apple Podcasts
                </a>
                <a 
                  href="https://podcasts.google.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block px-4 py-2 text-gray-800 hover:bg-blue-50 transition-colors duration-200"
                >
                  Google Podcasts
                </a>
                <a 
                  href="https://youtube.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block px-4 py-2 text-gray-800 hover:bg-blue-50 transition-colors duration-200"
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
          <Link href="/episodes" className="block group">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 h-full transform group-hover:-translate-y-1">
              <Radio className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-600 transition-colors duration-200">Latest Episodes</h3>
              <p className="text-gray-600">Explore our latest podcast episodes and show notes.</p>
            </div>
          </Link>

          <Link href="/blog" className="block group">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 h-full transform group-hover:-translate-y-1">
              <BookOpen className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-600 transition-colors duration-200">Blog</h3>
              <p className="text-gray-600">Read our latest insights and nutrition science articles.</p>
            </div>
          </Link>

          <Link href="/nutrikinetics" className="block group">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 h-full transform group-hover:-translate-y-1">
              <Book className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-600 transition-colors duration-200">Nutrikinetics</h3>
              <p className="text-gray-600">Dive deep into how your body processes nutrients.</p>
            </div>
          </Link>

          <Link href="/resources" className="block group">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 h-full transform group-hover:-translate-y-1">
              <Search className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-600 transition-colors duration-200">Resources</h3>
              <p className="text-gray-600">Find books, articles, and research.</p>
            </div>
          </Link>
        </div>
      </div>

      {/* Featured Content */}
     <div className="container mx-auto px-6 py-12">
  <h2 className="text-3xl font-bold mb-8">Latest Episodes</h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {/* Episode 1 */}
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4">The Metabolism Show</h3>
      <iframe 
        style={{ borderRadius: '12px' }} 
        src="https://open.spotify.com/embed/episode/4NOQdaTzTDUS1DO1hUJJN9" 
        width="100%" 
        height="352" 
        frameBorder="0" 
        allowfullscreen="" 
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
        loading="lazy"
      ></iframe>
      <p className="text-gray-600 mt-4">Discover how your body's foundry turns food into energy.</p>
    </div>

    {/* Episode 2 */}
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4">The Water Show</h3>
      <iframe 
        style={{ borderRadius: '12px' }} 
        src="https://open.spotify.com/embed/episode/3OKBU5jSX7V5T9FxwyTmPQ" 
        width="100%" 
        height="352" 
        frameBorder="0" 
        allowfullscreen="" 
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
        loading="lazy"
      ></iframe>
      <p className="text-gray-600 mt-4">Explore how water flows through your body's systems.</p>
    </div>

    {/* Episode 3 */}
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4">The Electrolytes Show</h3>
      <iframe 
        style={{ borderRadius: '12px' }} 
        src="https://open.spotify.com/embed/episode/296kRVRdDCuzhposGbet3v" 
        width="100%" 
        height="352" 
        frameBorder="0" 
        allowfullscreen="" 
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
        loading="lazy"
      ></iframe>
      <p className="text-gray-600 mt-4">Understanding your body's electrical system.</p>
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
              <a 
  href="https://buymeacoffee.com/getfoodtruth" 
  target="_blank" 
  rel="noopener noreferrer" 
  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 inline-block"
>
  Support Us
</a>
              <Link 
                href="/contact" 
                className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 border border-blue-600 transition-all duration-200"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
