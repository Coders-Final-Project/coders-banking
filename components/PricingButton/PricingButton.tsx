"use client";

interface IPricingButton {
  categories: string[];
  activeCategory: string;
  filterCards: (category: string) => void;
}

const PricingButton = ({
  categories,
  activeCategory,
  filterCards,
}: IPricingButton) => {
  return (
    <div className="pricing__offer__btngroup">
      {categories.map((category, index) => {
        return (
          <button
            key={index}
            onClick={() => filterCards(category)}
            className={`${
              category === activeCategory
                ? "pricing__offer__btngroup__item active"
                : "pricing__offer__btngroup__item"
            }`}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default PricingButton;
