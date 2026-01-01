import { useState } from "react";
import { Shirt, Watch, Footprints, Glasses, Gem, ShoppingBag } from "lucide-react";

interface IconItem {
  id: string;
  icon: React.ReactNode;
  label: string;
}

interface IconButtonFilterProps {
  title: string;
  items?: IconItem[];
}

const defaultItems: IconItem[] = [
  { id: 'shirts', icon: <Shirt className="w-4 h-4" />, label: 'Shirts' },
  { id: 'watches', icon: <Watch className="w-4 h-4" />, label: 'Watches' },
  { id: 'shoes', icon: <Footprints className="w-4 h-4" />, label: 'Shoes' },
  { id: 'glasses', icon: <Glasses className="w-4 h-4" />, label: 'Glasses' },
  { id: 'jewelry', icon: <Gem className="w-4 h-4" />, label: 'Jewelry' },
  { id: 'bags', icon: <ShoppingBag className="w-4 h-4" />, label: 'Bags' },
];

export const IconButtonFilter = ({ title, items = defaultItems }: IconButtonFilterProps) => {
  const [selected, setSelected] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    setSelected(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  return (
    <div className="filter-section">
      <div className="filter-header">{title}</div>
      <div className="grid grid-cols-4 gap-1.5">
        {items.map(item => (
          <button
            key={item.id}
            className={`icon-button flex-col gap-0.5 ${selected.includes(item.id) ? 'active' : ''}`}
            onClick={() => toggleItem(item.id)}
            title={item.label}
          >
            {item.icon}
            <span className="text-[9px] truncate w-full">{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};
