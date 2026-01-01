import { useState } from "react";
import { X, Check } from "lucide-react";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

interface BottomSheetItem {
  id: string;
  label: string;
}

interface BottomSheetFilterProps {
  title: string;
  items: BottomSheetItem[];
  triggerLabel?: string;
}

export const BottomSheetFilter = ({ title, items, triggerLabel = 'More filters' }: BottomSheetFilterProps) => {
  const [selected, setSelected] = useState<string[]>([]);
  const [open, setOpen] = useState(false);

  const toggleItem = (id: string) => {
    setSelected(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  return (
    <div className="filter-section">
      <div className="filter-header">{title}</div>
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerTrigger asChild>
          <button className="filter-link">
            {triggerLabel} →
          </button>
        </DrawerTrigger>
        <DrawerContent className="bg-background">
          <DrawerHeader className="border-b border-border">
            <div className="flex items-center justify-between">
              <DrawerTitle className="text-sm font-bold text-secondary">{title}</DrawerTitle>
              <button onClick={() => setOpen(false)}>
                <X className="w-4 h-4" />
              </button>
            </div>
          </DrawerHeader>
          <div className="p-4 max-h-[60vh] overflow-y-auto">
            <div className="space-y-1">
              {items.map(item => (
                <label
                  key={item.id}
                  className="filter-checkbox-item py-2"
                  onClick={() => toggleItem(item.id)}
                >
                  <div
                    className={`w-4 h-4 border rounded flex items-center justify-center flex-shrink-0 transition-colors ${
                      selected.includes(item.id)
                        ? 'bg-secondary border-secondary'
                        : 'border-border bg-background'
                    }`}
                  >
                    {selected.includes(item.id) && <Check className="w-3 h-3 text-white" />}
                  </div>
                  <span>{item.label}</span>
                </label>
              ))}
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
};
