"use client";

interface IPricingButton {
  categories: string[];
  filterCards: (category: string) => void;
}

const PricingButton = ({ categories, filterCards }: IPricingButton) => {
  return (
    <div className="pricing__offer__btngroup">
      {categories.map((category, index) => {
        return (
          <button
            key={index}
            onClick={() => filterCards(category)}
            className="pricing__offer__btngroup__item"
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default PricingButton;
