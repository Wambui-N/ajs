"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"

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
]

export default function CakeCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const [direction, setDirection] = useState<"left" | "right">("left")
  const carouselRef = useRef<HTMLDivElement>(null)

  // Auto-scroll timer
  useEffect(() => {
    if (isPaused || isHovering) return

    const interval = setInterval(() => {
      setDirection("left")
      setCurrentIndex((prevIndex) => (prevIndex + 1) % galleryPhotos.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [isPaused, isHovering])

  // Navigate to previous slide
  const prevSlide = () => {
    setDirection("right")
    setCurrentIndex((prevIndex) => (prevIndex - 1 + galleryPhotos.length) % galleryPhotos.length)
  }

  // Navigate to next slide
  const nextSlide = () => {
    setDirection("left")
    setCurrentIndex((prevIndex) => (prevIndex + 1) % galleryPhotos.length)
  }

  // Go to specific slide
  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? "left" : "right")
    setCurrentIndex(index)
  }

  // Toggle pause state
  const togglePause = () => {
    setIsPaused(!isPaused)
  }

  // Animation variants
  const slideVariants = {
    enter: (direction: "left" | "right") => ({
      x: direction === "left" ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: "left" | "right") => ({
      x: direction === "left" ? -1000 : 1000,
      opacity: 0,
    }),
  }

  return (
    <section className="py-16  relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-darkBrown mb-4">Our Cake Gallery</h2>
          <p className="text-darkBrown/70 max-w-2xl mx-auto">
            Browse through our collection of handcrafted cake designs. Get inspired for your next celebration!
          </p>
        </div>

        {/* Carousel container */}
        <div
          ref={carouselRef}
          className="relative mx-auto max-w-5xl h-[300px] md:h-[500px] overflow-hidden rounded-lg shadow-xl bg-beige"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {/* Main carousel */}
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 100, damping: 20 },
                opacity: { duration: 0.2 },
              }}
              className="absolute inset-0 w-full h-full"
            >
              <div className="absolute inset-0 w-full h-full">
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src={galleryPhotos[currentIndex].src || "/placeholder.svg"}
                    alt={galleryPhotos[currentIndex].alt}
                    fill
                    quality={100}
                    priority
                    className="object-contain p-4"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                  />
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-darkBrown/60 to-transparent flex items-end">
                <div className="p-6 text-beige">
                  <h3 className="text-xl md:text-2xl font-medium mb-2">{galleryPhotos[currentIndex].alt}</h3>
                  <p className="text-sm text-beige/80">
                    Photo {currentIndex + 1} of {galleryPhotos.length}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-beige/20 hover:bg-beige/30 backdrop-blur-sm rounded-full p-2 text-beige transition-colors z-10"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-beige/20 hover:bg-beige/30 backdrop-blur-sm rounded-full p-2 text-beige transition-colors z-10"
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Pause/play button */}
          <button
            onClick={togglePause}
            className="absolute top-4 right-4 bg-beige/20 hover:bg-beige/30 backdrop-blur-sm rounded-full p-2 text-beige transition-colors z-10"
            aria-label={isPaused ? "Play slideshow" : "Pause slideshow"}
          >
            {isPaused ? <Play className="h-4 w-4" /> : <Pause className="h-4 w-4" />}
          </button>

          {/* Indicator dots */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
            {galleryPhotos.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={cn(
                  "w-2 h-2 rounded-full transition-all",
                  index === currentIndex ? "bg-beige w-4" : "bg-beige/50 hover:bg-beige/80",
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
        {/* Thumbnail preview */}
        <div className="mt-6 max-w-5xl mx-auto overflow-hidden">
          <div className="flex space-x-2 py-2 px-4 overflow-x-auto scrollbar-hide">
            {galleryPhotos.map((photo, index) => (
              <button
                key={photo.id}
                onClick={() => goToSlide(index)}
                className={cn(
                  "flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-md overflow-hidden transition-all",
                  index === currentIndex
                    ? "ring-2 ring-pink-500 ring-offset-2"
                    : "opacity-70 hover:opacity-100 ring-offset-0",
                )}
              >
                <img
                  src={photo.src || "/placeholder.svg"}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
