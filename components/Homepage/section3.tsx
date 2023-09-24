import React from "react";
import "@/sass/components/_section3.scss";

const Section3 = () => {
  return (
    <div className="section3__container">
      <div className="section3__container--title">
        Trusted by <span>Established</span> Companies
      </div>
      <div className="section3__container--companyNames">
        <img src="/assets/icons/general/company1.png" alt="c1" />
        <img src="/assets/icons/general/company2.png" alt="c2" />
        <img src="/assets/icons/general/company3.png" alt="c3" />
        <img src="/assets/icons/general/company4.png" alt="c4" />
      </div>
    </div>
  );
};

export default Section3;
