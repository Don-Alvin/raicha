import { Award, FileCheck, Shield, Trophy } from 'lucide-react';

export default function Certifications() {
  const certifications = [
    {
      title: 'ISO 9001 Certified',
      description: 'Quality Management System',
      icon: Award,
    },
    {
      title: 'Licensed Contractor',
      description: 'Government Approved',
      icon: FileCheck,
    },
    {
      title: 'Safety Certified',
      description: 'OSHA Compliant',
      icon: Shield,
    },
    {
      title: 'Member IEEK',
      description: 'Institution of Engineers of Kenya',
      icon: Trophy,
    },
  ];

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Certifications & Memberships
          </h2>
          <p className="text-gray-400 text-lg">
            Recognized for excellence and compliance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {certifications.map((cert, index) => {
            const IconComponent = cert.icon;
            return (
              <div
                key={index}
                className="bg-gray-800 p-8 rounded-lg text-center hover:bg-gray-700 transition-colors duration-300"
              >
                <IconComponent className="mx-auto text-secondary mb-4" size={56} strokeWidth={1.5} />
                <h3 className="text-xl font-bold mb-2">{cert.title}</h3>
                <p className="text-gray-400 text-sm">{cert.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}