'use client';

import { Outfit } from 'next/font/google'

const outfit = Outfit({ subsets: ['latin'] })

export default function B1E4Blog() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <article className="container mx-auto px-6 max-w-4xl">
        <h1 className={`${outfit.className} text-3xl md:text-4xl font-bold mb-6 text-gray-800`}>
          The Crystal of Life: Salt's Remarkable Journey
        </h1>

        <div className="prose prose-lg prose-blue max-w-none">
          <p className="text-lg leading-relaxed mb-6">
            It's the only rock we eat. For millennia, salt has been essential to human civilization -- not just as a seasoning, but as a preservative, a currency, and a catalyst for technological advancement. In Episode 4 of Food Truth, we explored this remarkable mineral, but salt's story is even richer than you might imagine.
          </p>

          <p className="text-gray-700 mb-6">
            Your body contains about 250 grams of salt -- just enough to fill a small shaker. Yet this precise amount is crucial for survival. Every cell in your body maintains a careful balance of sodium and chloride ions, the components of table salt. Too much or too little can disrupt everything from nerve transmission to blood pressure.
          </p>

          <p className="text-gray-700 mb-6">
            The chemistry of salt is elegant in its simplicity. Sodium, a highly reactive metal that explodes in water, combines with chlorine, a toxic gas, to form sodium chloride -- a stable compound essential for life. When salt dissolves in your body, it separates into these components, each playing crucial but different roles.
          </p>

          <p className="text-gray-700 mb-6">
            Salt's role in human history is profound. The word "salary" comes from the Latin "salarium," the salt allowance given to Roman soldiers. Cities grew around salt sources. Trade routes were established to transport it. The ability to preserve food with salt allowed humans to travel farther and settle new lands.
          </p>

          <p className="text-gray-700 mb-6">
            Your body's relationship with salt reveals evolutionary history. Your blood contains almost exactly the same concentration of salt as the ancient seas where life began. This isn't coincidence -- your cells still require the same ionic environment that supported life billions of years ago.
          </p>

          <p className="text-gray-700 mb-6">
            Most fascinating is how your body regulates salt. Special sensors in your brain detect minute changes in blood salt concentration. Hormones signal your kidneys to either conserve or eliminate salt as needed. It's like having a perfect salt thermostat, maintained by millions of years of evolution.
          </p>

          <p className="text-gray-700 mb-6">
            Different types of salt -- sea salt, pink Himalayan, kosher -- all contain primarily sodium chloride, but their trace minerals can vary. While these differences might affect taste, your body processes the basic sodium chloride the same way. The premium you pay for exotic salts is more about culinary preference than biological necessity.
          </p>

          <p className="text-gray-700 mb-6">
            Salt also plays a crucial role in your stomach's defenses. Chloride ions combine with hydrogen to form hydrochloric acid, creating the acidic environment that both digests food and protects you from harmful bacteria. Your stomach's ability to contain this powerful acid without digesting itself is one of the marvels of evolution.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8 rounded">
            <p className="text-gray-800 italic">
              Understanding salt helps explain many common experiences. That craving for salty foods after exercise? Your body seeking to replace lost sodium. Feeling bloated after a salty meal? That's water following sodium into your tissues. Even tears are salty -- maintaining the same ionic balance your cells require.
            </p>
          </div>

          <p className="text-gray-700 mb-6">
            Want to learn more? Listen to Episode 4 of Food Truth, where we follow a salt crystal's journey through your body and discover why this simple mineral has shaped both human history and your own cellular function.
          </p>
        </div>
      </article>
    </div>
  );
}
