import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
const modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "clean"],
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
};

const formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video",
];

export default function Add_job() {
  const [title, setTitle] = useState("");
  const [deadline, setdeadline] = useState("");
  const [locationn, setLocation] = useState("");
  const [salary, setSalary] = useState("");
  const [description, setDesc] = useState("");
  const [status, setStatus] = useState("");
  const [entry_by, setEB] = useState("");
  const [admin_id, setId] = useState(sessionStorage.getItem("admin"));
  const [Admin, setAdmin] = useState([]);
  const [firstname, setFname] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const location = useLocation();
  const navigate = useNavigate();
  const job_id = location.pathname.split("/")[2]
    ? location.pathname.split("/")[2]
    : "";
  useEffect(() => {
    console.log(job_id);
    if ((job_id, admin_id)) {
      getjob();
      getAdmin();
    }
  }, [admin_id]);
  const getAdmin = async () => {
    const res = await axios.get(
      "http://localhost:3000/gurukulalumni/admin/" + admin_id
    );
    setAdmin(res.data);
    setFname(res.data.firstname);

    console.log(res.data);
  };

  const getjob = async () => {
    const res = await axios.get(
      "http://localhost:3000/gurukulalumni/job/" + job_id
    );
    console.log(res.data);

    setTitle(res.data.title);
    setdeadline(res.data.deadline);
    setLocation(res.data.locationn);
    setSalary(res.data.salary);
    setDesc(res.data.description);
    setStatus(res.data.status);
    setEB(res.data.entry_by);
  };
  const validate = () => {
    const error = {};

    if (!title) {
      error.title = "Please Enter Job name";
    }

    if (!description) {
      error.description = "Please Enter Job Description";
    }
    if (!salary) {
      error.salary = "Please Enter Salary Or About Salary";
    }
    if (!deadline) {
      error.deadline = "Please Add Deadline Date";
    }

    if (!locationn) {
      error.locationn = "Event Location is required!!!";
    }
    if (!status) {
      error.status = "Please Enter Job Is open or closed";
    }
    return error;
  };
  const submitbtn = async (e) => {
    e.preventDefault();
    setFormErrors(validate());
    if (title && description && deadline && locationn && status && salary) {
      const data = {
        title,
        deadline,
        locationn,
        salary,
        entry_by: firstname,
        description,
        status,
      };
      //   const formdata = new FormData();
      //   for (let key in data) {
      //     formdata.append(key, data[key]);
      //   }
      let res = "";

      if (job_id) {
        res = await axios.put(
          "http://localhost:3000/gurukulalumni/job/" + job_id,
          data
        );
      } else {
        res = await axios.post("http://localhost:3000/gurukulalumni/job", data);
      }

      alert(res.data);
      console.log(res.data);
      navigate("/Job");
    }
  };
  return (
    <div
      style={{ marginTop: "50px", marginLeft: "260px", marginRight: "20px" }}
    >
      <div class="row">
        <div class="col-12">
          <div class="card mb-4">
            <div class="card-header pb-0">
              <h3
                style={{
                  background: "linear-gradient(to right, black, grey)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Create Job
              </h3>
              <p class="mb-0">Add Event here</p>
              <form>
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="form-group">
                        <label
                          htmlFor="example-text-input"
                          className="form-control-label"
                        >
                          Job Title
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          defaultValue={title}
                          onChange={(e) => setTitle(e.target.value)}
                        />
                           <p style={{ color: "red" }}>{formErrors.title}</p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <label
                          htmlFor="example-text-input"
                          className="form-control-label"
                        >
                          Deadline Date
                        </label>
                        <input
                          className="form-control"
                          type="date"
                          defaultValue={deadline}
                          onChange={(e) => setdeadline(e.target.value)}
                        />
                           <p style={{ color: "red" }}>{formErrors.deadline}</p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <label
                          htmlFor="example-text-input"
                          className="form-control-label"
                        >
                          Salary
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          defaultValue={salary}
                          onChange={(e) => setSalary(e.target.value)}
                        />
                           <p style={{ color: "red" }}>{formErrors.salary}</p>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label
                          htmlFor="example-text-input"
                          className="form-control-label"
                        >
                          Location
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          defaultValue={locationn}
                          onChange={(e) => setLocation(e.target.value)}
                        />
                           <p style={{ color: "red" }}>{formErrors.locationn}</p>
                      </div>
                    </div>

                    <div className="col-md-12">
                      <div className="form-group">
                        <label
                          htmlFor="example-text-input"
                          className="form-control-label"
                        >
                          Event Description
                        </label>
                        <ReactQuill
                          theme="snow"
                          modules={modules}
                          formats={formats}
                          defaultValue={description}
                          onChange={(e) => setDesc(e)}
                          rows={10}
                        ></ReactQuill>
                           <p style={{ color: "red" }}>{formErrors.description}</p>
                      </div>
                    </div>

                    <input
                      className="form-control"
                      type="hidden"
                      defaultValue={entry_by}
                      onChange={(e) => setEB(e.target.value)}
                    />

                    <div class="col-md-4">
                      <div className="form-group">
                        <label
                          htmlFor="example-text-input"
                          className="form-control-label"
                        >
                          Status
                        </label>
                        <select
                          name="status"
                          class="form-control"
                          defaultValue={status}
                          onChange={(e) => setStatus(e.target.value)}
                        >
                          <option>Choose</option>
                          <option value="0">Closed</option>
                          <option value="1">Open</option>
                        </select>
                        <p style={{ color: "red" }}>{formErrors.status}</p>
                      </div>
                    </div>
                    <div
                      class="text-center"
                      style={{
                        marginBottom: "20px",
                        marginRight: "1000px",
                        marginLeft: "10px",
                      }}
                    ></div>
                  </div>

                  <button
                    type="button"
                    class="btn bg-gradient-info w-100 mt-4 mb-0"
                    onClick={submitbtn}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
