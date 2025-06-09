"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

// Sample gallery photos
const galleryPhotos = [
  {
    id: 1,
    src: "/Pina Colada.jpg",
    alt: "Elegant wedding cake with beige frosting and fresh flowers",
  },
  {
    id: 2,
    src: "/Orange Mint.jpg",
    alt: "Chocolate birthday cake with strawberries",
  },
  {
    id: 3,
    src: "/Carrot Cake.jpg",
    alt: "Colorful unicorn cake with rainbow layers",
  },
  {
    id: 4,
    src: "/Vanilla cake.jpg",
    alt: "Rustic naked cake with berries and flowers",
  },
  {
    id: 5,
    src: "/White Forest.jpg",
    alt: "Elegant cupcake tower with various flavors",
  },
  {
    id: 6,
    src: "/Red Velvet.jpg",
    alt: "Drip cake with chocolate ganache and macarons",
  },
  {
    id: 7,
    src: "/Passion and Zest.jpg",
    alt: "Three-tier wedding cake with gold accents",
  },
];

export default function CakeCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [direction, setDirection] = useState<"left" | "right">("left");
  const carouselRef = useRef<HTMLDivElement>(null);

  // Auto-scroll timer
  useEffect(() => {
    if (isPaused || isHovering) return;

    const interval = setInterval(() => {
      setDirection("left");
      setCurrentIndex((prevIndex) => (prevIndex + 1) % galleryPhotos.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isPaused, isHovering]);

  // Navigate to previous slide
  const prevSlide = () => {
    setDirection("right");
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + galleryPhotos.length) % galleryPhotos.length,
    );
  };

  // Navigate to next slide
  const nextSlide = () => {
    setDirection("left");
    setCurrentIndex((prevIndex) => (prevIndex + 1) % galleryPhotos.length);
  };

  // Go to specific slide
  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? "left" : "right");
    setCurrentIndex(index);
  };

  // Toggle pause state
  const togglePause = () => {
    setIsPaused(!isPaused);
  };

  return (
    <section id="gallery" className="relative min-h-[70vh] overflow-hidden py-20">
      <div className="container max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-darkBrown md:text-5xl">
            Our Cake Gallery
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-darkBrown/70">
            Browse through our collection of handcrafted cake designs. Get
            inspired for your next celebration!
          </p>
        </motion.div>

        {/* Carousel container */}
        <div
          ref={carouselRef}
          className="relative mx-auto flex h-[340px] max-w-2xl items-center overflow-hidden rounded-2xl md:h-[420px]"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {/* Main carousel */}
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              initial={{ opacity: 0, x: direction === "left" ? 1000 : -1000 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction === "left" ? -1000 : 1000 }}
              transition={{
                x: { type: "spring", stiffness: 100, damping: 20 },
                opacity: { duration: 0.2 },
              }}
              className="absolute inset-0 h-full w-full"
            >
              <div className="absolute inset-0 h-full w-full">
                <div className="relative flex h-full w-full items-center justify-center">
                  <Image
                    src={galleryPhotos[currentIndex].src || "/placeholder.svg"}
                    alt={galleryPhotos[currentIndex].alt}
                    fill
                    quality={100}
                    priority
                    className="rounded-2xl object-cover md:object-contain"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                  />
                </div>
              </div>
              {/* Soft gradient overlay at bottom for text readability */}
              <div className="pointer-events-none absolute inset-0 flex items-end rounded-2xl" />
            </motion.div>
          </AnimatePresence>

          {/* Navigation arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 z-10 -translate-y-1/2 transform rounded-full bg-lightPink/70 p-3 text-darkBrown shadow-md transition-colors hover:bg-lightPink/40"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 z-10 -translate-y-1/2 transform rounded-full bg-lightPink/70 p-3 text-darkBrown shadow-md transition-colors hover:bg-lightPink/40"
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Pause/play button */}
          <button
            onClick={togglePause}
            className="absolute right-4 top-4 z-10 rounded-full bg-lightPink/70 p-2 text-darkBrown shadow-md transition-colors hover:bg-lightPink/40"
            aria-label={isPaused ? "Play slideshow" : "Pause slideshow"}
          >
            {isPaused ? (
              <Play className="h-4 w-4" />
            ) : (
              <Pause className="h-4 w-4" />
            )}
          </button>

          {/* Indicator dots */}
          <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 transform space-x-2">
            {galleryPhotos.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={cn(
                  "h-2 w-2 rounded-full border border-lightPink/60 transition-all",
                  index === currentIndex
                    ? "w-4 bg-darkBrown"
                    : "bg-white hover:bg-darkBrown/40",
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Caption below carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-8 text-center"
        >
          <h3 className="mb-2 text-xl font-semibold text-darkBrown drop-shadow-sm md:text-2xl">
            {galleryPhotos[currentIndex].alt}
          </h3>
          <p className="text-sm text-darkBrown/60">
            Photo {currentIndex + 1} of {galleryPhotos.length}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
