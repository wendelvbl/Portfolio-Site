import { useContext } from "react";
import BlogPost from "../components/blogPost";
import { PortfolioContext } from "../context/context";


const HomePage = () =>{
    
    const {FindLatestPost}= useContext(PortfolioContext);
    let lastPost = FindLatestPost();    
    if(lastPost)

    return(
        <main>
        <div className="ScrollBox">
        <section>
        <h2>Latest blogPost:</h2>
        <BlogPost {...lastPost}/>
        </section>
        <section>
            <h2>Goal:</h2>
            <p>This page is dedicated to sharing insights from my internship at Unipartners. Here, 
            you'll find blog posts documenting my progress, the challenges I face, 
            and the exciting experiences I encounter along the way.</p>
            <p>
            Additionally, you'll find some personal information about me, giving you a glimpse into who I am.
            </p>
        </section>
       
        </div>
        </main>
    )
}

export default HomePage;

