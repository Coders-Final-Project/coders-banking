"use client";

import Image from "next/image";

import { useState } from "react";

import GetStarted from "@/components/GetStarted/GetStarted";
import FilterButton from "@/components/FilterButton/FilterButton";
import IntegrationCard from "@/components/IntegrationCard/IntegrationCard";

import { integrations } from "@/data/integrationData";

import "@/sass/pages/_integration.scss";

const allCategories = [
  "All",
  ...new Set(integrations.map((integration) => integration.category)),
];

const Integration = () => {
  const [integrationItems, setintegrationItems] = useState(integrations);
  const [categories, setCategories] = useState(allCategories);
  const [activeCategory, setActiveCategory] = useState(allCategories[0]);

  const filterIntegrations = (category: string) => {
    if (category === "All") {
      setintegrationItems(integrations);
      setActiveCategory(category);
      return;
    }

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
            streamlinne HR workflows, and make a life a lot easier.
          </div>
        </div>
        <div className="integration__btngroup">
          <FilterButton
            categories={categories}
            filterCards={filterIntegrations}
            activeCategory={activeCategory}
          />
        </div>
        <div className="integration__body">
          <IntegrationCard integrations={integrationItems} />
        </div>
      </main>
      <section className="integration__unlock">
        <div className="integration__unlock__card">
          <div className="integration__unlock__card__title">
            Unlock More with Our Open API
          </div>
          <div className="integration__unlock__card__desc">
            Collect, standardize, and activate your customer data in the
            marketing and analytics tools you need to run your business.
          </div>
          <Image
            src="/assets/integration/unlock.png"
            alt="unlock"
            width={712}
            height={265}
            className="integration__unlock__card__img"
          />
        </div>
      </section>
      <GetStarted />
    </>
  );
};

export default Integration;
