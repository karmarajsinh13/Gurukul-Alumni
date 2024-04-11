import React from "react";
import banner1 from "../img/banner1.jpg";
import karma from "../img/karma.jpeg";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import {
  RiCakeFill,
  RiContactsBook2Fill,
  RiHome8Fill,
  RiLinksFill,
  RiMailFill,
  RiMapPin2Fill,
  RiMenFill,
  RiWomenFill,
} from "react-icons/ri";
import { Link } from "react-router-dom";
export default function Profile() {
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
      <div
        ng-style="$root.isCordova ? {'overflow-x':'hidden'}:''"
        className="ng-scope"
      >
        <rednotice className="ng-isolate-scope" />

        <div>
          <img className="profile-cover-image" src={banner1} />
        </div>
        <div className="page-strip page-strip-themed mdl-color--grey-100 mdl-color--grey-100-themed">
          <div
            ng-show="showProfPage"
            className="mdl-grid change-size main-family profile-page-adjust"
          >
            <div className="mdl-cell mdl-cell--4-col mdl-cell--3-col-tablet">
              <div className="mdl-card mdl-shadow--2dp maximize-width m-b-20 center-alignment overflow-visible">
                <div
                  className="rel-pos overflow-hidden"
                  style={{
                    margin: "20px auto",
                    borderRadius: "100%",
                    minWidth: "100px",
                    minHeight: "100px",
                    maxWidth: "170px",
                    maxHeight: "170px",
                    width: "130px",
                  }}
                >
                  <div
                    ng-if="my_profile"
                    className="btn-upload mdl-color--primary-dark mdl-color-text--white maximize-width center-alignment ng-scope"
                    id="upload_ev_btn_cont"
                    style={{
                      opacity: "0.7",
                      position: "absolute",
                      zIndex: 2,
                      cursor: "pointer",
                      height: "24px",
                      bottom: "0px",
                    }}
                    ng-hide="imageUploading"
                  >
                    <div
                      className="cursor-pointer ng-binding"
                      style={{ fontSize: "12px" }}
                      ng-click="goToSettings()"
                    >
                      Change
                    </div>
                  </div>
                  <as-profile-pic
                    name="Karmarajsinh Gohil"
                    img-config="{'parentDiv':'team-avatar '+(imageUploading ? 'opaque-image' : '')+(profilePic ? 'cursor-pointer' : ''),'parentDivStyle':'float:left;'}"
                    profile-src="https://almashines.s3.dualstack.ap-southeast-1.amazonaws.com/assets/images/profiles/170x170/2208215.jpg?v=1676117115"
                    txt-config="{'parentDiv':'font-48'}"
                    ng-if="!is_lost_user && showImgDiv"
                    ng-click="expandPPic($event,profilePic)"
                    className="ng-scope ng-isolate-scope"
                  >
                    <img
                      ng-class="imgConfig.parentDiv"
                      alt="KG"
                      className="ng-scope team-avatar cursor-pointer"
                      style={{ float: "left" }}
                      src={`http://localhost:3000/uploads/${photo}`}
                    />
                  </as-profile-pic>
                </div>
                <div>
                  <div
                    className="font-18 mdl-typography--font-medium ng-binding"
                    style={{ display: "inline" }}
                  >
                    {/* Karmarajsinh Gohil */}
                    {firstname} {lastname}
                  </div>

                  <span style={{ position: "absolute", paddingLeft: "15px" }}>
                    <a
                      ng-if="my_profile && nameEditable"
                      className="mdl-color-text--accent link-detail mdl-typography--font-regular cursor-pointer ng-scope"
                      ng-click="goToSettings('basic_details',undefined,pageSource)"
                    >
                      <i className="icon-mode_edit" />
                    </a>
                  </span>

                  <div
                    className="padding-tb-5 mdl-color-text--grey-700 font-16 ng-binding"
                    ng-bind-html="profile.pData.roles | memberSignature:'medium'"
                  >
                    Passing out {passing_year}
                    <br />
                    BCA
                    <br />
                    SSCCS
                  </div>

                  {/* <span
                    ng-show="enrollEditAllowedToUser && my_profile"
                    className
                  >
                    <a
                      ng-show="profile.pData.info.enrollment_no=='' || profile.pData.info.enrollment_no==null"
                      className="mdl-button mdl-js-button mdl-js-rippleeffect mdl-color-text--accent ng-binding"
                      ng-click="goToSettings('basic_details',undefined,pageSource)"
                      data-upgraded=",MaterialButton"
                    >
                      Add Enrollment Number
                    </a>
                  </span> */}

                  <div ng-if="showAuthStatus" className="ng-scope"></div>
                  <div ng-if="!is_lost_user" className="ng-scope">
                    <div
                      ng-class="{'margin-top-16 margin-bottom-24':!((!icardStatus && icardapply) || (!icardStatus && !icardPending && !icardRejected)),'margin-top-10 margin-bottom-18':(!icardStatus && icardapply) || (!icardStatus && !icardPending && !icardRejected)}"
                      className="ng-scope margin-top-16 margin-bottom-24"
                      ng-if="!disableAllActions && $root.featureEnabled('icard') && (my_profile || adminManageIcard) && info.showIcardDetails"
                    >
                      <div
                        ng-if="icardStatus"
                        ng-show="my_profile && !adminManageIcard"
                        className="ng-scope"
                      >
                        <a
                          ui-sref="inapp.icardRequest"
                          className="mdl-button mdl-js-button mdl-js-rippleeffect mdl-color-text--white mdl-color--accent ng-binding"
                          href="/icard"
                          data-upgraded=",MaterialButton"
                        >
                          My Alumni Card
                        </a>
                      </div>

                      <div
                        ng-if="icardStatus || icardRejected"
                        ng-show="adminManageIcard"
                        className="ng-scope ng-hide"
                      >
                        <a
                          ui-sref="inapp.icardRequest({'uid':2208215 })"
                          className="mdl-button mdl-js-button mdl-js-rippleeffect mdl-color-text--primary"
                          href="/icard?uid=2208215"
                          data-upgraded=",MaterialButton"
                        >
                          <i
                            ng-if="icardStatus"
                            className="icon-assignment_ind1 margin-right-6 ng-scope"
                          />
                          <span
                            ng-if="!icardRejected"
                            className="ng-binding ng-scope"
                          >
                            View Alumni Card
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="m-b-20"></div>

                  <as-networking className="ng-isolate-scope"></as-networking>
                </div>
              </div>

              <div
                className="mdl-card mdl-shadow--2dp maximize-width m-b-20 min-height-card"
                style={{ overflow: "visible", zIndex: 0 }}
              >
                <div
                  className="mdl-card__supporting-text font-16 maximize-width ng-binding"
                  style={{
                    boxSizing: "border-box",
                    MozBoxSizing: "border-box",
                  }}
                >
                  <i className="mdl-color-text--primary icon-info new-icon" />
                  Contact Information
                  <Link to="/Editprofile">
                    <a
                      style={{ float: "right" }}
                      className="mdl-color-text--accent link-detail mdl-typography--font-regular ng-binding ng-scope"
                    >
                      Edit
                    </a>
                  </Link>
                </div>

                <div
                  className="mdl-card__actions mdl-card--border font-14"
                  style={{ padding: "12px 10%" }}
                >
                  <div className="profile-info flexbox cursor-pointer">
                    <RiMailFill className="new-icon"></RiMailFill>
                    <i className="icon-email new-icon" />
                    <div
                      style={{ display: "inline-block", verticalAlign: "top" }}
                    >
                      <div>
                        <span className="mdl-color-text--grey-600 ng-binding">
                          {email}
                        </span>

                        <div className="mdl-tooltip ng-binding">Email ID</div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="profile-info flexbox cursor-pointer"
                    ng-show="pData.info.phone || pData.my_profile"
                  >
                    <RiContactsBook2Fill className="new-icon"></RiContactsBook2Fill>
                    <i className="icon-call new-icon" />
                    <div
                      style={{ display: "inline-block", verticalAlign: "top" }}
                    >
                      <div>
                        <span className="mdl-color-text--grey-600 ng-binding">
                          <span className="ng-binding ng-scope">+91-</span>
                          {phone}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="profile-info flexbox cursor-pointer">
                    <RiLinksFill className="new-icon"></RiLinksFill>
                    <i className="icon-insert_link new-icon" />
                    <div
                      className="maximize-width rel-pos mdl-color-text--grey-600 ellipsis-text ng-binding"
                      style={{ display: "inline-block", verticalAlign: "top" }}
                    >
                      gurukulalumni.in/profile/id-{user_id}
                    </div>
                  </div>
                  <RiMapPin2Fill className="new-icon"></RiMapPin2Fill>
                  <div
                    style={{
                      display: "inline-block",
                      verticalAlign: "top",
                      paddingLeft: "28px",
                    }}
                    className="margin-top-8"
                  >
                    <div className="mdl-color-text--grey-600 ng-scope">
                      {/* <div className="ng-binding">Neelkanth Residency</div> */}
                      <div className="ng-binding">{address}</div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="mdl-card mdl-shadow--2dp maximize-width m-b-20 min-height-card"
                style={{ overflow: "visible", zIndex: 0 }}
                ng-show="pData.info.locations[pData.info.current_city] || (info.showDob && pData.info.dob) || (showGender && pData.info.gender!=0 && pData.info.gender!=undefined) || (info.showMaritalStatus && pData.info.marital_status!=0 && pData.info.marital_status!=undefined) || pData.info.locations[pData.info.hometown] || pData.my_profile"
              >
                <div
                  className="mdl-card__supporting-text font-16 maximize-width ng-binding"
                  style={{
                    boxSizing: "border-box",
                    MozBoxSizing: "border-box",
                  }}
                >
                  <i className="mdl-color-text--primary icon-info new-icon" />
                  {/* <RiInformationFill/>  */}Basic Information
                  <a
                    ng-if="my_profile"
                    style={{ float: "right" }}
                    className="mdl-color-text--accent link-detail mdl-typography--font-regular ng-scope"
                    ng-click="!info.showEdit && goToSettings('basic_details')"
                  >
                    <Link to="/Editprofile">
                      <span ng-show="!info.showEdit" className="ng-binding">
                        Edit
                      </span>
                    </Link>
                  </a>
                </div>
                <div
                  className="mdl-card__actions mdl-card--border font-14"
                  style={{ padding: "12px 10%" }}
                >
                  <div className="profile-info flexbox cursor-pointer">
                    <RiHome8Fill className="new-icon"></RiHome8Fill>
                    <i className="icon-location_on new-icon" />
                    <span className="mdl-color-text--grey-600">
                      <a className="ng-binding">
                        {city}
                        <span className="ng-binding ng-scope">, {state}</span>
                      </a>
                    </span>
                  </div>

                  <div
                    className="profile-info flexbox cursor-pointer"
                    ng-show="info.showDob && (pData.info.dob || (pData.my_profile && $root.app_data.config.meta[64].fields.dob.visibility!=3 && $root.app_data.config.meta[64].fields.dob.visibility!='3'))"
                  >
                    <RiCakeFill className="new-icon"></RiCakeFill>
                    <i className="icon-cake new-icon" />
                    <span
                      className="mdl-color-text--grey-600 ng-binding"
                      id="profile-dob"
                      tabIndex={0}
                    >
                      {dob}
                    </span>
                  </div>
                  <div
                    className="profile-info flexbox cursor-pointer"
                    ng-show="info.showGender && ((pData.info.gender!=0 && pData.info.gender!=undefined) || (pData.my_profile && $root.app_data.config.meta[64].fields.gender.visibility!=3 && $root.app_data.config.meta[64].fields.gender.visibility!='3'))"
                  >
                    {/* <RiWomenFill className="new-icon"></RiWomenFill> */}
                    {gender == "Male" ? (
                      <RiMenFill className="new-icon"></RiMenFill>
                    ) : (
                      <RiWomenFill className="new-icon"></RiWomenFill>
                    )}
                    <i
                      className="new-icon icon-female"
                      ng-class="(pData.info.gender==1)?'icon-male':'icon-female'"
                    />
                    <span
                      className="mdl-color-text--grey-600 ng-binding ng-hide"
                      
                    >
                      {gender}
                    </span>

                    <div
                      className="mdl-tooltip ng-binding"
                      htmlFor="profile-gender"
                      data-upgraded=",MaterialTooltip"
                    >
                      Gender
                    </div>
                  </div>
                </div>
              </div>

              {/* <div
                ng-if="$root.featureEnabled('networking')"
                className="mdl-card mdl-shadow--2dp maximize-width m-b-20 min-height-card ng-scope"
                ng-show="pData.info.following_count>0 || pData.my_profile"
                style={{ overflow: "visible", zIndex: "unset" }}
              >
                <div
                  className="mdl-card__supporting-text font-16 maximize-width ng-binding"
                  style={{
                    boxSizing: "border-box",
                    MozBoxSizing: "border-box",
                  }}
                >
                  <i className="mdl-color-text--primary icon-User_Profile_UserNetwork new-icon" />
                  Network (5)
                  <span id="addedbyme" className="link-detail" tabIndex={0}>
                    <i className="icon-help_outline" />
                  </span>
                  <div
                    className="mdl-tooltip ng-binding"
                    htmlFor="addedbyme"
                    data-upgraded=",MaterialTooltip"
                  >
                    People who have been added in Network by Karmarajsinh Gohil
                  </div>
                  <span
                    ng-if="my_profile && profile.pData.roles.is_authenticated != 10 && profile.pData.roles.is_authenticated != 16"
                    style={{ float: "right" }}
                    className="mdl-color-text--accent link-detail ng-binding ng-scope"
                    ng-click="getfirstNetworkStream($event)"
                  >
                    Add People
                  </span>
                </div>

                <div
                  ng-if="my_profile && profile.pData.roles.is_authenticated != 10 && profile.pData.roles.is_authenticated != 16"
                  className="mdl-card__actions mdl-card--border center-alignment ng-scope ng-hide"
                  ng-hide="pData.user_network.data"
                  ng-click="getfirstNetworkStream($event)"
                  style={{ padding: "12px 10%" }}
                >
                  <i
                    className="icon-add182 new-icon"
                    style={{ fontSize: "20px" }}
                  />
                  <span
                    className="font-18 mdl-color-text--accent ng-binding"
                    style={{ cursor: "pointer" }}
                  >
                    Add AAG friends and contacts to your growing Network
                  </span>
                </div>

                <div
                  className="mdl-card__actions mdl-card--border"
                  style={{ padding: "12px 10%" }}
                  ng-show="pData.user_network.data"
                >
                  <div
                    className="network-info-div ng-scope"
                    ng-repeat="profile in pData.user_network.data"
                  >
                    <a
                      ui-sref="inapp.profile({uid: '2193948',source: 'pr_net'})"
                      style={{ textDecoration: "none" }}
                      href="/profile/2193948?source=pr_net"
                    >
                      <as-profile-pic
                        name="Priyanshu Bhut"
                        img-config="{'urlType':'s3base','parentDiv':'post-avatar new-icon','parentDivStyle':'float:left;'}"
                        profile-src="assets/images/profiles/50x50/2193948.jpg?v=1698038203"
                        txt-config="{'parentDiv':'font-16'}"
                        className="ng-isolate-scope"
                      >
                        <img
                          ng-class="imgConfig.parentDiv"
                          ng-attr-style="{{imgConfig.parentDivStyle}}"
                          ng-if="profileSrc"
                          alt="PB"
                          err-src="https://alumni.gyanmanjarividyapith.edu.in/api/institutes/profile_pic_default?cid=1080"
                          ng-src="https://almashines.s3.dualstack.ap-southeast-1.amazonaws.com/assets/images/profiles/50x50/2193948.jpg?v=1698038203"
                          ng-attr-loading="{{loading || undefined}}"
                          className="ng-scope post-avatar new-icon"
                          style={{ float: "left" }}
                          src="https://almashines.s3.dualstack.ap-southeast-1.amazonaws.com/assets/images/profiles/50x50/2193948.jpg?v=1698038203"
                        />
                      </as-profile-pic>
                    </a>
                    <div
                      style={{
                        marginTop: "5px",
                        position: "relative",
                        paddingRight: "12%",
                      }}
                      className="ellipsis-text"
                    >
                      <a
                        ui-sref="inapp.profile({uid: '2193948',source: 'pr_net'})"
                        className="mdl-color-text--grey-900 link-detail ng-binding"
                        id="net_list0"
                        href="/profile/2193948?source=pr_net"
                        tabIndex={0}
                      >
                        Priyanshu Bhut
                      </a>
                      <div
                        className="mdl-tooltip ng-binding"
                        htmlFor="net_list0"
                        data-upgraded=",MaterialTooltip"
                      >
                        Priyanshu Bhut
                      </div>
                      <div
                        className="font-12 mdl-color-text--grey-600 ng-binding"
                        ng-bind-html="profile | memberSignature:'small'"
                      >
                        Alumni, Class of 2021
                      </div>
                      <button
                        className="mdl-button mdl-js-button mdl-button--fab mdl-color--primary mdl-color-text--white font-16 share-social"
                        ng-show="notme(profile.user_basic_id)"
                        ng-click="clickMessageBtn($index, $event)"
                        id="message0"
                        style={{
                          position: "absolute",
                          right: "0px",
                          top: "2px",
                        }}
                        fdprocessedid="ekr0fp"
                        data-upgraded=",MaterialButton"
                        tabIndex={0}
                      >
                        <i className="icon-mail" />
                      </button>
                      <div
                        className="mdl-tooltip ng-binding"
                        htmlFor="message0"
                        data-upgraded=",MaterialTooltip"
                      >
                        Send Message to Priyanshu
                      </div>
                    </div>
                  </div>
                  <div
                    className="network-info-div ng-scope"
                    ng-repeat="profile in pData.user_network.data"
                  >
                    <a
                      ui-sref="inapp.profile({uid: '2193572',source: 'pr_net'})"
                      style={{ textDecoration: "none" }}
                      href="/profile/2193572?source=pr_net"
                    >
                      <as-profile-pic
                        name="Jadeja Jayveersinh"
                        img-config="{'urlType':'s3base','parentDiv':'post-avatar new-icon','parentDivStyle':'float:left;'}"
                        profile-src="assets/images/profiles/50x50/2193572.jpg?v=1691252083"
                        txt-config="{'parentDiv':'font-16'}"
                        className="ng-isolate-scope"
                      >
                        <img
                          ng-class="imgConfig.parentDiv"
                          ng-attr-style="{{imgConfig.parentDivStyle}}"
                          ng-if="profileSrc"
                          alt="JJ"
                          err-src="https://alumni.gyanmanjarividyapith.edu.in/api/institutes/profile_pic_default?cid=1080"
                          ng-src="https://almashines.s3.dualstack.ap-southeast-1.amazonaws.com/assets/images/profiles/50x50/2193572.jpg?v=1691252083"
                          ng-attr-loading="{{loading || undefined}}"
                          className="ng-scope post-avatar new-icon"
                          style={{ float: "left" }}
                          src="https://almashines.s3.dualstack.ap-southeast-1.amazonaws.com/assets/images/profiles/50x50/2193572.jpg?v=1691252083"
                        />
                      </as-profile-pic>
                    </a>
                    <div
                      style={{
                        marginTop: "5px",
                        position: "relative",
                        paddingRight: "12%",
                      }}
                      className="ellipsis-text"
                    >
                      <a
                        ui-sref="inapp.profile({uid: '2193572',source: 'pr_net'})"
                        className="mdl-color-text--grey-900 link-detail ng-binding"
                        id="net_list1"
                        href="/profile/2193572?source=pr_net"
                        tabIndex={0}
                      >
                        Jadeja Jayveersinh
                      </a>
                      <div
                        className="mdl-tooltip ng-binding"
                        htmlFor="net_list1"
                        data-upgraded=",MaterialTooltip"
                      >
                        Jadeja Jayveersinh
                      </div>
                      <div
                        className="font-12 mdl-color-text--grey-600 ng-binding"
                        ng-bind-html="profile | memberSignature:'small'"
                      >
                        Alumni, Class of 2019
                      </div>
                      <button
                        className="mdl-button mdl-js-button mdl-button--fab mdl-color--primary mdl-color-text--white font-16 share-social"
                        ng-show="notme(profile.user_basic_id)"
                        ng-click="clickMessageBtn($index, $event)"
                        id="message1"
                        style={{
                          position: "absolute",
                          right: "0px",
                          top: "2px",
                        }}
                        fdprocessedid="s1ct2c"
                        data-upgraded=",MaterialButton"
                        tabIndex={0}
                      >
                        <i className="icon-mail" />
                      </button>
                      <div
                        className="mdl-tooltip ng-binding"
                        htmlFor="message1"
                        data-upgraded=",MaterialTooltip"
                      >
                        Send Message to Jadeja
                      </div>
                    </div>
                  </div>
                  <div
                    className="network-info-div ng-scope"
                    ng-repeat="profile in pData.user_network.data"
                  >
                    <a
                      ui-sref="inapp.profile({uid: '2345783',source: 'pr_net'})"
                      style={{ textDecoration: "none" }}
                      href="/profile/2345783?source=pr_net"
                    >
                      <as-profile-pic
                        name="Darshit Bhatt"
                        img-config="{'urlType':'s3base','parentDiv':'post-avatar new-icon','parentDivStyle':'float:left;'}"
                        profile-src="assets/images/profiles/50x50/2345783.jpg?v=1703946888"
                        txt-config="{'parentDiv':'font-16'}"
                        className="ng-isolate-scope"
                      >
                        <img
                          ng-class="imgConfig.parentDiv"
                          ng-attr-style="{{imgConfig.parentDivStyle}}"
                          ng-if="profileSrc"
                          alt="DB"
                          err-src="https://alumni.gyanmanjarividyapith.edu.in/api/institutes/profile_pic_default?cid=1080"
                          ng-src="https://almashines.s3.dualstack.ap-southeast-1.amazonaws.com/assets/images/profiles/50x50/2345783.jpg?v=1703946888"
                          ng-attr-loading="{{loading || undefined}}"
                          className="ng-scope post-avatar new-icon"
                          style={{ float: "left" }}
                          src="https://almashines.s3.dualstack.ap-southeast-1.amazonaws.com/assets/images/profiles/50x50/2345783.jpg?v=1703946888"
                        />
                      </as-profile-pic>
                    </a>
                    <div
                      style={{
                        marginTop: "5px",
                        position: "relative",
                        paddingRight: "12%",
                      }}
                      className="ellipsis-text"
                    >
                      <a
                        ui-sref="inapp.profile({uid: '2345783',source: 'pr_net'})"
                        className="mdl-color-text--grey-900 link-detail ng-binding"
                        id="net_list2"
                        href="/profile/2345783?source=pr_net"
                        tabIndex={0}
                      >
                        Darshit Bhatt
                      </a>
                      <div
                        className="mdl-tooltip ng-binding"
                        htmlFor="net_list2"
                        data-upgraded=",MaterialTooltip"
                      >
                        Darshit Bhatt
                      </div>
                      <div
                        className="font-12 mdl-color-text--grey-600 ng-binding"
                        ng-bind-html="profile | memberSignature:'small'"
                      >
                        Alumni, Class of 2021
                      </div>
                      <button
                        className="mdl-button mdl-js-button mdl-button--fab mdl-color--primary mdl-color-text--white font-16 share-social"
                        ng-show="notme(profile.user_basic_id)"
                        ng-click="clickMessageBtn($index, $event)"
                        id="message2"
                        style={{
                          position: "absolute",
                          right: "0px",
                          top: "2px",
                        }}
                        fdprocessedid="kecn8m"
                        data-upgraded=",MaterialButton"
                        tabIndex={0}
                      >
                        <i className="icon-mail" />
                      </button>
                      <div
                        className="mdl-tooltip ng-binding"
                        htmlFor="message2"
                        data-upgraded=",MaterialTooltip"
                      >
                        Send Message to Darshit
                      </div>
                    </div>
                  </div>
                  <div
                    className="center-alignment"
                    style={{ padding: "8px 0px" }}
                  >
                    <button
                      className="mdl-button mdl-js-button mdl-typography--font-regular mdl-color-text--accent ng-binding"
                      ng-click="loadNetwork($event)"
                      ng-show="more_network"
                      fdprocessedid="1kfsce"
                      data-upgraded=",MaterialButton"
                    >
                      See all
                    </button>
                  </div>
                </div>
              </div> */}
            </div>

            <div className="mdl-cell mdl-cell--8-col mdl-cell--5-col-tablet">
              <div
                className="mdl-card mdl-shadow--2dp maximize-width m-b-20 min-height-card"
                style={{ zIndex: 0 }}
              >
                <div
                  className="mdl-card__supporting-text font-16 maximize-width ng-binding"
                  style={{
                    boxSizing: "border-box",
                    MozBoxSizing: "border-box",
                  }}
                >
                  <i className="mdl-color-text--primary icon-person new-icon" />
                  AAG related experience
                  {/* <span
                    ng-show="my_profile"
                    style={{ float: "right" }}
                    className="mdl-color-text--accent link-detail ng-binding"
                    ng-click="goToSettings('insti_details')"
                  >
                    <i className="icon-add" />
                    Add new role
                  </span> */}
                </div>
                <div
                  className="mdl-card__actions mdl-card--border"
                  style={{ padding: "24px 10%" }}
                >
                  <div
                    ng-repeat="role_info in pData.rolesInfo"
                    style={{ margin: "8px 0px", cursor: "pointer" }}
                    className="rel-pos padding-16 ng-scope edit-info-div"
                    ng-class="my_profile?'edit-info-div':''"
                    ng-style="{'cursor':$root.app_data.config.meta[64].fields.roleInfo.editability!=2?'pointer':'default'}"
                  >
                    <i
                      ng-hide="$root.app_data.config.meta[64].fields.roleInfo.editability==2"
                      className="icon-edit edit-icon-hide link-detail mdl-color-text--accent"
                      ng-click="goToSettings('insti_details')"
                    />
                    <div
                      className="mdl-typography--font-medium ng-binding"
                      style={{ marginBottom: "8px" }}
                    >
                      Alumni
                    </div>
                    <div
                      className="font-14 padding-tb-4 ng-binding"
                      ng-bind="role_info.sub_insti_name"
                    >
                      Swaminarayan Gurukul
                    </div>
                    <div
                      className="font-14 padding-tb-4 ng-binding ng-scope"
                      ng-if="role_info.institute"
                    >
                      BCA
                    </div>
                    <div className="font-14 padding-tb-4 ng-binding">
                      3 Years, BCA
                    </div>

                    <div
                      className="font-14 padding-tb-4 ng-binding ng-scope"
                      ng-if="!$root.featureEnabled('profile_config_for_user.hide_end_in_profile.*')"
                    >
                      2021-{passing_year}
                    </div>
                  </div>
                </div>
              </div>

              <div
                ng-if="showEducation"
                className="mdl-card mdl-shadow--2dp maximize-width m-b-20 min-height-card ng-scope"
                style={{ zIndex: 0 }}
              >
                <div
                  className="mdl-card__supporting-text font-16 maximize-width ng-binding"
                  style={{
                    boxSizing: "border-box",
                    MozBoxSizing: "border-box",
                  }}
                >
                  <i className="mdl-color-text--primary icon-school new-icon" />
                  Education
                  {/* <span
                    tippy
                    option="tippyOption"
                    show="eduTippy"
                    ng-show="my_profile"
                    style={{ float: "right" }}
                    className="mdl-color-text--accent link-detail ng-binding ng-isolate-scope"
                    ng-click="goToSettings('education_details')"
                    data-tooltipped
                    aria-describedby="tippy-tooltip-1"
                    data-original-title="Please make sure your educations are added here."
                  >
                    <i className="icon-add" />
                    Add Education
                  </span> */}
                </div>
                <div
                  className="mdl-card__actions mdl-card--border"
                  style={{ padding: "24px 10%" }}
                >
                  <div
                    style={{ margin: "8px 0px", cursor: "pointer" }}
                    ng-repeat="edu in pData.info.education_dsp"
                    ng-class="my_profile?'edit-info-div':''"
                    ng-style="{'cursor':edu.uneditable==0?'pointer':'default'}"
                    className="rel-pos padding-16 ng-scope edit-info-div"
                    ng-click="my_profile && edu.uneditable==0 && goToSettings('education_details');"
                  >
                    <i
                      ng-if="my_profile && edu.uneditable==0"
                      className="icon-edit edit-icon-hide link-detail mdl-color-text--accent mdl-cell--hide-phone ng-scope"
                    />
                    <div
                      className="mdl-typography--font-medium ng-binding"
                      style={{ marginBottom: "8px" }}
                      ng-bind="edu.institute"
                    >
                      Shree swaminaray collage of computer science
                    </div>
                    <div
                      className="mdl-color-text--grey-600 ng-binding"
                      style={{ marginBottom: "4px" }}
                      ng-bind="degDepDisplay(edu.degree, edu.department)"
                    >
                      BCA, Information Technology
                    </div>
                    <div
                      className="font-14 mdl-color-text--grey-600 ng-binding"
                      ng-bind="edu.start_month | displayTimespanWithMonth : edu.start:edu.end_month:edu.end"
                    >
                      2021 - 2024
                    </div>
                  </div>
                </div>
              </div>

              <br />

              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
