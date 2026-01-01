import { useState } from "react";
import { Switch } from "@/components/ui/switch";

interface ToggleItem {
  id: string;
  label: string;
  description?: string;
}

interface ToggleSwitchFilterProps {
  title: string;
  items: ToggleItem[];
}

export const ToggleSwitchFilter = ({ title, items }: ToggleSwitchFilterProps) => {
  const [toggles, setToggles] = useState<Record<string, boolean>>({});

  const handleToggle = (id: string) => {
    setToggles(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="filter-section">
      <div className="filter-header">{title}</div>
      <div className="space-y-2">
        {items.map(item => (
          <div key={item.id} className="flex items-center justify-between gap-2">
            <div className="min-w-0 flex-1">
              <div className="text-xs truncate">{item.label}</div>
              {item.description && (
                <div className="text-[10px] text-muted-foreground truncate">{item.description}</div>
              )}
            </div>
            <Switch 
              checked={toggles[item.id] || false}
              onCheckedChange={() => handleToggle(item.id)}
              className="flex-shrink-0"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
