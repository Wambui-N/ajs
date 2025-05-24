'use client'

import { useState } from "react"
import OrderForm from "./OrderForm"

const priceList = [
  { 
    flavour: "Vanilla cake", 
    prices: [2500, 3500, 4500],
    image: "/cakes/vanilla.jpg",
    badge: "Popular"
  },
  { 
    flavour: "Banana cake", 
    prices: [2500, 3500, 4500],
    image: "/cakes/banana.jpg"
  },
  { 
    flavour: "Lemon cake", 
    prices: [2500, 3500, 4500],
    image: "/cakes/lemon.jpg"
  },
  { 
    flavour: "Carrot cake", 
    prices: [2500, 3500, 4500],
    image: "/cakes/carrot.jpg"
  },
  { 
    flavour: "Marble cake", 
    prices: [2500, 3500, 4500],
    image: "/cakes/marble.jpg"
  },
  { 
    flavour: "Orange mint cake", 
    prices: [3000, 3800, 4800],
    image: "/cakes/orange-mint.jpg"
  },
  { 
    flavour: "Passion & zest cake", 
    prices: [3000, 3800, 4800],
    image: "/cakes/passion.jpg"
  },
  { 
    flavour: "Fruit cake", 
    prices: [3000, 3800, 4800],
    image: "/cakes/fruit.jpg"
  },
  { 
    flavour: "Red velvet", 
    prices: [3000, 3800, 4800],
    image: "/cakes/red-velvet.jpg"
  },
  { 
    flavour: "White forest", 
    prices: [3000, 3800, 4800],
    image: "/cakes/white-forest.jpg"
  },
]

export default function OrderSection() {
  const [selectedSize, setSelectedSize] = useState(0) // 0: 1KG, 1: 2KG, 2: 3KG
  const [selectedCake, setSelectedCake] = useState<string | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOrder = (cake: string) => {
    setSelectedCake(cake)
    setIsModalOpen(true)
  }

  return (
    <section className="w-full bg-beige py-20 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-darkBrown mb-4">Our Cake Menu</h2>
            <p className="text-darkBrown/70 text-lg mb-8">
              Browse our selection of delicious cakes
            </p>

            {/* Size Filter */}
            <div className="flex justify-center gap-4 mb-12">
              {["1 KG", "2 KG", "3 KG"].map((size, index) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(index)}
                  className={`px-6 py-2 rounded-full transition-all duration-300 ${
                    selectedSize === index
                      ? "bg-lightPink text-white shadow-lg"
                      : "bg-white text-darkBrown hover:bg-lightPink/20"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Cake Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {priceList.map((cake) => (
              <div
                key={cake.flavour}
                className="relative rounded-lg shadow-md overflow-hidden group bg-white flex flex-col min-h-[280px] max-h-[340px] transition-all duration-200 hover:shadow-lg"
              >
                {/* Cake Image with bottom gradient and overlayed content */}
                <div className="relative h-56 w-full flex-1">
                  <img
                    src={cake.image}
                    alt={cake.flavour}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {/* Top left overlay: badge */}
                  {cake.badge && (
                    <div className="absolute top-3 left-3 z-10">
                      <span className="px-2 py-0.5 bg-lightPink text-darkBrown text-xs font-semibold rounded shadow-sm border border-lightPink/60">
                        {cake.badge}
                      </span>
                    </div>
                  )}
                  {/* Bottom gradient overlay */}
                  <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none" />
                  {/* Overlayed content: title/price left, kgs/button right */}
                  <div className="absolute bottom-0 left-0 w-full px-4 pb-4 flex flex-row items-end justify-between z-20">
                    {/* Left: title and price */}
                    <div className="flex flex-col items-start gap-1">
                      <span className="text-darkBrown text-base font-bold drop-shadow-sm">
                        {cake.flavour}
                      </span>
                      <span className="text-lg font-bold text-darkBrown">
                        KES {cake.prices[selectedSize].toLocaleString()}
                      </span>
                    </div>
                    {/* Right: kgs and order button */}
                    <div className="flex flex-col items-end gap-1">
                      <span className="text-xs text-darkBrown/50 mb-1">
                        {selectedSize + 1} KG
                      </span>
                      <button
                        onClick={() => handleOrder(cake.flavour)}
                        className="px-6 py-2 rounded-lg bg-darkBrown text-white font-semibold shadow-sm hover:bg-mediumBrown transition-colors"
                      >
                        Order
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Note Section */}
          {/* <div className="mt-12 p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-lightPink/20 max-w-3xl mx-auto">
            <p className="text-sm text-darkBrown/70 leading-relaxed text-center">
              <span className="font-bold text-darkBrown block mb-2">Note:</span>
              Prices are for whipped cream cakes. Chocolates, fruit toppings, and toppers are extra.
              <br />
              Orders must be placed at least 3 days in advance. 50% deposit required. Delivery available in
              Nairobi (fee applies).
            </p>
          </div> */}
        </div>
      </div>

      {/* Order Modal */}
      {isModalOpen && selectedCake && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-2xl max-w-md w-full max-h-[80vh] overflow-y-auto border border-lightPink/30">
            <div className="p-6 flex flex-col gap-4">
              <div className="flex justify-between items-center mb-2">
                <div>
                  <h3 className="text-xl font-bold text-darkBrown mb-1">
                    Order {selectedCake}
                  </h3>
                  <span className="text-sm text-darkBrown/60">{`${selectedSize + 1} KG`} • <span className="font-semibold text-darkBrown">KES {priceList.find(c => c.flavour === selectedCake)?.prices[selectedSize]?.toLocaleString()}</span></span>
                </div>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-darkBrown/60 hover:text-darkBrown rounded-full p-1 transition-colors"
                  aria-label="Close order modal"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="bg-lightPink/10 rounded-lg p-4 mb-2">
                <OrderForm 
                  initialFlavour={selectedCake}
                  initialSize={`${selectedSize + 1} KG`}
                  onClose={() => setIsModalOpen(false)}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
