import { BlogPost } from "../types";

interface BlogFilterProps {
  posts: BlogPost[];
  selectedTag: string;
  setSelectedTag: (tag: string) => void;
}

const BlogFilter = ({ posts, selectedTag, setSelectedTag }: BlogFilterProps) => {
  // Get unique tags from all blog posts
  const allTags = Array.from(new Set(posts.flatMap((post) => post.tags)));

  return (
    <div id="tagbox">
      <label htmlFor="tagFilter">
        Filter by Tag:
      </label>
      <select
        id="tagFilter"
        value={selectedTag}
        onChange={(e) => setSelectedTag(e.target.value)}
      >
        <option value="">All</option>
        {allTags.map((tag) => (
          <option key={tag} value={tag}>
            {tag}
          </option>
        ))}
      </select>
    </div>
  );
};

export default BlogFilter;
