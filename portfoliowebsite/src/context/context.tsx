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
    },
    {
    "id": 9,
    "date": "2025-03-28",
    "title": "Moving-Mission & Points Calculation",
    "message": "Deze week werkten we aan de moving-mission service, validatie van workouts en freeze costs, en herberekening van gebruikerspunten. Daarnaast hebben we de calculate all points service afgerond en een evaluatie met meneer Van de Poel gehouden. 🚀",
    "tags": ["Moving-Mission", "Back-end", "Validation", "Points Calculation"]
    },
    {
  "id": 10,
  "date": "2025-04-03",
  "title": "Moving-Mission: Backend Logica & Front-end Koppeling",
  "message": "Deze week werd het puntensysteem binnen de Moving-Mission service volledig herwerkt en correct gekoppeld aan de database. Er werd privacylogica toegevoegd aan de route die later afbeeldingen zal aanleveren aan de front-end. Ook is gestart met het opzetten van Redux stores en het verbinden van dynamische data tussen back- en front-end. Tot slot werd de leaderboard uitgewerkt en gekoppeld aan dynamische backendgegevens. Alles staat klaar om gegevens netjes te visualiseren. 💪",
  "tags": ["Moving-Mission", "Back-end", "Front-end", "Privacy", "Leaderboard", "Redux"]
},
    {
  "id": 12,
  "date": "2025-04-10",
  "title": "UI Redesign & Deadline Focus – Moving-Mission",
  "message": "Deze week stond in het teken van verfijning en visuele verbeteringen. De prestatiepagina kreeg een volledige restyling met als nieuw idee: medailles weergeven met een goudkleurige gradient in plaats van vlakke kleuren. Verder werd er hard gewerkt aan de front-end van Moving-Mission in aanloop naar de deadline die voor volgende week dinsdag werd vooropgesteld. Het leaderboard werd opnieuw ontworpen met een frisse layout en verbeterde modal. Ten slotte werd de homepage uitgebreid met een gepagineerde infinite scroll feed om content gebruiksvriendelijker te laden. 🔥🎯",
  "tags": ["Moving-Mission", "Front-end", "UI/UX", "Leaderboard", "Deadline", "Infinite Scroll"]
},
    {
  "id": 13,
  "date": "2025-04-17",
  "title": "Medaille Vereisten & Sociaal Pagina – Verfijning en Uitdagingen",
  "message": "Vandaag stond in het teken van het perfectioneren van de medaillevereisten en het verbeteren van de visuele aspecten van de prestaties. De medailles kregen een herstijl, met draaiende ribbons bovenop en informatieve achterkanten die de betekenis van de behaalde prestaties uitleggen. Een subtiele toevoeging die de gebruikerservaring versterkt door niet alleen de visuele uitstraling te verbeteren, maar ook context te bieden over de behaalde successen. 🎖️💫\n\nDaarnaast heb ik flink gewerkt aan de sociaal pagina. Na veel nadenken en strategiseren over hoe deze pagina het beste vorm te geven, heb ik de nodige back-end routes toegevoegd en verschillende front-end aanpassingen doorgevoerd. Helaas stuitte ik op een probleem met de onClick functie, wat me enige tijd kostte om op te lossen. Dit bleek een kleine maar frustrerende uitdaging, maar het was uiteindelijk de moeite waard om de pagina optimaal werkend te krijgen.\n\nIn de komende dagen zal ik verder werken aan het fine-tunen van deze elementen en nieuwe functionaliteiten toevoegen om de ervaring voor de gebruikers nog beter te maken. 💻🚀",
  "tags": ["Medaille", "Sociaal Pagina", "UI/UX", "Back-end", "Front-end", "Probleemoplossing", "Ontwikkeling"]
},
{
  "id": 14,
  "date": "2025-04-24",
  "title": "Implementatie Medailles – Structuur, Connecties en Testfase",
  "message": "De afgelopen dagen stonden volledig in het teken van de implementatie van het nieuwe medaillesysteem. 🛠️\n\nOp 21 april begon ik met het opzetten van de basis: het maken van de nodige tabellen en het uitdenken van het systeem waarmee gebruikers medailles kunnen verdienen. Dit vroeg om veel denkwerk, zodat het niet alleen logisch maar ook schaalbaar en onderhoudbaar zou zijn.\n\nVervolgens heb ik op 22 april de back-end routes en controllers opgezet om alle data rondom medailles goed te kunnen beheren. Hierbij lag de nadruk op een stevige structuur, zodat uitbreidingen later probleemloos mogelijk zijn.\n\nOp 23 april was het tijd om de front-end aan te passen: zorgen dat alles effectief data uit de database haalt. Ik heb nieuwe Redux stores aangemaakt, actions geschreven en enkele bestaande controllers aangepast om een vlotte en correcte gegevensstroom te garanderen.\n\nVandaag, 24 april, heb ik het medaillesysteem afgewerkt en uitvoerig getest met de zes medailles die al in de databank stonden. Tijdens deze fase heb ik ook bepaalde controllers herwerkt zodat er geen directe data vanuit de front-end zonder validatie in de database terechtkomt – een belangrijke stap om de veiligheid en betrouwbaarheid van het systeem te waarborgen.\n\nDe komende tijd ga ik verder met uitbreidingen en verfijningen, zodat het medaillesysteem niet alleen functioneel is, maar ook een echt motiverend element binnen de applicatie vormt. 🏅✨",
  "tags": ["Medailles", "Back-end", "Front-end", "Redux", "Database", "Validatie", "Ontwikkeling"]
},
{
  "id": 15,
  "date": "2025-05-03",
  "title": "Een Week van Emotie en Innovatie – WebSockets, Redux & Jest",
  "message": "Deze week kende twee gezichten: het was een periode van intensieve technische vooruitgang, maar ook van emotionele momenten binnen het team.\n\nBegin van de week kregen enkele collega’s van het interne team te horen dat hun samenwerking werd beëindigd. Dat nieuws kwam hard binnen en zorgde voor een gespannen sfeer. Het blijft confronterend wanneer mensen met wie je dagelijks samenwerkt plots wegvallen. Toch probeerde ik mijn focus te behouden en constructief verder te werken aan de projecten waar ik verantwoordelijk voor ben.\n\nOp technisch vlak heb ik me deze week verdiept in onze WebSocket-architectuur. Ik heb de servercontext uitgebreid met nieuwe functies, waardoor broadcasts vanuit de API nu automatisch leiden tot updates in de Redux stores bij de clients. Hierdoor worden de betrokken componenten automatisch voorzien van de meest actuele data – een belangrijke stap richting real-time synchronisatie binnen onze applicatie.\n\nDaarnaast ben ik voor het eerst echt aan de slag gegaan met Jest, een testing framework voor JavaScript en TypeScript. Op 29 april maakte ik kennis met de basisprincipes, en op 30 april ben ik dieper gegaan door controllerfuncties te testen via Jest mocks. Door testdata te simuleren kon ik de werking van onze backend-functies in isolatie valideren, wat niet alleen zorgt voor betrouwbaardere code, maar ook het vertrouwen in toekomstige wijzigingen vergroot.\n\nOndanks het moeilijke begin van de week kijk ik met voldoening terug op de technische stappen die ik heb gezet. De combinatie van real-time updates via WebSockets en solide testing met Jest vormt een stevige basis voor verdere ontwikkeling.",
  "tags": ["WebSockets", "Redux", "Real-time", "Jest", "Testing", "Mocking", "Werkcultuur", "Terugblik"]
},
    {
  "id": 16,
  "date": "2025-05-08",
  "title": "Bouwen aan een Eigen NPM Package – Query Builders, Tests & Teamwork",
  "message": "Deze week stond volledig in het teken van ontwikkeling, samenwerking en technische verfijning. Waar het begon met wat frustraties, eindigde het met een gevoel van voldoening en trots.\n\nMaandag begon wat stroef: problemen met mijn Docker-omgeving en dist-bestanden zorgden voor vertraging. Gelukkig kwam daar snel verandering in. In de namiddag kreeg ik een nieuwe opdracht: samen met mijn stagebegeleider starten we aan een eigen NPM package – een query builder. Het idee is om een fluent interface te maken waarmee je op een elegante manier database queries kunt opbouwen.\n\nDinsdag bestond voornamelijk uit trial-and-error. De `select`- en `from`-functionaliteiten kwamen tot leven, maar het was duidelijk dat we nog aan het begin stonden van iets groters. Elke fout leverde inzichten op en langzaam begon de structuur zich te vormen.\n\nWoensdag kon ik echt vaart maken. Ik implementeerde `where`, `orderBy` en een `get`-functie. Ook schreef ik voor het eerst unit tests met Vitest – een testing framework dat verrassend prettig werkt. Tot slot begon ik aan de documentatie van de huidige functionaliteiten, zodat we niet alleen bouwen, maar ook duidelijk communiceren wat er mogelijk is.\n\nDonderdag stond in het teken van reflectie en verfijning. Samen met mijn begeleider bekeken we mijn werk van de vorige dagen. We bespraken verbeterpunten, refactoren delen van de code en werkten verder aan de uitbreiding van de package. Het is bijzonder waardevol om dit soort feedbackmomenten te hebben: je leert niet alleen over code, maar ook over samenwerking, visie en het iteratieve karakter van softwareontwikkeling.\n\nDeze week was technisch uitdagend, leerzaam en gaf me een eerste glimp van hoe het voelt om echt iets ‘eigens’ te bouwen binnen een professioneel kader.",
  "tags": ["NPM", "QueryBuilder", "Vitest", "Testing", "Samenwerking", "Documentatie", "Refactoren", "Stage"]
}








    
];

export default dummyPosts;

  
