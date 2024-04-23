import React from "react";
import {
  RiFileSearchFill,
  RiFileSearchLine,
  RiFinderLine,
  RiMessage2Fill,
  RiZoomInFill,
} from "react-icons/ri";
import { useState, useEffect } from "react";
import axios from "axios";

export default function All_alumni() {
  const [user, setUser] = useState([]);
  const [totalUsers, setTotalUsers] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchResult] = useState(null);

  useEffect(() => {
    getUser();
    getTotalUsers();
  }, []);

  const getUser = async () => {
    const res = await axios.get("http://localhost:3000/gurukulalumni/user");
    setUser(res.data);

    console.log(res.data);
  };
  const getTotalUsers = async () => {
    try {
      const res = await axios.get("http://localhost:3000/gurukulalumni/user");
      setUser(res.data);
      setTotalUsers(res.data.length);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearch = () => {
    const result = user.find((item) => item.firstname.toLowerCase() === searchQuery.toLowerCase());
    setSearchResult(result);
  };
  return (
    <div>
      <div className="ng-scope">
        <div className="page-strip-change page-strip-change-themed mdl-color--grey-100 mdl-color--grey-100-themed padding-top-0 change-size-max margin-auto">
          <div className="mdl-grid main-family padding-top-0 padding-left-0 padding-right-40 padding-right-md-0 padding-right-xs-0">
            <div
              className="mdl-cell--3-col mdl-cell--2-col-tablet padding-right-14 padding-right-md-0 ng-scope"
              ng-if="!$root.isMobile"
            >
              <div
                className="padding-bottom-30 mdl-color--white padding-top-40"
                ng-class="{'padding-top-48':current_view_mode=='admin','padding-top-40':current_view_mode=='user'}"
              >
                <div
                  ng-show="current_view_mode=='admin'"
                  className="padding-lr-30 padding-lr-md-10 padding-lr-xs-10 margin-bottom-30 ng-hide"
                >
                  <div
                    ng-show="showFindingFilter"
                    className="border-light-grey ng-hide"
                  >
                    <input
                      className="mdl-typography--font-light padding-lr-md-6 search-input-box mdl-color--white ng-pristine ng-untouched ng-valid ng-empty"
                      type="text"
                      placeholder="Search filters"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                   
                    <span
                      className="category-count search-icon center-alignment"
                  
                      style={{ width: "48px" }}
                      onClick={handleSearch}
                    >
                      <RiFileSearchLine
                        className="icon-search mdl-color-text--white font-20"
                        style={{ verticalAlign: "middle", marginLeft: "3px" }}
                      />
                    </span>
                   
                     {/* {searchResult && <div>{searchResult.firstname}</div>}
                     {setSearchResult && <div>{setSearchResult.firstname}</div>} */}
                  </div>
                </div>
              </div>
            </div>

            <div className="main-family padding-top-30 padding-top-xs-0 mdl-cell mdl-cell--9-col mdl-cell--6-col-tablet max-width-mobile">
              <latest-banner
                ng-show="current_view_mode=='user'"
                source="search"
                className="ng-isolate-scope"
              >
                <style
                  dangerouslySetInnerHTML={{
                    __html:
                      "\n\t.slide {\n\t  display:none;  \n\t}\n\t.slide.show {\n\t  display:block;\n\t}\t\n",
                  }}
                />
              </latest-banner>
              <div
                ng-hide="searchInitialData.fp && searchInitialData.fp.filters && !$root.app_data.isAdmin"
                className="mdl-color--primary mdl-color-text--white flexbox justify-content-space-between align-items-center padding-right-24"
                id="countDiv"
              >
                <div
                  className="inline-block ng-scope"
                  ng-if="!searchInitialData.fp.filters && !$root.app_data.isAdmin"
                >
                  <span className="font-16 category-text ng-binding">
                    {totalUsers} &nbsp;Members in community
                  </span>
                </div>
                <div className="inline-block"></div>
              </div>

              <div
                infinite-scroll="vFetchProfiles()"
                infinite-scroll-disabled="isFetchingSelected|| resultDataAttributes.scrollMoreFlag || vResettingWaiting"
                infinite-scroll-distance={1}
                className="ng-isolate-scope"
              >
                <div
                  ng-if="current_view_mode=='user'"
                  id="resultsDiv"
                  className="padding-lr-18 padding-lr-md-6 padding-lr-xs-0 mdl-grid mdl-grid--no-spacing mdl-color--white ng-scope"
                  ng-show="resultProfiles.length > 0"
                >
                  {user.map((user) => (
                    <div
                      className="element-hover-visible-parent overflow-visible mdl-color--white mdl-cell flexbox flex-dir-column ng-scope mdl-cell--3-col-desktop mdl-cell--2-col-tablet mdl-cell--2-col-phone"
                      ng-class="{'mdl-cell--4-col-desktop mdl-cell--4-col-tablet mdl-cell--4-col-phone ': profile.emailInput, 'mdl-cell--3-col-desktop mdl-cell--2-col-tablet mdl-cell--2-col-phone': !profile.emailInput}"
                      style={{ padding: "1px" }}
                      ng-repeat="profile in resultProfiles"
                    >
                      <div
                        className="border-radius-2 flexbox flex-dir-column padding-0 border-light-grey margin-xs-3 margin-12 margin-md-0"
                        style={{ height: "100%" }}
                      >
                        <div
                          ng-click="miniProfile(profile.basic_info.uid)"
                          className="maximize-width cursor-pointer margin-bottom-8 rel-pos aspect_ratio_square_parent ng-scope"
                          ng-if="(profile.basic_info.is_lost_user != 1)"
                        >
                          <as-profile-pic
                            name="21st century drpatel7171"
                            img-config="{'urlType':'s3base','parentDiv':'maximize-width aspect-ratio-child','parentDivStyle':'object-fit: cover;object-position: top;'}"
                            profile-src="assets/images/profiles/480x480/2179397.jpg?v=1664535291"
                            txt-config="{'parentDiv':'font-70'}"
                            className="ng-isolate-scope"
                          >
                            <img
                              ng-class="imgConfig.parentDiv"
                              ng-attr-style="{{imgConfig.parentDivStyle}}"
                              ng-if="profileSrc"
                              alt="2C"
                              err-src="https://alumni.gyanmanjarividyapith.edu.in/api/institutes/profile_pic_default?cid=1080"
                              ng-src="https://almashines.s3.dualstack.ap-southeast-1.amazonaws.com/assets/images/profiles/480x480/2179397.jpg?v=1664535291"
                              ng-attr-loading="{{loading || undefined}}"
                              className="ng-scope maximize-width aspect-ratio-child"
                              style={{
                                objectFit: "cover",
                                objectPosition: "top",
                              }}
                              src={`http://localhost:3000/uploads/${user.photo}`}
                            />
                          </as-profile-pic>
                        </div>

                        <div className="maximize-width border-box padding-12 maximize-width flexbox flex-dir-column flex-grow-3 rel-pos font-12 mdl-color-text--grey-600">
                          <div
                            ng-show="$root.app_data.same_com_log && profile.basic_info.is_lost_user!=1"
                            className="abs-pos"
                            style={{ right: "4px", top: "-24px" }}
                          >
                            <button
                              className="mdl-button mdl-js-button mdl-button--fab share-social mdl-color--white mdl-color-text--accent mdl-shadow--2dp font-16 float-right"
                              ng-click="messageBtnClick(profile.basic_info.name,profile.basic_info.uui,profile.basic_info.uid,$event)"
                              ng-show="profile.notMe"
                              title="Send Message to 21st century drpatel7171"
                              data-upgraded=",MaterialButton"
                            >
                              {/* <i className="icon-chat1 new-icon margin-auto font-18" /> */}
                              <RiMessage2Fill className="new-icon margin-auto font-18" />
                            </button>
                          </div>
                          <div className="margin-bottom-4 mdl-color-text--primary-dark mdl-typography--font-medium cursor-pointer font-16">
                            <a
                              ng-click="miniProfile(profile.basic_info.uid)"
                              className="link-detail mdl-color-text--grey-900 ng-binding"
                            >
                              {user.firstname}&nbsp;{user.lastname}
                            </a>
                          </div>
                          <div
                            className="margin-bottom-2 ng-binding"
                            ng-bind-html="profile.basic_info | memberSignature:'medium'"
                          >
                            Class of {user.passing_year}
                            <br />
                            BCA
                            <br />
                            SSCCS
                          </div>
                          <div
                            className="overflow-ellipsis ng-scope"
                            ng-attr-title="{{profile.basic_info.current_state?profile.basic_info.city+', '+ profile.basic_info.current_state:profile.basic_info.city}}"
                            ng-if=" profile.basic_info.city"
                            title="Vadodara, Gujarat"
                          >
                            <span className="ng-binding">{user.city}</span>
                            <span
                              ng-show="profile.basic_info.current_state"
                              className="ng-binding"
                            >
                              , {user.state}
                            </span>
                          </div>
                          <div className="flex-grow-3" />
                        </div>
                        <div
                          ng-show="$root.app_data.same_com_log && profile.basic_info.is_lost_user!=1 && profile.notMe"
                          className="top-border"
                        >
                          <div className="mdl-button maximize-width mdl-typography--font-semibold ng-binding">
                            <button
                              className="mdl-button maximize-width mdl-typography--font-semibold ng-binding"
                              style={{ textTransform: "none" }}
                              ng-click="miniProfile(profile.basic_info.uid)"
                            >
                              View more
                              <i className="margin-left-4 icon-keyboard_arrow_right font-16 upper-icons" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <meta name="almashines-status-code" content={200} />
      </div>
    </div>
  );
}
