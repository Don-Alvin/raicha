import { Trophy, Award, Users, Zap, CheckCircle, Shield } from 'lucide-react';
import SectionContainer from '@/components/ui/SectionContainer';
import Overline from '@/components/ui/Overline';

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: Trophy,
      title: '30+ Years Experience',
      description: 'Three decades of proven excellence in electrical contracting',
    },
    {
      icon: Award,
      title: 'ISO 9001 Certified',
      description: 'Quality management system certified to international standards',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Highly skilled and certified electrical engineers and technicians',
    },
    {
      icon: Zap,
      title: 'Latest Technology',
      description: 'We use cutting-edge tools and equipment for all projects',
    },
    {
      icon: CheckCircle,
      title: '50+ Projects',
      description: 'Successfully completed projects across East Africa',
    },
    {
      icon: Shield,
      title: 'Safety First',
      description: 'Strict adherence to safety standards and regulations',
    },
  ];

  return (
    <SectionContainer background="surface" spacing="large">
      <div className="text-center mb-12">
        <Overline>WHY CHOOSE US</Overline>
        <h2 className="text-display-sm font-bold text-on-background">
          Why Choose Raicha?
        </h2>
        <p className="text-body-lg text-on-surface-variant mt-4">
          The trusted partner for all your electrical needs
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {reasons.map((reason, index) => {
          const IconComponent = reason.icon;
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
                {reason.title}
              </h3>
              <p className="text-body-sm text-on-surface-variant group-hover:text-white/80 transition-colors duration-300">
                {reason.description}
              </p>
            </div>
          );
        })}
      </div>
    </SectionContainer>
  );
}