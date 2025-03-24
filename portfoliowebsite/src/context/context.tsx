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
  {
    id: 3,
    date: "2025-02-14",
    title: "Reflection after week 2",
    message:
      "The second week flew by in an instant! I learned a lot of new things, mainly related to authentication. Some of the key tasks I worked on included generating JWT tokens, saving them to a database, and using a CRON job for the first time to send emails. I also authenticated those tokens when they were used. One major takeaway is that I need to focus more on testing. I wrote too much code before verifying that everything worked as expected, which led to me spending three-quarters of Wednesday debugging. All in all, a successful week!",
    tags: ["back-end", "node", "Februari"],
  },
  {
    id: 4,
    date: "2025-02-21",
    title: "Reflection after week 3",
    message:"The third week went by just as fast! This time, I focused on optimizing my CSS and improving the responsiveness of my project. I also designed an email layout for a mail, which was a fun challenge. On the backend, I created a POST API controller, making sure everything worked smoothly. Another big highlight was working with Redux, a state management tool that helped streamline data flow in my project. One key takeaway is that proper state management can make a huge difference in maintaining clean and efficient code. Overall, a productive and insightful week!",
    tags: ["back-end", "node", "Februari","front-end"],
  },
  {
    id: 5,
    date : "2025-02-29",
    title:"Reflection after week 4",
    message:"This week, we set up a POST endpoint for adding timesheets, modified the database, and fixed bugs. The form builder has been further developed, and the forwarded data to the front end has been improved. Additionally, we designed an email template, added extra 404 and redirect components, and worked on visual updates and responsiveness. We also planned the API data structure for specific forms and further optimized the thank-you page and back end."
    ,tags : ["back-end", "node", "Februari","front-end"]
  },
    {
        id: 6,
        date: "2025-03-07",
        title: "Reflection week 5",
        message:"Over the past week, we’ve been working on refactoring and improving our freelancer token management system. Here’s a breakdown of the progress so far: Monday (3/03): We focused on refactoring the backend and optimizing queries related to freelancers. Additional data for the previous month was added to emails and the front-end. We also created a new API endpoint and service to allow manual token generation. Tuesday (4/03): The front-end underwent a major refactoring to align with the new backend changes. Work continued on the query for manually requesting tokens, ensuring efficiency and accuracy. Additionally, we conducted a code review to maintain clean and maintainable code. Wednesday (5/03): A new modal was introduced, allowing users to request tokens manually. This required adding an extra form in the front-end and creating a dedicated route for processing requests. Middleware was also implemented to handle authentication and validation. The front-end modal design was finalized to ensure a smooth user experience. Thursday (6/03): Work continued on the extra modal route, refining its functionality and integrating it with the back-end. Additionally, we implemented email notifications for token requests. The controller and route handling these requests were completed, ensuring that tokens could be issued efficiently. These improvements will provide freelancers with a smoother, more flexible way to manage tokens while keeping the system scalable and maintainable. 🚀"
        ,tags : ["back-end", "node", "March","front-end","Refactoring"]
    },
     {
        id: 7,
        date: "2025-03-14",
        title: "Reflection week 6",
        message:"Over the past weeks, we’ve made significant progress on our project. We’ve refactored the back end, optimized queries, and added extra APIs. The front end saw a new modal, improved validation, and a light/dark switch. We also streamlined the manual token request process and enhanced admin messaging. After thorough reviews and feedback sessions, we’re ready for the next phase! 🚀"
        ,tags : ["SCSS", "React", "March","front-end","Refactoring"]
    },
    {
    id: 8,
    date: "2025-03-21",
    title: "Refactoring & Enhancements",
    message: "This week, we focused on refining both the front end and back end. We aligned UI components, added extra fields, and improved mail layout. Additionally, we tackled an admin route bug and planned the moving-mission project. Exciting progress ahead! 🚀",
    tags: ["Refactoring", "React", "Back-end", "UI", "Bug Fix"]
}

    
];

export default dummyPosts;

  
