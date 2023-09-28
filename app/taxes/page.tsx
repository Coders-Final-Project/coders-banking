import Image from "next/image";

import GetStarted from "@/components/GetStarted/GetStarted";
import RoundedButton from "@/components/RoundedButton/RoundedButton";

import "@/sass/pages/_taxes.scss";

const Taxes = () => {
  return (
    <>
      <section className="taxes__intro">
        <div className="taxes__intro__context">
          <div className="taxes__intro__context__header">
            Manage Tax Directly Through Payrole
          </div>
          <div className="taxes__intro__context__desc">
            Speed up the whole process and help you have an overview of all the
            forms you and your contractors need.
          </div>
          <div className="taxes__intro__context__btngroup">
            <RoundedButton text="Get Started" />
            <RoundedButton text="Learn More" light="light" />
          </div>
        </div>
        <div className="taxes__intro__partner">
          <Image
            src="/assets/taxes/dropbox.png"
            alt="partner"
            width={200}
            height={40}
            className="taxes__intro__partner__item"
          />
          <Image
            src="/assets/taxes/buzzfeed.png"
            alt="partner"
            width={180}
            height={32}
            className="taxes__intro__partner__item"
          />
          <Image
            src="/assets/taxes/zendesk.png"
            alt="partner"
            width={168}
            height={32}
            className="taxes__intro__partner__item"
          />
          <Image
            src="/assets/taxes/mollie.png"
            alt="partner"
            width={135}
            height={40}
            className="taxes__intro__partner__item"
          />
        </div>
      </section>
      <GetStarted />
    </>
  );
};

export default Taxes;
