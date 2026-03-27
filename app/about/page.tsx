import CompanyStory from '@/components/sections/CompanyStory';
import CoreValues from '@/components/sections/CoreValues';
import Certifications from '@/components/sections/Certifications';
import Stats from '@/components/sections/Stats';
import MissionVision from '@/components/sections/MissionVision';
import PageHero from '@/components/sections/PageHero';
import FinalCTA from '@/components/sections/FinalCTA';

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
        overline='OUR LEGACY'
        title="A Heritage of Engineering Excellence"
        subtitle="Raicha Electro Service has defined the standard for industrial electrical systems for over three decades, merging precision engineering with visionary innovation."
        backgroundImage='/images/about_hero.png'
      />
      <CompanyStory />
      <MissionVision />
      <CoreValues />
      <Certifications />
      <FinalCTA
        title="Engineering Leadership for the Future"
        description="Join forces with our team of industry experts to drive innovation and excellence in your next infrastructure project."
        buttonOneText="SPEAK TO OUR TEAM"
        buttonOneHref="/contact"
      />
    </main>
  );
}