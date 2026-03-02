export default function CoreValues() {
  const values = [
    {
      icon: '⭐',
      title: 'Excellence',
      description: 'We deliver the highest quality in every project we undertake.',
    },
    {
      icon: '🤝',
      title: 'Integrity',
      description: 'We conduct business with honesty, transparency, and accountability.',
    },
    {
      icon: '💡',
      title: 'Innovation',
      description: 'We embrace new technologies and creative solutions.',
    },
    {
      icon: '🛡️',
      title: 'Safety',
      description: 'We prioritize the safety of our team, clients, and communities.',
    },
    {
      icon: '🌱',
      title: 'Sustainability',
      description: 'We commit to environmentally responsible practices.',
    },
    {
      icon: '👥',
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
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-6xl mb-4">{value.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {value.title}
              </h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}