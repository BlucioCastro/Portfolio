import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home";
import Projects from "../Pages/Projects";

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
        path: "/projects/:id",
        element: <Projects />
      }
    ]
  }
])
export default router