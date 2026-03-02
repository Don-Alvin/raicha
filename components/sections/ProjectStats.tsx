export default function ProjectStats() {
  const stats = [
    {
      number: '50+',
      label: 'Completed Projects',
      icon: '✓',
    },
    {
      number: '4',
      label: 'Countries Served',
      icon: '🌍',
    },
    {
      number: '100%',
      label: 'Client Satisfaction',
      icon: '⭐',
    },
    {
      number: '30+',
      label: 'Years Experience',
      icon: '📅',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl mb-3">{stat.icon}</div>
              <div className="text-4xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}