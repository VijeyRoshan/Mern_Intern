import React from 'react';

const Education = () => {
  const education = [
    {
      school: "Sri Eshwar College of Engineering",
      degree: "B.E (CSE-AIML)",
      period: "2023-2027",
      type: "Bachelor's Degree"
    },
    {
      school: "Mount Litera Zee School",
      degree: "HSC",
      period: "2021-2023",
      type: "Higher Secondary"
    },
    {
      school: "Montfort School, Trichy",
      degree: "SSLC",
      period: "2020-2021",
      type: "Secondary School"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center mb-12">Education</h2>
      <div className="space-y-12">
        {education.map((edu, index) => (
          <div key={index} className="relative">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/4">
                <div className="sticky top-24">
                  <h3 className="text-xl font-semibold">{edu.period}</h3>
                </div>
              </div>
              <div className="md:w-3/4">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold">{edu.school}</h3>
                  <p className="text-lg text-gray-600">{edu.degree}</p>
                  <p className="text-gray-500">{edu.type}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;