export default function MissionVision() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission */}
          <div className="bg-white p-10 rounded-lg shadow-lg">
            <div className="text-5xl mb-6">🎯</div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              To provide innovative, reliable, and sustainable electrical and power 
              solutions that power East Africa's growth while maintaining the highest 
              standards of safety, quality, and environmental responsibility.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-primary text-white p-10 rounded-lg shadow-lg">
            <div className="text-5xl mb-6">🌟</div>
            <h3 className="text-3xl font-bold mb-4">Our Vision</h3>
            <p className="text-lg leading-relaxed">
              To be East Africa's leading electrical contracting and renewable energy 
              company, recognized for excellence, innovation, and our contribution to 
              sustainable infrastructure development across the region.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}