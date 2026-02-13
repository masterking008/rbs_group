import React from 'react';

const Publications = () => {
  const recentPublications = [
    {
      authors: "Hoque, A.; Chan, T.; Yu, J. -Q.; Sunoj, R. B.",
      title: "Molecular Machine Learning Approach to Enantioselective C–H Bond Activation Reactions: From Generative AI to Experimental Validation",
      journal: "Chem. Sci., 2025, (Accepted)."
    },
    {
      authors: "Paira, S.; Jain, N.; Adhikari, D.; Sunoj, R. B.; Sundararaju, B.",
      title: "A Priori Design of [Mn(I)-Cinchona] catalyst for Asymmetric Hydrogenation of Ketones and β-Keto carbonyl Derivatives",
      journal: "Chem. Sci., 2025, (Accepted)."
    },
    {
      authors: "Ghosh, A.; Kashyap, G.; Mittal, S.; Jain, N.; Sunoj, R. B.; De, A.",
      title: "Learning Condensed Graph via Differentiable Atom Mapping for Reaction Yield Prediction",
      journal: "International Conference on Machine Learning (ICML), 2025, (Accepted)."
    },
    {
      authors: "Borse, N.; Gharpure, S. J.; Sunoj, R. B.",
      title: "Unraveling the Mechanism and Origin of Regio-, Diastereo-, and Enantio-Selectivities in Regiodivergent and Stereoselective Nickel-Catalyzed Hydroalkylation Reactions of Branched 1,3-Dienes",
      journal: "ACS Catal., 2025, (Accepted)."
    },
    {
      authors: "Hoque, A.; Surve, M.; Kalyanakrishnan, S. Sunoj, R. B.",
      title: "Reinforcement Learning for Improving Chemical Reaction Performance",
      journal: "J. Am. Chem. Soc., 2024, 146, 28250."
    },
    {
      authors: "Hoque, A., Das, M.; Baranwal, M.; Sunoj, R. B.",
      title: "ReactAIvate: A Deep Learning Approach to Predicting Reaction Mechanisms and Unmasking Reactivity Hotspots",
      journal: "27th European Conference on Artificial Intelligence, 2024, (doi:10.3233/FAIA240796)."
    },
    {
      authors: "Singh, S.; Sunoj, R. B.",
      title: "Molecular Machine Learning for Chemical Catalysis: Prospects and Challenges",
      journal: "Acc. Chem. Res., 2023, 56, 402."
    },
    {
      authors: "Singh, S.; Pareek, M.; Changotra, A.; Banerjee, S.; Bhaskararao, B.; Balamurugan, P; Sunoj, R. B.",
      title: "A Unified Machine Learning Protocol for Asymmetric Catalysis: A Proof of Concept Demonstration using Asymmetric Hydrogenation",
      journal: "Proc. Natl. Aacd. Sci. (USA)., 2020, 117, 1339. (Highlighted in Science, Feb2020 issue)"
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-3 mb-4">
            <span className="text-5xl">📚</span>
            <h1 className="text-4xl font-bold text-gray-900">Publications</h1>
            <span className="text-5xl">📄</span>
          </div>
          <p className="text-xl text-gray-600">Selected publications from a total of 181 publications</p>
          <div className="mt-4">
            <a 
              href="https://scholar.google.com/citations?hl=en&user=hboZd1AAAAAJ"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              View Full Publication List on Google Scholar
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>

        {/* Recent Publications */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Recent Publications</h2>
          <div className="space-y-6">
            {recentPublications.map((pub, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 card-hover relative overflow-hidden">
                <div className="absolute top-2 right-2 text-2xl opacity-10">🧪</div>
                <div className="mb-3">
                  <span className="text-sm font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">
                    {index + 1}
                  </span>
                </div>
                <p className="text-gray-700 mb-2">
                  <span className="font-medium">{pub.authors}</span>
                </p>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  "{pub.title}"
                </h3>
                <p className="text-blue-600 font-medium">{pub.journal}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Publication Categories */}
        <section className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Research Areas in Publications</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🧪</span>
              </div>
              <h3 className="text-lg font-semibold text-blue-800 mb-2">Asymmetric Catalysis</h3>
              <p className="text-gray-600 text-sm">Mechanistic insights and catalyst design</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤖</span>
              </div>
              <h3 className="text-lg font-semibold text-green-800 mb-2">Machine Learning</h3>
              <p className="text-gray-600 text-sm">AI-enabled reaction prediction and design</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚛️</span>
              </div>
              <h3 className="text-lg font-semibold text-purple-800 mb-2">C-H Activation</h3>
              <p className="text-gray-600 text-sm">Mechanistic studies and selectivity</p>
            </div>
          </div>
        </section>

        {/* Book Chapters */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Book Chapters and Reviews</h2>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <p className="text-gray-800">
                  <strong>Sunoj, R. B.</strong> 'Covalent Activations: Rationalizing Reactivity and Selectivity in Iminium- and Enamine-Catalyzed Reactions' in Comprehensive Enantioselective Organocatalysis: Catalysis, Reactions, and Applications. Dalko (Ed.,), Wiley-VCH, 2012.
                </p>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <p className="text-gray-800">
                  <strong>Sunoj, R. B.</strong> 'Proline-Derived Organocatalysis: A Paradigm for Synergism between Theory and Experiments' Wiley Interdisciplinary Reviews: Computational Molecular Science, 2011, 1, 920.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Publications;