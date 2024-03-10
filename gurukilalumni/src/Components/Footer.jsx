import React from "react";

export default function Footer() {
  return (
    <div>
      <footer
       style={{
        backgroundColor: "#2d2d2d",
        color: "white",
        paddingTop: "1rem",
        position: "fixed",
        left: 0,
        right: 0,
        bottom: "27px"
      }}
      >
        <div id="social-test">
          <ul class="social">
            <li>
              <i class="fa fa-facebook" aria-hidden="true"></i>
            </li>
            <li>
              <i class="fa fa-twitter" aria-hidden="true"></i>
            </li>
            <li>
              <i class="fa fa-instagram" aria-hidden="true"></i>
            </li>   
          </ul>
        </div>
        <nav style={{ width: "100%" }}>
          <ul
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "0.75rem",
              marginBottom: "25px",
              padding: "0"
            }}
          >
            <li>
              <a href="#" style={{ textDecoration: "none" }}>
                Home
              </a>
            </li>
            <li>
              <a href="#" style={{ textDecoration: "none" }}>
                About
              </a>
            </li>
            <li>
              <a href="#" style={{ textDecoration: "none" }}>
                Contact
              </a>
            </li>
            <li>
              <a href="#" style={{ textDecoration: "none" }}>
                Sitemap
              </a>
            </li>
            <li>
              <a href="#" style={{ textDecoration: "none" }}>
                Terms
              </a>
            </li>
            <li>
              <a href="#" style={{ textDecoration: "none" }}>
                Privacy
              </a>
            </li>
          </ul>
        </nav>
      </footer>
      <div
        style={{
          textAlign: "center",
          position: "fixed",
          left: 0,
          right: 0,
          bottom: "2px",
        }}
      >
        <p style={{ textAlign: "center", marginTop: "0.5rem" , opacity: "0.45" }}>
          © 2024 Black Sparrow Production. All rights reserved.
        </p>
        {/* <p style={{ fontSize: '0.875rem' }}>Powered by</p>
          <h2 style={{ fontSize: '1.125rem', fontWeight: 'bold' }}>Black Sparrow Production</h2> */}
      </div>
    </div>
  );
}
