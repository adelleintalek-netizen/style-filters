import { useState } from "react";

interface ImageItem {
  id: string;
  src: string;
  label: string;
}

interface ImagePreviewFilterProps {
  title: string;
  items: ImageItem[];
}

export const ImagePreviewFilter = ({ title, items }: ImagePreviewFilterProps) => {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="filter-section">
      <div className="filter-header">{title}</div>
      <div className="grid grid-cols-3 gap-1.5">
        {items.map(item => (
          <button
            key={item.id}
            className={`image-preview-btn ${selected === item.id ? 'active' : ''}`}
            onClick={() => setSelected(item.id === selected ? null : item.id)}
          >
            <img 
              src={item.src} 
              alt={item.label}
              className="w-full h-10 object-cover rounded"
            />
            <div className="text-[9px] text-center mt-0.5 truncate px-0.5">{item.label}</div>
          </button>
        ))}
      </div>
    </div>
  );
};
