import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Event() {
  const [event, setEvent] = useState([]);

  useEffect(() => {
    getEvent();
  }, []);

  const getEvent = async () => {
    const res = await axios.get("http://localhost:3000/gurukulalumni/event");
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
                        IMG
                      </th>
                      <th className="text-center " style={{ width: "50px" }}>
                        event
                      </th>
                      <th className="text-center " style={{ width: "50px" }}>
                        Status
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
                    {event.map((event) => (
                      <tr role="row" className="odd">
                        <td class="align-middle text-center">
                          <img
                            src={`http://localhost:3000/uploads/${event.image}`}
                            class="avatar avatayyr-lg me-6"
                            style={{
                              width: "210px",
                              height: "100px",
                            }}
                            alt="user1"
                          />
                        </td>
                        <td class="align-middle text-center">{event.ename}</td>
                        <td class="align-middle text-center">
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
                        </td>
                        <td className="text-center">
                          <button
                            className="btn btn-xs btn-primary edit_gallery"
                            type="button"
                          >
                            <Link to={`/Add_event/` + event.event_id}>
                              Edit
                            </Link>
                          </button>{" "}
                          &nbsp;&nbsp;
                          <button
                            className="btn btn-xs btn-info edit_gallery"
                            type="button"
                          >
                            <Link to={`/Viewevent/` + event.event_id}>
                              View All
                            </Link>
                          </button>
                          &nbsp;&nbsp;
                          <button
                            className="btn btn-xs btn-danger delete_gallery"
                            type="button"
                            data-id={1}
                            onClick={() => deleteEvent(event.event_id)}
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
