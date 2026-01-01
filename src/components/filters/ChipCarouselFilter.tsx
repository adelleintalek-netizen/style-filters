import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ChipItem {
  id: string;
  label: string;
}

interface ChipCarouselFilterProps {
  title: string;
  items: ChipItem[];
}

export const ChipCarouselFilter = ({ title, items }: ChipCarouselFilterProps) => {
  const [selected, setSelected] = useState<string[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 100;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const toggleItem = (id: string) => {
    setSelected(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  return (
    <div className="filter-section">
      <div className="filter-header">{title}</div>
      <div className="relative">
        <button 
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-5 h-5 bg-background border border-border rounded-full flex items-center justify-center hover:bg-filter-hover"
          onClick={() => scroll('left')}
        >
          <ChevronLeft className="w-3 h-3" />
        </button>
        <div 
          ref={scrollRef}
          className="flex gap-1.5 overflow-x-auto scrollbar-hide px-6"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {items.map(item => (
            <button
              key={item.id}
              className={`chip-item ${selected.includes(item.id) ? 'active' : ''}`}
              onClick={() => toggleItem(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>
        <button 
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-5 h-5 bg-background border border-border rounded-full flex items-center justify-center hover:bg-filter-hover"
          onClick={() => scroll('right')}
        >
          <ChevronRight className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
};
