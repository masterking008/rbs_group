

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="chemistry-gradient text-white py-20 relative overflow-hidden">
        <div className="floating-molecules">
          <div className="molecule text-white" style={{top: '10%', left: '10%', animationDelay: '0s'}}>
            <div className="benzene-ring">
              <svg viewBox="0 0 100 100">
                <polygon points="50,15 85,35 85,65 50,85 15,65 15,35" />
                <circle cx="50" cy="50" r="20" />
              </svg>
            </div>
          </div>
          <div className="molecule text-white" style={{top: '20%', right: '15%', animationDelay: '2s'}}>
            <div className="atom-structure">
              <svg viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="8" fill="currentColor" />
                <ellipse cx="50" cy="50" rx="35" ry="15" transform="rotate(0 50 50)" />
                <ellipse cx="50" cy="50" rx="35" ry="15" transform="rotate(60 50 50)" />
                <ellipse cx="50" cy="50" rx="35" ry="15" transform="rotate(120 50 50)" />
              </svg>
            </div>
          </div>
          <div className="molecule text-white" style={{bottom: '30%', left: '20%', animationDelay: '4s'}}>
            <div className="dna-helix">
              <svg viewBox="0 0 40 80">
                <path d="M10,10 Q30,20 10,30 Q30,40 10,50 Q30,60 10,70" />
                <path d="M30,10 Q10,20 30,30 Q10,40 30,50 Q10,60 30,70" />
              </svg>
            </div>
          </div>
          <div className="molecule text-white" style={{bottom: '20%', right: '10%', animationDelay: '1s'}}>
            <div className="benzene-ring">
              <svg viewBox="0 0 100 100">
                <polygon points="50,15 85,35 85,65 50,85 15,65 15,35" />
                <circle cx="50" cy="50" r="20" />
              </svg>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="mb-6">
              <div className="inline-flex items-center space-x-4 mb-4">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                  <svg width="32" height="32" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3">
                    <path d="M30,70 L30,30 Q30,20 40,20 L60,20 Q70,20 70,30 L70,50" />
                    <circle cx="70" cy="60" r="15" />
                    <path d="M55,60 L85,60" />
                    <path d="M70,45 L70,75" />
                  </svg>
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
            <div className="inline-flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 100 100" fill="none" stroke="white" strokeWidth="4">
                  <circle cx="50" cy="30" r="15" />
                  <path d="M50,45 L50,85" />
                  <path d="M35,70 L65,70" />
                  <path d="M40,80 L60,80" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Research Interests</h2>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-6 rounded-lg card-hover relative overflow-hidden">
              <div className="absolute -top-4 -right-4 opacity-10">
                <svg width="60" height="60" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="50,15 85,35 85,65 50,85 15,65 15,35" />
                  <circle cx="50" cy="50" r="15" />
                </svg>
              </div>
              <div className="research-icon">
                <svg width="20" height="20" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="4">
                  <path d="M20,50 Q50,20 80,50 Q50,80 20,50" />
                  <circle cx="35" cy="40" r="5" fill="currentColor" />
                  <circle cx="65" cy="60" r="5" fill="currentColor" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-blue-800">Asymmetric Multi-catalytic Reactions</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Asymmetric reactions involving transition metal catalysts and organocatalysts</li>
                <li>• Origin of enantioselectivity and catalyst design</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-pink-100 p-6 rounded-lg card-hover relative overflow-hidden">
              <div className="absolute -top-4 -right-4 opacity-10">
                <svg width="60" height="60" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20,20 L80,80" />
                  <path d="M80,20 L20,80" />
                  <circle cx="50" cy="50" r="15" />
                </svg>
              </div>
              <div className="research-icon">
                <svg width="20" height="20" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="4">
                  <path d="M30,30 L70,30" />
                  <path d="M50,30 L50,70" />
                  <circle cx="30" cy="30" r="8" />
                  <circle cx="70" cy="30" r="8" />
                  <circle cx="50" cy="70" r="8" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-purple-800">Mechanistic Studies on C-H Bond Activation</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Role of additives and solvents</li>
                <li>• Rational modifications to catalysts and substrates</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-teal-100 p-6 rounded-lg card-hover relative overflow-hidden">
              <div className="absolute -top-4 -right-4 opacity-10">
                <svg width="60" height="60" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="20" y="20" width="60" height="60" rx="8" />
                  <path d="M40,40 L60,40" />
                  <path d="M40,50 L60,50" />
                  <path d="M40,60 L60,60" />
                </svg>
              </div>
              <div className="research-icon">
                <svg width="20" height="20" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="4">
                  <circle cx="30" cy="30" r="8" />
                  <circle cx="70" cy="30" r="8" />
                  <circle cx="30" cy="70" r="8" />
                  <circle cx="70" cy="70" r="8" />
                  <path d="M38,30 L62,30" />
                  <path d="M30,38 L30,62" />
                  <path d="M70,38 L70,62" />
                  <path d="M38,70 L62,70" />
                </svg>
              </div>
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