import { IBlogCard } from "@/interface";

import BlogCard from "../BlogCard/BlogCard";

const BlogPopular = ({ blogs }: { blogs: IBlogCard[] }) => {
  return (
    <div className="blog__popular">
      <div className="blog__popular__title">Most popular articles</div>
      <div className="blog__popular__body">
        {blogs.map((blog) => {
          if (blog.role === "popular") {
            return (
              <BlogCard key={blog.id} width={400} height={300} {...blog} />
            );
          }
        })}
      </div>
    </div>
  );
};

export default BlogPopular;
