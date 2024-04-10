import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

export default function Add_users() {
  const [firstname, setFname] = useState("");
  const [lastname, setLname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");
  const [photo, setImg] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [graduated_year, setgraduated_year] = useState("");
  const [dob, setdob] = useState("");
  const [gender, setgender] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const user_id = location.pathname.split("/")[2]
    ? location.pathname.split("/")[2]
    : "";
  useEffect(() => {
    console.log(user_id);
    if (user_id) {
      getUser();
    }
  }, []);
  const getUser = async () => {
    const url = "http://localhost:3000/gurukulalumni/user/" + user_id;
    console.log(url);
    const res = await axios.get(url);
    console.log(res.data);
    setFname(res.data.firstname);
    setLname(res.data.lastname);
    setUsername(res.data.username);
    setPassword(res.data.password);
    setStatus(res.data.status);
    setImg(res.data.photo);
    setAddress(res.data.address);
    setCity(res.data.city);
    setState(res.data.state);
    setemail(res.data.email);
    setphone(res.data.phone);
  };
  const submitbtn = async (e) => {
    e.preventDefault();

    const formdata = new FormData();
    formdata.append("firstname", firstname);
    formdata.append("lastname", lastname);
    formdata.append("username", username);
    formdata.append("password", password);
    formdata.append("status", status);
    formdata.append("photo", photo);
    formdata.append("address", address);
    formdata.append("city", city);
    formdata.append("state", state);
    formdata.append("email", email);
    formdata.append("phone", phone);
    let res = "";
    console.log(formdata);
    if (user_id) {
      res = await axios.put(
        "http://localhost:3000/gurukulalumni/user/" + user_id,
        formdata
      );
    } else {
      res = await axios.post("http://localhost:3000/gurukulalumni/user", formdata);
    }
    alert(res.data);
    console.log(res.data)
    navigate("/Users");
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
                Add User
              </h3>
              <p class="mb-0">Add users here</p>
              <form>
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label
                          htmlFor="example-text-input"
                          className="form-control-label"
                        >
                          First name
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          defaultValue={firstname}
                          onChange={(e)=>setFname(e.target.value)}
                         
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label
                          htmlFor="example-text-input"
                          className="form-control-label"
                        >
                          Last name
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          defaultValue={lastname}
                          onChange={(e)=>setLname(e.target.value)}
                         
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label
                          htmlFor="example-text-input"
                          className="form-control-label"
                        >
                          Phone
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          defaultValue={phone}
                          onChange={(e)=>setphone(e.target.value)}
                         
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label
                          htmlFor="example-text-input"
                          className="form-control-label"
                        >
                          Email address
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          defaultValue={email}
                          onChange={(e)=>setemail(e.target.value)}
                         
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label
                          htmlFor="example-text-input"
                          className="form-control-label"
                        >
                          Username
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          defaultValue={username}
                          onChange={(e)=>setUsername(e.target.value)}
                        
                        />
                      </div>
                    </div>
                    {/* <div className="col-md-6">
                      <div className="form-group">
                        <label
                          htmlFor="example-text-input"
                          className="form-control-label"
                        >
                          graduated_year
                        </label>
                        <select name="status" class="form-control" 
                        onChange={(e) => setgraduated_year(e.target.value)}>
                          <option>Choose</option>
                          <option value="0">2023</option>
                          <option value="1">2024</option>
              
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label
                          htmlFor="example-text-input"
                          className="form-control-label"
                        >
                          Dob
                        </label>
                        <input className="form-control" type="date" 
                        onChange={(e) => setdob(e.target.value)} />
                      </div>
                    </div> */}
                    <div className="col-md-6">
                      <div className="form-group">
                        <label
                          htmlFor="example-text-input"
                          className="form-control-label"
                        >
                          Profile Pic
                        </label>
                        <input className="form-control" type="file" 
                        defaultValue={photo}
                        onChange={(e)=>setImg(e.target.files[0])} />
                      </div>
                    </div>
                    {/* <div className="col-md-6">
                      <div className="form-group">
                        <label
                          htmlFor="example-text-input"
                          className="form-control-label"
                        >
                          Gender
                        </label>
                        <select name="status" class="form-control" 
                        onChange={(e) => setgender(e.target.value)}>
                          <option>Choose</option>
                          <option value="0">Male</option>
                          <option value="1">FeMale</option>
                        </select>
                      </div>
                    </div> */}
                    <div className="col-md-4">
                      <div className="form-group">
                        <label
                          htmlFor="example-text-input"
                          className="form-control-label"
                        >
                          Password
                        </label>
                        <input className="form-control" type="password" 
                        defaultValue={password}
                        onChange={(e)=>setPassword(e.target.value)} />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <label
                          htmlFor="example-text-input"
                          className="form-control-label"
                        >
                          City
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          defaultValue={city}
                        
                          onChange={(e)=>setCity(e.target.value)}

                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <label
                          htmlFor="example-text-input"
                          className="form-control-label"
                        >
                          State
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          defaultValue={state}
                        
                          onChange={(e)=>setState(e.target.value)}
                        />
                      </div>
                    </div>

                   

                    <div className="col-md-12">
                      <div className="form-group">
                        <label
                          htmlFor="example-text-input"
                          className="form-control-label"
                        >
                          Address
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          defaultValue={address}
                          onChange={(e)=>setAddress(e.target.value)}
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
                        <select name="status" class="form-control"
                        defaultValue={status}
                        onChange={(e)=>setStatus(e.target.value)}>
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
