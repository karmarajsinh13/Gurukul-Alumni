import React from "react";

export default function About() {
  return (
    <div>
      <div
        className="about-strip-change autoscroll-class mdl-color--white"
        id="about_section"
        ng-hide="$root.app_data.cid==111 || $root.app_data.cid==105 || $root.app_data.cid==108 || $root.app_data.cid==266 || !info.show.aboutDesc"
        ng-class="(insti_info.head_designation)?'mdl-color--primary-dark':'mdl-color--white'"
      >
        <div className="margin-auto about-size">
          <h2
            className="about-title about-size mdl-typography--font-light ng-binding mdl-color-text--grey-90"
            ng-class="(insti_info.head_designation)?'mdl-color-text--white':'mdl-color-text--grey-90'"
          >
            {" "}
            About AAG
          </h2>
          <div
            className="font-18 mdl-typography--headline mdl-typography--font-light responsive_content_image_width ng-binding mdl-color-text--grey-900"
            ng-bind-html="insti_info.description"
            ng-class="(insti_info.head_designation)?'mdl-color-text--white':'mdl-color-text--grey-900'"
          ><div>

            <h1 className="inherit-font-size" style={{ textAlign: "justify" }}>
              <span style={{ fontSize: "16px" }}>
              Gurukul Alumni" is a comprehensive Alumni Management System designed for
graduates to stay connected with their alma mater and fellow graduates. The system fosters a
sense of community by providing a platform for creating alumni network, communication, and
collaboration..<br></br>Gurukul Alumni System serves as a vital bridge that transcends time and distance,
enabling a continuous and meaningful relationship between graduates and their academic roots.


              </span>
            </h1>
          </div><br></br>
            <h1 className="inherit-font-size" style={{ textAlign: "justify" }}>
              <span style={{ fontSize: "22px" }}>
                <span style={{ fontFamily: "Poppins, sans-serif !important" }}>
                  <strong>Our Purpose:</strong>
                </span>
              </span>
            </h1><div>

            <h1 className="inherit-font-size" style={{ textAlign: "justify" }}>
              <span style={{ fontFamily: "Helvetica, sans-serif !important" }}>
                <span style={{ fontSize: "16px" }}>
                  AAG aims to develop deep and strong relationships between
                  Alumni, Students, and The School, to keep alumni connected,
                  and create a network that allows alumni to stay involved with
                  their alma mater and help shape its future via the
                  Association's programs and services.
                  <br />
                  AAG's goals are as follows:<br></br> 
                </span>
              </span>
            </h1>
            </div><br></br><div>
            <ul>
              <li
                className="inherit-font-size"
                style={{ textAlign: "justify" }}
              >
                <span
                  style={{ fontFamily: "Helvetica, sans-serif !important" }}
                >
                  <span style={{ fontSize: "16px" }}>
                  &bull; To strengthen, support, and promote strong connections among
                    alumni and to boost alumni school involvement.
                  </span>
                </span>
              </li>
              <li
                className="inherit-font-size"
                style={{ textAlign: "justify" }}
              >
                <span
                  style={{ fontFamily: "Helvetica, sans-serif !important" }}
                >
                  <span style={{ fontSize: "16px" }}>
                  &bull; To establish and develop specific regional chapters to meet
                    the needs of the region's alumni.
                  </span>
                </span>
              </li>
              <li
                className="inherit-font-size"
                style={{ textAlign: "justify" }}
              >
                <span
                  style={{ fontFamily: "Helvetica, sans-serif !important" }}
                >
                  <span style={{ fontSize: "16px" }}>
                  &bull; To keep alumni engaged with the school via events, guest
                    lectures, reunions, and networking
                  </span>
                </span>
              </li>
              <li
                className="inherit-font-size"
                style={{ textAlign: "justify" }}
              >
                <span
                  style={{ fontFamily: "Helvetica, sans-serif !important" }}
                >
                  <span style={{ fontSize: "16px" }}>
                  &bull; opportunities. And assist them in participating in the
                    Alumni Association's operations.
                  </span>
                </span>
              </li>
              <li
                className="inherit-font-size"
                style={{ textAlign: "justify" }}
              >
                <span
                  style={{ fontFamily: "Helvetica, sans-serif !important" }}
                >
                  <span style={{ fontSize: "16px" }}>
                  &bull; To encourage, promote, and support The School's education,
                    research, and other activities.
                  </span>
                </span>
              </li>
              <li
                className="inherit-font-size"
                style={{ textAlign: "justify" }}
              >
                <span
                  style={{ fontFamily: "Helvetica, sans-serif !important" }}
                >
                  <span style={{ fontSize: "16px" }}>
                  &bull; To advise and support Gurukul alumni who have
                    just finished their education.
                  </span>
                </span>
              </li>
              <li
                className="inherit-font-size"
                style={{ textAlign: "justify" }}
              >
                <span
                  style={{ fontFamily: "Helvetica, sans-serif !important" }}
                >
                  <span style={{ fontSize: "16px" }}>
                  &bull; To give career and vocational counseling to the larger
                    Alumni community. Offer advice and upgrade opportunities for
                    their professional and personal growth.
                  </span>
                </span>
              </li>
              <li
                className="inherit-font-size"
                style={{ textAlign: "justify" }}
              >
                <span
                  style={{ fontFamily: "Helvetica, sans-serif !important" }}
                >
                  <span style={{ fontSize: "16px" }}>
                  &bull; Keeping records and gathering data on alumni
                  </span>
                </span>
              </li>
              <li
                className="inherit-font-size"
                style={{ textAlign: "justify" }}
              >
                <span
                  style={{ fontFamily: "Helvetica, sans-serif !important" }}
                >
                  <span style={{ fontSize: "16px" }}>
                  &bull; To promote and strengthen the excellent name and reputation
                    of the institution.
                  </span>
                </span>
              </li>
            </ul></div><br></br>
            <p className="inherit-font-size" style={{ textAlign: "justify" }}>
              <span style={{ fontFamily: "Poppins, sans-serif !important" }}>
                <span style={{ fontSize: "22px" }}>
                  <strong>Advantages of AAG:</strong>
                </span>
              </span>
            </p>
            <ul>
              <li
                className="inherit-font-size"
                style={{ textAlign: "justify" }}
              >
                <span
                  style={{ fontFamily: "Helvetica, sans-serif !important" }}
                >
                  <span style={{ fontSize: "16px" }}>
                  &bull; Professional network and connections remain extensive.
                  </span>
                </span>
              </li>
              <li
                className="inherit-font-size"
                style={{ textAlign: "justify" }}
              >
                <span
                  style={{ fontFamily: "Helvetica, sans-serif !important" }}
                >
                  <span style={{ fontSize: "16px" }}>
                  &bull; Maintain contact with classmates and teachers.
                  </span>
                </span>
              </li>
              <li
                className="inherit-font-size"
                style={{ textAlign: "justify" }}
              >
                <span
                  style={{ fontFamily: "Helvetica, sans-serif !important" }}
                >
                  <span style={{ fontSize: "16px" }}>
                  &bull; Opportunity for Socializing and Networking
                  </span>
                </span>
              </li>
              <li
                className="inherit-font-size"
                style={{ textAlign: "justify" }}
              >
                <span
                  style={{ fontFamily: "Helvetica, sans-serif !important" }}
                >
                  <span style={{ fontSize: "16px" }}>Alumni Events</span>
                </span>
              </li>
              <li
                className="inherit-font-size"
                style={{ textAlign: "justify" }}
              >
                <span
                  style={{ fontFamily: "Helvetica, sans-serif !important" }}
                >
                  <span style={{ fontSize: "16px" }}>
                  &bull; Start-up financing and incubation
                  </span>
                </span>
              </li>
              <li
                className="inherit-font-size"
                style={{ textAlign: "justify" }}
              >
                <span
                  style={{ fontFamily: "Helvetica, sans-serif !important" }}
                >
                  <span style={{ fontSize: "16px" }}>
                  &bull; Services for Career Development
                  </span>
                </span>
              </li>
              <li
                className="inherit-font-size"
                style={{ textAlign: "justify" }}
              >
                <span
                  style={{ fontFamily: "Helvetica, sans-serif !important" }}
                >
                  <span style={{ fontSize: "16px" }}>
                  &bull; Opportunity to Volunteer
                  </span>
                </span>
              </li>
              <li
                className="inherit-font-size"
                style={{ textAlign: "justify" }}
              >
                <span
                  style={{ fontFamily: "Helvetica, sans-serif !important" }}
                >
                  <span style={{ fontSize: "16px" }}>
                  &bull; Giving something back to future students
                  </span>
                </span>
              </li>
              <li
                className="inherit-font-size"
                style={{ textAlign: "justify" }}
              >
                <span
                  style={{ fontFamily: "Helvetica, sans-serif !important" }}
                >
                  <span style={{ fontSize: "16px" }}>
                  &bull; Keeping in Touch with Your Alma Mater
                  </span>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
