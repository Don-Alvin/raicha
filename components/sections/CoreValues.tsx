import { Star, Handshake, Lightbulb, Shield, Leaf, Users } from 'lucide-react';
import SectionContainer from '@/components/ui/SectionContainer';
import Overline from '@/components/ui/Overline';

export default function CoreValues() {
  const values = [
    {
      icon: Star,
      title: 'Excellence',
      description: 'We deliver the highest quality in every project we undertake.',
    },
    {
      icon: Handshake,
      title: 'Integrity',
      description: 'We conduct business with honesty, transparency, and accountability.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We embrace new technologies and creative solutions.',
    },
    {
      icon: Shield,
      title: 'Safety',
      description: 'We prioritize the safety of our team, clients, and communities.',
    },
    {
      icon: Leaf,
      title: 'Sustainability',
      description: 'We commit to environmentally responsible practices.',
    },
    {
      icon: Users,
      title: 'Teamwork',
      description: 'We collaborate effectively to achieve shared goals.',
    },
  ];

  return (
    <SectionContainer background="surface" spacing="large">
      <div className="text-center mb-16">
        <Overline>THE PILLARS OF OUR AUTHORITY</Overline>
        <h2 className="text-display-sm font-bold text-on-background">
          Our Core Values
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {values.map((value, index) => {
          const IconComponent = value.icon;
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
              <h3 className="text-headline-sm font-bold text-on-background mb-3 group-hover:text-white transition-colors duration-300">
                {value.title}
              </h3>
              <p className="text-body-md text-on-surface-variant group-hover:text-white/80 transition-colors duration-300">
                {value.description}
              </p>
            </div>
          );
        })}
      </div>
    </SectionContainer>
  );
}