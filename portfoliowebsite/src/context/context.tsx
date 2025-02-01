import React, { useState } from "react";
import { BlogPost } from "../types";




interface PortfolioContext{
    posts : BlogPost[],
    setPosts : (posts : BlogPost[]) => void,
    filterdPosts : BlogPost[],
    setFilterdPosts : (post : BlogPost[]) =>void,

    FindLatestPost: () => BlogPost | undefined;

}


export const PortfolioContext = React.createContext<PortfolioContext>({
    posts : [],
    setPosts : () => {},
    filterdPosts : [],
    setFilterdPosts : () => {},

    FindLatestPost: () => undefined,
        
    

})

export const PortfolioProvider = ({ children }: { children: React.ReactNode }) => {

    const [ posts , setPosts] = useState<BlogPost[]>(dummyPosts);
    const [filterdPosts , setFilterdPosts] = useState<BlogPost[]>([]);


    function FindLatestPost(): BlogPost | undefined {
        return posts.reduce((latest, post) =>
          new Date(post.date) > new Date(latest.date) ? post : latest
        );
      }
      

    return(
        <PortfolioContext.Provider value={{
            posts : posts,
            setPosts,
            filterdPosts : filterdPosts,
            setFilterdPosts,
            FindLatestPost,

        }}>
            {children}
        </PortfolioContext.Provider>
    )
}


const dummyPosts: BlogPost[] = [
  {
    id: 1,
    date: "2024-01-15",
    title: "Learning TypeScript Basics",
    message:
      "TypeScript is a powerful tool for developers. It adds type safety to JavaScript, making it easier to write reliable and maintainable code.",
    tags: ["JavaScript", "TypeScript", "Easy"],
  },
  {
    id: 2,
    date: "2024-02-01",
    title: "Understanding React Hooks",
    message:
      "React hooks, like useState and useEffect, help developers manage state and side effects in functional components, making code more readable and reusable.",
    tags: ["React", "Hooks", "Medium"],
  },
  {
    id: 3,
    date: "2024-03-10",
    title: "CSS Grid: A Game Changer",
    message:
      "CSS Grid provides a powerful way to create complex layouts with minimal code, making web design more flexible and dynamic than ever.",
    tags: ["CSS", "Grid", "Easy"],
  },
  {
    id: 4,
    date: "2024-04-05",
    title: "Exploring Web Accessibility",
    message:
      "Web accessibility ensures that websites are usable by people with disabilities, providing an inclusive experience for all users.",
    tags: ["Accessibility", "Web Design", "Medium"],
  },
  {
    id: 5,
    date: "2024-05-20",
    title: "The Importance of Version Control",
    message:
      "Version control systems like Git help developers track changes to their code, collaborate with others, and manage different versions of a project.",
    tags: ["Git", "Version Control", "Hard"],
  },
];

export default dummyPosts;

  