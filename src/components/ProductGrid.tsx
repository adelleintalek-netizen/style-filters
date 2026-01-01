import { ProductCard } from "./ProductCard";

const mockProducts = [
  {
    id: 1,
    title: "Apple AirPods Pro (2nd Generation) Wireless Ear Buds with USB-C Charging",
    price: 189.99,
    originalPrice: 249.99,
    rating: 4.7,
    reviews: 89432,
    image: "https://via.placeholder.com/200x200/EAEDED/232F3E?text=AirPods",
    prime: true,
    badge: "Best Seller",
  },
  {
    id: 2,
    title: "Samsung Galaxy Watch 6 Classic 47mm Smartwatch Bluetooth",
    price: 349.99,
    rating: 4.5,
    reviews: 12543,
    image: "https://via.placeholder.com/200x200/EAEDED/232F3E?text=Watch",
    prime: true,
  },
  {
    id: 3,
    title: "Anker USB C Charger, 735 Charger (Nano II 65W), PPS 3-Port Fast Compact",
    price: 35.99,
    originalPrice: 45.99,
    rating: 4.8,
    reviews: 45678,
    image: "https://via.placeholder.com/200x200/EAEDED/232F3E?text=Charger",
    prime: true,
    badge: "Limited Deal",
  },
  {
    id: 4,
    title: "Echo Dot (5th Gen, 2022 release) Smart speaker with Alexa",
    price: 29.99,
    originalPrice: 49.99,
    rating: 4.6,
    reviews: 234567,
    image: "https://via.placeholder.com/200x200/EAEDED/232F3E?text=Echo",
    prime: true,
  },
  {
    id: 5,
    title: "Bose QuietComfort Ultra Wireless Noise Cancelling Headphones",
    price: 379.00,
    originalPrice: 429.00,
    rating: 4.4,
    reviews: 8932,
    image: "https://via.placeholder.com/200x200/EAEDED/232F3E?text=Bose",
    prime: true,
  },
  {
    id: 6,
    title: "Kindle Paperwhite (16 GB) – Now with a 6.8\" display and adjustable warm light",
    price: 139.99,
    rating: 4.7,
    reviews: 156789,
    image: "https://via.placeholder.com/200x200/EAEDED/232F3E?text=Kindle",
    prime: true,
    badge: "Amazon's Choice",
  },
  {
    id: 7,
    title: "Fire TV Stick 4K Max streaming device, Wi-Fi 6E, Alexa Voice Remote",
    price: 39.99,
    originalPrice: 59.99,
    rating: 4.6,
    reviews: 98765,
    image: "https://via.placeholder.com/200x200/EAEDED/232F3E?text=FireTV",
    prime: true,
  },
  {
    id: 8,
    title: "Apple iPad (10th Generation): with A14 Bionic chip, 10.9-inch Liquid Retina",
    price: 349.00,
    rating: 4.8,
    reviews: 23456,
    image: "https://via.placeholder.com/200x200/EAEDED/232F3E?text=iPad",
    prime: true,
  },
];

export const ProductGrid = () => {
  return (
    <div className="flex-1 p-4 bg-muted/30 overflow-y-auto">
      {/* Results Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="text-sm">
          <span className="text-muted-foreground">1-48 of over</span>
          <span className="font-semibold"> 100,000 results</span>
          <span className="text-muted-foreground"> for </span>
          <span className="font-semibold text-primary">"electronics"</span>
        </div>
        <div className="flex items-center gap-2 text-xs">
          <span className="text-muted-foreground">Sort by:</span>
          <select className="border border-border rounded px-2 py-1 bg-background focus:outline-none focus:ring-1 focus:ring-primary">
            <option>Featured</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Avg. Customer Review</option>
            <option>Newest Arrivals</option>
          </select>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {mockProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-6 gap-1">
        <button className="px-3 py-1 text-xs border border-border rounded hover:bg-filter-hover">
          Previous
        </button>
        {[1, 2, 3, 4, 5].map((page) => (
          <button
            key={page}
            className={`px-3 py-1 text-xs border rounded ${
              page === 1
                ? 'border-primary bg-filter-active font-semibold'
                : 'border-border hover:bg-filter-hover'
            }`}
          >
            {page}
          </button>
        ))}
        <button className="px-3 py-1 text-xs border border-border rounded hover:bg-filter-hover">
          Next
        </button>
      </div>
    </div>
  );
};
