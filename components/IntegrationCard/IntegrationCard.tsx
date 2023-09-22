import Image from "next/image";

import "@/sass/components/_integrationCard.scss";

import { IIntegrationCard } from "@/interface";

const IntegrationCard = ({
  integrations,
}: {
  integrations: IIntegrationCard[];
}) => {
  return (
    <div className="integrations__container">
      {integrations.map((integration) => {
        return (
          <div key={integration.id} className="integrations__container__item">
            <Image
              src={integration.imgUrl}
              alt="integration_card"
              width={120}
              height={120}
              className="integrations__container__item__img"
            />
            <div className="integrations__container__item__content">
              <div className="integrations__container__item__content__title">
                {integration.title}
              </div>
              <div className="integrations__container__item__content__category">
                {integration.category}
              </div>
              <div className="integrations__container__item__content__desc">
                {integration.desc}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default IntegrationCard;
