import { useState } from "react";
import { ChevronDown, ChevronUp, Check } from "lucide-react";

interface SubmenuItem {
  id: string;
  label: string;
  children?: { id: string; label: string }[];
}

interface FlyoutSubmenuFilterProps {
  title: string;
  items: SubmenuItem[];
}

export const FlyoutSubmenuFilter = ({ title, items }: FlyoutSubmenuFilterProps) => {
  const [openItem, setOpenItem] = useState<string | null>(null);
  const [selected, setSelected] = useState<string[]>([]);

  const toggleSubmenu = (id: string) => {
    setOpenItem(prev => prev === id ? null : id);
  };

  const toggleChild = (childId: string) => {
    setSelected(prev => 
      prev.includes(childId) ? prev.filter(i => i !== childId) : [...prev, childId]
    );
  };

  return (
    <div className="filter-section">
      <div className="filter-header">{title}</div>
      <div className="space-y-0.5">
        {items.map(item => (
          <div key={item.id}>
            <button
              className="flyout-trigger w-full"
              onClick={() => toggleSubmenu(item.id)}
            >
              <span className="truncate">{item.label}</span>
              {item.children && (
                openItem === item.id ? 
                  <ChevronUp className="w-3 h-3 flex-shrink-0" /> : 
                  <ChevronDown className="w-3 h-3 flex-shrink-0" />
              )}
            </button>
            {openItem === item.id && item.children && (
              <div className="flyout-panel ml-2">
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
