import React, { useEffect, useState } from "react";
import axios from "axios";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";


export default function Profile() {

  
  const [admin_id, setId] = useState(sessionStorage.getItem("admin"));
  const [admin, setAdmin] = useState([]);
  const [firstname, setName] = useState("");
  const [photo, setphoto] = useState("");
  const [lastname, setlastname] = useState("");
  const [email, setemail] = useState("");
  const [number, setnumber] = useState("");
  const [address, setaddress] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setconfirm_password] = useState("");
  const [gender, setgender] = useState("");
  const [dob, setdob] = useState("");

  const navigate = useNavigate();
  useEffect(() => {
    if (admin_id) fatchUserName();
    getAdmin();
    if (!admin_id) {
      navigate("/");
      //window.location.reload();
    }
  }, [admin_id]);
  const submitbtn = async (e) => {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("firstname", firstname);
    formdata.append("lastname", lastname);
    formdata.append("email", email);
    formdata.append("number", number);
    formdata.append("address", address);
    formdata.append("username", username);
    formdata.append("password", password);
    formdata.append("confirm_password", confirm_password);
    formdata.append("gender", gender);
    formdata.append("dob", dob);
    formdata.append("photo", photo);

    let res = "";
    if (admin_id) {
      res = await axios.put(
        "http://localhost:3000/gurukulalumni/admin/" + admin_id,
        formdata
      );
    } else {
      res = await axios.post(
        "http://localhost:3000/gurukulalumni/admin",
        formdata
      );
    }
    alert(res.data);
    console.log(res.data);
    navigate("/");
  };

  const fatchUserName = async () => {
    try {
      const res = await axios.get(
        "http://localhost:3000/gurukulalumni/admin" + admin_id
      );
      setName(res.data.firstname);
    } catch (error) {}
  };
  const getAdmin = async () => {
    const res = await axios.get(
      "http://localhost:3000/gurukulalumni/admin/" + admin_id
    );
    setAdmin(res.data);
    setName(res.data.firstname);
    setphoto(res.data.photo);
    setlastname(res.data.lastname);
    setemail(res.data.email);
    setnumber(res.data.number);
    setaddress(res.data.address);
    setUsername(res.data.username);
    setPassword(res.data.password);
    setconfirm_password(res.data.confirm_password);
    setgender(res.data.gender);
    setdob(res.data.dob);

    console.log(res.data);
  };

  const User_profile = () => {
    navigate("/User_profile");
  };

  const btnSignOut = () => {
    sessionStorage.clear();
    setId("");
    navigate("/");
    window.location.reload();

    //navigate("/Login")
  };

  return (
    <div class="main-content position-relative max-height-vh-100 h-100">
      <div class="container-fluid py-4" style={{ marginTop: "210px" }}>
        <div class="row">
          <div class="col-md-4">
            <div class="card card-profile">
              <img
                src="../assets/img/profilebg.jpg"
                alt="Image placeholder"
                class="card-img-top"
              />
              <div class="row justify-content-center">
                <div class="col-4 col-lg-4 order-lg-2">
                  <div class="mt-n4 mt-lg-n6 mb-4 mb-lg-0">
                    <a href="javascript:;">
                      <img
                       src={`http://localhost:3000/uploads/${photo}`}
                        class="rounded-circle img-fluid border border-2 border-white"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div class="card-header text-center border-0 pt-0 pt-lg-2 pb-4 pb-lg-3">
                <div class="d-flex justify-content-between">
                  <a
                    href="javascript:;"
                    class="btn btn-sm btn-info mb-0 d-none d-lg-block"
                  >
                    Edit Banner
                  </a>
                  <a
                    href="javascript:;"
                    class="btn btn-sm btn-info mb-0 d-block d-lg-none"
                  >
                    <i class="ni ni-collection"></i>
                  </a>
                  <button class="btn btn-sm btn-dark float-right mb-0 d-none d-lg-block">
                    <input type="file" 
                    defaultValue={photo}
                    onChange={(e) => setphoto(e.target.files[0])}
                    name="photo"
                    id="photo"
                    style={{ display: "none" }}
                    />
                    Edit Pic
                  </button>
                  <a
                    href="javascript:;"
                    class="btn btn-sm btn-dark float-right mb-0 d-block d-lg-none"
                  >
                    <i class="ni ni-email-83"></i>
                  </a>
                </div>
              </div>
              <div class="card-body pt-0">
                {/* <div class="row">
                  <div class="col">
                    <div class="d-flex justify-content-center">
                      <div class="d-grid text-center">
                        <span class="text-lg font-weight-bolder">22</span>
                        <span class="text-sm opacity-8">Friends</span>
                      </div>
                      <div class="d-grid text-center mx-4">
                        <span class="text-lg font-weight-bolder">10</span>
                        <span class="text-sm opacity-8">Photos</span>
                      </div>
                      <div class="d-grid text-center">
                        <span class="text-lg font-weight-bolder">89</span>
                        <span class="text-sm opacity-8">Comments</span>
                      </div>
                    </div>
                  </div>
                </div> */}
                <div class="text-center mt-4">
                  <h5>
                   {firstname}{lastname}<span class="font-weight-light">&nbsp;, 19</span>
                  </h5>
                  <div class="ni education_hat mr-2" style={{ marginTop: "10px" , fontFamily:"serif"}}>
                    <i class="ni location_pin mr-2"></i>{email}
                  </div>
                  <div class="h6 mt-4">
                    <i class="ni business_briefcase-24 mr-2"></i>Admin of -
                    Gurukul Alumni
                  </div>
                  <div>
                    <i class="ni education_hat mr-2"></i>Shree Swaminarayan
                    College of Computer Science
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-8">
            <div class="card">
              <div class="card-header pb-0">
                <div class="d-flex align-items-center">
                  <p class="mb-0">Edit Profile</p>
                </div>
              </div>
              <div class="card-body">
                <p class="text-uppercase text-sm">Admin Information</p>
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <label
                        for="example-text-input"
                        class="form-control-label"
                      >
                        Name
                      </label>
                      <input
                        class="form-control"
                        type="text"
                        placeholder="Name"
                        defaultValue={firstname}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label
                        for="example-text-input"
                        class="form-control-label"
                      >
                        Name
                      </label>
                      <input
                        class="form-control"
                        type="text"
                        placeholder="Name"
                        defaultValue={lastname}
                        onChange={(e) => setlastname(e.target.value)}
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label
                        for="example-text-input"
                        class="form-control-label"
                      >
                        Email address
                      </label>
                      <input
                        class="form-control"
                        type="email"
                        placeholder=""
                        defaultValue={email}
                        onChange={(e) => setemail(e.target.value)}
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label
                        for="example-text-input"
                        class="form-control-label"
                      >
                        Username
                      </label>
                      <input
                        class="form-control"
                        type="text"
                        placeholder="Username"
                        defaultValue={username}
                        onChange={(e) => setUsername(e.target.value)}
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label
                        for="example-text-input"
                        class="form-control-label"
                      >
                        Phone
                      </label>
                      <input
                        class="form-control"
                        type="text"
                        placeholder=""
                        defaultValue={number}
                        onChange={(e) => setnumber(e.target.value)}
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label
                        for="example-text-input"
                        class="form-control-label"
                      >
                        Gender
                      </label>
                      <input
                        class="form-control"
                        type="text"
                        placeholder="Gender"
                        defaultValue={gender}
                        onChange={(e) => setgender(e.target.value)}
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label
                        for="example-text-input"
                        class="form-control-label"
                      >
                        Date Of Birth
                      </label>
                      <input
                        class="form-control"
                        type="date"
                        defaultValue={dob}
                        onChange={(e) => setdob(e.target.value)}
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label
                        for="example-text-input"
                        class="form-control-label"
                      >
                        Password
                      </label>
                      <input
                        class="form-control"
                        type="password"
                        placeholder=""
                        defaultValue={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label
                        for="example-text-input"
                        class="form-control-label"
                      >
                        Confirm Password
                      </label>
                      <input
                        class="form-control"
                        type="password"
                        placeholder="Name"
                        defaultValue={confirm_password}
                        onChange={(e) => setconfirm_password(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <hr class="horizontal dark" />
                <button
                  class="btn btn-primary btn-sm ms-auto"
                  onClick={submitbtn}
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
