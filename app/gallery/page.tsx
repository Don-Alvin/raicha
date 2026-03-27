import PageHero from '@/components/sections/PageHero';
import GalleryGrid from '@/components/sections/GalleryGrid';
import GalleryStats from '@/components/sections/GalleryStats';
import FinalCTA from '@/components/sections/FinalCTA';

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
        overline='EXCELLENCE'
        title="Our Project Portfolio"
        subtitle="A visual showcase of 30+ years of excellence"
        backgroundImage='/images/services_hero.png'
      />
      <GalleryStats />
      <GalleryGrid />
      <FinalCTA
          title="Ready to Bring Your Vision to Life?"
          description="Explore our portfolio of completed projects and let us help you plan your next industrial electrical installation."
          buttonOneText="DISCUSS YOUR PROJECT"
          buttonOneHref="/contact"
      />
    </main>
  );
}