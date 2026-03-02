import ServiceCard from '@/components/ui/ServiceCard';

export default function ServiceDetails() {
  const services = [
    {
      icon: '🏢',
      title: 'Electrical Installations',
      description:
        'Complete electrical installation services for residential, commercial, and industrial projects. We handle everything from basic wiring to complex electrical systems.',
      features: [
        'Commercial Building Installations',
        'Residential Electrical Wiring',
        'Industrial Power Systems',
        'Lighting Systems & Controls',
        'Electrical Panel Installations',
        'Maintenance & Repairs',
      ],
    },
    {
      icon: '⚡',
      title: 'Power Distribution',
      description:
        'Expert power distribution solutions up to 33kV. We design, install, and maintain power distribution systems that ensure reliable electricity supply.',
      features: [
        'Up to 33kV Distribution Systems',
        'Transformer Installations',
        'Generator Installation & Setup',
        'Switchgear & Control Panels',
        'Load Management Systems',
        'Power Quality Solutions',
      ],
    },
    {
      icon: '☀️',
      title: 'Renewable Energy',
      description:
        'Sustainable energy solutions including solar power systems. We help you transition to clean energy with reliable solar installations and inverter systems.',
      features: [
        'Solar Panel Installations',
        'Solar Inverters & Battery Systems',
        'Grid-Tied Solar Solutions',
        'Off-Grid Solar Systems',
        'Solar Water Heating',
        'Energy Efficiency Audits',
      ],
    },
    {
      icon: '🌐',
      title: 'Specialized Systems',
      description:
        'Advanced electrical systems for modern buildings. From data networks to security systems, we provide comprehensive specialized solutions.',
      features: [
        'Structured Cabling (Cat6, Fiber)',
        'Fire Alarm Systems',
        'Security & Access Control',
        'CCTV Surveillance Systems',
        'Building Management Systems (BMS)',
        'Emergency Lighting Systems',
      ],
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              features={service.features}
            />
          ))}
        </div>
      </div>
    </section>
  );
}