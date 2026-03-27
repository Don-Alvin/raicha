import Image from 'next/image';
import SectionContainer from '@/components/ui/SectionContainer';
import Overline from '@/components/ui/Overline';

export default function Evolution() {
  return (
    <SectionContainer background="default" spacing="large">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left Content */}
        <div>
          <Overline>THE EVOLUTION</Overline>
          <h2 className="text-display-sm font-bold text-on-background mb-6">
            Regional Technical Leader.
          </h2>
          <div className="space-y-4 text-body-lg text-on-surface-variant leading-relaxed">
            <p>
              Founded on the principles of absolute technical integrity, Raicha Electro Service began 
              as a specialized electrical consultancy. Our journey has been defined by a relentless 
              pursuit of solving the most complex energy challenges in the industrial sector.
            </p>
            <p>
              Today, we command a reputation for excellence in high-tension installations, automated 
              control systems, and sustainable energy infrastructure, serving as the backbone for 
              heavy industry across the globe.
            </p>
          </div>
          
          {/* Stats below text */}
          <div className="mt-8">
            <div className="inline-block bg-surface-container-lowest px-6 py-4 hover-glow">
              <div className="text-display-md font-bold text-primary">
                30+
              </div>
              <div className="text-label-sm text-on-surface-variant tracking-wide">
                YEARS OF INNOVATION
              </div>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative h-[400px] lg:h-[500px] overflow-hidden">
          <Image
            src="/images/evolution.jpg"
            alt="Industrial evolution"
            fill
            className="object-contain saturate-[0.9]"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    </SectionContainer>
  );
}