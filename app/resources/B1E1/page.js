'use client';

import { Outfit } from 'next/font/google'
import { ArrowLeft, ExternalLink } from 'lucide-react';
import Link from 'next/link';

const outfit = Outfit({ subsets: ['latin'] })

export default function B1E1Resources() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-6 max-w-4xl">
        <Link href="/resources" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Resources
        </Link>
        
        <h1 className={`${outfit.className} text-3xl md:text-4xl font-bold mb-6 text-gray-800`}>
          The Metabolism Show: Bibliography
        </h1>

        <div className="space-y-12">
          {/* Scientific Papers Section */}
          <section>
            <h2 className={`${outfit.className} text-2xl font-semibold mb-4 text-gray-800`}>
              Scientific Papers and Research
            </h2>
            <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
              <div>
                <p className="font-semibold text-gray-800">"Cellular metabolism regulates contact sites between organelles"</p>
                <p className="text-gray-600">Nature Reviews Molecular Cell Biology (2020)</p>
                <p className="text-sm text-gray-500 mt-1">Key resource for understanding cellular energy processes</p>
              </div>
              <div>
                <p className="font-semibold text-gray-800">"Integration of Metabolism and Brain Function"</p>
                <p className="text-gray-600">Nature Reviews Neuroscience (2019)</p>
                <p className="text-sm text-gray-500 mt-1">Details the brain's metabolic demands and energy use</p>
              </div>
              <div>
                <p className="font-semibold text-gray-800">"Circadian Regulation of Cellular Metabolism"</p>
                <p className="text-gray-600">Nature Reviews Molecular Cell Biology (2019)</p>
                <p className="text-sm text-gray-500 mt-1">Explains daily rhythms in metabolic processes</p>
              </div>
            </div>
          </section>

          {/* Books Section */}
          <section>
            <h2 className={`${outfit.className} text-2xl font-semibold mb-4 text-gray-800`}>
              Books for Deep Understanding
            </h2>
            <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
              <div>
                <p className="font-semibold text-gray-800">"Metabolic Regulation: A Human Perspective" by Keith N. Frayn</p>
                <p className="text-sm text-gray-500 mt-1">Comprehensive overview of human metabolism</p>
              </div>
              <div>
                <p className="font-semibold text-gray-800">"Energy and Civilization: A History" by Vaclav Smil</p>
                <p className="text-sm text-gray-500 mt-1">Historical perspective on energy use and metabolism</p>
              </div>
              <div>
                <p className="font-semibold text-gray-800">"The Machinery of Life" by David S. Goodsell</p>
                <p className="text-sm text-gray-500 mt-1">Excellent visualizations of cellular processes</p>
              </div>
              <div>
                <p className="font-semibold text-gray-800">"Introduction to Metabolic and Cellular Engineering" by S. Cortassa</p>
                <p className="text-sm text-gray-500 mt-1">Technical but accessible coverage of metabolic pathways</p>
              </div>
            </div>
          </section>

          {/* Accessible Reads Section */}
          <section>
            <h2 className={`${outfit.className} text-2xl font-semibold mb-4 text-gray-800`}>
              Accessible Reads
            </h2>
            <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
              <div>
                <p className="font-semibold text-gray-800">"Why We Eat What We Eat" by Rachel Herz</p>
                <p className="text-sm text-gray-500 mt-1">Connects metabolism to eating behaviors</p>
              </div>
              <div>
                <p className="font-semibold text-gray-800">"Burn: New Research Blows the Lid Off How We Really Burn Calories" by Herman Pontzer</p>
                <p className="text-sm text-gray-500 mt-1">Recent findings about human metabolism</p>
              </div>
              <div>
                <p className="font-semibold text-gray-800">"The Body: A Guide for Occupants" by Bill Bryson</p>
                <p className="text-sm text-gray-500 mt-1">Chapter 15 focuses on metabolism and energy use</p>
              </div>
            </div>
          </section>

          {/* Online Resources Section */}
          <section>
            <h2 className={`${outfit.className} text-2xl font-semibold mb-4 text-gray-800`}>
              Online Resources
            </h2>
            <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-semibold text-gray-800">Khan Academy: Cellular Respiration</p>
                  <p className="text-sm text-blue-600 hover:text-blue-800 flex items-center">
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Visit Resource
                  </p>
                </div>
              </div>
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-semibold text-gray-800">NIH National Institute of Diabetes and Digestive and Kidney Diseases</p>
                  <p className="text-sm text-blue-600 hover:text-blue-800 flex items-center">
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Visit Resource
                  </p>
                </div>
              </div>
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-semibold text-gray-800">The Metabolism & Weight Management Program - Harvard Medical School</p>
                  <p className="text-sm text-blue-600 hover:text-blue-800 flex items-center">
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Visit Resource
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Historical References Section */}
          <section>
            <h2 className={`${outfit.className} text-2xl font-semibold mb-4 text-gray-800`}>
              Historical References
            </h2>
            <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
              <div>
                <p className="font-semibold text-gray-800">"The Discovery of the Citric Acid Cycle" by Hans Krebs (1940)</p>
                <p className="text-sm text-gray-500 mt-1">Original paper describing key metabolic processes</p>
              </div>
              <div>
                <p className="font-semibold text-gray-800">"The History of Cell Metabolism" - Nature Reviews Molecular Cell Biology (2020)</p>
                <p className="text-sm text-gray-500 mt-1">Historical development of our understanding</p>
              </div>
            </div>
          </section>

          {/* Databases Section */}
          <section>
            <h2 className={`${outfit.className} text-2xl font-semibold mb-4 text-gray-800`}>
              Relevant Databases
            </h2>
            <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-semibold text-gray-800">KEGG (Kyoto Encyclopedia of Genes and Genomes) Metabolism Database</p>
                  <p className="text-sm text-blue-600 hover:text-blue-800 flex items-center">
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Visit Database
                  </p>
                </div>
              </div>
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-semibold text-gray-800">MetaCyc Database of Metabolic Pathways</p>
                  <p className="text-sm text-blue-600 hover:text-blue-800 flex items-center">
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Visit Database
                  </p>
                </div>
              </div>
            </div>
          </section>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded">
            <p className="text-gray-700 italic">
              Note: As with any scientific field, metabolism research is constantly updating. 
              Check publication dates and cross-reference current research for the most up-to-date information.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
