import {
  Route,
  BrowserRouter,
  Routes,
  Outlet,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
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
import Gallery from "./components/Gallery";
import Add_gallery from "./components/Add_gallery";
import All_gallery from "./components/All_gallery";
import Add_event from "./components/Add_event";
import Event from "./components/Event";
const Layout = () => {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
    </>
  );
};
function App() {
  const [auth, setAuth] = useState(sessionStorage.getItem("admin"));

  // useEffect(()=>{
  //   setAuth(sessionStorage.getItem("user"))
  // },[auth])

  return (
    <>
      <BrowserRouter>
        {auth ? (
          <>
            <Layout />
            <Sidebar></Sidebar>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Profile" element={<Profile />} />
              
              <Route path="/Users" element={<Users />} />
              <Route path="/Add_users" element={<Add_users />} />
              <Route path="/Add_users/:id" element={<Add_users />} />
              <Route path="/Gallery" element={<Gallery />} />
              <Route path="/Add_gallery" element={<Add_gallery />} />
              <Route path="/Add_gallery/id" element={<Add_gallery />} />
              <Route path="/All_gallery" element={<All_gallery />} />
              <Route path="/Add_event" element={<Add_event />} />
              <Route path="/Add_event/id" element={<Add_event />} />
              <Route path="/Event" element={<Event />} />

            </Routes>
            <Footer></Footer>
          </>
        ) : (
          <>
            <Header></Header>
            <Routes>
              <Route path="/" element={<Login />} />
              {/* <Route path="/DisplayStudents" exact element={<DisplayStudents />} /> */}
            </Routes>
           
          </>
        )}
      </BrowserRouter>
    </>
  );
}

export default App;