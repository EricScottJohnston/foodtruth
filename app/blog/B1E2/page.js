import { Outfit } from 'next/font/google'

const outfit = Outfit({ subsets: ['latin'] })

export default function B1E2Blog() {
 return (
   <div className="min-h-screen bg-gray-50 py-12">
     <article className="container mx-auto px-6 max-w-4xl">
       <h1 className={`${outfit.className} text-3xl md:text-4xl font-bold mb-6 text-gray-800`}>
         The Universal Solvent: Your Body's Remarkable Water System
       </h1>

       <div className="prose prose-lg prose-blue max-w-none">
         <div className="flex items-center gap-4 text-gray-600 mb-8 text-sm">
           <span>Published February 2024</span>
           <span>•</span>
           <span>8 min read</span>
         </div>

         <p className="text-lg leading-relaxed mb-6">
           Water might seem simple -- just H2O, right? But this molecule is anything but ordinary. In Episode 2 of Food Truth, we explored how water moves through your body, but the story of water gets even more fascinating when we look closer.
         </p>

         <p className="text-gray-700 mb-6">
           You're roughly 60% water, but that number alone doesn't tell the whole story. Your brain is 73% water, your lungs are 83% water, and even your bones are 31% water. Every cell in your body is like a tiny water balloon, carefully maintaining its fluid balance. But unlike a water balloon, your cells actively manage their water content, constantly adjusting to keep everything working perfectly.
         </p>

         <h2 className={`${outfit.className} text-2xl font-semibold mt-8 mb-4 text-gray-800`}>
           Water's Unique Properties
         </h2>

         <p className="text-gray-700 mb-6">
           Here's something mind-bending: water is weird. It's one of the few substances that becomes less dense when it freezes -- that's why ice floats. If water behaved like most other molecules, lakes would freeze from the bottom up, and life as we know it wouldn't exist. Water's unique properties make it perfect for life, almost as if it were designed for the job.
         </p>

         <p className="text-gray-700 mb-6">
           Water's role as the "universal solvent" is crucial for your body's chemistry. It dissolves more substances than any other liquid, making it perfect for transporting nutrients, hormones, and waste products. Every time your heart beats, it's pushing water-based blood through roughly 60,000 miles of blood vessels, delivering essential molecules to every cell in your body.
         </p>

         <h2 className={`${outfit.className} text-2xl font-semibold mt-8 mb-4 text-gray-800`}>
           Precision Management
         </h2>

         <p className="text-gray-700 mb-6">
           The precision of your body's water management is remarkable. Specialized proteins called aquaporins act like molecular water slides, controlling water movement across cell membranes. Your kidneys filter about 150 quarts of water-based fluid every day, but you only lose about 1-2 quarts in urine because your body is incredibly efficient at recycling water.
         </p>

         <p className="text-gray-700 mb-6">
           That feeling of thirst? It's triggered when you're down just 2% of your body water. Your brain's thirst centers are so sensitive they can detect tiny changes in blood concentration, triggering a cascade of hormonal responses to maintain proper hydration. Evolution has made us experts at maintaining water balance because even small disruptions can cause big problems.
         </p>

         <h2 className={`${outfit.className} text-2xl font-semibold mt-8 mb-4 text-gray-800`}>
           Active Role in Life
         </h2>

         <p className="text-gray-700 mb-6">
           Water isn't just a passive participant in your body's processes -- it's an active player. It helps maintain your body temperature through sweating and evaporation. It cushions your brain and spinal cord. It lubricates your joints. It even helps maintain your blood pressure through its role in blood volume.
         </p>

         <p className="text-gray-700 mb-6">
           The water you drink today has likely existed for billions of years, cycling through clouds, oceans, glaciers, and countless organisms before becoming part of you. When you drink water, you're not just quenching your thirst -- you're participating in one of Earth's oldest and most important cycles.
         </p>

         <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8 rounded">
           <p className="text-gray-800 italic">
             Understanding water's role in your body explains why proper hydration is so crucial. Too little water, and your cells struggle to function. Too much water too quickly, and you can dilute essential electrolytes. Your body maintains a delicate balance, constantly adjusting water levels to keep everything running smoothly.
           </p>
         </div>

         <p className="text-blue-600 font-semibold mt-8">
           Want to learn more? Listen to Episode 2 of Food Truth, where we follow a single sip of water through its remarkable journey through your body, and discover why this simple molecule is essential for every aspect of life.
         </p>
       </div>
     </article>
   </div>
 );
}
