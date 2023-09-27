import { IAboutCard } from "@/interface";
import React from "react";
import "@/sass/components/_aboutCard.scss";
import Image from "next/image";

interface IAboutItemsProps {
  aboutItems: IAboutCard[];
}

const AboutCard = ({ aboutItems }: IAboutItemsProps) => {
  return (
    <div className="aboutCard">
      {aboutItems.map((item) => {
        return (
          <div key={item.id} className="aboutCard__container">
            <div
              style={{
                margin: "auto",
                marginTop: "48px",
                width: "50%",
                marginBottom: "24px",
              }}
            >
              <Image
                src={item.pic}
                alt={"icon"}
                width={120}
                height={120}
                style={{
                  paddingLeft: "45px",
                }}
              />
            </div>

            <p className="aboutCard__container--title">{item.title}</p>
            <p className="aboutCard__container--desc">{item.desc}</p>
            <div className="aboutCard__container--icons">
              <img
                src={item.lnkdIcon}
                alt="linkedinIcon"
                width={48}
                height={48}
              />
              <img
                src={item.twitterIcon}
                alt="twitterIcon"
                width={48}
                height={48}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AboutCard;
