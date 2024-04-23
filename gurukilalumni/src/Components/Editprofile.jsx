import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Editprofile() {
  const [user_id, setId] = useState(sessionStorage.getItem("user"));
  const [firstname, setFname] = useState("");
  const [lastname, setLname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");
  const [photo, setImg] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [dob, setdob] = useState("");
  const [gender, setgender] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [passing_year, setpassing_year] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    if (user_id) fatchUserName();
    getUser();
    if (!user_id) {
      navigate("/");
      //window.location.reload();
    }
  }, [user_id]);
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
    setpassing_year(res.data.passing_year);
    setdob(res.data.dob);
    setgender(res.data.gender);
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
    formdata.append("passing_year", passing_year);
    formdata.append("dob", dob);
    formdata.append("gender", gender);
    let res = "";
    console.log(formdata);
    if (user_id) {
      res = await axios.put(
        "http://localhost:3000/gurukulalumni/user/" + user_id,
        formdata
      );
    } else {
      res = await axios.post(
        "http://localhost:3000/gurukulalumni/user",
        formdata
      );
    }
    alert(res.data);
    console.log(res.data);
    navigate("/Profile");
  };
  const fatchUserName = async () => {
    try {
      const res = await axios.get(
        "http://localhost:3000/gurukulalumni/user" + user_id
      );
      setFname(res.data.firstname);
    } catch (error) {}
  };
  const btnSignOut = () => {
    sessionStorage.clear();
    setId("");
    navigate("/");
    window.location.reload();

    //navigate("/Login")
  };
  const Cancle = () => {
    navigate("/Profile");
  };
  return (
    <div>
      <div id="inside-ui-view">
        <ui-view className="ng-scope">
          <div className="ng-scope">
            <style
              type="text/css"
              dangerouslySetInnerHTML={{
                __html:
                  "\n    \t/*.tab-blue-hover:hover{\n\t\t\tbackground: #EBF3FC;\n\t\t\tcolor: #0F6CBD;\n\t\t}*/\n\t\t.tabs-div{\n\t\t\twidth: 316px;\n\t\t\tdisplay: inline-block;\n\t\t}\n\t\t.dirs-div{\n\t\t\twidth: 724px;\n\t\t\tdisplay: inline-block;\n\t\t}\n\t\t.back_button { display: none; }\n\t\t.settings_header { \n\t\t\tcolor:#242424; \n\t\t\tfont-size: 20px; \n\t\t\tfont-weight: 500;\n\t\t\tpadding: 32px 0px 0px 36px;\n\t\t}\n\t\t.settings_footer {\n\t\t\tfont-size: 20px;\n\t\t\tfont-weight: 600;\n\t\t\tpadding: 4px 0px 8px;\n\t\t\twidth: 100%;\n\t\t}\n    \t.divider {\n        \tborder-top: 1px solid #E0E0E0;\n        \tmargin: 0 0 8px 0;\n        }\n\n        @media screen and (min-width: 480px) and (max-width: 839px){\n            .tabs-div{\n                width: 316px;\n            }\n            .dirs-div{\n                width: 500px;\n            }\n        }\n\n\t\t@media screen and (max-width: 480px) {\n\t\t\t.tabs-div{\n\t\t\t\twidth: 100%;\n\t\t\t\tdisplay: block;\n\t\t\t}\n\t\t\t.dirs-div{\n\t\t\t\twidth: 100%;\n\t\t\t\tdisplay: block;\n\t\t\t}\n\t\t\t.div-cell{\n\t\t\t\twidth: 100%;\n\t\t\t}\n\t\t\t.divider {\n\t        \tdisplay: none;\n\t        }\n\t\t\t.settings_header{\n        \t\t/*position: fixed;*/\n\t            /*top: 0;*/\n\t            left: 0;\n\t            width: 100%;\n\t            z-index: 10;\n\t            display: flex;\n\t\t\t    padding: 18px;\n\t\t\t    font-size: 20px;\n                box-shadow: 0px 2px 8px 0px rgba(36, 36, 36, 0.16);\n        \t}\n        \t.back_button { display: block; }\n        \t.settings_footer {\n        \t\tposition: fixed;\n\t            bottom: 0;\n\t            left: 0;\n\t            z-index: 112;\n                border-top: 1px solid #dedede;\n                padding: 12px 24px 16px 0px;\n        \t}\n        \t.settings_header_footer_common {\n\t\t\t\twidth: 100%;\n\t\t\t\tbackground-color: #fff;\n\t\t\t}\n            .settings-card{\n                margin-top: 0;\n            }\n\t\t}\n    ",
              }}
            />
            <div className="about-strip settings-about-strip mdl-color--grey-900-themed breadcrumb-div padding-bottom-24">
              <div className="mdl-grid left-alignment change-size">
                <div
                  className="mdl-cell mdl-cell--12-col font-16 mdl-typography--font-light"
                  style={{ padding: "19px 0px" }}
                >
                  <get-breadcrumbs className="ng-scope ng-isolate-scope">
                    <div className="inline-block ng-scope">
                      <span className="mdl-typography--font-light ng-binding mdl-color-text--white mdl-color-text--white-themed link-detail">
                        {firstname}
                      </span>
                    </div>
                    <div className="inline-block ng-scope">
                      <div
                        className="inline-block ng-scope"
                        style={{ padding: "0px 7px" }}
                      >
                        <i
                          className="icon-keyboard_arrow_right font-14 mdl-color-text--white mdl-color-text--white-themed"
                          style={{ fontSize: "8px" }}
                        />
                      </div>
                      <span className="mdl-typography--font-light ng-binding mdl-color-text--white mdl-color-text--white-themed">
                        Settings
                      </span>
                    </div>
                  </get-breadcrumbs>
                </div>
              </div>
            </div>

            <div className="page-strip mdl-color--grey-100 mdl-color--grey-100-themed">
              <div
                className="settings-card change-size mdl-grid padding-lr-0 padding-top-xs-0 settings-adjust-card"
                style={{ maxWidth: "1060px" }}
              >
                <div className="mdl-cell--12-col div-cell">
                  <div className="tabs-div maximize-width-md">
                    <div className="margin-right-8 margin-left-md-8 margin-right-xs-0 padding-tb-xs-16 mdl-color--white border-radius-8 border-light-grey">
                      <div className="margin-bottom-20 ng-hide"></div>
                      <div className="padding-tb-16 padding-tb-xs-0 margin-lr-xs-16">
                        <div className="padding-tb-16 padding-left-16 padding-lr-24 cursor-pointer flexbox align-items-center justify-content-space-between ng-binding mdl-color-text--blue-900 mdl-color--blue-50 mdl-typography--font-medium">
                          Basic details
                          <i className="icon-arrow487 font-24 ng-hide" />
                        </div>
                        <Link to="/Editprofileacc">
                          <div className="padding-tb-16 padding-left-16 padding-lr-24 cursor-pointer flexbox align-items-center justify-content-space-between ng-binding ng-scope">
                            Account &amp; Password
                            <i className="icon-arrow487 font-24 ng-hide" />
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div
                    className="dirs-div maximize-width-md"
                    style={{ verticalAlign: "top" }}
                  >
                    <div className="margin-left-8 margin-left-xs-0 mdl-color--white border-radius-8">
                      <div
                        className="settings_header settings_header_footer_common"
                        style={{ transition: "top 0.7s" }}
                      >
                        <i className="margin-right-8 cursor-pointer icon-keyboard_backspace1 font-20 ng-hide" />

                        <div className="inline-block ng-binding">
                          Edit basic details
                        </div>
                      </div>
                      <div
                        id="profile_photo"
                        className="min-height-195 margin-top-xs-40"
                      >
                        <div className="padding-lr-20 padding-lr-xs-0 ng-scope">
                          <div className="ng-scope">
                            <profile-info-edit className="ng-isolate-scope">
                              <div>
                                <div className="mdl-color--white">
                                  <div className="mdl-grid ng-scope">
                                    <div
                                      id="profile_pic"
                                      className="ng-scope mdl-cell mdl-cell--12-col"
                                    >
                                      <div
                                        className="rel-pos flexbox justify-content-center"
                                        style={{
                                          margin: "20px auto",
                                          borderRadius: "100%",
                                          minWidth: "100px",
                                          minHeight: "100px",
                                          maxWidth: "170px",
                                          maxHeight: "170px",
                                        }}
                                      >
                                        <div
                                          className="btn-upload font-12 mdl-color--white flexbox justify-content-center align-items-center border-box padding-lr-8 margin-auto mdl-typography--font-regular settings__btn-secondary"
                                          id="upload_ev_btn_cont"
                                          style={{
                                            position: "absolute",
                                            zIndex: 2,
                                            cursor: "pointer",
                                            height: "24px",
                                            bottom: "-12px",
                                          }}
                                        >
                                          <div
                                            style={{ fontSize: "12px" }}
                                            className="ng-binding"
                                          >
                                            Change Photo
                                          </div>
                                          <input
                                            type="file"
                                            name="pic"
                                            accept="image/*"
                                            id="eventPicChangengf"
                                            defaultValue={photo}
                                            onChange={(e) =>
                                              setImg(e.target.files[0])
                                            }
                                          />
                                        </div>
                                        <img
                                          className="team-avatar"
                                          src={`http://localhost:3000/uploads/${photo}`}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </profile-info-edit>
                          </div>
                        </div>
                      </div>

                      <div className="min-height-195 margin-top-xs-40">
                        <div className="padding-lr-20 padding-lr-xs-0 ng-scope">
                          <div className="ng-scope">
                            <profile-info-edit className="ng-isolate-scope">
                              <div>
                                <div className="mdl-color--white">
                                  <div className="settings__chip-content font-14 margin-left-18 ng-scope margin-top-10"></div>
                                  <div className="mdl-grid ng-scope">
                                    <div
                                      id="first_name"
                                      className="ng-scope mdl-cell mdl-cell--6-col mdl-cell--8-col-tablet mdl-cell--4-col-phone"
                                    >
                                      <div className="mdl-textfield mdl-js-textfield maximize-width main-family mdl-textfield--floating-label settings__label is-dirty is-upgraded">
                                        <input
                                          className="mdl-textfield__input main-family ng-pristine ng-untouched ng-valid ng-not-empty"
                                          type="text"
                                          defaultValue={firstname}
                                          onChange={(e) =>
                                            setFname(e.target.value)
                                          }
                                        />
                                        <label className="mdl-textfield__label ng-binding">
                                          First Name
                                          <span className="settings__asterisk">
                                            *
                                          </span>
                                        </label>
                                        <span className="font-12 mdl-color-text--red-600 margin-top-4 abs-pos ng-binding ng-hide">
                                          <i className="icon-error margin-right-6" />
                                        </span>
                                      </div>
                                    </div>

                                    <div
                                      id="last_name"
                                      className="ng-scope mdl-cell mdl-cell--6-col mdl-cell--8-col-tablet mdl-cell--4-col-phone"
                                    >
                                      <div className="mdl-textfield mdl-js-textfield maximize-width main-family mdl-textfield--floating-label settings__label is-dirty is-upgraded">
                                        <input
                                          className="mdl-textfield__input main-family ng-pristine ng-untouched ng-valid ng-not-empty"
                                          type="text"
                                          defaultValue={lastname}
                                          onChange={(e) =>
                                            setLname(e.target.value)
                                          }
                                        />
                                        <label className="mdl-textfield__label ng-binding">
                                          Last Name
                                          <span className="ng-hide settings__asterisk">
                                            *
                                          </span>
                                        </label>
                                        <span className="font-12 mdl-color-text--red-600 margin-top-4 abs-pos ng-binding ng-hide">
                                          <i className="icon-error margin-right-6" />
                                        </span>
                                      </div>
                                    </div>

                                    <div
                                      id="dob"
                                      className="ng-scope mdl-cell mdl-cell--6-col mdl-cell--8-col-tablet mdl-cell--4-col-phone"
                                    >
                                      <div className="ng-scope">
                                        <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label settings__label has-placeholder is-dirty is-upgraded">
                                          <input
                                            id="dobinput"
                                            className="mdl-textfield__input ng-isolate-scope picker__input"
                                            type="date"
                                            defaultValue={dob}
                                            onChange={(e) =>
                                              setdob(e.target.value)
                                            }
                                          />
                                          <div className="picker"></div>

                                          <label className="mdl-textfield__label ng-binding">
                                            Date of Birth
                                            <span className="ng-scope settings__asterisk">
                                              *
                                            </span>
                                          </label>
                                          <span className="link-detail comment-share mdl-color-text--grey-900 ng-scope">
                                            <i className="icon-clear" />
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      id="first_name"
                                      className="ng-scope mdl-cell mdl-cell--6-col mdl-cell--8-col-tablet mdl-cell--4-col-phone"
                                    >
                                      <div className="mdl-textfield mdl-js-textfield maximize-width main-family mdl-textfield--floating-label settings__label is-dirty is-upgraded">
                                        <input
                                          className="mdl-textfield__input main-family ng-pristine ng-untouched ng-valid ng-not-empty"
                                          type="text"
                                          defaultValue={phone}
                                          onChange={(e) =>
                                            setphone(e.target.value)
                                          }
                                        />
                                        <label className="mdl-textfield__label ng-binding">
                                          Phone
                                        </label>
                                        <span className="font-12 mdl-color-text--red-600 margin-top-4 abs-pos ng-binding ng-hide">
                                          <i className="icon-error margin-right-6" />
                                        </span>
                                      </div>
                                    </div>
                                    <div
                                      id="first_name"
                                      className="ng-scope mdl-cell mdl-cell--6-col mdl-cell--8-col-tablet mdl-cell--4-col-phone"
                                    >
                                      <div className="mdl-textfield mdl-js-textfield maximize-width main-family mdl-textfield--floating-label settings__label is-dirty is-upgraded">
                                        <input
                                          className="mdl-textfield__input main-family ng-pristine ng-untouched ng-valid ng-not-empty"
                                          type="text"
                                          defaultValue={email}
                                          onChange={(e) =>
                                            setemail(e.target.value)
                                          }
                                        />
                                        <label className="mdl-textfield__label ng-binding">
                                          Email
                                          <span className="settings__asterisk">
                                            *
                                          </span>
                                        </label>
                                        <span className="font-12 mdl-color-text--red-600 margin-top-4 abs-pos ng-binding ng-hide">
                                          <i className="icon-error margin-right-6" />
                                        </span>
                                      </div>
                                    </div>
                                    <div
                                      id="first_name"
                                      className="ng-scope mdl-cell mdl-cell--6-col mdl-cell--8-col-tablet mdl-cell--4-col-phone"
                                    >
                                      <div className="mdl-textfield mdl-js-textfield maximize-width main-family mdl-textfield--floating-label settings__label is-dirty is-upgraded">
                                        <input
                                          className="mdl-textfield__input main-family ng-pristine ng-untouched ng-valid ng-not-empty"
                                          type="text"
                                          defaultValue={username}
                                          onChange={(e) =>
                                            setUsername(e.target.value)
                                          }
                                        />
                                        <label className="mdl-textfield__label ng-binding">
                                          Username
                                          <span className="settings__asterisk">
                                            *
                                          </span>
                                        </label>
                                        <span className="font-12 mdl-color-text--red-600 margin-top-4 abs-pos ng-binding ng-hide">
                                          <i className="icon-error margin-right-6" />
                                        </span>
                                      </div>
                                    </div>
                                    <div
                                      id="gender"
                                      className="ng-scope mdl-cell mdl-cell--6-col mdl-cell--8-col-tablet mdl-cell--4-col-phone"
                                    >
                                      <div className="select-dropdown-div settings__label">
                                        <div className="upper-label ng-binding">
                                          Gender
                                        </div>
                                        <select
                                          className="select-dropdown ng-pristine ng-untouched ng-valid ng-not-empty"
                                          style={{ height: "27px" }}
                                          onChange={(e) =>
                                            setgender(e.target.value)
                                          }
                                          defaultValue={gender}
                                        >
                                          <option label="Male" value="Male">
                                            Male
                                          </option>
                                          <option label="Female" value="Female">
                                            Female
                                          </option>
                                        </select>
                                      </div>
                                    </div>
                                    <div
                                      id="first_name"
                                      className="ng-scope mdl-cell mdl-cell--6-col mdl-cell--8-col-tablet mdl-cell--4-col-phone"
                                    >
                                      <div className="mdl-textfield mdl-js-textfield maximize-width main-family mdl-textfield--floating-label settings__label is-dirty is-upgraded">
                                        <input
                                          className="mdl-textfield__input main-family ng-pristine ng-untouched ng-valid ng-not-empty"
                                          type="text"
                                          defaultValue={city}
                                          onChange={(e) =>
                                            setCity(e.target.value)
                                          }
                                        />
                                        <label className="mdl-textfield__label ng-binding">
                                          City
                                          <span className="settings__asterisk">
                                            *
                                          </span>
                                        </label>
                                        <span className="font-12 mdl-color-text--red-600 margin-top-4 abs-pos ng-binding ng-hide">
                                          <i className="icon-error margin-right-6" />
                                        </span>
                                      </div>
                                    </div>
                                    <div
                                      id="first_name"
                                      className="ng-scope mdl-cell mdl-cell--6-col mdl-cell--8-col-tablet mdl-cell--4-col-phone"
                                    >
                                      <div className="mdl-textfield mdl-js-textfield maximize-width main-family mdl-textfield--floating-label settings__label is-dirty is-upgraded">
                                        <input
                                          className="mdl-textfield__input main-family ng-pristine ng-untouched ng-valid ng-not-empty"
                                          type="text"
                                          defaultValue={state}
                                          onChange={(e) =>
                                            setState(e.target.value)
                                          }
                                        />
                                        <label className="mdl-textfield__label ng-binding">
                                          State
                                          <span className="settings__asterisk">
                                            *
                                          </span>
                                        </label>
                                        <span className="font-12 mdl-color-text--red-600 margin-top-4 abs-pos ng-binding ng-hide">
                                          <i className="icon-error margin-right-6" />
                                        </span>
                                      </div>
                                    </div>
                                    <div
                                      id="first_name"
                                      className="ng-scope mdl-cell mdl-cell--6-col mdl-cell--8-col-tablet mdl-cell--4-col-phone"
                                    >
                                      <div className="mdl-textfield mdl-js-textfield maximize-width main-family mdl-textfield--floating-label settings__label is-dirty is-upgraded">
                                        <input
                                          className="mdl-textfield__input main-family ng-pristine ng-untouched ng-valid ng-not-empty"
                                          type="textarea"
                                          defaultValue={address}
                                          onChange={(e) =>
                                            setAddress(e.target.value)
                                          }
                                        />
                                        <label className="mdl-textfield__label ng-binding">
                                          Address
                                        </label>
                                        <span className="font-12 mdl-color-text--red-600 margin-top-4 abs-pos ng-binding ng-hide">
                                          <i className="icon-error margin-right-6" />
                                        </span>
                                      </div>
                                    </div>

                                    <input
                                      type="hidden"
                                      defaultValue={address}
                                    ></input>
                                    <input
                                      type="hidden"
                                      defaultValue={passing_year}
                                    ></input>
                                    <input
                                      type="hidden"
                                      defaultValue={password}
                                    ></input>
                                    <input
                                      type="hidden"
                                      defaultValue={state}
                                    ></input>
                                    <div className="maximize-width padding-top-8 settings_footer settings_header_footer_common">
                                      <div className="flexbox flex-dir-row justify-content-end">
                                        <button
                                          className="mdl-button mdl-js-button mdl-js-rippleeffect margin-right-12 settings__btn-secondary font-16 ng-binding"
                                          onClick={Cancle}
                                        >
                                          Cancel
                                        </button>
                                        <button
                                          className="mdl-button mdl-js-button settings__btn-primary margin-right-xs-16 float-right ladda-button font-16"
                                          onClick={submitbtn}
                                        >
                                          <span className="ladda-label ng-binding">
                                            Save changes
                                          </span>
                                          <span className="ladda-spinner" />
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </profile-info-edit>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ui-view>
      </div>
    </div>
  );
}
