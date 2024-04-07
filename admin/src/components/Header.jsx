import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {

  return (
    // <div style={{ marginLeft: "240px" }}>
    //   <nav class="navbar navbar-main navbar-expand-lg bg-transparent shadow-none position-absolute px-4 w-100 z-index-2 mt-n11">
    //     <div class="container-fluid py-1">
    //       <nav aria-label="breadcrumb">
    //         <ol class="breadcrumb bg-transparent mb-0 pb-0 pt-1 ps-2 me-sm-6 me-5">
    //           <li class="breadcrumb-item text-sm">
    //             <a class="text-white opacity-5" href="javascript:;">
    //               Pages
    //             </a>
    //           </li>
    //           <li
    //             class="breadcrumb-item text-sm text-white active"
    //             aria-current="page"
    //           >
    //             Profile
    //           </li>
    //         </ol>
    //         <h6 class="text-white font-weight-bolder ms-2">Profile</h6>
    //       </nav>
    //     </div>
    //   </nav>
    // </div>
    <>
     <div className="container-fluid py-1 px-3">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5">
            <li className="breadcrumb-item text-sm"><a className="opacity-5 text-white" href="javascript:;">Pages</a></li>
            <li className="breadcrumb-item text-sm text-white active" aria-current="page">Dashboard</li>
          </ol>
          <h6 className="font-weight-bolder text-white mb-0">Dashboard</h6>
        </nav>
        <div className="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4" id="navbar">
          <div className="ms-md-auto pe-md-3 d-flex align-items-center">
            <div className="input-group">
              <span className="input-group-text text-body"><i className="fas fa-search" aria-hidden="true" /></span>
              <input type="text" className="form-control" placeholder="Type here..." onfocus="focused(this)" onfocusout="defocused(this)" />
            </div>
          </div>
          <ul className="navbar-nav  justify-content-end">
            <li className="nav-item d-flex align-items-center">
              <a href="javascript:;" className="nav-link text-white font-weight-bold px-0">
                <i className="fa fa-user me-sm-1" aria-hidden="true" />
                <span className="d-sm-inline d-none">Sign In</span>
              </a>
            </li>
            <li className="nav-item d-xl-none ps-3 d-flex align-items-center">
              <a href="javascript:;" className="nav-link text-white p-0" id="iconNavbarSidenav">
                <div className="sidenav-toggler-inner">
                  <i className="sidenav-toggler-line bg-white" />
                  <i className="sidenav-toggler-line bg-white" />
                  <i className="sidenav-toggler-line bg-white" />
                </div>
              </a>
            </li>
            <li className="nav-item px-3 d-flex align-items-center">
              <a href="javascript:;" className="nav-link text-white p-0">
                <i className="fa fa-cog fixed-plugin-button-nav cursor-pointer" aria-hidden="true" />
              </a>
            </li>
          
          </ul>
        </div>
      </div>
   
  
    </>
  );
}
