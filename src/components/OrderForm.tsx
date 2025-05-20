'use client'

import { useState } from "react";

const priceList: Record<string, number[]> = {
  "Vanilla cake": [2500, 3500, 4500],
  "Banana cake": [2500, 3500, 4500],
  "Lemon cake": [2500, 3500, 4500],
  "Carrot cake": [2500, 3500, 4500],
  "Marble cake": [2500, 3500, 4500],
  "Orange mint cake": [3000, 3800, 4800],
  "Passion & zest cake": [3000, 3800, 4800],
  "Fruit cake": [3000, 3800, 4800],
  "Red velvet": [3000, 3800, 4800],
  "White forest": [3000, 3800, 4800],
};

const flavours = Object.keys(priceList);
const kgs = ["1 KG", "2 KG", "3 KG"];

export default function OrderForm() {
  const [flavour, setFlavour] = useState(flavours[0]);
  const [kg, setKg] = useState(kgs[0]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  // Get price based on selection
  const price = priceList[flavour][kgs.indexOf(kg)];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hello, I would like to order a ${kg} ${flavour}.\nName: ${name}\nPhone: ${phone}\nPrice: KES ${price}`;
    const url = `https://wa.me/254712137749?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-lg space-y-5 bg-lightPink/40 p-8 rounded-2xl shadow-lg border border-beige">
      <h2 className="text-2xl md:text-3xl font-bold mb-2 text-darkBrown text-center">Order a Cake</h2>
      <p className="text-darkBrown/80 text-center mb-6">Select your cake options and place your order via WhatsApp!</p>
      <div>
        <label className="block mb-1 font-medium text-darkBrown">Flavour</label>
        <select value={flavour} onChange={e => setFlavour(e.target.value)} className="w-full border rounded p-2 bg-white text-darkBrown">
          {flavours.map(f => <option key={f}>{f}</option>)}
        </select>
      </div>
      <div>
        <label className="block mb-1 font-medium text-darkBrown">Weight</label>
        <select value={kg} onChange={e => setKg(e.target.value)} className="w-full border rounded p-2 bg-white text-darkBrown">
          {kgs.map(k => <option key={k}>{k}</option>)}
        </select>
      </div>
      <div>
        <p className="text-lg font-semibold text-darkBrown">Price: <span className="text-pink-700">KES {price}</span></p>
      </div>
      <div>
        <label className="block mb-1 font-medium text-darkBrown">Your Name</label>
        <input value={name} onChange={e => setName(e.target.value)} required className="w-full border rounded p-2 bg-white text-darkBrown" />
      </div>
      <div>
        <label className="block mb-1 font-medium text-darkBrown">Your Phone</label>
        <input value={phone} onChange={e => setPhone(e.target.value)} required className="w-full border rounded p-2 bg-white text-darkBrown" />
      </div>
      <button type="submit" className="w-full bg-mediumBrown text-beige py-2 rounded font-semibold hover:bg-pink-700 transition">Order via WhatsApp</button>
    </form>
  );
} 