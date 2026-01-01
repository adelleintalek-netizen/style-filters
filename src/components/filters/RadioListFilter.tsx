import { useState } from "react";

interface RadioItem {
  id: string;
  label: string;
  count?: number;
}

interface RadioListFilterProps {
  title: string;
  items: RadioItem[];
}

export const RadioListFilter = ({ title, items }: RadioListFilterProps) => {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="filter-section">
      <div className="filter-header">{title}</div>
      <div className="space-y-0.5">
        {items.map(item => (
          <label 
            key={item.id} 
            className="filter-radio-item"
            onClick={() => setSelected(item.id)}
          >
            <div 
              className={`w-4 h-4 border rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
                selected === item.id 
                  ? 'border-secondary' 
                  : 'border-border bg-background'
              }`}
            >
              {selected === item.id && (
                <div className="w-2 h-2 rounded-full bg-secondary" />
              )}
            </div>
            <span className="truncate flex-1 min-w-0">{item.label}</span>
            {item.count && <span className="text-muted-foreground flex-shrink-0">({item.count})</span>}
          </label>
        ))}
      </div>
    </div>
  );
};
