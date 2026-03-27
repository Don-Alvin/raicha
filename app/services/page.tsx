import ServicesOverview from '@/components/sections/ServicesOverview';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import ServiceProcess from '@/components/sections/ServiceProcess';
import ServicesGrid from '@/components/sections/ServicesGrid';
import FinalCTA from '@/components/sections/FinalCTA';
import PageHero from '@/components/sections/PageHero';

export const metadata = {
  title: 'Our Services',
  description: 'Comprehensive electrical solutions: Commercial, residential, industrial electrical services, repairs, lighting, upgrades, generators, emergency services, and security systems across East Africa.',
  keywords: 'electrical services Kenya, commercial electrical, residential electrical, industrial electrical, electrical repairs, lighting installation, electrical upgrades, generator installation, emergency electrical service, security systems',
  openGraph: {
    title: 'Electrical Services - Commercial, Residential & Industrial',
    description: 'Professional electrical services for all your needs across East Africa.',
    url: 'https://raicha.com/services',
    images: ['/og-services.jpg'],
  },
};

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        overline='INDUSTRIAL PRECISION'
        title="Engineered Excellence"
        subtitle="Delivering high-integrity electrical infrastructure for complex industrial environments. We combine architectural precision with engineering authority."
        backgroundImage='/images/services_hero.png'
      />
      <ServicesOverview />
      <ServicesGrid />
      <WhyChooseUs />
      <ServiceProcess />
      <FinalCTA
        title="Elevate Your Infrastructure"
        description="Contact our specialized engineering team to discuss your facility's specific electrical requirements and optimize your power distribution."
        buttonOneText="REQUEST QUOTE"
        buttonOneHref="/contact"
      />
    </main>
  );
}
