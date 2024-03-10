import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Event from "./Components/Events";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import ViewEventDetail from "./Components/ViewEventDetail";

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
          path: "/Event",
          element: <Event/>,
        },
        {
          path: "/ViewEventDetail",
          element: <ViewEventDetail/>,
        },
      ],
    },
  ]);
  return <>{<RouterProvider router={router} />}</>;
}

export default App;