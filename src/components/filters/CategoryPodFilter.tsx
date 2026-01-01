import { useState } from "react";

interface CategoryItem {
  id: string;
  label: string;
  children?: { id: string; label: string }[];
}

interface CategoryPodFilterProps {
  title: string;
  items: CategoryItem[];
}

export const CategoryPodFilter = ({ title, items }: CategoryPodFilterProps) => {
  const [selectedParent, setSelectedParent] = useState<string | null>(null);
  const [selectedChild, setSelectedChild] = useState<string | null>(null);

  const handleParentClick = (id: string) => {
    if (selectedParent === id) {
      setSelectedParent(null);
      setSelectedChild(null);
    } else {
      setSelectedParent(id);
      setSelectedChild(null);
    }
  };

  return (
    <div className="filter-section">
      <div className="filter-header">{title}</div>
      <div className="space-y-1.5">
        {items.map(item => (
          <div key={item.id}>
            <button
              className={`category-pod w-full text-left ${selectedParent === item.id ? 'active' : ''}`}
              onClick={() => handleParentClick(item.id)}
            >
              <div className="text-xs font-medium truncate">{item.label}</div>
            </button>
            {selectedParent === item.id && item.children && (
              <div className="ml-2 mt-1 space-y-1">
                {item.children.map(child => (
                  <button
                    key={child.id}
                    className={`category-pod w-full text-left ${selectedChild === child.id ? 'active' : ''}`}
                    onClick={() => setSelectedChild(child.id === selectedChild ? null : child.id)}
                  >
                    <div className="text-[11px] truncate">{child.label}</div>
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
