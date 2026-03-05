import { Star, Handshake, Lightbulb, Shield, Leaf, Users } from 'lucide-react';

export default function CoreValues() {
  const values = [
    {
      icon: Star,
      title: 'Excellence',
      description: 'We deliver the highest quality in every project we undertake.',
    },
    {
      icon: Handshake,
      title: 'Integrity',
      description: 'We conduct business with honesty, transparency, and accountability.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We embrace new technologies and creative solutions.',
    },
    {
      icon: Shield,
      title: 'Safety',
      description: 'We prioritize the safety of our team, clients, and communities.',
    },
    {
      icon: Leaf,
      title: 'Sustainability',
      description: 'We commit to environmentally responsible practices.',
    },
    {
      icon: Users,
      title: 'Teamwork',
      description: 'We collaborate effectively to achieve shared goals.',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Core Values
          </h2>
          <p className="text-gray-600 text-lg">
            The principles that guide everything we do
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-lg hover:shadow-xl transition-shadow duration-300"
              >
                <IconComponent className="text-primary mb-4" size={56} strokeWidth={1.5} />
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}