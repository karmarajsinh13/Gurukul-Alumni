import React from "react";
import gurukullogo from "../gurukullogo.png";
import { Link } from "react-router-dom";
import karma from "../img/karma.jpeg";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  RiFacebookLine,
  RiInstagramLine,
  RiTwitterLine,
  RiYoutubeLine,
} from "react-icons/ri";
export default function Header() {
  const [user_id, setId] = useState(sessionStorage.getItem("user"));
  const [user, setUser] = useState([]);
  const [firstname, setName] = useState("");
  const [photo, setphoto] = useState("");

  const navigate = useNavigate();
  useEffect(() => {
    if (user_id) {
      getUser();
    }
  }, []);

  // const fatchUserName = async () => {
  //   try {
  //     const res = await axios.get("/students/" + user_id);
  //     setName(res.data.student_name);
  //   } catch (error) {}
  // };
  const getUser = async () => {
    const res = await axios.get(
      "http://localhost:3000/gurukulalumni/user/" + user_id
    );
    setUser(res.data);
    setName(res.data.firstname);
    setphoto(res.data.photo);
    console.log(res.data);
  };

  // const User_profile = () => {
  //   navigate("/User_profile");
  // };
  // const User_order = () => {
  //   navigate("/Myorders");
  // };
  // const login = () => {
  //   navigate("/Login");
  // };
  const btnSignOut = () => {
    sessionStorage.clear();
    setId("");
    window.location.reload()
    //  navigate("/")
    //navigate("/Login")
  };

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
                  <a href="https://www.instagram.com/karmarajsinh_13/">
                    {/* <i className="icon-instagram social-buttons-icons font-28" /> */}
                    <RiYoutubeLine className="mdl-button mdl-js-button mdl-button--fab mdl-color--red-A700 mdl-color-text--white font-16 share-social new-icon ng-scope">
                      /
                    </RiYoutubeLine>
                  </a>
                  {/* <a
                    href="https://www.linkedin.com/company/gyanmanjari-vidyapith/"
                    target="_blank"
                    className="mdl-button mdl-js-button mdl-button--fab mdl-color--blue-700 mdl-color-text--white font-16 share-social new-icon"
                    rel="noreferrer noopener"
                    data-upgraded=",MaterialButton"
                  >
                    <i className="icon-linkedin social-buttons-icons" />
                  </a> */}
                  <a href="https://www.instagram.com/karmarajsinh_13/">
                    {/* <i className="icon-instagram social-buttons-icons font-28" /> */}
                    <RiTwitterLine className="mdl-button mdl-js-button mdl-button--fab mdl-color--blue-A700 mdl-color-text--white font-16 share-social new-icon ng-scope">
                      /
                    </RiTwitterLine>
                  </a>
                  {/* <a
                    href="https://www.youtube.com/channel/UCPYdAnPygpfnQcbP6Yx24wg"
                    target="_blank"
                    className="mdl-button mdl-js-button mdl-button--fab mdl-color--red-500 mdl-color-text--white font-16 share-social new-icon ng-scope"
                    rel="noreferrer noopener"
                    data-upgraded=",MaterialButton"
                  >
                    <i className="icon-User_Profile_Play social-buttons-icons font-14" />
                  </a> */}
                  <a href="https://www.instagram.com/karmarajsinh_13/">
                    {/* <i className="icon-instagram social-buttons-icons font-28" /> */}
                    <RiFacebookLine className="mdl-button mdl-js-button mdl-button--fab mdl-color--blue-A700 mdl-color-text--white font-16 share-social new-icon ng-scope">
                      /
                    </RiFacebookLine>
                  </a>
                  <a href="https://www.instagram.com/karmarajsinh_13/">
                    {/* <i className="icon-instagram social-buttons-icons font-28" /> */}
                    <RiInstagramLine className="mdl-button mdl-js-button mdl-button--fab mdl-color--pink-A700 mdl-color-text--white font-16 share-social new-icon ng-scope">
                      /
                    </RiInstagramLine>
                  </a>
                </div>
              </div>
            </div>
          <div class="dropdown" data-bs-toggle="dropdown">
          <li>
            {user_id ? (
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
                      <Link
                        to="/Profile"
                        name="Karmarajsinh Gohil"
                        className="ng-isolate-scope"
                      ></Link>
                      <img
                        alt="KG"
                        className="ng-scope comment-avatar"
                        style={{ marginRight: "4px" }}
                        src={karma}
                      />
                    </div>
                  </span>
                  <span
                    className="inline-block font-16 ellipsis-text ng-binding"
                    style={{ maxWidth: "120px" }}
                  >
                    Karmarajsinh Gohil
                  </span>
                  <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                    <li class="dropdown-header">
                      <h6>{firstname}</h6>
                      {/* <span>Web Designer</span> */}
                    </li>
                    <li>
                      <hr class="dropdown-divider" />
                    </li>
  
                    <li>
                      <a
                        class="dropdown-item d-flex align-items-center"
                        href="#"
                      >
                        <i class="bi bi-box-arrow-right"></i>
                        <span onClick={btnSignOut}>&nbsp;Sign Out</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            ) : (
              <div className="flexbox flex-dir-column mdl-cell--hide-phone align-self-center mdl-color-text--grey-700">
                <div className="mdl-color-text--grey-700 font-18 margin-bottom-8">
                  <Link to="/Login" className>
                    <a className="mdl-button mdl-button--raised mdl-color--primary mdl-color-text--white mdl-js-button mdl-js-rippleeffect mdl-typography--text-uppercase">
                      Login
                    </a>
                  </Link>
                </div>
                
              </div>
            )}
          </li>
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
                to="/"
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
