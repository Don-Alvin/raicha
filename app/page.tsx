import Hero from '@/components/sections/Hero';
import Stats from '@/components/sections/Stats';
import Expertise from '@/components/sections/Expertise';
import FeaturedProjects from '@/components/sections/FeaturedProjects';

export default function Home() {
  return (
    <main>
      <Hero />
      <Stats />
      <Expertise />
      <FeaturedProjects />
    </main>
  );
}