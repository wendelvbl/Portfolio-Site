import './index.css'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import BlogPage from "./pages/blogpage"
import AboutPage from "./pages/aboutpage"
import HomePage from "./pages/homepage"
import Header from './components/header'
import Footer from './components/footer'
import ErrorPage from './pages/errorpage'
import { PortfolioProvider } from './context/context'



const Root = () =>{
  return(
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}


function App() {

  const router = createBrowserRouter([

    {
      path :"/",
      element: <Root/>,
      children: [
        {
          path: "/",
          element: <HomePage />,
      },
        {
          path: "/blog",
          element: <BlogPage/>,
      },
      {
          path: "/about",
          element: <AboutPage/>,
      },
      {
        path: "*",
        element: <ErrorPage />
    }
      ]


  }])
    
  return (
    <PortfolioProvider>
     <RouterProvider router={router} />
    </PortfolioProvider>
  )
}

export default App
