import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Viewevent() {
  const [event, setEvent] = useState([]);
  const [ename, setName] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const event_id = location.pathname.split("/")[2]
    ? location.pathname.split("/")[2]
    : "";

  useEffect(() => {
    if (event_id) {
      getEvent();
    }
  }, []);

  const getEvent = async () => {
    const res = await axios.get(
      "http://localhost:3000/gurukulalumni/event/" + event_id
    );
    setEvent(res.data);

    console.log(res.data);
  };
  const deleteEvent = async (event_id) => {
    let ans = window.confirm("are you sure?");
    if (ans) {
      const res = await axios.delete(
        "http://localhost:3000/gurukulalumni/event/" + event_id
      );
      console.log(res.data);
      alert(res.data);
      getEvent();
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
            <Link to={`/Add_event/` + event.event_id}>
              <i
                class="fas fa-pencil-alt text-primary me-2"
                aria-hidden="true"
              ></i>
              Edit
            </Link></div>
            <center class="card-header pb-0 ">
              <h3>{event.ename}</h3>
            </center>
            <br />

            <div class="card-body px-0 pt-0 pb-2">
              <div>
                <div className="row justify-content-center">
                  <div>
                    <div className="row justify-content-center">
                      <div class="col-4 ">
                        <img
                          src={`http://localhost:3000/uploads/${event.image}`}
                          alt="Image placeholder"
                          style={{
                            height: "200px",
                            width: "410px",
                            objectFit: "cover",
                            objectPosition: "center",
                            borderRadius: "10px",
                            cursor: "pointer",
                          }}
                        />
                      </div>
                    </div>
                    <br />
                    <div class="card-body pt-0">
                      <div class="row">
                        <div class="d-grid text-center">
                          {event.status == "1" ? (
                            <td class="align-middle text-center text-sm">
                              <span class="badge badge-sm bg-gradient-success">
                                Upcoming
                              </span>
                            </td>
                          ) : (
                            <td class="align-middle text-center text-sm">
                              <span class="badge badge-sm bg-gradient-secondary">
                                Past
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
                                {event.date}
                              </span>
                              <span class="text-sm opacity-8">Event Date</span>
                            </div>
                            <div class="d-grid text-center mx-4">
                              <span class="text-lg font-weight-bolder">
                                {event.start_time}
                              </span>
                              <span class="text-sm opacity-8">Start Time</span>
                            </div>
                            <div class="d-grid text-center">
                              <span class="text-lg font-weight-bolder">
                                {event.end_time}
                              </span>
                              <span class="text-sm opacity-8">End Time</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="text-center mt-4">
                        <div class="h6 mt-4">
                          <i class="ni business_briefcase-24 mr-2"></i>Location
                          : - {event.locationn}
                        </div>
                        <br />
                        <h5>Description</h5>
                        <br />
                        <div className="col-6" style={{marginLeft : "280px"}}>
                          <i class="ni education_hat mr-2 " ></i>
                          <div contentEditable='true' dangerouslySetInnerHTML={{ __html: event.description }} >
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
  );
}
