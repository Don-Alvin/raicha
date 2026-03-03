import Image from 'next/image';

interface PageHeroProps {
  title: string;
  subtitle: string;
  backgroundImage?: string;
}

export default function PageHero({ 
  title, 
  subtitle, 
  backgroundImage = '/images/hero_bg.png' 
}: PageHeroProps) {
  return (
    <section className="relative h-[400px] bg-gradient-to-br from-gray-800 to-gray-900 text-white flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt={`${title} background`}
          fill
          className="object-cover"
          priority
          sizes="100vw"
          quality={85}
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">{title}</h1>
        <p className="text-xl md:text-2xl text-gray-200 max-w-3xl">{subtitle}</p>
      </div>
    </section>
  );
}