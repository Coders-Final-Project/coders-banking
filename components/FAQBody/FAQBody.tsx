"use client";

import { useState } from "react";

import Image from "next/image";

import "@/sass/components/_faqbody.scss";

interface IFAQData {
  id: number;
  question: string;
  answer: string;
}

const FAQBody = ({ faqData }: { faqData: IFAQData[] }) => {
  const [activeFaq, setActiveFaq] = useState(1);

  const changeActiveFaq = (id: number) => {
    setActiveFaq(id);
  };

  return (
    <div className="faq__body">
      {faqData.map((faqItem) => {
        return (
          <div
            key={faqItem.id}
            className="faq__body__item"
            onClick={() => changeActiveFaq(faqItem.id)}
          >
            <div className="faq__body__item__question">
              <div className="faq__body__item__question__text">
                {faqItem.question}
              </div>
              <div className="faq__body__item__question__icons">
                <Image
                  src="/assets/icons/nav/up-arrow.png"
                  width={24}
                  height={24}
                  alt="faq_icon"
                  className={`${
                    faqItem.id === activeFaq
                      ? "faq__body__item__question__icons--up active"
                      : "faq__body__item__question__icons--up"
                  }`}
                />
                <Image
                  src="/assets/icons/nav/down-arrow2.png"
                  width={24}
                  height={24}
                  alt="faq_icon"
                  className={`${
                    faqItem.id === activeFaq
                      ? "faq__body__item__question__icons--down"
                      : "faq__body__item__question__icons--down active"
                  }`}
                />
              </div>
            </div>
            <div
              className={`${
                faqItem.id === activeFaq
                  ? "faq__body__item__answer active"
                  : "faq__body__item__answer"
              }`}
            >
              {faqItem.answer}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FAQBody;
