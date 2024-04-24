import React from "react";
import gurukullogo from "../gurukullogo.png";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function ViewJob() {
  const [user_id, setId] = useState(sessionStorage.getItem("user"));
  const [job, setJob] = useState([]);
  const location = useLocation();
  const job_id = location.pathname.split("/")[2]
    ? location.pathname.split("/")[2]
    : "";

  useEffect(() => {
    if (job_id) {
      getJob();
    }
  }, []);
  const getJob = async () => {
    const res = await axios.get(
      "http://localhost:3000/gurukulalumni/job/" + job_id
    );
    setJob(res.data);

    console.log(res.data);
  };
  return (
    <div>
      <div className="page-strip mdl-color--grey-100 mdl-color--grey-100-themed">
        <div className="main-family">
          <div
            className="main-family mdl-grid padding-0 flex-dir-column"
            style={{ maxWidth: "900px" }}
          >
            <div className>
              <div className="mdl-card padding-24 padding-top-xs-35 padding-lr-xs-16 maximize-width">
                <div className="mdl-grid mdl-grid--no-spacing margin-0">
                  <div className="mdl-cell--12-col-desktop mdl-cell mdl-cell--4-col-phone  mdl-cell--8-col-tablet flex-dir-column ">
                    <div className="flexbox flex-dir-row justify-content-space-between align-items-center">
                      <div className="flexbox mdl-color-text--grey-900 ">
                        <div className="font-24 font-xs-18 line-height-26 ellipsis-2-lines mdl-typography--font-bold ng-binding">
                          {job.title}
                        </div>
                      </div>
                      <div className="flexbox align-items-center">
                      {job.status == "1" ? (
                        <div className="mdl-color--green-100 mdl-color-text--black font-14 job-intern-capsule margin-top-0 margin-top-xs-0 margin-right-xs-10  ng-scope">
                          <span className="ng-binding">Open</span>
                        </div>
                      ):(
                        <div className="mdl-color--red-100 mdl-color-text--black font-14 job-intern-capsule margin-top-0 margin-top-xs-0 margin-right-xs-10  ng-scope">
                        <span className="ng-binding">Closed</span>
                      </div>
                      )}

                        {/* <div className="margin-left-16 ng-scope">
                          <button
                            className="mdl-typography--text-capitalize padding-lr-24 mdl-button mdl-js-button font-14 line-height-19 float-right ladda-button mdl-color--grey-300 mdl-color-text--grey"
                            style={{ textTransform: "none" }}
                          >
                            <span className="ladda-label ng-binding">
                              Apply
                            </span>
                            <span className="ladda-spinner" />
                          </button>
                        </div> */}

                        <span
                          className="abs-pos"
                          style={{ right: "34px", top: "3px" }}
                        >
                          <div className="mdl-menu__container is-upgraded">
                            <div className="mdl-menu__outline mdl-menu--bottom-right" />
                            <ul
                              className="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-rippleeffect"
                              style={{ padding: "0px", minWidth: "60px" }}
                            ></ul>
                          </div>
                        </span>
                      </div>
                    </div>
                    <div className="flexbox  flex-dir-column-xs margin-top-8">
                      <span className="mdl-color-text--grey-600 font-16 line-height-22 padding-right-xs-16 ng-binding">
                        Gurukul College
                      </span>
                      <span className="margin-left-30  margin-left-xs-0 margin-top-xs-12">
                        <i className="icon-location_on" />
                        <span className="font-16 line-height-19 ng-binding ng-scope">
                          {job.locationn}
                        </span>
                      </span>
                    </div>
                  </div>

                  <div className="flexbox justify-content-space-between flex-dir-row mdl-cell--12-col-desktop mdl-cell mdl-cell--4-col-phone  mdl-cell--8-col-tablet  margin-tb-16 flex-dir-column-xs">
                    <div className="flexbox">
                      <div className="ng-scope">
                        <div className="padding-tb-6  mdl-color-text--blue-900  font-14 job-intern-capsule margin-zero mdl-color--blue-50">
                          <span className="font-14 line-height-19 ng-binding ng-scope">
                            Deadline: {job.deadline}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="align-items-center flexbox font-14 line-height-22 mdl-typography--font-medium margin-top-xs-16">
                      {/* <div className="font-14 margin-right-40 ng-binding">
                        Total Views: 193
                      </div> */}
                      {/* <div className="ng-binding ng-scope">
                        No. of applicants: 1
                      </div> */}
                    </div>
                  </div>

                  <div
                    style={{ bottom: "-8px" }}
                    className="maximize-width mdl-progress mdl-js-progress mdl-progress__indeterminate ng-hide is-upgraded"
                  ></div>
                  <div
                    className=" margin-bottom-32 mdl-card__actions mdl-card--border"
                    style={{ padding: "0px" }}
                  />
                </div>
                <div className="mdl-grid mdl-grid--no-spacing margin-0">
                  <div
                    id="desc-tab"
                    className=" margin-bottom-0 margin-lr-0 mdl-cell--12-col-desktop mdl-cell mdl-cell--4-col-phone  mdl-cell--8-col-tablet "
                    ng-class="{'mdl-cell--order-3':(sJob.haveEndorsed==1 || $root.app_data.isAdmin)}"
                  >
                    <div
                      contentEditable="false"
                      dangerouslySetInnerHTML={{ __html: job.description }}
                    ></div>
                  </div>

                  <div
                    id="link-tab"
                    ng-show="sJob.receive_type==1 && (sJob.haveEndorsed==1 || $root.app_data.isAdmin)"
                    className="mdl-cell--12-col-desktop mdl-cell mdl-cell--4-col-phone  mdl-cell--8-col-tablet margin-lr-0 margin-top-20 ng-hide"
                    style={{ maxWidth: "calc(100vw - 32px)" }}
                    ng-class="{'mdl-cell--order-4':(sJob.haveEndorsed==1 || $root.app_data.isAdmin)}"
                  >
                    <div
                      ng-show="sJob.receive_type==1 && (sJob.haveEndorsed==1 || $root.app_data.isAdmin)"
                      className="mdl-card__actions mdl-card--border padding-0  ng-hide"
                    />
                  </div>

                  <div
                    id="poster-tab"
                    className="padding-tb-24 padding-lr-16 margin-bottom-24 margin-lr-0 mdl-cell--12-col-desktop mdl-cell mdl-cell--4-col-phone mdl-cell--order-5 mdl-cell--8-col-tablet border-light-grey "
                    ng-class="{'mdl-cell--order-5 margin-top-32':(sJob.haveEndorsed==1 || $root.app_data.isAdmin)}"
                  >
                    <div className="margin-left-8 margin-left-xs-0">
                      <div className="font-16 mdl-typography--font-medium mdl-color-text--grey-900">
                        <span className="ng-binding">Posted By</span>
                      </div>
                    </div>
                    <div className="flexbox justify-content-space-between align-items-center margin-top-16 padding-lr-xs-0">
                      <div className="flexbox align-items-center maximize-width-xs">
                        <div className="new-icon float-left">
                          <a
                            ui-sref="inapp.profile({uid: '2098623'})"
                            href="/profile/2098623"
                          >
                            <as-profile-pic
                           
                              className="ng-isolate-scope"
                            >
                              <img
                               
                                className="ng-scope post-avatar"
                                style={{ float: "left" }}
                                src={gurukullogo}
                              />
                            </as-profile-pic>
                          </a>
                        </div>
                        <div className="flexbox justify-content-space-between-xs maximize-width">
                          <div className="inline-block">
                            <a
                              ui-sref="inapp.profile({uid: '2098623'})"
                              className="link-detail mdl-color-text--grey-900"
                              href="/profile/2098623"
                            >
                              <span className="ng-binding">
                                {job.entry_by}
                              </span>
                            </a>
                            <div
                              className="mdl-color-text--grey-600 margin-top-2 font-14 ng-binding ng-scope"
                              ng-if="sJob.cas_approved == 1 || sJob.cas_approved == 2"
                            >
                              Published On  {job.entry_date}
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <div className="ng-scope">
                        <button
                          className="border-primary font-14 mdl-button mdl-typography--font-regular mdl-color--white mdl-color-text--primary padding-lr-20 padding-lr-xs-10 mdl-typography--text-capitalize ng-binding"
                          style={{ textTransform: "none" }}
                        >
                          Send Message
                        </button>
                      </div> */}
                    </div>
                  </div>

                  <div className="mdl-cell--12-col-desktop mdl-cell mdl-cell--4-col-phone  mdl-cell--8-col-tablet margin-lr-0 mdl-color--white maximize-width margin-bottom-32 ng-scope"></div>
                  <div className="mdl-cell--12-col-desktop mdl-cell mdl-cell--4-col-phone mdl-cell--order-7  mdl-cell--8-col-tablet margin-lr-0 mdl-color--white padding-lr-xs-10 ng-scope"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
