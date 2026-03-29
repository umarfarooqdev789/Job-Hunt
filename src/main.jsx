import { StrictMode} from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from "./Layout"
import Hero from "./Components/Hero"
import JobsListing from "./Components/Jobslisting"
import SavedJobs from "./Components/SavedJobs"
import Worker from "./Components/Worker"
import Login from "./Components/Login"
import AboutUs from "./Components/About"
import Contact from "./Components/Contact"
import TopRatedWorkers from "./Components/TopRatedWorkers"
import {RouterProvider , createBrowserRouter} from "react-router-dom"
import { SearchProvider } from "./SearchContext";
import JobDetails from './Components/JobDetails'
 const router =createBrowserRouter([
  {path:"/",element:<Layout/>,
    children:[
      {path:"",element:<Hero/>},
      {path:"jobs",element:<JobsListing />},
      {path:"saved",element:<SavedJobs/>},
      {path:"card/:id",element:<Worker/>},
      {path:"jobdetail/:id",element:<JobDetails/>},
      {path:"topratedworkers",element:<TopRatedWorkers/>},
      {path:"Login",element:<Login/>},
      {path:"about",element:<AboutUs/>},
      {path:"contact",element:<Contact/>},
    ]
  }
 ])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SearchProvider>
    <RouterProvider router={router}/>
    </SearchProvider>
  </StrictMode>,
)
