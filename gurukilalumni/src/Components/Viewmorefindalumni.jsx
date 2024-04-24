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

export default function Viewmorefindalumni() {
    const [user_id, setId] = useState(sessionStorage.getItem("user"));
    const [user, setUser] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
      if (user_id)
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
        setUser(res.data);
      };
  return (
    <div>
      <div
        className="modal ng-scope modal--active"
       
       
      >
        <div className="modal__dialog maximize-width padding-top-30">
          <div
            className="modal__content adjust-modal-small modal__below_header mdl-shadow--2dp modal__content--active"
            ng-class="{'mdl-color--grey-100':$root.isMobile}"
            style={{ padding: "0px", maxWidth: "408px" }}
          >
            <div className="font-24 font-xs-20 padding-right-18 padding-right-xs-16 padding-top-8">
              <i
                className="icon-clear float-right"
                ng-click="close($event)"
                style={{ cursor: "pointer" }}
              />
            </div>

            <div
              ng-show="!info.dataLoading"
              className="margin-lr-xs-16 margin-top-24 scrollbar-thin-grey scrollbar-thin-grey-firefox mdl-color--grey-100"
              ng-class="{'mdl-color--grey-100':!$root.isMobile}"
              style={{ overflowY: "scroll", height: "calc(100vh - 94px)" }}
            >
              <div
                className="mdl-card maximize-width center-alignment padding-bottom-16 m-b-20 overflow-visible ng-scope"
                ng-if="showData.profile_details"
              >
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
                  <as-profile-pic
                    name="21st century drpatel7171"
                    img-config="{'parentDiv':'team-avatar','parentDivStyle':'float:left;'}"
                    profile-src="https://almashines.s3.dualstack.ap-southeast-1.amazonaws.com/assets/images/profiles/170x170/2179397.jpg?v=1664535291"
                    txt-config="{'parentDiv':'font-48'}"
                    ng-if="!is_lost_user && showImgDiv"
                    className="ng-scope ng-isolate-scope"
                  >
                    <img
                      ng-class="imgConfig.parentDiv"
                      ng-attr-style="{{imgConfig.parentDivStyle}}"
                      ng-if="profileSrc"
                      alt="2C"
                      err-src="https://alumni.GurukulCollege.edu.in/api/institutes/profile_pic_default?cid=1080"
                      ng-src="https://almashines.s3.dualstack.ap-southeast-1.amazonaws.com/assets/images/profiles/170x170/2179397.jpg?v=1664535291"
                      ng-attr-loading="{{loading || undefined}}"
                      className="ng-scope team-avatar"
                      style={{ float: "left" }}
                      src="https://almashines.s3.dualstack.ap-southeast-1.amazonaws.com/assets/images/profiles/170x170/2179397.jpg?v=1664535291"
                    />
                  </as-profile-pic>
                </div>
                <div>
                  <div
                    className="font-18 mdl-typography--font-medium ng-binding"
                    style={{ display: "inline" }}
                  >
                    {user.firstname}
                  </div>
                  <span
                    ng-show="couchsurfing"
                    id="couchSurf"
                    className="link-detail ng-isolate-scope ng-hide"
                    tippy
                    option="{arrow: true,theme: 'transparent',dynamicTitle:true}"
                    data-tooltipped
                    aria-describedby="tippy-tooltip-8"
                    data-original-title="Happy to be a couchsurfing host."
                  >
                    <i
                      className="icon-event_seat mdl-color-text--accent rel-pos font-20"
                      style={{ marginLeft: "6px", top: "1px" }}
                    />
                  </span>

                  <div
                    className="padding-tb-5 mdl-color-text--grey-700 font-16 ng-binding"
                    ng-bind-html="profile.pData.roles | memberSignature:'medium'"
                  >
                    Class of 2015
                    <br />
                    12TH, Science
                    <br />
                    Gurukul College
                  </div>

                  <div ng-if="!is_lost_user" className="ng-scope">
                    <div ng-if="showAuthStatus" className="ng-scope"></div>
                  </div>

         
                </div>
              </div>

              <div
                className="center-alignment"
                style={{
                  position: "fixed",
                  bottom: "20px",
                  left: "50%",
                  transform: "translate(-50%, 0)",
                  zIndex: 1,
                  boxShadow: "rgb(0 0 0 / 25%) 0px 3px 6px",
                }}
              >
           
              </div>

              <div
                ng-if="showData.basic_info"
                className="mdl-card maximize-width m-b-20 min-height-card ng-scope"
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
                  Basic Information
                </div>
                <div
                  className="mdl-card__actions mdl-card--border font-14"
                  style={{ padding: "12px 10%" }}
                >
                       <div
                    className="profile-info"
                    ng-show="info.showDob && (pData.info.dob || (pData.my_profile && $root.app_data.config.meta[64].fields.dob.visibility!=3 && $root.app_data.config.meta[64].fields.dob.visibility!='3'))"
                  >
                    <i className="icon-cake new-icon" />
                    <span
                      className="mdl-color-text--grey-600 ng-binding ng-isolate-scope"
                      id="profile-dob"
                      tippy
                      option="{arrow: true,theme: 'transparent',dynamicTitle:true}"
                      data-tooltipped
                      aria-describedby="tippy-tooltip-12"
                      data-original-title="Date of Birth"
                    >
                      Mar 21, 1995
                    </span>
                  </div>
             
                  <div
                    className="profile-info"
                    ng-show="info.showDob && (pData.info.dob || (pData.my_profile && $root.app_data.config.meta[64].fields.dob.visibility!=3 && $root.app_data.config.meta[64].fields.dob.visibility!='3'))"
                  >
                    <i className="icon-cake new-icon" />
                    <span
                      className="mdl-color-text--grey-600 ng-binding ng-isolate-scope"
                      id="profile-dob"
                      tippy
                      option="{arrow: true,theme: 'transparent',dynamicTitle:true}"
                      data-tooltipped
                      aria-describedby="tippy-tooltip-12"
                      data-original-title="Date of Birth"
                    >
                      Mar 21, 1995
                    </span>
                  </div>
                  <div
                    className="profile-info ng-hide"
                    ng-show="info.showGender && ((pData.info.gender!=0 && pData.info.gender!=undefined) || (pData.my_profile && $root.app_data.config.meta[64].fields.gender.visibility!=3 && $root.app_data.config.meta[64].fields.gender.visibility!='3'))"
                  >
                    <i
                      className="new-icon icon-female"
                      ng-class="(pData.info.gender==1)?'icon-male':'icon-female'"
                    />
                    <span
                      className="mdl-color-text--grey-600 ng-binding ng-isolate-scope ng-hide"
                      ng-hide="pData.info.gender==0"
                      id="profile-gender"
                      tippy
                      option="{arrow: true,theme: 'transparent',dynamicTitle:true}"
                      data-tooltipped
                      aria-describedby="tippy-tooltip-13"
                      data-original-title="Gender"
                    >
                      Select Gender
                    </span>
                  </div>
                  <div
                    className="profile-info ng-hide"
                    ng-show="info.showMaritalStatus && ((pData.info.marital_status!=0 && pData.info.marital_status!=undefined) || (pData.my_profile && $root.app_data.config.meta[64].fields.marital_status.visibility!=3 && $root.app_data.config.meta[64].fields.marital_status.visibility!='3'))"
                  >
                    <i className="icon-wc new-icon" />
                    <span
                      className="mdl-color-text--grey-600 ng-binding ng-isolate-scope ng-hide"
                      ng-hide="pData.info.marital_status==0"
                      id="profile-marital"
                      tippy
                      option="{arrow: true,theme: 'transparent',dynamicTitle:true}"
                      data-tooltipped
                      aria-describedby="tippy-tooltip-14"
                      data-original-title="Marital Status"
                    >
                      Select marital status
                    </span>
                  </div>
                </div>
              </div>

              <div
                className="mdl-card maximize-width m-b-20 min-height-card"
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
                  AAG related experience
                </div>
                <div
                  className="mdl-card__actions mdl-card--border"
                  style={{ padding: "24px 10%" }}
                >
                  <div
                    ng-repeat="role_info in profile['pData'].rolesInfo"
                    style={{ margin: "8px 0px" }}
                    className="rel-pos padding-16 ng-scope"
                  >
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
                      Gurukul College
                    </div>
                    <div className="font-14 padding-tb-4 ng-binding">
                      12TH, Science
                    </div>

                    <div
                      className="font-14 padding-tb-4 ng-binding ng-scope"
                      ng-if="!$root.featureEnabled('profile_config_for_user.hide_end_in_profile.*')"
                    >
                      2013 - 2015
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
