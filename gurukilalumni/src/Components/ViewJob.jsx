import React from "react";

export default function ViewJob() {
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
                          Marketing Executive
                        </div>
                      </div>
                      <div className="flexbox align-items-center">
                        <div className="mdl-color--red-100 mdl-color-text--black font-14 job-intern-capsule margin-top-0 margin-top-xs-0 margin-right-xs-10  ng-scope">
                          <span className="ng-binding">Closed</span>
                        </div>

                        <div className="margin-left-16 ng-scope">
                          <button
                            className="mdl-typography--text-capitalize padding-lr-24 mdl-button mdl-js-button font-14 line-height-19 float-right ladda-button mdl-color--grey-300 mdl-color-text--grey"
                            style={{ textTransform: "none" }}
                          >
                            <span className="ladda-label ng-binding">
                              Apply
                            </span>
                            <span className="ladda-spinner" />
                          </button>
                        </div>

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
                        Gyanmanjari Career Academy
                      </span>
                      <span className="margin-left-30  margin-left-xs-0 margin-top-xs-12">
                        <i className="icon-location_on" />
                        <span className="font-16 line-height-19 ng-binding ng-scope">
                          Bhavnagar
                        </span>
                      </span>
                    </div>
                  </div>

                  <div className="flexbox justify-content-space-between flex-dir-row mdl-cell--12-col-desktop mdl-cell mdl-cell--4-col-phone  mdl-cell--8-col-tablet  margin-tb-16 flex-dir-column-xs">
                    <div className="flexbox">
                      <div className="ng-scope">
                        <div className="padding-tb-6  mdl-color-text--blue-900  font-14 job-intern-capsule margin-zero mdl-color--blue-50">
                          <span className="font-14 line-height-19 ng-binding ng-scope">
                            Deadline: Oct 15, 2022
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
               
                  >
                    
                    
                  </div>
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
                    <div className=" flexbox justify-content-space-between align-items-center">
                      <div
                        ng-if="sJob.job_type==0"
                        className="mdl-typography--font-bold font-20 ng-binding ng-scope"
                      >
                        Job Details
                      </div>

                      <div></div>
                    </div>
                    <div className=" flexbox maximize-width flex-dir-column margin-top-32">
                      <span className="font-16 line-height-22 mdl-color-text--grey-900  mdl-typography--font-bold">
                        <span
                          ng-if="sJob.job_type==0"
                          className="ng-binding ng-scope"
                        >
                          Job Description
                        </span>
                      </span>
                      <div
                        className="font-16 mdl-typography--font-light mdl-color-text--grey-600"
                        ng-style="$root.isMobile ? {'word-break':'break-word'}:''"
                      >
                        <div
                          bind-html-compile="sJob.description"
                          className=" margin-top-16 responsive_content_image_width"
                          style={{
                            wordWrap: "break-word",
                            overflowY: "hidden",
                          }}
                        >
                          <span className="ng-scope">Responsibility:</span>
                          <ul className="ng-scope">
                            <li>
                              Conduct market research and analysis to evaluate
                              trends, brand awareness, and&nbsp;competition
                              ventures
                            </li>
                            <li>
                              Write copy for diverse marketing distributions
                              (brochures, press releases, website material,
                              etc.)
                            </li>
                            <li>
                              Monitor progress of campaigns using various
                              metrics and submit reports of performance
                            </li>
                            <li>
                              Organize and oversee advertising/communication
                              campaigns and promotional events
                            </li>
                          </ul>
                          <span className="ng-scope">
                            Requirements and Skills:
                          </span>
                          <ul className="ng-scope">
                            <li>
                              Proven experience as a&nbsp;
                              <strong>marketing executive</strong>&nbsp;or
                              similar role
                            </li>
                            <li>
                              Good understanding of market research techniques,
                              data analysis, and statistics methods
                            </li>
                            <li>
                              Thorough knowledge of strategic planning
                              principles and marketing best practices
                            </li>
                            <li>
                              Proficient in MS Office and marketing software
                              (e.g. CRM)
                            </li>
                            <li>
                              Familiarity with social media and web analytics
                              (e.g. WebTrends)
                            </li>
                            <li>Excellent communication and people skills</li>
                            <li>
                              Strong organizational and time-management
                              abilities
                            </li>
                            <li>Creativity and commercial awareness</li>
                            <li>
                              BSc/BA in marketing, business administration or
                              relevant discipline
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div
                      className="font-16  margin-top-32 line-height-22  mdl-typography--font-bold"
                      ng-show="sJob.company_desc != ''"
                    >
                      <span className="mdl-color-text--grey-900  ng-binding">
                        About Gyanmanjari Career Academy
                      </span>
                    </div>
                    <div
                      bind-html-compile="sJob.company_desc"
                      className=" margin-top-16 responsive_content_image_width mdl-color-text--grey-600  mdl-typography--font-light"
                      style={{ wordWrap: "break-word", overflowY: "hidden" }}
                    >
                      <div
                        style={{ textAlign: "justify" }}
                        className="ng-scope"
                      >
                        Gyanmanjari Career Academy ardently believes education
                        is a process, not a product. Gyanmanjari started its
                        historic journey in 2006. Since its inception, over the
                        past 16 years, Gyanmanjari has served its students with
                        its core values as guiding principles. Our values have
                        been the key to our success and are the basis for
                        everything we do. These values foster an environment
                        that keeps our performance focused on the students.
                        Serving our students is our solitary priority.
                      </div>
                    </div>
                    <div
                      ng-if="sJob.job_type==0"
                      className="font-16 line-height-22 margin-top-32 ng-scope"
                    >
                      <span className="mdl-color-text--grey-900 m-b-20 mdl-typography--font-medium ng-binding">
                        Salary
                      </span>
                      <div className="font-14 margin-top-16 mdl-color-text--grey-600 mdl-typography--font-regular ng-binding">
                        As per Candidate's Experience
                      </div>
                    </div>
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
                              name="Gyanmanjari Career Academy"
                              img-config="{'urlType':'s3base','parentDiv':'post-avatar','parentDivStyle':'float:left;'}"
                              profile-src="assets/images/profiles/50x50/2098623.jpg?v=1667971290"
                              txt-config="{'parentDiv':'font-16'}"
                              className="ng-isolate-scope"
                            >
                              <img
                                ng-class="imgConfig.parentDiv"
                                ng-attr-style="{{imgConfig.parentDivStyle}}"
                                ng-if="profileSrc"
                                alt="GC"
                                err-src="https://alumni.gyanmanjarividyapith.edu.in/api/institutes/profile_pic_default?cid=1080"
                                ng-src="https://almashines.s3.dualstack.ap-southeast-1.amazonaws.com/assets/images/profiles/50x50/2098623.jpg?v=1667971290"
                                ng-attr-loading="{{loading || undefined}}"
                                className="ng-scope post-avatar"
                                style={{ float: "left" }}
                                src="https://almashines.s3.dualstack.ap-southeast-1.amazonaws.com/assets/images/profiles/50x50/2098623.jpg?v=1667971290"
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
                                Gyanmanjari Career Academy
                              </span>
                            </a>
                            <div
                              className="mdl-color-text--grey-600 margin-top-2 font-14 ng-binding ng-scope"
                              ng-if="sJob.cas_approved == 1 || sJob.cas_approved == 2"
                            >
                              Published On Sep 15, 2022
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="ng-scope">
                        <button
                          className="border-primary font-14 mdl-button mdl-typography--font-regular mdl-color--white mdl-color-text--primary padding-lr-20 padding-lr-xs-10 mdl-typography--text-capitalize ng-binding"
                          style={{ textTransform: "none" }}
                        >
                          Send Message
                        </button>
                      </div>
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
