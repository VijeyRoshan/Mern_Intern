import React from 'react';

const Skills = () => {
  const skills = {
    "Programming Languages": ["C", "C++", "Python", "HTML", "CSS", "JavaScript", "Java"],
    "Tools & Platforms": ["GitHub", "GIT", "VS Code", "Jupyter Notebook", "Canva", "MIT App Inventor"],
    "Database": ["MySQL"],
    "Certifications": [
      "Mastering Data Structures and Algorithms using C and C++ - UDEMY",
      "Python for Data Science and Machine Learning - UDEMY",
      "Complete C developer course for beginners - UDEMY",
      "Python for machine learning - GREAT LEARNING",
      "Introduction to machine learning - GREAT LEARNING",
      "Machine Learning (Stanford/Deep Learning, AI) - COURSERA"
    ]
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center mb-12">Skills & Certifications</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold mb-4">{category}</h3>
            <div className="flex flex-wrap gap-2">
              {items.map((item, index) => (
                <span key={index} className={`px-3 py-1 rounded-full text-sm ${
                  category === "Certifications" 
                    ? "bg-green-100 text-green-800" 
                    : "bg-blue-100 text-blue-800"
                }`}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;