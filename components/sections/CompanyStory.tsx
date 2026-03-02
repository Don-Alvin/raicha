export default function CompanyStory() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Placeholder */}
          <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg h-96 flex items-center justify-center text-8xl">
            ⚡
          </div>

          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Story
            </h2>
            <div className="space-y-4 text-gray-600 text-lg">
              <p>
                Since 1994, Raicha has been at the forefront of electrical contracting 
                and power distribution in East Africa. What started as a small electrical 
                contracting firm has grown into one of the region's most trusted names in 
                infrastructure development.
              </p>
              <p>
                With over three decades of experience, we have successfully completed more 
                than 500 projects across Kenya, Uganda, Tanzania, and Rwanda. Our commitment 
                to excellence and innovation has made us the preferred partner for both 
                public and private sector clients.
              </p>
              <p>
                Today, we specialize in electrical installations, power distribution systems 
                up to 33kV, renewable energy solutions, and specialized systems including 
                structured cabling, fire alarms, and security systems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}