import { Trophy, Award, Users, Zap, CheckCircle, Shield } from 'lucide-react';

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: Trophy,
      title: '30+ Years Experience',
      description: 'Three decades of proven excellence in electrical contracting',
    },
    {
      icon: Award,
      title: 'ISO 9001 Certified',
      description: 'Quality management system certified to international standards',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Highly skilled and certified electrical engineers and technicians',
    },
    {
      icon: Zap,
      title: 'Latest Technology',
      description: 'We use cutting-edge tools and equipment for all projects',
    },
    {
      icon: CheckCircle,
      title: '500+ Projects',
      description: 'Successfully completed projects across East Africa',
    },
    {
      icon: Shield,
      title: 'Safety First',
      description: 'Strict adherence to safety standards and regulations',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose Raicha?
          </h2>
          <p className="text-gray-600 text-lg">
            The trusted partner for all your electrical needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon;
            return (
              <div
                key={index}
                className="text-center p-6 hover:bg-gray-50 rounded-lg transition-colors duration-300"
              >
                <IconComponent className="mx-auto text-primary mb-4" size={56} strokeWidth={1.5} />
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {reason.title}
                </h3>
                <p className="text-gray-600">{reason.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}