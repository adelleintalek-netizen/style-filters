import { useState } from "react";
import { Minus, Plus } from "lucide-react";

interface StepperInputFilterProps {
  title: string;
  min?: number;
  max?: number;
  defaultValue?: number;
  label?: string;
}

export const StepperInputFilter = ({ 
  title, 
  min = 0, 
  max = 100, 
  defaultValue = 1,
  label = 'Quantity'
}: StepperInputFilterProps) => {
  const [value, setValue] = useState(defaultValue);

  const decrement = () => setValue(prev => Math.max(min, prev - 1));
  const increment = () => setValue(prev => Math.min(max, prev + 1));

  return (
    <div className="filter-section">
      <div className="filter-header">{title}</div>
      <div className="flex items-center gap-2">
        <span className="text-xs text-muted-foreground flex-shrink-0">{label}:</span>
        <div className="flex items-center">
          <button className="stepper-btn rounded-l rounded-r-none" onClick={decrement}>
            <Minus className="w-3 h-3" />
          </button>
          <input 
            type="text" 
            value={value} 
            readOnly 
            className="stepper-input"
          />
          <button className="stepper-btn rounded-r rounded-l-none" onClick={increment}>
            <Plus className="w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
  );
};
