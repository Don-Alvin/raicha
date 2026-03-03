'use client';

import {
  Factory,
  Zap,
  Building2,
  Sun,
  HardHat,
  Wrench,
  Hotel,
  Settings,
  Hospital,
  Lightbulb,
  Network,
  ShoppingBag,
  Battery,
  Landmark,
  Home,
  Gauge,
  Bell,
  Briefcase,
  Fuel,
  Wheat,
} from 'lucide-react';

export default function GalleryGrid() {
  // Photos with lucide-react icons
  const photos = [
    { id: 1, icon: Factory, gradient: 'from-blue-400 to-blue-600' },
    { id: 2, icon: Zap, gradient: 'from-yellow-400 to-orange-500' },
    { id: 3, icon: Building2, gradient: 'from-gray-400 to-gray-600' },
    { id: 4, icon: Sun, gradient: 'from-yellow-300 to-yellow-500' },
    { id: 5, icon: HardHat, gradient: 'from-orange-400 to-red-500' },
    { id: 6, icon: Wrench, gradient: 'from-gray-500 to-gray-700' },
    { id: 7, icon: Hotel, gradient: 'from-purple-400 to-purple-600' },
    { id: 8, icon: Settings, gradient: 'from-gray-600 to-gray-800' },
    { id: 9, icon: Hospital, gradient: 'from-green-400 to-green-600' },
    { id: 10, icon: Lightbulb, gradient: 'from-yellow-400 to-yellow-600' },
    { id: 11, icon: Network, gradient: 'from-blue-500 to-indigo-600' },
    { id: 12, icon: ShoppingBag, gradient: 'from-pink-400 to-pink-600' },
    { id: 13, icon: Battery, gradient: 'from-green-500 to-teal-600' },
    { id: 14, icon: Landmark, gradient: 'from-blue-600 to-blue-800' },
    { id: 15, icon: Home, gradient: 'from-red-400 to-red-600' },
    { id: 16, icon: Gauge, gradient: 'from-indigo-400 to-indigo-600' },
    { id: 17, icon: Bell, gradient: 'from-red-500 to-red-700' },
    { id: 18, icon: Briefcase, gradient: 'from-gray-500 to-blue-600' },
    { id: 19, icon: Fuel, gradient: 'from-orange-500 to-red-600' },
    { id: 20, icon: Wheat, gradient: 'from-amber-400 to-orange-500' },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Simple Masonry Grid Layout */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {photos.map((photo, index) => {
            const IconComponent = photo.icon;
            return (
              <div
                key={photo.id}
                className="break-inside-avoid mb-4"
              >
                <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer">
                  {/* Photo with gradient background */}
                  <div className={`bg-gradient-to-br ${photo.gradient} flex items-center justify-center
                    ${index % 5 === 0 ? 'h-96' : index % 3 === 0 ? 'h-80' : 'h-64'}
                  `}>
                    <IconComponent 
                      className="text-white group-hover:scale-125 transition-transform duration-500 drop-shadow-lg" 
                      size={120}
                      strokeWidth={1.5}
                    />
                  </div>

                  {/* Subtle overlay on hover */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}