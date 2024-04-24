import React from "react";
import event1 from "../img/event1.jpg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./regi.css";

export default function ViewEventDetail() {
  const [showForm, setShowForm] = useState(false);
  const [ep, setEp] = useState([]);
  const [user, setUser] = useState([]);
  const [firstname, setFname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [event, setEvent] = useState([]);
  const [event_participate, setEvent_participate] = useState([]);
  const [ep_name, setEpname] = useState("");
  const [ep_email, setEpemail] = useState("");
  const [number, setEpnumber] = useState("");
  const [invite, setInvite] = useState("");
  const [ename, setName] = useState("");
  const [Alyreadyreg, setAlyreadyreg] = useState("");
  const [formErrors, setFormErrors] = useState({});

  const [user_id, setId] = useState(sessionStorage.getItem("user"));
  const location = useLocation();
  const navigate = useNavigate();
  const event_id = location.pathname.split("/")[2]
    ? location.pathname.split("/")[2]
    : "";
  const ep_id = location.pathname.split("/")[2]
    ? location.pathname.split("/")[2]
    : "";

  useEffect(() => {
    if ((event_id, user_id, ep_id)) {
      fatchUserName();
      getEp();
      getEvent();
      getEvent_participate();
      Alyreadyregi();
    }
  }, []);
  const Alyreadyregi = async () => {
    try {
      const res = await axios.get(
        "http://localhost:3000/gurukulalumni/event_participate"
      );

      setAlyreadyreg(res.data.length);
      setEvent_participate(res.data);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getEvent = async () => {
    const res = await axios.get(
      "http://localhost:3000/gurukulalumni/event/" + event_id
    );
    setEvent(res.data);

    console.log(res.data);
  };
  const getEvent_participate = async () => {
    const res = await axios.get(
      "http://localhost:3000/gurukulalumni/event_participate/" + ep_id
    );
    setEvent_participate(res.data);
  };
  const refreshPage = () => {
    window.location.reload();
  };
  const fatchUserName = async () => {
    try {
      const res = await axios.get(
        "http://localhost:3000/gurukulalumni/user/" + user_id
      );
      setFname(res.data.firstname);
      setEmail(res.data.email);
      setPhone(res.data.phone);
    } catch (error) {}
  };

  const showRegistrationForm = () => {
    setShowForm(true);
  };
  const getEp = async () => {
    const res = await axios.get(
      "http://localhost:3000/gurukulalumni/event_participate/" + ep_id
    );
    console.log(res.data);
    setEp(res.data);

    setEpname(res.data.ep_name);
    setEpemail(res.data.ep_email);
    setEpnumber(res.data.number);
    setInvite(res.data.invite);
  };
  const validate = () => {
    const error = {};

    if (!invite) {
      error.invite =
        "Enter the number of guests you are bringing along with you !!!";
    }
    return error;
  };
  const btnRegister = async (e) => {
    e.preventDefault();
    setFormErrors(validate());
    if (invite) {
      const data = {
        user_id,
        event_id,
        ep_name: firstname,
        number: phone,
        ep_email: email,
        invite,
      };
      let res = "";
      try {
        alert("Are you sure to register?");
        res = await axios.post(
          "http://localhost:3000/gurukulalumni/event_participate",
          data
        );
      } catch (error) {}

      navigate("/Events");
      alert(res.data);
    }
  };
  // const getEp = async () => {
  //   try {
  //     const res = await axios.get(
  //       "http://localhost:3000/gurukulalumni/event_participate",
  //       {
  //         params: {
  //           user_id: event_participate.user_id,
  //           event_id: event_participate.event_id,
  //         },
  //       }
  //     );
  //     if (res.data.length === 0) {

  //       console.log("User is not registered for the event");
  //     } else {
  //       console.log("User is already registered for the event");
  //     }
  //     console.log(res.data);
  //     setEp(res.data);

  //     setEpname(res.data.ep_name);
  //     setEpemail(res.data.ep_email);
  //     setEpnumber(res.data.number);
  //     setInvite(res.data.invite);
  //   } catch (error) {}

  // };

  return (
    <main className="mdl-color--grey-100 mdl-color--grey-100-themed main-family ng-scope">
      <div className="no-padding--as-header-themed mdl-color--grey-900 mdl-color--grey-900-themed">
        <div className="mdl-grid center-wrap adjust-event-name">
          <div className="mdl-cell mdl-cell--4-offset-desktop mdl-cell--6-col mdl-cell--6-col-tablet mdl-cell--4-col-phone">
            <div style={{ paddingLeft: "8px" }}>
              <div className="margin-bottom-8">
                <div className="ng-isolate-scope"></div>
              </div>
              <div
                className="inline-block mdl-color-text--white font-24 font-xs-16 font-md-18 ng-binding"
                style={{ lineHeight: "initial" }}
              >
                {event.ename}
              </div>

              <div className="margin-top-16 flexbox align-items-center"></div>
            </div>
          </div>
          <div
            className="mdl-cell mdl-cell--2-col mdl-cell--1-col-phone mdl-color-text--white mdl-cell--hide-phone rel-pos right-alignment ng-hide"
            style={{ top: "3px", right: "-4px" }}
          >
            <span className="nb-menu-setting">
              <div className="mdl-menu__container is-upgraded">
                <div className="mdl-menu__outline mdl-menu--bottom-right" />
              </div>
            </span>
          </div>
          <div className="mdl-cell mdl-cell--4-offset-desktop mdl-cell--8-col mdl-cell--8-col-tablet mdl-cell--4-col-phone mdl-color-text--white font-16">
            <div style={{ paddingLeft: "8px" }}>
              <span className="new-icon ng-binding" title="Event Date">
                <i className="icon-event_available font-18 upper-icons" />
                Friday, {event.date}
              </span>

              <span className="creator-adjust-phone ng-scope">
                <i className="icon-person font-18 upper-icons" />
                <a
                  title="Creator"
                  className="mdl-color-text--white mdl-typography--font-regular new-icon ng-binding"
                  style={{ textDecoration: "none" }}
                >
                  {event_participate.number}
                  Shree Swaminarayan College of Computer Science
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="mdl-grid center-wrap main-family">
        <div className="mdl-cell mdl-cell--4-col mdl-cell--3-col-tablet mdl-cell--4-col-phone invite-card event-left-adjust">
          {event.status == "1" ? (
            <div className="mdl-card mdl-shadow--2dp maximize-width center-section-margin overflow-visible margin-bottom-14">
              <div
                className="mdl-card__media mdl-color--primary center-alignment overflow-hidden"
                style={{ position: "relative" }}
              >
                <div className="rel-pos">
                  <img
                    style={{
                      width: "100%",
                      height: "auto",
                      maxHeight: "400px",
                      minHeight: "150px",
                    }}
                    src={`http://localhost:3000/uploads/${event.image}`}
                    className="cursor-pointer"
                  />
                </div>
              </div>

              <div
                className="mdl-card__actions mdl-card--border font-14 main-family mdl-color-text--grey-900 mdl-typography--font-light"
                style={{ padding: "24px", lineHeight: "24.5px" }}
              >
                <div style={{ marginBottom: "12px" }}>
                  <div ng-show="editTimings" className="ng-hide">
                    {showForm && (
                      <form className="ng-pristine ng-valid">
                        <div className="mdl-grid mdl-grid--no-spacing">
                          <div>
                            <div>
                              <div className="ng-scope ng-isolate-scope">
                                <div className="mdl-textfield mdl-js-textfield rel-pos has-placeholder is-dirty is-upgraded">
                                  <input
                                    className="mdl-textfield__input rel-pos"
                                    type="text"
                                    placeholder="Your Name"
                                    defaultValue={firstname}
                                    onChange={(e) => {
                                      setEpname(e.target.value);
                                    }}
                                  />

                                  <span className="link-detail comment-share">
                                    <i className="icon-clear" />
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="mdl-cell mdl-cell--4-col mdl-cell--4-col-tablet padding-left-gt-xs-4">
                            <div className="rel-pos is-dirty">
                              <customfield className="ng-isolate-scope">
                                <div
                                  className="rel-pos"
                                  style={{ fontSize: "14px !important" }}
                                ></div>
                              </customfield>
                            </div>
                          </div>
                          <div>
                            <div className="ng-scope ng-isolate-scope">
                              <div className="mdl-textfield mdl-js-textfield rel-pos has-placeholder is-dirty is-upgraded">
                                <input
                                  className="mdl-textfield__input rel-pos"
                                  type="text"
                                  placeholder="Your Number"
                                  defaultValue={phone}
                                  onChange={(e) => setEpnumber(e.target.value)}
                                />
                                {/* {event.number = null ? (
                                 <p style={{ color: "red" }}>{formErrors.number}</p>
                              ): null} */}
                                <span className="link-detail comment-share">
                                  <i className="icon-clear" />
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="ng-scope ng-isolate-scope">
                            <div className="mdl-textfield mdl-js-textfield rel-pos has-placeholder is-dirty is-upgraded">
                              <input
                                type="hidden"
                                defaultValue={user_id}
                              ></input>
                              <input
                                type="hidden"
                                defaultValue={event_id}
                              ></input>
                              <input
                                className="mdl-textfield__input rel-pos"
                                type="text"
                                placeholder="Your E-mail"
                                defaultValue={email}
                                onChange={(e) => setEpemail(e.target.value)}
                              />
                              {/* {event.ep_email = null ? (
                                 <p style={{ color: "red" }}>{formErrors.ep_email}</p>
                              ): null}
                                */}
                              <span
                                ng-show="eventDetails.sdate"
                                ng-click="eventDetails.sdate=null"
                                className="link-detail comment-share"
                              >
                                <i className="icon-clear" />
                              </span>
                            </div>
                          </div>
                          <div>
                            <div className="ng-scope ng-isolate-scope">
                              <div
                                className="mdl-textfield mdl-js-textfield rel-pos has-placeholder is-dirty is-upgraded"
                                data-upgraded=",MaterialTextfield"
                              >
                                <div className="select-dropdown-div settings__label">
                                  <div className="upper-label ng-binding">
                                    Number of Guests
                                  </div>
                                  <select
                                    className="select-dropdown ng-pristine ng-untouched ng-valid ng-not-empty"
                                    style={{ height: "27px" }}
                                    onChange={(e) => setInvite(e.target.value)}
                                  >
                                    <option value="0">Choose</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                  </select>
                                  <p style={{ color: "red" }}>
                                    {formErrors.invite}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="right-alignment margin-tb-20">
                          <button
                            className="mdl-button mdl-js-button mdl-js-rippleeffect mdl-button--accent mdl-typography--font-regular ng-binding"
                            style={{ marginRight: "7px", zIndex: 0 }}
                          >
                            Cancel
                          </button>
                          <button
                            className="mdl-button font-14 mdl-js-button mdl-button--raised mdl-button--colored mdl-js-rippleeffect mdl-typography--font-regular ladda-button ladda-button-primary"
                            style={{
                              paddingTop: "0px",
                              float: "right",
                              zIndex: 0,
                              textTransform: "none",
                            }}
                            onClick={btnRegister}
                          >
                            <span className="ladda-label ng-binding">Save</span>
                            <span className="ladda-spinner" />
                          </button>
                        </div>
                      </form>
                    )}
                  </div>
                </div>
              </div>

              <div ng-if="eventDetails.regsetup_id>0" className="ng-scope">
                <div
                  className="mdl-card__actions m-b-20 ng-hide"
                  align="center"
                  ng-show="eventDetails.booking_on==1 && ( info.userRegInt==1 || info.userRegInt==2 || (info.userRegInt==3 && (same_com_log) || ( info.showUserRestricted && !same_com_log)) )"
                >
                  <div
                    ng-show="eventDetails.booking_on==1 && (info.userRegInt==1 || info.userRegInt==2 || (info.userRegInt==3 && same_com_log))"
                    className="ng-hide"
                  >
                    {/* {event_participate.event_id === event_id  &&
                    event_participate.user_id === user_id ? (
                      <div className="flexbox margin-bottom-24 align-items-center">
                        <i className="font-18 font-xs-14 margin-right-8 icon-check_circle mdl-color-text--light-green" />
                        <span className="font-14 font-xs-12 mdl-color-text--grey-900 ng-binding">
                          ✅ You were already registered for this event
                        </span>
                      </div>
                    ) : (
                      <button
                        className="mdl-button mdl-js-button  mdl-color-text--white mdl-typography--font-regular mdl-color--primary mdl-js-rippleeffect ng-binding"
                        id="register-btn"
                        onClick={showRegistrationForm}
                        
                        style={{ display: showForm ? "none" : "block" }}
                      >
                        Register
                      </button>
                      
                    )} */}
                    {Alyreadyreg == true ? (
                      <div className="flexbox margin-bottom-24 align-items-center">
                        <i className="font-18 font-xs-14 margin-right-8 icon-check_circle mdl-color-text--light-green" />
                        <span className="font-14 font-xs-12 mdl-color-text--grey-900 ng-binding">
                          ✅ You were already registered for this event
                        </span>
                      </div>
                    ) : (
                      <button
                        className="mdl-button mdl-js-button mdl-color-text--white mdl-typography--font-regular mdl-color--primary mdl-js-rippleeffect ng-binding"
                        id="register-btn"
                        onClick={showRegistrationForm}
                        style={{ display: showForm ? "none" : "block" }}
                      >
                        Register
                      </button>
                    )}

                    {/* <div
                    align="center"
                    style={{ marginTop: "15px" }}
                    ng-show="$root.featureEnabled('events.RSVP.*') && $root.app_data.same_com_log && !info.userRegRestricted"
                    className="ng-hide"
                  >
                    <a
                      style={{ cursor: "pointer" }}
                      ng-click="markNotAttending($event)"
                      className="ng-binding"
                    >
                      If you are not attending, click here
                    </a>
                  </div> */}
                  </div>
                  {/* <div
                  className="center-alignment mdl-color-text--grey-600 ng-hide"
                  style={{ marginTop: "15px" }}
                  ng-show="info.userRegRestricted || (eventDetails.booking_on==1 && info.showUserRestricted && info.userRegInt==3 && !same_com_log)"
                >
                  <i className="icon-info font-20" />
                  <div className="margin-top-6 font-14">
                    <span
                      ng-if="!info.userRegRestrictedRole && !info.userRegRestrictedUser && !info.userRegRole"
                      className="ng-scope"
                    >
                      <span
                        ng-if="!info.showVerifiedMem"
                        className="ng-binding ng-scope"
                      >
                        Registration is only open for members of Alumni
                        Association of Gurukul.
                      </span>
                    </span>
                  </div>
                </div> */}
                </div>
              </div>
            </div>
          ) : (
            <div className="mdl-card mdl-shadow--2dp maximize-width center-section-margin overflow-visible margin-bottom-14">
              <div
                className="mdl-card__media mdl-color--primary center-alignment overflow-hidden"
                style={{ position: "relative" }}
              >
                <div className="rel-pos">
                  <img
                    ng-src="https://almashines.s3.dualstack.ap-southeast-1.amazonaws.com/assets/images/eventlogos/sizea/20362721674789288.jpg"
                    err-src="https://almashines.s3.dualstack.ap-southeast-1.amazonaws.com/assets/staticpagesdata/5/lEZp7gYICs1558519753.jpg"
                    ng-class="{'cursor-pointer': eventDetails.event_logo}"
                    ng-style="(image_uploading)?{'opacity':'0.4'}:''"
                    style={{
                      width: "100%",
                      height: "auto",
                      maxHeight: "400px",
                      minHeight: "150px",
                    }}
                    ng-click="show_pic($event)"
                    src={event1}
                    className="cursor-pointer"
                  />
                </div>
              </div>

              <div ng-if="eventDetails.regsetup_id>0" className="ng-scope">
                <div
                  className="mdl-card__actions m-b-20 ng-hide"
                  align="center"
                  ng-show="eventDetails.booking_on==1 && ( info.userRegInt==1 || info.userRegInt==2 || (info.userRegInt==3 && (same_com_log) || ( info.showUserRestricted && !same_com_log)) )"
                >
                  <div
                    className="center-alignment mdl-color-text--grey-600 ng-hide"
                    style={{ marginTop: "15px" }}
                    ng-show="info.userRegRestricted || (eventDetails.booking_on==1 && info.showUserRestricted && info.userRegInt==3 && !same_com_log)"
                  >
                    <i className="icon-info font-20" />
                    <div className="margin-top-6 font-14">
                      <span
                        ng-if="!info.userRegRestrictedRole && !info.userRegRestrictedUser && !info.userRegRole"
                        className="ng-scope"
                      >
                        <span
                          ng-if="!info.showVerifiedMem"
                          className="ng-binding ng-scope"
                        >
                          Registration close
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="mdl-cell mdl-cell--8-col mdl-cell--5-col-tablet mdl-cell--4-col-phone main-family margin-top-gt-xs-10">
          <div
            id="tpl-content"
            ng-include="'event-tickets-card.tpl'"
            className="ng-scope"
          >
            <div
              className="padding-tb-32 padding-tb-md-24 padding-tb-xs-20 mdl-color--white mdl-shadow--2dp ng-scope"
              ng-class="{'margin-bottom-24':!same_com_log}"
              ng-if="eventDetails.regsetup_id>0 && (guestUserAttendee || (codes.length>0 && same_com_log))"
            >
              <div className="font-18 padding-lr-32 padding-lr-xs-16 padding-lr-md-24 padding-lr-md-24 mdl-typography--font-regular">
                {/* <div
                  ng-show="checkDates(eventDetails.sdate,eventDetails.fdate,eventDetails.booking_on,eventDetails.timezone,eventDetails.stime,eventDetails.ftime)=='Ongoing Event' && !registeredMsg"
                  className="flexbox align-items-center ng-hide"
                >
                  <i className="icon-flash_on font-20 margin-right-8 mdl-color-text--red-A200" />
                  <span className="font-16 mdl-typography--font-medium ng-binding">
                    Ongoing Event
                  </span>
                </div> */}

                <div
                  ng-if="checkDates(eventDetails.sdate,eventDetails.fdate,eventDetails.booking_on,eventDetails.timezone,eventDetails.stime,eventDetails.ftime)=='Past Event'"
                  className="ng-scope"
                >
                  {/* <div className="flexbox margin-bottom-24 align-items-center">
                    <i className="font-18 font-xs-14 margin-right-8 icon-check_circle mdl-color-text--light-green" />
                    <span className="font-14 font-xs-12 mdl-color-text--grey-900 ng-binding">
                      ✅ You were already registered for this event
                    </span>
                  </div> */}
                  {event.status == "1" ? (
                    <div
                      ng-hide="event.activate_status!=1 && (event.booking_on==1 || (event.metadata.reg.type==='form' && event.metadata.reg.closed!=1))"
                      className="padding-tb-6 center-alignment mdl-color-text--white font-14 font-xs-12 job-intern-capsule inline-block ng-binding ng-scope mdl-color--teal-A700"
                      style={{
                        margin: "0px 8px 0px 0px",
                        borderRadius: "16px",
                      }}
                      ng-if="event.activate_status!=1 && (event.booking_on==1 || (event.metadata.reg.type==='form' && event.metadata.reg.closed!=1))"
                    >
                      Coming Soon
                    </div>
                  ) : (
                    <div
                      ng-hide="event.activate_status!=1 && (event.booking_on==1 || (event.metadata.reg.type==='form' && event.metadata.reg.closed!=1))"
                      className="padding-tb-6 center-alignment mdl-color-text--white font-14 font-xs-12 job-intern-capsule inline-block ng-binding ng-scope mdl-color--grey-400"
                      style={{
                        margin: "0px 8px 0px 0px",
                        borderRadius: "16px",
                      }}
                      ng-if="event.activate_status!=1 && (event.booking_on==1 || (event.metadata.reg.type==='form' && event.metadata.reg.closed!=1))"
                    >
                      Past Event
                    </div>
                  )}
                </div>

                <div className="margin-top-24 margin-top-xs-14 flexbox flex-wrap-wrap align-items-center">
                  <a
                    id="alltickets"
                    className="font-14 margin-top-xs-10 padding-lr-0 font-xs-12  mdl-typography--font-regular margin-right-xs-30 margin-right-24 margin-lr-xs-0  ng-binding"
                    target="_blank"
                    href
                    style={{
                      textDecoration: "none",
                      boxShadow: "none",
                      textTransform: "none",
                      color: "#ffab00",
                    }}
                  >
                    {/* <img src="./img/Ticket.svg" className="margin-right-6" /> */}
                    <b style={{ fontSize: "20px" }}>🎫</b> View ticket <br />
                    <b style={{ fontSize: "15px" }}>
                      👆In Future We Can Add Tickets Dynamically!!!
                    </b>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div
            ng-if="(!eventDetails.regsetup_id && eventDetails.mode==1) || eventDetails.mode!=1 || myEvent || $root.app_data.isAdmin"
            className="margin-top-30 ng-scope"
            ng-show="eventDetails.location || eventDetails.cityName || editAddress"
          >
            <div className="m-b-20 font-18 mdl-typography--font-light">
              <i className="icon-location_on mdl-color-text--primary" />
              <div
                className="mdl-typography--font-regular ng-binding"
                style={{ display: "inline" }}
              >
                ADDRESS
              </div>
            </div>
            <div
              ng-hide="editAddress"
              style={{ padding: "0px 22px" }}
              className
            >
              <div
                className="font-16 mdl-color-text--grey-600 ng-binding ng-scope"
                ng-bind-html="eventDetails.location | convertToAnchor"
                ng-if="eventDetails.location!=null"
              >
                {event.locationn}
              </div>
            </div>
          </div>
          <br />

          <hr
            ng-show="(!eventDetails.regsetup_id && eventDetails.mode==1) || eventDetails.mode!=1 || myEvent || $root.app_data.isAdmin"
            ng-if="originalDesc!=null && originalDesc != '' && (eventDetails.location || eventDetails.cityName || editAddress)"
            className="ng-scope"
          />

          <div
            className="center-section-margin ng-scope"
            style={{ padding: "27px 0px 0px" }}
            ng-if="originalDesc!=null && originalDesc != ''"
          >
            <div className="m-b-20 font-18 mdl-typography--font-light">
              <i className="icon-description mdl-color-text--primary" />
              <div
                className="mdl-typography--font-regular ng-binding"
                style={{ display: "inline" }}
              >
                DESCRIPTION
              </div>
            </div>
            <div
              className="font-16 mdl-color-text--grey-600 content_image_width_responsive"
              ng-hide="editDesc"
              style={{
                padding: "0px 22px",
                wordWrap: "break-word",
                overflowY: "hidden",
              }}
              bind-html-compile="eventDetails.desc | contentFilters: 'webinar,GoogleForm'"
            >
              <div
                contentEditable="false"
                dangerouslySetInnerHTML={{ __html: event.description }}
              ></div>
              &nbsp;
            </div>
          </div>

          <hr
            ng-if="eventDetails.total_guests>0 && $root.app_data.same_com_log"
            className="ng-scope"
          />
        </div>
      </div>
      <div
        id="success-toast"
        className="mdl-js-snackbar mdl-snackbar mdl-snackbar_custom"
        data-upgraded=",MaterialSnackbar"
      >
        <div className="mdl-snackbar__text" />
        <button
          className="mdl-snackbar__action mdl-snackbar__action_custom"
          type="button"
          aria-hidden="true"
        />
      </div>
      <meta name="almashines-status-code" content={200} />
    </main>
  );
}
