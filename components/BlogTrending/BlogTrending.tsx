import BlogCard from "../BlogCard/BlogCard";
import BlogTrendingCard from "../BlogTrendingCard/BlogTrendingCard";

import { trendingCategories } from "@/data/blogData";

import { IBlogCard } from "@/interface";

const BlogTrending = ({ blogs }: { blogs: IBlogCard[] }) => {
  return (
    <div className="blog__trending">
      <div className="blog__trending__title">Trending articles</div>
      <div className="blog__trending__body">
        <div className="blog__trending__body__card">
          {blogs.map((blog) => {
            if (blog.role === "trending") {
              return (
                <BlogCard key={blog.id} width={730} height={470} {...blog} />
              );
            }
          })}
        </div>
        <div className="blog__trending__body__category">
          <BlogTrendingCard cards={trendingCategories} />
        </div>
      </div>
    </div>
  );
};

export default BlogTrending;
