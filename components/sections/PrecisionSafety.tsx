import Image from 'next/image';
import SectionContainer from '@/components/ui/SectionContainer';
import Overline from '@/components/ui/Overline';
import { Award, ShieldCheck } from 'lucide-react';

export default function PrecisionSafety() {
  return (
    <SectionContainer background="default" spacing="large">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left Content */}
        <div>
          <Overline>PRECISION AND SAFETY</Overline>
          <h2 className="text-display-sm font-bold text-on-background mb-6">
            Precision and Safety in Every Connection
          </h2>
          <p className="text-body-lg text-on-surface-variant mb-6 leading-relaxed">
            At Raicha Electro Service, our commitment to industrial excellence is built on three pillars: 
            absolute safety, engineering precision, and operational efficiency.
          </p>
          <p className="text-body-lg text-on-surface-variant mb-8 leading-relaxed">
            We understand that in the industrial sector, downtime isn't just an inconvenience—it's a critical loss. 
            Our teams work with surgical accuracy to ensure your infrastructure remains resilient.
          </p>
          
          {/* Two Pillars */}
          <div className="space-y-6">
            <div className='flex items-center gap-3'>
              <ShieldCheck className='text-xl w-8 h-8' />
              <div>
                <h3 className="text-headline-sm font-bold text-on-background mb-2">
                    Safety First Protocols
                </h3>
                <p className="text-body-md text-on-surface-variant">
                    Zero-incident workplace commitment across all high-voltage environments.
                </p>
               </div> 
            </div>
            {/* <div className='industrial-gradient flex items-center px-6 py-4 max-w-xs'>
                <Award className='text-xl w-8 h-8 text-white' />
                <div className='flex-column px-6 '>
                    <h3 className="text-white font-bold text-on-background mb-2">
                        ISO 9001
                    </h3>
                    <p className="text-white text-on-surface-variant">
                        CERTIFIED ENGINEERING STANDARDS
                    </p>
                </div>
            </div> */}
          </div>
        </div>

        {/* Right Image */}
        <div className="relative h-[500px] lg:h-[600px] overflow-hidden">
          <Image
            src="/images/precision-safety.png"
            alt="Industrial precision and safety"
            fill
            className="object-contain saturate-[0.9]"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    </SectionContainer>
  );
}