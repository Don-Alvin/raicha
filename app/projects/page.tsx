import PageHero from '@/components/sections/PageHero';
import ProjectStats from '@/components/sections/ProjectStats';
import ProjectsGrid from '@/components/sections/ProjectsGrid';
import CTA from '@/components/sections/CTA';

export const metadata = {
  title: 'Our Projects - Raicha',
  description: 'Explore our portfolio of completed electrical and power distribution projects across East Africa',
};

export default function ProjectsPage() {
  return (
    <main>
      <PageHero
        title="Our Projects"
        subtitle="50+ successful projects across East Africa"
      />
      <ProjectStats />
      <ProjectsGrid />
      <CTA
        title="Have a Project in Mind?"
        description="Let's discuss how we can bring your electrical project to life"
        buttonText="GET IN TOUCH"
        buttonLink="/contact"
      />
    </main>
  );
}