import { useState } from "react";
import { X } from "lucide-react";

interface TagItem {
  id: string;
  label: string;
}

interface InlineTagsFilterProps {
  title: string;
  items: TagItem[];
}

export const InlineTagsFilter = ({ title, items }: InlineTagsFilterProps) => {
  const [activeTags, setActiveTags] = useState<TagItem[]>(items.slice(0, 3));

  const removeTag = (id: string) => {
    setActiveTags(prev => prev.filter(tag => tag.id !== id));
  };

  const clearAll = () => {
    setActiveTags([]);
  };

  if (activeTags.length === 0) return null;

  return (
    <div className="filter-section">
      <div className="flex items-center justify-between mb-2">
        <div className="filter-header mb-0">{title}</div>
        <button className="filter-link" onClick={clearAll}>Clear all</button>
      </div>
      <div className="flex flex-wrap gap-1.5">
        {activeTags.map(tag => (
          <span key={tag.id} className="active-tag">
            <span className="truncate max-w-[80px]">{tag.label}</span>
            <button onClick={() => removeTag(tag.id)} className="hover:text-primary">
              <X className="w-3 h-3" />
            </button>
          </span>
        ))}
      </div>
    </div>
  );
};
