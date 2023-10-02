import Image from "next/image";

import GetStarted from "@/components/GetStarted/GetStarted";
import RoundedButton from "@/components/RoundedButton/RoundedButton";
import TaxesFormsItem from "@/components/TaxesFormsItem/TaxesFormsItem";
import TaxesSummary from "@/components/TaxesSummary/TaxesSummary";

import { taxesForms } from "@/data/taxesData";
import { taxesSummary } from "@/data/taxesData";

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
      <section className="taxes__summary">
        <div className="taxes__summary__card">
          <div className="taxes__summary__card__title">
            <span>do not</span> let taxes hold you back
          </div>
          <div className="taxes__summary__card__desc">
            We will automatically ask respective users to fill in the necessary
            information we need in order to generate the necessary forms.
          </div>
          <div className="taxes__summary__card__review">
            <Image
              src="/assets/taxes/review.png"
              alt="tax_review"
              width={32}
              height={32}
              className="taxes__summary__card__review__img"
            />
            <div className="taxes__summary__card__review__text">
              Before you file, review entity details and add any payments to
              contractors.
            </div>
          </div>
          <TaxesSummary summary={taxesSummary} />
          <div className="taxes__summary__card__total">
            <Image
              src="/assets/taxes/dollar.png"
              alt="total"
              width={25}
              height={25}
              className="taxes__summary__card__total__icon"
            ></Image>
            <div className="taxes__summary__card__total__data">
              <div className="taxes__summary__card__total__data__title">
                Total pay
              </div>
              <div className="taxes__summary__card__total__data__amount">
                $3,135
              </div>
              <button className="taxes__summary__card__total__data__btn">
                Edit total pay
              </button>
            </div>
          </div>
        </div>
        <Image
          src="/assets/taxes/person_girl.png"
          alt="girl"
          width={100}
          height={100}
          className="taxes__summary__img__girl"
        />
        <Image
          src="/assets/taxes/person_boy.png"
          alt="boy"
          width={88}
          height={88}
          className="taxes__summary__img__boy"
        />
      </section>
      <section className="taxes__forms">
        <div className="taxes__forms__header">
          What tax forms can <span>I collect</span>
        </div>
        <div className="taxes__forms__body">
          {taxesForms.map((taxesFormItem) => (
            <TaxesFormsItem
              key={taxesFormItem.id}
              title={taxesFormItem.title}
              order={taxesFormItem.id}
            />
          ))}
        </div>
      </section>
      <GetStarted />
    </>
  );
};

export default Taxes;
