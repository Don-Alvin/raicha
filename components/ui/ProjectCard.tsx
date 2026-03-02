interface ProjectCardProps {
  title: string;
  category: string;
  location: string;
  year: string;
  description: string;
  image: string;
}

export default function ProjectCard({
  title,
  category,
  location,
  year,
  description,
  image,
}: ProjectCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
      {/* Image */}
      <div className="h-64 bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center text-8xl">
        {image}
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="text-primary text-sm font-semibold">{category}</span>
          <span className="text-gray-500 text-sm">{year}</span>
        </div>
        
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
        
        <div className="flex items-center text-gray-600 text-sm mb-4">
          <span className="mr-1">📍</span>
          <span>{location}</span>
        </div>
        
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}