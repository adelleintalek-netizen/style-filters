import { useState } from "react";
import { Slider } from "@/components/ui/slider";

interface RangeSliderFilterProps {
  title: string;
  min: number;
  max: number;
  step?: number;
  prefix?: string;
  suffix?: string;
}

export const RangeSliderFilter = ({ 
  title, 
  min, 
  max, 
  step = 1, 
  prefix = '$', 
  suffix = '' 
}: RangeSliderFilterProps) => {
  const [range, setRange] = useState<[number, number]>([min, max]);

  return (
    <div className="filter-section">
      <div className="filter-header">{title}</div>
      <div className="px-1">
        <Slider
          value={range}
          onValueChange={(value) => setRange(value as [number, number])}
          min={min}
          max={max}
          step={step}
          className="mb-2"
        />
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span>{prefix}{range[0]}{suffix}</span>
          <span>{prefix}{range[1]}{suffix}</span>
        </div>
      </div>
    </div>
  );
};
