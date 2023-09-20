import { IBlogCard } from "@/interface";
import BlogCard from "../BlogCard/BlogCard";

const BlogLatest = ({ blogs }: { blogs: IBlogCard[] }) => {
  return (
    <div className="blog__latest">
      <div className="blog__latest__title">Latest articles</div>
      <div className="blog__latest__body">
        {blogs.map((blog) => {
          if (blog.role === "latest") {
            return (
              <BlogCard key={blog.id} width={647} height={427} {...blog} />
            );
          }
        })}
      </div>
    </div>
  );
};

export default BlogLatest;
