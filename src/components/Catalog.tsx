'use client'

import Image from "next/image";
import { useState } from "react";

const flavors = [
  "Vanilla",
  "Chocolate",
  "Banana",
  "Lemon",
  "Carrot",
  "Marble",
  "Pina Colada",
  "Biscotti",
  "Red Velvet",
  "Orange Mint",
  "Fruit Cake",
  "White Forest",
  "Passion & Zest",
];

const cakes = [
  { name: "Vanilla", img: "/cakes/cake1.jpg" },
  { name: "Chocolate", img: "/cakes/cake2.jpg" },
  { name: "Banana", img: "/cakes/cake3.jpg" },
  { name: "Lemon", img: "/cakes/cake4.jpg" },
  { name: "Carrot", img: "/cakes/cake5.jpg" },
  { name: "Marble", img: "/cakes/cake6.jpg" },
  { name: "Pina Colada", img: "/cakes/cake7.jpg" },
  { name: "Biscotti", img: "/cakes/cake8.jpg" },
  { name: "Red Velvet", img: "/cakes/cake9.jpg" },
  { name: "Orange Mint", img: "/cakes/cake10.jpg" },
  { name: "Fruit Cake", img: "/cakes/cake11.jpg" },
  { name: "White Forest", img: "/cakes/cake12.jpg" },
  { name: "Passion & Zest", img: "/cakes/cake13.jpg" },
];

export default function Catalog() {
  const [selected, setSelected] = useState<string | null>(null);
  const selectedCake = cakes.find(cake => cake.name === selected);

  return (
    <section className="w-full bg-beige py-16">
      <div className="mx-auto max-w-2xl px-4 md:px-8 lg:px-12">
        <h2 className="mb-8 text-center text-3xl font-semibold text-darkBrown">Choose a Flavour</h2>
        {/* Filter Bar */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {flavors.map(flavor => (
            <button
              key={flavor}
              onClick={() => setSelected(flavor)}
              className={`px-4 py-2 rounded-full border text-sm font-medium transition-colors
                ${selected === flavor ? "bg-lightPink text-beige border-lightPink" : "bg-white text-darkBrown border-lightPink hover:bg-lightPink/20"}`}
            >
              {flavor}
            </button>
          ))}
        </div>
        {/* Cake Card */}
        <div className="flex justify-center">
          {selectedCake ? (
            <div className="bg-white rounded-xl shadow-lg flex flex-col items-center p-8 w-full max-w-md">
              <div className="w-48 h-48 mb-6 rounded-xl overflow-hidden border-4 border-lightPink bg-lightPink/20 flex items-center justify-center">
                <Image src={selectedCake.img} alt={selectedCake.name} width={192} height={192} className="object-cover w-full h-full" />
              </div>
              <h3 className="text-2xl font-bold text-darkBrown mb-4">{selectedCake.name}</h3>
              <button className="rounded-full bg-lightPink text-beige px-8 py-2 text-base font-semibold transition-colors hover:bg-mediumBrown">Order</button>
            </div>
          ) : (
            <div className="bg-white rounded-xl shadow flex flex-col items-center p-8 w-full max-w-md">
              <span className="text-darkBrown text-lg">Please select a flavour above to see the cake!</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
