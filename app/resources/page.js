'use client';

import React from 'react';
import Link from 'next/link';
import { Book } from 'lucide-react';

export default function ResourcesPage() {
  const episodes = [
    {
      id: "B1E1",
      title: "The Metabolism Show",
      description: "Research references and further reading about metabolism and cellular energy.",
    },
    {
      id: "B1E2",
      title: "The Water Show",
      description: "Scientific papers and books about water's role in the body.",
    },
    {
      id: "B1E3",
      title: "The Electrolytes Show",
      description: "References about electrolytes and cellular function.",
    },
    {
      id: "B1E4",
      title: "The Salt Show",
      description: "Studies and books about salt's role in human health.",
    },
    {
      id: "B1E5",
      title: "The Carbohydrates Show",
      description: "Research about carbohydrate metabolism and function.",
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-6">
        <h1 className="text-3xl md:text-4xl font-bold mb-2 text-gray-800">Episode Resources</h1>
        <p className="text-gray-600 mb-8">Find scientific references and additional reading for each episode.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {episodes.map((episode) => (
            <Link href={`/resources/${episode.id}`} key={episode.id}>
              <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:border-blue-200">
                <div className="flex items-center mb-4">
                  <Book className="w-6 h-6 text-blue-600 mr-2" />
                  <span className="text-sm font-medium text-blue-600">Episode {episode.id}</span>
                </div>
                <h2 className="text-xl font-semibold mb-2 text-gray-800">{episode.title}</h2>
                <p className="text-gray-600">{episode.description}</p>
                <div className="mt-4 text-blue-600 text-sm font-semibold flex items-center">
                  View References
                  <span className="ml-2">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
