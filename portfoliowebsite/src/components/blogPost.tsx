
interface BlogPostProps{
    title : String,
    message : string,
    date :  string,
}

const BlogPost = ({ title, message, date }: BlogPostProps) => {
    return (
      <article className="BlogPost">
        <h2>{date}</h2>
        <h2>{title}</h2>
        <p>{message}</p>
      </article>
    );
  };

export default BlogPost;
