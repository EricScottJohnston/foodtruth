import { Outfit } from 'next/font/google'

const outfit = Outfit({ subsets: ['latin'] })

export default function B1E1Blog() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <article className="container mx-auto px-6 max-w-4xl">
        <h1 className={`${outfit.className} text-3xl md:text-4xl font-bold mb-6 text-gray-800`}>
          Your Body's Foundry: Understanding Your Metabolic Symphony
        </h1>

        <div className="prose prose-lg prose-blue max-w-none">
          {/* Author and date info */}
          <div className="flex items-center gap-4 text-gray-600 mb-8 text-sm">
            <span>Published January 2024</span>
            <span>•</span>
            <span>10 min read</span>
          </div>

          {/* Main content with enhanced typography */}
          <p className="text-lg leading-relaxed mb-6">
            When we say we "burn calories," we're not actually setting anything on fire. Instead, your body runs a sophisticated chemical foundry that transforms food into life itself. In Episode 1 of Food Truth, we explored this remarkable process, but let's dig even deeper into how your metabolic foundry really works.
          </p>

          <p className="text-gray-700 mb-6">
            Every cell in your body is like a tiny factory running 24/7. Right now, as you read these words, trillions of chemical reactions are taking place inside you. Your liver cells are processing nutrients, your muscle cells are generating energy, and your brain cells are burning through glucose to power your thoughts.
          </p>

          <p className="text-gray-700 mb-6">
            The complexity of this system is staggering. Your metabolism isn't just one process -- it's a vast network of interconnected reactions. Some break down molecules to release energy (catabolism), while others build new molecules (anabolism). These processes happen simultaneously, regulated by an intricate dance of hormones and enzymes.
          </p>

          <h2 className={`${outfit.className} text-2xl font-semibold mt-8 mb-4 text-gray-800`}>
            The Protein Pathway
          </h2>

          <p className="text-gray-700 mb-6">
            Take protein metabolism, for example. When you eat a piece of chicken, your digestive system breaks down its proteins into amino acids. But that's just the beginning. Your cells then reassemble these amino acids into new proteins specific to your needs -- from muscle fibers to immune system antibodies. Any excess amino acids don't go to waste; they're converted into glucose or fatty acids for energy.
          </p>

          <h2 className={`${outfit.className} text-2xl font-semibold mt-8 mb-4 text-gray-800`}>
            Your Brain's Control Room
          </h2>

          <p className="text-gray-700 mb-6">
            Your brain plays a crucial role in this metabolic symphony. The hypothalamus acts as your body's master control room, constantly monitoring hormone levels, nutrient availability, and energy needs. It can trigger hunger when you need more fuel, or signal your body to break down stored energy when food isn't available.
          </p>

          <p className="text-gray-700 mb-6">
            Perhaps most fascinating is how your metabolism adapts to your needs. During exercise, it can ramp up energy production within seconds. While you sleep, it shifts to repair and maintenance mode. When food is scarce, it becomes more efficient at conserving energy.
          </p>

          <h2 className={`${outfit.className} text-2xl font-semibold mt-8 mb-4 text-gray-800`}>
            Daily Rhythms and Responses
          </h2>

          <p className="text-gray-700 mb-6">
            Understanding metabolism helps explain many common experiences. That mid-afternoon energy crash? It might be your body responding to changing insulin levels. The extra energy after exercise? Thank your metabolism's afterburn effect, technically known as excess post-exercise oxygen consumption (EPOC).
          </p>

          <p className="text-gray-700 mb-6">
            But metabolism isn't just about energy and nutrients. It's also about maintaining balance. Your body keeps its temperature at 98.6°F (37°C), not through one big thermostat, but through countless metabolic reactions generating precisely controlled amounts of heat. Even your pH balance, crucial for survival, is maintained through metabolic processes.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8 rounded">
            <p className="text-gray-800 italic">
              The next time someone talks about "boosting metabolism," remember: you're not stoking a fire. You're conducting an incredibly sophisticated chemical symphony that's been fine-tuned by millions of years of evolution. Every bite of food starts a journey through your personal foundry, transformed by chemistry into the energy that powers your life.
            </p>
          </div>

          <p className="text-blue-600 font-semibold mt-8">
            Want to learn more? Listen to Episode 1 of Food Truth, where we follow a single bite of food through this remarkable journey, and discover how your body's foundry turns nutrients into life itself.
          </p>
        </div>
      </article>
    </div>
  );
}
