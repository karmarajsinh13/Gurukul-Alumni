import React from "react";
import banner1 from "../img/banner1.jpg";
import karma from "../img/karma.jpeg";
export default function Profile() {
  return (
    <div>
      <div
        ng-style="$root.isCordova ? {'overflow-x':'hidden'}:''"
        className="ng-scope"
      >
        <rednotice className="ng-isolate-scope" />
        {/* <need-help className="ng-isolate-scope">
          <div className="mdl-color---grey-300 needhelp1 mdl-shadow--2dp" style={{minWidth: '150px', width: 'auto'}} ng-mouseleave="hideDiv()">
            <div className="mdl-color-text--white mdl-color--primary-dark categories-animate ng-hide" style={{padding: '15px'}} ng-show="showcon">
              
              <span className="inline-block ng-scope" ng-if="!$root.isMeta(39)" style={{maxWidth: '160px', wordWrap: 'break-word'}}>
                <span ng-if="$root.app_data.data.replyto_email" bind-html-compile="&quot;Need_Help_Txt1&quot; | asPortalLang: &quot;For any assistance, contact us at [DATA:email] or reach out to [DATA:aTagStart]Admins[DATA:aTagEnd]&quot;:{aTagStart: &quot;<a class=\&quot;mdl-color-text--white\&quot; href=\&quot;#\&quot; ng-click=\&quot;contactAdmin()\&quot;>&quot;, email: $root.app_data.data.replyto_email.split(&quot;,&quot;)[0], aTagEnd: &quot;</a>&quot;}" className="ng-scope"><span className="ng-scope">For any assistance, contact us at marketing.gca.2018@gmail.com or reach out to </span><a className="mdl-color-text--white ng-scope" href="#" ng-click="contactAdmin()">Admins</a></span>
                
              </span>
            </div>
            <hr ng-class="hrclass" className="needhelphr" />
            <div className="needhelpicon mdl-shadow--2dp" ng-hide="hideque" ng-click="showclose=true;showcon=true;hideque=true;changeclass()">
              <span style={{verticalAlign: 'middle'}}>?
              </span>
            </div>
            <div className="needhelpicon mdl-shadow--2dp helpicon ng-hide" ng-class="iconclass" ng-show="showclose" ng-click="showclose=false;showcon=false;hideque=false;changeclass()" style={{bottom: '25px'}}>x
            </div>
            <div className="needhelp2 ng-binding" ng-click="changeclass();showclose=true;showcon=!showcon;hideque=!hideque;">Need Help?</div>
          </div>
          </need-help> */}
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
                      src={karma}
                    />
                  </as-profile-pic>
                </div>
                <div>
                  <div
                    className="font-18 mdl-typography--font-medium ng-binding"
                    style={{ display: "inline" }}
                  >
                    Karmarajsinh Gohil
                  </div>
                  <span
                    ng-show="couchsurfing"
                    id="couchSurf"
                    className="link-detail ng-hide"
                    tabIndex={0}
                  >
                    <i
                      className="icon-event_seat mdl-color-text--accent rel-pos font-20"
                      style={{ marginLeft: "6px", top: "1px" }}
                    />
                  </span>
                  <div
                    className="mdl-tooltip ng-binding"
                    htmlFor="couchSurf"
                    data-upgraded=",MaterialTooltip"
                  >
                    Happy to be a couchsurfing host.
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
                    Class of 2021
                    <br />
                    11TH, Science
                    <br />
                    Gyanmanjari Vidyapith
                  </div>

                  <span
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
                  </span>

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
                          />{" "}
                          <span
                            ng-if="!icardRejected"
                            className="ng-binding ng-scope"
                          >
                            View Alumni Card
                          </span>{" "}
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="m-b-20"></div>

                  <as-networking
                    className="ng-isolate-scope"
                    uui="pData.uui"
                    view="profile"
                    module="accept_reject"
                  ></as-networking>
                </div>
              </div>
              <div
                className="mdl-card mdl-shadow--2dp maximize-width m-b-20 min-height-card ng-hide"
                style={{ overflow: "visible", zIndex: 1 }}
                ng-show="(!my_profile && $root.app_data.isAdmin) && ((editProfileAllowed || enrollEditAllowed || deleteProfileAllowed) || (last_logged_in>0 || last_edit>0))"
              >
                <div
                  className="mdl-card__supporting-text font-16 maximize-width ng-binding"
                  style={{
                    boxSizing: "border-box",
                    MozBoxSizing: "border-box",
                  }}
                >
                  <i className="mdl-color-text--red-500 icon-info new-icon" />
                  Admin Area
                </div>
                <div
                  className="mdl-card__actions mdl-card--border ng-scope"
                  ng-if="!(editProfileAllowed || enrollEditAllowed || deleteProfileAllowed)"
                />

                <div
                  className="font-14 ng-scope"
                  ng-if="last_logged_in>0 || last_edit>0"
                >
                  <div className="padding-left-30 mdl-card__supporting-text mdl-color-text--red-500 maximize-width">
                    <span className="ng-binding">Profile Information</span>
                  </div>
                  <div className="padding-bottom-10">
                    <div
                      ng-if="last_logged_in>0"
                      className="padding-left-60 font-14   ng-binding ng-scope"
                      style={{ paddingTop: 0 }}
                    >
                      Last Logged In :
                      <span
                        className="mdl-color-text--grey-600 ng-binding ng-scope"
                        ng-if="last_logged_in"
                      >
                        Apr 03, 2024
                      </span>
                    </div>
                    <div
                      className="padding-left-60 font-14 ng-binding ng-scope"
                      style={{ paddingTop: 0 }}
                      ng-if="last_edit>0 "
                    >
                      Last Profile Edit :
                      <span className="mdl-color-text--grey-600 ng-binding">
                        {" "}
                        Feb 11, 2023
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div
                ng-if="my_profile"
                className="mdl-card mdl-shadow--2dp maximize-width m-b-20 ng-scope ng-hide"
                style={{ overflow: "visible", zIndex: 0, minHeight: "50px" }}
                ng-show="lm_toast"
              >
                <a
                  ui-sref="inapp.checkout_life_membership_detail({source: 'profile'})"
                  tyle="text-decoration:none;"
                  href="/checkout/life_membership/details?source=profile"
                >
                  <div
                    className="mdl-card__supporting-text font-16 ng-binding"
                    style={{
                      background: "#ef4836",
                      cursor: "pointer",
                      color: "#fff",
                    }}
                    align="center"
                  >
                    You are not a Life Member.
                    <br /> Click here to learn more.
                  </div>
                </a>
              </div>

              <div
                className="mdl-card mdl-shadow--2dp maximize-width m-b-20 min-height-card ng-hide"
                style={{ overflow: "visible", zIndex: 0 }}
                ng-show="membership_visibility"
              >
                <div
                  className="mdl-card__supporting-text font-16 maximize-width ng-binding"
                  style={{
                    boxSizing: "border-box",
                    MozBoxSizing: "border-box",
                  }}
                >
                  <i className="mdl-color-text--primary icon-info new-icon" />
                  Membership Info
                  <a
                    ng-show="!disableAllActions && ($root.app_data.admin_rights.all || $root.app_data.admin_rights.life_membership.assign_membership_number==1)"
                    style={{ float: "right" }}
                    className="mdl-color-text--accent link-detail mdl-typography--font-regular ng-binding ng-hide"
                    ng-click="openMembershipWizard($event)"
                  >
                    Edit
                  </a>
                </div>
                <div
                  className="mdl-card__actions mdl-card--border font-14"
                  style={{ padding: "12px 10%" }}
                >
                  <div className="profile-info ng-binding">
                    Status:
                    <span className="mdl-color-text--grey-600">
                      <span
                        ng-if="membershipData.data.steps_completed!=7"
                        className="ng-binding ng-scope"
                      >
                        Non-Life Member
                      </span>
                    </span>
                  </div>
                  <div
                    ng-show="membershipData.data.steps_completed==7"
                    className="ng-hide"
                  >
                    <div className="profile-info ng-binding">
                      Mode:
                      <span className="mdl-color-text--grey-600 ng-binding">
                        Offline Payment
                      </span>
                    </div>
                    <div className="profile-info ng-binding">
                      Amount Paid (INR):
                      <span className="mdl-color-text--grey-600 ng-binding">
                        N/A
                      </span>
                    </div>
                    <div className="profile-info ng-binding">
                      Paid on:
                      <span className="mdl-color-text--grey-600 ng-binding">
                        N/A
                      </span>
                    </div>
                    <div className="profile-info ng-binding">
                      Membership Number:
                      <span className="mdl-color-text--grey-600 ng-binding">
                        N/A
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="mdl-card mdl-shadow--2dp maximize-width m-b-20 min-height-card"
                style={{ overflow: "visible", zIndex: 0 }}
                ng-show="pData.info.email || pData.info.phone.number || (pData.addresses && pData.addresses.length>0)"
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
                  <a
                    ng-if="my_profile"
                    style={{ float: "right" }}
                    className="mdl-color-text--accent link-detail mdl-typography--font-regular ng-binding ng-scope"
                    ng-click="goToSettings('contact_details',undefined,pageSource)"
                  >
                    Edit
                  </a>
                </div>
                <div
                  className="mdl-card__actions mdl-card--border font-14"
                  style={{ padding: "12px 10%" }}
                >
                  <div
                    className="profile-info"
                    ng-show="pData.info.email || pData.my_profile"
                  >
                    <i className="icon-email new-icon" />
                    <div
                      style={{ display: "inline-block", verticalAlign: "top" }}
                    >
                      <div>
                        <span
                          id="profile-email"
                          className="mdl-color-text--grey-600 ng-binding"
                          tabIndex={0}
                        >
                          karmarajoneplus@gmail.com
                        </span>

                        <div
                          className="mdl-tooltip ng-binding"
                          htmlFor="profile-email"
                          data-upgraded=",MaterialTooltip"
                        >
                          Email ID
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="profile-info"
                    ng-show="pData.info.phone || pData.my_profile"
                  >
                    <i className="icon-call new-icon" />
                    <div
                      style={{ display: "inline-block", verticalAlign: "top" }}
                    >
                      <div>
                        <span
                          className="mdl-color-text--grey-600 ng-binding"
                          id="profile-phone"
                          ng-show="pData.info.phone.number"
                          tabIndex={0}
                        >
                          <span
                            ng-if="pData.info.phone.country_code"
                            className="ng-binding ng-scope"
                          >
                            +91-
                          </span>
                          7265992371
                        </span>
                        <div
                          className="mdl-tooltip ng-binding"
                          htmlFor="profile-phone"
                          data-upgraded=",MaterialTooltip"
                        >
                          Primary Contact number
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    ng-show="$root.featureEnabled('profile_config_for_user.profile_urls.*') && (pData.my_profile || pData.profile_urls.urlAdded || $root.app_data.isAdmin)"
                    ng-class="{'profile-info':!pData.profile_urls.urlAdded}"
                    className="ng-hide profile-info"
                  >
                    <div
                      ng-if="(pData.my_profile || ($root.app_data.isAdmin && editProfileAllowed)) && !pData.profile_urls.urlAdded"
                      className="ng-scope"
                    >
                      <small
                        className="mdl-color-text--accent link-detail ng-binding"
                        ng-click="goToSettings('contact_details')"
                      >
                        <i className="new-icon icon-Event_AddWebsite mdl-color-text--black" />{" "}
                        Add LinkedIn Profile Url
                      </small>
                    </div>
                  </div>
                  <div
                    className="profile-info flexbox cursor-pointer"
                    ng-click="message()"
                  >
                    <i className="icon-insert_link new-icon" />
                    <div
                      className="maximize-width rel-pos mdl-color-text--grey-600 ellipsis-text ng-binding"
                      style={{ display: "inline-block", verticalAlign: "top" }}
                    >
                      alumni.gyanmanjarividyapith.edu.in/profile/2208215
                    </div>
                    <input
                      className="font-14 mdl-textfield__input ng-pristine ng-untouched ng-valid ng-not-empty"
                      style={{
                        border: "none",
                        outline: "none",
                        width: "0.1px",
                        height: "0.1px",
                      }}
                      id="campLink"
                      type="text"
                      ng-model="my_profile_link"
                      readOnly="true"
                      onclick="select()"
                      fdprocessedid="xn5hge"
                    />
                  </div>
                  <div
                    ng-show="pData.my_profile || adminRights(7)"
                    className="padding-tb-8"
                  >
                    <i className="new-icon icon-place2" />
                    <small
                      ng-if="!disableAllActions && (pData.my_profile || editProfileAllowed)"
                      ng-show="!pData.addresses.length"
                      className="mdl-color-text--accent link-detail ng-binding ng-scope"
                      ng-click="goToSettings('contact_details')"
                    >
                      Add Address
                    </small>
                    <small
                      ng-if="!disableAllActions && (pData.my_profile || editProfileAllowed)"
                      ng-show="pData.addresses.length>0"
                      className="mdl-color-text--accent link-detail ng-binding ng-scope ng-hide"
                      ng-click="goToSettings('contact_details')"
                    >
                      Edit Address
                    </small>
                    <div
                      style={{
                        display: "inline-block",
                        verticalAlign: "top",
                        paddingLeft: "28px",
                      }}
                      ng-class="{'margin-top-8':!disableAllActions && (pData.my_profile || editProfileAllowed)}"
                      ng-style="(!disableAllActions && (pData.my_profile || editProfileAllowed))?{'padding-left':'28px'}:''"
                      className="margin-top-8"
                    ></div>
                  </div>
                </div>
              </div>
              <div
                className="mdl-card mdl-shadow--2dp maximize-width m-b-20 min-height-card ng-hide"
                style={{ overflow: "visible", zIndex: 0 }}
                ng-show="$root.featureEnabled('membership') == true && (my_profile || ($root.app_data.isAdmin && adminRights(11)))"
              >
                <div
                  className="mdl-card__supporting-text font-16 maximize-width ng-binding"
                  style={{
                    boxSizing: "border-box",
                    MozBoxSizing: "border-box",
                  }}
                >
                  <i className="mdl-color-text--primary icon-info new-icon" />
                  Membership
                </div>
                <new-membership
                  profileuui="pData.uui"
                  profileuid="pData.info.id"
                  editinfo="edit_info"
                  className="ng-isolate-scope"
                >
                  <div
                    ng-show="!info.isFetching && (isMyprofile || isAdmin) && (user_membership && user_membership.length>0)"
                    className="ng-hide"
                  >
                    <div
                      ng-hide="(info.activeMemberships>0 && allow_only_one_membership) || (editinfo.sub_insti_cid && editinfo.allowed_subinst.indexOf(editinfo.sub_insti_cid) == -1)"
                      className="mdl-card__actions mdl-card--border center-alignment ng-hide"
                    >
                      <div
                        className=" mdl-color-text--accent margin-10 link-detail"
                        ui-sref="inapp.membership_list({uui:membershipCard_basic.profileuui,uid:membershipCard_basic.profileuid})"
                        href="/membership_list?uui=2141432&uid=2208215"
                      >
                        <i className="icon-add" />
                        <span
                          className="ng-binding ng-scope"
                          ng-if="isMyprofile == true && membershipCard_basic.isAdminAndHasRight != true"
                        >
                          Add Another Membership
                        </span>
                      </div>
                    </div>
                  </div>
                  <div
                    className="center-alignment"
                    ng-show="!info.isFetching && (!user_membership || user_membership.length<=0) && (isMyprofile == true || isAdmin == true)"
                  >
                    <div className="margin-left-45 margin-right-45 margin-tb-10">
                      <span
                        ng-if="isMyprofile == true"
                        className="ng-binding ng-scope"
                      >
                        {" "}
                        You have currently not subscribed to any membership.{" "}
                      </span>
                    </div>
                    <div
                      ng-show="isMyprofile == true || (membershipCard_basic.isAdminAndHasRight == true && (!editinfo.sub_insti_cid || editinfo.allowed_subinst.indexOf(editinfo.sub_insti_cid)>-1))"
                      ui-sref="inapp.membership_list({uui:membershipCard_basic.profileuui,uid:membershipCard_basic.profileuid})"
                      className="mdl-button mdl-js-button mdl-js-rippleeffect mdl-color-text--white mdl-color--primary mdl-typography--font-regular mdl-button margin-tb-10 link-detail"
                      href="/membership_list?uui=2141432&uid=2208215"
                      data-upgraded=",MaterialButton"
                    >
                      <span
                        className="mdl-color-text--white ng-binding ng-scope"
                        ng-if="isMyprofile == true && membershipCard_basic.isAdminAndHasRight != true"
                      >
                        {" "}
                        Become A Member{" "}
                      </span>
                    </div>
                  </div>
                </new-membership>
              </div>
              <div
                className="mdl-card mdl-shadow--2dp maximize-width m-b-20 min-height-card"
                style={{ overflow: "visible", zIndex: 1 }}
                ng-show="info.showSkills && (user_sector.id || user_skills.length>0 || pData.my_profile)"
              >
                <div
                  className="mdl-card__supporting-text font-16 maximize-width ng-binding"
                  style={{
                    boxSizing: "border-box",
                    MozBoxSizing: "border-box",
                  }}
                >
                  <i className="mdl-color-text--primary icon-info new-icon" />
                  Expertise
                  <a
                    ng-if="my_profile && options.inactive_fields.indexOf('skills')<0"
                    style={{ float: "right" }}
                    className="mdl-color-text--accent link-detail mdl-typography--font-regular ng-binding ng-scope"
                    ng-click="goToSettings('other_details')"
                  >
                    Edit
                  </a>
                </div>
                <div
                  className="mdl-card__actions mdl-card--border font-14"
                  style={{ padding: "12px 10%" }}
                >
                  <div
                    className="profile-info ng-binding ng-hide"
                    ng-show="false && (user_sector.id || pData.my_profile)"
                  >
                    Business Domain:
                    <span className="mdl-color-text--grey-600 ng-binding" />
                  </div>
                  <div
                    className="profile-info ng-binding"
                    id="skills"
                    ng-show="user_skills.length>0 || pData.my_profile "
                    tabIndex={0}
                  >
                    Skills:
                  </div>
                  <div
                    htmlFor="skills"
                    className="mdl-tooltip expertiseskills"
                    data-upgraded=",MaterialTooltip"
                  ></div>
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
                  Basic Information
                  <a
                    ng-if="my_profile"
                    style={{ float: "right" }}
                    className="mdl-color-text--accent link-detail mdl-typography--font-regular ng-scope"
                    ng-click="!info.showEdit && goToSettings('basic_details')"
                  >
                    <span ng-show="!info.showEdit" className="ng-binding">
                      Edit
                    </span>
                    <span ng-show="info.showEdit" className="ng-hide">
                      {" "}
                      ...{" "}
                    </span>
                  </a>
                </div>
                <div
                  className="mdl-card__actions mdl-card--border font-14"
                  style={{ padding: "12px 10%" }}
                >
                  <div
                    className="profile-info overflow-ellipsis"
                    ng-show="pData.info.locations[pData.info.current_city] || pData.my_profile"
                  >
                    <i className="icon-location_on new-icon" />
                    <span
                      className="mdl-color-text--grey-600"
                      id="profile-city"
                      tabIndex={0}
                    >
                      <a
                        ui-sref="inapp.search({city: pData.info.current_city})"
                        className="ng-binding"
                        href="/search?city=987709"
                      >
                        Bhavnagar
                        <span
                          ng-if="pData.info.locationsFull[pData.info.current_city].region"
                          className="ng-binding ng-scope"
                        >
                          , Gujarat
                        </span>
                      </a>
                    </span>
                    <div
                      className="mdl-tooltip ng-binding"
                      htmlFor="profile-city"
                      data-upgraded=",MaterialTooltip"
                    >
                      Current Location
                    </div>
                  </div>
                  <div
                    className="profile-info overflow-ellipsis"
                    ng-show="info.showHometown && (pData.info.locations[pData.info.hometown] || pData.my_profile)"
                  >
                    <i className="icon-home new-icon" />
                    <span
                      className="mdl-color-text--grey-600"
                      id="profile-hometown"
                      tabIndex={0}
                    >
                      <a
                        ui-sref="inapp.search({hometown: pData.info.hometown})"
                        className="ng-binding"
                        href="/search"
                      ></a>
                    </span>
                    <div
                      className="mdl-tooltip ng-binding"
                      htmlFor="profile-hometown"
                      data-upgraded=",MaterialTooltip"
                    >
                      Hometown
                    </div>
                  </div>
                  <div
                    className="profile-info"
                    ng-show="info.showDob && (pData.info.dob || (pData.my_profile && $root.app_data.config.meta[64].fields.dob.visibility!=3 && $root.app_data.config.meta[64].fields.dob.visibility!='3'))"
                  >
                    <i className="icon-cake new-icon" />
                    <span
                      className="mdl-color-text--grey-600 ng-binding"
                      id="profile-dob"
                      tabIndex={0}
                    >
                      May 23, 2003
                    </span>
                    <div
                      className="mdl-tooltip ng-binding"
                      htmlFor="profile-dob"
                      data-upgraded=",MaterialTooltip"
                    >
                      Date of Birth
                    </div>
                  </div>
                  <div
                    className="profile-info"
                    ng-show="info.showGender && ((pData.info.gender!=0 && pData.info.gender!=undefined) || (pData.my_profile && $root.app_data.config.meta[64].fields.gender.visibility!=3 && $root.app_data.config.meta[64].fields.gender.visibility!='3'))"
                  >
                    <i
                      className="new-icon icon-female"
                      ng-class="(pData.info.gender==1)?'icon-male':'icon-female'"
                    />
                    <span
                      className="mdl-color-text--grey-600 ng-binding ng-hide"
                      ng-hide="pData.info.gender==0"
                      id="profile-gender"
                      tabIndex={0}
                    >
                      Select Gender
                    </span>
                    <div
                      className="mdl-tooltip ng-binding"
                      htmlFor="profile-gender"
                      data-upgraded=",MaterialTooltip"
                    >
                      Gender
                    </div>
                  </div>
                  <div
                    className="profile-info"
                    ng-show="info.showMaritalStatus && ((pData.info.marital_status!=0 && pData.info.marital_status!=undefined) || (pData.my_profile && $root.app_data.config.meta[64].fields.marital_status.visibility!=3 && $root.app_data.config.meta[64].fields.marital_status.visibility!='3'))"
                  >
                    <i className="icon-wc new-icon" />
                    <span
                      className="mdl-color-text--grey-600 ng-binding ng-hide"
                      ng-hide="pData.info.marital_status==0"
                      id="profile-marital"
                      tabIndex={0}
                    >
                      Select marital status
                    </span>
                    <div
                      className="mdl-tooltip ng-binding"
                      htmlFor="profile-marital"
                      data-upgraded=",MaterialTooltip"
                    >
                      Marital Status
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="mdl-card mdl-shadow--2dp maximize-width m-b-20 min-height-card ng-hide"
                style={{ overflow: "visible", zIndex: "unset" }}
                ng-show="extra_info && showCustomBasicInfo()"
              >
                <div
                  className="mdl-card__supporting-text font-16 maximize-width ng-binding"
                  style={{
                    boxSizing: "border-box",
                    MozBoxSizing: "border-box",
                  }}
                >
                  <i className="mdl-color-text--primary icon-info new-icon" />
                  Other Information
                  <span
                    ng-if="my_profile"
                    style={{ float: "right" }}
                    className="mdl-color-text--accent link-detail ng-binding ng-scope"
                    ng-click="goToSettings('other_details')"
                  >
                    Edit
                  </span>
                </div>
                <div
                  className="mdl-card__actions mdl-card--border font-14"
                  style={{ padding: "12px 10%" }}
                ></div>
              </div>

              <div
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
              </div>
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
                  <span
                    ng-show="my_profile"
                    style={{ float: "right" }}
                    className="mdl-color-text--accent link-detail ng-binding"
                    ng-click="goToSettings('insti_details')"
                  >
                    <i className="icon-add" />
                    Add new role
                  </span>
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
                      Gyanmanjari Vidyapith
                    </div>
                    <div
                      className="font-14 padding-tb-4 ng-binding ng-scope"
                      ng-if="role_info.institute"
                    >
                      Science
                    </div>
                    <div className="font-14 padding-tb-4 ng-binding">
                      11TH, Science
                    </div>

                    <div
                      className="font-14 padding-tb-4 ng-binding ng-scope"
                      ng-if="!$root.featureEnabled('profile_config_for_user.hide_end_in_profile.*')"
                    >
                      2019 - 2021
                    </div>
                  </div>
                </div>
              </div>

              <div
                ng-if="showWork"
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
                  <i className="mdl-color-text--primary icon-work new-icon" />
                  Work experience
                  <span
                    ng-if="my_profile"
                    className="mdl-color-text--accent link-detail float-right ng-binding ng-scope"
                    ng-click="goToSettings('work_details')"
                  >
                    <i className="icon-add" />
                    Add Work
                  </span>
                </div>
                <div
                  className="mdl-card__actions mdl-card--border"
                  style={{ padding: "24px 10%" }}
                >
                  <div
                    ng-if="my_profile"
                    className="center-alignment ng-scope"
                    ng-hide="pData.info.work"
                    ng-click="goToSettings('work_details')"
                  >
                    <i
                      className="icon-add182 new-icon"
                      style={{ fontSize: "20px" }}
                    />
                    <span
                      ng-if="!requesters[1]"
                      className="mdl-color-text--accent font-18 ng-binding ng-scope"
                      style={{ cursor: "pointer" }}
                    >
                      Share your work history to enhance your networking
                      potential
                    </span>
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
                  <span
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
                  </span>
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
              <div
                ng-if="(!my_profile && profile.pData.info.summary!='') || my_profile"
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
                  <i className="mdl-color-text--primary icon-assignment_ind new-icon" />
                  Summary
                  <span
                    ng-click="goToSettings('basic_details')"
                    tippy
                    option="tippyOption"
                    show="eduTippy"
                    ng-show="!summary && my_profile && profile.pData.info.summary!=''"
                    style={{ float: "right" }}
                    className="mdl-color-text--accent link-detail ng-binding ng-isolate-scope ng-hide"
                    data-tooltipped
                    aria-describedby="tippy-tooltip-2"
                    data-original-title="Edit your Summary"
                  >
                    <i className="icon-edit" />
                    Edit
                  </span>
                  <span
                    tippy
                    option="tippyOption"
                    show="eduTippy"
                    ng-show="!summary && my_profile && profile.pData.info.summary==''"
                    style={{ float: "right" }}
                    className="mdl-color-text--accent link-detail ng-binding ng-isolate-scope"
                    ng-click="goToSettings('basic_details')"
                    data-tooltipped
                    aria-describedby="tippy-tooltip-3"
                    data-original-title="Add Summary to your profile"
                  >
                    <i className="icon-add" />
                    Add
                  </span>
                </div>
                <div className="mdl-card__actions mdl-card--border padding-0 " />
                <span
                  ng-if="!summary"
                  className="font-14 padding-left-20 padding-right-10 padding-top-10 ng-scope"
                  ng-class="{'padding-bottom-10 ': profile.pData.info.summary!=''}"
                >
                  <span
                    ng-bind-html="profile.pData.info.summary | asNewLines"
                    className="ng-binding"
                  />
                </span>
                <span
                  tippy
                  option="tippyOption"
                  show="eduTippy"
                  ng-show="!summary && my_profile && profile.pData.info.summary==''"
                  style={{ textAlign: "center" }}
                  className="ng-isolate-scope"
                  data-tooltipped
                  aria-describedby="tippy-tooltip-4"
                  data-original-title="Add Summary to your profile"
                >
                  <a
                    style={{ fontWeight: 400 }}
                    ng-click="goToSettings('basic_details')"
                    className="link-detail ng-binding"
                  >
                    {" "}
                    <i
                      className="icon-add182 new-icon"
                      style={{ fontSize: "18px", color: "black" }}
                    />{" "}
                    Use summary to share what you do, your achievements or the
                    opportunities you're looking for.{" "}
                  </a>
                </span>
              </div>

              <div
                className="advisory margin-bottom-20"
                style={{ position: "relative", display: "none" }}
              >
                <advisory className="ng-isolate-scope">
                  <div>
                    <style
                      type="text/css"
                      dangerouslySetInnerHTML={{
                        __html:
                          "\n\t\t.advisoryContainer{\n\t\t\twidth: 100%;\t\t\t\n\t\t}\n\t\t.advisoryBox{\n\t\t\tpadding: 10px 20px;\n\t\t\tborder: 1px solid red;\n\t\t\tbackground: white;\n\t\t}\n\t\t.advisoryBox .close{\n\t\t\ttext-decoration: underline;\n\t\t\twidth: 65px;\n\t\t}\n\t",
                      }}
                    />
                    <div
                      className="advisoryContainer ng-hide"
                      ng-show="showAdvisory"
                    >
                      <div className="advisoryBox center-alignment">
                        <span ng-bind-html="msg" className="ng-binding" />
                        <a
                          className="close cursor-pointer inline-block margin-left-10 mdl-color-text--primary ng-binding"
                          ng-click="cancel()"
                          style={{ textTransform: "lowercase" }}
                        >
                          close x
                        </a>
                      </div>
                    </div>
                  </div>
                </advisory>
              </div>
              <div ng-controller="updateCardsCtrl" className="ng-scope">
                <div
                  infinite-scroll="loadMore()"
                  infinite-scroll-disabled="lock || no_more_data"
                  infinite-scroll-distance={1}
                  className="ng-isolate-scope"
                >
                  <div ng-hide="!lock" className="ng-hide">
                    <div
                      id="p2"
                      className="mdl-progress mdl-js-progress mdl-progress__indeterminate maximize-width is-upgraded"
                      data-upgraded=",MaterialProgress"
                    >
                      <div
                        className="progressbar bar bar1"
                        style={{ width: "0%" }}
                      />
                      <div
                        className="bufferbar bar bar2"
                        style={{ width: "100%" }}
                      />
                      <div
                        className="auxbar bar bar3"
                        style={{ width: "0%" }}
                      />
                    </div>
                  </div>
                  <div
                    ng-show="no_more_data"
                    className="center-alignment padding-16 mdl-color--grey-300 ng-binding"
                  >
                    No more updates to display!
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
