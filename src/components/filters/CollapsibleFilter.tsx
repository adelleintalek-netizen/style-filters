import { useState } from "react";
import { ChevronDown, ChevronUp, Check } from "lucide-react";

interface CollapsibleItem {
  id: string;
  label: string;
}

interface CollapsibleFilterProps {
  title: string;
  items: CollapsibleItem[];
  defaultOpen?: boolean;
}

export const CollapsibleFilter = ({ title, items, defaultOpen = true }: CollapsibleFilterProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const [selected, setSelected] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    setSelected(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  return (
    <div className="filter-section">
      <button 
        className="filter-header w-full"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>
        {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
      </button>
      {isOpen && (
        <div className="space-y-0.5 mt-2">
          {items.map(item => (
            <label 
              key={item.id} 
              className="filter-checkbox-item"
              onClick={() => toggleItem(item.id)}
            >
              <div 
                className={`w-4 h-4 border rounded flex items-center justify-center flex-shrink-0 transition-colors ${
                  selected.includes(item.id) 
                    ? 'bg-secondary border-secondary' 
                    : 'border-border bg-background'
                }`}
              >
                {selected.includes(item.id) && <Check className="w-3 h-3 text-white" />}
              </div>
              <span className="truncate">{item.label}</span>
            </label>
          ))}
        </div>
      )}
    </div>
  );
};
