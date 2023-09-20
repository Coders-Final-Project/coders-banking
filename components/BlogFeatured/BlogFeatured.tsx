import Image from "next/image";

import BlogCard from "../BlogCard/BlogCard";
import RoundedButton from "../RoundedButton/RoundedButton";

import { IBlogCard } from "@/interface";

const BlogFeatured = ({ blogs }: { blogs: IBlogCard[] }) => {
  return (
    <div className="blog__featured">
      <div className="blog__featured__title">Featured articles</div>
      <div className="blog__featured__body">
        <div className="blog__featured__body__card">
          {blogs.map((blog) => {
            if (blog.role === "featured") {
              return (
                <BlogCard key={blog.id} width={730} height={470} {...blog} />
              );
            }
          })}
        </div>
        <div className="blog__featured__body__contact">
          <Image
            src="/assets/blog/mail.png"
            alt="mail"
            width={168}
            height={168}
            className="blog__featured__body__contact__img"
          />
          <div className="blog__featured__body__contact__title">
            Subscribe to keep up to date.
          </div>
          <input
            type="text"
            className="blog__featured__body__contact__input"
            placeholder="Enter your email address"
          />
          <RoundedButton text="Subscribe" />
        </div>
      </div>
    </div>
  );
};

export default BlogFeatured;
