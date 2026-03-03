import PageHero from '@/components/sections/PageHero';
import GalleryGrid from '@/components/sections/GalleryGrid';
import CTA from '@/components/sections/CTA';
import GalleryStats from '@/components/sections/GalleryStats';

export const metadata = {
  title: 'Gallery',
  description: 'Visual showcase of Raicha\'s electrical and power distribution projects across East Africa. See our work in industrial, commercial, and renewable energy installations.',
  keywords: 'electrical projects gallery, power distribution photos, solar installation images, industrial electrical work',
  openGraph: {
    title: 'Project Gallery - Visual Excellence in Electrical Contracting',
    description: 'A visual journey through 30+ years of electrical excellence.',
    url: 'https://raicha.com/gallery',
    images: ['/og-gallery.jpg'],
  },
};

export default function GalleryPage() {
  return (
    <main>
      <PageHero
        title="Project Gallery"
        subtitle="A visual showcase of 30+ years of excellence"
      />
      <GalleryStats />
      <GalleryGrid />
      <CTA
        title="Ready to See Your Project Here?"
        description="Let's create something amazing together"
        buttonText="START YOUR PROJECT"
        buttonLink="/contact"
      />
    </main>
  );
}