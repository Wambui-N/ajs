import Image from "next/image";

interface CakeCardProps {
  id: number;
  title: string;
  description: string;
}

function CakeCard({ id, title, description }: CakeCardProps) {
  return (
    <div className="bg-[#eddbc2] rounded-lg shadow-lg overflow-hidden border border-[#391212]/10">
      <div className="relative h-64">
        <Image
          src={`/cake-${id}.jpg`}
          alt={`${title}`}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold mb-2 text-[#391212]">{title}</h3>
        <p className="text-sm text-[#74342b] mb-4">{description}</p>
        <button className="w-full bg-[#d18f8f] hover:bg-[#74342b] text-[#eddbc2] py-2 rounded-md text-sm transition-colors">
          View Details
        </button>
      </div>
    </div>
  );
}

export default function FeaturedCakes() {
  const cakes = [
    {
      id: 1,
      title: "Signature Chocolate Cake",
      description: "Rich chocolate layers with ganache filling"
    },
    {
      id: 2,
      title: "Vanilla Dream Cake",
      description: "Light and fluffy vanilla sponge with fresh cream"
    },
    {
      id: 3,
      title: "Red Velvet Delight",
      description: "Classic red velvet with cream cheese frosting"
    }
  ];

  return (
    <section className="py-20 px-8 md:px-12 lg:px-16 max-w-7xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-[#391212]">
        Our Featured Cakes
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cakes.map((cake) => (
          <CakeCard
            key={cake.id}
            id={cake.id}
            title={cake.title}
            description={cake.description}
          />
        ))}
      </div>
    </section>
  );
} 