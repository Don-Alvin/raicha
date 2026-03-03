import PageHero from '@/components/sections/PageHero';
import ProjectStats from '@/components/sections/ProjectStats';
import ProjectsGrid from '@/components/sections/ProjectsGrid';
import CTA from '@/components/sections/CTA';

export const metadata = {
  title: 'Our Projects',
  description: 'Explore 500+ completed electrical projects across East Africa including power distribution, solar installations, industrial systems, and commercial developments.',
  keywords: 'electrical projects Kenya, completed projects East Africa, power distribution projects, solar projects Kenya, industrial electrical projects',
  openGraph: {
    title: 'Raicha Projects - 500+ Successful Installations',
    description: 'Portfolio of electrical contracting excellence across Kenya, Uganda, Tanzania, and Rwanda.',
    url: 'https://raicha.com/projects',
    images: ['/og-projects.jpg'],
  },
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