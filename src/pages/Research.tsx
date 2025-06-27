import React from 'react';

const Research = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-4 mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 100 100" fill="none" stroke="white" strokeWidth="3">
                <polygon points="50,15 85,35 85,65 50,85 15,65 15,35" />
                <circle cx="50" cy="50" r="15" />
              </svg>
            </div>
            <h1 className="text-4xl font-bold text-gray-900">Research</h1>
            <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 100 100" fill="none" stroke="white" strokeWidth="3">
                <path d="M30,70 L30,30 Q30,20 40,20 L60,20 Q70,20 70,30 L70,50" />
                <circle cx="70" cy="60" r="15" />
              </svg>
            </div>
          </div>
          <p className="text-xl text-gray-600">Exploring the frontiers of computational chemistry and catalysis</p>
        </div>

        {/* Research Areas */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8 relative overflow-hidden">
            <div className="absolute -top-4 -right-4 text-6xl opacity-10">⚛️</div>
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                <svg width="20" height="20" viewBox="0 0 100 100" fill="none" stroke="#1e40af" strokeWidth="4">
                  <path d="M20,50 Q50,20 80,50 Q50,80 20,50" />
                  <circle cx="35" cy="40" r="4" fill="#1e40af" />
                  <circle cx="65" cy="60" r="4" fill="#1e40af" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-blue-800">Asymmetric Multi-catalytic Reactions</h2>
            </div>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                Asymmetric reactions involving transition metal catalysts and organocatalysts
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                Origin of enantioselectivity and catalyst design
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 relative overflow-hidden">
            <div className="absolute -top-4 -right-4 text-6xl opacity-10">🔗</div>
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                <svg width="20" height="20" viewBox="0 0 100 100" fill="none" stroke="#6b21a8" strokeWidth="4">
                  <path d="M30,30 L70,30" />
                  <path d="M50,30 L50,70" />
                  <circle cx="30" cy="30" r="6" />
                  <circle cx="70" cy="30" r="6" />
                  <circle cx="50" cy="70" r="6" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-purple-800">Mechanistic Studies on C-H Bond Activation</h2>
            </div>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">•</span>
                Role of additives and solvents
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">•</span>
                Rational modifications to catalysts and substrates
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 lg:col-span-2 relative overflow-hidden">
            <div className="absolute -top-4 -right-4 text-6xl opacity-10">🤖</div>
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                <svg width="20" height="20" viewBox="0 0 100 100" fill="none" stroke="#166534" strokeWidth="4">
                  <circle cx="30" cy="30" r="6" />
                  <circle cx="70" cy="30" r="6" />
                  <circle cx="30" cy="70" r="6" />
                  <circle cx="70" cy="70" r="6" />
                  <path d="M36,30 L64,30" />
                  <path d="M30,36 L30,64" />
                  <path d="M70,36 L70,64" />
                  <path d="M36,70 L64,70" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-green-800">Machine Learning in Catalysis</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  Prediction of reaction outcome
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  Artificial intelligence (AI)-enabled catalyst design
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Collaborative Research */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Collaborative Research</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">
                Mechanistic Studies on Palladium Catalyzed C-H Bond Activation Reactions
              </h3>
              <p className="text-gray-600">with Prof. D. Maiti, Indian Institute of Technology Bombay</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-lg font-semibold text-purple-800 mb-3">
                Chiral Induction in Photoexcited Molecules and Reactivity
              </h3>
              <p className="text-gray-600">with Prof. Sivaguru Jayaraman, North Dakota State University, USA</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-lg font-semibold text-green-800 mb-3">
                Chiral Counterions in Chiral Induction in C-C Bond Forming Reactions
              </h3>
              <p className="text-gray-600">with Prof. Dean F. Toste, University of California Berkeley, USA</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-lg font-semibold text-indigo-800 mb-3">
                Design of Catalysts for Asymmetric Reactions
              </h3>
              <p className="text-gray-600">with Prof. Anat Milo, Ben-Gurion University of the Negev, Israel</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md md:col-span-2">
              <h3 className="text-lg font-semibold text-red-800 mb-3">
                Toward Accurate Estimates of Reaction Energetics
              </h3>
              <p className="text-gray-600">with Prof. Jeremy Harvey, KU Leuven Belgium</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Research;