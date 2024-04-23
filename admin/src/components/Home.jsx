import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import axios from "axios";
import { useEffect, useState } from "react";
import { RiAddLine, RiPulseFill } from "react-icons/ri";
import { RxFilePlus } from "react-icons/rx";
import { HiArrowRightOnRectangle } from "react-icons/hi2";
import $ from "jquery";
//Datatable Modules
import "../../node_modules/datatables.net-dt/js/dataTables.dataTables.js";

import "../../node_modules/datatables.net-dt/css/jquery.dataTables.min.css";
import "../../node_modules/datatables.net-buttons/js/dataTables.buttons.js";
import "../../node_modules/datatables.net-buttons/js/buttons.colVis.js";
import "../../node_modules/datatables.net-buttons/js/buttons.flash.js";
import "../../node_modules/datatables.net-buttons/js/buttons.html5.js";
import "../../node_modules/datatables.net-buttons/js/buttons.print.js";
import "../../node_modules/datatables.net-responsive-bs5/css/responsive.bootstrap5.min.css";
import "../../node_modules/datatables.net-responsive-bs5/js/responsive.bootstrap5.min.js";

export default function Home() {
  const [user, setUser] = useState([]);
  const [totalUsers, setTotalUsers] = useState(0);

  useEffect(() => {
    getTotalUsers();
    getUser();
  }, []);

  const getTotalUsers = async () => {
    try {
      const res = await axios.get("http://localhost:3000/gurukulalumni/user");
      setUser(res.data);
      setTotalUsers(res.data.length);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  $(document).ready(function () {
    setTimeout(function () {
      $("#example").DataTable({
        bDestroy: true,
        pagingType: "full_numbers",
        pageLength: 5,
        processing: true,
        dom: "Bfrtip",
        buttons: ["copy", "csv", "print"],
      });
    }, 1000);
  });

  const getUser = async () => {
    const res = await axios.get("http://localhost:3000/gurukulalumni/user");
    setUser(res.data);

    console.log(res.data);
  };
  const deleteUser = async (user_id) => {
    let ans = window.confirm("are you sure?");
    if (ans) {
      const res = await axios.delete(
        "http://localhost:3000/gurukulalumni/user/" + user_id
      );
      console.log(res.data);
      alert(res.data);
      getUser();
    }
  };
  return (
    <div style={{ marginLeft: "270px", marginTop: "50px" }}>
      <main class="main-content position-relative border-radius-lg ">
        {/* <nav className="navbar navbar-top navbar-expand navbar-dark bg-primary border-bottom">
    <div className="container-fluid">
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
   
     
        <ul className="navbar-nav align-items-center  ml-auto ml-md-0 ">
          <li className="nav-item dropdown">
            <a className="nav-link pr-0"  role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <div className="media align-items-center ">
                <span className=" avatar avatar-sm rounded-circle d-block mr-2 bg-gradient-dark ">
                  <img  src="https://tse3.mm.bing.net/th?id=OIP.2At97O-LiwWs4MoBmIjEcwHaHc&pid=Api&P=0&h=180" />

                </span>
                <div className="media-body  ml-2  d-none d-lg-block">
                  <span className="mb-0 text-sm  font-weight-bold">John Snow</span>
                </div>
              </div>
            </a>
            <div className="dropdown-menu  dropdown-menu-right ">
              <div className="dropdown-header noti-title">
                <h6 className="text-overflow m-0">Welcome!</h6>
              </div>
              <a href="#!" className="dropdown-item">
                <i className="ni ni-single-02" />
                <span>My profile</span>
              </a>
              <a href="#!" className="dropdown-item">
                <i className="ni ni-settings-gear-65" />
                <span>Settings</span>
              </a>
              <a href="#!" className="dropdown-item">
                <i className="ni ni-calendar-grid-58" />
                <span>Activity</span>
              </a>
              <a href="#!" className="dropdown-item">
                <i className="ni ni-support-16" />
                <span>Support</span>
              </a>
              <div className="dropdown-divider" />
              <a href="#!" className="dropdown-item">
                <i className="ni ni-user-run" />
                <span>Logout</span>
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>    */}

        <div class="container-fluid py-4">
          <div class="row">
            <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
              <div class="card">
                <div class="card-body p-3">
                  <div class="row">
                    <div class="col-8">
                      <div class="numbers">
                        <p class="text-sm mb-0 text-uppercase font-weight-bold">
                          Total Alumnis
                        </p>
                        <h5
                          class="font-weight-bolder"
                          style={{ fontSize: "35px" }}
                        >
                          {totalUsers}
                        </h5>
                        <p class="mb-0">
                          <span class="text-success text-sm font-weight-bolder">
                            {/* +55% */}
                          </span>
                          {/* since yesterday */}
                        </p>
                      </div>
                    </div>
                    <div class="col-4 text-end">
                      <div class="icon icon-shape bg-gradient-primary shadow-primary text-center rounded-circle">
                        <i
                          class="ni ni-world text-lg opacity-10"
                          aria-hidden="true"
                        ></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
              <div class="card">
                <div class="card-body p-3">
                  <div class="row">
                    <div class="col-8">
                      <div class="numbers">
                        <p class="text-sm mb-0 text-uppercase font-weight-bold">
                          Today's Users
                        </p>
                        <h5 class="font-weight-bolder">2,300</h5>
                        <p class="mb-0">
                          <span class="text-success text-sm font-weight-bolder">
                            +3%
                          </span>
                          since last week
                        </p>
                      </div>
                    </div>
                    <div class="col-4 text-end">
                      <div class="icon icon-shape bg-gradient-danger shadow-danger text-center rounded-circle">
                        <i
                          class="ni ni-world text-lg opacity-10"
                          aria-hidden="true"
                        ></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
              <div class="card">
                <div class="card-body p-3">
                  <div class="row">
                    <div class="col-8">
                      <div class="numbers">
                        <p class="text-sm mb-0 text-uppercase font-weight-bold">
                          New Clients
                        </p>
                        <h5 class="font-weight-bolder">+3,462</h5>
                        <p class="mb-0">
                          <span class="text-danger text-sm font-weight-bolder">
                            -2%
                          </span>
                          since last quarter
                        </p>
                      </div>
                    </div>
                    <div class="col-4 text-end">
                      <div class="icon icon-shape bg-gradient-success shadow-success text-center rounded-circle">
                        <i
                          class="ni ni-paper-diploma text-lg opacity-10"
                          aria-hidden="true"
                        ></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-sm-6">
              <div class="card">
                <div class="card-body p-3">
                  <div class="row">
                    <div class="col-8">
                      <div class="numbers">
                        <p class="text-sm mb-0 text-uppercase font-weight-bold">
                          Sales
                        </p>
                        <h5 class="font-weight-bolder">$103,430</h5>
                        <p class="mb-0">
                          <span class="text-success text-sm font-weight-bolder">
                            +5%
                          </span>{" "}
                          than last month
                        </p>
                      </div>
                    </div>
                    <div class="col-4 text-end">
                      <div class="icon icon-shape bg-gradient-warning shadow-warning text-center rounded-circle">
                        <i
                          class="ni ni-cart text-lg opacity-10"
                          aria-hidden="true"
                        ></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="row mt-4">
            <div class="col-lg-7 mb-lg-0 mb-4">
              <div class="card z-index-2 h-100 ">
                <div class="card-header pb-0 p-3">
                  <div class="d-flex justify-content-between">
                    <link
                      rel="stylesheet"
                      type="text/css"
                      href="../../public/assets/css/dataTables.bootstrap5.min.css"
                    ></link>
                    <link
                      rel="stylesheet"
                      type="text/css"
                      href="../../public/assets/css/responsive.bootstrap5.min.css"
                    ></link>
                    <h6 class="mb-2">All Users</h6>
                  </div>
                </div>
                <div class="table-responsive">
                  <table class="table align-items-center ">
                    <tbody>
                      {user.map((user) => (
                        <tr>
                          <td class="w-30">
                            <div class="d-flex px-2 py-1 align-items-center">
                              <div>
                                <img
                                  src={`http://localhost:3000/uploads/${user.photo}`}
                                  class="avatar avatar-sm me-3"
                                  alt="Country flag"
                                />
                              </div>
                              <div class="ms-4">
                                <p class="text-xs font-weight-bold mb-0">
                                  Name:
                                </p>
                                <h6 class="text-sm mb-0">{user.firstname}</h6>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div class="text-center">
                              <p class="text-xs font-weight-bold mb-0">City:</p>
                              <h6 class="text-sm mb-0">{user.city}</h6>
                            </div>
                          </td>
                          <td>
                            <div class="text-center">
                              <p class="text-xs font-weight-bold mb-0">
                                Contact:
                              </p>
                              <h6 class="text-sm mb-0">{user.phone}</h6>
                            </div>
                          </td>

                          {user.status == "1" ? (
                            <td class="align-middle text-sm">
                              <div class="col text-center">
                                <p class="text-xs font-weight-bold mb-0">
                                  Status:
                                </p>
                                <span class="badge badge-sm bg-gradient-success">
                                  Active
                                </span>
                              </div>
                            </td>
                          ) : (
                            <td class="align-middle text-sm">
                              <div class="col text-center">
                                <p class="text-xs font-weight-bold mb-0">
                                  Status:
                                </p>
                                <span class="badge badge-sm bg-gradient-secondary">
                                  Inactive
                                </span>
                              </div>
                            </td>
                          )}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            {/* <div class="col-lg-7 mb-lg-0 mb-4">
              <div class="card z-index-2 h-100">
                <div class="card-header pb-0 pt-3 bg-transparent">
                  <h6 class="text-capitalize">Sales overview</h6>
                  <p class="text-sm mb-0">
                    <i class="fa fa-arrow-up text-success"></i>
                    <span class="font-weight-bold">4% more</span> in 2021
                  </p>
                </div>
                <div class="card-body p-3">
                  <div class="chart">
                    <canvas
                      id="chart-line"
                      class="chart-canvas"
                      height="300"
                    ></canvas>
                  </div>
                </div>
              </div>
            </div> */}
            <div class="col-lg-5">
              <div class="card card-carousel overflow-hidden h-100 p-0">
                <div
                  id="carouselExampleCaptions"
                  class="carousel slide h-100"
                  data-bs-ride="carousel"
                >
                  <div class="carousel-inner border-radius-lg h-100">
                    <div
                      class="carousel-item h-100 active"
                      style={{
                        backgroundImage: "url('../assets/img/img1.jpg')",
                        backgroundSize: "cover",
                      }}
                    >
                      <div class="carousel-caption d-none d-md-block bottom-0 text-start start-0 ms-5">
                        <div class="icon icon-shape icon-sm bg-white text-center border-radius-md mb-3">
                          <i class="ni ni-camera-compact text-dark opacity-10"></i>
                        </div>
                        <h5
                          class="text-black mb-1"
                          style={{
                            color: "black",
                            fontWeight: "bold",
                            fontSize: "20px",

                            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                            textTransform: "uppercase",
                          }}
                        >
                          Welcome Admin , To{" "}
                          <span
                            style={{
                              color: "#E6E6FA",
                              borderBlockColor: "red",
                            }}
                          >
                            Gurukul
                          </span>{" "}
                          Alumni
                        </h5>
                        <h6 class="text-black">By Karmarajsinh Gohil</h6>
                      </div>
                    </div>
                    <div
                      class="carousel-item h-100"
                      style={{
                        backgroundImage: "url('../assets/img/img2.jpg')",
                        backgroundSize: "cover",
                      }}
                    >
                      {/* <div class="carousel-caption d-none d-md-block bottom-0 text-start start-0 ms-5">
                        <div class="icon icon-shape icon-sm bg-white text-center border-radius-md mb-3">
                          <i class="ni ni-bulb-61 text-dark opacity-10"></i>
                        </div>
                        <h5 class="text-white mb-1">
                          Faster way to create web pages
                        </h5>
                        <p>
                          That’s my skill. I’m not really specifically talented
                          at anything except for the ability to learn.
                        </p>
                      </div> */}
                    </div>
                    <div
                      class="carousel-item h-100"
                      style={{
                        backgroundImage: "url('../assets/img/img3.jpg')",
                        backgroundSize: "cover",
                      }}
                    >
                      {/* <div class="carousel-caption d-none d-md-block bottom-0 text-start start-0 ms-5">
                        <div class="icon icon-shape icon-sm bg-white text-center border-radius-md mb-3">
                          <i class="ni ni-trophy text-dark opacity-10"></i>
                        </div>
                        <h5 class="text-white mb-1">
                          Share with us your design tips!
                        </h5>
                        <p>
                          Don’t be afraid to be wrong because you can’t learn
                          anything from a compliment.
                        </p>
                      </div> */}
                    </div>
                  </div>
                  <button
                    class="carousel-control-prev w-5 me-3"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="prev"
                  >
                    <span
                      class="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button
                    class="carousel-control-next w-5 me-3"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="next"
                  >
                    <span
                      class="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div class="row mt-4">
            {/* <div class="col-lg-7 mb-lg-0 mb-4">
              <div class="card ">
                <div class="card-header pb-0 p-3">
                  <div class="d-flex justify-content-between">
                    <h6 class="mb-2">Sales by Country</h6>
                  </div>
                </div>
                <div class="table-responsive">
                  <table class="table align-items-center ">
                    <tbody>
                      <tr>
                        <td class="w-30">
                          <div class="d-flex px-2 py-1 align-items-center">
                            <div>
                              <img
                                src="../assets/img/icons/flags/US.png"
                                alt="Country flag"
                              />
                            </div>
                            <div class="ms-4">
                              <p class="text-xs font-weight-bold mb-0">
                                Country:
                              </p>
                              <h6 class="text-sm mb-0">United States</h6>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div class="text-center">
                            <p class="text-xs font-weight-bold mb-0">Sales:</p>
                            <h6 class="text-sm mb-0">2500</h6>
                          </div>
                        </td>
                        <td>
                          <div class="text-center">
                            <p class="text-xs font-weight-bold mb-0">Value:</p>
                            <h6 class="text-sm mb-0">$230,900</h6>
                          </div>
                        </td>
                        <td class="align-middle text-sm">
                          <div class="col text-center">
                            <p class="text-xs font-weight-bold mb-0">Bounce:</p>
                            <h6 class="text-sm mb-0">29.9%</h6>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td class="w-30">
                          <div class="d-flex px-2 py-1 align-items-center">
                            <div>
                              <img
                                src="../assets/img/icons/flags/DE.png"
                                alt="Country flag"
                              />
                            </div>
                            <div class="ms-4">
                              <p class="text-xs font-weight-bold mb-0">
                                Country:
                              </p>
                              <h6 class="text-sm mb-0">Germany</h6>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div class="text-center">
                            <p class="text-xs font-weight-bold mb-0">Sales:</p>
                            <h6 class="text-sm mb-0">3.900</h6>
                          </div>
                        </td>
                        <td>
                          <div class="text-center">
                            <p class="text-xs font-weight-bold mb-0">Value:</p>
                            <h6 class="text-sm mb-0">$440,000</h6>
                          </div>
                        </td>
                        <td class="align-middle text-sm">
                          <div class="col text-center">
                            <p class="text-xs font-weight-bold mb-0">Bounce:</p>
                            <h6 class="text-sm mb-0">40.22%</h6>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td class="w-30">
                          <div class="d-flex px-2 py-1 align-items-center">
                            <div>
                              <img
                                src="../assets/img/icons/flags/GB.png"
                                alt="Country flag"
                              />
                            </div>
                            <div class="ms-4">
                              <p class="text-xs font-weight-bold mb-0">
                                Country:
                              </p>
                              <h6 class="text-sm mb-0">Great Britain</h6>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div class="text-center">
                            <p class="text-xs font-weight-bold mb-0">Sales:</p>
                            <h6 class="text-sm mb-0">1.400</h6>
                          </div>
                        </td>
                        <td>
                          <div class="text-center">
                            <p class="text-xs font-weight-bold mb-0">Value:</p>
                            <h6 class="text-sm mb-0">$190,700</h6>
                          </div>
                        </td>
                        <td class="align-middle text-sm">
                          <div class="col text-center">
                            <p class="text-xs font-weight-bold mb-0">Bounce:</p>
                            <h6 class="text-sm mb-0">23.44%</h6>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td class="w-30">
                          <div class="d-flex px-2 py-1 align-items-center">
                            <div>
                              <img
                                src="../assets/img/icons/flags/BR.png"
                                alt="Country flag"
                              />
                            </div>
                            <div class="ms-4">
                              <p class="text-xs font-weight-bold mb-0">
                                Country:
                              </p>
                              <h6 class="text-sm mb-0">Brasil</h6>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div class="text-center">
                            <p class="text-xs font-weight-bold mb-0">Sales:</p>
                            <h6 class="text-sm mb-0">562</h6>
                          </div>
                        </td>
                        <td>
                          <div class="text-center">
                            <p class="text-xs font-weight-bold mb-0">Value:</p>
                            <h6 class="text-sm mb-0">$143,960</h6>
                          </div>
                        </td>
                        <td class="align-middle text-sm">
                          <div class="col text-center">
                            <p class="text-xs font-weight-bold mb-0">Bounce:</p>
                            <h6 class="text-sm mb-0">32.14%</h6>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div> */}
            <div class="col-lg-5">
              <div class="card">
                <div class="card-header pb-0 p-3">
                  <h6 class="mb-0">Categories</h6>
                </div>
                <div class="card-body p-3">
                  <ul class="list-group">
                    <li class="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
                      <div class="d-flex align-items-center">
                        <div class="icon icon-shape icon-sm me-3 bg-gradient-dark shadow text-center">
                          <i class="ni ni-mobile-button text-white opacity-10"></i>
                        </div>
                        <div class="d-flex flex-column">
                          <h6 class="mb-1 text-dark text-sm">Devices</h6>
                          <span class="text-xs">
                            250 in stock,{" "}
                            <span class="font-weight-bold">346+ sold</span>
                          </span>
                        </div>
                      </div>
                      <div class="d-flex">
                        <button class="btn btn-link btn-icon-only btn-rounded btn-sm text-dark icon-move-right my-auto">
                          <i class="ni ni-bold-right" aria-hidden="true"></i>
                        </button>
                      </div>
                    </li>
                    <li class="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
                      <div class="d-flex align-items-center">
                        <div class="icon icon-shape icon-sm me-3 bg-gradient-dark shadow text-center">
                          <i class="ni ni-tag text-white opacity-10"></i>
                        </div>
                        <div class="d-flex flex-column">
                          <h6 class="mb-1 text-dark text-sm">Tickets</h6>
                          <span class="text-xs">
                            123 closed,{" "}
                            <span class="font-weight-bold">15 open</span>
                          </span>
                        </div>
                      </div>
                      <div class="d-flex">
                        <button class="btn btn-link btn-icon-only btn-rounded btn-sm text-dark icon-move-right my-auto">
                          <i class="ni ni-bold-right" aria-hidden="true"></i>
                        </button>
                      </div>
                    </li>
                    <li class="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
                      <div class="d-flex align-items-center">
                        <div class="icon icon-shape icon-sm me-3 bg-gradient-dark shadow text-center">
                          <i class="ni ni-box-2 text-white opacity-10"></i>
                        </div>
                        <div class="d-flex flex-column">
                          <h6 class="mb-1 text-dark text-sm">Error logs</h6>
                          <span class="text-xs">
                            1 is active,{" "}
                            <span class="font-weight-bold">40 closed</span>
                          </span>
                        </div>
                      </div>
                      <div class="d-flex">
                        <button class="btn btn-link btn-icon-only btn-rounded btn-sm text-dark icon-move-right my-auto">
                          <i class="ni ni-bold-right" aria-hidden="true"></i>
                        </button>
                      </div>
                    </li>
                    <li class="list-group-item border-0 d-flex justify-content-between ps-0 border-radius-lg">
                      <div class="d-flex align-items-center">
                        <div class="icon icon-shape icon-sm me-3 bg-gradient-dark shadow text-center">
                          <i class="ni ni-satisfied text-white opacity-10"></i>
                        </div>
                        <div class="d-flex flex-column">
                          <h6 class="mb-1 text-dark text-sm">Happy users</h6>
                          <span class="text-xs font-weight-bold">+ 430</span>
                        </div>
                      </div>
                      <div class="d-flex">
                        <button class="btn btn-link btn-icon-only btn-rounded btn-sm text-dark icon-move-right my-auto">
                          <i class="ni ni-bold-right" aria-hidden="true"></i>
                        </button>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </main>
    </div>
  );
}
