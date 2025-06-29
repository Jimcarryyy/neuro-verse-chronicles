
import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 animate-float" />
        <div className="absolute top-40 right-32 w-24 h-24 rounded-full bg-gradient-to-r from-neon-purple/20 to-cyber-green/20 animate-float-delayed" />
        <div className="absolute bottom-32 left-32 w-40 h-40 rounded-full bg-gradient-to-r from-cyber-green/20 to-neon-blue/20 animate-float-delayed-2" />
        <div className="absolute top-60 right-20 w-16 h-16 rounded-full bg-neon-blue/30 animate-float" />
        <div className="absolute bottom-20 right-40 w-20 h-20 rounded-full bg-neon-purple/30 animate-float-delayed" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold mb-6">
            <span className="text-gradient">NeuroVerse</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 mb-4 font-light">
            Chronicles from the Future of Consciousness
          </p>
          <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto leading-relaxed">
            Where AI ethics meets speculative fiction. Explore the intersection of technology, 
            philosophy, and human potential through the lens of tomorrow's visionaries.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-purple text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-neon-blue/25 transition-all duration-300 transform hover:-translate-y-1">
              Explore Articles
            </button>
            <button className="px-8 py-4 glass-card text-gray-700 font-semibold rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              Subscribe to Updates
            </button>
          </div>
        </div>
      </div>

      {/* Floating AI Orbs */}
      <div className="absolute top-1/4 left-10 w-8 h-8 rounded-full bg-neon-blue animate-pulse opacity-60" />
      <div className="absolute top-1/3 right-16 w-6 h-6 rounded-full bg-neon-purple animate-pulse opacity-40" />
      <div className="absolute bottom-1/4 left-20 w-10 h-10 rounded-full bg-cyber-green animate-pulse opacity-50" />
    </section>
  );
};

export default HeroSection;
