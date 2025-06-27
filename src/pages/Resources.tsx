

const Resources = () => {
  const hardware = [
    {
      name: "IIT Bombay Supercomputing Facility",
      description: "High-performance computing resources for computational chemistry calculations",
      link: "http://spacetime.iitb.ac.in"
    },
    {
      name: "64-bit Itanium 2 Servers",
      description: "Dedicated servers for intensive computational tasks"
    }
  ];

  const software = [
    {
      name: "Gaussian 09 (Linda TCP)",
      description: "Electronic structure modeling software for quantum chemistry calculations"
    },
    {
      name: "CPMD",
      description: "Car-Parrinello Molecular Dynamics program for ab initio molecular dynamics"
    },
    {
      name: "GAMESS",
      description: "General Atomic and Molecular Electronic Structure System"
    },
    {
      name: "AOMIX",
      description: "Software for molecular orbital analysis and visualization"
    },
    {
      name: "NBO 5.0",
      description: "Natural Bond Orbital analysis program"
    },
    {
      name: "AIM 2000",
      description: "Atoms in Molecules analysis software"
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-4 mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 100 100" fill="none" stroke="white" strokeWidth="3">
                <rect x="20" y="30" width="60" height="40" rx="5" />
                <rect x="25" y="20" width="50" height="5" rx="2" />
                <path d="M35,40 L65,40" />
                <path d="M35,50 L65,50" />
                <path d="M35,60 L55,60" />
              </svg>
            </div>
            <h1 className="text-4xl font-bold text-gray-900">Resources</h1>
            <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 100 100" fill="none" stroke="white" strokeWidth="3">
                <circle cx="50" cy="50" r="25" />
                <circle cx="50" cy="50" r="15" />
                <circle cx="50" cy="50" r="5" />
                <path d="M50,25 L50,15" />
                <path d="M50,75 L50,85" />
                <path d="M25,50 L15,50" />
                <path d="M75,50 L85,50" />
              </svg>
            </div>
          </div>
          <p className="text-xl text-gray-600">Computational infrastructure and software tools</p>
        </div>

        {/* Hardware Resources */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Hardware Resources</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {hardware.map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8 card-hover relative overflow-hidden">
                <div className="absolute -top-2 -right-2 opacity-5">
                  <svg width="40" height="40" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="50" cy="50" r="20" />
                    <circle cx="50" cy="50" r="10" />
                    <path d="M50,30 L50,20" />
                    <path d="M50,70 L50,80" />
                    <path d="M30,50 L20,50" />
                    <path d="M70,50 L80,50" />
                  </svg>
                </div>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-2xl">🖥️</span>
                  </div>
                  <h3 className="text-xl font-semibold text-blue-800">{item.name}</h3>
                </div>
                <p className="text-gray-700 mb-4">{item.description}</p>
                {item.link && (
                  <a 
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Visit Resource
                    <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Software Resources */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Software Resources</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {software.map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-50 to-pink-100 rounded-lg shadow-lg p-6 card-hover relative overflow-hidden">
                <div className="absolute -top-1 -right-1 opacity-5">
                  <svg width="30" height="30" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20,80 L40,60 L60,70 L80,40" />
                    <circle cx="20" cy="80" r="3" />
                    <circle cx="40" cy="60" r="3" />
                    <circle cx="60" cy="70" r="3" />
                    <circle cx="80" cy="40" r="3" />
                  </svg>
                </div>
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-lg">⚙️</span>
                  </div>
                  <h3 className="text-lg font-semibold text-purple-800">{item.name}</h3>
                </div>
                <p className="text-gray-700 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Computational Capabilities */}
        <section className="bg-gradient-to-r from-blue-50 to-indigo-100 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Computational Capabilities</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🧮</span>
              </div>
              <h3 className="text-lg font-semibold text-blue-800 mb-2">Quantum Chemistry</h3>
              <p className="text-gray-600 text-sm">DFT calculations, transition state optimization, and reaction pathway analysis</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔬</span>
              </div>
              <h3 className="text-lg font-semibold text-green-800 mb-2">Molecular Dynamics</h3>
              <p className="text-gray-600 text-sm">Ab initio MD simulations and conformational sampling</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-lg font-semibold text-purple-800 mb-2">Data Analysis</h3>
              <p className="text-gray-600 text-sm">Machine learning models and statistical analysis of chemical data</p>
            </div>
          </div>
        </section>

        {/* Research Infrastructure */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Research Infrastructure</h2>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">High Performance Computing</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    Access to IIT Bombay's supercomputing facility
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    Dedicated computational servers
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    Parallel processing capabilities
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Software Ecosystem</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    Comprehensive quantum chemistry software suite
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    Molecular visualization and analysis tools
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    Machine learning and data analysis platforms
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Resources;