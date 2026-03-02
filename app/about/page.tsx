import PageHero from '@/components/sections/PageHero';
import CompanyStory from '@/components/sections/CompanyStory';
import CoreValues from '@/components/sections/CoreValues';
import Certifications from '@/components/sections/Certifications';
import Stats from '@/components/sections/Stats';
import MissionVision from '@/components/sections/MissionVision';

export const metadata = {
  title: 'About Us - Raicha',
  description: 'Learn about Raicha - Powering East Africa\'s Infrastructure Since 1994',
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