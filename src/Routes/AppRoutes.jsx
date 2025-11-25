import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../Layouts/RootLayout";
import Home from "../components/Hero";
import Project from "../Pages/Project";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout/>,
    children:[
      {
        index: true,
        element: <Home />
      },
      {
        path: "/project/:id",
        element: <Project />
      }
    ]
  }
])
export default router