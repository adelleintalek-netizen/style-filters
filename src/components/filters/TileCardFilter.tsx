import { useState } from "react";

interface TileItem {
  id: string;
  label: string;
  sublabel?: string;
}

interface TileCardFilterProps {
  title: string;
  items: TileItem[];
}

export const TileCardFilter = ({ title, items }: TileCardFilterProps) => {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="filter-section">
      <div className="filter-header">{title}</div>
      <div className="grid grid-cols-2 gap-1.5">
        {items.map(item => (
          <button
            key={item.id}
            className={`tile-card ${selected === item.id ? 'active' : ''}`}
            onClick={() => setSelected(item.id === selected ? null : item.id)}
          >
            <div className="text-xs font-medium truncate">{item.label}</div>
            {item.sublabel && (
              <div className="text-[10px] text-muted-foreground truncate">{item.sublabel}</div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};
