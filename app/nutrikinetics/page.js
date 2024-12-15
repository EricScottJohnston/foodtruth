'use client';
import React from 'react';
import Link from 'next/link';
import { 
  Flame, // Metabolism - red/orange theme
  Droplets, // Water - blue theme
  Zap, // Electrolytes - yellow theme
  Salt, // Salt - white/gray theme
  Cookie, // Carbohydrates - brown theme
  Candy, // Sugar - pink theme
  Beef, // Protein - red theme
  Oil, // Fats - golden theme
  Apple, // Vitamins - green theme
  Scale // Dieting - purple theme
} from 'lucide-react';

export default function NutrikineticsTopics() {
  const topics = [
    {
      id: "B1E1",
      title: "The Metabolism Show",
      desc: "Your body's energy transformation system",
      icon: Flame,
      href: "/nutrikinetics/metabolism",
      status: "available",
      bgColor: "bg-orange-100",
      iconColor: "text-orange-600",
      hoverColor: "hover:bg-orange-50"
    },
    {
      id: "B1E2",
      title: "The Water Show",
      desc: "Life's essential solvent and transport system",
      icon: Droplets,
      href: "/nutrikinetics/water",
      status: "coming-soon",
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600",
      hoverColor: "hover:bg-blue-50"
    },
    {
      id: "B1E3",
      title: "The Electrolytes Show",
      desc: "Your body's electrical system",
      icon: Zap,
      href: "/nutrikinetics/electrolytes",
      status: "coming-soon",
      bgColor: "bg-yellow-100",
      iconColor: "text-yellow-600",
      hoverColor: "hover:bg-yellow-50"
    },
    {
      id: "B1E4",
      title: "The Salt Show",
      desc: "Essential mineral balance",
      icon: Salt,
      href: "/nutrikinetics/salt",
      status: "coming-soon",
      bgColor: "bg-gray-100",
      iconColor: "text-gray-600",
      hoverColor: "hover:bg-gray-50"
    },
    {
      id: "B1E5",
      title: "The Carbohydrates Show",
      desc: "Primary cellular energy source",
      icon: Cookie,
      href: "/nutrikinetics/carbohydrates",
      status: "coming-soon",
      bgColor: "bg-amber-100",
      iconColor: "text-amber-600",
      hoverColor: "hover:bg-amber-50"
    },
    {
      id: "B1E6",
      title: "The Sugar Show",
      desc: "Sweet science of energy",
      icon: Candy,
      href: "/nutrikinetics/sugar",
      status: "coming-soon",
      bgColor: "bg-pink-100",
      iconColor: "text-pink-600",
      hoverColor: "hover:bg-pink-50"
    },
    {
      id: "B1E7",
      title: "The Protein Show",
      desc: "Building blocks of life",
      icon: Beef,
      href: "/nutrikinetics/protein",
      status: "coming-soon",
      bgColor: "bg-red-100",
      iconColor: "text-red-600",
      hoverColor: "hover:bg-red-50"
    },
    {
      id: "B1E8",
      title: "The Fats Show",
      desc: "Essential energy storage",
      icon: Oil,
      href: "/nutrikinetics/fats",
      status: "coming-soon",
      bgColor: "bg-yellow-100",
      iconColor: "text-yellow-600",
      hoverColor: "hover:bg-yellow-50"
    },
    {
      id: "B1E9",
      title: "The Vitamins Show",
      desc: "Crucial cellular catalysts",
      icon: Apple,
      href: "/nutrikinetics/vitamins",
      status: "coming-soon",
      bgColor: "bg-green-100",
      iconColor: "text-green-600",
      hoverColor: "hover:bg-green-50"
    },
    {
      id: "B1E10",
      title: "The Dieting Show",
      desc: "Science-based nutrition approach",
      icon: Scale,
      href: "/nutrikinetics/dieting",
      status: "coming-soon",
      bgColor: "bg-purple-100",
      iconColor: "text-purple-600",
      hoverColor: "hover:bg-purple-50"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Nutrikinetics Visualizations</h1>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {topics.map((topic) => {
            const Icon = topic.icon;
            return (
              <div 
                key={topic.id}
                className={`${topic.bgColor} ${topic.hoverColor} p-4 rounded-lg transition-all duration-300 hover:shadow-md`}
              >
                <div className="flex items-center mb-2">
                  <Icon className={`w-5 h-5 ${topic.iconColor} mr-2`} />
                  <span className="text-xs font-semibold text-gray-500">{topic.id}</span>
                </div>
                
                <h3 className="text-sm font-semibold mb-1">{topic.title}</h3>
                <p className="text-xs text-gray-600 mb-2">{topic.desc}</p>
                
                {topic.status === 'available' ? (
                  <Link 
                    href={topic.href}
                    className={`text-xs ${topic.iconColor} font-semibold hover:underline flex items-center`}
                  >
                    View →
                  </Link>
                ) : (
                  <span className="text-xs text-gray-400">Coming Soon</span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
