'use client'

import { useState } from "react"

interface OrderFormProps {
  initialFlavour: string
  initialSize: string
  onClose: () => void
}

const priceList: { [key: string]: number[] } = {
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
}

export default function OrderForm({ initialFlavour, initialSize, onClose }: OrderFormProps) {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Get price based on selection
  const getPrice = () => {
    const sizeIndex = parseInt(initialSize.split(" ")[0]) - 1
    return priceList[initialFlavour]?.[sizeIndex] || 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
      const message = `Hello, I'm ${name} and I would like to order a ${initialSize} ${initialFlavour}.`
    const url = `https://wa.me/254746476788?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
    onClose()
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="bg-lightPink/10 p-4 rounded-lg">
        <div className="flex justify-between items-center mb-2">
          <span className="text-darkBrown font-medium">{initialFlavour}</span>
          <span className="text-darkBrown font-bold text-xl">
            KES {getPrice().toLocaleString()}
          </span>
        </div>
        <div className="text-sm text-darkBrown/60">
          Size: {initialSize}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-darkBrown mb-2">
          Your Name
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-3 rounded-lg border border-lightPink/20 focus:ring-2 focus:ring-lightPink focus:border-transparent"
          required
          placeholder="Enter your name"
        />
      </div>

      <div className="bg-lightPink/20 p-4 rounded-lg">
        <p className="text-sm text-darkBrown/70">
          <span className="font-bold text-darkBrown block mb-2">Note:</span>
          Prices are for whipped cream cakes. Chocolates, fruit toppings, and toppers are extra.
          <br />
          Orders must be placed at least 3 days in advance. 50% deposit required. Delivery available in
          Nairobi (fee applies).
        </p>
      </div>

      <div className="flex justify-end space-x-4">
        <button
          type="button"
          onClick={onClose}
          className="px-6 py-2 rounded-lg bg-lightPink text-darkBrown hover:bg-lightPink/10 transition-colors"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={isSubmitting}
          className="px-6 py-2 rounded-lg bg-darkBrown text-white hover:bg-mediumBrown transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Processing..." : "Order via WhatsApp"}
        </button>
      </div>
    </form>
  )
} 