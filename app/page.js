
import React from 'react';
import { Play } from 'lucide-react';

export default function Homepage() {
  const episodes = [
    {
      title: "The Metabolism Show",
      desc: "Discover how your body's foundry turns food into energy.",
      status: "available"
    },
    {
      title: "The Water Show",
      desc: "Explore how water flows through your body's systems.",
      status: "available"
    },
    {
      title: "The Electrolytes Show",
      desc: "Understanding your body's electrical system.",
      status: "available"
    },
    {
      title: "The Salt Show",
      desc: "The essential mineral that keeps your cells in balance.",
      status: "coming-soon"
    },
    {
      title: "The Carbohydrates Show",
      desc: "Your body's preferred energy source explained.",
      status: "coming-soon"
    },
    {
      title: "The Protein Show",
      desc: "Building blocks of life and cellular construction.",
      status: "coming-soon"
    },
    {
      title: "The Fats Show",
      desc: "Essential nutrients and energy storage revealed.",
      status: "coming-soon"
    },
    {
      title: "The Vitamins Show",
      desc: "Crucial compounds that power your cellular processes.",
      status: "coming-soon"
    },
    {
      title: "The Sugar Show",
      desc: "Sweet science and metabolic mysteries unveiled.",
      status: "coming-soon"
    },
    {
      title: "The Dieting Show",
      desc: "Science-based approaches to nutrition and health.",
      status: "coming-soon"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero and Quick Navigation sections remain the same */}

      {/* Updated Featured Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="flex justify-between items-baseline mb-8">
          <h2 className="text-3xl font-bold">Block One Episodes</h2>
          <span className="text-blue-600">Block 1 / Season 2024</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {episodes.map((episode, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-md transform transition-all duration-300 
                hover:scale-105 hover:shadow-xl relative"
            >
              <div className={`bg-blue-100 rounded-lg p-4 mb-4 transform transition-all duration-300 
                hover:rotate-12 ${episode.status === 'coming-soon' ? 'opacity-50' : ''}`}>
                {episode.status === 'available' ? (
                  <Play className="w-6 h-6 text-blue-600" />
                ) : (
                  <Clock className="w-6 h-6 text-blue-400" />
                )}
              </div>
              
              {episode.status === 'coming-soon' && (
                <div className="absolute top-4 right-4">
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                    Coming Soon
                  </span>
                </div>
              )}

              <h3 className="text-xl font-semibold mb-2">{episode.title}</h3>
              <p className="text-gray-600 mb-4">{episode.desc}</p>
              
              {episode.status === 'available' ? (
                <button className="text-blue-600 font-semibold hover:text-blue-800 transition-all 
                  duration-300 hover:translate-x-2 flex items-center">
                  Listen Now 
                  <span className="transform transition-all duration-300 inline-block ml-1">→</span>
                </button>
              ) : (
                <button className="text-gray-400 font-semibold flex items-center cursor-not-allowed">
                  Coming Soon
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Episode Progress */}
        <div className="mt-12 bg-white p-6 rounded-lg shadow-md">
          <div className="flex justify-between items-center mb-4">
            <span className="text-gray-600">Block 1 Progress</span>
            <span className="text-blue-600 font-semibold">3 of 10 Episodes Available</span>
          </div>
          <div className="h-2 bg-gray-200 rounded-full">
            <div className="h-2 bg-blue-600 rounded-full transition-all duration-500"
              style={{ width: '30%' }}></div>
          </div>
        </div>
      </div>

      {/* Support Section remains the same */}
    </div>
  );
}

