import React from "react";
import img1 from "../img/img1.jpg";
import img2 from "../img/img2.jpg";
import img3 from "../img/img3.jpg";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Gallery() {
  const [gallerys, setgallery] = useState([]);
  const [Totalimages, setTotalimages] = useState([]);

  useEffect(() => {
    getgallery();
    getTotalimages();
  }, []);
  const getTotalimages = async () => {
    try {
      const res = await axios.get("http://localhost:3000/gurukulalumni/gallerys");
      setgallery(res.data);
  
      setTotalimages(res.data.length);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  const getgallery = async () => {
    const res = await axios.get("http://localhost:3000/gurukulalumni/gallerys");
    setgallery(res.data);
    console.log(res.data);
  };
  const deletegallery = async (img_id) => {
    let ans = window.confirm("are you sure?");
    if (ans) {
      const res = await axios.delete(
        "http://localhost:3000/gurukulalumni/gallerys/" + img_id
      );
      console.log(res.data);
      alert(res.data);
      getgallery();
    }
  };
  return (
    <div className="page-strip-change page-strip-change-themed mdl-color--grey-100 mdl-color--grey-100-themed ng-scope">
      <div className="mdl-grid change-size main-family padding-lr-xs-0">
        <div className="mdl-cell mdl-cell--4-col mdl-cell--3-col-tablet mdl-cell--hide-phone category-adjust">
          <div className="sub-title1 mdl-typography--font-light ng-binding">
            GALLERY
          </div>

          <ul
            ng-if="!tag"
            style={{ listStyle: "none", margin: "0px", padding: "0px" }}
            className="ng-scope"
          >
            <li
              className="mdl-color--grey-300 font-16 category-list  active-category"
              ng-click="fetch_galleries('all',[1,2],0,false)"
              ng-class="{'active-category': currC=='all'}"
            >
              <span className="category-text mdl-typography--font-medium category-overflow ng-binding">
                All
              </span>
              <span className="mdl-color-text--grey-600 category-count ">
                ({Totalimages})
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
            </li>
            <div
              ng-show="categories && showCategoriesTab"
              className="ng-hide"
            ></div> */}

            {/* <li
              className="mdl-color--grey-300 font-16 category-list  ng-scope"
              ng-class="{'active-category': currC=='createdByMe'}"
              ng-click="fetch_galleries('createdByMe',[1,2,3],1,false)"
              ng-if="$root.app_data.same_com_log"
            >
              <span className="category-text mdl-typography--font-medium category-overflow ng-binding">
                Created by me
              </span>
              <span className="mdl-color-text--grey-600 category-count ">
                (<span className="ng-binding">0</span>)
              </span>
            </li> */}
          </ul>
        </div>

        <div
          className="mdl-cell mdl-cell--4-col mdl-cell--hide-desktop mdl-cell--hide-tablet"
          style={{ borderRadius: "4px" }}
          ng-init="categoriesName='All Albums'"
        >
          <button
            ng-click="info.showCategory=!info.showCategory"
            className="mdl-button mdl-js-button mdl-typography--font-regular maximize-width mdl-color-text--primary mdl-color--white ng-binding"
            style={{ border: "1px solid" }}
            data-upgraded=",MaterialButton"
          >
            All Albums
            <i
              className="icon-expand_more font-16"
              style={{ marginLeft: "4px" }}
            />
          </button>
          <ul
            className="mdl-list mdl-card homepage-shadow-6 maximize-width categories-animate ng-hide"
            id="phone_categories"
            ng-show="!tag && info.showCategory"
            style={{ margin: "0px", minHeight: "0px" }}
          >
            <li
              className="mdl-list__item category-list-small active-category"
              style={{ cursor: "pointer" }}
              ng-click="fetch_galleries('all',[1,2],0,false); categoriesName='All Albums';info.showCategory=!info.showCategory"
              ng-class="{'active-category': currC=='all'}"
            >
              <span className="mdl-list__item-primary-content ng-binding">
                All
              </span>
              <span
                className="mdl-color-text--grey-600"
                style={{ float: "right" }}
              >
                <span className="mdl-color-text--grey-600 category-count ">
                  (
                  <span
                    ng-bind="(((gallerysize.categories[1])?1*gallerysize.categories[1]:0)+((gallerysize.categories[2])?1*gallerysize.categories[2]:0)+((gallerysize.categories[4])?1*gallerysize.categories[4]:0))"
                    className="ng-binding"
                  >
                    3
                  </span>
                  )
                </span>
              </span>
            </li>

            {/* <li
              ng-if="$root.app_data.same_com_log"
              className="mdl-list__item category-list-small ng-scope"
              style={{ cursor: "pointer" }}
              ng-click="fetch_galleries('createdByMe',0,1,false); categoriesName='My Albums';info.showCategory=!info.showCategory"
              ng-class="{'active-category': currC=='createdByMe'}"
            >
              <span className="mdl-list__item-primary-content ng-binding">
                Created by me
              </span>
              <span
                className="mdl-color-text--grey-600"
                style={{ float: "right" }}
              >
                (<span className="ng-binding">0</span>)
              </span>
            </li> */}
          </ul>
        </div>
     
        <div className="mdl-cell mdl-cell--8-col maximize-width-xs margin-lr-xs-0 mdl-cell--5-col-tablet">
          <div
            className="mdl-grid padding-zero ng-isolate-scope"
            infinite-scroll="loadMoreGallery()"
            infinite-scroll-disabled="load || noData"
            infinite-scroll-distance={1}
          >
            
   {gallerys.map((gallery) => (
            <div
              className="mdl-cell mdl-cell--6-col-desktop mdl-cell--4-col-tablet maximize-width ng-scope"
              ng-repeat="(key,n) in display"
              ng-hide="$root.as_ed.bu.uids.indexOf(2098623)>-1"
            >
           <Link to={`/Viewgalleryimg/` + gallery.img_id}>
              <div className="margin-lr-8 margin-lr-md-0">
                <div
                  style={{ marginBottom: "8px" }}
                  className="aspect-ratio-1-1-parent"
                  
                >
                  

                
                    <img
                      className="aspect-ratio-child aspect-ratio-fit-photo border-radius-12 ng-isolate-scope"
                      src={`http://localhost:3000/uploads/${gallery.img}`}
                    />
              
                </div>
                {/* <div className="maximize-width border-box padding-tb-8 padding-lr-0 padding-tb-xs-0">
                  <div className="flexbox">
                    <div className="flex-grow-3">
                      <div className="flexbox mdl-color-text--grey-900">
                        <div className="flex-grow-3">
                          <a
                            className="mdl-typography--font-medium mdl-color-text--grey-900 font-16 font-xs-14 link-detail ng-binding"
                            ui-sref="inapp.gallerysupport({id:8189 })"
                            style={{
                              WebkitLineClamp: 2,
                              display: "-webkit-box",
                              WebkitBoxOrient: "vertical",
                              wordWrap: "anywhere",
                              whiteSpace: "normal",
                              overflow: "hidden",
                              maxWidth: "80%",
                            }}
                            href="/galleries/8189"
                          >
                            Navratri 2k23
                          </a>
                        </div>
                        <div className="font-14 font-xs-12 padding-left-10 ng-binding">
                          1{" "}
                          <ng-pluralize
                            count="n.no_photos"
                            when="{'one': item, 'other': items}"
                          >
                            Item
                          </ng-pluralize>
                        </div>
                      </div>
                      <div className="flexbox padding-top-4"></div>
                    </div>
                  </div>
                </div> */}
              </div>
              </Link>
            </div>
            ))}

            {/* <div
              className="mdl-cell mdl-cell--6-col-desktop mdl-cell--4-col-tablet maximize-width ng-scope"
           
            >
              <div className="margin-lr-8 margin-lr-md-0">
                <div
                  style={{ marginBottom: "8px" }}
                  className="aspect-ratio-1-1-parent"
                  ng-click="albumviews(n.id)"
                >
                

                  <a
                    ui-sref="inapp.gallerysupport({id:7431 })"
                    href="/galleries/7431"
                  >
                    <img
                      className="aspect-ratio-child aspect-ratio-fit-photo border-radius-12 ng-isolate-scope"
                      lazy-load-image
                      data-src="https://almashines.s3.dualstack.ap-southeast-1.amazonaws.com/assets/images/gallary_photos/t1663236556_DLx5UecWbC.jpg"
                      src={img2}
                      data-loaded="true"
                    />
                  </a>
                </div>
                <div className="maximize-width border-box padding-tb-8 padding-lr-0 padding-tb-xs-0">
                  <div className="flexbox">
                    <div className="flex-grow-3">
                      <div className="flexbox mdl-color-text--grey-900">
                        <div className="flex-grow-3">
                          <a
                            className="mdl-typography--font-medium mdl-color-text--grey-900 font-16 font-xs-14 link-detail ng-binding"
                            ui-sref="inapp.gallerysupport({id:7431 })"
                            style={{
                              WebkitLineClamp: 2,
                              display: "-webkit-box",
                              WebkitBoxOrient: "vertical",
                              wordWrap: "anywhere",
                              whiteSpace: "normal",
                              overflow: "hidden",
                              maxWidth: "80%",
                            }}
                            href="/galleries/7431"
                          >
                            Flash 2022 Album
                          </a>
                        </div>
                        <div className="font-14 font-xs-12 padding-left-10 ng-binding">
                          1{" "}
                          <ng-pluralize
                            count="n.no_photos"
                            when="{'one': item, 'other': items}"
                          >
                            Item
                          </ng-pluralize>
                        </div>
                      </div>
                      <div className="flexbox padding-top-4"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="mdl-cell mdl-cell--6-col-desktop mdl-cell--4-col-tablet maximize-width ng-scope"
              ng-repeat="(key,n) in display"
              ng-hide="$root.as_ed.bu.uids.indexOf(2098623)>-1"
            >
              <div className="margin-lr-8 margin-lr-md-0">
                <div
                  style={{ marginBottom: "8px" }}
                  className="aspect-ratio-1-1-parent"
                  ng-click="albumviews(n.id)"
                >
                  <div
                    ui-sref="inapp.gallerysupport({id:7429 })"
                    className="show-gallery-on-hover cursor-pointer border-radius-12"
                    href="/galleries/7429"
                  >
                    <div
                      style={{ zIndex: 2 }}
                      ng-click="$event.stopPropagation()"
                      className="inline-block float-right margin-right-16 margin-top-16"
                      ng-show="$root.app_data.config.meta[51].allowed"
                    >
                      <button
                        ng-click="shareModal(n)"
                        ng-if="!$root.isMobile"
                        className="mdl-button flexbox-inline justify-content-center align-items-center mdl-color--grey-100 mdl-color-text--black mdl-js-button mdl-button--icon font-18 float-right ng-scope"
                        data-upgraded=",MaterialButton"
                      >
                        <i className="icon-share font-20" />
                      </button>

                      <div
                        className="hide_menu_bg abs-pos album-share-list"
                        style={{ top: "-50px", right: "-13px" }}
                      >
                        <div className="mdl-menu__container is-upgraded">
                          <div className="mdl-menu__outline mdl-menu--bottom-right" />
                          <ul
                            className="mdl-menu mdl-js-menu mdl-menu--bottom-right"
                            htmlFor="album-share2"
                            data-upgraded=",MaterialMenu"
                          >
                            <li
                              className="mdl-menu__item share-list"
                              style={{ height: "90px" }}
                              tabIndex={-1}
                            >
                              <a
                                ng-href="https://www.facebook.com/sharer/sharer.php?u=https://alumni.gyanmanjarividyapith.edu.in/galleries/7429?source=fb"
                                onclick="shareCard(event,'fb')"
                                className="mdl-button mdl-js-button mdl-button--fab facebook-bg-color mdl-color-text--white font-16 share-social"
                                href="https://www.facebook.com/sharer/sharer.php?u=https://alumni.gyanmanjarividyapith.edu.in/galleries/7429?source=fb"
                                data-upgraded=",MaterialButton"
                              >
                                <i className="icon-facebook adjust-social-icons" />
                              </a>
                              <br />
                              <a
                                ng-href="https://twitter.com/intent/tweet?text=&url=https://alumni.gyanmanjarividyapith.edu.in/galleries/7429?source=tw"
                                onclick="shareCard(event,'twitter')"
                                className="mdl-button mdl-js-button mdl-button--fab twitter-color mdl-color-text--white font-16 share-social"
                                href="https://twitter.com/intent/tweet?text=&url=https://alumni.gyanmanjarividyapith.edu.in/galleries/7429?source=tw"
                                data-upgraded=",MaterialButton"
                              >
                                <i className="icon-x adjust-social-icons" />
                              </a>
                              &nbsp;&nbsp;
                              <a
                                ng-if="!isMobile"
                                ng-href="https://www.linkedin.com/shareArticle?mini=true&url=https://alumni.gyanmanjarividyapith.edu.in/galleries/7429?source=ld"
                                onclick="shareCard(event,'linkedIn')"
                                className="mdl-button mdl-js-button mdl-button--fab mdl-color--blue-700 mdl-color-text--white font-16 share-social ng-scope"
                                href="https://www.linkedin.com/shareArticle?mini=true&url=https://alumni.gyanmanjarividyapith.edu.in/galleries/7429?source=ld"
                                data-upgraded=",MaterialButton"
                              >
                                <i className="icon-linkedin adjust-social-icons" />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <a
                    ui-sref="inapp.gallerysupport({id:7429 })"
                    href="/galleries/7429"
                  >
                    <img
                      className="aspect-ratio-child aspect-ratio-fit-photo border-radius-12 ng-isolate-scope"
                      lazy-load-image
                      data-src="https://almashines.s3.dualstack.ap-southeast-1.amazonaws.com/assets/images/gallary_photos/t1663235048_bTwJ7CyuQR.jpg"
                      src={img3}
                      data-loaded="true"
                    />
                  </a>
                </div>
                <div className="maximize-width border-box padding-tb-8 padding-lr-0 padding-tb-xs-0">
                  <div className="flexbox">
                    <div className="flex-grow-3">
                      <div className="flexbox mdl-color-text--grey-900">
                        <div className="flex-grow-3">
                          <a
                            className="mdl-typography--font-medium mdl-color-text--grey-900 font-16 font-xs-14 link-detail ng-binding"
                            ui-sref="inapp.gallerysupport({id:7429 })"
                            style={{
                              WebkitLineClamp: 2,
                              display: "-webkit-box",
                              WebkitBoxOrient: "vertical",
                              wordWrap: "anywhere",
                              whiteSpace: "normal",
                              overflow: "hidden",
                              maxWidth: "80%",
                            }}
                            href="/galleries/7429"
                          >
                            Ganpati Utsav Celebration at Gyanmanjari
                          </a>
                        </div>
                        <div className="font-14 font-xs-12 padding-left-10 ng-binding">
                          1{" "}
                          <ng-pluralize
                            count="n.no_photos"
                            when="{'one': item, 'other': items}"
                          >
                            Items
                          </ng-pluralize>
                        </div>
                      </div>
                      <div className="flexbox padding-top-4"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}

            <div className="mdl-cell mdl-cell--12-col ng-hide" ng-show="load">
              <div
                id="p2"
                className="mdl-progress mdl-js-progress mdl-progress__indeterminate maximize-width is-upgraded"
                data-upgraded=",MaterialProgress"
              >
                {/* <div className="progressbar bar bar1" style={{ width: "0%" }} />
                <div className="bufferbar bar bar2" style={{ width: "100%" }} />
                <div className="auxbar bar bar3" style={{ width: "0%" }} /> */}
              </div>
            </div>
          </div>
        </div>
   
      </div>
    </div>
  );
}
