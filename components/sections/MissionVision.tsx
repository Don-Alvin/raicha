import { Target, Star } from 'lucide-react';
import SectionContainer from '@/components/ui/SectionContainer';
import Overline from '@/components/ui/Overline';

export default function MissionVision() {
  return (
    <SectionContainer background="surface-low" spacing="large">
      <div className="text-center mb-12">
        <Overline>OUR PURPOSE</Overline>
        <h2 className="text-display-sm font-bold text-on-background">
          Mission & Vision
        </h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {/* Mission */}
        <div className="bg-surface-container-lowest p-10 transition-all duration-300 hover-glow group hover:bg-on-background">
          <Target 
            className="text-primary mb-6 group-hover:text-primary/90 transition-colors duration-300" 
            size={48} 
            strokeWidth={1.5}
          />
          <h3 className="text-headline-md font-bold text-on-background mb-4 group-hover:text-white transition-colors duration-300">
            Our Mission
          </h3>
          <p className="text-body-lg text-on-surface-variant leading-relaxed group-hover:text-white/80 transition-colors duration-300">
            To provide innovative, reliable, and sustainable electrical and power 
            solutions that power East Africa's growth while maintaining the highest 
            standards of safety, quality, and environmental responsibility.
          </p>
        </div>

        {/* Vision */}
        <div className="bg-primary p-10 transition-all duration-300 hover-glow group hover:bg-primary/90">
          <Star 
            className="text-white mb-6 group-hover:text-white/90 transition-colors duration-300" 
            size={48} 
            strokeWidth={1.5}
          />
          <h3 className="text-headline-md font-bold text-white mb-4 group-hover:text-white transition-colors duration-300">
            Our Vision
          </h3>
          <p className="text-body-lg text-white/90 leading-relaxed group-hover:text-white/90 transition-colors duration-300">
            To be East Africa's leading electrical contracting and renewable energy 
            company, recognized for excellence, innovation, and our contribution to 
            sustainable infrastructure development across the region.
          </p>
        </div>
      </div>
    </SectionContainer>
  );
}