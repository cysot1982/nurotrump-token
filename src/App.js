import React, { useState } from 'react';
import { Cpu, Rocket, TrendingUp, Users, Bird, Brain, Award, MessageSquare } from 'lucide-react';

const App = () => {
  const [count, setCount] = useState(0);
  const [portfolioValue, setPortfolioValue] = useState(1000);
  const [currentQuote, setCurrentQuote] = useState('');

  const trumpQuotes = [
    "We're going to pump so much, you'll get tired of pumping!",
    "Nobody knows crypto better than me, believe me!",
    "This is the biggest gains in the history of gains, maybe ever!",
    "We're making portfolios great again!",
    "The chip told me this would happen. Very smart chip!",
    "My portfolio just got 10 feet higher!",
    "When I make gains, I make the best gains!",
    "The other coins are a total disaster. Sad!",
    "We have the best neural networks, don't we folks?",
    "The fake tokens don't want you to know about this!"
  ];

  const upgradePortfolio = () => {
    setCount(prev => prev + 1);
    const multiplier = 1.5 + (Math.random() * 0.5);
    setPortfolioValue(prev => Math.floor(prev * multiplier));
    const newQuote = trumpQuotes[Math.floor(Math.random() * trumpQuotes.length)];
    setCurrentQuote(newQuote);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-purple-900 text-white">
      <header className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-xl mx-auto mb-8">
          <img 
            src="/images/trump-chip.jpg"
            alt="Trump with AI chip" 
            className="rounded-lg shadow-2xl mb-8 mx-auto transform hover:scale-105 transition-transform duration-300"
          />
        </div>
        <h1 className="text-6xl font-bold mb-4 text-yellow-400">$NUROTRUMP</h1>
        <p className="text-2xl mb-8">Making Presidents Smart Again™</p>
        <div className="text-lg mb-8 max-w-2xl mx-auto bg-blue-800/50 p-6 rounded-lg">
          "They said I couldn't get smarter. WRONG! Thanks to this beautiful chip - many people are saying it's the best chip ever - my IQ is now over 9000. Tremendous!" 
          <br/>- Donald J. Trump 2.0
        </div>
        <div className="space-y-4">
          <button 
            onClick={upgradePortfolio}
            className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-full text-xl font-bold hover:bg-yellow-300 transition-all transform hover:scale-105 active:scale-95"
          >
            {count === 0 ? "Upgrade Your Portfolio!" : "Keep Making Gains!"}
          </button>
          
          {count > 0 && (
            <div className="space-y-2">
              <div id="portfolio-value" className="text-3xl font-bold text-yellow-400 animate-bounce">
                ${portfolioValue.toLocaleString()}
              </div>
              <div className="text-lg text-green-400">
                {count}x More Tremendous!
              </div>
              {currentQuote && (
                <div className="text-sm italic text-blue-300">
                  "{currentQuote}"
                </div>
              )}
            </div>
          )}
        </div>
      </header>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold mb-12 text-center">The Most Advanced Presidential Upgrade Ever</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard 
            icon={<Brain />}
            title="Enhanced Covfefe Protocol"
            description="Tweet processing speed increased by 1000%. Now with built-in spell check and fact verification (optional)."
          />
          <FeatureCard 
            icon={<Award />}
            title="Quantum Deal Making"
            description="Advanced algorithms for making the best deals. Nobody makes deals like this chip, believe me!"
          />
          <FeatureCard 
            icon={<MessageSquare />}
            title="Multi-Language Support"
            description="Now fluent in Chinese, Russian, and Python (JavaScript coming soon). Very cool!"
          />
        </div>
      </section>

      {/* Launch Info Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold mb-8 text-center">Launch Details</h2>
        <div className="bg-blue-800/50 p-8 rounded-lg text-center">
          <div className="space-y-6">
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4">Total Supply</h3>
              <p className="text-5xl font-bold text-yellow-400">999.99M $NURO</p>
            </div>
            <div className="bg-blue-900/50 p-6 rounded-lg space-y-4">
              <h3 className="text-2xl font-bold mb-4">Launching Exclusively On</h3>
              <p className="text-4xl font-bold text-yellow-400">PUMP.FUN</p>
              <p className="mt-4 text-xl">The most tremendous launch platform ever created!</p>
              <div className="mt-6 p-4 bg-blue-800/30 rounded-lg">
                <h4 className="text-lg font-bold mb-2">Contract Address</h4>
                <div className="relative">
                  <p className="font-mono text-sm break-all bg-blue-900/50 p-3 rounded select-all">
                    5ZxZiZQvYXmncE7g4rikz7yWa8nGpEUBQ8vxHxFpump
                  </p>
                  <p className="text-xs mt-2 text-blue-300">Click to copy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="container mx-auto px-4 py-8 text-center">
        <p className="text-sm opacity-75">
          This is a parody token for entertainment purposes only. 
          No actual presidents were upgraded in the making of this coin. 
          DYOR and invest responsibly! Not financial or neural advice.
        </p>
      </footer>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-blue-800/50 p-6 rounded-lg text-center hover:transform hover:scale-105 transition-transform">
    <div className="text-yellow-400 mb-4 flex justify-center">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="opacity-75">{description}</p>
  </div>
);

export default App;