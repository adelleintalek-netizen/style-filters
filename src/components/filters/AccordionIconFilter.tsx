import { useState } from "react";
import { ChevronDown, ChevronUp, Star, Truck, Shield, Award, Heart, Check } from "lucide-react";

interface AccordionItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  children: { id: string; label: string }[];
}

interface AccordionIconFilterProps {
  title: string;
  items?: AccordionItem[];
}

const defaultItems: AccordionItem[] = [
  { 
    id: 'rating', 
    label: 'Customer Rating', 
    icon: <Star className="w-3.5 h-3.5 text-star" />,
    children: [
      { id: '4up', label: '4 Stars & Up' },
      { id: '3up', label: '3 Stars & Up' },
      { id: '2up', label: '2 Stars & Up' },
    ]
  },
  { 
    id: 'shipping', 
    label: 'Shipping', 
    icon: <Truck className="w-3.5 h-3.5" />,
    children: [
      { id: 'prime', label: 'Prime' },
      { id: 'free', label: 'Free Shipping' },
    ]
  },
  { 
    id: 'warranty', 
    label: 'Warranty', 
    icon: <Shield className="w-3.5 h-3.5" />,
    children: [
      { id: '1year', label: '1 Year' },
      { id: '2year', label: '2 Years' },
    ]
  },
];

export const AccordionIconFilter = ({ title, items = defaultItems }: AccordionIconFilterProps) => {
  const [openItems, setOpenItems] = useState<string[]>([]);
  const [selected, setSelected] = useState<string[]>([]);

  const toggleAccordion = (id: string) => {
    setOpenItems(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const toggleChild = (childId: string) => {
    setSelected(prev => 
      prev.includes(childId) ? prev.filter(i => i !== childId) : [...prev, childId]
    );
  };

  return (
    <div className="filter-section">
      <div className="filter-header">{title}</div>
      <div className="space-y-1">
        {items.map(item => (
          <div key={item.id} className="border border-border rounded overflow-hidden">
            <button
              className="w-full flex items-center gap-2 p-2 text-xs hover:bg-filter-hover transition-colors"
              onClick={() => toggleAccordion(item.id)}
            >
              {item.icon}
              <span className="flex-1 text-left truncate">{item.label}</span>
              {openItems.includes(item.id) ? 
                <ChevronUp className="w-3 h-3 flex-shrink-0" /> : 
                <ChevronDown className="w-3 h-3 flex-shrink-0" />
              }
            </button>
            {openItems.includes(item.id) && (
              <div className="border-t border-border bg-muted/30 p-2 space-y-1">
                {item.children.map(child => (
                  <label 
                    key={child.id} 
                    className="filter-checkbox-item"
                    onClick={() => toggleChild(child.id)}
                  >
                    <div 
                      className={`w-3.5 h-3.5 border rounded flex items-center justify-center flex-shrink-0 transition-colors ${
                        selected.includes(child.id) 
                          ? 'bg-secondary border-secondary' 
                          : 'border-border bg-background'
                      }`}
                    >
                      {selected.includes(child.id) && <Check className="w-2.5 h-2.5 text-white" />}
                    </div>
                    <span className="truncate">{child.label}</span>
                  </label>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
