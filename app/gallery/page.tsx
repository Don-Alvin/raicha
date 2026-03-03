import PageHero from '@/components/sections/PageHero';
import GalleryGrid from '@/components/sections/GalleryGrid';
import CTA from '@/components/sections/CTA';
import GalleryStats from '@/components/sections/GalleryStats';

export const metadata = {
  title: 'Gallery - Raicha',
  description: 'Visual showcase of our electrical and power distribution projects across East Africa',
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