import React, { useState, useEffect } from "react";
import {
  createBrowserRouter,
  Route,
  BrowserRouter,
  Routes,
  RouterProvider,
  Outlet,
} from "react-router-dom";
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
import Editprofile from "./Components/Editprofile";
import Editprofileacc from "./Components/Editprofileacc";
import All_alumni from "./Components/All_alumni";

const Layout = () => {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
    </>
  );
};
function App() {
  const [auth, setAuth] = useState(sessionStorage.getItem("user"));

  // useEffect(()=>{
  //   setAuth(sessionStorage.getItem("user"))
  // },[auth])

  return (
    <>
      <BrowserRouter>
        {auth ? (
          <>
            <Layout />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Events" element={<Events />} />
              <Route path="/ViewEventDetail" element={<ViewEventDetail />} />
              <Route path="/ViewEventDetail/:id" element={<ViewEventDetail />} />
              <Route path="/All_alumni" element={<All_alumni />} />
              <Route path="/Gallery" element={<Gallery />} />
              <Route path="/About" element={<About />} />
              <Route path="/Contact" element={<Contact />} />
              <Route path="/Job" element={<Job />} />
              <Route path="/Profile" element={<Profile />} />
              <Route path="/EditProfile" element={<Editprofile />} />
              <Route path="/EditProfile/:id" element={<Editprofile />} />
              <Route path="/Editprofileacc" element={<Editprofileacc />} />
              <Route path="/Editprofileacc/:id" element={<Editprofileacc />} />
              <Route path="/ViewJob" element={<ViewJob />} />
              <Route path="/ViewGallery" element={<ViewGallery />} />
            </Routes>
            <Footer></Footer>
          </>
        ) : (
          <>
            <Header></Header>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/Events" element={<Events />} />
              <Route path="/Gallery" element={<Gallery />} />
              <Route path="/About" element={<About />} />
              <Route path="/Contact" element={<Contact />} />
              <Route path="/Job" element={<Job />} />
              <Route path="/All_alumni" element={<All_alumni />} />
              {/* <Route path="/DisplayStudents" exact element={<DisplayStudents />} /> */}
            </Routes>
            <Footer></Footer>
          </>
        )}
      </BrowserRouter>
    </>
  );
}

export default App;
