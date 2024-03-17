import React from "react";

export default function ViewEventDetail() {
  return (
    <main
      className="mdl-color--grey-100 mdl-color--grey-100-themed main-family ng-scope"
      ng-show="!draft_event && (!(eventDetails['metadata'] && (eventDetails['metadata']['event_single_template'] || eventDetails['metadata']['event_single_pageid'] || eventDetails['metadata']['event_description_page_url']) && source!='admin'))"
    >
      <div
        className="no-padding--as-header-themed mdl-color--grey-900 mdl-color--grey-900-themed"
        ng-class="($root.app_data.same_com_log)?'mdl-color--grey-900 mdl-color--grey-900-themed':'mdl-color--primary-dark mdl-color--primary-dark-themed'"
      >
        <div className="mdl-grid center-wrap adjust-event-name">
          <div className="mdl-cell mdl-cell--4-offset-desktop mdl-cell--6-col mdl-cell--6-col-tablet mdl-cell--4-col-phone">
            <div style={{ paddingLeft: "8px" }}>
              <div className="margin-bottom-8">
                <div
                  event-live-chip="eventDetails"
                  className="ng-isolate-scope"
                >
                  
                </div>
              </div>
              <div
                className="inline-block mdl-color-text--white font-24 font-xs-16 font-md-18 ng-binding"
                ng-bind="eventDetails.title"
                ng-hide="editEvtName"
                style={{ lineHeight: "initial" }}
              >
                Grand Alumni Gathering of Crystal Jubilee of Gyanmanjari
              </div>
              
              <div className="margin-top-16 flexbox align-items-center">
                
                
                
                
              </div>
            </div>
          </div>
          <div
            ng-show="$root.app_data.isAdmin"
            className="mdl-cell mdl-cell--2-col mdl-cell--1-col-phone mdl-color-text--white mdl-cell--hide-phone rel-pos right-alignment ng-hide"
            style={{ top: "3px", right: "-4px" }}
          >

            <span className="nb-menu-setting">
              <div className="mdl-menu__container is-upgraded">
                <div className="mdl-menu__outline mdl-menu--bottom-right" />
                <ul
                  className="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-rippleeffect"
                  htmlFor="nb-card-event-setting"
                  style={{ padding: "0px", minWidth: "125px" }}
                  data-upgraded=",MaterialMenu"
                >
                  <li
                    className="mdl-menu__item nb-list-setting ng-binding ng-isolate-scope"
                    as-event-delete
                    eid={7781}
                    call-back="assignPage()"
                    tabIndex={-1}
                  >
                    Delete Event
                  </li>
                  
                  <li
                    className="mdl-menu__item nb-list-setting ng-binding ng-scope"
                    ng-if="eventDetails.activate_status==0"
                    ng-click="changeActivateStatus(1)"
                    tabIndex={-1}
                  >
                    Save in draft
                  </li>
                  
                  
                  
                </ul>
              </div>
            </span>
          </div>
          <div className="mdl-cell mdl-cell--4-offset-desktop mdl-cell--8-col mdl-cell--8-col-tablet mdl-cell--4-col-phone mdl-color-text--white font-16">
            <div style={{ paddingLeft: "8px" }}>
              <span
                className="new-icon ng-binding"
                title="Event Date"
                ng-show="eventDetails.sdate"
              >
                <i className="icon-event_available font-18 upper-icons" />
                Sunday, Feb 12, 2023
              </span>

              <span
                className="creator-adjust-phone ng-scope"
                ng-if="$root.isloggedin"
              >
                <i className="icon-person font-18 upper-icons" />
                <a
                  title="Creator"
                  ui-sref="inapp.profile({uid: '2098623',source: 'ev_creator'})"
                  ng-bind="eventDetails.cfName+' '+eventDetails.clName"
                  className="mdl-color-text--white mdl-typography--font-regular new-icon ng-binding"
                  style={{ textDecoration: "none" }}
                  href="/profile/2098623?source=ev_creator"
                >
                  Gyanmanjari Career Academy
                </a>
                
              </span>
              
              <span
                className="creator-adjust-phone"
                ng-show="eventDetails.event_id>633 || eventDetails.event_view>50"
              >
                <span title="View Count" className="icon-remove_red_eye " />
                <span title="View Count" className="ng-binding">
                  12812
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="mdl-grid center-wrap main-family">
        <div className="mdl-cell mdl-cell--4-col mdl-cell--3-col-tablet mdl-cell--4-col-phone invite-card event-left-adjust">
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
                  src="https://almashines.s3.dualstack.ap-southeast-1.amazonaws.com/assets/images/eventlogos/sizea/20362721674789288.jpg"
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
                  ng-show="eventDetails.booking_on==1 && (info.userRegInt==1 || info.userRegInt==2 || (info.userRegInt==3 && same_com_log))"
                  className="ng-hide"
                >
                  
                  <a
                    ng-show="!guestUserAttendee && !info.userRegRestricted && !( checkDates(eventDetails.sdate,eventDetails.fdate,eventDetails.booking_on,eventDetails.timezone,eventDetails.stime,eventDetails.ftime)!='Past Event' && codes.length)"
                    className="mdl-button mdl-js-button  mdl-color-text--white mdl-typography--font-regular mdl-color--primary mdl-js-rippleeffect ng-binding"
                    ui-sref="inapp.event_ticket({eventId: '7781',source: 'eventView'})"
                    ng-bind="'20' | asLingo"
                    href="/events/tickets/7781?source=eventView"
                    data-upgraded=",MaterialButton"
                  >
                    Register
                  </a>
                  
                  
                  <div
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
                  </div>
                </div>
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
                        Registration is only open for members of Alumni
                        Association of Gyanmanjari.
                      </span>
                      
                      
                    </span>
                    
                    
                    
                    
                    
                    
                    
                  </div>
                </div>
              </div>
              
              <div
                className="mdl-card__actions m-b-20"
                align="center"
                ng-show="eventDetails.booking_on==0 && (!eventDetails.metadata || !eventDetails.metadata.remove_reg_btn)"
              >
                <button
                  disabled
                  className="mdl-button mdl-js-button mdl-color--grey-400 mdl-color-text--white mdl-typography--font-regular ng-binding"
                  ui-sref="inapp.event_ticket({eventId: '7781'})"
                  href="/events/tickets/7781"
                  data-upgraded=",MaterialButton"
                >
                  Online Registration Closed
                </button>
              </div>
            </div>
            
            
            
          </div>
          
          
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
                <div
                  ng-show="checkDates(eventDetails.sdate,eventDetails.fdate,eventDetails.booking_on,eventDetails.timezone,eventDetails.stime,eventDetails.ftime)=='Ongoing Event' && !registeredMsg"
                  className="flexbox align-items-center ng-hide"
                >
                  <i className="icon-flash_on font-20 margin-right-8 mdl-color-text--red-A200" />
                  <span className="font-16 mdl-typography--font-medium ng-binding">
                    Ongoing Event
                  </span>
                </div>
                
                
                
                
                <div
                  ng-if="checkDates(eventDetails.sdate,eventDetails.fdate,eventDetails.booking_on,eventDetails.timezone,eventDetails.stime,eventDetails.ftime)=='Past Event'"
                  className="ng-scope"
                >
                  <div className="flexbox margin-bottom-24 align-items-center">
                    <i className="font-18 font-xs-14 margin-right-8 icon-check_circle mdl-color-text--light-green" />
                    <span className="font-14 font-xs-12 mdl-color-text--grey-900 ng-binding">
                      You were already registered for this event
                    </span>
                  </div>
                  <div
                    className="mdl-color-text--white mdl-color--grey-400 font-14 job-intern-capsule margin-bottom-0 inline-block ng-binding"
                    style={{ margin: "0px 6px 12px 0px" }}
                    ng-bind="getEventStatus(eventDetails.sdate,eventDetails.fdate,eventDetails.booking_on,eventDetails.timezone,eventDetails.stime,eventDetails.ftime)"
                  >
                    Past Event
                  </div>
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
                    <img src="./img/Ticket.svg" className="margin-right-6" />
                    View ticket
                  </a>
                  <div className="mdl-menu__container is-upgraded">
                    <div className="mdl-menu__outline" />
                    <ul
                      className="mdl-menu mdl-menu-bottom-left mdl-js-menu mdl-js-rippleeffect"
                      htmlFor="alltickets"
                      style={{ width: "max-content", textAlign: "left" }}
                      data-upgraded=",MaterialMenu"
                    >
                      
                      <li
                        className="mdl-menu__item ng-scope"
                        ng-repeat="code in codes"
                        tabIndex={-1}
                      >
                        <a
                          className="mdl-color-text--blue-900 link-detail font-14  padding-bottom-3 ng-binding"
                          ng-click="downloadEventTicket(code[0])"
                        >
                          ticket of Jan 25, 2023 03:20 PM
                        </a>
                      </li>
                      
                    </ul>
                  </div>
                  
                  
                  <div className="mdl-menu__container is-upgraded">
                    <div className="mdl-menu__outline" />
                    <ul
                      className="mdl-menu mdl-menu-bottom-left mdl-js-menu mdl-js-rippleeffect"
                      htmlFor="demo-menu-lower-left"
                      style={{ padding: "0px", minWidth: "60px" }}
                      data-upgraded=",MaterialMenu"
                    >
                      <li className="mdl-menu__item" tabIndex={-1}>
                        <a
                          className="mdl-color-text--blue-900 link-detail font-14 ng-binding"
                          ng-href="https://www.almashines.com/api/events/fetchgcal?eid=7781"
                          target="_blank"
                          href="https://www.almashines.com/api/events/fetchgcal?eid=7781"
                        >
                          Google Calendar
                        </a>
                      </li>
                      
                      <li className="mdl-menu__item" tabIndex={-1}>
                        <a
                          className="mdl-color-text--blue-900 link-detail font-14 ng-binding"
                          ng-href="https://www.almashines.com/api/events/fetchical?eid=7781"
                          target="_blank"
                          href="https://www.almashines.com/api/events/fetchical?eid=7781"
                        >
                          iCal or Outlook{" "}
                        </a>
                      </li>
                    </ul>
                  </div>
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
                Gyanmanjari Group of Colleges (GMGC), Nr ISKON Eleven, Sidsar
                Road <br></br>Bhavnagar
              </div>
              </div>
              </div>
          
          
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
              <span className="ng-scope">The wait is over. The </span>
              <strong className="ng-scope">
                Grand Alumni Gathering on Crystal Jubilee of Gyanmanjari
              </strong>
              <span className="ng-scope"> !!!</span>
              <br className="ng-scope" />
              <br className="ng-scope" />
              <span className="ng-scope">We would be immensely </span>
              <strong className="ng-scope">
                delighted to invite you to the alumni meet
              </strong>
              <span className="ng-scope"> on </span>
              <strong className="ng-scope">12 Feb 2023 at 03:00 pm</strong>
              <span className="ng-scope"> at </span>
              <strong className="ng-scope">GMGC Campus</strong>
              <span className="ng-scope">
                . Let's catch up on the old times &amp; walk down memory
                lane.&nbsp;
              </span>
              <br className="ng-scope" />
              <br className="ng-scope" />
              <span className="ng-scope">
                We would certainly want your continued and valued association
                with our esteemed institute.&nbsp;
              </span>
              <br className="ng-scope" />
              <br className="ng-scope" />
              <span className="ng-scope">Book Your Seat Nowww.....</span>
              <br className="ng-scope" />
              <br className="ng-scope" />
              &nbsp;
            </div>
          </div>
          

          
          
          
          
          
          
          <hr
            ng-if="eventDetails.total_guests>0 && $root.app_data.same_com_log"
            className="ng-scope"
          />
          
          
          <div
            ng-if="eventDetails.total_guests>0 && $root.app_data.same_com_log && !(eventDetails.metadata.hide_attendees && !$root.app_data.isAdmin)"
            className="center-section-margin ng-scope"
            style={{ padding: "27px 0px 0px" }}
          >
            
            
            <div className="m-b-20 font-18 mdl-typography--font-light">
              <i className="icon-User_Profile_UserNetwork mdl-color-text--primary" />
              <div
                className="mdl-typography--font-regular ng-binding"
                style={{ display: "inline" }}
              >
                ATTENDEES (1457)
              </div>
              
              
              
              
              
              
              <a
                className="mdl-color-text--accent link-detail mdl-typography--font-regular float-right font-16 ng-binding"
                ui-sref="inapp.event_attendees({eventId: '7781',source: 'eventView',source_baggage: 'source_baggage_for_attendees'})"
                ng-hide="eventDetails.metadata.reg.type=='form'"
                href="/events/attendees/7781?source=eventView&source_baggage=source_baggage_for_attendees"
              >
                See All
              </a>
            </div>
            
            <div className="mdl-grid" style={{ padding: "0px 22px" }}>
              
              <div
                className="mdl-cell mdl-cell--6-col ng-scope"
                ng-repeat="guest in guests.data"
              >
                
                <div ng-if="guest.is_guest!=1" className="ng-scope">
                  
                  <div
                    ng-if="(guest.first_name || guest.last_name)"
                    className="new-icon ng-scope"
                    style={{ float: "left" }}
                  >
                    <a
                      ui-sref="inapp.profile({uid: '2208215',source: 'ev_attendees_sb'})"
                      href="/profile/2208215?source=ev_attendees_sb"
                    >
                      <as-profile-pic
                        name="Karmarajsinh Gohil"
                        img-config="{'urlType':'s3base','parentDiv':'post-avatar','parentDivStyle':'float:left;'}"
                        profile-src="assets/images/profiles/50x50/2208215.jpg?v=1676117115"
                        txt-config="{'parentDiv':'font-16'}"
                        className="ng-isolate-scope"
                      >
                        
                        
                        <img
                          ng-class="imgConfig.parentDiv"
                          ng-attr-style="{{imgConfig.parentDivStyle}}"
                          ng-if="profileSrc"
                          alt="KG"
                          err-src="https://alumni.gyanmanjarividyapith.edu.in/api/institutes/profile_pic_default?cid=1080"
                          ng-src="https://almashines.s3.dualstack.ap-southeast-1.amazonaws.com/assets/images/profiles/50x50/2208215.jpg?v=1676117115"
                          ng-attr-loading="{{loading || undefined}}"
                          className="ng-scope post-avatar"
                          style={{ float: "left" }}
                          src="https://almashines.s3.dualstack.ap-southeast-1.amazonaws.com/assets/images/profiles/50x50/2208215.jpg?v=1676117115"
                        />
                        
                      </as-profile-pic>
                    </a>
                  </div>
                  
                  
                  
                  <div
                    ng-if="(guest.first_name || guest.last_name)"
                    style={{ float: "left" }}
                    className="comment-author-adjust font-16 ng-scope"
                  >
                    <a
                      ui-sref="inapp.profile({uid: '2208215',source: 'ev_attendees_sb'})"
                      className="link-detail mdl-color-text--black mdl-typography--font-medium"
                      href="/profile/2208215?source=ev_attendees_sb"
                    >
                      <span className="ng-binding">Karmarajsinh Gohil</span>
                    </a>
                    <div
                      className="mdl-color-text--grey-600 ng-binding"
                      ng-bind-html="guest | memberSignature:'small'"
                    >
                      Alumni, Class of 2021
                    </div>
                  </div>
                  
                  
                </div>
                
                
              </div>
              
              <div
                className="mdl-cell mdl-cell--6-col ng-scope"
                ng-repeat="guest in guests.data"
              >
                
                <div ng-if="guest.is_guest!=1" className="ng-scope">
                  
                  <div
                    ng-if="(guest.first_name || guest.last_name)"
                    className="new-icon ng-scope"
                    style={{ float: "left" }}
                  >
                    <a
                      ui-sref="inapp.profile({uid: '2193572',source: 'ev_attendees_sb'})"
                      href="/profile/2193572?source=ev_attendees_sb"
                    >
                      <as-profile-pic
                        name="Jadeja Jayveersinh"
                        img-config="{'urlType':'s3base','parentDiv':'post-avatar','parentDivStyle':'float:left;'}"
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
                          className="ng-scope post-avatar"
                          style={{ float: "left" }}
                          src="https://almashines.s3.dualstack.ap-southeast-1.amazonaws.com/assets/images/profiles/50x50/2193572.jpg?v=1691252083"
                        />
                        
                      </as-profile-pic>
                    </a>
                  </div>
                  
                  
                  
                  <div
                    ng-if="(guest.first_name || guest.last_name)"
                    style={{ float: "left" }}
                    className="comment-author-adjust font-16 ng-scope"
                  >
                    <a
                      ui-sref="inapp.profile({uid: '2193572',source: 'ev_attendees_sb'})"
                      className="link-detail mdl-color-text--black mdl-typography--font-medium"
                      href="/profile/2193572?source=ev_attendees_sb"
                    >
                      <span className="ng-binding">Jadeja Jayveersinh</span>
                    </a>
                    <div
                      className="mdl-color-text--grey-600 ng-binding"
                      ng-bind-html="guest | memberSignature:'small'"
                    >
                      Alumni, Class of 2019
                    </div>
                  </div>
                  
                  
                </div>
                
                
              </div>
              
              <div
                className="mdl-cell mdl-cell--6-col ng-scope"
                ng-repeat="guest in guests.data"
              >
                
                <div ng-if="guest.is_guest!=1" className="ng-scope">
                  
                  <div
                    ng-if="(guest.first_name || guest.last_name)"
                    className="new-icon ng-scope"
                    style={{ float: "left" }}
                  >
                    <a
                      ui-sref="inapp.profile({uid: '2193525',source: 'ev_attendees_sb'})"
                      href="/profile/2193525?source=ev_attendees_sb"
                    >
                      <as-profile-pic
                        name="Kush Dhandhala"
                        img-config="{'urlType':'s3base','parentDiv':'post-avatar','parentDivStyle':'float:left;'}"
                        profile-src="assets/images/profiles/50x50/2193525.jpg?v=1665043906"
                        txt-config="{'parentDiv':'font-16'}"
                        className="ng-isolate-scope"
                      >
                        
                        
                        <img
                          ng-class="imgConfig.parentDiv"
                          ng-attr-style="{{imgConfig.parentDivStyle}}"
                          ng-if="profileSrc"
                          alt="KD"
                          err-src="https://alumni.gyanmanjarividyapith.edu.in/api/institutes/profile_pic_default?cid=1080"
                          ng-src="https://almashines.s3.dualstack.ap-southeast-1.amazonaws.com/assets/images/profiles/50x50/2193525.jpg?v=1665043906"
                          ng-attr-loading="{{loading || undefined}}"
                          className="ng-scope post-avatar"
                          style={{ float: "left" }}
                          src="https://almashines.s3.dualstack.ap-southeast-1.amazonaws.com/assets/images/profiles/50x50/2193525.jpg?v=1665043906"
                        />
                        
                      </as-profile-pic>
                    </a>
                  </div>
                  
                  
                  
                  <div
                    ng-if="(guest.first_name || guest.last_name)"
                    style={{ float: "left" }}
                    className="comment-author-adjust font-16 ng-scope"
                  >
                    <a
                      ui-sref="inapp.profile({uid: '2193525',source: 'ev_attendees_sb'})"
                      className="link-detail mdl-color-text--black mdl-typography--font-medium"
                      href="/profile/2193525?source=ev_attendees_sb"
                    >
                      <span className="ng-binding">Kush Dhandhala</span>
                    </a>
                    <div
                      className="mdl-color-text--grey-600 ng-binding"
                      ng-bind-html="guest | memberSignature:'small'"
                    >
                      Alumni, Class of 2021
                    </div>
                  </div>
                  
                  
                </div>
                
                
              </div>
              
              <div
                className="mdl-cell mdl-cell--6-col ng-scope"
                ng-repeat="guest in guests.data"
              >
                
                <div ng-if="guest.is_guest!=1" className="ng-scope">
                  
                  <div
                    ng-if="(guest.first_name || guest.last_name)"
                    className="new-icon ng-scope"
                    style={{ float: "left" }}
                  >
                    <a
                      ui-sref="inapp.profile({uid: '2484679',source: 'ev_attendees_sb'})"
                      href="/profile/2484679?source=ev_attendees_sb"
                    >
                      <as-profile-pic
                        name="BARAIYA TUSHAR"
                        img-config="{'urlType':'s3base','parentDiv':'post-avatar','parentDivStyle':'float:left;'}"
                        profile-src="assets/images/profiles/50x50/2484679.jpg?v=1674722520"
                        txt-config="{'parentDiv':'font-16'}"
                        className="ng-isolate-scope"
                      >
                        
                        
                        <img
                          ng-class="imgConfig.parentDiv"
                          ng-attr-style="{{imgConfig.parentDivStyle}}"
                          ng-if="profileSrc"
                          alt="BT"
                          err-src="https://alumni.gyanmanjarividyapith.edu.in/api/institutes/profile_pic_default?cid=1080"
                          ng-src="https://almashines.s3.dualstack.ap-southeast-1.amazonaws.com/assets/images/profiles/50x50/2484679.jpg?v=1674722520"
                          ng-attr-loading="{{loading || undefined}}"
                          className="ng-scope post-avatar"
                          style={{ float: "left" }}
                          src="https://almashines.s3.dualstack.ap-southeast-1.amazonaws.com/assets/images/profiles/50x50/2484679.jpg?v=1674722520"
                        />
                        
                      </as-profile-pic>
                    </a>
                  </div>
                  
                  
                  
                  <div
                    ng-if="(guest.first_name || guest.last_name)"
                    style={{ float: "left" }}
                    className="comment-author-adjust font-16 ng-scope"
                  >
                    <a
                      ui-sref="inapp.profile({uid: '2484679',source: 'ev_attendees_sb'})"
                      className="link-detail mdl-color-text--black mdl-typography--font-medium"
                      href="/profile/2484679?source=ev_attendees_sb"
                    >
                      <span className="ng-binding">BARAIYA TUSHAR</span>
                    </a>
                    <div
                      className="mdl-color-text--grey-600 ng-binding"
                      ng-bind-html="guest | memberSignature:'small'"
                    >
                      Faculty
                    </div>
                  </div>
                  
                  
                </div>
                
                
              </div>
              
            </div>
          </div>
          
          
          
          
          
          
          <div
            className="center-section-margin asScrollSpy"
            style={{ padding: "27px 0px 0px" }}
            ng-show="same_com_log"
            id="eventPost"
          >
            <div
              className="font-18 mdl-typography--font-light"
              style={{ marginBottom: "30px" }}
            >
              <i className="icon-forum mdl-color-text--primary" />
              <div
                className="mdl-typography--font-regular ng-binding"
                style={{ display: "inline" }}
              >
                EVENT POSTS
              </div>
            </div>
            
            <div className="m-b-20">
              <div
                ng-hide="showPost"
                className="maximize-width"
                ng-click="discussion_start($event)"
              >
                <button
                  className="mdl-button mdl-js-button mdl-button--raised mdl-button--primary mdl-js-rippleeffect mdl-typography--font-regular maximize-width font-16 ng-binding"
                  style={{ height: "48px" }}
                  data-upgraded=",MaterialButton"
                  fdprocessedid="1ftggn"
                >
                  Start a discussion / poll
                </button>
              </div>
              <div
                ng-show="showPost"
                className="mdl-card homepage-shadow-6 mdl-tabs mdl-js-tabs mdl-js-rippleeffect mdl-color--white ng-hide is-upgraded"
                style={{ overflow: "visible" }}
                data-upgraded=",MaterialTabs"
              >
                
                <div className="mdl-tabs__tab-bar">
                  
                  <a
                    ng-if="eventDiscussion"
                    href="#posttab"
                    className="mdl-tabs__tab is-active maximize-width ng-binding ng-scope"
                  >
                    Post
                  </a>
                  
                  
                  <a
                    ng-if="eventPoll"
                    href="#polltab"
                    className="mdl-tabs__tab maximize-width ng-binding ng-scope"
                  >
                    Poll
                  </a>
                  
                </div>
                
                <div
                  ng-show="eventDiscussion"
                  className="mdl-tabs__panel is-active"
                  id="posttab"
                  style={{ paddingBottom: "1px" }}
                >
                  <div style={{ margin: "10px 15px 30px" }}>
                    <span
                      className="new-icon"
                      style={{
                        position: "relative",
                        top: "20px",
                        float: "left",
                      }}
                    >
                      <as-profile-pic
                        name="Karmarajsinh Gohil"
                        img-config="{'urlType':'s3base','parentDiv':'post-avatar','parentDivStyle':'float:left;'}"
                        profile-src="assets/images/profiles/50x50/2208215.jpg?v=1676117115"
                        txt-config="{'parentDiv':'font-16'}"
                        className="ng-isolate-scope"
                      >
                        
                        
                        <img
                          ng-class="imgConfig.parentDiv"
                          ng-attr-style="{{imgConfig.parentDivStyle}}"
                          ng-if="profileSrc"
                          alt="KG"
                          err-src="https://alumni.gyanmanjarividyapith.edu.in/api/institutes/profile_pic_default?cid=1080"
                          ng-src="https://almashines.s3.dualstack.ap-southeast-1.amazonaws.com/assets/images/profiles/50x50/2208215.jpg?v=1676117115"
                          ng-attr-loading="{{loading || undefined}}"
                          className="ng-scope post-avatar"
                          style={{ float: "left" }}
                          src="https://almashines.s3.dualstack.ap-southeast-1.amazonaws.com/assets/images/profiles/50x50/2208215.jpg?v=1676117115"
                        />
                        
                      </as-profile-pic>
                    </span>
                    <div
                      className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label is-upgraded"
                      style={{ width: "calc(100% - 64px)" }}
                      data-upgraded=",MaterialTextfield"
                    >
                      <textarea
                        className="mdl-textfield__input resize-none ng-pristine ng-untouched ng-valid ng-empty"
                        type="text"
                        rows={3}
                        id="post_description"
                        ng-model="userNewNews"
                        onkeyup="textAreaAdjust(this)"
                        style={{ lineHeight: "20px" }}
                        defaultValue={""}
                      />
                      <label
                        className="mdl-textfield__label ng-binding"
                        htmlFor="post_description"
                      >
                        Share some news...
                      </label>
                    </div>
                    <div
                      ng-show="showPeopleTag"
                      style={{ margin: "-12px 0px 0px 60px" }}
                      className="ng-hide"
                    >
                      
                      <as-chips
                        profile-image="true"
                        query={10}
                        object-property="name"
                        object-name="People"
                        chips-selected="taggedPeople"
                        allow-new-chip="false"
                        className="ng-isolate-scope"
                      >
                        <div style={{ display: "block" }}>
                          
                          
                          <div
                            ng-if="!pref || !pref.afterChips"
                            ng-include="'./chips-div.tpl'"
                            className="ng-scope"
                          >
                            
                          </div>
                          
                        </div>
                        <pa-autocomplete
                          query={10}
                          filter
                          search-text="searchedReceiver"
                          trigger-function="add_chip(data)"
                          key-create-chip="create_new_chip(searchText)"
                          remove-last-chip="remove_last_chip()"
                          selected-finally="idSelected"
                          input-placeholder="Add people"
                          mailing-chip="mailingChip"
                          is-required-star="isrequired"
                          parentdiv-class
                          star-class
                          className="ng-isolate-scope"
                        >
                          <div
                            className="mdl-textfield mdl-js-textfield main-family is-upgraded"
                            ng-hide="hideSearchBar && !searchOpen"
                            ng-class="{'is-invalid': (isRequired && formname[fieldName].$invalid)}"
                            data-upgraded=",MaterialTextfield"
                          >
                            <input
                              id={354}
                              className="mdl-textfield__input main-family  ng-valid ng-valid-required"
                              type="text"
                              ng-disabled="paDisabled"
                              ng-model="searchText"
                              ng-attr-placeholder="{{inputActualPlaceholder || undefined}}"
                              ng-keyup="checkKeyUp($event)"
                              ng-keydown="checkKeyDown($event)"
                              ng-change="checkValueChange(); checkFraud()"
                              ng-model-options="{ debounce: 200 }"
                              autoComplete="off"
                              ng-blur="blurFn();"
                              ng-required="isRequired"
                              name
                            />
                            <label
                              className="mdl-textfield__label ng-binding"
                              htmlFor="auto"
                            >
                              Add people {" "}
                            </label>
                            <span className="mdl-textfield__error ng-binding" />
                            <div
                              className="mdl-progress mdl-js-progress mdl-progress__indeterminate progress-bar-adjust ng-hide is-upgraded"
                              ng-show="isFetching"
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
                            <div
                              className="search-alignment mdl-shadow--4dp ng-hide"
                              ng-show="suggestions.length>0"
                              style={{ zIndex: 1000 }}
                            >
                              <ul
                                className="demo-list-icon mdl-list search-dropdown-adjust paAutosuggestionsUl scrollbar-thin scrollbar-y"
                                ng-mouseenter="blurLock=true"
                                ng-mouseleave="blurLock=false"
                                style={{
                                  maxHeight: "200px",
                                  overflowY: "auto",
                                }}
                              >
                                
                              </ul>
                            </div>
                          </div>
                        </pa-autocomplete>
                        
                      </as-chips>
                    </div>
                    <div
                      style={{ marginLeft: "60px" }}
                      className="margin-left-xs-12"
                    >
                      
                      
                      <div
                        className="image-upload-div ng-hide"
                        ng-show="disableShare"
                      >
                        <div className="mdl-color--grey-100 image-upload">
                          <div
                            className="mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active image-load is-upgraded"
                            data-upgraded=",MaterialSpinner"
                          >
                            <div className="mdl-spinner__layer mdl-spinner__layer-1">
                              <div className="mdl-spinner__circle-clipper mdl-spinner__left">
                                <div className="mdl-spinner__circle" />
                              </div>
                              <div className="mdl-spinner__gap-patch">
                                <div className="mdl-spinner__circle" />
                              </div>
                              <div className="mdl-spinner__circle-clipper mdl-spinner__right">
                                <div className="mdl-spinner__circle" />
                              </div>
                            </div>
                            <div className="mdl-spinner__layer mdl-spinner__layer-2">
                              <div className="mdl-spinner__circle-clipper mdl-spinner__left">
                                <div className="mdl-spinner__circle" />
                              </div>
                              <div className="mdl-spinner__gap-patch">
                                <div className="mdl-spinner__circle" />
                              </div>
                              <div className="mdl-spinner__circle-clipper mdl-spinner__right">
                                <div className="mdl-spinner__circle" />
                              </div>
                            </div>
                            <div className="mdl-spinner__layer mdl-spinner__layer-3">
                              <div className="mdl-spinner__circle-clipper mdl-spinner__left">
                                <div className="mdl-spinner__circle" />
                              </div>
                              <div className="mdl-spinner__gap-patch">
                                <div className="mdl-spinner__circle" />
                              </div>
                              <div className="mdl-spinner__circle-clipper mdl-spinner__right">
                                <div className="mdl-spinner__circle" />
                              </div>
                            </div>
                            <div className="mdl-spinner__layer mdl-spinner__layer-4">
                              <div className="mdl-spinner__circle-clipper mdl-spinner__left">
                                <div className="mdl-spinner__circle" />
                              </div>
                              <div className="mdl-spinner__gap-patch">
                                <div className="mdl-spinner__circle" />
                              </div>
                              <div className="mdl-spinner__circle-clipper mdl-spinner__right">
                                <div className="mdl-spinner__circle" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="margin-bottom-10">
                        <span className="font-12 mdl-color-text--red ng-binding" />
                      </div>
                    </div>
                    <div
                      style={{ marginLeft: "60px" }}
                      ng-show="files_to_upload.length || filesUploading.length"
                      className="ng-hide"
                    >
                      
                      
                    </div>
                    <div
                      style={{ margin: "0px 0px 20px 62px" }}
                      className="margin-left-xs-12 flexbox flex-wrap-wrap-768"
                    >
                      <div className="flex-grow-3">
                        <div
                          className="btn-upload mdl-color-text--primary link-detail margin-top-10 ng-isolate-scope"
                          upload-button
                          url="./noticeboard_actions_c/getNewsImagesFromUser"
                          on-success="imagesUploaded(response)"
                          multiple="true"
                          param="PostNews_imgs"
                          data="imgName"
                          on-upload="disableShare=true"
                          on-complete="disableShare=false"
                          accept="image/*"
                          style={{ display: "inline-block" }}
                          ng-click="info.ImageErrorMessage=''"
                        >
                          <span
                            className="link-detail ng-binding"
                            style={{ marginRight: "12px" }}
                          >
                            <i className="icon-add_a_photo1 font-16" /> Add
                            Photos{" "}
                          </span>
                          <input
                            type="file"
                            accept="image/*"
                            multiple="multiple"
                          />
                        </div>
                        <div
                          className="btn-upload link-detail inline-block mdl-color-text--primary margin-top-10"
                          ng-click="addVideo($event);"
                        >
                          <span
                            className="link-detail ng-binding"
                            style={{ marginRight: "12px" }}
                          >
                            <i className="icon-video_collection font-16 " /> Add
                            video
                          </span>
                        </div>
                        <div
                          ngf-select="uploadFiles($files)"
                          accept=".pdf, .doc, .docx, .ppt, .pptx, .xls, .xlsx, .zip, .rar, .txt, .ai, .psd, .tiff, .svg"
                          multiple
                          className="btn-upload margin-top-10 link-detail inline-block mdl-color-text--primary"
                          ng-disabled="uploadingFiles"
                        >
                          <span
                            className="link-detail  ng-binding"
                            style={{ marginRight: "12px" }}
                          >
                            <i className="icon-attach_file" /> Attach Files
                          </span>
                        </div>
                        <span
                          className="mdl-color-text--primary link-detail margin-top-xs-10 margin-top-md-10 margin-top-10 ng-binding"
                          ng-click="showPeopleTag=true"
                          style={{
                            display: "inline-block",
                            overflow: "hidden",
                          }}
                        >
                          <i className="icon-people font-16" /> Tag people
                        </span>
                      </div>
                      <button
                        type="submit"
                        style={{ paddingTop: "0px", textTransform: "none" }}
                        className="maximize-width-xs align-self-center responsive-ep-button mdl-button font-14 ladda-button ladda-button-primary mdl-js-button mdl-button--raised mdl-button--colored mdl-typography--font-regular"
                        ng-click="shareNewsBtn('post',$event)"
                        ladda-button="shareBtnHide"
                        data-style="zoom-out"
                        data-upgraded=",MaterialButton"
                      >
                        <span className="ladda-label ng-binding">Share</span>
                        <span className="ladda-spinner" />
                      </button>
                    </div>
                  </div>
                </div>
                
                
                <div
                  ng-show="eventPoll"
                  className="mdl-tabs__panel"
                  id="polltab"
                  style={{ paddingBottom: "1px" }}
                >
                  <div style={{ margin: "10px 15px 30px" }}>
                    <span
                      style={{
                        position: "relative",
                        top: "20px",
                        marginRight: "12px",
                        float: "left",
                      }}
                    >
                      <as-profile-pic
                        name="Karmarajsinh Gohil"
                        img-config="{'urlType':'s3base','parentDiv':'post-avatar','parentDivStyle':'float:left;'}"
                        profile-src="assets/images/profiles/50x50/2208215.jpg?v=1676117115"
                        txt-config="{'parentDiv':'font-16'}"
                        className="ng-isolate-scope"
                      >
                        
                        
                        <img
                          ng-class="imgConfig.parentDiv"
                          ng-attr-style="{{imgConfig.parentDivStyle}}"
                          ng-if="profileSrc"
                          alt="KG"
                          err-src="https://alumni.gyanmanjarividyapith.edu.in/api/institutes/profile_pic_default?cid=1080"
                          ng-src="https://almashines.s3.dualstack.ap-southeast-1.amazonaws.com/assets/images/profiles/50x50/2208215.jpg?v=1676117115"
                          ng-attr-loading="{{loading || undefined}}"
                          className="ng-scope post-avatar"
                          style={{ float: "left" }}
                          src="https://almashines.s3.dualstack.ap-southeast-1.amazonaws.com/assets/images/profiles/50x50/2208215.jpg?v=1676117115"
                        />
                        
                      </as-profile-pic>
                    </span>
                    <div
                      className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label is-upgraded"
                      style={{ width: "calc(100% - 64px)" }}
                      data-upgraded=",MaterialTextfield"
                    >
                      <textarea
                        className="mdl-textfield__input resize-none ng-pristine ng-untouched ng-valid ng-empty"
                        type="text"
                        rows={3}
                        id="post_description"
                        ng-model="userPoll"
                        onkeyup="textAreaAdjust(this)"
                        style={{ lineHeight: "20px" }}
                        defaultValue={""}
                      />
                      <label
                        className="mdl-textfield__label ng-binding"
                        htmlFor="post_description"
                      >
                        Take a Poll...
                      </label>
                    </div>
                    <div
                      style={{
                        margin: "-22px 0px 22px 60px",
                        width: "calc(100% - 64px)",
                      }}
                      className="margin-left-xs-12"
                    >
                      
                      <div
                        className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label ng-scope is-upgraded"
                        style={{ width: "calc(50% - 8px)" }}
                        ng-class-even="'float-right'"
                        ng-repeat="option in numOptionsArray"
                        data-upgraded=",MaterialTextfield"
                      >
                        <input
                          className="mdl-textfield__input ng-pristine ng-untouched ng-valid ng-empty"
                          type="text"
                          id="option0"
                          ng-model="numOptionsArray[$index].content"
                        />
                        <label
                          className="mdl-textfield__label ng-binding"
                          htmlFor="option0"
                        >
                          Option 1
                        </label>
                      </div>
               
                      <div
                        className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label ng-scope float-right is-upgraded"
                        style={{ width: "calc(50% - 8px)" }}
                        ng-class-even="'float-right'"
                        ng-repeat="option in numOptionsArray"
                        data-upgraded=",MaterialTextfield"
                      >
                        <input
                          className="mdl-textfield__input ng-pristine ng-untouched ng-valid ng-empty"
                          type="text"
                          id="option1"
                          ng-model="numOptionsArray[$index].content"
                        />
                        <label
                          className="mdl-textfield__label ng-binding"
                          htmlFor="option1"
                        >
                          Option 2
                        </label>
                      </div>
                      
                    </div>
                    <div
                      style={{ marginLeft: "60px" }}
                      className="margin-left-xs-12"
                    >
                      <span
                        className="mdl-color-text--grey-600 link-detail ng-binding"
                        ng-click="increaseOptions()"
                      >
                        <i className="icon-add new-icon mdl-color-text--grey-900" />
                        Add more options
                      </span>
                      <button
                        type="submit"
                        style={{ float: "right", paddingTop: "0px" }}
                        className="maximize-width-xs margin-bottom-xs-12 mdl-button font-14 ladda-button ladda-button-primary mdl-js-button mdl-button--raised mdl-button--colored mdl-typography--font-regular float-none-xs margin-top-xs-12"
                        ng-click="shareNewsBtn('poll',$event)"
                        ladda-button="shareBtnHide"
                        data-style="zoom-out"
                        data-upgraded=",MaterialButton"
                      >
                        <span className="ladda-label ng-binding">Share</span>
                        <span className="ladda-spinner" />
                      </button>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
       
          <div
            ng-if="post_data.success != 1"
            align="center"
            className="padding-16 mdl-color--grey-300 ng-binding ng-scope"
          >
            No posts to display!
          </div>
          
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