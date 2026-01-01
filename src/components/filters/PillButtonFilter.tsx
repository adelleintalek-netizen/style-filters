import { useState } from "react";

interface PillItem {
  id: string;
  label: string;
}

interface PillButtonFilterProps {
  title: string;
  items: PillItem[];
  multiSelect?: boolean;
}

export const PillButtonFilter = ({ title, items, multiSelect = true }: PillButtonFilterProps) => {
  const [selected, setSelected] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    if (multiSelect) {
      setSelected(prev => 
        prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
      );
    } else {
      setSelected(prev => prev.includes(id) ? [] : [id]);
    }
  };

  return (
    <div className="filter-section">
      <div className="filter-header">{title}</div>
      <div className="flex flex-wrap gap-1.5">
        {items.map(item => (
          <button
            key={item.id}
            className={`pill-button ${selected.includes(item.id) ? 'active' : ''}`}
            onClick={() => toggleItem(item.id)}
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
};
