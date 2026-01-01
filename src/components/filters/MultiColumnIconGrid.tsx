import { useState } from "react";
import { Laptop, Smartphone, Tablet, Tv, Headphones, Camera, Gamepad, Watch, Speaker } from "lucide-react";

interface GridItem {
  id: string;
  icon: React.ReactNode;
  label: string;
}

interface MultiColumnIconGridProps {
  title: string;
  items?: GridItem[];
  columns?: 3 | 4;
}

const defaultItems: GridItem[] = [
  { id: 'laptop', icon: <Laptop className="w-5 h-5" />, label: 'Laptops' },
  { id: 'phone', icon: <Smartphone className="w-5 h-5" />, label: 'Phones' },
  { id: 'tablet', icon: <Tablet className="w-5 h-5" />, label: 'Tablets' },
  { id: 'tv', icon: <Tv className="w-5 h-5" />, label: 'TVs' },
  { id: 'headphones', icon: <Headphones className="w-5 h-5" />, label: 'Audio' },
  { id: 'camera', icon: <Camera className="w-5 h-5" />, label: 'Cameras' },
  { id: 'gaming', icon: <Gamepad className="w-5 h-5" />, label: 'Gaming' },
  { id: 'watch', icon: <Watch className="w-5 h-5" />, label: 'Watches' },
  { id: 'speaker', icon: <Speaker className="w-5 h-5" />, label: 'Speakers' },
];

export const MultiColumnIconGrid = ({ title, items = defaultItems, columns = 3 }: MultiColumnIconGridProps) => {
  const [selected, setSelected] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    setSelected(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  return (
    <div className="filter-section">
      <div className="filter-header">{title}</div>
      <div className={`grid ${columns === 3 ? 'grid-cols-3' : 'grid-cols-4'} gap-1.5`}>
        {items.map(item => (
          <button
            key={item.id}
            className={`flex flex-col items-center gap-1 p-2 rounded border transition-all ${
              selected.includes(item.id) 
                ? 'border-primary bg-filter-active' 
                : 'border-border hover:border-primary hover:bg-filter-hover'
            }`}
            onClick={() => toggleItem(item.id)}
          >
            <span className={selected.includes(item.id) ? 'text-primary' : 'text-muted-foreground'}>
              {item.icon}
            </span>
            <span className="text-[9px] truncate w-full text-center">{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};
