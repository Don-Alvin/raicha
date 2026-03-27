import Image from 'next/image';

interface PageHeroProps {
  title: string;
  subtitle: string;
  overline?: string;
  backgroundImage: string;
}

export default function PageHero({ 
  title, 
  subtitle, 
  overline,
  backgroundImage, 
}: PageHeroProps) {
  return (
    <section className="relative min-h-[400px] md:min-h-[450px] lg:min-h-[500px] flex items-center overflow-hidden">
      {/* Background Image - Desaturated for industrial feel */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt={`${title} background`}
          fill
          className="object-cover brightness-[0.85] saturate-[0.85]"
          priority
          sizes="100vw"
          quality={85}
        />
        {/* Tonal overlay - using on-background (navy-based) instead of black */}
        <div className="absolute inset-0 bg-gradient-to-r from-on-background/80 to-on-background/40"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 py-16 md:py-20 lg:py-24">
        <div className="max-w-3xl">
          {overline && (
            <div className="mb-3 md:mb-4 animate-fade-in">
              <span className="text-label-sm md:text-label-md text-primary tracking-wide">
                {overline}
              </span>
            </div>
          )}
          <h1 className="text-display-sm md:text-display-md lg:text-display-lg font-bold text-white leading-[1.2] md:leading-[1.1] tracking-[-0.02em] mb-3 md:mb-4 animate-fade-in">
            {title}
          </h1>
          <p className="text-body-sm md:text-body-lg text-white/90 max-w-3xl animate-fade-in delay-100">
            {subtitle}
          </p>
        </div>
      </div>
      
      {/* Architectural accent - subtle red line at bottom */}
      <div className="absolute bottom-0 left-0 w-24 md:w-32 h-1 bg-primary"></div>
    </section>
  );
}