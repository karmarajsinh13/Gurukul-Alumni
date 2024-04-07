import React from "react";
import gurukullogo from "../gurukullogo.png";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div>
      <header class="bg-white text-white flex items-center">
        <img
          className="w-20 h-20 object-cover rounded-full shadow-md ml-40"
          src={gurukullogo}
          alt="Description of the image"
        />
        <div className="typewriter">
          <b>Alumni Association of Gurukul</b>
        </div>

        <div className="rel-pos change-size margin-auto ">
          <div className="ellipsis-text flexbox flex-dir-row flex-dir-column-600 margin-tb-gt-xs-8 margin-tb-xs-4 ">
            <div
              className="flexbox flex-dir-column flex-grow-3 margin-tb-8 align-self-center padding-lr-8 right-alignment"
              ng-attr-style="{{ templateData.tConfiguration.middleDivParentStyles }}"
            >
              <div
                ng-if="templateData.tData.middle.value"
                className="font-20 mdl-color-text--white"
                ng-attr-style="{{ templateData.tConfiguration.middleStyles }}"
                bind-html-compile="templateData.tData.middle.value"
              >
                <div className="padding-bottom-8 ng-scope">
                  <a
                    href="https://www.facebook.com/Gyanmajari-Vidyapith-109904388452507"
                    target="_blank"
                    className="mdl-button mdl-js-button mdl-button--fab facebook-bg-color mdl-color-text--white font-16 share-social new-icon"
                    rel="noreferrer noopener"
                    data-upgraded=",MaterialButton"
                  >
                    <i className="icon-facebook social-buttons-icons" />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/gyanmanjari-vidyapith/"
                    target="_blank"
                    className="mdl-button mdl-js-button mdl-button--fab mdl-color--blue-700 mdl-color-text--white font-16 share-social new-icon"
                    rel="noreferrer noopener"
                    data-upgraded=",MaterialButton"
                  >
                    <i className="icon-linkedin social-buttons-icons" />
                  </a>
                  <a
                    href="https://www.youtube.com/channel/UCPYdAnPygpfnQcbP6Yx24wg"
                    target="_blank"
                    className="mdl-button mdl-js-button mdl-button--fab mdl-color--red-500 mdl-color-text--white font-16 share-social new-icon ng-scope"
                    rel="noreferrer noopener"
                    data-upgraded=",MaterialButton"
                  >
                    <i className="icon-User_Profile_Play social-buttons-icons font-14" />
                  </a>
                  <a
                    href="https://www.instagram.com/gca2018bvn/"
                    target="_blank"
                    className="mdl-button mdl-js-button mdl-button--fab mdl-color--pink-A700 mdl-color-text--white font-16 share-social new-icon ng-scope"
                    rel="noreferrer noopener"
                    data-upgraded=",MaterialButton"
                  >
                    <i className="icon-instagram social-buttons-icons font-14" />
                  </a>
                </div>
              </div>
            </div>

            <div
              className="flexbox flex-dir-column align-self-center mdl-color-text--grey-700"
              ng-class="{'maximize-width': $parent.$parent.$parent.mobile_screen}"
            >
              <div
                className="flexbox align-items-center justify-content-space-between mdl-color-text--grey-700 font-18 margin-bottom-8"
                ng-attr-style="{{ templateData.tConfiguration.primaryParentStyles }}"
              >
                <span className="inline-block align-self-center flexbox align-items-center">

                  <div
                    id="user_profile_desktop_header"
                    href="/profile?source=header"
                  >
                    <Link to="/Profile"
                      name="Karmarajsinh Gohil"
                      className="ng-isolate-scope"
                    ></Link>
                      <img
                        ng-class="imgConfig.parentDiv"
                        ng-attr-style="{{imgConfig.parentDivStyle}}"
                        ng-if="profileSrc"
                        alt="KG"
                        err-src="https://alumni.gyanmanjarividyapith.edu.in/api/institutes/profile_pic_default?cid=1080"
                        ng-src="https://almashines.s3.dualstack.ap-southeast-1.amazonaws.com/assets/images/profiles/50x50/2208215.jpg?v=1676117115"
                        ng-attr-loading="{{loading || undefined}}"
                        className="ng-scope comment-avatar"
                        style={{ marginRight: "4px" }}
                        src="https://almashines.s3.dualstack.ap-southeast-1.amazonaws.com/assets/images/profiles/50x50/2208215.jpg?v=1676117115"
                        loading="lazy"
                      />
                   

                  </div>
                </span>
                    <span
                      className="inline-block font-16 ellipsis-text ng-binding"
                      style={{ maxWidth: "120px" }}
                    >
                      Karmarajsinh Gohil
                    </span>
              </div>
            </div>
          </div>
        </div>
      </header>
      
      
      <header class="bg-blue-500 text-white p-4">
        <div class="container mx-auto flex justify-center items-center">
          <nav>
            <ul class="flex space-x-4 justify-center text-lg">
              <Link
                style={{
                  textDecoration: "underline",
                  textUnderlinePosition: "under",
                }}
                className="ng-binding"
                to="/Home"
              >
                G U R U K U L
              </Link>
              <Link className="hover:underline" to="/Events">
                Events
              </Link>
              {/* <li className="hover:underline">News & Stories</li> */}
              <Link className="hover:underline" to="/Gallery">
                Gallery
              </Link>
              {/* <li className="hover:underline">Noticeboard</li>
              <li className="hover:underline">Introducing Flash Batchmates</li>
              <li className="hover:underline">Find Alumni</li>
              <li className="hover:underline">Careers</li> */}
              <Link className="hover:underline" to="/Job">
                Job
              </Link>
              <Link className="hover:underline" to="/About">
                About
              </Link>
              <Link className="hover:underline" to="/Contact">
                Contact Us
              </Link>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}