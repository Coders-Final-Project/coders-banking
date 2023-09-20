import Link from "next/link";
import Image from "next/image";

import "@/sass/components/_blogCard.scss";

interface IBlogCard {
  image: string;
  width: number;
  height: number;
  category: string;
  date: string;
  title: string;
  authorName: string;
  authorImage: string;
  estimatedTime: string;
}

const BlogCard = ({
  image,
  width,
  height,
  category,
  date,
  title,
  authorName,
  authorImage,
  estimatedTime,
}: IBlogCard) => {
  return (
    <div className="blog__card">
      <Image
        src={image}
        alt="blog_img"
        width={width}
        height={height}
        className="blog__card__img"
      />
      <div className="blog__card__context">
        <div className="blog__card__context__common">
          <div className="blog__card__context__common__category">
            {category}
          </div>
          <div className="blog__card__context__common__date">{date}</div>
        </div>
        <Link href="#" className="blog__card__context__title">
          {title}
        </Link>
        <div className="blog__card__context__author">
          <Image
            src={authorImage}
            alt="author"
            width={24}
            height={24}
            className="blog__card__context__author__img"
          />
          <Link href="#" className="blog__card__context__author__name">
            {authorName}
          </Link>
          <Image
            src="/assets/icons/general/dot.png"
            alt="dot"
            width={6}
            height={6}
          />
          <div className="blog__card__context__author__estimatedTime">
            {estimatedTime}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
