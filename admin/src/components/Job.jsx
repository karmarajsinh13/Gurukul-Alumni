import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Job() {
  const [job, setJob] = useState([]);
  let i = 1;
  useEffect(() => {
    getjob();
  }, []);

  const getjob = async () => {
    const res = await axios.get("http://localhost:3000/gurukulalumni/job");
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
      getjob();
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
              <h2>Job table</h2>
              <li class="nav-item d-flex align-items-center">
                <Link
                  class="btn btn-outline-primary btn-sm mb-0 me-3"
                  to="/Add_Job"
                >
                  Create Job
                </Link>
              </li>
            </div>
            <div class="card-body px-0 pt-0 pb-2">
              <div class="table-responsive p-0">
                <table class="table align-items-center mb-0">
                  {/* <thead>
                  <tr>
                    <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"  style={{
                        width: "40px",
                      }}>
                      Image
                    </th>

                    <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ">
                      Name
                    </th>

                    <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                      Status
                    </th>

                    <th class="text-secondary opacity-7"></th>
                  </tr>
                </thead> */}
                  <thead>
                    <tr role="row">
                      <th
                        className="text-center "
                        style={{
                          width: "40px",
                        }}
                      >
                        Title
                      </th>
                      <th className="text-center " style={{ width: "50px" }}>
                        Deadline
                      </th>
                      <th className="text-center " style={{ width: "50px" }}>
                        Status
                      </th>
                      <th className="text-center " style={{ width: "50px" }}>
                        Created_by
                      </th>
                      <th
                        className="text-center sorting"
                        style={{ width: "100px" }}
                      >
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {job.map((job) => (
                      <tr role="row"  className="odd">
                        <td class="align-middle text-center">{job.title}</td>
                        <td class="align-middle text-center">{job.deadline}</td>
                        <td class="align-middle text-center">
                          {job.status == "1" ? (
                            <td class="align-middle text-center text-sm">
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                              <span class="badge badge-sm bg-gradient-success">
                                Open
                              </span>
                            </td>
                          ) : (
                            <td class="align-middle text-center text-sm">
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                              <span class="badge badge-sm bg-gradient-secondary">
                                Closed
                              </span>
                            </td>
                          )}
                        </td>
                        <td class="align-middle text-center">{job.entry_by}</td>
                        <td className="text-center">
                          <button
                            className="btn btn-xs btn-primary edit_gallery"
                            type="button"
                          >
                            <Link to={`/Add_job/` + job.job_id}>Edit</Link>
                          </button>{" "}
                          &nbsp;&nbsp;
                          <button
                            className="btn btn-xs btn-info edit_gallery"
                            type="button"
                          >
                            <Link to={`/Viewjob/` + job.job_id}>
                              View All
                            </Link>
                          </button>
                          &nbsp;&nbsp;
                          <button
                            className="btn btn-xs btn-danger delete_gallery"
                            type="button"
                            data-id={1}
                            onClick={() => deleteJob(job.job_id)}
                          >
                            Delete
                          </button>
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
    </div>
  );
}
