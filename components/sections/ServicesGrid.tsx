import SectionContainer from '@/components/ui/SectionContainer';
import Overline from '@/components/ui/Overline';

export default function ServicesGrid() {
  const services = [
    {
      id: 1,
      name: "Commercial Electrical",
      description: "Complete electrical solutions for offices, retail spaces, and commercial buildings.",
    },
    {
      id: 2,
      name: "Residential Electrical",
      description: "Professional home electrical installations, repairs, and upgrades for safe living.",
    },
    {
      id: 3,
      name: "Industrial Electrical",
      description: "Heavy-duty electrical systems for manufacturing plants and industrial facilities.",
    },
    {
      id: 4,
      name: "Electrical Repairs",
      description: "Fast and reliable repair services for all your electrical issues and emergencies.",
    },
    {
      id: 5,
      name: "Lighting Installation",
      description: "Expert installation of indoor and outdoor lighting systems for any space.",
    },
    {
      id: 6,
      name: "Electrical Upgrades",
      description: "Modernize your electrical system with panel upgrades and circuit additions.",
    },
    {
      id: 7,
      name: "Generator Installation",
      description: "Backup power solutions to keep your property running during outages.",
    },
    {
      id: 8,
      name: "Emergency Services",
      description: "24/7 emergency electrical services for urgent repairs and power restoration.",
    }
  ];

  return (
    <SectionContainer background="surface-low" spacing="large">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <Overline>CORE EXPERTISE</Overline>
          <h2 className="text-display-sm font-bold text-on-background">
            Specialized Electrical Engineering Services
          </h2>
          <p className="text-body-lg text-on-surface-variant mt-4">
            Designed to ensure operational continuity and peak performance for industrial assets.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="group bg-surface-container-lowest p-6 transition-all duration-300 hover:bg-on-background hover-glow"
            >
              <div className="text-display-sm font-bold text-primary/30 mb-4 group-hover:text-primary/40 transition-colors duration-300">
                {String(index + 1).padStart(2, '0')}
              </div>
              <h3 className="text-headline-sm font-bold text-on-background mb-3 group-hover:text-white transition-colors duration-300">
                {service.name}
              </h3>
              <p className="text-body-sm text-on-surface-variant leading-relaxed group-hover:text-white/80 transition-colors duration-300">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}