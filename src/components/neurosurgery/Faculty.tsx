import React from 'react';

interface FacultyMember {
  name: string;
  role: string;
  bio: string;
}

interface FacultyProps {
  faculty: FacultyMember[];
}

const Faculty: React.FC<FacultyProps> = ({ faculty }) => {
  return (
    <section id="faculty" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Meet Our <span className="text-blue-600">Expert Faculty</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto my-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Learn from the best minds in neurosurgery. Our faculty brings decades of experience and expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {faculty.map((person, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
              <div className="bg-gradient-to-r from-blue-500 to-teal-500 h-24 -mx-6 -mt-6 mb-6 rounded-t-xl"></div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">{person.name}</h3>
              <p className="text-blue-600 mb-4">{person.role}</p>
              <p className="text-gray-600">{person.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faculty;