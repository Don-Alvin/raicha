'use client';

import { useEffect, useState } from 'react';

export default function Partners() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const partners = [
    { name: 'World Food Programme', abbr: 'WFP' },
    { name: 'Médecins Sans Frontières France', abbr: 'MSF France' },
    { name: 'Médecins Sans Frontières Spain', abbr: 'MSF Spain' },
    { name: 'Embassy of Sudan', abbr: 'Sudan Embassy' },
    { name: 'Acacia Medical Centre', abbr: 'Acacia' },
    { name: 'Commercial Bank of Africa', abbr: 'CBA' },
    { name: 'Consolidated Bank', abbr: 'Consolidated Bank' },
    { name: 'Chase Bank', abbr: 'Chase Bank' },
    { name: 'Co-operative Bank', abbr: 'Co-op Bank' },
    { name: 'Java Coffee House', abbr: 'Java' },
    { name: 'Office of The Prime Minister', abbr: 'OPM' },
    { name: 'Lutheran Church Kenya', abbr: 'LCK' },
  ];

  // Auto-scroll every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(partners.length / 4));
    }, 3000);

    return () => clearInterval(interval);
  }, [partners.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(partners.length / 4));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? Math.ceil(partners.length / 4) - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Partners
          </h2>
          <p className="text-gray-600 text-lg">
            Trusted by leading organizations across East Africa
          </p>
        </div>

        {/* Partners Slider */}
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {/* Group partners in sets of 4 */}
              {Array.from({ length: Math.ceil(partners.length / 4) }).map((_, slideIndex) => (
                <div key={slideIndex} className="min-w-full flex-shrink-0">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {partners.slice(slideIndex * 4, slideIndex * 4 + 4).map((partner, index) => (
                      <div
                        key={index}
                        className="bg-gray-50 p-8 rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors duration-300 group"
                      >
                        <div className="text-center">
                          <h3 className="text-2xl font-bold text-primary group-hover:text-white transition-colors">
                            {partner.abbr}
                          </h3>
                          <p className="text-sm text-gray-600 group-hover:text-white mt-2 transition-colors">
                            {partner.name}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white hover:bg-primary text-gray-800 hover:text-white p-3 rounded-full shadow-lg transition-colors duration-300"
            aria-label="Previous"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white hover:bg-primary text-gray-800 hover:text-white p-3 rounded-full shadow-lg transition-colors duration-300"
            aria-label="Next"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 gap-2">
            {Array.from({ length: Math.ceil(partners.length / 4) }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index ? 'bg-primary w-8' : 'bg-gray-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}