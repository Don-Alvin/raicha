import SectionContainer from '@/components/ui/SectionContainer';
import Overline from '@/components/ui/Overline';

export default function ServiceProcess() {
  const steps = [
    {
      number: '01',
      title: 'Consultation',
      description: 'We meet with you to understand your project requirements and goals.',
    },
    {
      number: '02',
      title: 'Design & Planning',
      description: 'Our engineers create detailed designs and project plans.',
    },
    {
      number: '03',
      title: 'Installation',
      description: 'Our expert team executes the project with precision and care.',
    },
    {
      number: '04',
      title: 'Testing & Commissioning',
      description: 'We thoroughly test all systems to ensure they meet standards.',
    },
    {
      number: '05',
      title: 'Support & Maintenance',
      description: 'We provide ongoing support and maintenance services.',
    },
  ];

  return (
    <SectionContainer background="surface" spacing="large">
      <div className="text-center mb-12">
        <Overline>OUR METHODOLOGY</Overline>
        <h2 className="text-display-sm font-bold text-on-background mb-4">
          Our Process
        </h2>
        <p className="text-body-lg text-on-surface-variant">
          A proven approach to delivering excellence
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
        {steps.map((step, index) => (
          <div
            key={index}
            className="group text-center"
          >
            <div className="text-display-lg font-bold text-primary/30 mb-4 group-hover:text-primary/40 transition-colors duration-300">
              {step.number}
            </div>
            <h3 className="text-headline-sm font-bold text-on-background mb-2 group-hover:text-primary transition-colors duration-300">
              {step.title}
            </h3>
            <p className="text-body-sm text-on-surface-variant leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}