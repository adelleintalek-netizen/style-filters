import { CheckboxListFilter } from "./filters/CheckboxListFilter";
import { RadioListFilter } from "./filters/RadioListFilter";
import { PillButtonFilter } from "./filters/PillButtonFilter";
import { SwatchFilter } from "./filters/SwatchFilter";
import { TileCardFilter } from "./filters/TileCardFilter";
import { IconButtonFilter } from "./filters/IconButtonFilter";
import { RangeSliderFilter } from "./filters/RangeSliderFilter";
import { StepperInputFilter } from "./filters/StepperInputFilter";
import { DropdownFilter } from "./filters/DropdownFilter";
import { ChipCarouselFilter } from "./filters/ChipCarouselFilter";
import { FlyoutSubmenuFilter } from "./filters/FlyoutSubmenuFilter";
import { BottomSheetFilter } from "./filters/BottomSheetFilter";
import { CollapsibleFilter } from "./filters/CollapsibleFilter";
import { ToggleSwitchFilter } from "./filters/ToggleSwitchFilter";
import { InlineTagsFilter } from "./filters/InlineTagsFilter";
import { ImagePreviewFilter } from "./filters/ImagePreviewFilter";
import { AccordionIconFilter } from "./filters/AccordionIconFilter";
import { SliderDrawerFilter } from "./filters/SliderDrawerFilter";
import { CategoryPodFilter } from "./filters/CategoryPodFilter";
import { MultiColumnIconGrid } from "./filters/MultiColumnIconGrid";

