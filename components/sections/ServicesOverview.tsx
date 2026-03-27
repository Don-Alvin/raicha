import SectionContainer from '@/components/ui/SectionContainer';
import Overline from '@/components/ui/Overline';
import Button from '@/components/ui/Button';

export default function ServicesOverview() {
  return (
    <SectionContainer background="surface" spacing="large">
      <div className="max-w-4xl mx-auto text-center">
        <Overline>ENGINEERED EXCELLENCE</Overline>
        <h2 className="text-display-sm font-bold text-on-background mb-6">
          Our Specialized Solutions
        </h2>
        <p className="text-body-lg text-on-surface-variant leading-relaxed mb-8">
          Delivering high-integrity electrical infrastructure for complex industrial environments. 
          We combine architectural precision with engineering authority.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/contact" size="lg">
            GET A QUOTE
          </Button>
        </div>
      </div>
    </SectionContainer>
  );
}