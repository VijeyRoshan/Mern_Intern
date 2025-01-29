import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Vijey Roshan M
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8">
          AI/ML Engineer & Software Developer
        </p>
        
        <a
          href="#about"
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
        >
          Learn More
        </a>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown size={24} />
      </div>
    </div>
  );
};

export default Hero;