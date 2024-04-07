import { Route, BrowserRouter, Routes, Outlet, createBrowserRouter, RouterProvider } from "react-router-dom";
import React, { useState } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import Users from "./components/Users";
import Property from "./components/Property";
import Add_users from "./components/Add_users";
import Add_property from "./components/Add_property";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Dealer from "./components/Dealer";
import Add_dealer from "./components/Add_dealer";
import PropertyforDealer from "./components/PropertyforDealer";
import Add_property_dealer from "./components/Add_property_dealer";


function App() {
  const Layout = () => {
    return (
      <>
        <Header></Header>
        <Sidebar></Sidebar>
        <Outlet></Outlet>
      </>
    );
  };
  const router1 = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children: [
        {
          path: "/Home",
          element: <Home></Home>,
        },
        {
          path: "/Users",
          element: <Users></Users>,
        },
        {
          path: "/Add_users",
          element: <Add_users></Add_users>,
        },
        {
          path: "/Add_users/:id",
          element: <Add_users></Add_users>,
        },
        {
          path: "/Profile",
          element: <Profile></Profile>,
        },
        {
          path: "/Property",
          element: <Property></Property>,
        },
        {
          path: "/Add_property",
          element: <Add_property></Add_property>,
        },
        {
          path: "/Add_property/:id",
          element: <Add_property></Add_property>,
        },
        {
          path: "/Dealer",
          element: <Dealer></Dealer>,
        },
        {
          path: "/Add_dealer",
          element: <Add_dealer></Add_dealer>,
        },
        {
          path: "/Add_dealer/:id",
          element: <Add_dealer></Add_dealer>,
        },
        {
          path: "/PropertyforDealer",
          element: <PropertyforDealer></PropertyforDealer>,
        },
        {
          path: "/Add_property_dealer",
          element: <Add_property_dealer></Add_property_dealer>,
        },
        {
          path: "/Add_property_dealer/:id",
          element: <Add_property_dealer></Add_property_dealer>,
        },
     
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router1}></RouterProvider>
    </>
  );
  // const [auth, setAuth] = useState(sessionStorage.getItem("user"));
  // const [role_id, setRole] = useState(sessionStorage.getItem("role"));

  // return (
  //   <>
  //     <BrowserRouter>
  //       {auth && role_id == 1 ? (
  //         <>
  //           <Layout />
  //           <Routes>
  //             <Route path="/" element={<Home />} />
  //             <Route path="/Home" element={<Home />} />
  //             <Route path="/Users" element={<Users />} />
  //             <Route path="/Add_users" element={<Add_users />} />
  //             <Route path="/Add_users/:id" element={<Add_users />} />
  //             <Route path="/Profile" element={<Profile />} />
  //             <Route path="/Property" element={<Property />} />
  //             <Route path="/Add_property" element={<Add_property />} />
  //             <Route path="/Add_property/:id" element={<Add_property />} />
  //             <Route path="/Dealer" element={<Dealer />} />
  //             <Route path="/Add_dealer" element={<Add_dealer />} />
  //             <Route path="/Add_dealer/:id" element={<Add_dealer />} />
  //           </Routes>
  //           <Footer />
  //         </>
  //       ) : auth && role_id == 2 ? (
  //         <>
  //           <Layout />
  //           <Routes>
  //             <Route path="/" element={<Home />} />
  //             <Route path="/Home" element={<Home />} />
  //             <Route
  //               path="/PropertyforDealer"
  //               element={<PropertyforDealer />}
  //             />
  //             <Route path="/Add_propertyd" element={<Add_property_dealer />} />
  //             <Route
  //               path="/Add_propertyd/:id"
  //               element={<Add_property_dealer />}
  //             />
  //           </Routes>
  //           <Footer />
  //         </>
  //       ) : (
  //         <>
  //           <Routes>
  //             <Route path="/" element={<Login />} />
  //           </Routes>
  //         </>
  //       )}
  //     </BrowserRouter>
  //   </>
  // );
}
export default App;