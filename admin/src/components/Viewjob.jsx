import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Viewjob() {
    
  const [job, setJob] = useState([]);
  const [ename, setName] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const job_id = location.pathname.split("/")[2]
    ? location.pathname.split("/")[2]
    : "";

  useEffect(() => {
    if (job_id) {
      getJob();
    }
  }, []);

  const getJob = async () => {
    const res = await axios.get(
      "http://localhost:3000/gurukulalumni/job/" + job_id
    );
    setJob(res.data);

    console.log(res.data);
  };
  const deleteJob = async (job_id) => {
    let ans = window.confirm("are you sure?");
    if (ans) {
      const res = await axios.delete(
        "http://localhost:3000/gurukulalumni/job/" + job_id
      );
      console.log(res.data);
      alert(res.data);
      getJob();
    }
  };
  return (
    <div
    style={{ marginTop: "40px", marginLeft: "290px", marginRight: "20px" }}
  >
    <div class="row">
      <div class="col-12">
        <div class="card mb-4">
          <div class="card-header pb-0" style={{ display: "flex" , marginLeft: "1100px"}}>
          <Link to={`/Add_job/` + job.job_id}>
            <i
              class="fas fa-pencil-alt text-primary me-2"
              aria-hidden="true"
            ></i>
            Edit
          </Link></div>
          <center class="card-header pb-0 ">
            <h3>{job.title}</h3>
          </center>
          <br />

          <div class="card-body px-0 pt-0 pb-2">
            <div>
              <div className="row justify-content-center">
                <div>
                 
                  <div class="card-body pt-0">
                    <div class="row">
                      <div class="d-grid text-center">
                        {job.status == "1" ? (
                          <td class="align-middle text-center text-sm">
                            <span class="badge badge-sm bg-gradient-success">
                              Open
                            </span>
                          </td>
                        ) : (
                          <td class="align-middle text-center text-sm">
                            <span class="badge badge-sm bg-gradient-secondary">
                              Closed
                            </span>
                          </td>
                        )}
                      </div>
                      <br />
                      <br />
                      <div class="col">
                        <div class="d-flex justify-content-center">

                        <div class="d-grid text-center">
                            <span class="text-lg font-weight-bolder">
                              {job.entry_date}
                            </span>
                            <span class="text-sm opacity-8">Entry Date</span>
                          </div>&nbsp;&nbsp;&nbsp;&nbsp;
                          <div class="d-grid text-center">
                            <span class="text-lg font-weight-bolder">
                              {job.deadline}
                            </span>
                            <span class="text-sm opacity-8">Deadline</span>
                          </div>&nbsp;&nbsp;&nbsp;&nbsp;
                          
                          
                          <div class="d-grid text-center">
                            <span class="text-lg font-weight-bolder">
                              {job.entry_by}
                            </span>
                            <span class="text-sm opacity-8">Created By</span>
                          </div>
                        </div><br/>
                        <div class="d-grid text-center mx-4">
                            <span class="text-lg font-weight-bolder">
                              {job.salary}
                            </span>
                            <span class="text-sm opacity-8">Salary</span>
                          </div>
                      </div>
                    </div>
                    <div class="text-center mt-4">
                      <div class="h6 mt-4">
                        <i class="ni business_briefcase-24 mr-2"></i>Location
                        : - {job.locationn}
                      </div>
                      <br />
                      <h5>Description:-</h5>
                      <br />
                      <div className="col-6" style={{marginLeft : "280px"}}>
                        <i class="ni education_hat mr-2 " ></i>
                        <div contentEditable='false' dangerouslySetInnerHTML={{ __html: job.description }} >
                        </div>
                       
                       
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
