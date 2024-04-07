import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { AiOutlineLaptop, AiOutlineMan, AiOutlineProfile } from "react-icons/ai";
import { CiUser } from "react-icons/ci";
import { RiGalleryLine } from "react-icons/ri";
import { PiBuildings, PiContactlessPaymentBold, PiSmileyBold } from "react-icons/pi";
import { IoIosLogOut } from "react-icons/io";

export default function Sidebar() {
  // const [auth, setAuth] = useState(sessionStorage.getItem("user"));
  // const [role_id, setRole] = useState(sessionStorage.getItem("role"));
  // const navigate = useNavigate();

  const menuitemsadmin = [
    {
      path: "/Home",
      name: "Home",
      icon: <IoHomeOutline size={20} color="#FB8340" />,
    },
    {
      path: "/Users",
      name: "Users",
      icon: <CiUser size={20} color="#FB8340" />,
    },
    {
      path: "/Gallery",
      name: "Gallery",
      icon: <RiGalleryLine size={20} color="#FB8340" />,
    },
    {
      path: "/Event",
      name: "Event",
      icon: <PiSmileyBold size={20} color="#FB8340" />,
    },
    {
      path: "/Job",
      name: "Job",
      icon: <AiOutlineLaptop size={20} color="#FB8340" />,
    },
    {
      path: "/Contact",
      name: "Contact",
      icon: <PiContactlessPaymentBold size={20} color="#FB8340" />,
    },
  ];

  
  // const btnSignOut = () => {
  //   sessionStorage.clear();
  //   setAuth("");
  //   // window.location.reload();
  //   navigate("/");
  // };
  return (
    <>
      <div
        class="position-absolute w-100 min-height-300 top-0"
        style={{
          backgroundColor : "#5e72e4 ",
        }}
      >
        <span class="mask bg-primary opacity-6"></span>
      </div>
      <aside
        class="sidenav bg-white navbar navbar-vertical navbar-expand-xs border-0 fixed-start"
        // ms-4  my-3
        id="sidenav-main"
      >
        <div class="sidenav-header">
          <i
            class="fas fa-times p-3 cursor-pointer text-secondary opacity-5 position-absolute end-0 top-0 d-none d-xl-none"
            aria-hidden="true"
            id="iconSidenav"
          ></i>
          <a
            class="navbar-brand m-0"
            href=" https://demos.creative-tim.com/argon-dashboard/pages/dashboard.html "
            target="_blank"
          >
            <img
              src="https://tse3.mm.bing.net/th?id=OIP.2At97O-LiwWs4MoBmIjEcwHaHc&pid=Api&P=0&h=180"
              class="navbar-brand-img h-100"
              alt="main_logo"
            />
            <span class="ms-1 font-weight-bold">&nbsp;&nbsp;G U R U K U L &nbsp;&nbsp;A l u m n i</span>
          </a>
        </div>
        <hr class="horizontal dark mt-0" />
       
          <>
            {/* Menu Items admin */}
            <div
              id="sidenav-collapse-main"
              style={{ marginLeft: "30px", marginRight: "30px" }}
            >
              <ul style={{ listStyleType: "none", padding: 0 }}>
                {menuitemsadmin.map((item, index) => (
                  <li key={index} style={{ marginBottom: "10px" }}>
                    <NavLink
                      to={item.path}
                      className="nav-link"
                      activeClassName="active"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        textDecoration: "none",
                        color: "#000",
                        padding: "10px",
                        borderRadius: "10px",
                        transition: "background-color 0.3s ease",
                      }}
                      activeStyle={{ backgroundColor: "#e6e6e6" }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.backgroundColor = "#f0f0f0")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.backgroundColor = "transparent")
                      }
                    >
                      <div style={{ marginRight: "15px" }}>{item.icon}</div>
                      <span style={{ fontSize: "16px" }}>{item.name}</span>
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </>
       
          
       
          <></>
       

        <hr class="horizontal dark mt-0" />
        {/* Logout */}
        <div
          id="sidenav-collapse-main"
          style={{ marginLeft: "30px", marginRight: "30px" }}
        >
          <ul style={{ listStyleType: "none", padding: 0 }}>
            <li >
              <div
                className="nav-link"
                activeClassName="active"
                style={{
                  display: "flex",
                  alignItems: "center",
                  textDecoration: "none",
                  color: "#000",
                  padding: "10px",
                  borderRadius: "10px",
                  transition: "background-color 0.3s ease",
                }}
                activeStyle={{ backgroundColor: "#e6e6e6" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "#f0f0f0")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "transparent")
                }
              >
                <div style={{ marginRight: "15px" }}>
                  <IoIosLogOut />
                </div>
                <span style={{ fontSize: "16px" }}>Logout</span>
              </div>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}
