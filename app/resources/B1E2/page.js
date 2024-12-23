'use client';

import { Outfit } from 'next/font/google'
import { ArrowLeft, ExternalLink } from 'lucide-react';
import Link from 'next/link';

const outfit = Outfit({ subsets: ['latin'] })

export default function B1E2Resources() {
 return (
   <div className="min-h-screen bg-gray-50 py-12">
     <div className="container mx-auto px-6 max-w-4xl">
       <Link href="/resources/bibliography" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8">
         <ArrowLeft className="w-4 h-4 mr-2" />
         Back to Bibliography
       </Link>
       
       <h1 className={`${outfit.className} text-3xl md:text-4xl font-bold mb-6 text-gray-800`}>
         The Water Show: Bibliography
       </h1>

       <div className="space-y-12">
         <section>
           <h2 className={`${outfit.className} text-2xl font-semibold mb-4 text-gray-800`}>
             Scientific Papers and Research
           </h2>
           <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
             <div>
               <p className="font-semibold text-gray-800">"Water's Unique Properties" - Chemical Reviews (2021)</p>
               <p className="text-sm text-gray-500 mt-1">Comprehensive review of water molecule behavior</p>
             </div>
             <div>
               <p className="font-semibold text-gray-800">"Hydration Science: Current Understanding" - Nature Reviews Nephrology (2020)</p>
               <p className="text-sm text-gray-500 mt-1">Latest research on body water regulation</p>
             </div>
             <div>
               <p className="font-semibold text-gray-800">"The Role of Water in Cell Biology" - Annual Review of Cell Biology (2019)</p>
               <p className="text-sm text-gray-500 mt-1">Details cellular water management</p>
             </div>
             <div>
               <p className="font-semibold text-gray-800">"Climate Change and the Global Water Cycle" - Science (2021)</p>
               <p className="text-sm text-gray-500 mt-1">Water's role in climate systems</p>
             </div>
           </div>
         </section>

         <section>
           <h2 className={`${outfit.className} text-2xl font-semibold mb-4 text-gray-800`}>
             Books for Deep Understanding
           </h2>
           <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
             <div>
               <p className="font-semibold text-gray-800">"Water: A Biography" by Giulio Boccaletti</p>
               <p className="text-sm text-gray-500 mt-1">History of water's role in civilization</p>
             </div>
             <div>
               <p className="font-semibold text-gray-800">"The Secret Life of Water" by Philip Ball</p>
               <p className="text-sm text-gray-500 mt-1">Detailed exploration of water's properties</p>
             </div>
             <div>
               <p className="font-semibold text-gray-800">"Life's Matrix: A Biography of Water" by Philip Ball</p>
               <p className="text-sm text-gray-500 mt-1">Water's role in biological systems</p>
             </div>
             <div>
               <p className="font-semibold text-gray-800">"Water: The Epic Struggle for Wealth, Power, and Civilization" by Steven Solomon</p>
               <p className="text-sm text-gray-500 mt-1">Historical and geopolitical aspects</p>
             </div>
           </div>
         </section>

         <section>
           <h2 className={`${outfit.className} text-2xl font-semibold mb-4 text-gray-800`}>
             Accessible Reads
           </h2>
           <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
             <div>
               <p className="font-semibold text-gray-800">"Your Body's Many Cries for Water" by F. Batmanghelidj</p>
               <p className="text-sm text-gray-500 mt-1">Popular book on hydration and health</p>
             </div>
             <div>
               <p className="font-semibold text-gray-800">"Drinking Water: A History" by James Salzman</p>
               <p className="text-sm text-gray-500 mt-1">Cultural history of water consumption</p>
             </div>
             <div>
               <p className="font-semibold text-gray-800">"The Fourth Phase of Water" by Gerald H. Pollack</p>
               <p className="text-sm text-gray-500 mt-1">Alternative views on water structure</p>
             </div>
           </div>
         </section>

         <section>
           <h2 className={`${outfit.className} text-2xl font-semibold mb-4 text-gray-800`}>
             Online Resources
           </h2>
           <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
             <div className="flex items-start justify-between">
               <div>
                 <p className="font-semibold text-gray-800">NASA Earth Observatory - Water Cycle</p>
                 <a 
                   href="https://earthobservatory.nasa.gov/features/Water" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="text-sm text-blue-600 hover:text-blue-800 flex items-center"
                 >
                   <ExternalLink className="w-4 h-4 mr-1" />
                   Visit Resource
                 </a>
               </div>
             </div>
             <div className="flex items-start justify-between">
               <div>
                 <p className="font-semibold text-gray-800">USGS Water Science School</p>
                 <a 
                   href="https://www.usgs.gov/special-topics/water-science-school" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="text-sm text-blue-600 hover:text-blue-800 flex items-center"
                 >
                   <ExternalLink className="w-4 h-4 mr-1" />
                   Visit Resource
                 </a>
               </div>
             </div>
             <div className="flex items-start justify-between">
               <div>
                 <p className="font-semibold text-gray-800">WHO Guidelines for Drinking-water Quality</p>
                 <a 
                   href="https://www.who.int/publications/i/item/9789240045064" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="text-sm text-blue-600 hover:text-blue-800 flex items-center"
                 >
                   <ExternalLink className="w-4 h-4 mr-1" />
                   Visit Resource
                 </a>
               </div>
             </div>
           </div>
         </section>

         <section>
           <h2 className={`${outfit.className} text-2xl font-semibold mb-4 text-gray-800`}>
             Historical References
           </h2>
           <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
             <div>
               <p className="font-semibold text-gray-800">"On the Properties of Water" - Henry Cavendish (1784)</p>
               <p className="text-sm text-gray-500 mt-1">Historical discovery of water composition</p>
             </div>
             <div>
               <p className="font-semibold text-gray-800">"The Physics and Physical Chemistry of Water" - Journal Series</p>
               <p className="text-sm text-gray-500 mt-1">Development of water science understanding</p>
             </div>
           </div>
         </section>

         <section>
           <h2 className={`${outfit.className} text-2xl font-semibold mb-4 text-gray-800`}>
             Research Databases
           </h2>
           <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
             <div className="flex items-start justify-between">
               <div>
                 <p className="font-semibold text-gray-800">World Water Database</p>
                 <a 
                   href="https://www.worldwater.org" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="text-sm text-blue-600 hover:text-blue-800 flex items-center"
                 >
                   <ExternalLink className="w-4 h-4 mr-1" />
                   Visit Database
                 </a>
               </div>
             </div>
             <div className="flex items-start justify-between">
               <div>
                 <p className="font-semibold text-gray-800">Water Research Foundation</p>
                 <a 
                   href="https://www.waterrf.org" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="text-sm text-blue-600 hover:text-blue-800 flex items-center"
                 >
                   <ExternalLink className="w-4 h-4 mr-1" />
                   Visit Database
                 </a>
               </div>
             </div>
           </div>
         </section>

         <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded">
           <p className="text-gray-700 italic">
             Note: Water science continues evolving. Check publication dates and verify current research, especially regarding climate impacts and health recommendations.
           </p>
         </div>
       </div>
     </div>
   </div>
 );
}
