'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Flame, // for Metabolism
  Droplets, // for Water
  Zap, // for Electrolytes
  Salt, // for Salt
  Cookie, // for Carbohydrates
  Candy, // for Sugar
  Egg, // for Protein
  Oil, // for Fats
  Apple, // for Vitamins
  Scale // for Dieting
} from 'lucide-react';

export default function NutrikineticsTopics() {
  const topics = [
    {
      id: "B1E1",
      title: "The Metabolism Show",
      desc: "Discover how your body's foundry turns food into energy.",
      icon: Flame,
      href: "/nutrikinetics/metabolism",
      status: "available"
    },
    {
      id: "B1E2",
      title: "The Water Show",
      desc: "Explore how water flows through your body's systems.",
      icon: Droplets,
      href: "/nutrikinetics/water",
      status: "coming-soon"
    },
    // ... continue with other episodes
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-8">Nutrikinetics Visualizations</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topics.map((topic) => {
            const Icon = topic.icon;
            return (
              <div 
                key={topic.id}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="bg-blue-100 rounded-lg p-4 mb-4 w-12 h-12 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-blue-600" />
                </div>
                
                <h3 className="text-xl font-semibold mb-2">{topic.title}</h3>
                <p className="text-gray-600 mb-4">{topic.desc}</p>
                
                {topic.status === 'available' ? (
                  <Link 
                    href={topic.href}
                    className="text-blue-600 font-semibold hover:text-blue-800 flex items-center"
                  >
                    Explore Visualization
                    <span className="ml-2">→</span>
                  </Link>
                ) : (
                  <span className="text-gray-400 font-semibold">Coming Soon</span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
