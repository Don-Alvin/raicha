import PageHero from '@/components/sections/PageHero';
import ServicesOverview from '@/components/sections/ServicesOverview';
import ServiceDetails from '@/components/sections/ServiceDetails';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import ServiceProcess from '@/components/sections/ServiceProcess';
import CTA from '@/components/sections/CTA';
import ServicesGrid from '@/components/sections/ServicesGrid';

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
        title="Our Services"
        subtitle="Professional electrical solutions for residential, commercial, and industrial clients across East Africa"
      />
      <ServicesOverview />
      <ServicesGrid />
      <WhyChooseUs />
      <ServiceProcess />
      <CTA
        title="Ready to Start Your Project?"
        description="Get in touch with us today for a free consultation and quote"
        buttonText="REQUEST A QUOTE"
        buttonLink="/contact"
      />
    </main>
  );
}
