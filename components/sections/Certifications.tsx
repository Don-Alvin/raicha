import { Award, FileCheck, Shield, Trophy } from 'lucide-react';
import SectionContainer from '@/components/ui/SectionContainer';
import Overline from '@/components/ui/Overline';

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
    <SectionContainer background="surface" spacing="large">
      {/* Section Header */}
      <div className="text-center mb-16">
        <Overline>CERTIFICATIONS & MEMBERSHIPS</Overline>
        <h2 className="text-display-sm font-bold text-on-background">
          Recognized for excellence and compliance
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {certifications.map((cert, index) => {
          const IconComponent = cert.icon;
          return (
            <div
              key={index}
              className="group bg-surface-container-lowest p-8 text-center transition-all duration-300 hover:bg-on-background hover-glow"
            >
              <IconComponent 
                className="mx-auto text-primary mb-5 group-hover:text-primary/90 transition-colors duration-300" 
                size={48} 
                strokeWidth={1.5} 
              />
              <h3 className="text-headline-sm font-bold text-on-background mb-2 group-hover:text-white transition-colors duration-300">
                {cert.title}
              </h3>
              <p className="text-body-sm text-on-surface-variant group-hover:text-white/80 transition-colors duration-300">
                {cert.description}
              </p>
            </div>
          );
        })}
      </div>
    </SectionContainer>
  );
}