import React from 'react';

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <p className="text-lg text-gray-600">
            I am a passionate AI/ML Engineering student at Sri Eshwar College of Engineering, with a strong foundation in programming and machine learning. My recent internship at Moksa.ai in Data Annotation has given me practical experience in the field.
          </p>
          <p className="text-lg text-gray-600">
            I have completed numerous certifications in machine learning and data structures, and I actively practice problem-solving on platforms like LeetCode and HackerRank. My project experience includes developing CNN models and AI-enhanced systems.
          </p>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-4">Achievements</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Secured 4th position in Code Fiesta at Sri Eshwar College of Engineering</li>
              <li>Solved 100+ problems on LeetCode</li>
              <li>Achieved 4-star badge in Python on HackerRank</li>
            </ul>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c"
              alt="AI/ML Development"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;