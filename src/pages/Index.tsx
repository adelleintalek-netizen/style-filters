import { useState } from "react";
import { FilterSidebar } from "@/components/FilterSidebar";
import { ResultsHeader } from "@/components/ResultsHeader";

const Index = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  return (
    <div className="min-h-screen bg-muted/30 flex flex-col">
      <ResultsHeader viewMode={viewMode} onViewModeChange={setViewMode} />
      <FilterSidebar />
    </div>
  );
};

export default Index;
