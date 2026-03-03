import PageHero from '@/components/sections/PageHero';
import CompanyStory from '@/components/sections/CompanyStory';
import CoreValues from '@/components/sections/CoreValues';
import Certifications from '@/components/sections/Certifications';
import Stats from '@/components/sections/Stats';
import MissionVision from '@/components/sections/MissionVision';

export const metadata = {
  title: 'About Us',
  description: 'Learn about Raicha - ISO 9001 certified electrical contractors with 30+ years of experience serving East Africa. Our mission, vision, values, and commitment to excellence.',
  keywords: 'about Raicha, electrical contractors history, ISO 9001 certified Kenya, electrical company East Africa',
  openGraph: {
    title: 'About Raicha - 30+ Years of Electrical Excellence',
    description: 'ISO 9001 certified with over 50 completed projects across East Africa.',
    url: 'https://raicha.com/about',
    images: ['/og-about.jpg'],
  },
};

export default function AboutPage() {
  return (
    <main>
      <PageHero
        title="About Us"
        subtitle="Three decades of excellence in electrical contracting"
      />
      <Stats />
      <CompanyStory />
      <MissionVision />
      <CoreValues />
      <Certifications />
    </main>
  );
}