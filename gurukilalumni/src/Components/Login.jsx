import React from "react";
import gurukullogo from "../gurukullogo.png";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Login() {
  const [user_id, setId] = useState(sessionStorage.getItem("user"));

  useEffect(() => {
    if (user_id) {
      getUser();
    }
  }, []);

  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const submitHandle = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get("http://localhost:3000/gurukulalumni/login", {
        params: {
          username: username,
          password: password,
        },
      });

      if (res.data > 0) {
        setError("");
        navigate("/");
        sessionStorage.setItem("user", res.data);

        window.location.reload();
      } else {
        console.log(res.data);
        setError("Invalid Username/Password...");
      }
    } catch (error) {}
  };
  const getUser = async () => {
    const res = await axios.get(
      "http://localhost:3000/gurukulalumni/user/" + user_id
    );

    console.log(res.data);
  };
  return (
    <div>
      <main className="ng-scope">
        <div className="about-strip-change mdl-color--primary-dark mdl-color--primary-dark-themed">
          <div className="mdl-grid about-size">
            <h2 className="about-title about-size mdl-typography--font-light mdl-color-text--white mdl-color-text--white-themed margin-top-bottom ng-binding">
              Login
            </h2>
          </div>
        </div>
        <div
          className="mdl-grid login-size contact-div-change main-family"
          ng-style="(!dynamic_data.heading)?{'max-width': '446px'}:''"
        >
          <div className="mdl-cell mdl-cell--12-col">
            <div className="mdl-grid mdl-card maximize-width mdl-shadow--2dp mdl-grid--no-spacing">
              <div
                className="mdl-cell mdl-cell--5-col mdl-cell--12-col-tablet center-alignment ng-scope"
                style={{ margin: "auto" }}
                ng-if="dynamic_data.heading"
              >
                <div
                  className="mdl-grid mdl-grid--no-spacing"
                  style={{ padding: "45px 8px" }}
                >
                  <div
                    className="mdl-cell mdl-cell--12-col mdl-cell--12-col-tablet"
                    style={{ margin: "auto" }}
                  >
                    <img
                      className="login-avatar margin-adjust"
                      style={{
                        borderRadius: "4px",
                        maxWidth: "100%",
                        marginLeft: "75px",
                      }}
                      src={gurukullogo}
                    />
                  </div>
                  <div className="mdl-cell mdl-cell--12-col mdl-cell--12-col-tablet">
                    <div className="mdl-card__title login-heading-div">
                      <h2
                        className="mdl-card__title-text login-heading ng-binding"
                        ng-hide="$root.app_data.config.lingo[33]==-1"
                      >
                        Alumni Association of Gurukul
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="mdl-cell mdl-cell--12-col-tablet login-top-div login-signup-padding flexbox mdl-cell--7-col login-border"
                ng-class="{'mdl-cell--12-col': !dynamic_data.heading, 'mdl-cell--7-col login-border': dynamic_data.heading}"
              >
                <div className="adjust-signup-main">
                  <form
                    style={{ marginBottom: "0px" }}
                    className="ng-pristine ng-valid ng-scope ng-valid-email"
                  >
                    <div
                      className="mdl-card__title-text ng-binding"
                      style={{ marginBottom: "20px" }}
                    >
                      Username login
                    </div>

                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label ">
                      <input
                        className="mdl-textfield__input ng-pristine ng-untouched ng-valid "
                        type="text"
                        placeholder="Username"
                        onChange={(e) => setusername(e.target.value)}
                      />
                    </div>
                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label is-upgraded">
                      <input
                        className="mdl-textfield__input ng-pristine ng-valid ng-empty ng-touched"
                        type="password"
                        placeholder="Password"
                        onChange={(e) => setpassword(e.target.value)}
                      />
                    </div>
                    <div style={{ padding: "10px 0px" }}>
                      <button
                        type="submit"
                        style={{ float: "right", paddingTop: "0px" }}
                        className="mdl-button font-14 ladda-button ladda-button-primary mdl-js-button mdl-button--raised mdl-button--colored mdl-typography--font-regular"
                        onClick={submitHandle}
                      >
                        <span
                          className="ladda-label ng-binding"
                         
                        >
                          Login
                        </span>
                        <span className="ladda-spinner" />
                      </button>
                    </div>
                  </form>
                
                  <div
                    className="mdl-color-text--red-A700 "
                    style={{ borderRadius: "4px" }}
                  >
                    {error}
                  </div>
              
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      ;
    </div>
  );
}
