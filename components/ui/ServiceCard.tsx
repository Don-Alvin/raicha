interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  features: string[];
  bgColor?: string;
}

export default function ServiceCard({
  icon,
  title,
  description,
  features,
  bgColor = 'bg-white',
}: ServiceCardProps) {
  return (
    <div className={`${bgColor} p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300`}>
      <div className="text-7xl mb-6">{icon}</div>
      <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>
      <div className="border-t border-gray-200 pt-6">
        <h4 className="font-semibold text-gray-900 mb-3">Key Services:</h4>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              <span className="text-gray-600">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}