import { Users, FolderCheck, Award } from 'lucide-react';

export default function Stats() {
  const stats = [
    {
      icon: <Users className="w-8 h-8 text-white" strokeWidth={1.5} />,
      value: '30+',
      label: 'YEARS EXPERIENCE',
    },
    {
      icon: <FolderCheck className="w-8 h-8 text-white" strokeWidth={1.5} />,
      value: '50+',
      label: 'PROJECTS COMPLETED',
    },
    {
      icon: <Award className="w-8 h-8 text-white" strokeWidth={1.5} />,
      value: 'ISO 9001',
      label: 'CERTIFIED',
    },
  ];

  return (
    <section className="relative z-20 -mt-16 lg:-mt-20 ">
      <div className="container mx-auto px-4 lg:px-8 ">
        <div className="max-w-5xl mx-auto bg-on-background py-10 lg:py-12 px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="flex items-center justify-center space-x-4"
              >
                <div className="flex-shrink-0">
                  {stat.icon}
                </div>
                <div>
                  <div className="text-display-sm font-bold text-white leading-none">
                    {stat.value}
                  </div>
                  <div className="text-label-sm text-on-surface-variant mt-1 tracking-wide">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}