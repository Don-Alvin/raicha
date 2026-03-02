interface PageHeroProps {
  title: string;
  subtitle: string;
}

export default function PageHero({ title, subtitle }: PageHeroProps) {
  return (
    <section className="relative h-[400px] bg-gradient-to-br from-gray-800 to-gray-900 text-white flex items-center">
      <div className="absolute inset-0 bg-black/40 z-0"></div>
      <div className="relative z-10 container mx-auto px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">{title}</h1>
        <p className="text-xl md:text-2xl text-gray-200">{subtitle}</p>
      </div>
    </section>
  );
}