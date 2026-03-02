export default function Stats() {
  const stats = [
    {
      icon: '👤',
      value: '30+',
      label: 'YEARS EXPERIENCE',
    },
    {
      icon: '📁',
      value: '50+',
      label: 'PROJECTS COMPLETED',
    },
    {
      icon: '✓',
      value: 'ISO 9001',
      label: 'CERTIFIED',
    },
  ];

  return (
    <section className="relative -mt-20 z-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto bg-gray-900 text-white py-12 px-8 rounded-lg shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="flex items-center justify-center space-x-4">
                <div className="text-5xl">{stat.icon}</div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-primary">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}