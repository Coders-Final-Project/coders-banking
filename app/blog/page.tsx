"use client";

import { useState } from "react";

import FilterButton from "@/components/FilterButton/FilterButton";
import BlogFeatured from "@/components/BlogFeatured/BlogFeatured";

import "@/sass/pages/_blog.scss";

import { blogs } from "@/data/blogData";

const allCategories = [
  "All Topics",
  ...new Set(blogs.map((blog) => blog.category)),
];

const Blog = () => {
  const [blogItems, setBlogItems] = useState(blogs);
  const [categories, setCategories] = useState(allCategories);
  const [activeCategory, setActiveCategory] = useState(allCategories[0]);

  const filterBlogs = (category: string) => {
    const filteredBlogs = blogs.filter((blog) => blog.category === category);
    setBlogItems(filteredBlogs);
    setActiveCategory(category);
  };

  return (
    <main className="blog">
      <div className="blog__title">
        <div className="blog__title__heading">blog</div>
        <div className="blog__title__desc">
          Discover articles and insights from our expert team.{" "}
        </div>
      </div>
      <FilterButton
        categories={categories}
        filterCards={filterBlogs}
        activeCategory={activeCategory}
      />
      <BlogFeatured blogs={blogs} />
    </main>
  );
};

export default Blog;
