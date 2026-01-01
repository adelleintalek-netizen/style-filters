import { useState } from "react";
import { Check } from "lucide-react";

interface CheckboxItem {
  id: string;
  label: string;
  count?: number;
}

interface CheckboxListFilterProps {
  title: string;
  items: CheckboxItem[];
  maxVisible?: number;
}

export const CheckboxListFilter = ({ title, items, maxVisible = 5 }: CheckboxListFilterProps) => {
  const [selected, setSelected] = useState<string[]>([]);
  const [showAll, setShowAll] = useState(false);

  const visibleItems = showAll ? items : items.slice(0, maxVisible);

  const toggleItem = (id: string) => {
    setSelected(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  return (
    <div className="filter-section">
      <div className="filter-header">{title}</div>
      <div className="space-y-0.5">
        {visibleItems.map(item => (
          <label key={item.id} className="filter-checkbox-item">
            <div 
              className={`w-4 h-4 border rounded flex items-center justify-center flex-shrink-0 transition-colors ${
                selected.includes(item.id) 
                  ? 'bg-secondary border-secondary' 
                  : 'border-border bg-background'
              }`}
              onClick={() => toggleItem(item.id)}
            >
              {selected.includes(item.id) && <Check className="w-3 h-3 text-white" />}
            </div>
            <span className="truncate flex-1 min-w-0">{item.label}</span>
            {item.count && <span className="text-muted-foreground flex-shrink-0">({item.count})</span>}
          </label>
        ))}
      </div>
      {items.length > maxVisible && (
        <button 
          className="filter-link mt-1"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? 'Show less' : `See more (${items.length - maxVisible})`}
        </button>
      )}
    </div>
  );
};
