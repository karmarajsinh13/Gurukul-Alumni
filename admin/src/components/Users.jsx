import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
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


export default function Users() {
  const [user, setUser] = useState([]);

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


  useEffect(() => {
    getUser();
  }, []);

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
    <div
      style={{ marginTop: "50px", marginLeft: "290px", marginRight: "20px" }}
    >
      <div class="row">
        <div class="col-12">
          <div class="card mb-4">
            <div class="card-header pb-0">
              <h2>User table</h2>
              <link
                      rel="stylesheet"
                      type="text/css"
                      href="../../public/assets/css/dataTables.bootstrap5.min.cs"
                    ></link>
                    <link
                      rel="stylesheet"
                      type="text/css"
                      href="../../public/assets/css/responsive.bootstrap5.min.css"
                    ></link>
              <li class="nav-item d-flex align-items-center">

                <Link
                  class="btn btn-outline-primary btn-sm mb-0 me-3"
                  to="/Add_users"
                >
                  Add user
                </Link>
              </li>
            </div>
            <div class="card-body px-0 pt-0 pb-2">
              <div class="table-responsive p-0">
                <table class="table align-items-center mb-0">
                  <thead>
                    <tr>
                      <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                        Image
                      </th>
                      <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                        Name
                      </th>
                      <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                        Contact
                      </th>
                      <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                        Status
                      </th>
                      <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                        City
                      </th>
                      <th class="text-secondary opacity-7"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {user.map((user) => (
                      <tr>
                        <td>
                          <div class="d-flex px-2 py-1">
                            <div>
                              <img
                                src={`http://localhost:3000/uploads/${user.photo}`}
                                class="avatar avatar-sm me-3"
                                alt="user1"
                              />
                            </div>
                            <div class="d-flex flex-column justify-content-center"></div>
                          </div>
                        </td>

                        <h6 class="mb-0 text-sm">
                          {user.firstname}
                          <p class="text-xs text-secondary mb-0">
                            {user.email}
                          </p>
                        </h6>
                        {/* <td class="align-middle text-left">
                          <span class="text-secondary text-xs font-weight-bold">
                            {user.firstname}
                          </span><br></br>
                          <span class="text-secondary text-xs font-weight-bold">
                            {user.email}
                          </span>
                        </td>
                        <td class="align-middle text-left">
                          
                        </td>
                      */}

                        <td>
                          <p class="text-s font-weight-bold mb-0">
                            {user.phone}
                          </p>
                        </td>

                        {user.status == "1" ? (
                          <td class="align-middle text-center text-sm">
                            <span class="badge badge-sm bg-gradient-success">
                              Active
                            </span>
                          </td>
                        ) : (
                          <td class="align-middle text-center text-sm">
                            <span class="badge badge-sm bg-gradient-secondary">
                              Inactive
                            </span>
                          </td>
                        )}

                        <td class="align-middle text-center">
                          <span class="text-secondary text-xs font-weight-bold">
                            {user.city}
                          </span>
                        </td>
                        <td class="align-middle">
                          <div class="ms-auto">
                            <a
                              href="/Users"
                              class="btn btn-link text-danger text-gradient px-3 mb-0"
                              onClick={() => deleteUser(user.user_id)}
                            >
                              <i class="far fa-trash-alt me-2"></i>
                              Delete
                            </a>
                            <Link to={`/Add_users/` + user.user_id}>
                              <i
                                class="fas fa-pencil-alt text-dark me-2"
                                aria-hidden="true"
                              ></i>
                              Edit
                            </Link>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
