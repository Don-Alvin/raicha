import PageHero from '@/components/sections/PageHero';
import ServicesOverview from '@/components/sections/ServicesOverview';
import ServiceDetails from '@/components/sections/ServiceDetails';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import ServiceProcess from '@/components/sections/ServiceProcess';
import CTA from '@/components/sections/CTA';

export const metadata = {
  title: 'Our Services - Raicha',
  description: 'Comprehensive electrical solutions for residential, commercial, and industrial projects',
};

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        title="Our Services"
        subtitle="Comprehensive electrical solutions for every need"
      />
      <ServicesOverview />
      <ServiceDetails />
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