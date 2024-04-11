import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Editprofileacc() {
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
      navigate("/Users");
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
                  <get-breadcrumbs
                    ng-if="brSet"
                    page="settings"
                    bc-creation-data="?source=profile&uid=2208215&profile_name=Karmarajsinh%20Gohil&profile_name=Karmarajsinh Gohil&tab=contact_details"
                    className="ng-scope ng-isolate-scope"
                  >
                    <div
                      ng-repeat="x in breadName"
                      className="inline-block ng-scope"
                    >
                      <span
                        className="mdl-typography--font-light ng-binding mdl-color-text--white mdl-color-text--white-themed link-detail"
                        ng-class="(x.link=='none')?'mdl-color-text--white mdl-color-text--white-themed':'mdl-color-text--white mdl-color-text--white-themed link-detail'"
                        ng-click="getBreadLink($index,bcCreationData)"
                      >
                        Karmarajsinh Gohil
                      </span>
                    </div>
                    <div
                      ng-repeat="x in breadName"
                      className="inline-block ng-scope"
                    >
                      <div
                        ng-if="$index>0"
                        className="inline-block ng-scope"
                        style={{ padding: "0px 7px" }}
                      >
                        <i
                          className="icon-keyboard_arrow_right font-14 mdl-color-text--white mdl-color-text--white-themed"
                          ng-class="(x.link=='none')?'mdl-color-text--white mdl-color-text--white-themed':'mdl-color-text--white mdl-color-text--white-themed'"
                          style={{ fontSize: "8px" }}
                        />
                      </div>
                      <span
                        className="mdl-typography--font-light ng-binding mdl-color-text--white mdl-color-text--white-themed"
                        ng-class="(x.link=='none')?'mdl-color-text--white mdl-color-text--white-themed':'mdl-color-text--white mdl-color-text--white-themed link-detail'"
                        ng-click="getBreadLink($index,bcCreationData)"
                      >
                        Settings
                      </span>
                    </div>
                  </get-breadcrumbs>
                </div>
              </div>
            </div>

            <div
              className="page-strip mdl-color--grey-100 mdl-color--grey-100-themed"
              ng-class="{'mdl-color--grey-100 mdl-color--grey-100-themed':!isMobView}"
              id="settings"
            >
              <div
                className="settings-card change-size mdl-grid padding-lr-0 padding-top-xs-0 settings-adjust-card"
                style={{ maxWidth: "1060px" }}
              >
                <div className="mdl-cell--12-col div-cell">
                  <div
                    className="tabs-div maximize-width-md"
                    ng-show="showMenu"
                  >
                    <div
                      className="margin-right-8 margin-left-md-8 margin-right-xs-0 padding-tb-xs-16 mdl-color--white border-radius-8 border-light-grey"
                      ng-class="{'border-radius-8 border-light-grey':!isMobView}"
                    >
                      <div
                        ng-show="!$root.isCordova && !current_tab"
                        className="margin-bottom-20 ng-hide"
                      ></div>
                      <div
                        className="padding-tb-16 padding-tb-xs-0 margin-lr-xs-16"
                        ng-class="{'border-radius-8 border-light-grey':isMobView}"
                      >
                        <Link  to="/Editprofile">
                        <div className="padding-tb-16 padding-left-16 padding-lr-24 cursor-pointer flexbox align-items-center justify-content-space-between ng-binding ng-scope">
                          Basic details
                          <i
                            ng-show="isMobView"
                            className="icon-arrow487 font-24 ng-hide"
                          />
                        </div></Link>

                        <div className="padding-tb-16 padding-left-16 padding-lr-24 cursor-pointer flexbox align-items-center justify-content-space-between ng-binding mdl-color-text--blue-900 mdl-color--blue-50 mdl-typography--font-medium">
                          Account &amp; Password
                          <i
                            ng-show="isMobView"
                            className="icon-arrow487 font-24 ng-hide"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="dirs-div maximize-width-md"
                    ng-show="showDir"
                    style={{ verticalAlign: "top" }}
                  >
                    <div className="margin-left-8 margin-left-xs-0 mdl-color--white border-radius-8">
                      <div
                        ng-if="!$root.isCordova || isTablet"
                        className="ng-scope"
                      >
                        <div
                          ng-show="current_tab"
                          className="settings_header settings_header_footer_common"
                          id="settings-header"
                          style={{ transition: "top 0.7s" }}
                        >
                          <i className="margin-right-8 cursor-pointer icon-keyboard_backspace1 font-20 ng-hide" />

                          <div className="inline-block ng-binding">
                            Account & Password Settings
                          </div>
                        </div>
                        <div />
                      </div>
                      <div
                        ng-class="{'padding-bottom-32 padding-bottom-xs-16':current_tab=='insti_details'}"
                        className="min-height-195 margin-top-xs-40"
                      >
                        <div
                          ng-if="current_tab=='acc_password'"
                          className="ng-scope"
                        >
                          <account-settings
                            uid={2208215}
                            className="ng-isolate-scope"
                          >
                            <div>
                              <style
                                dangerouslySetInnerHTML={{
                                  __html:
                                    "\n\t\t.disconnect_text {\n\t\t\tfont-size: 14px;\n\t\t\tfont-weight: 600;\n\t\t\tcolor: #CC3300;\n\t\t\tcursor: pointer;\n\t\t}\n        .icon_style{background: #8BC34A;color: #ffffff;}        \n    ",
                                }}
                              />
                              <div>
                                <div>
                                  <span className="ladda-label"></span>
                                  <span className="ladda-spinner">
                                    <div
                                      className
                                      role="progressbar"
                                      style={{
                                        position: "absolute",
                                        width: "0px",
                                        zIndex: "auto",
                                        left: "auto",
                                        top: "auto",
                                      }}
                                    ></div>
                                  </span>
                                  <div
                                    className="ladda-progress"
                                    style={{ width: "0px" }}
                                  />
                                </div>

                                <div
                                  className="mdl-card__supporting-text mdl-grid ng-scope"
                                  ng-if="details_fetched"
                                >
                                  <div>
                                    <h6 className="mdl-color-text--black mdl-typography--font-semibold ng-binding">
                                      Change password
                                    </h6>
                                    <div bind-html-compile='"Email_Sent_Reset_Pass" | asPortalLang: "An email will be sent to your registered email id \"[DATA:userEmail]\" with instructions to set new password": {userEmail: "<span class=\"settings__text-primary font-14\">"+$root.app_data.email+"</span>"}'>
                                      <span className="ng-scope">
                                        An email will be sent to your registered
                                        email id "
                                      </span>
                                      <span className="settings__text-primary font-14 ng-scope">
                                        karmarajoneplus@gmail.com
                                      </span>
                                      <span className="ng-scope">
                                        " with instructions to set new password
                                      </span>
                                    </div>
                                    <span
                                      className="mdl-button mdl-js-button settings__btn-secondary mdl-js-rippleeffect margin-lr-0 margin-top-20 margin-bottom-10 font-14 ladda-button"
                                      ladda-button="changePwd"
                                      data-style="zoom-out"
                                      ng-click="changePassword()"
                                      data-spinner-color="#242424"
                                    >
                                      <span className="ladda-label ng-binding">
                                        Send email to change password
                                      </span>
                                      <span className="ladda-spinner" />
                                    </span>
                                  </div>

                                  <div
                                    ng-hide="$root.app_data.isAdmin"
                                    className
                                  >
                                    <div className="divider" />
                                    <h6 className="mdl-color-text--black mdl-typography--font-semibold ng-binding">
                                      Delete account
                                    </h6>
                                    <div className="ng-binding">
                                      If you do not wish to continue being a
                                      member of this network, you may request
                                      the admin to delete your account.
                                    </div>
                                    <div
                                      className="mdl-button mdl-js-button mdl-js-rippleeffect ladda-button font-14 margin-lr-0 margin-top-20 margin-bottom-10 settings__btn-error"
                                      ladda-button="deleteUserMessage"
                                      data-style="zoom-out"
                                      ng-click="sendMessage($event)"
                                      data-spinner-color="#CC3300"
                                    >
                                      <span className="ladda-label ng-binding">
                                        Delete my account
                                      </span>
                                      <span className="ladda-spinner" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </account-settings>
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
