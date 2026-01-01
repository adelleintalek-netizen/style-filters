import { SearchHeader } from "@/components/SearchHeader";
import { FilterSidebar } from "@/components/FilterSidebar";
import { ProductGrid } from "@/components/ProductGrid";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SearchHeader />
      <div className="flex flex-1 overflow-hidden">
        <FilterSidebar />
        <ProductGrid />
      </div>
    </div>
  );
};

export default Index;
