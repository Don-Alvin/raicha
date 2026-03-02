export default function Expertise() {
  const services = [
    {
      title: 'ELECTRICAL INFRASTRUCTURE & POWER DISTRIBUTION',
      description: 'High-capacity power management from grid to facility',
      details: [
        'Power distribution systems up to 33,000 Volts (33KV)',
        'Housing estates, petrol stations, high-rise buildings',
        'Water supply and irrigation projects',
        'Banks, schools, hospitals, and hospitality industry',
      ],
      icon: '⚡',
      bgColor: 'bg-gray-800',
    },
    {
      title: 'BACKUP POWER & ENERGY SOLUTIONS',
      description: 'Traditional and renewable energy solutions',
      details: [
        'Generators with Auto Mains Failure (AMF) units',
        'Solar Lighting Systems with inverters',
        'Inverter systems with battery backups',
        'Voltage Stabilizer units up to 1000kVA',
      ],
      icon: '🔋',
      bgColor: 'bg-gray-800',
    },
    {
      title: 'INDUSTRIAL FABRICATION & CONTROL SYSTEMS',
      description: 'Custom manufacturing of electrical components',
      details: [
        'Main Meter Boards (up to 1600 Amps) and sub-boards',
        'Motor Control Centers (MCC)',
        'Power Factor Correction Units',
        'Custom fabrication of street light poles',
      ],
      icon: '⚙️',
      bgColor: 'bg-secondary',
    },
    {
      title: 'ICT & STRUCTURED CABLING',
      description: 'Digital connectivity for modern buildings',
      details: [
        'LAN and WAN backbones (Fibre Optics and UTP)',
        'Structured Cabling Systems installation',
        'Block wiring and pre-wiring services',
        'Terminal equipment installation',
      ],
      icon: '🌐',
      bgColor: 'bg-gray-800',
    },
    {
      title: 'SPECIALIZED MEDICAL & ENVIRONMENTAL SYSTEMS',
      description: 'Precision systems for technical environments',
      details: [
        'Medical Examination & Operating Theatre Lamps',
        'Air-Conditioning (HVAC) systems supply & installation',
        'Specialized electrical for factories',
        'Manufacturing facility support',
      ],
      icon: '🏥',
      bgColor: 'bg-gray-800',
    },
    {
      title: 'SECURITY, FIRE SAFETY & ACCESS CONTROL',
      description: 'Protection of assets, data, and human life',
      details: [
        'Specialist Fire Alarm equipment design & installation',
        'Security Alarm systems and monitoring',
        'Security locking systems servicing',
        'Professional locksmithing and key cutting',
      ],
      icon: '🔒',
      bgColor: 'bg-gray-800',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-primary font-semibold mb-2">WHAT WE DO</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            OUR EXPERTISE
          </h2>
          <p className="text-gray-600 text-lg mt-4 max-w-3xl mx-auto">
            Full-service electrical solutions from heavy industrial power to high-tech security and data
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`${service.bgColor} ${
                service.bgColor === 'bg-secondary' ? 'text-gray-900' : 'text-white'
              } p-8 rounded-lg hover:scale-105 transition-transform duration-300`}
            >
              <div className="text-6xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className={`text-sm mb-4 ${
                service.bgColor === 'bg-secondary' ? 'text-gray-700' : 'text-gray-300'
              }`}>
                {service.description}
              </p>
              <ul className={`space-y-2 text-sm ${
                service.bgColor === 'bg-secondary' ? 'text-gray-800' : 'text-gray-400'
              }`}>
                {service.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className={`mr-2 ${
                      service.bgColor === 'bg-secondary' ? 'text-gray-900' : 'text-primary'
                    }`}>
                      •
                    </span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}