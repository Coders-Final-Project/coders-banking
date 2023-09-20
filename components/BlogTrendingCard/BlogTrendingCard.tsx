import Image from "next/image";

import "@/sass/components/_blogTrendingCard.scss";

import { IBlogTrending } from "@/interface";

const BlogTrendingCard = ({ cards }: { cards: IBlogTrending[] }) => {
  return (
    <div className="trending__cards">
      {cards.map((card) => {
        return (
          <div key={card.id} className="trending__cards__item">
            <Image
              src={card.imgUrl}
              alt="trending_card"
              width={104}
              height={104}
              className="trending__cards__item__img"
            />
            <div className="trending__cards__item__context">
              <div className="trending__cards__item__context__title">
                {card.title}
              </div>
              <div className="trending__cards__item__context__desc">
                {card.desc}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BlogTrendingCard;
