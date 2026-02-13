import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="chemistry-gradient text-white py-20 relative overflow-hidden">
        <div className="floating-molecules">
          <div className="molecule text-white" style={{top: '10%', left: '10%', animationDelay: '0s'}}>
            <div className="benzene-ring"></div>
          </div>
          <div className="molecule text-white" style={{top: '20%', right: '15%', animationDelay: '2s'}}>
            ⚛️
          </div>
          <div className="molecule text-white" style={{bottom: '30%', left: '20%', animationDelay: '4s'}}>
            🧪
          </div>
          <div className="molecule text-white" style={{bottom: '20%', right: '10%', animationDelay: '1s'}}>
            <div className="benzene-ring"></div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="mb-6">
              <div className="inline-flex items-center space-x-4 mb-4">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-3xl">⚗️</span>
                </div>
                <h1 className="text-5xl font-bold">The RBS Group</h1>
              </div>
            </div>
            <p className="text-xl mb-4">Department of Chemistry</p>
            <p className="text-lg opacity-90">3rd floor, Room No: 418-A</p>
            <p className="text-lg opacity-90">IIT Bombay, Powai</p>
          </div>
        </div>
      </section>

      {/* Research Interests */}
      <section className="py-16 bg-white chemistry-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 mb-4">
              <span className="text-4xl">🔬</span>
              <h2 className="text-3xl font-bold text-gray-900">Research Interests</h2>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-6 rounded-lg card-hover relative overflow-hidden">
              <div className="absolute top-2 right-2 text-2xl opacity-20">⚛️</div>
              <h3 className="text-xl font-semibold mb-4 text-blue-800">Asymmetric Multi-catalytic Reactions</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Asymmetric reactions involving transition metal catalysts and organocatalysts</li>
                <li>• Origin of enantioselectivity and catalyst design</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-pink-100 p-6 rounded-lg card-hover relative overflow-hidden">
              <div className="absolute top-2 right-2 text-2xl opacity-20">🧬</div>
              <h3 className="text-xl font-semibold mb-4 text-purple-800">Mechanistic Studies on C-H Bond Activation</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Role of additives and solvents</li>
                <li>• Rational modifications to catalysts and substrates</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-teal-100 p-6 rounded-lg card-hover relative overflow-hidden">
              <div className="absolute top-2 right-2 text-2xl opacity-20">🤖</div>
              <h3 className="text-xl font-semibold mb-4 text-green-800">Machine Learning in Catalysis</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Prediction of reaction outcome</li>
                <li>• Artificial intelligence (AI)-enabled catalyst design</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">News and Updates</h2>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-4">
                <p className="text-gray-800">
                  <strong>Congratulations</strong> Ajnabiul and Manajit on the acceptance of their paper in 
                  <span className="text-blue-600 font-medium"> European Conference in Artificial Intelligence (2024)</span>.
                </p>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <p className="text-gray-800">
                  Our <span className="text-green-600 font-medium">Proc.Nat.Acad.Sci.(USA)</span> paper 
                  (DOI: https://doi.org/10.1073/pnas.1916392117) is highlighted in 
                  <span className="text-green-600 font-medium"> Science Feb 2020 issue</span>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Quick Links</h2>
          <div className="text-center">
            <a 
              href="http://www.chem.iitb.ac.in" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              Department of Chemistry, IIT Bombay
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;