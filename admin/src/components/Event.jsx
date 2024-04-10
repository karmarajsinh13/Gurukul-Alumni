import React from 'react'
import { Link } from 'react-router-dom'

export default function Event() {
  return (
    <div
    style={{ marginTop: "50px", marginLeft: "290px", marginRight: "20px" }}
  >
    <div class="row">
      <div class="col-12">
        <div class="card mb-4">
          <div class="card-header pb-0">
            <h2>User table</h2>
            <li class="nav-item d-flex align-items-center">
              <Link
                class="btn btn-outline-primary btn-sm mb-0 me-3"
                to="/Add_event"
              >
                Organise Event
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
                
                    <tr>
                      <td>
                        <div class="d-flex px-2 py-1">
                          <div>
                            <img
                              src={"../../assets/img/team-2.jpg"}
                              class="avatar avatayyr-sm me-3"
                              alt="user1"
                            />
                          </div>
                          <div class="d-flex flex-column justify-content-center"></div>
                        </div>
                      </td>

                      <h6 class="mb-0 text-sm">
                        Karma
                        <p class="text-xs text-secondary mb-0">
                        Abc@gmail.com
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
                         91246757575
                        </p>
                      </td>

                     
                        <td class="align-middle text-center text-sm">
                          <span class="badge badge-sm bg-gradient-success">
                            Active
                          </span>
                        </td>
                   
                        {/* <td class="align-middle text-center text-sm">
                          <span class="badge badge-sm bg-gradient-secondary">
                            Inactive
                          </span>
                        </td> */}
                

                      <td class="align-middle text-center">
                        <span class="text-secondary text-xs font-weight-bold">
                          City
                        </span>
                      </td>
                      <td class="align-middle">
                        <div class="ms-auto">
                          <a
                            href="/Users"
                            class="btn btn-link text-danger text-gradient px-3 mb-0"
                      
                          >
                            <i class="far fa-trash-alt me-2"></i>
                            Delete
                          </a>
                       
                            <i
                              class="fas fa-pencil-alt text-dark me-2"
                              aria-hidden="true"
                            ></i>
                            Edit
                          
                        </div>
                      </td>
                    </tr>
             
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
  )
}
