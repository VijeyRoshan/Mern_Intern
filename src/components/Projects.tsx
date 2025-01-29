import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Mobile Usage Recognition",
      description: "Developed a CNN using TensorFlow and Keras to automatically classify images of phone usage. Leveraged ImageDataGenerator for data augmentation to improve model robustness. Achieved high accuracy by employing early stopping and model checkpointing. Visualized training progress and performance using Matplotlib.",
      technologies: ["TensorFlow", "Keras", "CNN", "Matplotlib"]
    },
    {
      title: "AI-Enhanced Complaint Management System for Rail Madad",
      description: "Developed an AI-driven model for an enhanced complaint management system for Indian Railways, utilizing Convolutional Neural Networks (CNNs) for real-time multimedia analysis and Natural Language Processing (NLP) for sentiment analysis. The model automates the categorization and prioritization of passenger complaints, significantly improving operational efficiency and response times.",
      technologies: ["CNN", "NLP", "AI", "Machine Learning"]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-bold mb-4">{project.title}</h3>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, techIndex) => (
                <span key={techIndex} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;