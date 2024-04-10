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

export default function Add_event() {
  const [ename, setName] = useState("");
  const [date, setDate] = useState("");
  const [locationn, setLocation] = useState("");
  const [start_time, setStime] = useState("");
  const [end_time, setEtime] = useState("");
  const [description, setDesc] = useState("");
  const [image, setImg] = useState("");
  const [status, setStatus] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const event_id = location.pathname.split("/")[2]
    ? location.pathname.split("/")[2]
    : "";
  useEffect(() => {
    console.log(event_id);
    if (event_id) {
      getEvent();
    }
  }, []);
  const getEvent = async () => {
    const url = "http://localhost:3000/gurukulalumni/event/" + event_id;
    console.log(url);
    const res = await axios.get(url);
    console.log(res.data);
    setName(res.data.ename);
    setDate(res.data.date);
    setLocation(res.data.locationn);
    setStime(res.data.start_time);
    setEtime(res.data.end_time);
    setDesc(res.data.description);
    setImg(res.data.image);
    setStatus(res.data.status);
  };
  const submitbtn = async (e) => {
    e.preventDefault();

    const formdata = new FormData();
    formdata.append("ename", ename);
    formdata.append("date", date);
    formdata.append("locationn", locationn);
    formdata.append("start_time", start_time);
    formdata.append("end_time", end_time);
    formdata.append("description", description);
    formdata.append("image", image);
    formdata.append("status", status);

    let res = "";
    console.log(formdata);
    if (event_id) {
      res = await axios.put(
        "http://localhost:3000/gurukulalumni/event/" + event_id,
        formdata
      );
    } else {
      res = await axios.post(
        "http://localhost:3000/gurukulalumni/event", formdata
      );
    }
    alert(res.data);
    console.log(res.data);
    navigate("/Event");
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
                Organise Event
              </h3>
              <p class="mb-0">Add Event here</p>
              <form>
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label
                          htmlFor="example-text-input"
                          className="form-control-label"
                        >
                          Event Name
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          defaultValue={ename}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label
                          htmlFor="example-text-input"
                          className="form-control-label"
                        >
                          Event Start Date
                        </label>
                        <input
                          className="form-control"
                          type="date"
                          defaultValue={date}
                          onChange={(e) => setDate(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
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
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label
                          htmlFor="example-text-input"
                          className="form-control-label"
                        >
                          Event Image
                        </label>
                        <input
                          className="form-control"
                          type="file"
                          defaultValue={image}
                          onChange={(e) => setImg(e.target.files[0])}
                        />
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
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <label
                          htmlFor="example-text-input"
                          className="form-control-label"
                        >
                          Start time
                        </label>
                        <input
                          className="form-control"
                          type="time"
                          defaultValue={start_time}
                          onChange={(e) => setStime(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <label
                          htmlFor="example-text-input"
                          className="form-control-label"
                        >
                          End time
                        </label>
                        <input
                          className="form-control"
                          type="time"
                          defaultValue={end_time}
                          onChange={(e) => setEtime(e.target.value)}
                        />
                      </div>
                    </div>

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
                          <option value="0">Inactive</option>
                          <option value="1">Active</option>
                        </select>
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
