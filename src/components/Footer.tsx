import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">RBS</span>
              </div>
              <span className="font-semibold text-xl">The RBS Group</span>
            </div>
            <p className="text-gray-300 text-sm">
              Advancing computational chemistry and catalysis research through innovative machine learning approaches.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <div className="space-y-2 text-gray-300 text-sm">
              <p>Department of Chemistry</p>
              <p>IIT Bombay, Powai</p>
              <p>Mumbai 400076, India</p>
              <p>Phone: 22-2576-7173</p>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Research Areas</h3>
            <div className="space-y-1 text-gray-300 text-sm">
              <p>• Asymmetric Catalysis</p>
              <p>• C-H Bond Activation</p>
              <p>• Machine Learning</p>
              <p>• Computational Chemistry</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 The RBS Group, IIT Bombay. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;