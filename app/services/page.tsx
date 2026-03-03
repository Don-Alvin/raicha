import PageHero from '@/components/sections/PageHero';
import ServicesOverview from '@/components/sections/ServicesOverview';
import ServiceDetails from '@/components/sections/ServiceDetails';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import ServiceProcess from '@/components/sections/ServiceProcess';
import CTA from '@/components/sections/CTA';

export const metadata = {
  title: 'Our Services',
  description: 'Comprehensive electrical solutions: Power distribution up to 33kV, renewable energy, industrial fabrication, ICT cabling, medical systems, and security solutions across East Africa.',
  keywords: 'electrical services Kenya, power distribution 33kV, solar installation Kenya, industrial electrical, structured cabling, fire alarm installation',
  openGraph: {
    title: 'Electrical Services - Power Distribution, Solar, Industrial Systems',
    description: 'Full-service electrical solutions from heavy industrial power to high-tech security and data.',
    url: 'https://raicha.com/services',
    images: ['/og-services.jpg'],
  },
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