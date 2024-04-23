import React from "react";
import banner1 from "../img/banner1.jpg";
import home1 from '../img/home1.jpg'; 
import vrundesh from '../img/vrundesh.jpg';
import { Link } from "react-router-dom";
// "https://afilemanager.s3.dualstack.ap-southeast-1.amazonaws.com/prod/cid_0/mentorship-3.png"

export default function Home() {
  return (
    <div>
      {/* <div class="slider">
        <div class="slides">
          <img src={banner1} alt="Image 1" />
          <img src={banner1} alt="Image 2" />
          <img src={banner1} alt="Image 3" />
          <img src={banner1} alt="Image 4" />
          <img src={banner1} alt="Image 5" />
        </div>
        <button class="prev" onclick="prevSlide()">
          &#10094;
        </button>
        <button class="next" onclick="nextSlide()">
          &#10095;
        </button>
      </div> */}

      <div id="inside-ui-view">
        {" "}
        <ui-view className="ng-scope">
          <div className="ng-scope">
            <center>
              <div className="change-size" align="left">
                <div>
                  <div
                    ng-hide="loading"
                    ng-if="!page.metadata.isIframeContent"
                    bind-html-compile="content"
                    style={{ overflowWrap: "break-word", overflowY: "hidden" }}
                    className="ng-scope"
                  >
                    <style
                      type="text/css"
                      className="ng-scope"
                      dangerouslySetInnerHTML={{
                        __html:
                          ".margin-lr-10pr {\n    margin-left: 10% !important;\n    margin-right: 10% !important;\n  }\n\n  .width-100 {\n    width: 100% !important;\n  }\n  .height-100{\n    height:100% !important;\n  }\n  .semibold-text{\n    font-weight:600 !important;\n  }\n\n  @media (max-width: 837px) {\n    .margin-lr-ms-10 {\n      margin-left: 10px !important;\n      margin-right: 10px !important;\n    }\n    .width-ms-100{\n      width: 100% !important;\n    }\n    \n    .padding-lr-ms-0{\n       padding-left: 0% !important;\n       padding-right: 0% !important;\n    }\n    .padding-left-ms-0 {\n      padding-left: 0% !important;\n    }\n    .padding-tb-ms-60{\n      padding-top: 60px !important;\n      padding-bottom: 60px !important;\n    }\n\n    .padding-lr-ms-56{\n      padding-left: 56px !important;\n      padding-right: 56px !important;\n    }\n    .display-ms-flex {\n      display: flex !important;\n    }\n\n    .flex-direction-ms-col {\n      flex-direction: column !important;\n    }\n\n    .flex-direction-ms-col-reverse {\n      flex-direction: column-reverse !important;\n    }\n    .aligns-items-center-ms{\n      align-items: center !important;\n    }\n  }\n",
                      }}
                    />
                    <div className="ng-scope">
                      <div style={{ margin: "0px" }}>
                        <div className="flexbox flex-direction-ms-col-reverse">
                          <div className="flexbox flex-dir-column padding-tb-60 mdl-cell--4-col-desktop mdl-cell--12-col-tablet mdl-cell--12-col-phone mdl-color--primary-without-opacity-10 width-ms-100">
                            <p
                              className="mdl-color-text--grey-900 font-24 semibold-text padding-lr-35 ng-binding"
                              style={{ textAlign: "left", lineHeight: "32px" }}
                            >
                              Welcome to<b style={{ height: '60px !important', display: 'block', fontSize: '40px',color: '#5491f5' }}>G U R U K U L</b> A l u m n i
                            </p>
                            <p
                              className="font-16 padding-lr-35 ng-binding"
                              style={{ color: "#686868", textAlign: "left" }}
                            >
                              your gateway to reconnecting with 
                              fellow graduates and celebrating your 
                              journey beyond the university walls.
                              <br />
                              <br />
                              let's nurture a vibrant community that continues to embody the spirit of Gurukul College. 
                            </p>
                            <div className="flexbox flex-dir-column margin-top-40 padding-lr-35">
                              {" "}
                              {/* <a
                                className="mdl-button mdl-js-button mdl-button--primary mdl-color--primary font-14 mdl-color-text--white ng-scope ng-binding"
                                data-upgraded=",MaterialButton"
                                ga-event="Mentorship,mentor-firstlayer,2208215"
                                ng-if="!$root.app_data.config.meta[87].mentor.become_mentor_form"
                                style={{
                                  width: "145px",
                                  height: "37px",
                                  textTransform: "none",
                                }}
                                ui-sref="inapp.forms({id: $root.appmeta.flash_mentorship.mentor.form_id})"
                                href="/form/962"
                              >
                                Invite Friend
                              </a>{" "} */}
                              <Link to="/About">
                              <a
                                className="mdl-button mdl-js-button border-primary font-14 mdl-color-text--primary margin-top-16 ng-scope ng-binding"

                                style={{
                                  width: "145px",
                                  height: "37px",
                                  textTransform: "none",
                                }}
                                ui-sref="inapp.forms({id: $root.appmeta.flash_mentorship.mentee.form_id})"
                                href="/form/965"
                              >
                                Purpose <b style={{ fontSize: '15px',color: '#5491f5' }}>!!!</b>
                              </a></Link>
                            </div>
                          </div>
                          <div className="mdl-cell--9-col-desktop mdl-cell--12-col-tablet mdl-cell--12-col-phone width-ms-100">
                            <img
                              alt=""
                              className="width-100 height-100"
                              src={home1}
                              style={{ height: "473px" }}
                            />
                          </div>
                        </div>
                      </div>
                 
                      {/* <div
                        className="margin-top-60"
                        style={{ textAlign: "center" }}
                      >
                        <div className="font-24 semibold-text mdl-color-text--grey-900">
                          We Have six Courses for You!!
                        </div>
                        <div className="padding-top-40 mdl-grid">
                          <div
                            className="mdl-card align-items-center padding-top-40 margin-tb-10 mdl-color-text--grey-800 mdl-cell mdl-cell--4-col mdl-cell--12-col-tablet mdl-cell--12-col-phone mdl-color--primary-without-opacity-10"
                            style={{ border: "1px solid #e0e0e0" }}
                          >
                            <p
                              className="font-20 mdl-color-text--grey-900 ng-binding"
                              style={{ fontWeight: 500 }}
                            >
                              I'm ready to become a mentee
                            </p>
                            <p className="font-14 mdl-color-text--grey-900 ng-binding">
                              Students | Young Alumni | Working Professionals
                            </p>
                            <a
                              className="mdl-button mdl-js-button mdl-button--primary mdl-color--primary font-14 mdl-color-text--white ng-scope"
                              data-upgraded=",MaterialButton"
                              ga-event="Mentorship,mentee,2208215"
                              ng-if="!$root.app_data.config.meta[87].mentee.become_mentee_form"
                              style={{ textTransform: "none" }}
                              ui-sref="inapp.forms({id: $root.appmeta.flash_mentorship.mentee.form_id})"
                              href="/form/965"
                            >
                              Get Started
                            </a>{" "}
                            <img
                              className="padding-top-16"
                              src="https://afilemanager.s3.dualstack.ap-southeast-1.amazonaws.com/prod/cid_0/mentorship-1.png"
                              style={{ height: "247px" }}
                            />
                          </div>
                          <div
                            className="mdl-card align-items-center padding-top-40 margin-tb-10 mdl-color-text--grey-800 mdl-cell mdl-cell--4-col mdl-cell--12-col-tablet mdl-cell--12-col-phone mdl-color--primary-without-opacity-10"
                            style={{ border: "1px solid #e0e0e0" }}
                          >
                            <p
                              className="font-20 mdl-color-text--grey-900 ng-binding"
                              style={{ fontWeight: 500 }}
                            >
                              I'm ready to become a mentor
                            </p>
                            <p className="font-14 mdl-color-text--grey-900 ng-binding">
                              Any alumnus who wants to help
                            </p>
                            <a
                              className="mdl-button mdl-js-button mdl-button--primary mdl-color--primary font-14 mdl-color-text--white ng-scope"
                              data-upgraded=",MaterialButton"
                              ga-event="Mentorship,mentor,2208215"
                              ng-if="!$root.app_data.config.meta[87].mentor.become_mentor_form"
                              style={{ textTransform: "none" }}
                              ui-sref="inapp.forms({id: $root.appmeta.flash_mentorship.mentor.form_id})"
                              href="/form/962"
                            >
                              Get Started
                            </a>{" "}
                            <img
                              className="padding-top-16"
                              src="https://afilemanager.s3.dualstack.ap-southeast-1.amazonaws.com/prod/cid_0/mentorship-2.png"
                              style={{ height: "247px" }}
                            />
                          </div>
                          <div
                            className="mdl-card align-items-center padding-top-40 margin-tb-10 mdl-color-text--grey-800 mdl-cell mdl-cell--4-col mdl-cell--12-col-tablet mdl-cell--12-col-phone mdl-color--primary-without-opacity-10"
                            style={{ border: "1px solid #e0e0e0" }}
                          >
                            <p
                              className="font-20 mdl-color-text--grey-900"
                              style={{ fontWeight: 500 }}
                            >
                              I'm am not sure right now
                            </p>
                            <p className="font-14 mdl-color-text--grey-900 ng-binding">
                              Help us to improve our mentorship program
                            </p>
                            <a
                              className="mdl-button mdl-js-button mdl-button--primary mdl-color--primary font-14 mdl-color-text--white ng-scope"
                              data-upgraded=",MaterialButton"
                              ga-event="Mentorship,other,2208215"
                              style={{ textTransform: "none" }}
                              ui-sref="inapp.forms({id: 2641})"
                              href="/form/2641"
                            >
                              Give&nbsp;Anonymous&nbsp;feedback
                            </a>{" "}
                            <img
                              className="padding-top-16"
                              src={vrundesh}
                              style={{ height: "247px" }}
                            />
                          </div>
                          
                        </div>
                        <div className="padding-top-40 mdl-grid">
                          <div
                            className="mdl-card align-items-center padding-top-40 margin-tb-10 mdl-color-text--grey-800 mdl-cell mdl-cell--4-col mdl-cell--12-col-tablet mdl-cell--12-col-phone mdl-color--primary-without-opacity-10"
                            style={{ border: "1px solid #e0e0e0" }}
                          >
                            <p
                              className="font-20 mdl-color-text--grey-900 ng-binding"
                              style={{ fontWeight: 500 }}
                            >
                              I'm ready to become a mentee
                            </p>
                            <p className="font-14 mdl-color-text--grey-900 ng-binding">
                              Students | Young Alumni | Working Professionals
                            </p>
                            <a
                              className="mdl-button mdl-js-button mdl-button--primary mdl-color--primary font-14 mdl-color-text--white ng-scope"
                              data-upgraded=",MaterialButton"
                              ga-event="Mentorship,mentee,2208215"
                              ng-if="!$root.app_data.config.meta[87].mentee.become_mentee_form"
                              style={{ textTransform: "none" }}
                              ui-sref="inapp.forms({id: $root.appmeta.flash_mentorship.mentee.form_id})"
                              href="/form/965"
                            >
                              Get Started
                            </a>{" "}
                            <img
                              className="padding-top-16"
                              src="https://afilemanager.s3.dualstack.ap-southeast-1.amazonaws.com/prod/cid_0/mentorship-1.png"
                              style={{ height: "247px" }}
                            />
                          </div>
                          <div
                            className="mdl-card align-items-center padding-top-40 margin-tb-10 mdl-color-text--grey-800 mdl-cell mdl-cell--4-col mdl-cell--12-col-tablet mdl-cell--12-col-phone mdl-color--primary-without-opacity-10"
                            style={{ border: "1px solid #e0e0e0" }}
                          >
                            <p
                              className="font-20 mdl-color-text--grey-900 ng-binding"
                              style={{ fontWeight: 500 }}
                            >
                              I'm ready to become a mentor
                            </p>
                            <p className="font-14 mdl-color-text--grey-900 ng-binding">
                              Any alumnus who wants to help
                            </p>
                            <a
                              className="mdl-button mdl-js-button mdl-button--primary mdl-color--primary font-14 mdl-color-text--white ng-scope"
                              data-upgraded=",MaterialButton"
                              ga-event="Mentorship,mentor,2208215"
                              ng-if="!$root.app_data.config.meta[87].mentor.become_mentor_form"
                              style={{ textTransform: "none" }}
                              ui-sref="inapp.forms({id: $root.appmeta.flash_mentorship.mentor.form_id})"
                              href="/form/962"
                            >
                              Get Started
                            </a>{" "}
                            <img
                              className="padding-top-16"
                              src="https://afilemanager.s3.dualstack.ap-southeast-1.amazonaws.com/prod/cid_0/mentorship-2.png"
                              style={{ height: "247px" }}
                            />
                          </div>
                          <div
                            className="mdl-card align-items-center padding-top-40 margin-tb-10 mdl-color-text--grey-800 mdl-cell mdl-cell--4-col mdl-cell--12-col-tablet mdl-cell--12-col-phone mdl-color--primary-without-opacity-10"
                            style={{ border: "1px solid #e0e0e0" }}
                          >
                            <p
                              className="font-20 mdl-color-text--grey-900"
                              style={{ fontWeight: 500 }}
                            >
                              I'm am not sure right now
                            </p>
                            <p className="font-14 mdl-color-text--grey-900 ng-binding">
                              Help us to improve our mentorship program
                            </p>
                            <a
                              className="mdl-button mdl-js-button mdl-button--primary mdl-color--primary font-14 mdl-color-text--white ng-scope"
                              data-upgraded=",MaterialButton"
                              ga-event="Mentorship,other,2208215"
                              style={{ textTransform: "none" }}
                              ui-sref="inapp.forms({id: 2641})"
                              href="/form/2641"
                            >
                              Give&nbsp;Anonymous&nbsp;feedback
                            </a>{" "}
                            <img
                              className="padding-top-16"
                              src="https://afilemanager.s3.dualstack.ap-southeast-1.amazonaws.com/prod/cid_0/mentorship-3.png"
                              style={{ height: "247px" }}
                            />
                          </div>
                          
                        </div>
                      </div>
                      <div className="margin-top-60">
                        <div className="flexbox mdl-color--primary border-radius-6 mdl-grid">
                          <div className="margin-tb-72 margin-tb-xs-35 padding-lr-56 padding-lr-ms-0 align-items-center width-auto mdl-cell border-radius-6 mdl-cell--6-col-desktop mdl-cell--12-col-tablet mdl-cell--12-col-phone">
                            <img
                              className="border-radius-6 width-100"
                              src="https://almashines.s3.dualstack.ap-southeast-1.amazonaws.com/assets/images/gallary_photos/t1642751055_PWrFODBSkQ.jpg"
                            />
                          </div>
                          <div
                            className="font-16 mdl-color-text--white margin-tb-auto mdl-cell mdl-cell--6-col-desktop mdl-cell--12-col-tablet mdl-cell--12-col-phone"
                            style={{ textAlign: "left" }}
                          >
                            <p className="semibold-text font-24 ng-binding">
                              Why become a mentor ?
                            </p>
                            <ul className="padding-left-16">
                              <li className="padding-tb-10">
                                Improve your listening and interpersonal skills
                              </li>
                              <li className="padding-tb-10 ng-binding">
                                Get recognition across the alumni network
                              </li>
                              <li className="padding-tb-10 ng-binding">
                                Opportunity to help and serve your institute
                              </li>
                              <li className="padding-tb-10">
                                Reinforce your knowledge
                              </li>
                              <li className="padding-tb-10 ng-binding">
                                Expand your network
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="margin-top-40 mdl-color--primary-without-opacity-10 border-radius-6">
                        <div className="flexbox mdl-grid flex-direction-ms-col-reverse">
                          <div
                            className="font-16 mdl-color-text--grey-900 padding-left-56 mdl-color-text--white margin-tb-auto mdl-cell  mdl-cell--6-col-desktop mdl-cell--12-col-tablet mdl-cell--12-col-phone padding-left-ms-0"
                            style={{ textAlign: "left" }}
                          >
                            <p className="semibold-text font-24  mdl-color-text--grey-900 ng-binding">
                              Why become a mentee ?
                            </p>
                            <ul className="padding-left-16">
                              <li className="padding-tb-10  mdl-color-text--grey-900">
                                Free of cost
                              </li>
                              <li className="padding-tb-10  mdl-color-text--grey-900">
                                Feel more confident with better decision making
                              </li>
                              <li className="padding-tb-10  mdl-color-text--grey-900 ng-binding">
                                Alumni are most trustworthy mentors
                              </li>
                              <li className="padding-tb-10  mdl-color-text--grey-900">
                                One call to solve all of your queries
                              </li>
                              <li className="padding-tb-10  mdl-color-text--grey-900 ng-binding">
                                Best way to connect with top alumni of your
                                institute
                              </li>
                            </ul>
                          </div>
                          <div className="margin-tb-72 margin-tb-xs-35 align-items-center width-auto mdl-cell border-radius-6 mdl-cell--6-col-desktop mdl-cell--12-col-tablet mdl-cell--12-col-phone padding-right-56 padding-lr-ms-0">
                            <img
                              className="border-radius-6 width-100"
                              src="https://afilemanager.s3.dualstack.ap-southeast-1.amazonaws.com/prod/cid_0/cheerful-male-female-colleagues-different-ages-meeting-co-working-sitting-open-laptop-watching.jpg"
                            />
                          </div>
                        </div>
                      </div> */}
                      <div
                        className="margin-top-60"
                        style={{ textAlign: "center" }}
                      >
                        <div className="font-24 semibold-text mdl-color-text--grey-900 ng-binding">
                          Areas of Mentorship
                        </div>
                        <div className="padding-top-40 mdl-grid">
                          <div className="mdl-card align-items-center padding-16 margin-tb-10 mdl-color-text--grey-800 mdl-cell mdl-cell--3-col mdl-cell--4-col-tablet mdl-cell--12-col-phone">
                            <img
                              alt="I'm an image"
                              className="=width-100"
                              src="https://almashines.s3.dualstack.ap-southeast-1.amazonaws.com/assets/images/gallary_photos/t1642751035_FwWLmdC42U.jpg"
                              style={{ maxWidth: "120px" }}
                            />
                            <p
                              className="font-20 mdl-color-text--grey-900 padding-top-20"
                              style={{ fontWeight: "bold" }}
                            >
                              Job Search Strategy
                            </p>
                          </div>
                          <div className="mdl-card align-items-center padding-16 margin-tb-10 mdl-color-text--grey-800 mdl-cell mdl-cell--3-col mdl-cell--4-col-tablet mdl-cell--12-col-phone">
                            <img
                              alt="I'm an image"
                              className="width-100"
                              src="https://almashines.s3.dualstack.ap-southeast-1.amazonaws.com/assets/images/gallary_photos/t1642751036_LFNBZMilq9.jpg"
                              style={{ maxWidth: "120px" }}
                            />
                            <p
                              className="font-20 mdl-color-text--grey-900 padding-top-20"
                              style={{ fontWeight: "bold" }}
                            >
                              Career Guidance
                            </p>
                          </div>
                          <div className="mdl-card align-items-center padding-16 margin-tb-10 mdl-color-text--grey-800 mdl-cell mdl-cell--3-col mdl-cell--4-col-tablet mdl-cell--12-col-phone">
                            <img
                              alt="I'm an image"
                              className="width-100"
                              src="https://almashines.s3.dualstack.ap-southeast-1.amazonaws.com/assets/images/gallary_photos/t1642751035_gTR0cCjqzf.jpg"
                              style={{ maxWidth: "120px" }}
                            />
                            <p
                              className="font-20 mdl-color-text--grey-900 padding-top-20"
                              style={{ fontWeight: "bold" }}
                            >
                              Academic Guidance
                            </p>
                          </div>
                          <div className="mdl-card align-items-center padding-16 margin-tb-10 mdl-color-text--grey-800 mdl-cell mdl-cell--3-col mdl-cell--4-col-tablet mdl-cell--12-col-phone">
                            <img
                              alt="I'm an image"
                              className="width-100"
                              src="https://almashines.s3.dualstack.ap-southeast-1.amazonaws.com/assets/images/gallary_photos/t1642751036_VVnaJ43Wcl.jpg"
                              style={{ maxWidth: "120px" }}
                            />
                            <p
                              className="font-20 mdl-color-text--grey-900 padding-top-20"
                              style={{ fontWeight: "bold" }}
                            >
                              Mock Interviews
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="margin-top-40 mdl-color--primary border-radius-6"
                        style={{ textAlign: "center" }}
                      >
                        <div className="font-24 semibold-text mdl-color-text--white padding-top-56">
                          Interesting Facts
                        </div>
                        <div
                          className="padding-top-40 mdl-grid padding-lr-ms-0"
                          style={{ paddingLeft: "10%", paddingRight: "10%" }}
                        >
                          <div className="align-items-center padding-16 margin-tb-10 mdl-color-text--grey-800 mdl-cell mdl-cell--4-col mdl-cell--12-col-tablet mdl-cell--12-col-phone">
                            <p
                              className="font-40 mdl-color-text--white padding-top-20"
                              style={{ fontWeight: "bold" }}
                            >
                              71%
                            </p>
                            <p className="font-18 mdl-color-text--white padding-top-20 ng-binding">
                              of Fortune 500 companies have mentorship programs
                            </p>
                          </div>
                          <div className="align-items-center padding-16 margin-tb-10 mdl-color-text--grey-800 mdl-cell mdl-cell--4-col mdl-cell--12-col-tablet mdl-cell--12-col-phone">
                            <p
                              className="font-40 mdl-color-text--white padding-top-20"
                              style={{ fontWeight: "bold" }}
                            >
                              97%
                            </p>
                            <p className="font-18 mdl-color-text--white padding-top-20">
                              say they are valuable
                            </p>
                          </div>
                          <div className="align-items-center padding-16 margin-tb-10 mdl-color-text--grey-800 mdl-cell mdl-cell--4-col mdl-cell--12-col-tablet mdl-cell--12-col-phone">
                            <p
                              className="font-40 mdl-color-text--white padding-top-20"
                              style={{ fontWeight: "bold" }}
                            >
                              89%
                            </p>
                            <p className="font-18 mdl-color-text--white padding-top-20 ng-binding">
                              of those who have been mentored will also go on to
                              mentor others
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </center>

            <meta name="almashines-status-code" content={200} />
          </div>
        </ui-view>
      </div>
    </div>
  );
}
