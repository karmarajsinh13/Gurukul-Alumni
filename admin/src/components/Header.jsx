import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {

  return (
    <div style={{ marginLeft: "240px" }}>
      <nav class="navbar navbar-main navbar-expand-lg bg-transparent shadow-none position-absolute px-4 w-100 z-index-2 mt-n11">
        <div class="container-fluid py-1">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb bg-transparent mb-0 pb-0 pt-1 ps-2 me-sm-6 me-5">
              <li class="breadcrumb-item text-sm">
                <a class="text-white opacity-5" href="javascript:;">
                  Pages
                </a>
              </li>
              <li
                class="breadcrumb-item text-sm text-white active"
                aria-current="page"
              >
                Profile
              </li>
            </ol>
            <h6 class="text-white font-weight-bolder ms-2">Profile</h6>
          </nav>
        </div>
      </nav>
    </div>

  );
}
