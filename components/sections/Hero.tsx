import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative h-screen bg-gradient-to-br from-gray-800 to-gray-900 text-white">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero_bg.png"
          alt="Electrical infrastructure in East Africa"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center pb-32">
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Your Integrated Partner for Power, Security, and ICT
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            We provide end-to-end electrical engineering, industrial fabrication, and smart building systems. Whether it’s a high-rise landmark or a specialized medical facility, we power the projects that move the nation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/projects"
              className="bg-primary hover:bg-primary-dark px-8 py-4 rounded-full text-lg font-semibold transition-colors text-center"
            >
              OUR PROJECTS
            </Link>
            <Link
              href="/contact"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-full text-lg font-semibold transition-colors text-center"
            >
              REQUEST A QUOTE
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}