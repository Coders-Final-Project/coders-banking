import React from "react";
import "@/sass/pages/_about.scss";

const About = () => {
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
      <div className="about__item3"></div>
    </div>
  );
};

export default About;
