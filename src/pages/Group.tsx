import React from 'react';

const Group = () => {
  const currentMembers = [
    { name: 'Supratim Ghosh', education: 'B.Sc. Raja Peary Mohan College, University of Calcutta. M.Sc. University of Calcutta', research: 'Computational Studies on catalytic asymmetric transformations' },
    { name: 'Nikhil Anil Borse', education: 'B.Sc. Fergusson College, Pune. M.Sc. University of Pune.', research: '--' },
    { name: 'Manajit Das', education: 'B.Sc. A.B.N. Seal College, North Bengal University M.Sc. IIT Hyderabad', research: '--' },
    { name: 'Ajnabiul Hoque', education: 'B.Sc. Raiganj University M.Sc. University of North Bengal', research: '--' },
    { name: 'Priyanka Kanojia', education: 'B.Sc. Mumbai University M.Sc. Mumbai University', research: '--' },
    { name: 'Shilpa', education: 'B.Sc. Kannur University M.Sc. Cochin University of Science and Technology', research: 'Mechanistic studies on asymmetric catalysis using computational and machine learning tools' },
    { name: 'Gargee Kashyap', education: 'B.Sc. Gauhati University M.Sc. Banaras Hindu University', research: 'Exploration of catalytic reactions machine learning and computational approaches' },
    { name: 'Nupur Jain', education: 'B.Sc. Punjab Chandigarh University M.Sc. Punjab Chandigarh University', research: 'Computational studies on catalytic reactions and use of machine learning in reaction discovery' },
    { name: 'Ankit Ghosh', education: 'B.Sc. Ramakrishna Mission Vidyamandira, Belur M.Sc. Indian Institute of Technology Bombay', research: 'Exploring molecular world with artificial intelligence and computational chemistry tools' },
    { name: 'Hariharan Swaminathan', education: 'B.Sc. Fergusson College, Pune. M.Sc. University of Pune.', research: 'Machine learning in organic chemistry' },
    { name: 'Swastik', education: 'B.Sc. Hindu College, University of Delhi M.Sc. Indian Institute of Technology Bombay', research: 'Computational studies on mechanism of C-H activation reactions' },
    { name: 'Prashant Singh', education: 'B.Sc. Deshbandhu College , University of Delhi M.Sc. Sri Venkateswara College , University of Delhi', research: 'Mechanistic studies on asymmetric catalysis using machine learning tools' },
    { name: 'Upasana Deka', education: 'B.Sc. Gauhati University M.Sc. Indian Institute of Technology, Dhanbad', research: 'Exploration of asymmetric cataltic reactions using machine leaning tools' },
  ];

  const undergrads = [
    { name: 'Amritesh Pandey', education: 'BS Chemistry - Indian Institute of Technology Bombay', research: '' },
  ];

  const interns = [
    { name: 'Dhilruba Fathima Am', education: 'B.Sc. Calicut University M.Sc. MES Mampad college (Autonomous)' },
    { name: 'Vanshika Agrawal', education: 'BS-MS Indian Institute of Science Education and Research (IISER) Bhopal' },
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Principal Investigator */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-4 mb-8">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 100 100" fill="none" stroke="white" strokeWidth="3">
                <circle cx="35" cy="30" r="12" />
                <circle cx="65" cy="30" r="12" />
                <path d="M20,80 Q35,60 50,80 Q65,60 80,80" />
              </svg>
            </div>
            <h1 className="text-4xl font-bold text-gray-900">Group</h1>
            <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 100 100" fill="none" stroke="white" strokeWidth="3">
                <rect x="30" y="20" width="40" height="50" rx="5" />
                <path d="M40,35 L60,35" />
                <path d="M40,45 L60,45" />
                <path d="M40,55 L60,55" />
                <path d="M50,70 L50,85" />
                <path d="M45,80 L55,80" />
              </svg>
            </div>
          </div>
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg p-8 mb-12 relative overflow-hidden">
            <div className="absolute top-4 right-4 text-4xl opacity-20">🔬</div>
            <div className="flex items-center justify-center mb-4">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mr-4">
                <svg width="40" height="40" viewBox="0 0 100 100" fill="none" stroke="white" strokeWidth="2">
                  <circle cx="50" cy="35" r="15" />
                  <path d="M25,80 Q50,60 75,80" />
                  <path d="M35,45 L35,55 L45,55" />
                  <path d="M65,45 L65,55 L55,55" />
                </svg>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-2">Raghavan B. Sunoj</h2>
                <p className="text-xl mb-1">Principal Investigator</p>
              </div>
            </div>
            <p className="text-lg opacity-90">Convenor for High Performance Computing @ IITB</p>
            <p className="text-lg opacity-90">Associate Faculty at Centre for Machine Intelligence and Data Science (C-MInDS)</p>
          </div>
        </div>

        {/* Current Members */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <div className="inline-flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 100 100" fill="none" stroke="white" strokeWidth="4">
                  <circle cx="35" cy="30" r="10" />
                  <circle cx="65" cy="30" r="10" />
                  <path d="M20,75 Q35,55 50,75 Q65,55 80,75" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Current Members</h2>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 card-hover">
                <h3 className="text-lg font-semibold text-blue-800 mb-3">{member.name}</h3>
                <p className="text-sm text-gray-600 mb-3">{member.education}</p>
                {member.research !== '--' && (
                  <p className="text-sm text-gray-700">
                    <span className="font-medium">Research:</span> {member.research}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Undergraduate Researchers */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Undergraduate Researchers</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {undergrads.map((member, index) => (
              <div key={index} className="bg-gradient-to-br from-green-50 to-teal-100 rounded-lg shadow-lg p-6 card-hover">
                <h3 className="text-lg font-semibold text-green-800 mb-3">{member.name}</h3>
                <p className="text-sm text-gray-600">{member.education}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Interns */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Interns</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {interns.map((member, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-50 to-pink-100 rounded-lg shadow-lg p-6 card-hover">
                <h3 className="text-lg font-semibold text-purple-800 mb-3">{member.name}</h3>
                <p className="text-sm text-gray-600">{member.education}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Information */}
        <section className="bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-center mb-6 text-gray-900">Contact Information</h2>
          <div className="text-center space-y-2 text-gray-700">
            <p><span className="font-medium">Department:</span> Department of Chemistry</p>
            <p><span className="font-medium">Institution:</span> Indian Institute of Technology Bombay</p>
            <p><span className="font-medium">Address:</span> Powai, Mumbai 400076, INDIA</p>
            <p><span className="font-medium">Phone:</span> 22-2576-7173</p>
            <p><span className="font-medium">Fax:</span> 22-2576-7152</p>
            <p><span className="font-medium">Email:</span> sunoj[at]chem.iitb.ac.in, rbsunoj[at]iitb.ac.in</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Group;