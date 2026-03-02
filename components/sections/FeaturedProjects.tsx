import Link from 'next/link';

export default function FeaturedProjects() {
  const projects = [
    {
      title: 'Solar Installation Project',
      category: 'Renewable Energy',
      image: '🏭',
    },
    {
      title: 'Commercial Building Power',
      category: 'Power Distribution',
      image: '🏢',
    },
    {
      title: 'Industrial Electrical System',
      category: 'Electrical Installation',
      image: '⚙️',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            FEATURED PROJECTS
          </h2>
          <p className="text-gray-600 text-lg">
            Showcasing our excellence in electrical contracting
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-64 bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center text-8xl">
                {project.image}
              </div>
              <div className="p-6">
                <p className="text-primary text-sm font-semibold mb-2">
                  {project.category}
                </p>
                <h3 className="text-xl font-bold text-gray-900">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/projects"
            className="inline-block bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-semibold transition-colors"
          >
            VIEW ALL PROJECTS
          </Link>
        </div>
      </div>
    </section>
  );
}