import PageHero from '@/components/sections/PageHero';
import ContactForm from '@/components/sections/ContactForm';

export const metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Raicha for all your electrical contracting needs. Located in Nairobi, Kenya. 24/7 emergency service available. Request a free quote today.',
  keywords: 'contact Raicha, electrical contractors Nairobi, electrical quote Kenya, emergency electrical service',
  openGraph: {
    title: 'Contact Raicha - Get Your Free Quote Today',
    description: 'Reach out for professional electrical services across East Africa. 24/7 emergency support.',
    url: 'https://raicha.com/contact',
    images: ['/og-contact.jpg'],
  },
};

export default function ContactPage() {
  return (
    <main>
      <PageHero
        title="Contact Us"
        subtitle="Let's discuss your next electrical project"
      />
      <ContactForm />
    </main>
  );
}