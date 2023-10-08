"use client";

import React, { useState } from "react";
import "@/sass/pages/_about.scss";
import GetStarted from "@/components/GetStarted/GetStarted";
import FilterButton from "@/components/FilterButton/FilterButton";

import { about } from "@/data/aboutData";
import AboutCard from "@/components/AboutCard/AboutCard";
import Image from "next/image";

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

      <div className="about__item2">
        <div className="about__item2--heading">
          <p className="about__item2--heading-desc">
            Our <span>Mission</span>
          </p>
          <p className="about__item2--heading-info">
            Open up the vast of the world for every person, business and
            country. We envision a world where every person and business truly
            belongs in the global market.
          </p>
        </div>

        <div>{/* <Image src={""} alt="" /> */}</div>

        <div className="payrolls">
          <div className="reminder item">
            <p className="reminder__title">Payroll Reminder</p>
            <p>Reminder payroll for 15 employees</p>

            <div className="employees__container">
              <p className="employees__container--title">Employees</p>
              <div className="employees__container--imgs">
                <Image
                  src="/assets/about/employee1.png"
                  alt="emp1"
                  width={48}
                  height={48}
                />
                <Image
                  src={"/assets/about/employee2.png"}
                  alt="emp2"
                  width={48}
                  height={48}
                />
                <Image
                  src={"/assets/about/employee3.png"}
                  alt="emp3"
                  width={48}
                  height={48}
                />
                <div className="countOfemployee">+12</div>
              </div>
            </div>
          </div>

          <div className="total item">
            <div className="total__title">
              <div className="total__desc">
                <p>Total Payroll</p>
                <p>15 employees</p>
              </div>
              <div>
                <Image
                  src={"../assets/about/dollar.svg"}
                  alt="dollar"
                  width={48}
                  height={48}
                />
              </div>
            </div>

            <div className="divison__line"></div>

            <div className="salary">
              <div>Salary</div>
              <div>
                <span>$34,235</span>.00
              </div>
            </div>

            <div className="bonus">
              <div>Bonus</div>
              <div>
                <span>$1,000</span>.00
              </div>
            </div>

            <div className="total__amount">
              <div>Total Amount</div>
              <div>
                <span>$35,235</span>.00
              </div>
            </div>

            
          </div>
        </div>
      </div>

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
        <div className="about__btngroup">
          <FilterButton
            categories={categories}
            activeCategory={activeCategory}
            filterCards={filterAboutCategories}
          />
        </div>
        <AboutCard aboutItems={aboutItems} />
      </div>
      <GetStarted />
    </div>
  );
};

export default About;
