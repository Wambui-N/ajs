import Hero from "@/components/Hero";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import OrderSection from "@/components/OrderSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <OrderSection />
      <Gallery />
      {/* <Contact /> */}
    </div>
  );
}
