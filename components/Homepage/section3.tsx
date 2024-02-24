import React from "react";
import "@/sass/components/_section3.scss";
import Image from "next/image";

const Section3 = () => {
  return (
    <div className="section3__container">
      <div className="section3__container--title">
        Trusted by <span>Established</span> Companies
      </div>
      <div className="section3__container--companyNames">
        <Image
          layout="fill"
          src="/assets/icons/general/company1.png"
          alt="c1"
        />
        <Image
          layout="fill"
          src="/assets/icons/general/company2.png"
          alt="c2"
        />
        <Image
          layout="fill"
          src="/assets/icons/general/company3.png"
          alt="c3"
        />
        <Image
          layout="fill"
          src="/assets/icons/general/company4.png"
          alt="c4"
        />
      </div>
    </div>
  );
};

export default Section3;
