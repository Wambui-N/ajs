import Hero from "@/components/Hero";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Catalog from "@/components/Catalog";
import FeaturedCakes from "@/components/FeaturedCakes";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Gallery />
      <Catalog />
      <FeaturedCakes />
      <Contact />
    </div>
  );
}
