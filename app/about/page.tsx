"use client";

import React, { useState } from "react";
import "@/sass/pages/_about.scss";
import GetStarted from "@/components/GetStarted/GetStarted";
import FilterButton from "@/components/FilterButton/FilterButton";

import { about } from "@/data/aboutData";
import AboutCard from "@/components/AboutCard/AboutCard";

const allCategories = ["All", ...new Set(about.map((about) => about.category))];

const About = () => {
  const [categories, setCategories] = useState(allCategories);
  const [activeCategory, setActiveCategory] = useState(allCategories[0]);
  const [aboutItems, setAboutItems] = useState(about);

  const filterAboutCategories = (category: string) => {
    if (category === "All") {
      setAboutItems(about);
      setActiveCategory(category);
      return;
    }

    const filteredAboutCategory = about.filter(
      (item) => item.category === category,
    );

    setAboutItems(filteredAboutCategory);
    setActiveCategory(category);
  };

  return (
    <div className="about">
      <div className="about__item1">
        <p className="about__title">
          We Are Building One Platform for All <span>Payroll Things</span>
        </p>
        <p className="about__desc">
          Payrole is innovative online platform to hire and pay international
          employees and freelancers.
        </p>

        <div className="about__statistics">
          <p className="about__statistics--title">
            Let the numbers speak for themselves.
          </p>

          <div className="about__statistics--table">
            <div className="about__statistics--table--1">
              <div>
                <img
                  src="../assets/icons/general/money.svg"
                  alt=""
                  width={56}
                  height={56}
                />
              </div>
              <div>
                <p>3.3M+</p>
                <p>Income received</p>
              </div>
            </div>
            <div className="about__statistics--table--2">
              <div>
                <img
                  src="../assets/icons/general/earth.svg"
                  alt=""
                  width={56}
                  height={56}
                />
              </div>

              <div>
                <p>150+</p>
                <p>Countries supported</p>
              </div>
            </div>
            <div className="about__statistics--table--3">
              <div>
                <img
                  src="../assets/icons/general/person.svg"
                  alt=""
                  width={56}
                  height={56}
                />
              </div>

              <div>
                <p>1.2M+</p>
                <p>Users every month</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="about__item2"></div>
      <div className="about__item3">
        <div className="desc">
          <p>Our Investors</p>
          <p>
            We’re proud to be supported by investors who helped build our
            vision.
          </p>
        </div>
        <div className="brands">
          <div>
            <img src="../assets/about/kraken.png" alt="" />
          </div>
          <div>
            <img src="../assets/about/wyre.png" alt="" />
          </div>
          <div>
            <img src="../assets/about/robinhood.png" alt="" />
          </div>
          <div>
            <img src="../assets/about/webull.png" alt="" />
          </div>
        </div>
      </div>

      <div className="about__item4">
        <p className="title">Meet Our Team</p>

        <FilterButton
          categories={categories}
          activeCategory={activeCategory}
          filterCards={filterAboutCategories}
        />
        <AboutCard aboutItems={aboutItems} />
      </div>
      <GetStarted />
    </div>
  );
};

export default About;
