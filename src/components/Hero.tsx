import Image from "next/image";

export default function Hero() {
  return (
    <header className="relative min-h-[70vh] flex flex-col justify-center pt-20 pb-8">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          {/* Headline and Subheading */}
          <div className="flex-1">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#391212] leading-tight mb-2">
              Sweet Moments,<br />
              <span className="text-[#74342b]">Delicious Memories</span>
            </h1>
            <p className="text-base md:text-lg text-[#391212]/80 mb-0">
              Your special occasion, made better!
            </p>
          </div>
          {/* Learn More Button */}
          <div className="flex-1 flex md:justify-end items-center mt-4 md:mt-0">
            <button className="flex items-center gap-2 bg-[#d18f8f] hover:bg-[#74342b] text-beige px-6 py-2 rounded-full text-sm font-medium transition-colors shadow">
              Learn More
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
        {/* Banner Image */}
        <div className="mt-8 rounded-lg overflow-hidden shadow-lg border border-beige bg-beige">
          <div className="relative w-full h-[320px] md:h-[420px] lg:h-[500px]">
            <Image
              src="/hero cake.jpg"
              alt="Beautiful cake display"
              fill
              className="object-cover object-12%"
              priority
            />
          </div>
        </div>
      </div>
    </header>
  );
} 