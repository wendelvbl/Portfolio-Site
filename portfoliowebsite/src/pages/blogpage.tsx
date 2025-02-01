import { useContext, useState } from "react";
import BlogFilter from "../components/blogfilter";
import BlogPost from "../components/blogPost";
import { PortfolioContext } from "../context/context";

const BlogPage = () => {
  const { posts } = useContext(PortfolioContext);
  const [selectedTag, setSelectedTag] = useState("");

  const filteredPosts =
    selectedTag === "" ? posts : posts.filter((post) => post.tags.includes(selectedTag));

  return (
    <main className="BlogMain">
      <BlogFilter posts={posts} selectedTag={selectedTag} setSelectedTag={setSelectedTag} />
      <div className="ScrollBox">
        {filteredPosts.map((post) => (
          <BlogPost key={post.id} {...post} />
        ))}
      </div>
    </main>
  );
};

export default BlogPage;
