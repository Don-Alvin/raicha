'use client';

import Image from 'next/image';

export default function ServicesGrid() {
  const services = [
    {
      id: 1,
      name: "Commercial Electrical",
      description: "Complete electrical solutions for offices, retail spaces, and commercial buildings.",
      image: "/images/expertise/commercial.png",
    },
    {
      id: 2,
      name: "Residential Electrical",
      description: "Professional home electrical installations, repairs, and upgrades for safe living.",
      image: "/images/expertise/residential.png",
    },
    {
      id: 3,
      name: "Industrial Electrical",
      description: "Heavy-duty electrical systems for manufacturing plants and industrial facilities.",
      image: "/images/expertise/industrial.png",
    },
    {
      id: 4,
      name: "Electrical Repairs",
      description: "Fast and reliable repair services for all your electrical issues and emergencies.",
      image: "/images/expertise/repairs.png",
    },
    {
      id: 5,
      name: "Lighting Installation",
      description: "Expert installation of indoor and outdoor lighting systems for any space.",
      image: "/images/expertise/lighting.png",
    },
    {
      id: 6,
      name: "Electrical Upgrades",
      description: "Modernize your electrical system with panel upgrades and circuit additions.",
      image: "/images/expertise/upgrades.png",
    },
    {
      id: 7,
      name: "Generator Installation",
      description: "Backup power solutions to keep your property running during outages.",
      image: "/images/expertise/generator.png",
    },
    {
      id: 8,
      name: "Emergency Services",
      description: "24/7 emergency electrical services for urgent repairs and power restoration.",
      image: "/images/expertise/emergency.png",
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="group relative bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Dark Overlay on Hover */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300"></div>
                
                {/* Service Name Overlay on Image */}
                <div className="absolute inset-0 flex items-end p-6">
                  <h3 className="text-2xl font-bold text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    {service.name}
                  </h3>
                </div>
              </div>

              {/* Description */}
              <div className="p-6 bg-white">
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Bottom Border Effect */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}