import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface DropdownItem {
  id: string;
  label: string;
}

interface DropdownFilterProps {
  title: string;
  placeholder?: string;
  items: DropdownItem[];
}

export const DropdownFilter = ({ title, placeholder = 'Select option', items }: DropdownFilterProps) => {
  return (
    <div className="filter-section">
      <div className="filter-header">{title}</div>
      <Select>
        <SelectTrigger className="w-full h-8 text-xs">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent className="bg-background border-border z-50">
          {items.map(item => (
            <SelectItem key={item.id} value={item.id} className="text-xs">
              {item.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};
