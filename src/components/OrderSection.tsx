import OrderForm from "./OrderForm";

const priceList = [
  { flavour: "Vanilla cake", prices: [2500, 3500, 4500] },
  { flavour: "Banana cake", prices: [2500, 3500, 4500] },
  { flavour: "Lemon cake", prices: [2500, 3500, 4500] },
  { flavour: "Carrot cake", prices: [2500, 3500, 4500] },
  { flavour: "Marble cake", prices: [2500, 3500, 4500] },
  { flavour: "Orange mint cake", prices: [3000, 3800, 4800] },
  { flavour: "Passion & zest cake", prices: [3000, 3800, 4800] },
  { flavour: "Fruit cake", prices: [3000, 3800, 4800] },
  { flavour: "Red velvet", prices: [3000, 3800, 4800] },
  { flavour: "White forest", prices: [3000, 3800, 4800] },
];

export default function OrderSection() {
  return (
    <section className="w-full bg-beige py-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row gap-10 md:gap-16 items-start justify-center">
        {/* Menu/Price List */}
        <div className="w-full md:w-1/2 max-w-md bg-lightPink/40 rounded-2xl shadow-lg border border-beige p-6 mb-8 md:mb-0">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-darkBrown text-center">Cake Menu</h2>
          <table className="w-full text-left text-darkBrown">
            <thead>
              <tr className="border-b border-pink-200">
                <th className="py-2 font-semibold">Cake</th>
                <th className="py-2 font-semibold text-center">1 KG</th>
                <th className="py-2 font-semibold text-center">2 KG</th>
                <th className="py-2 font-semibold text-center">3 KG</th>
              </tr>
            </thead>
            <tbody>
              {priceList.map((item) => (
                <tr key={item.flavour} className="border-b border-pink-100 last:border-0">
                  <td className="py-2 pr-2">{item.flavour}</td>
                  {item.prices.map((price, i) => (
                    <td key={i} className="py-2 text-center">KES {price}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          <p className="mt-4 text-xs text-darkBrown/70 text-center">
            <span className="font-semibold">Note:</span> Prices are for whipped cream cakes. Chocolates, fruit toppings, and toppers are extra.<br />
            Orders must be placed at least 3 days in advance. 50% deposit required. Delivery available in Nairobi (fee applies).
          </p>
        </div>
        {/* Order Form */}
        <div className="w-full md:w-1/2 flex justify-center">
          <OrderForm />
        </div>
      </div>
    </section>
  );
} 