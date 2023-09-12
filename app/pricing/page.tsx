"use client";

import { useState } from "react";

import PricingCard from "@/components/PricingCard/PricingCard";
import PricingButton from "@/components/PricingButton/PricingButton";
import FAQBody from "@/components/FAQBody/FAQBody";

import "@/sass/pages/_pricing.scss";

import { pricingCard } from "@/data/pricingCardsData";
import { FAQ } from "@/data/faqData";

const cards = pricingCard.filter((card) => card.category === "monthly");

const allCategories = [...new Set(pricingCard.map((card) => card.category))];

const Pricing = () => {
  const [cardItems, setCardItems] = useState(cards);
  const [categories, setCategories] = useState(allCategories);
  const [activeCategory, setActiveCategory] = useState(allCategories[0]);

  const filterCards = (category: string) => {
    const filteredCards = pricingCard.filter(
      (card) => card.category === category,
    );
    setCardItems(filteredCards);
    setActiveCategory(category);
  };

  return (
    <>
      <section className="pricing__offer">
        <div className="pricing__offer__info">
          <div className="pricing__offer__info__header">
            start scaling your business for <span>free</span>
          </div>
          <div className="pricing__offer__info__desc">
            Our fair price guarantee means no commitments or hidden fees. Choose
            the plan that is right for you.
          </div>
        </div>
        <PricingButton
          categories={categories}
          filterCards={filterCards}
          activeCategory={activeCategory}
        />
        <PricingCard pricingCard={cardItems} />
      </section>
      <section className="faq">
        <div className="faq__title">frequently asked questions</div>
        <FAQBody faqData={FAQ} />
      </section>
    </>
  );
};

export default Pricing;
