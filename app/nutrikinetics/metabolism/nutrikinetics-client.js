'use client';

import React, { useState, useEffect } from 'react';
import { Play, Pause, ChevronRight, Info } from 'lucide-react';

export default function NutrikineticsVisualization() {
 const [activeStep, setActiveStep] = useState(0);
 const [isPlaying, setIsPlaying] = useState(false);

 useEffect(() => {
   let interval;
   
   if (isPlaying) {
     interval = setInterval(() => {
       setActiveStep((current) => {
         return current >= steps.length - 1 ? 0 : current + 1;
       });
     }, 6000);
   }

   return () => clearInterval(interval);
 }, [isPlaying]);

 const handlePlayPause = () => {
   setIsPlaying(!isPlaying);
 };

 const steps = [
   {
     title: "Cosmic Origins",
     time: "Billions of years ago",
     description: "Elements forged in stellar furnaces"
   },
   {
     title: "Initial Contact",
     time: "T Minus 2 seconds",
     description: "Your brain see's the pizza and prepares for hormone release"
   },
   {
     title: "First Response",
     time: "T Minus 0: First Taste",
     description: "Initial cellular reactions begin"
   },
   {
     title: "Absorption Phase",
     time: "T+5 minutes",
     description: "Movement through digestive system"
   },
   {
     title: "Distribution",
     time: "T+30 minutes",
     description: "Cellular uptake and utilization"
   }
 ];

 return (
   <div className="min-h-screen bg-gray-50 p-6">
     <div className="max-w-6xl mx-auto">
       {/* Header */}
       <div className="mb-8">
         <h1 className="text-3xl font-bold text-gray-900 mb-2">
           Nutrikinetics Journey Visualization
         </h1>
         <p className="text-gray-600">
           Follow nutrients as they travel through your body's foundry
         </p>
       </div>

       {/* Main Visualization Area */}
       <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
         {/* Timeline Navigation */}
         <div className="flex items-center justify-between mb-8">
           <button 
             className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
             onClick={handlePlayPause}
           >
             {isPlaying ? <Pause className="mr-2" /> : <Play className="mr-2" />}
             {isPlaying ? 'Pause Journey' : 'Start Journey'}
           </button>

           <div className="flex-1 mx-8">
             <div className="relative">
               <div className="h-2 bg-gray-200 rounded">
                 <div 
                   className="h-2 bg-blue-600 rounded transition-all duration-500"
                   style={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
                 ></div>
               </div>
               <div className="flex justify-between mt-2">
                 {steps.map((step, index) => (
                   <button
                     key={index}
                     onClick={() => setActiveStep(index)}
                     className={`w-4 h-4 rounded-full ${
                       index <= activeStep ? 'bg-blue-600' : 'bg-gray-200'
                     } -mt-3 transition-all duration-300`}
                   ></button>
                 ))}
               </div>
             </div>
           </div>
         </div>

         {/* Visualization Stage */}
         <div className="bg-gray-100 rounded-lg p-8 mb-8 h-auto flex flex-col items-center justify-center">
           <div className="mb-4">
             <img 
               src={`/images/metabolism/${activeStep === 0 ? 'Elements_Forged' : 
                    activeStep === 1 ? 'Brain_Hormone_Release' : 
                    'Nutrient_Uptake'}.jpg`}
               alt={`Metabolism step ${activeStep + 1}`}
               width={300}
               height={300}
               className="object-contain"
               style={{ 
                 display: activeStep < 3 ? 'block' : 'none',
                 width: '300px',
                 height: '300px'
               }}
             />
           </div>
           <div className="text-center">
             <h3 className="text-2xl font-bold mb-4">{steps[activeStep].title}</h3>
             <p className="text-gray-600 mb-2">{steps[activeStep].time}</p>
             <p className="text-lg">{steps[activeStep].description}</p>
           </div>
         </div>

         {/* Controls and Information */}
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           <div className="bg-blue-50 rounded-lg p-6">
             <h3 className="text-xl font-semibold mb-4 flex items-center">
               <Info className="mr-2" />
               Current Process Details
             </h3>
             <p className="text-gray-700">
               Detailed explanation of the current stage in the nutrikinetics process,
               including cellular activities and chemical reactions.
             </p>
           </div>

           <div className="bg-gray-50 rounded-lg p-6">
             <h3 className="text-xl font-semibold mb-4">Key Components</h3>
             <ul className="space-y-2">
               <li className="flex items-center">
                 <ChevronRight className="mr-2 text-blue-600" />
                 <span>Cellular Transport</span>
               </li>
               <li className="flex items-center">
                 <ChevronRight className="mr-2 text-blue-600" />
                 <span>Enzyme Activity</span>
               </li>
               <li className="flex items-center">
                 <ChevronRight className="mr-2 text-blue-600" />
                 <span>Energy Production</span>
               </li>
             </ul>
           </div>
         </div>
       </div>
     </div>
   </div>
 );
}
