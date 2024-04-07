import React from "react";
import img1 from '../img/img1.jpg';
import img2 from '../img/img2.jpg';
import img3 from '../img/img3.jpg';


export default function Gallery() {
  return (
    <div className="page-strip-change page-strip-change-themed mdl-color--grey-100 mdl-color--grey-100-themed ng-scope">
      <div className="mdl-grid change-size main-family padding-lr-xs-0">
        <div className="mdl-cell mdl-cell--4-col mdl-cell--3-col-tablet mdl-cell--hide-phone category-adjust">
          <div className="sub-title1 mdl-typography--font-light ng-binding">
            GALLERY CATEGORIES
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
                (
                <span
                  ng-bind="(((gallerysize.categories[1])?1*gallerysize.categories[1]:0)+((gallerysize.categories[2])?1*gallerysize.categories[2]:0)+((gallerysize.categories[4])?1*gallerysize.categories[4]:0))"
                  className="ng-binding"
                >
                  3
                </span>
                )
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
            {/* <div
              className="mdl-cell mdl-cell--12-col maximize-width-xs ng-scope margin-lr-xs-16"
              ng-class="{'margin-lr-xs-16': !albumCreate,'margin-lr-xs-0': albumCreate}"
              ng-if="post_right"
         
            >
              <div className="m-b-20" ng-show="$root.app_data.same_com_log">
                <div
                  className="maximize-width"
                  ng-hide="albumCreate"
             
                >
                  <button
                    ng-click="post_gallery_popup($event)"
                    className="mdl-button mdl-js-button mdl-button--raised mdl-button--primary mdl-js-rippleeffect mdl-typography--font-regular maximize-width create-event-button ng-binding"
                    fdprocessedid="d8cicq"
                    data-upgraded=",MaterialButton"
                  >
                    <i className="icon-add new-icon mdl-color-text--white font-18" />
                    Create an album
                  </button>
                </div>

                <div
                  ng-show="albumCreate"
                  className="mdl-card homepage-shadow-6 main-family maximize-width ng-hide"
             
                >
                  <div className="margin-30 margin-md-24 margin-xs-16">
                    <div className="margin-bottom-24 margin-bottom-xs-16">
                      <div className="mdl-color-text--grey-900 font-xs-20 font-24 mdl-typography--font-medium ng-binding">
                        Create Album
                      </div>
                    </div>
                    <form
                      name="formAlbum"
                      action="javascript:void(0)"
                      className="ng-pristine ng-valid-maxlength ng-valid ng-valid-required"
                    >
                      <div
                        className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label maximize-width margin-bottom-12 margin-bottom-xs-4 is-upgraded"
                        ng-class="{'is-invalid': firstSubmit && formAlbum.name.$error.required,'margin-bottom-12 margin-bottom-xs-4':!uploadingfiles.length,'margin-bottom-4':uploadingfiles.length}"
                        data-upgraded=",MaterialTextfield"
                      >
                        <input
                          ng-model="galleryCreateData.name"
                          className="mdl-textfield__input font-14 mdl-color-text--grey-900 ng-pristine ng-untouched ng-empty ng-valid-maxlength ng-valid ng-valid-required"
                          type="text"
                          id="album_name"
                          name="name"
                          ng-required="firstSubmit"
                          maxLength={150}
                        />
                        <label
                          className="mdl-textfield__label ng-binding"
                          htmlFor="album_name"
                        >
                          Album name
                        </label>
                      </div>
                      <div></div>
                      <div>
                        <span className="flexbox-inline maximize-width-xs maximize-width-md">
                          <div
                            ng-required="firstSubmit"
                            ng-disabled="uploadingOnGoing"
                            ngf-select="uploadImages($files)"
                            multiple
                            accept="image/*"
                            className="mdl-typography--font-regular inline-block font-16 border-radius-2 link-detail-background--primary link-detail--white mdl-color-text--primary  border-primary padding-lr-20 padding-lr-xs-16 padding-top-6 padding-bottom-6  link-detail"
                          >
                            <i className="icon-add_a_photo1 font-16 upper-icons" />
                            <span className="font-14 font-xs-12 ng-binding">
                              Add Photos
                            </span>
                          </div>
                          <div className="inline-block margin-left-24 margin-left-xs-16 ">
                            <div
                              className="mdl-typography--font-regular inline-block font-16 border-radius-2 mdl-color-text--accent link-detail-background--accent link-detail--white  border-secondary padding-lr-20 padding-top-6 padding-bottom-6 padding-lr-xs-16 link-detail"
                              ng-click="addNewVideo($event);"
                            >
                              <i className="icon-video_collection font-16 upper-icons" />
                              <span className="font-14 font-xs-12 ng-binding">
                                Add Video
                              </span>
                            </div>
                          </div>
                        </span>
                        <button
                          type="submit"
                          onclick="return false;"
                          style={{ display: "none" }}
                        />
                        <button
                          type="button"
                          style={{ float: "right", paddingTop: "0px" }}
                          className="mdl-button font-14 mdl-js-button maximize-width-xs mdl-typography--font-regular margin-top-md-16 maximize-width-md margin-top-xs-16 mdl-color--grey-300 mdl-color-text--white"
                          ng-class="{'mdl-color--grey-300 mdl-color-text--white':!galleryCreateData.appImgAr.length || !galleryCreateData.name,'ladda-button mdl-color--primary mdl-color-text--white ladda-button-primary ':!(!galleryCreateData.appImgAr.length || !galleryCreateData.name)}"
                          ng-click="createGallary();firstSubmit=true"
                          ladda-button="shareBtnHide"
                          data-style="zoom-out"
                          ng-disabled="disableShare || !galleryCreateData.appImgAr.length || !galleryCreateData.name"
                          disabled="disabled"
                          data-upgraded=",MaterialButton"
                        >
                          <span className="ladda-label ng-binding">
                            Create Album
                          </span>
                          <span className="ladda-spinner" />
                        </button>
                        <button
                          className="mdl-button margin-top-xs-10 margin-top-md-10 maximize-width-md margin-right-xs-0 maximize-width-xs float-right mdl-js-button font-14 mdl-color-text--grey-600 margin-right-12"
                          ng-click="cancelGalleryCreation()"
                          data-upgraded=",MaterialButton"
                        >
                          <span className="ng-binding">Cancel</span>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div> */}

            {/* <div
              ng-show="!load && display.length==0"
              className="mdl-color--grey-300 mdl-color-text--grey-900 padding-16 maximize-width center-alignment ng-binding ng-hide"
            >
              No gallery to display under this category!
            </div> */}

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
                    ui-sref="inapp.gallerysupport({id:8189 })"
                    className="show-gallery-on-hover cursor-pointer border-radius-12"
                    href="/galleries/8189"
                  >
                    <div
                      style={{ zIndex: 2 }}
                      ng-click="$event.stopPropagation()"
                      className="inline-block float-right margin-right-16 margin-top-16"
                      ng-show="$root.app_data.config.meta[51].allowed"
                    >
                      {/* <button
                        ng-click="shareModal(n)"
                        ng-if="!$root.isMobile"
                        className="mdl-button flexbox-inline justify-content-center align-items-center mdl-color--grey-100 mdl-color-text--black mdl-js-button mdl-button--icon font-18 float-right ng-scope"
                        data-upgraded=",MaterialButton"
                      >
                        <i className="icon-share font-20" />
                      </button> */}

                      <div
                        className="hide_menu_bg abs-pos album-share-list"
                        style={{ top: "-50px", right: "-13px" }}
                      >
                        <div className="mdl-menu__container is-upgraded">
                          <div className="mdl-menu__outline mdl-menu--bottom-right" />
                          <ul
                            className="mdl-menu mdl-js-menu mdl-menu--bottom-right"
                            htmlFor="album-share0"
                            data-upgraded=",MaterialMenu"
                          >
                            <li
                              className="mdl-menu__item share-list"
                              style={{ height: "90px" }}
                              tabIndex={-1}
                            >
                              <a
                                ng-href="https://www.facebook.com/sharer/sharer.php?u=https://alumni.gyanmanjarividyapith.edu.in/galleries/8189?source=fb"
                                onclick="shareCard(event,'fb')"
                                className="mdl-button mdl-js-button mdl-button--fab facebook-bg-color mdl-color-text--white font-16 share-social"
                                href="https://www.facebook.com/sharer/sharer.php?u=https://alumni.gyanmanjarividyapith.edu.in/galleries/8189?source=fb"
                                data-upgraded=",MaterialButton"
                              >
                                <i className="icon-facebook adjust-social-icons" />
                              </a>
                              <br />
                              <a
                                ng-href="https://twitter.com/intent/tweet?text=&url=https://alumni.gyanmanjarividyapith.edu.in/galleries/8189?source=tw"
                                onclick="shareCard(event,'twitter')"
                                className="mdl-button mdl-js-button mdl-button--fab twitter-color mdl-color-text--white font-16 share-social"
                                href="https://twitter.com/intent/tweet?text=&url=https://alumni.gyanmanjarividyapith.edu.in/galleries/8189?source=tw"
                                data-upgraded=",MaterialButton"
                              >
                                <i className="icon-x adjust-social-icons" />
                              </a>
                              &nbsp;&nbsp;
                              <a
                                ng-if="!isMobile"
                                ng-href="https://www.linkedin.com/shareArticle?mini=true&url=https://alumni.gyanmanjarividyapith.edu.in/galleries/8189?source=ld"
                                onclick="shareCard(event,'linkedIn')"
                                className="mdl-button mdl-js-button mdl-button--fab mdl-color--blue-700 mdl-color-text--white font-16 share-social ng-scope"
                                href="https://www.linkedin.com/shareArticle?mini=true&url=https://alumni.gyanmanjarividyapith.edu.in/galleries/8189?source=ld"
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
                    ui-sref="inapp.gallerysupport({id:8189 })"
                    href="/galleries/8189"
                  >
                    <img
                      className="aspect-ratio-child aspect-ratio-fit-photo border-radius-12 ng-isolate-scope"
                      lazy-load-image
                      data-src="https://img.youtube.com/vi/Ni6siBuJXdw/0.jpg"
                      src={img1}
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
                    ui-sref="inapp.gallerysupport({id:7431 })"
                    className="show-gallery-on-hover cursor-pointer border-radius-12"
                    href="/galleries/7431"
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
                            htmlFor="album-share1"
                            data-upgraded=",MaterialMenu"
                          >
                            <li
                              className="mdl-menu__item share-list"
                              style={{ height: "90px" }}
                              tabIndex={-1}
                            >
                              <a
                                ng-href="https://www.facebook.com/sharer/sharer.php?u=https://alumni.gyanmanjarividyapith.edu.in/galleries/7431?source=fb"
                                onclick="shareCard(event,'fb')"
                                className="mdl-button mdl-js-button mdl-button--fab facebook-bg-color mdl-color-text--white font-16 share-social"
                                href="https://www.facebook.com/sharer/sharer.php?u=https://alumni.gyanmanjarividyapith.edu.in/galleries/7431?source=fb"
                                data-upgraded=",MaterialButton"
                              >
                                <i className="icon-facebook adjust-social-icons" />
                              </a>
                              <br />
                              <a
                                ng-href="https://twitter.com/intent/tweet?text=&url=https://alumni.gyanmanjarividyapith.edu.in/galleries/7431?source=tw"
                                onclick="shareCard(event,'twitter')"
                                className="mdl-button mdl-js-button mdl-button--fab twitter-color mdl-color-text--white font-16 share-social"
                                href="https://twitter.com/intent/tweet?text=&url=https://alumni.gyanmanjarividyapith.edu.in/galleries/7431?source=tw"
                                data-upgraded=",MaterialButton"
                              >
                                <i className="icon-x adjust-social-icons" />
                              </a>
                              &nbsp;&nbsp;
                              <a
                                ng-if="!isMobile"
                                ng-href="https://www.linkedin.com/shareArticle?mini=true&url=https://alumni.gyanmanjarividyapith.edu.in/galleries/7431?source=ld"
                                onclick="shareCard(event,'linkedIn')"
                                className="mdl-button mdl-js-button mdl-button--fab mdl-color--blue-700 mdl-color-text--white font-16 share-social ng-scope"
                                href="https://www.linkedin.com/shareArticle?mini=true&url=https://alumni.gyanmanjarividyapith.edu.in/galleries/7431?source=ld"
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
            </div>

            <div
              className="mdl-cell mdl-cell--12-col ng-hide"
              ng-show="load"
         
            >
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
