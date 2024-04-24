import React from "react";
import gurukullogo from "../gurukullogo.png";
import { Link } from "react-router-dom";
import { useState , useEffect } from "react";
import axios from "axios";

export default function Job() {
  const [user_id, setId] = useState(sessionStorage.getItem("user"));
  const [job, setJob] = useState([]);
  const [Totaljob, setTotaljob] = useState([]);

  useEffect(() => {
    getJob();
    getTotaljob();
  }, []);
  const getJob = async () => {
    const res = await axios.get("http://localhost:3000/gurukulalumni/job");
    setJob(res.data);

    console.log(res.data);
  };
  const getTotaljob= async () => {
    try {
      const res = await axios.get("http://localhost:3000/gurukulalumni/job");
      setJob(res.data);
  
      setTotaljob(res.data.length);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div className="page-strip-change page-strip-change-themed">
        <div className="mdl-grid change-size main-family">
          <div className="mdl-cell mdl-cell--4-col mdl-cell--3-col-tablet mdl-cell--hide-phone">
            <div className="sub-title1 mdl-typography--font-light ng-binding">
              Job
            </div>
            <ul
              ng-if="!tag && !onlyInternship"
              style={{ listStyle: "none", margin: "0px", padding: "0px" }}
              className="ng-scope"
            >
              <li
                className="mdl-color--grey-300 font-16 category-list active-category"
                ng-click="changeTab('endorsed')"
                ng-class="{'active-category': current_tab == 'endorsed'}"
              >
                <span className="category-text mdl-typography--font-medium category-overflow ng-binding">
                  Job Opportunities
                </span>
                <span className="mdl-color-text--grey-600 category-count ng-binding">
                  ({Totaljob})
                </span>
              </li>
              {/* <div style={{ margin: 0, padding: "15px 0 18px" }}>
                <li
                  style={{ padding: "15px 24px" }}
                  className="link-detail"
                  ng-click="changeTab('e_jobs')"
                  ng-class="{'mdl-color-text--primary': current_tab == 'e_jobs'}"
                >
                  <label className="mdl-checkbox__label">
                    <span className="mdl-typography--font-regular ng-binding">
                      Jobs
                    </span>
                  </label>
                </li>
                <li
                  style={{ padding: "15px 24px" }}
                  className="link-detail"
                  ng-click="changeTab('e_internships')"
                  ng-class="{'mdl-color-text--primary': current_tab == 'e_internships'}"
                >
                  <label className="mdl-checkbox__label">
                    <span className="mdl-typography--font-regular ng-binding">
                      Internships
                    </span>
                  </label>
                </li>
              </div> */}
              {/* <li
                className="mdl-color--grey-300 font-16 category-list"
                ng-click="changeTab('postedbyme')"
                ng-class="{'active-category': current_tab == 'postedbyme'}"
              >
                <span className="category-text mdl-typography--font-medium category-overflow ng-binding">
                  Posted By Me
                </span>
                <span className="mdl-color-text--grey-600 category-count ng-binding">
                  0
                </span>
              </li> */}
              {/* <li
                className="mdl-color--grey-300 font-16 category-list"
                ng-click="changeTab('appliedbyme')"
                ng-class="{'active-category': current_tab == 'appliedbyme'}"
              >
                <span className="category-text mdl-typography--font-medium category-overflow ng-binding">
                  Applied By Me
                </span>
                <span className="mdl-color-text--grey-600 category-count ng-binding">
                  0
                </span>
              </li> */}
            </ul>
          </div>
          <div
            className="mdl-cell mdl-cell--4-col mdl-cell--hide-desktop mdl-cell--hide-tablet"
            style={{ borderRadius: "4px" }}
          >
            <button
              ng-click="showCategories=!showCategories"
              className="mdl-button mdl-js-button mdl-typography--font-regular maximize-width mdl-color-text--primary mdl-color--white ng-binding"
              style={{ border: "1px solid" }}
              data-upgraded=",MaterialButton"
            >
              Categories
              <i
                className="icon-expand_more font-16"
                style={{ marginLeft: "4px" }}
              />
            </button>
            <ul
              className="mdl-list mdl-card homepage-shadow-6 maximize-width categories-animate ng-hide"
              id="phone_categories"
              ng-show="showCategories"
              style={{ margin: "0px", minHeight: "0px" }}
            >
              <li
                ng-if="!tag && !onlyInternship"
                className="mdl-list__item category-list-small ng-scope active-category"
                style={{ cursor: "pointer" }}
                ng-click="changeTab('endorsed')"
                ng-class="{'active-category': current_tab == 'endorsed'}"
              >
                <span className="mdl-list__item-primary-content ng-binding">
                  All Opportunities
                </span>
                <span
                  className="mdl-color-text--grey-600 ng-binding"
                  style={{ float: "right" }}
                >
                  (1)
                </span>
              </li>
            
             
            </ul>
          </div>
          <div className="mdl-cell mdl-cell--8-col mdl-cell--5-col-tablet">
          

          
           
            <div
              ng-show="filterApplied "
              className="flexbox align-items-center  justify-content-space-between margin-lr-0 maximize-width mdl-cell mdl-cell--12-col  ng-hide"
            >
              <div className="mdl-typography--font-regular font-16 padding-lr-8 padding-tb-10 ng-binding"></div>
            </div>
            <div className="job-cards-start" />
            <div
              className="center-alignment font-16 margin-right-4 mdl-typography--font-medium padding-lr-8 padding-tb-10 mdl-cell--hide-desktop"
              ng-show="jobs[current_tab].length>0"
            >
              <div className="mdl-card__title-text font-18 mdl-typography--font-regular ng-binding">
                Available Opportunities
              </div>
            </div>
            {job.map((job) => (
            <div
              ng-show="jobs!==[]"
              infinite-scroll="loadMore()"
              infinite-scroll-disabled="lock[current_tab] || no_more_data[current_tab]"
              infinite-scroll-distance={1}
              className="ng-isolate-scope"
            >
              <div ng-repeat="job in jobs[current_tab]" className="ng-scope">
                <div
                  className="mdl-card homepage-shadow-6 m-b-20 mdl-typography--font-light maximize-width padding-24 padding-lr-xs-16"
                  style={{ zIndex: 0 }}
                  ng-hide="$root.as_ed.bu.uids.indexOf(2098623)>-1"
                >
                  <div className="flexbox justify-content-space-between">
                    <div className="flexbox flex-dir-column-xs">
                      <span className="mdl-typography--font-medium font-18 left-alignment m-b-20 padding-left-8 padding-left-xs-10 ng-binding">
                        {job.title} 
                      </span>{" "}
                      <span
                        className="font-18 padding-lr-4 ng-scope"
                        ng-if="!$root.isMobile"
                      >
                        {" "}
                        |{" "}
                      </span>
                      <span className="mdl-color-text--grey-600 mdl-typography--font-light font-16 margin-bottom-xs-8 padding-left-xs-10 ng-binding">
                        SSCCS
                      </span>
                    </div>
                    
                  </div>
                  <div className="mdl-grid padding-0 margin-top-0 margin-lr-0 margin-bottom-15">
                    <div
                      className="mdl-cell--3-col mdl-cell--4-col-tablet mdl-cell mdl-color-text--grey-600 font-16 left-alignment"
                      style={{ overflow: "hidden", wordBreak: "break-word" }}
                    >
                      <div className="inline-block-480">
                        <span
                          ng-if="!$root.isMobile"
                          className="mdl-typography--font-medium ng-binding ng-scope"
                        >
                          Location
                        </span>
                      </div>
                      <span
                        ng-if="job.city!=-2"
                        className="ng-binding ng-scope"
                      >
                        {job.locationn}
                      </span>
                    </div>
                    <div className="mdl-cell--3-col mdl-cell--4-col-tablet mdl-cell mdl-color-text--grey-600 font-16 left-alignment">
                      <div className="inline-block-480">
                        <span
                          ng-if="!$root.isMobile"
                          className="mdl-typography--font-medium ng-binding ng-scope"
                        >
                          Deadline{" "}
                        </span>
                      </div>
                      <span className="ng-binding">{job.deadline}</span>
                    </div>
                    <div className="mdl-cell--3-col mdl-cell mdl-cell--4-col-tablet mdl-color-text--grey-600 font-16 left-alignment">
                      <div className="inline-block-480">
                        <span
                          ng-if="job.job_type==0 && !$root.isMobile"
                          className="mdl-typography--font-medium ng-binding ng-scope"
                        >
                          Salary{" "}
                        </span>
                      </div>
                      <span className="ng-binding">
                      {job.salary}
                       
                      </span>
                    </div>
                    {/* <div className="mdl-cell--3-col mdl-cell mdl-cell--4-col-tablet mdl-color-text--grey-600 font-16 left-alignment">
                      <div className="inline-block-480">
                        <span className="mdl-typography--font-medium">
                          <span
                            ng-if="job.receive_type == '0' && !$root.isMobile"
                            className="ng-binding ng-scope"
                          >
                            Applicants
                          </span>
                        </span>
                      </div>
                      <span
                        ng-if="job.receive_type == '0'"
                        className="ng-binding ng-scope"
                      >
                        1
                      </span>
                    </div> */}

                    <div className="mdl-cell mdl-color-text--grey-600 font-16 left-alignment">
                      <div
                        className="mdl-color--blue-50 mdl-color-text--black font-14 job-intern-capsule"
                        style={{ margin: "0px" }}
                      >
                        <span
                          ng-if="job.job_type==0"
                          className="ng-binding ng-scope"
                        >
                          Job
                        </span>
                      </div>&nbsp;&nbsp;
                     {job.status == "1" ? (
                       <div
                       ng-if="job.approved==3 || (info.currentTime-job.Deadline>0)"
                       className="mdl-color--green-100 mdl-color-text--black font-14 job-intern-capsule margin-0 ng-scope"
                     >
                       <span className="ng-binding">Open</span>
                     </div>
                     ):(
                      <div
                      ng-if="job.approved==3 || (info.currentTime-job.Deadline>0)"
                      className="mdl-color--red-100 mdl-color-text--black font-14 job-intern-capsule margin-0 ng-scope"
                    >
                      <span className="ng-binding">Closed</span>
                    </div>
                     )}
                    </div>
                  </div>
                  <div className="flexbox justify-content-space-between flex-wrap-wrap flex-dir-column-600 padding-lr-8">
                    <div className="flexbox align-items-center">
                      <div className="margin-right-12">
                        <a
                          ui-sref="inapp.profile({uid: '2098623'})"
                          style={{ textDecoration: "none" }}
                          href="/profile/2098623"
                        >
                          <as-profile-pic
                            name="SSCCS"
                            img-config="{'urlType':'s3base','parentDiv':'comment-avatar','parentDivStyle':'float:left;'}"
                            profile-src="assets/images/profiles/50x50/2098623.jpg?v=1667971290"
                            txt-config="{'parentDiv':'font-14'}"
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
                              className="ng-scope comment-avatar"
                              style={{ float: "left" }}
                              src={gurukullogo}
                            />
                          </as-profile-pic>
                        </a>
                      </div>
                      <div className="inline-block font-14">
                        <a
                          ui-sref="inapp.profile({uid: '2098623'})"
                          className="link-detail mdl-color-text--grey-900"
                          href="/profile/2098623"
                        >
                          <span className="ng-binding">{job.entry_by}</span>
                        </a>
                        <div
                          className="mdl-color-text--grey-600 ng-binding ng-scope"
                          ng-if="job.cas_approved == 1 || job.cas_approved == 2"
                        >
                          Published On {job.entry_date}
                        </div>
                      </div>
                    </div>
                    <div
                      ng-if="job.cas_approved != null"
                      className="padding-tb-xs-16 ng-scope"
                      style={{ paddingTop: "10px" }}
                    ></div>
                    <div className="padding-res flexbox align-items-center flex-dir-column-xs">
                      {/* <div className="inline-block ng-scope" ng-if="!$root.isMobile" style={{paddingTop: '8px'}}>
                        <i className="icon-visibility" style={{paddingRight: '10px', verticalAlign: 'middle'}} />
                        <span style={{marginRight: '20px'}} className="ng-binding"> 193 </span>
                      </div> */}

                      <a
                        className="mdl-button maximize-width-xs padding-xs-0 mdl-button--colored mdl-js-rippleeffect border-primary mdl-color-text--primary mdl-typography--font-regular job-view-button min-width-button"
                        style={{ textTransform: "capitalize" }}
                        ng-click="redirectToJobSingle(job.id,'job_list')"
                      >
                        <span
                          ng-if="job.job_type==0"
                          className="ng-binding ng-scope"
                        >
                           {user_id ? (
                           <Link  to={`/ViewJob/` + job.job_id}>View Job Post</Link>
                          
                        ) : (
                          <Link to="/Login">View Job Post</Link>
                        )}
                          
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            ))}

            {/* <div ng-show="lock[current_tab] && !no_more_data[current_tab]" className="ng-hide" >
              <div className="mdl-progress mdl-js-progress mdl-progress__indeterminate maximize-width is-upgraded" data-upgraded=",MaterialProgress"><div className="progressbar bar bar1" style={{width: '0%'}} /><div className="bufferbar bar bar2" style={{width: '100%'}} /><div className="auxbar bar bar3" style={{width: '0%'}} /></div>
            </div>
            <div ng-show="no_more_data[current_tab] && !emptyState" className >
              <div className="mdl-card maximize-width center-alignment padding-16" style={{minHeight: '0px', border: '1px solid'}}>
                <div className="font-19 mdl-typography--font-medium mdl-color-text--primary ng-binding">Got an opportunity to share?
                </div>
                <div className="margin-top-10 ng-binding">
                  Share it here to hire great talent from AAG Alumni Community
                </div>
                <div className="margin-top-10">
                  <button className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored mdl-js-rippleeffect mdl-typography--font-regular ng-binding" ng-click="showPostJobForm($event); scrollTo('opportunityShareCard',500);" style={{height: '30px', lineHeight: '31px'}} data-upgraded=",MaterialButton">
                    <i className="icon-add new-icon" />
                    Post an Opportunity
                  </button>
                </div>
              </div>
            </div> */}
            {/* <div ng-show="emptyState && no_more_data[current_tab]" className="mdl-color--white flexbox flex-wrap-wrap justify-content-center align-items-center ng-hide" style={{height: '320px'}}>
              <div>
                <div className="mdl-color-text--grey-900 flexbox justify-content-center margin-tb-12 font-16 maximize-width">
                  <img src="https://alumni.gyanmanjarividyapith.edu.in//img/noresults.png" className=" margin-bottom-20 margin-top-30" style={{height: '100px', width: 'auto'}} />
                </div>
                <div className="mdl-color-text--grey-900 flexbox justify-content-center margin-tb-12 font-16 maximize-width ng-binding">
                  No Jobs found!
                </div>
                <div className="mdl-color-text--grey-600 flexbox justify-content-center margin-bottom-16 font-14 maximize-width ng-binding">
                  No Jobs found to match your
                  criteria
                </div>
                <div className=" flexbox justify-content-center maximize-width">
                  <button ng-click="vResetAll()" className="mdl-button mdl-js-button mdl-color-text--white mdl-color--accent font-14 ng-binding" href data-upgraded=",MaterialButton">Clear All</button>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
