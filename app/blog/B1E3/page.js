'use client';

import { Outfit } from 'next/font/google'

const outfit = Outfit({ subsets: ['latin'] })

export default function B1E3Blog() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <article className="container mx-auto px-6 max-w-4xl">
        <h1 className={`${outfit.className} text-3xl md:text-4xl font-bold mb-6 text-gray-800`}>
          The Electric Body: How Charged Particles Power Your Life
        </h1>

        <div className="prose prose-lg prose-blue max-w-none">
          <div className="flex items-center gap-4 text-gray-600 mb-8 text-sm">
            <span>Published March 2024</span>
            <span>•</span>
            <span>8 min read</span>
          </div>

          <p className="text-lg leading-relaxed mb-6">
            You're not just a water-based organism -- you're an electrically-powered being. Every thought you have, every heartbeat, every muscle movement depends on tiny charged particles called electrolytes. In Episode 3 of Food Truth, we explored these essential minerals, but their story runs even deeper.
          </p>

          <p className="text-gray-700 mb-6">
            Think of electrolytes as nature's battery system. When table salt (sodium chloride) dissolves in your body, it splits into sodium and chloride ions -- atoms that carry electrical charges. These charged particles create the electrical gradients that power your cellular machinery. It's like having billions of microscopic batteries, all working in perfect harmony.
          </p>

          <h2 className={`${outfit.className} text-2xl font-semibold mt-8 mb-4 text-gray-800`}>
            The Speed of Thought
          </h2>

          <p className="text-gray-700 mb-6">
            The precision of this system is remarkable. Your nerve cells maintain a delicate balance of sodium and potassium ions across their membranes. When a nerve fires, these ions swap places faster than you can blink, creating electrical signals that travel at speeds up to 120 meters per second. Every thought you're having right now exists because of this ionic dance.
          </p>

          <h2 className={`${outfit.className} text-2xl font-semibold mt-8 mb-4 text-gray-800`}>
            Diverse Roles
          </h2>

          <p className="text-gray-700 mb-6">
            Different electrolytes play distinct but interconnected roles. Calcium isn't just for bones -- it triggers muscle contractions and helps blood clot. Magnesium acts like a master key, activating hundreds of enzymes throughout your body. Potassium helps maintain your heart's rhythm, while chloride helps create stomach acid for digestion.
          </p>

          <p className="text-gray-700 mb-6">
            Your body maintains electrolyte balance with incredible precision. Special sensors in your brain can detect changes as small as 1% in electrolyte concentrations. When levels shift, hormones signal your kidneys to adjust, either conserving or eliminating electrolytes as needed. It's like having a perfect chemical thermostat system.
          </p>

          <h2 className={`${outfit.className} text-2xl font-semibold mt-8 mb-4 text-gray-800`}>
            Ancient Origins
          </h2>

          <p className="text-gray-700 mb-6">
            The evolutionary story of electrolytes is fascinating. The sodium concentration in your blood is remarkably similar to that of ancient seas where life began. We still carry a bit of the primordial ocean within us, our cells bathed in a carefully regulated salt solution that echoes life's origins.
          </p>

          <p className="text-gray-700 mb-6">
            Understanding electrolytes explains many common experiences. That muscle cramp during exercise? Could be from electrolyte imbalance. Feeling weak after a stomach bug? You've lost crucial electrolytes. This is why sports drinks aren't just flavored water -- they're designed to replace these essential minerals.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8 rounded">
            <p className="text-gray-800 italic">
              Most fascinating is how these different electrolytes work together. No electrolyte works alone. They're part of an intricate dance, each one affecting the others. Your body coordinates this ballet with remarkable sophistication, adjusting multiple electrolytes simultaneously to maintain perfect balance.
            </p>
            <p className="text-gray-800 italic mt-4">
              The next time someone mentions electrolytes, remember: they're not just for athletes or sports drinks. They're the charged particles that make life possible, turning your body into a living electrical system more sophisticated than any battery we've ever built.
            </p>
          </div>

          <p className="text-blue-600 font-semibold mt-8">
            Want to learn more? Listen to Episode 3 of Food Truth, where we explore the incredible journey of electrolytes through your body and discover how these star-forged ions keep you alive.
          </p>
        </div>
      </article>
    </div>
  );
}
