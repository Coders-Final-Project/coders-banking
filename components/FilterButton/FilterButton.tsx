"use client";

import "@/sass/components/_filterButton.scss";

interface IFilterButton {
  categories: string[];
  activeCategory: string;
  filterCards: (category: string) => void;
}

const FilterButton = ({
  categories,
  activeCategory,
  filterCards,
}: IFilterButton) => {
  return (
    <div className="filter__button__container">
      {categories.map((category, index) => {
        return (
          <button
            key={index}
            onClick={() => filterCards(category)}
            className={`${
              category === activeCategory
                ? "filter__button__container__item active"
                : "filter__button__container__item"
            }`}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default FilterButton;
