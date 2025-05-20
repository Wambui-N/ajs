import Image from "next/image";

interface FeatureProps {
  title: string;
  description: string;
}

function Feature({ title, description }: FeatureProps) {
  return (
    <div className="p-6 bg-lightPink/40 rounded-lg shadow flex-1 min-w-[180px]">
      <h3 className="text-lg font-semibold mb-2 text-darkBrown">{title}</h3>
      <p className="text-darkBrown/80 text-sm">{description}</p>
    </div>
  );
}

export default function About() {
  const features = [
    {
      title: "Custom Designs",
      description: "Personalized cakes for your special day"
    },
    {
      title: "Fresh Ingredients",
      description: "Made with the finest quality ingredients"
    },
    {
      title: "Fast Delivery",
      description: "Reliable delivery to your location"
    }
  ];

  return (
    <section className="w-full bg-beige py-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-10 md:gap-16">
        {/* About Image */}
        <div className="relative w-full md:w-1/2 h-[260px] md:h-[340px] lg:h-[400px] rounded-[32px] overflow-hidden shadow-lg border border-beige bg-beige flex-shrink-0">
          <Image 
            src="/about.jpg"
            alt="About AJ's Cakes"
            fill
            className="object-cover"
            priority
          />
        </div>
        {/* About Text */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-darkBrown mb-2">AJ's Cakes</h2>
          <h3 className="text-lg md:text-xl text-darkBrown mb-6 font-semibold">Where every slice tells a story (and it's a sweet one!)</h3>
          <p className="text-base md:text-lg text-darkBrown/80 mb-8">
            We're all about fun, flavour, and frosting! From birthdays to "just because" days, we bake cakes that taste as good as they look. Custom designs, bold flavours, and a whole lot of joy — that's our recipe for happiness.
          </p>
        </div>
      </div>
      {/* Features Row */}
      <div className="container mx-auto px-4 mt-10 flex flex-col md:flex-row gap-6 md:gap-8 justify-center">
        {features.map((f) => (
          <Feature key={f.title} title={f.title} description={f.description} />
        ))}
      </div>
    </section>
  );
} 