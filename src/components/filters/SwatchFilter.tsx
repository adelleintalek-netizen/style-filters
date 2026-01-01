import { useState } from "react";

interface SwatchItem {
  id: string;
  color: string;
  label: string;
}

interface SwatchFilterProps {
  title: string;
  items: SwatchItem[];
  variant?: 'dot' | 'block';
}

export const SwatchFilter = ({ title, items, variant = 'dot' }: SwatchFilterProps) => {
  const [selected, setSelected] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    setSelected(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  return (
    <div className="filter-section">
      <div className="filter-header">{title}</div>
      <div className="flex flex-wrap gap-2">
        {items.map(item => (
          <button
            key={item.id}
            className={`${variant === 'dot' ? 'swatch-dot' : 'swatch-block'} ${
              selected.includes(item.id) ? 'active' : ''
            }`}
            style={{ backgroundColor: item.color }}
            onClick={() => toggleItem(item.id)}
            title={item.label}
          />
        ))}
      </div>
    </div>
  );
};
