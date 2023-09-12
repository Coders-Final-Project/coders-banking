import Image from "next/image";

import "@/sass/components/_pricingcard.scss";

export interface IPricingCard {
  id: number;
  name: string;
  price: number;
  description: string;
  category: string;
  comment: string;
  lists: { id: number; text: string }[];
}

const PricingCard = ({ pricingCard }: { pricingCard: IPricingCard[] }) => {
  return (
    <div className="pricing__offer__cards">
      {pricingCard.map((card) => {
        return (
          <div key={card.id} className="pricing__offer__cards__item">
            <div className="pricing__offer__cards__item__content">
              <Image
                src="/assets/icons/general/3dcube.png"
                alt="3dcube"
                width={24}
                height={24}
                className="pricing__offer__cards__item__content__icon"
              />
              <div className="pricing__offer__cards__item__content__btn">
                {card.name}
              </div>
              <div className="pricing__offer__cards__item__content__charge">
                <div className="pricing__offer__cards__item__content__charge__header">
                  {card.price === 0 ? "free" : `$${card.price}`}
                  <span>{card.price !== 0 && ` / ${card.category}`}</span>
                </div>
                <div className="pricing__offer__cards__item__content__charge__desc">
                  {card.description}
                </div>
                <div className="pricing__offer__cards__item__content__charge__comment">
                  {card.comment}
                </div>
              </div>
              <div className="pricing__offer__cards__item__content__list">
                {card.lists.map((cardListItem) => {
                  return (
                    <div
                      key={cardListItem.id}
                      className="pricing__offer__cards__item__content__list__element"
                    >
                      <Image
                        src="/assets/icons/general/done.png"
                        alt="done"
                        width={40}
                        height={40}
                        className="pricing__offer__cards__item__content__list__element__icon"
                      />
                      <div className="pricing__offer__cards__item__content__list__element__text">
                        {cardListItem.text}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="pricing__offer__cards__item__btn">get started</div>
          </div>
        );
      })}
    </div>
  );
};

export default PricingCard;
