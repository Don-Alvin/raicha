import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/ui/Button';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image - Desaturated for industrial feel */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero_bg.png"
          alt="Electrical infrastructure in East Africa"
          fill
          className="object-cover brightness-[0.85] saturate-[0.85]"
          priority
        />
        {/* Tonal overlay - using on-background (navy-based) */}
        <div className="absolute inset-0 bg-gradient-to-r from-on-background/80 via-on-background/60 to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 py-32 lg:py-40">
        <div className="max-w-3xl">
          {/* Overline - using text-label-md */}
          <div className="mb-6 animate-fade-in">
            <span className="text-label-md text-white tracking-wide">
              Your Integrated Partner for Power, Security, and ICT
            </span>
          </div>
          
          {/* Main heading */}
          <h1 className="text-display-md lg:text-display-lg font-bold text-white leading-[1.1] tracking-[-0.02em] mb-6 animate-fade-in delay-100">
            Your Integrated Partner for Power, Security, and ICT
          </h1>
          
          {/* Description */}
          <p className="text-body-lg text-white/90 leading-relaxed max-w-2xl mb-8 animate-fade-in delay-200">
            We provide end-to-end electrical engineering, industrial fabrication, and smart building systems. Whether it’s a high-rise landmark or a specialized medical facility, we power the projects that move the nation.
          </p>
          
          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in delay-300">
            <Button href="/contact" size="lg">
              REQUEST A QUOTE
            </Button>
          </div>
        </div>
      </div>
      
      {/* Architectural accent - subtle red line at bottom */}
      <div className="absolute bottom-0 left-0 w-32 h-1 bg-primary"></div>
    </section>
  );
}