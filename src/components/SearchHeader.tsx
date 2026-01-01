import { Search, ShoppingCart, MapPin, Menu } from "lucide-react";

export const SearchHeader = () => {
  return (
    <header className="bg-secondary text-secondary-foreground">
      {/* Main Header */}
      <div className="flex items-center gap-3 px-3 py-2">
        {/* Logo */}
        <div className="flex items-center gap-1 flex-shrink-0">
          <span className="text-xl font-bold text-primary">a</span>
          <span className="text-lg font-semibold">mazon</span>
        </div>

        {/* Location */}
        <div className="hidden md:flex items-center gap-1 text-xs flex-shrink-0">
          <MapPin className="w-4 h-4" />
          <div>
            <div className="text-muted-foreground text-[10px]">Deliver to</div>
            <div className="font-semibold">United States</div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="flex-1 flex max-w-3xl">
          <select className="h-9 px-2 text-xs bg-muted text-foreground border-0 rounded-l focus:outline-none focus:ring-1 focus:ring-primary">
            <option>All</option>
            <option>Electronics</option>
            <option>Computers</option>
            <option>Books</option>
          </select>
          <input
            type="text"
            placeholder="Search Amazon"
            className="flex-1 h-9 px-3 text-sm text-foreground bg-background border-0 focus:outline-none focus:ring-1 focus:ring-primary"
          />
          <button className="h-9 w-10 bg-primary flex items-center justify-center rounded-r hover:bg-primary/90">
            <Search className="w-5 h-5 text-secondary" />
          </button>
        </div>

        {/* Account */}
        <div className="hidden md:block text-xs flex-shrink-0">
          <div className="text-muted-foreground text-[10px]">Hello, sign in</div>
          <div className="font-semibold">Account & Lists</div>
        </div>

        {/* Orders */}
        <div className="hidden md:block text-xs flex-shrink-0">
          <div className="text-muted-foreground text-[10px]">Returns</div>
          <div className="font-semibold">& Orders</div>
        </div>

        {/* Cart */}
        <div className="flex items-center gap-1 flex-shrink-0">
          <div className="relative">
            <ShoppingCart className="w-7 h-7" />
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-secondary text-xs font-bold rounded-full flex items-center justify-center">
              3
            </span>
          </div>
          <span className="hidden md:inline text-sm font-semibold">Cart</span>
        </div>
      </div>

      {/* Sub Header */}
      <div className="flex items-center gap-4 px-3 py-1.5 bg-secondary/80 text-xs overflow-x-auto">
        <button className="flex items-center gap-1 font-semibold whitespace-nowrap hover:text-primary">
          <Menu className="w-4 h-4" />
          All
        </button>
        <a href="#" className="whitespace-nowrap hover:text-primary">Today's Deals</a>
        <a href="#" className="whitespace-nowrap hover:text-primary">Customer Service</a>
        <a href="#" className="whitespace-nowrap hover:text-primary">Registry</a>
        <a href="#" className="whitespace-nowrap hover:text-primary">Gift Cards</a>
        <a href="#" className="whitespace-nowrap hover:text-primary">Sell</a>
      </div>
    </header>
  );
};
