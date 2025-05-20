interface FeatureProps {
  title: string;
  description: string;
}

function Feature({ title, description }: FeatureProps) {
  return (
    <div className="p-8">
      <h3 className="text-xl font-semibold mb-4 text-darkBrown">{title}</h3>
      <p className="text-mediumBrown">{description}</p>
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
    <section className="w-full bg-beige py-12">
      <div className="max-w-3xl mx-auto px-4 md:px-8 lg:px-12 text-center">
        <h2 className="text-3xl font-bold text-darkBrown mb-2">AJ's Cakes</h2>
        <h3 className="text-lg text-darkBrown mb-6 font-semibold">Where every slice tells a story (and it's a sweet one!)</h3>
        <p className="text-base md:text-lg text-darkBrown/80 mb-8">
          We're all about fun, flavour, and frosting! From birthdays to "just because" days, we bake cakes that taste as good as they look. Custom designs, bold flavours, and a whole lot of joy — that's our recipe for happiness.
        </p>
      </div>
    </section>
  );
} 