export const FilterSidebar = () => {
  return (
    <aside className="w-full max-w-[280px] bg-background border-r border-filter-border min-h-screen overflow-y-auto amazon-scrollbar">
      <div className="p-4">
        {/* Active Filters (Inline Tags) */}
        <InlineTagsFilter
          title="Active Filters"
          items={[
            { id: '1', label: 'Prime' },
            { id: '2', label: 'Under $50' },
            { id: '3', label: '4+ Stars' },
            { id: '4', label: 'Electronics' },
          ]}
        />

        {/* Department - Checkbox List */}
        <CheckboxListFilter
          title="Department"
          items={[
            { id: 'electronics', label: 'Electronics', count: 1234 },
            { id: 'computers', label: 'Computers', count: 892 },
            { id: 'home', label: 'Home & Kitchen', count: 2341 },
            { id: 'clothing', label: 'Clothing', count: 4521 },
            { id: 'books', label: 'Books', count: 8932 },
            { id: 'toys', label: 'Toys & Games', count: 1532 },
            { id: 'sports', label: 'Sports & Outdoors', count: 2145 },
          ]}
        />

        {/* Delivery - Radio List */}
        <RadioListFilter
          title="Delivery Day"
          items={[
            { id: 'today', label: 'Get It Today' },
            { id: 'tomorrow', label: 'Get It by Tomorrow' },
            { id: '2day', label: 'Get It in 2 Days' },
          ]}
        />

        {/* Deals - Pill Buttons */}
        <PillButtonFilter
          title="Deals & Discounts"
          items={[
            { id: 'deals', label: 'All Deals' },
            { id: 'lightning', label: 'Lightning' },
            { id: 'best', label: 'Best Sellers' },
            { id: 'new', label: 'New Arrivals' },
          ]}
        />

        {/* Color - Swatch Dot */}
        <SwatchFilter
          title="Color"
          variant="dot"
          items={[
            { id: 'black', color: '#232F3E', label: 'Black' },
            { id: 'white', color: '#FFFFFF', label: 'White' },
            { id: 'red', color: '#CC0C39', label: 'Red' },
            { id: 'blue', color: '#146EB4', label: 'Blue' },
            { id: 'green', color: '#067D62', label: 'Green' },
            { id: 'gold', color: '#FEBD69', label: 'Gold' },
          ]}
        />

        {/* Material - Swatch Block */}
        <SwatchFilter
          title="Material"
          variant="block"
          items={[
            { id: 'leather', color: '#8B4513', label: 'Leather' },
            { id: 'metal', color: '#C0C0C0', label: 'Metal' },
            { id: 'wood', color: '#DEB887', label: 'Wood' },
            { id: 'plastic', color: '#4A90D9', label: 'Plastic' },
          ]}
        />

        {/* Size - Tile Card */}
        <TileCardFilter
          title="Size"
          items={[
            { id: 'xs', label: 'XS', sublabel: 'Extra Small' },
            { id: 's', label: 'S', sublabel: 'Small' },
            { id: 'm', label: 'M', sublabel: 'Medium' },
            { id: 'l', label: 'L', sublabel: 'Large' },
            { id: 'xl', label: 'XL', sublabel: 'Extra Large' },
            { id: 'xxl', label: 'XXL', sublabel: '2X Large' },
          ]}
        />

        {/* Category - Icon Button */}
        <IconButtonFilter title="Category" />

        {/* Price Range - Slider */}
        <RangeSliderFilter
          title="Price"
          min={0}
          max={500}
          prefix="$"
        />

        {/* Quantity - Stepper */}
        <StepperInputFilter
          title="Min Quantity"
          min={1}
          max={99}
          defaultValue={1}
          label="Min"
        />

        {/* Sort By - Dropdown */}
        <DropdownFilter
          title="Sort By"
          placeholder="Select sort order"
          items={[
            { id: 'relevant', label: 'Most Relevant' },
            { id: 'price-low', label: 'Price: Low to High' },
            { id: 'price-high', label: 'Price: High to Low' },
            { id: 'rating', label: 'Avg. Customer Review' },
            { id: 'newest', label: 'Newest Arrivals' },
          ]}
        />

        {/* Brands - Chip Carousel */}
        <ChipCarouselFilter
          title="Popular Brands"
          items={[
            { id: 'amazon', label: 'Amazon Basics' },
            { id: 'apple', label: 'Apple' },
            { id: 'samsung', label: 'Samsung' },
            { id: 'sony', label: 'Sony' },
            { id: 'lg', label: 'LG' },
            { id: 'nike', label: 'Nike' },
            { id: 'adidas', label: 'Adidas' },
          ]}
        />

        {/* Subcategories - Flyout Submenu */}
        <FlyoutSubmenuFilter
          title="Subcategories"
          items={[
            { 
              id: 'electronics', 
              label: 'Electronics',
              children: [
                { id: 'phones', label: 'Cell Phones' },
                { id: 'laptops', label: 'Laptops' },
                { id: 'tablets', label: 'Tablets' },
              ]
            },
            { 
              id: 'home', 
              label: 'Home & Garden',
              children: [
                { id: 'furniture', label: 'Furniture' },
                { id: 'decor', label: 'Home Décor' },
                { id: 'garden', label: 'Garden & Outdoor' },
              ]
            },
          ]}
        />

        {/* Condition - Collapsible */}
        <CollapsibleFilter
          title="Condition"
          items={[
            { id: 'new', label: 'New' },
            { id: 'renewed', label: 'Renewed' },
            { id: 'used', label: 'Used' },
          ]}
        />

        {/* Features - Toggle Switch */}
        <ToggleSwitchFilter
          title="Features"
          items={[
            { id: 'prime', label: 'Prime Eligible', description: 'Free 2-day shipping' },
            { id: 'subscribe', label: 'Subscribe & Save', description: 'Extra 5-15% off' },
            { id: 'climate', label: 'Climate Pledge', description: 'Eco-friendly' },
          ]}
        />

        {/* Rating - Accordion with Icons */}
        <AccordionIconFilter title="Filter by Features" />

        {/* Style - Slider Drawer */}
        <SliderDrawerFilter
          title="Style"
          items={[
            { 
              id: 'casual', 
              label: 'Casual',
              children: [
                { id: 'everyday', label: 'Everyday' },
                { id: 'weekend', label: 'Weekend' },
              ]
            },
            { 
              id: 'formal', 
              label: 'Formal',
              children: [
                { id: 'business', label: 'Business' },
                { id: 'evening', label: 'Evening' },
              ]
            },
          ]}
        />

        {/* Categories - Category Pod */}
        <CategoryPodFilter
          title="Shop by Category"
          items={[
            { 
              id: 'tech', 
              label: 'Technology',
              children: [
                { id: 'computers', label: 'Computers & Accessories' },
                { id: 'smart-home', label: 'Smart Home' },
              ]
            },
            { 
              id: 'fashion', 
              label: 'Fashion',
              children: [
                { id: 'mens', label: "Men's Fashion" },
                { id: 'womens', label: "Women's Fashion" },
              ]
            },
          ]}
        />

        {/* Device Type - Multi Column Icon Grid */}
        <MultiColumnIconGrid title="Device Type" columns={3} />

        {/* Pattern - Image Preview */}
        <ImagePreviewFilter
          title="Pattern"
          items={[
            { id: 'solid', src: 'https://via.placeholder.com/60x40/232F3E/232F3E', label: 'Solid' },
            { id: 'stripe', src: 'https://via.placeholder.com/60x40/EAEDED/232F3E?text=|||', label: 'Stripe' },
            { id: 'plaid', src: 'https://via.placeholder.com/60x40/EAEDED/232F3E?text=%23', label: 'Plaid' },
            { id: 'floral', src: 'https://via.placeholder.com/60x40/EAEDED/067D62?text=*', label: 'Floral' },
            { id: 'abstract', src: 'https://via.placeholder.com/60x40/FEBD69/232F3E?text=~', label: 'Abstract' },
            { id: 'geometric', src: 'https://via.placeholder.com/60x40/146EB4/FFFFFF?text=◇', label: 'Geometric' },
          ]}
        />

        {/* More Filters - Bottom Sheet */}
        <BottomSheetFilter
          title="Additional Filters"
          triggerLabel="See all filters"
          items={[
            { id: 'handmade', label: 'Handmade' },
            { id: 'small-business', label: 'Small Business' },
            { id: 'luxury', label: 'Luxury Brands' },
            { id: 'sustainable', label: 'Sustainable' },
            { id: 'gift', label: 'Gift Eligible' },
            { id: 'international', label: 'International Shipping' },
          ]}
        />
      </div>
    </aside>
  );
};
