import React, { useState, useRef } from 'react';

const PhotoGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const previewContainerRef = useRef<HTMLDivElement>(null);
  
  const galleryItems = [
    { id: 1, title: "Group Meeting", imageUrl: "https://picsum.photos/400/300?random=1" },
    { id: 2, title: "Conference Presentation", imageUrl: "https://picsum.photos/400/300?random=2" },
    { id: 3, title: "Lab Work", imageUrl: "https://picsum.photos/400/300?random=3" },
    { id: 4, title: "Awards Ceremony", imageUrl: "https://picsum.photos/400/300?random=4" },
    { id: 5, title: "Collaboration Meeting", imageUrl: "https://picsum.photos/400/300?random=5" },
    { id: 6, title: "Student Graduation", imageUrl: "https://picsum.photos/400/300?random=6" },
    { id: 7, title: "Workshop", imageUrl: "https://picsum.photos/400/300?random=7" },
    { id: 8, title: "Research Seminar", imageUrl: "https://picsum.photos/400/300?random=8" },
    { id: 9, title: "Field Trip", imageUrl: "https://picsum.photos/400/300?random=9" },
    { id: 10, title: "Celebration", imageUrl: "https://picsum.photos/400/300?random=10" },
    { id: 11, title: "Lab Equipment", imageUrl: "https://picsum.photos/400/300?random=11" },
    { id: 12, title: "Research Poster", imageUrl: "https://picsum.photos/400/300?random=12" },
    { id: 13, title: "Team Outing", imageUrl: "https://picsum.photos/400/300?random=13" },
    { id: 14, title: "Guest Lecture", imageUrl: "https://picsum.photos/400/300?random=14" },
    { id: 15, title: "Lab Safety Training", imageUrl: "https://picsum.photos/400/300?random=15" }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === galleryItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? galleryItems.length - 1 : prevIndex - 1
    );
  };

  const scrollPreview = (direction: 'left' | 'right') => {
    if (previewContainerRef.current) {
      const scrollAmount = 200;
      previewContainerRef.current.scrollLeft += direction === 'left' ? -scrollAmount : scrollAmount;
    }
  };

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-3 mb-4">
            <span className="text-5xl">📷</span>
            <h1 className="text-4xl font-bold text-gray-900">Photo Gallery</h1>
            <span className="text-5xl">🎆</span>
          </div>
          <p className="text-xl text-gray-600">Capturing moments from our research journey</p>
        </div>

        {/* Carousel */}
        <div className="relative max-w-5xl mx-auto">
          <div className="overflow-hidden rounded-lg shadow-lg">
            <div className="bg-white">
              <div className="h-64 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center relative overflow-hidden">
                <img 
                  src={galleryItems[currentIndex].imageUrl} 
                  alt={galleryItems[currentIndex].title}
                  className="w-full h-full object-cover"
                />
                <p className="absolute bottom-2 right-2 bg-white/80 px-2 py-1 rounded text-sm">
                  Photo {galleryItems[currentIndex].id}
                </p>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{galleryItems[currentIndex].title}</h3>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100"
          >
            <span className="text-2xl">⬅️</span>
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100"
          >
            <span className="text-2xl">➡️</span>
          </button>

          {/* Preview Navigation */}
          <div className="relative mt-4">
            <button
              onClick={() => scrollPreview('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-1 shadow-lg hover:bg-gray-100"
            >
              <span className="text-xl">⬅️</span>
            </button>
            
            <div 
              ref={previewContainerRef}
              className="flex justify-start space-x-2 overflow-x-auto px-10 scroll-smooth"
            >
              {galleryItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`flex-shrink-0 items-center p-2 rounded-lg transition-all ${
                    index === currentIndex ? 'bg-blue-100 scale-105' : 'bg-gray-100 hover:bg-gray-200'
                  }`}
                >
                  <img 
                    src={item.imageUrl} 
                    alt={item.title}
                    className="w-12 h-12 object-cover rounded-lg"
                  />
                </button>
              ))}
            </div>

            <button
              onClick={() => scrollPreview('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-1 shadow-lg hover:bg-gray-100"
            >
              <span className="text-xl">➡️</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoGallery;
