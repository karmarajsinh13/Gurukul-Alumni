import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Events from "./Components/Events";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import ViewEventDetail from "./Components/ViewEventDetail";
import Gallery from "./Components/Gallery";

function App() {
  const Layout = () => {
    return (
      <>
        <Header/>
        <Outlet/>
        <Footer/>
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
          element: <Footer/>,
        },
        {
          path: "/Events",
          element: <Events/>,
        },
        {
          path: "/ViewEventDetail",
          element: <ViewEventDetail/>,
        },
        {
          path: "/Gallery",
          element: <Gallery/>,
        },
      ],
    },
  ]);
  return <>{<RouterProvider router={router} />}</>;
}

export default App;
