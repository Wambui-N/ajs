import Image from "next/image";

const galleryImages = [
  "/cakes/cake1.jpg",
  "/cakes/cake2.jpg",
  "/cakes/cake3.jpg",
  "/cakes/cake4.jpg",
  "/cakes/cake5.jpg",
  "/cakes/cake6.jpg",
  "/cakes/cake7.jpg",
  "/cakes/cake8.jpg",
];

export default function Gallery() {
  return (
    <section className="w-full bg-beige py-16">
      <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-12">
        <h2 className="text-3xl font-bold text-darkBrown mb-8 text-center">Cake Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {galleryImages.map((src, i) => (
            <div key={src} className="rounded-xl overflow-hidden bg-white shadow hover:shadow-lg transition-shadow">
              <Image src={src} alt={`Gallery cake ${i + 1}`} width={400} height={300} className="object-cover w-full h-56" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 