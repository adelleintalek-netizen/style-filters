import { Star } from "lucide-react";

interface ProductCardProps {
  title: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  prime?: boolean;
  badge?: string;
}

export const ProductCard = ({
  title,
  price,
  originalPrice,
  rating,
  reviews,
  image,
  prime = false,
  badge,
}: ProductCardProps) => {
  const renderStars = () => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <Star
          key={i}
          className={`w-3 h-3 ${i < Math.floor(rating) ? 'text-star fill-star' : 'text-muted-foreground'}`}
        />
      ));
  };

  return (
    <div className="bg-background p-3 rounded border border-filter-border hover:shadow-md transition-shadow">
      {/* Badge */}
      {badge && (
        <div className="mb-2">
          <span className="text-[10px] bg-price text-white px-1.5 py-0.5 rounded">
            {badge}
          </span>
        </div>
      )}

      {/* Image */}
      <div className="aspect-square mb-2 flex items-center justify-center bg-muted/30 rounded">
        <img src={image} alt={title} className="max-h-full max-w-full object-contain" />
      </div>

      {/* Title */}
      <h3 className="text-xs text-link hover:text-primary hover:underline cursor-pointer line-clamp-2 mb-1">
        {title}
      </h3>

      {/* Rating */}
      <div className="flex items-center gap-1 mb-1">
        <div className="flex">{renderStars()}</div>
        <span className="text-[10px] text-link">{reviews.toLocaleString()}</span>
      </div>

      {/* Price */}
      <div className="flex items-baseline gap-1.5">
        <span className="text-lg font-semibold">${price.toFixed(2)}</span>
        {originalPrice && (
          <span className="text-xs text-muted-foreground line-through">
            ${originalPrice.toFixed(2)}
          </span>
        )}
      </div>

      {/* Prime */}
      {prime && (
        <div className="mt-1">
          <span className="text-[10px] text-link font-medium">prime</span>
          <span className="text-[10px] text-muted-foreground ml-1">FREE Delivery</span>
        </div>
      )}
    </div>
  );
};
