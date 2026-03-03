import Hero from '@/components/sections/Hero';
import Stats from '@/components/sections/Stats';
import Expertise from '@/components/sections/Expertise';
import Partners from '@/components/sections/Partners';

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