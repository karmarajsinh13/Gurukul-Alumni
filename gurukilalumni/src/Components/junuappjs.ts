import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Events from "./Components/Events";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import ViewEventDetail from "./Components/ViewEventDetail";
import Gallery from "./Components/Gallery";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Job from "./Components/Job";
import Profile from "./Components/Profile";
import ViewJob from "./Components/ViewJob";
import ViewGallery from "./Components/ViewGallery";
import Login from "./Components/Login";

function App() {
  const Layout = () => {
    return (
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
    );
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/Home",
          element: <Home />,
        },
        {
          path: "/Footer",
          element: <Footer />,
        },
        {
          path: "/Events",
          element: <Events />,
        },
        {
          path: "/ViewEventDetail",
          element: <ViewEventDetail />,
        },
        {
          path: "/Gallery",
          element: <Gallery />,
        },
        {
          path: "/About",
          element: <About />,
        },
        {
          path: "/Contact",
          element: <Contact />,
        },
        {
          path: "/Job",
          element: <Job />,
        },
        {
          path: "Profile",
          element: <Profile />,
        },
        {
          path: "/ViewJob",
          element: <ViewJob />,
        },
        {
          path: "/ViewGallery",
          element: <ViewGallery/>,
        },
        {
          path: "/Login",
          element: <Login/>,
        },
      ],
    },
  ]);
  return <>{<RouterProvider router={router} />}</>;
}

export default App;
