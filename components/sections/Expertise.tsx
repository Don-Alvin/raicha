'use client';

import Link from 'next/link';
import { Zap, Shield, Gauge } from 'lucide-react';
import SectionContainer from '@/components/ui/SectionContainer';
import Overline from '@/components/ui/Overline';

export default function Expertise() {
  const featuredServices = [
    {
      id: 1,
      name: "Commercial Electrical",
      description: "Complete electrical solutions for offices, retail spaces, and commercial buildings.",
      image: "/images/expertise/commercial.png",
      icon: Zap
    },
    {
      id: 2,
      name: "Residential Electrical",
      description: "Professional home electrical installations, repairs, and upgrades for safe living.",
      image: "/images/expertise/residential.png",
      icon: Zap
    },
    {
      id: 3,
      name: "Industrial Electrical",
      description: "Heavy-duty electrical systems for manufacturing plants and industrial facilities.",
      image: "/images/expertise/industrial.png",
      icon: Zap
    }
  ];

  return (
    <SectionContainer background="surface-low" spacing="large">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
        <Overline>ENGINEERED SERVICE SOLUTIONS</Overline>
        <h2 className="text-display-md text-on-background mb-6">
          Engineered Service Solutions
        </h2>
      </div>

      {/* Services Grid - 3 columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mb-12">
        {featuredServices.map((service, index) => {
          const IconComponent = service.icon;
          return (
            <div
              key={service.id}
              className="group bg-surface-container-lowest p-8 transition-all duration-300 hover:bg-on-background animate-scale-in hover-glow"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              {/* Number */}
              <div className="text-display-lg font-bold text-primary/20 mb-4 leading-none group-hover:text-primary/30 transition-colors duration-300">
                {String(service.id).padStart(2, '0')}
              </div>
              
              {/* Icon */}
              <IconComponent 
                className="text-primary mb-6 group-hover:text-primary/90 transition-colors duration-300" 
                size={40} 
                strokeWidth={1.5}
              />
              
              {/* Title */}
              <h3 className="text-headline-md font-bold text-on-background mb-4 group-hover:text-white transition-colors duration-300">
                {service.name}
              </h3>
              
              {/* Description */}
              <p className="text-body-md text-on-surface-variant leading-relaxed mb-6 group-hover:text-white/80 transition-colors duration-300">
                {service.description}
              </p>
            </div>
          );
        })}
      </div>

      {/* See All Services Link */}
      <div className="text-center">
        <Link
          href="/services"
          className="inline-flex items-center text-label-md text-primary font-semibold hover:opacity-80 transition-opacity"
        >
          SEE ALL SERVICES →
        </Link>
      </div>
    </SectionContainer>
  );
}