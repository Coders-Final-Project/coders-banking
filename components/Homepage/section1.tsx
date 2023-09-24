import React from "react";
import Image from "next/image";
import "@/sass/components/_section1.scss";

const Section1 = () => {
  return (
    <div className="container">
      <h2 className="container__title">
        Global Payroll Platform made for <span>Freelancers</span>
      </h2>
      <p className="container__desc">
        Easily automate payroll, taxes, and compliance with a seamless
        experience.
      </p>

      <button className="container__btn">Learn More</button>
      <p className="container__info">
        Hire and pay compliantly in <span>100+ countries</span>{" "}
        <Image
          src="/assets/icons/general/icon.svg"
          width={24}
          height={24}
          alt={"world icon"}
        />
      </p>
    </div>
  );
};

export default Section1;
