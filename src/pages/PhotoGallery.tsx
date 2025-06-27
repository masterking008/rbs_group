import { useState, useEffect } from 'react';

const PhotoGallery = () => {
  const galleryItems = [
    { id: 1, title: "Group Meeting", description: "Weekly research discussion", date: "March 2024" },
    { id: 2, title: "Conference Presentation", description: "International chemistry conference", date: "February 2024" },
    { id: 3, title: "Lab Work", description: "Computational chemistry in action", date: "January 2024" },
    { id: 4, title: "Awards Ceremony", description: "Recognition of research excellence", date: "December 2023" },
    { id: 5, title: "Collaboration Meeting", description: "International research collaboration", date: "November 2023" },
    { id: 6, title: "Student Graduation", description: "PhD defense celebration", date: "October 2023" },
    { id: 7, title: "Workshop", description: "Machine learning in chemistry workshop", date: "September 2023" },
    { id: 8, title: "Research Seminar", description: "Guest speaker presentation", date: "August 2023" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % galleryItems.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isPlaying, galleryItems.length]);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % galleryItems.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-4 mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 100 100" fill="none" stroke="white" strokeWidth="3">
                <rect x="20" y="30" width="60" height="40" rx="5" />
                <circle cx="50" cy="50" r="12" />
                <circle cx="50" cy="50" r="6" />
                <rect x="35" y="25" width="10" height="5" rx="2" />
              </svg>
            </div>
            <h1 className="text-4xl font-bold text-gray-900">Photo Gallery</h1>
            <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 100 100" fill="none" stroke="white" strokeWidth="3">
                <rect x="25" y="35" width="50" height="30" rx="3" />
                <path d="M35,45 L45,55 L55,45 L65,55" />
                <circle cx="60" cy="42" r="3" />
              </svg>
            </div>
          </div>
          <p className="text-xl text-gray-600">Capturing moments from our research journey</p>
        </div>

        {/* Carousel */}
        <div className="relative max-w-4xl mx-auto mb-16">
          <div 
            className="relative h-96 bg-white rounded-lg shadow-lg overflow-hidden"
            onMouseEnter={() => {setIsPlaying(false); setShowDetails(true);}}
            onMouseLeave={() => {setIsPlaying(true); setShowDetails(false);}}
          >
            <div className="h-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center relative overflow-hidden">
              <div className="absolute top-4 left-4 opacity-10">
                <svg width="30" height="30" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3">
                  <polygon points="50,15 85,35 85,65 50,85 15,65 15,35" />
                  <circle cx="50" cy="50" r="12" />
                </svg>
              </div>
              <div className="absolute bottom-4 right-4 opacity-10">
                <svg width="30" height="30" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3">
                  <path d="M30,70 L30,30 Q30,20 40,20 L60,20 Q70,20 70,30 L70,50" />
                  <circle cx="70" cy="60" r="12" />
                </svg>
              </div>
              <div className="text-center">
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <svg width="32" height="32" viewBox="0 0 100 100" fill="none" stroke="#6b7280" strokeWidth="3">
                    <rect x="20" y="30" width="60" height="40" rx="5" />
                    <circle cx="50" cy="50" r="10" />
                    <circle cx="50" cy="50" r="5" />
                    <rect x="35" y="25" width="8" height="5" rx="2" />
                  </svg>
                </div>
                <p className="text-gray-600 text-lg font-medium">{galleryItems[currentIndex].title}</p>
              </div>
            </div>
            
            {/* Details Overlay */}
            <div className={`absolute inset-0 bg-black/70 flex items-center justify-center transition-opacity duration-300 ${showDetails ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
              <div className="text-center text-white p-8">
                <h3 className="text-3xl font-bold mb-4">{galleryItems[currentIndex].title}</h3>
                <p className="text-xl mb-2">{galleryItems[currentIndex].description}</p>
                <p className="text-lg opacity-80">{galleryItems[currentIndex].date}</p>
              </div>
            </div>
            
            {/* Navigation Buttons */}
            <button 
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
          
          {/* Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {galleryItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex ? 'bg-blue-600' : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
        
        {/* Thumbnail Grid */}
        <div className="grid md:grid-cols-4 lg:grid-cols-6 gap-4">
          {galleryItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => setCurrentIndex(index)}
              className={`bg-white rounded-lg shadow-md overflow-hidden transition-all ${
                index === currentIndex ? 'ring-2 ring-blue-500 scale-105' : 'hover:scale-105'
              }`}
            >
              <div className="h-24 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 100 100" fill="none" stroke="#6b7280" strokeWidth="3">
                  <rect x="20" y="30" width="60" height="40" rx="5" />
                  <circle cx="50" cy="50" r="8" />
                </svg>
              </div>
              <div className="p-2">
                <p className="text-xs font-medium text-gray-900 truncate">{item.title}</p>
              </div>
            </button>
          ))}
        </div>

        {/* Gallery Categories */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Gallery Categories</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-xl">👥</span>
              </div>
              <h3 className="text-lg font-semibold text-blue-800 mb-2">Group Events</h3>
              <p className="text-gray-600 text-sm">Team meetings and celebrations</p>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-green-200 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-xl">🏆</span>
              </div>
              <h3 className="text-lg font-semibold text-green-800 mb-2">Awards</h3>
              <p className="text-gray-600 text-sm">Recognition and achievements</p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-purple-200 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-xl">🎓</span>
              </div>
              <h3 className="text-lg font-semibold text-purple-800 mb-2">Academic</h3>
              <p className="text-gray-600 text-sm">Conferences and seminars</p>
            </div>
            
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-orange-200 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-xl">🔬</span>
              </div>
              <h3 className="text-lg font-semibold text-orange-800 mb-2">Research</h3>
              <p className="text-gray-600 text-sm">Lab work and experiments</p>
            </div>
          </div>
        </section>

        {/* Upload Section (for future implementation) */}
        <section className="mt-16 bg-gray-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Share Your Photos</h2>
          <p className="text-gray-600 mb-6">
            Have photos from group events or research activities? We'd love to add them to our gallery!
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
            Contact Us to Share Photos
          </button>
        </section>

        {/* Note about photos */}
        <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm">
            * This is a placeholder gallery. Actual photos will be added as they become available.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PhotoGallery;