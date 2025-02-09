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
    date: "2025-02-03",
    title: "Starting my interschip at UniPartners",
    message:
      "My first week at Unipartners reinforced my initial expectation that I still have a long way to go and a lot to learn. The week started off at a good pace—I was introduced to their codebase and given a project of my own to build, with the support and guidance of my mentor.", 
    tags: ["JavaScript","Februari" ],
  },
  {
    id: 2,
    date: "2025-02-6",
    title: "Reflection after week 1",
    message:
      "All in all, I'm happy with my performance this week. I managed to get started on the front end of my project, which I suspect is about 75% complete. I built a landing page where freelancers will eventually be able to enter their logged hours and extra expenses. The main new technologies I worked with were SCSS and Prettier. ",
    tags: ["React", "SCSS", "Februari"],
  },
];

export default dummyPosts;

  