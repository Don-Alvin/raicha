import { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import Stats from '@/components/sections/Stats';
import Expertise from '@/components/sections/Expertise';
import Partners from '@/components/sections/Partners';

export const metadata: Metadata = {
  title: "Home",
  description: "Raicha is East Africa's premier electrical contracting company with 30+ years of experience, 500+ completed projects, and ISO 9001 certification.",
  openGraph: {
    title: "Raicha - Electrical Contracting Excellence in East Africa",
    description: "30+ years of powering East Africa's infrastructure. ISO 9001 certified.",
    url: "https://raicha.com",
    images: ["/og-home.jpg"],
  },
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Stats />
      <Expertise />
      <Partners />
    </main>
  );
}