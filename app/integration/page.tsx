"use client";

import { useState } from "react";

import GetStarted from "@/components/GetStarted/GetStarted";
import FilterButton from "@/components/FilterButton/FilterButton";

import { integrations } from "@/data/integrationData";

import "@/sass/pages/_integration.scss";

const allCategories = [
  ...new Set(integrations.map((integration) => integration.category)),
];

const Integration = () => {
  const [integrationItems, setintegrationItems] = useState(integrations);
  const [categories, setCategories] = useState(allCategories);
  const [activeCategory, setActiveCategory] = useState(allCategories[0]);

  const filterIntegrations = (category: string) => {
    const filteredIntegrations = integrations.filter(
      (integration) => integration.category === category,
    );
    setintegrationItems(filteredIntegrations);
    setActiveCategory(category);
  };

  return (
    <>
      <main className="integration">
        <div className="integration__title">
          <div className="integration__title__heading">Integrations</div>
          <div className="integration__title__desc">
            Connect Payrole with your favorite tools to reduce manual tasks,
            streamlinne HR workflows, and make a life a lot easier with just a
            few clicks.
          </div>
        </div>
        <div className="integration__btngroup">
          <FilterButton
            categories={categories}
            filterCards={filterIntegrations}
            activeCategory={activeCategory}
          />
        </div>
        <div className="integration__body"></div>
      </main>
      <GetStarted />
    </>
  );
};

export default Integration;
