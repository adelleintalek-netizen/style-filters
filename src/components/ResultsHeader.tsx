import { useState } from "react";
import { LayoutGrid, List } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ResultsHeaderProps {
  viewMode: "grid" | "list";
  onViewModeChange: (mode: "grid" | "list") => void;
}

export const ResultsHeader = ({ viewMode, onViewModeChange }: ResultsHeaderProps) => {
  const [sortBy, setSortBy] = useState("featured");

  return (
    <div className="w-full bg-[#fafafa] border-b border-[#e7e7e7] px-4 py-2 flex items-center justify-between">
      {/* Results count */}
      <div className="text-sm text-[#565959]">
        1-48 of over 30,000 results for{" "}
        <span className="text-[#c45500] font-medium">"potato"</span>
      </div>

      {/* Right side controls */}
      <div className="flex items-center gap-3">
        {/* View toggle */}
        <div className="flex items-center border border-[#d5d9d9] rounded overflow-hidden">
          <Button
            variant="ghost"
            size="icon"
            className={`h-8 w-8 rounded-none ${
              viewMode === "grid"
                ? "bg-[#ededed] text-[#0f1111]"
                : "bg-white text-[#565959] hover:bg-[#f7fafa]"
            }`}
            onClick={() => onViewModeChange("grid")}
          >
            <LayoutGrid className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className={`h-8 w-8 rounded-none border-l border-[#d5d9d9] ${
              viewMode === "list"
                ? "bg-[#ededed] text-[#0f1111]"
                : "bg-white text-[#565959] hover:bg-[#f7fafa]"
            }`}
            onClick={() => onViewModeChange("list")}
          >
            <List className="h-4 w-4" />
          </Button>
        </div>

        {/* Sort dropdown */}
        <Select value={sortBy} onValueChange={setSortBy}>
          <SelectTrigger className="h-8 w-[160px] text-sm bg-[#f0f2f2] border-[#d5d9d9] hover:bg-[#e3e6e6] focus:ring-[#e77600] focus:ring-offset-0">
            <span className="text-[#0f1111]">Sort by: </span>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="featured">Featured</SelectItem>
            <SelectItem value="price-low">Price: Low to High</SelectItem>
            <SelectItem value="price-high">Price: High to Low</SelectItem>
            <SelectItem value="rating">Avg. Customer Review</SelectItem>
            <SelectItem value="newest">Newest Arrivals</SelectItem>
            <SelectItem value="bestselling">Best Sellers</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};
