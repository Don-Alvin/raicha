'use client';

import { useState } from 'react';
import QuoteModal from '@/components/ui/QuoteModal';

interface CTAProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink?: string;
}

export default function CTA({ title, description, buttonText }: CTAProps) {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  return (
    <>
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">{title}</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">{description}</p>
          <button
            onClick={() => setIsQuoteModalOpen(true)}
            className="inline-block bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-semibold transition-colors"
          >
            {buttonText}
          </button>
        </div>
      </section>

      {/* Quote Modal */}
      <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
    </>
  );
}