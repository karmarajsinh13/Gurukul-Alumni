import React from "react";
import event1 from "../img/event1.jpg";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Events() {
  const [user_id, setId] = useState(sessionStorage.getItem("user"));
  const [event_participate, setEvent_participate] = useState([]);
  const [Totalevent, setTotalEvent] = useState([]);
  const [Upcomingevent, setUpcomingevent] = useState([]);
  const [Pastevent, setPastevent] = useState([]);
  const [event, setEvent] = useState([]);

  useEffect(() => {
    getEvent();
    getEvent_participate();
    getTotalevent();
    getUpcomingevent();
    getPastevent();
  }, []);

  const getTotalevent = async () => {
    try {
      const res = await axios.get("http://localhost:3000/gurukulalumni/event");
      setEvent(res.data);
      setTotalEvent(res.data.length);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  const getUpcomingevent = async () => {
    try {
      const res = await axios.get("http://localhost:3000/gurukulalumni/upcomingevent");
  
      setUpcomingevent(res.data.length);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  const getPastevent = async () => {
    try {
      const res = await axios.get("http://localhost:3000/gurukulalumni/pastevent");
    
      setPastevent(res.data.length);
      setPastevent(res.data.data);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  const getEvent = async () => {
    const res = await axios.get("http://localhost:3000/gurukulalumni/event");
    setEvent(res.data);

    console.log(res.data);
  };
  
  const deleteEvent = async (event_id) => {
    let ans = window.confirm("are you sure?");
    if (ans) {
      const res = await axios.delete(
        "http://localhost:3000/gurukulalumni/event/" + event_id
      );
      console.log(res.data);
      alert(res.data);
      getEvent();
    }
  };
  const getEvent_participate = async (ep_id) => {
   
    const res = await axios.get(
      "http://localhost:3000/gurukulalumni/event_participate/" + ep_id
    );
    setEvent_participate(res.data);

};
  return (
    <div className="page-strip-change page-strip-change-themed mdl-color--grey-100 mdl-color--grey-100-themed">
      <div className="mdl-grid change-size main-family">
        <div className="mdl-cell mdl-cell--4-col mdl-cell--3-col-tablet mdl-cell--hide-phone category-adjust">
          <div className="mdl-color--grey-300 margin-bottom-24">
            <input
              className="mdl-typography--font-light search-input-box ng-pristine ng-untouched ng-valid ng-empty"
              type="text"
              placeholder="Search by title..."
              ng-keypress="checkIfEnterKeyWasPressed($event)"
              ng-model="search.title"
            />
            <span
              className="category-count search-icon center-alignment"
              style={{ width: "48px" }}
              ng-click="eventsSearch()"
            >
              <i
                className="icon-search mdl-color-text--white font-16"
                style={{ verticalAlign: "middle" }}
              />
            </span>
          </div>
          <div className="sub-title1 mdl-typography--font-light ng-binding">
            EVENT CATEGORIES
          </div>
          <ul
            ng-show="!tag"
            style={{ listStyle: "none", margin: "0px", padding: "0px" }}
            className
          >
            <li className="mdl-color--grey-300 font-16 category-list active-category">
              <span className="category-text mdl-typography--font-medium category-overflow ng-binding">
                All Events
              </span>
              <span className="mdl-color-text--grey-600 category-count ng-binding">
                ({Totalevent})
              </span>
            </li>
            <li
              className="mdl-color--grey-300 font-16 category-list"
              ng-click="eventsFetch('past', 1)"
              ng-class="{'active-category': tabType == 'past'}"
            >
              <span className="category-text mdl-typography--font-medium category-overflow ng-binding">
                Past Events
              </span>
              <span className="mdl-color-text--grey-600 category-count ng-binding">
                ({Pastevent})
              </span>
            </li>
            <li
              className="mdl-color--grey-300 font-16 category-list"
              ng-click="eventsFetch('upcoming', 1)"
              ng-class="{'active-category': tabType == 'upcoming'}"
            >
              <span className="category-text mdl-typography--font-medium category-overflow ng-binding">
                Upcoming Events
              </span>
              <span className="mdl-color-text--grey-600 category-count ng-binding">
                ({Upcomingevent})
              </span>
            </li>
            {/* <li
              ng-show="categories"
              className="mdl-color--grey-300 font-16 category-list ng-hide"
              ng-click="showCategoriesTab=!showCategoriesTab;"
              ng-class="{'active-category': categorySelected}"
            >
              <span className="category-text mdl-typography--font-medium category-overflow ng-binding">
                Categories
              </span>
            </li> */}
            <div
              ng-show="categories && showCategoriesTab"
              style={{ margin: 0, padding: "15px 0 18px" }}
              className="ng-hide"
            ></div>

            <li
              ng-if="$root.app_data.same_com_log"
              className="mdl-color--grey-300 font-16 category-list ng-scope"
              ng-click="eventsFetch('attended', 1)"
              ng-class="{'active-category': tabType == 'attended'}"
            >
              <span className="category-text mdl-typography--font-medium category-overflow ng-binding">
                Attended by me
              </span>
              <span className="mdl-color-text--grey-600 category-count ng-binding">
                (0)
              </span>
            </li>
          </ul>
        </div>

        <div
          className="mdl-cell mdl-cell--4-col margin-bottom-12 mdl-cell--hide-desktop mdl-cell--hide-tablet"
          style={{ borderRadius: "4px" }}
          ng-init="categoriesName='All Events'"
        >
          <div className="flexbox">
            <div className="flex-grow-3">
              <div className="border-light-grey mdl-color-white">
                <input
                  className="mdl-color--white mdl-typography--font-light padding-lr-md-6 search-input-box ng-pristine ng-untouched ng-valid ng-empty"
                  type="text"
                  placeholder="Search by title..."
                  ng-keypress="checkIfEnterKeyWasPressed($event)"
                  ng-model="search.title"
                  style={{ height: "36px" }}
                />
                <span
                  className="category-count search-icon center-alignment"
                  style={{ width: "48px", height: "36px", padding: "8px 0px" }}
                  ng-click="eventsSearch()"
                >
                  <i
                    className="icon-search mdl-color-text--white font-16"
                    style={{ verticalAlign: "middle" }}
                  />
                </span>
              </div>
            </div>
            <div className="align-self-center margin-left-4">
              <button
                style={{ maxHeight: "35px" }}
                className="float-right mdl-button mdl-js-button mdl-typography--font-regular mdl-color-text--grey-600 border-light-grey margin-left-24 margin-left-xs-6 font-12 mdl-button--icon border-light-grey-600 mdl-color--white "
                id="view_categories"
                ng-click="showCategories=!showCategories"
                data-upgraded=",MaterialButton"
              >
                <i className="icon icon-filter_list" />
              </button>
            </div>
          </div>
          <ul
            className="mdl-list mdl-card maximize-width categories-animate ng-hide"
            id="phone_categories"
            ng-show="!tag && showCategories"
            style={{ margin: "0px", minHeight: "0px" }}
          >
            <li
              className="mdl-list__item category-list-small active-category"
              style={{ cursor: "pointer" }}
              ng-click="eventsFetch('all', 1);categoriesName='All Events'"
              ng-class="{'active-category': tabType == 'all'}"
            >
              <span className="mdl-list__item-primary-content ng-binding">
                All Events
              </span>
              <span
                className="mdl-color-text--grey-600 ng-binding"
                style={{ float: "right" }}
              >
                (4)
              </span>
            </li>
            <li
              className="mdl-list__item category-list-small"
              style={{ cursor: "pointer" }}
              ng-click="eventsFetch('past', 1);categoriesName='Past Events'"
              ng-class="{'active-category': tabType == 'past'}"
            >
              <span className="mdl-list__item-primary-content ng-binding">
                Past Events
              </span>
              <span
                className="mdl-color-text--grey-600 ng-binding"
                style={{ float: "right" }}
              >
                (4)
              </span>
            </li>
            <li
              className="mdl-list__item category-list-small"
              style={{ cursor: "pointer" }}
              ng-click="eventsFetch('upcoming', 1);categoriesName='Upcoming Events'"
              ng-class="{'active-category': tabType == 'upcoming'}"
            >
              <span className="mdl-list__item-primary-content ng-binding">
                Upcoming Events
              </span>
              <span
                className="mdl-color-text--grey-600 ng-binding"
                style={{ float: "right" }}
              >
                (0)
              </span>
            </li>

            <li
              ng-show="$root.app_data.same_com_log"
              className="mdl-list__item category-list-small"
              style={{ cursor: "pointer" }}
              ng-click="eventsFetch('created', 1);categoriesName='Created By me'"
              ng-class="{'active-category': tabType == 'created'}"
            >
              <span className="mdl-list__item-primary-content ng-binding">
                Created by me
              </span>
              <span
                className="mdl-color-text--grey-600 ng-binding"
                style={{ float: "right" }}
              >
                (0)
              </span>
            </li>
            <li
              ng-show="$root.app_data.same_com_log"
              className="mdl-list__item category-list-small"
              style={{ cursor: "pointer" }}
              ng-click="eventsFetch('attended', 1);categoriesName='Attended by me'"
              ng-class="{'active-category': tabType == 'attended'}"
            >
              <span className="mdl-list__item-primary-content ng-binding">
                Attended by me
              </span>
              <span
                className="mdl-color-text--grey-600 ng-binding"
                style={{ float: "right" }}
              >
                (1)
              </span>
            </li>
            <li
              className="mdl-list__item category-list-small"
              style={{ cursor: "pointer" }}
              ng-click="eventsFetch('draft', 1);categoriesName='Draft Events'"
              ng-class="{'active-category': tabType == 'draft'}"
            >
              <span className="mdl-list__item-primary-content ng-binding">
                Draft Events
              </span>
              <span
                className="mdl-color-text--grey-600 ng-binding"
                style={{ float: "right" }}
              >
                ()
              </span>
            </li>
          </ul>
        </div>

        <div className="mdl-cell mdl-cell--8-col mdl-cell--5-col-tablet">
          <div className="events-top" />
          <div
            ng-show="DisplayedEvents"
            className="mdl-grid ng-isolate-scope"
            style={{ padding: "0px" }}
            infinite-scroll="loadMore()"
            infinite-scroll-disabled="lock[currnt_criteria] || no_more_data[currnt_criteria]"
            infinite-scroll-distance={1}
            id="event_cards"
          >
            {event.map((event) => (
              <div
                className="mdl-cell--12-col mdl-card homepage-shadow-6 maximize-width event-card-adjust ng-scope"
                ng-repeat="(key1, event) in DisplayedEvents"
                style={{ padding: "8px" }}
              >
                <div
                  className="mdl-grid padding-xs-0"
                  style={{ margin: "0px" }}
                >
                  <div className="flex-grow-3 flexbox mdl-cell mdl-cell--5-col mdl-cell--3-col-tablet">
                    <div
                      ui-sref="inapp.event_single({eventId: '7781'})"
                      className="center-alignment align-self-center aspect-ratio-16-10-parent border-box flex-grow-3 rel-pos"
                      style={{ contain: "content" }}
                      href="/events/7781"
                    >
                      <div
                        className="aspect-ratio-child border-radius-2 blur-background-3"
                        ng-attr-style="background-image: url('{{event.event_logo}}');background-repeat: no-repeat;background-position: center;background-size: cover;"
                        style={{
                          backgroundImage:
                            'url("https://almashines.s3.dualstack.ap-southeast-1.amazonaws.com/assets/images/eventlogos/sizea/20362721674789288.jpg")',
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "center",
                          backgroundSize: "cover",
                        }}
                      ></div>
                      <div
                        className="border-radius-2 abs-pos cursor-pointer"
                        style={{ top: 0, width: "100%", height: "100%" }}
                      >
                        <div
                          className="abs-pos ng-isolate-scope"
                          style={{ top: "16px", right: "16px", zIndex: 99 }}
                          event-live-chip="event"
                        ></div>

                        <img
                          ng-if="event.event_logo"
                          className="abs-pos ng-scope"
                          style={{
                            maxWidth: "100%",
                            maxHeight: "100%",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            margin: "auto",
                          }}
                          src={`http://localhost:3000/uploads/${event.image}`}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex-dir-column flex-grow-3 flexbox mdl-cell mdl-cell--5-col-tablet mdl-cell--7-col">
                    <table className="mdl-typography--font-medium font-18 maximize-width m-b-20">
                      <tbody>
                        <tr>
                          <td>
                            <div
                              ui-sref="inapp.event_single({eventId: '7781'})"
                              className="link-detail mdl-color-text--grey-900 font-18 font-md-16 font-xs-14 "
                              href="/events/7781"
                            >
                              <span
                                style={{
                                  display: "-webkit-box",
                                  WebkitLineClamp: 1,
                                  WebkitBoxOrient: "vertical",
                                  overflow: "hidden",
                                }}
                                className="ng-binding"
                              >
                                {event.ename}
                              </span>
                            </div>
                          </td>
                          <td style={{ verticalAlign: "top" }}>
                            <span className="rel-pos">
                              <div
                                className="hide_menu_bg share-list-div"
                                ng-show="$root.app_data.config.meta[51].allowed"
                              >
                                <div className="mdl-menu__container is-upgraded">
                                  <div className="mdl-menu__outline mdl-menu--bottom-right" />
                                  <ul
                                    className="mdl-menu mdl-js-menu mdl-menu--bottom-right"
                                    htmlFor="side-menu0"
                                    data-upgraded=",MaterialMenu"
                                  >
                                    <li
                                      className="mdl-menu__item share-list"
                                      style={{ height: "90px" }}
                                      tabIndex={-1}
                                    >
                                      <a
                                        ng-href="https://www.facebook.com/sharer/sharer.php?u=https://alumni.gyanmanjarividyapith.edu.in/events/7781?source=fb"
                                        onclick="shareCard(event,'fb')"
                                        className="mdl-button mdl-js-button mdl-button--fab facebook-bg-color mdl-color-text--white font-16 share-social"
                                        href="https://www.facebook.com/sharer/sharer.php?u=https://alumni.gyanmanjarividyapith.edu.in/events/7781?source=fb"
                                        data-upgraded=",MaterialButton"
                                      >
                                        <i className="icon-facebook adjust-social-icons" />
                                      </a>
                                      <br />
                                      <a
                                        ng-href="https://www.linkedin.com/shareArticle?mini=true&url=https://alumni.gyanmanjarividyapith.edu.in/events/7781?source=ld"
                                        onclick="shareCard(event,'linkedIn')"
                                        className="mdl-button mdl-js-button mdl-button--fab mdl-color--blue-700 mdl-color-text--white font-16 share-social"
                                        href="https://www.linkedin.com/shareArticle?mini=true&url=https://alumni.gyanmanjarividyapith.edu.in/events/7781?source=ld"
                                        data-upgraded=",MaterialButton"
                                      >
                                        <i className="icon-linkedin adjust-social-icons" />
                                      </a>
                                      &nbsp;&nbsp;
                                      <a
                                        ng-href="https://www.addtoany.com/add_to/whatsapp?linkurl=https://alumni.gyanmanjarividyapith.edu.in/events/7781?source=wp"
                                        onclick="shareCard(event,'whatsApp')"
                                        className="mdl-button mdl-js-button mdl-button--fab whatsapp-color mdl-color-text--white font-16 share-social"
                                        href="https://www.addtoany.com/add_to/whatsapp?linkurl=https://alumni.gyanmanjarividyapith.edu.in/events/7781?source=wp"
                                        data-upgraded=",MaterialButton"
                                      >
                                        <i
                                          className="icon-whatsapp2 adjust-social-icons"
                                          style={{
                                            fontSize: "20px",
                                            top: "4px",
                                          }}
                                        />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="left-alignment flex-grow-3 flexbox flex-dir-column">
                      <div
                        className="mdl-color-text--grey-600 rel-pos"
                        style={{ margin: "0px 0px 7px 32px" }}
                        ng-show="event.sdate"
                      >
                        <i
                          className="icon-access_time new-icon font-16 mdl-color-text--grey-900"
                          style={{ position: "absolute", left: "-32px" }}
                        />
                        <span className="font-14 font-xs-12 ng-binding" />
                        <span className="font-14 font-xs-12 ng-binding">
                         Event Date : {event.date}
                        </span>
                       
                      </div>
                      <div
                        className="mdl-color-text--grey-600 ng-hide"
                        style={{ margin: "0px 0px 7px 32px" }}
                        ng-show="event.fdate"
                      >
                        <span className="font-14 font-xs-12 ng-binding">
                        Starts:- {event.start_time}
                        </span>
         
                      </div>
                      <div
                        className="mdl-color-text--grey-600 ng-hide"
                        style={{ margin: "0px 0px 7px 32px" }}
                        ng-show="event.fdate"
                      >
                        <span className="font-14 font-xs-12 ng-binding">
                          Ends:- {event.end_time}
                        </span>
         
                      </div>
                      <div className="mdl-color-text--grey-600 font-16 flexbox flex-dir-row flex-wrap-wrap flex-gap-16 align-items-center">
                        <div
                          className
                          ng-show="(event.location || event.city_name) && event.mode!=1"
                        >
                          {/* <i
                          className="icon-place new-icon font-16 mdl-color-text--grey-900"
                     
                        /> */}
                          <span
                            ng-show="event.location"
                            className="font-14 font-xs-12 ng-binding"
                          >
                           {event.locationn}
                          </span>
                        </div>
                  
                      </div>
                      <div className="padding-top-12 align-items-flex-end flex-gap-8 flex-grow-3 flexbox">
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
                        {user_id ? (
                          <Link
                            className="event-card-view-btn float-right float-none-xs maximize-width-xs margin-top-xs-12 margin-top-md-12 mdl-button mdl-js-button mdl-button--raised mdl-button--colored mdl-js-rippleeffect mdl-typography--font-regular maximize-width-xs min-width-button font-16 font-xs-14 ng-binding"
                            to={`/ViewEventDetail/` + event.event_id}
                          >
                            View
                          </Link>
                        ) : (
                          <Link
                            to="/Login"
                            className="event-card-view-btn float-right float-none-xs maximize-width-xs margin-top-xs-12 margin-top-md-12 mdl-button mdl-js-button mdl-button--raised mdl-button--colored mdl-js-rippleeffect mdl-typography--font-regular maximize-width-xs min-width-button font-16 font-xs-14 ng-binding"
                          >
                            View
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}


          </div>
      
        </div>
      </div>
    </div>
  );
}
