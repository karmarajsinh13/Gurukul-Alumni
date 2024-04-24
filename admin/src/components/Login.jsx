import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Login() {
  const [admin_id, setId] = useState(sessionStorage.getItem("admin"));
  useEffect(() => {
    if (admin_id) {
      getAdmin();
    }
  }, []);

  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const submitHandle = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get(
        "http://localhost:3000/gurukulalumni/adminlogin",
        {
          params: {
            username: username,
            password: password,
          },
        }
      );

      if (res.data > 0) {
        setError("");
        navigate("/");
        sessionStorage.setItem("admin", res.data);

        window.location.reload();
      } else {
        console.log(res.data);
        setError("Invalid Username/Password...");
      }
    } catch (error) {}
  };
  const getAdmin = async () => {
    const res = await axios.get(
      "http://localhost:3000/gurukulalumni/admin/" + admin_id
    );

    console.log(res.data);
  };
  return (
    <>
      <div
        class="position-absolute w-100  min-height-300 top-0"
        style={{
          backgroundImage: "url('../assets/img/curved-images/banner1.jpg')",
          backgroundPositionY: "50%",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          zIndex: "-1",
        }}
      >
        <span class="mask bg-primary opacity-6"></span>
      </div>
      <main class="main-content  mt-0">
        <section>
          <div class="col-md-12">
            <div class="container">
              <div class="col-xl-4 col-lg-5 col-md-6 d-flex flex-column mx-auto">
                <div class="card card-plain mt-11">
                  <div class="card">
                    <div class="card-header pb-0 text-left bg-transparent">
                      <h3 class="font-weight-bolder text-info text-gradient">
                        Welcome back ADMIN
                      </h3>
                      <p class="mb-0">
                        Enter your email and password to sign in
                      </p>
                    </div>
                    <div class="card-body">
                      <form role="form">
                        <label>Username</label>
                        <div class="mb-3">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Username"
                            aria-label="Contact"
                            aria-describedby="contact-addon"
                            onChange={(e) => setusername(e.target.value)}
                          />
                        </div>
                        <label>Password</label>
                        <div class="mb-3">
                          <input
                            type="password"
                            class="form-control"
                            placeholder="Password"
                            aria-label="Password"
                            aria-describedby="password-addon"
                            onChange={(e) => setpassword(e.target.value)}
                          />
                        </div>

                        <p style={{ color: "red" }}>{error}</p>

                        <div class="text-center">
                          <button
                            type="button"
                            class="btn bg-gradient-info w-100 mt-4 mb-0"
                            onClick={submitHandle}
                          >
                            Sign in
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer class="footer pt-7  ">
          <div class="container-fluid">
            <div class="row align-items-center justify-content-lg-between">
              <div class="col-xl-3 col-lg-5 col-md-6 d-flex flex-column mx-auto">
                <div class="copyright text-center text-sm text-muted text-lg-start">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  © 2024
                  <script>document.write(new Date().getFullYear())</script>,
                  made by
                  <span class="font-weight-bold"> K A R M A Production</span>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
