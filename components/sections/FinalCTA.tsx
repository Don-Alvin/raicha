'use client'

import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/ui/Button';

interface FinalCTAProps {
  title: string;
  description: string;
  buttonOneText: string;
  buttonOneHref: string;
  catalogPdfPath?: string;
  backgroundImage?: string;
}

export default function FinalCTA({ 
  title,
  description,
  buttonOneText,
  buttonOneHref,
  catalogPdfPath = '/catalog/raicha-catalog.pdf',
  backgroundImage = '/images/final_cta.png'
}: FinalCTAProps) {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = catalogPdfPath;
    link.download = 'raicha-catalog.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt="Industrial infrastructure"
          fill
          className="object-cover brightness-[0.7] saturate-[0.85]"
          priority
        />
        {/* Tonal Overlay */}
        <div className="absolute inset-0 bg-on-background/70"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-display-sm lg:text-display-md font-bold text-white mb-6">
            {title}
          </h2>
          <p className="text-body-md lg:text-body-lg text-white/90 leading-relaxed mb-8">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href={buttonOneHref} size="lg">
              {buttonOneText}
            </Button>
            <button
              onClick={handleDownload}
              className="inline-flex items-center justify-center bg-white/80 text-on-background px-8 py-4 text-label-md font-semibold transition-all duration-300 hover:bg-white hover:scale-[1.02] active:scale-[0.98]"
            >
              DOWNLOAD CATALOG
            </button>
          </div>
        </div>
      </div>
      
      {/* Architectural accent - subtle red line at bottom */}
      <div className="absolute bottom-0 left-0 w-32 h-1 bg-primary"></div>
    </section>
  );
}