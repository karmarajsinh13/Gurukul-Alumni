import React from "react";
import gurukullogo from "../gurukullogo.png";
import { Link } from "react-router-dom";
import {
  RiFacebookBoxFill,
  RiInstagramFill,
  RiTwitterFill,
  RiYoutubeFill,
} from "react-icons/ri";

export default function Footer() {
  return (
    // <div>
    //   <footer
    //    style={{
    //     backgroundColor: "#2d2d2d",
    //     color: "white",
    //     paddingTop: "1rem",
    //     position: "fixed",
    //     left: 0,
    //     right: 0,
    //     bottom: "27px"
    //   }}
    //   >
    //     <div id="social-test">
    //       <ul class="social">
    //         <li>
    //           <i class="fa fa-facebook" aria-hidden="true"></i>
    //         </li>
    //         <li>
    //           <i class="fa fa-twitter" aria-hidden="true"></i>
    //         </li>
    //         <li>
    //           <i class="fa fa-instagram" aria-hidden="true"></i>
    //         </li>
    //       </ul>
    //     </div>
    //     <nav style={{ width: "100%" }}>
    //       <ul
    //         style={{
    //           display: "flex",
    //           justifyContent: "center",
    //           gap: "0.75rem",
    //           marginBottom: "25px",
    //           padding: "0"
    //         }}
    //       >
    //         <li>
    //           <a href="#" style={{ textDecoration: "none" }}>
    //             Home
    //           </a>
    //         </li>
    //         <li>
    //           <a href="#" style={{ textDecoration: "none" }}>
    //             About
    //           </a>
    //         </li>
    //         <li>
    //           <a href="#" style={{ textDecoration: "none" }}>
    //             Contact
    //           </a>
    //         </li>
    //         <li>
    //           <a href="#" style={{ textDecoration: "none" }}>
    //             Sitemap
    //           </a>
    //         </li>
    //         <li>
    //           <a href="#" style={{ textDecoration: "none" }}>
    //             Terms
    //           </a>
    //         </li>
    //         <li>
    //           <a href="#" style={{ textDecoration: "none" }}>
    //             Privacy
    //           </a>
    //         </li>
    //       </ul>
    //     </nav>
    //   </footer>
    //   <div
    //     style={{
    //       textAlign: "center",
    //       position: "fixed",
    //       left: 0,
    //       right: 0,
    //       bottom: "2px",
    //     }}
    //   >
    //     <p style={{ textAlign: "center", marginTop: "0.5rem" , opacity: "0.45" }}>
    //       © 2024 Black Sparrow Production. All rights reserved.
    //     </p>
    //     {/* <p style={{ fontSize: '0.875rem' }}>Powered by</p>
    //       <h2 style={{ fontSize: '1.125rem', fontWeight: 'bold' }}>Black Sparrow Production</h2> */}
    //   </div>
    // </div>
    <>
      <portal-footer
        ng-hide="page.metadata.disable_footer"
        className="ng-isolate-scope"
      >
        <div
          className="mdl-color--grey-900"
          ng-attr-style="{{ (metadata_outer_footer_design.tConfiguration.parentDivStyles) ? metadata_outer_footer_design.tConfiguration.parentDivStyles : ''}}"
        >
          <footer
            className="mdl-mega-footer mdl-grid change-size mdl-color--grey-900"
            ng-attr-style="{{ (metadata_outer_footer_design.tConfiguration.footerStyles) ? metadata_outer_footer_design.tConfiguration.footerStyles : ''}}"
            ng-if="metadata_outer_footer_design.enabled"
          >
            <div
              className="mdl-mega-footer__middle-section mdl-cell mdl-cell--12-col"
              ng-attr-style="{{ (metadata_outer_footer_design.tConfiguration.innerDivStyles) ? metadata_outer_footer_design.tConfiguration.innerDivStyles : ''}}"
              style={{ paddingTop: "20px", paddingBottom: "12px" }}
            >
              <div
                className="center-alignment"
                ng-attr-style="{{ (metadata_outer_footer_design.tConfiguration.socialDivStyles) ? metadata_outer_footer_design.tConfiguration.socialDivStyles : ''}}"
                style={{ marginBottom: "20px" }}
              >
                <a
                  className="margin-right-4 share-social flexbox-inline align-items-center justify-content-center mdl-button mdl-js-button mdl-button--fab mdl-color--grey-300 footer-small-button font-16 "
                  href="https://www.facebook.com/"
                >
                  <RiFacebookBoxFill className="icon-facebook" />
                </a>
                <a
                  className="margin-right-4 share-social flexbox-inline align-items-center justify-content-center mdl-button mdl-js-button mdl-button--fab mdl-color--grey-300 footer-small-button font-16 "
                  href="https://twitter.com/"
                >
                  <RiTwitterFill className="icon-x" />
                </a>

                <a
                  className="margin-right-4 share-social flexbox-inline align-items-center justify-content-center mdl-button mdl-js-button mdl-button--fab mdl-color--grey-300 footer-small-button font-16  "
                  href="https://www.youtube.com/"
                >
                  <RiYoutubeFill className="icon-User_Profile_Play" />
                </a>
                <a
                  className="margin-right-4 share-social flexbox-inline align-items-center justify-content-center mdl-button mdl-js-button mdl-button--fab mdl-color--grey-300 footer-small-button font-16 "
                  href="https://www.instagram.com/karmarajsinh_13/"
                >
                  <RiInstagramFill className="icon-instagram" />
                </a>
              </div>
              <div
               
                className="center-alignment"
               >
                <ul
                  className="mdl-mega-footer__link-list"
                 style={{ marginBottom: "10px" }}
                >
                  <Link to="/">
                    <li
                     className="inline-block font-16 mdl-color-text--grey-300 footer-font "
                      
                    >
                      <div
                       
                        className="mdl-typography--font-regular mdl-typography--text-uppercase cursor-pointer "
                        >
                        Home
                      </div>
                    </li>
                  </Link>
                  <Link to="/About">
                    <li
                      ng-repeat="(data_index,tab) in ::moduleData.LinkRepeatingData | orderBy:'order'"
                      className="inline-block font-16 mdl-color-text--grey-300 footer-font "
                      ng-attr-style="{{ tab.order > 1  ? metadata_outer_footer_design.tConfiguration.linkParentGeneralStyles : ''}}"
                      ng-if="tab.displayCondition"
                      style={{
                        marginLeft: "10px",
                        borderLeft: "1px solid #999999",
                        paddingLeft: "10px",
                      }}
                    >
                      <div
                        ng-click="card_clicked(tab.button)"
                        className="mdl-typography--font-regular mdl-typography--text-uppercase cursor-pointer "
                        ng-attr-style="{{ (metadata_outer_footer_design.tConfiguration.linkGeneralStyles) ? metadata_outer_footer_design.tConfiguration.linkGeneralStyles : ''}} {{ (data.linkStyles) ? data.linkStyles : ''}}"
                      >
                        About
                      </div>
                    </li>
                  </Link>
                  <Link to="/Contact">
                    <li
                      ng-repeat="(data_index,tab) in ::moduleData.LinkRepeatingData | orderBy:'order'"
                      className="inline-block font-16 mdl-color-text--grey-300 footer-font "
                      ng-attr-style="{{ tab.order > 1  ? metadata_outer_footer_design.tConfiguration.linkParentGeneralStyles : ''}}"
                      ng-if="tab.displayCondition"
                      style={{
                        marginLeft: "10px",
                        borderLeft: "1px solid #999999",
                        paddingLeft: "10px",
                      }}
                    >
                      <div
                        ng-click="card_clicked(tab.button)"
                        className="mdl-typography--font-regular mdl-typography--text-uppercase cursor-pointer "
                        ng-attr-style="{{ (metadata_outer_footer_design.tConfiguration.linkGeneralStyles) ? metadata_outer_footer_design.tConfiguration.linkGeneralStyles : ''}} {{ (data.linkStyles) ? data.linkStyles : ''}}"
                      >
                        Contact
                      </div>
                    </li>
                  </Link>
                  {/* <li
                    ng-repeat="(data_index,tab) in ::moduleData.LinkRepeatingData | orderBy:'order'"
                    className="inline-block font-16 mdl-color-text--grey-300 footer-font "
                    ng-attr-style="{{ tab.order > 1  ? metadata_outer_footer_design.tConfiguration.linkParentGeneralStyles : ''}}"
                    ng-if="tab.displayCondition"
                    style={{
                      marginLeft: "10px",
                      borderLeft: "1px solid #999999",
                      paddingLeft: "10px",
                    }}
                  >
                    <div
                      ng-click="card_clicked(tab.button)"
                      className="mdl-typography--font-regular mdl-typography--text-uppercase cursor-pointer "
                      ng-attr-style="{{ (metadata_outer_footer_design.tConfiguration.linkGeneralStyles) ? metadata_outer_footer_design.tConfiguration.linkGeneralStyles : ''}} {{ (data.linkStyles) ? data.linkStyles : ''}}"
                    >
                      sitemap
                    </div>
                  </li>
                  <li
                    ng-repeat="(data_index,tab) in ::moduleData.LinkRepeatingData | orderBy:'order'"
                    className="inline-block font-16 mdl-color-text--grey-300 footer-font "
                    ng-attr-style="{{ tab.order > 1  ? metadata_outer_footer_design.tConfiguration.linkParentGeneralStyles : ''}}"
                    ng-if="tab.displayCondition"
                    style={{
                      marginLeft: "10px",
                      borderLeft: "1px solid #999999",
                      paddingLeft: "10px",
                    }}
                  >
                    <div
                      ng-click="card_clicked(tab.button)"
                      className="mdl-typography--font-regular mdl-typography--text-uppercase cursor-pointer "
                      ng-attr-style="{{ (metadata_outer_footer_design.tConfiguration.linkGeneralStyles) ? metadata_outer_footer_design.tConfiguration.linkGeneralStyles : ''}} {{ (data.linkStyles) ? data.linkStyles : ''}}"
                    >
                      Terms
                    </div>
                  </li>
                  <li
                    ng-repeat="(data_index,tab) in ::moduleData.LinkRepeatingData | orderBy:'order'"
                    className="inline-block font-16 mdl-color-text--grey-300 footer-font "
                    ng-attr-style="{{ tab.order > 1  ? metadata_outer_footer_design.tConfiguration.linkParentGeneralStyles : ''}}"
                    ng-if="tab.displayCondition"
                    style={{
                      marginLeft: "10px",
                      borderLeft: "1px solid #999999",
                      paddingLeft: "10px",
                    }}
                  >
                    <div
                      ng-click="card_clicked(tab.button)"
                      className="mdl-typography--font-regular mdl-typography--text-uppercase cursor-pointer "
                      ng-attr-style="{{ (metadata_outer_footer_design.tConfiguration.linkGeneralStyles) ? metadata_outer_footer_design.tConfiguration.linkGeneralStyles : ''}} {{ (data.linkStyles) ? data.linkStyles : ''}}"
                    >
                      Privacy
                    </div>
                  </li> */}
                </ul>
              </div>
            </div>
          </footer>
        </div>
        <div
          className="mdl-color--white ng-scope"
          ng-if="metadata_outer_footer_design.enabled"
        >
          <footer
            className="mdl-mini-footer mdl-color--white mdl-grid change-size "
            style={{ padding: "0px" }}
          >
            <div className="center-alignment mdl-cell mdl-cell--12-col mini-footer-poweredby">
              {/* <img
                src={gurukullogo}
                style={{
                  height: "30px",
            
                  marginBottom: "10px",
                }}
              /> */}
              <div
                className="mdl-mega-footer__heading ng-binding"
                style={{
                  color: "rgb(158,158,158)",
                  margin: "0px",
                  paddingRight: "0px",
                }}
              >
                Powered by K A R M A Production &nbsp;
              </div>
            </div>
          </footer>
        </div>
      </portal-footer>
    </>
  );
}
