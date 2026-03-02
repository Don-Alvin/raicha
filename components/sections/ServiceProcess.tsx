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
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our Process
          </h2>
          <p className="text-gray-400 text-lg">
            A proven approach to delivering excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                {step.number}
              </div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-gray-400 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}