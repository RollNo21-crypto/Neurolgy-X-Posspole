import React from 'react';
import doc1 from '../assets/doc1.jpg';
import doc2 from '../assets/doc2.jpg';
import doc3 from '../assets/doc3.png';
import subhodh from '../assets/subhodh.jpg'; // Make sure the path and file match
import suneeth from '../assets/suneeth.jpg'; // Make sure the path and file match

const FacultyMember: React.FC<{
  name: string;
  designation: string;
  image: string;
}> = ({ name, designation, image }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md transition-all hover:shadow-lg border border-gray-100">
      <div className="bg-gradient-to-r from-blue-500 to-teal-500 h-24"></div>
      <div className="px-6 pt-0 pb-6 -mt-12">
        <div className="w-24 h-24 mx-auto bg-gray-200 rounded-full border-4 border-white overflow-hidden mb-4">
          <img src={image} alt={name} className="w-full h-full object-cover" />
        </div>
        <h3 className="text-xl font-bold text-center text-gray-800 mb-1">{name}</h3>
        <p className="text-center text-gray-600 text-sm">{designation}</p>
      </div>
    </div>
  );
};

const Faculty: React.FC = () => {
  const facultyMembers = [
    {
      name: 'Dr. Iype Cherian',
      designation: 'Director, Institute of Neurosciences, Krishna Vishwa Vidyapeeth, Karad - India',
      image: doc1,
    },
    {
      name: 'Dr. Vamsi Krishna',
      designation: 'Professor & HOD, Dept. of Neurosurgery, Nizams Institute of Medical Sciences, Bengaluru',
      image: doc2,
    },
    {
      name: 'Dr. Nupur Pruthi',
      designation: 'Professor, Dept. of Neurosurgery, NIMHANS, Bangalore',
      image: doc3,
    }
  ];

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facultyMembers.map((faculty, index) => (
            <FacultyMember 
              key={index}
              name={faculty.name}
              designation={faculty.designation}
              image={faculty.image}
            />
          ))}
        </div>

        {/* Key Personnel Section */}
        {/* <div className="mt-16 bg-gradient-to-r from-blue-700 to-blue-900 rounded-xl p-6 md:p-8 text-white shadow-2xl">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold mb-2">Key Personnel</h3>
            <p className="opacity-90 text-base max-w-2xl mx-auto">
              The workshop is led by distinguished faculty members who are pioneers in neurosurgical procedures.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">

            <div className="bg-white/15 rounded-xl p-6 backdrop-blur-sm transform hover:scale-105 transition-transform duration-300 shadow-xl border border-white/20">
              <div className="text-center mb-4">
                <h4 className="text-xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-200">
                  Course Chairman
                </h4>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 mb-4 relative">
                  <div className="absolute inset-0 bg-blue-400 rounded-full animate-pulse"></div>
                  <img 
                    src={subhodh}
                    alt="Dr. Subodh Raju" 
                    className="w-full h-full rounded-full object-cover border-4 border-white shadow-xl relative z-10"
                  />
                </div>
                <div className="text-center">
                  <p className="text-xl font-bold mb-1">Dr. Subodh Raju</p>
                  <p className="text-base opacity-90">HOD & Director</p>
                  <p className="text-sm opacity-80">Neurosurgery & Spine Surgery, Posspole</p>
                </div>
              </div>
            </div>

          
            <div className="bg-white/15 rounded-xl p-6 backdrop-blur-sm transform hover:scale-105 transition-transform duration-300 shadow-xl border border-white/20">
              <div className="text-center mb-4">
                <h4 className="text-xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-200">
                  Course Coordinator
                </h4>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 mb-4 relative">
                  <div className="absolute inset-0 bg-blue-400 rounded-full animate-pulse"></div>
                  <img 
                    src={suneeth}
                    alt="Dr. Suneet Jindal" 
                    className="w-full h-full rounded-full object-cover border-4 border-white shadow-xl relative z-10"
                  />
                </div>
                <div className="text-center">
                  <p className="text-xl font-bold mb-1">Dr. Suneet Jindal</p>
                  <p className="text-base opacity-90">Senior Manager</p>
                  <p className="text-sm opacity-80">Medical Affairs, Baxter</p>
                </div>
              </div>
            </div>
          </div>
        </div> */}
       
      </div>
    </section>
  );
};

export default Faculty;
