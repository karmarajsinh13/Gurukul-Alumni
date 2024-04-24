import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function All_gallery() {
  const [gallery, setgallery] = useState([]);
  const location = useLocation();
  const img_id = location.pathname.split("/")[2]
  ? location.pathname.split("/")[2]
  : "";

  useEffect(() => {
    getgallery();
  }, []);

  const getgallery = async () => {
    const res = await axios.get("http://localhost:3000/gurukulalumni/gallerys/" + img_id);
    setgallery(res.data);
    console.log(res.data);
  };
  return (
    <div
      style={{ marginTop: "40px", marginLeft: "290px", marginRight: "20px" }}
    >
      <div class="row">
        <div class="col-12">
          <div class="card mb-4">
            <div
              class="card-header pb-0"
              style={{ display: "flex", marginLeft: "1100px" }}
            >
              <Link to={`/Add_gallery/` + gallery.img_id}>
                <i
                  class="fas fa-pencil-alt text-primary me-2"
                  aria-hidden="true"
                ></i>
                Edit
              </Link>
            </div>
            <center class="card-header pb-0 ">
              <h3>{gallery.title}</h3>
            </center>
            <br />

            <div class="card-body px-0 pt-0 pb-2">
              <div>
                <div className="row justify-content-center">
                  <div>
                    <div>
                      <div class="col-4 ">
                        <img
                          src={`http://localhost:3000/uploads/${gallery.img}`}
                          alt="Image placeholder"
                          style={{
                            height: "450px",
                            width: "790px",
                            objectFit: "cover",
                            objectPosition: "center",
                            borderRadius: "10px",
                            cursor: "pointer",
                            marginLeft: "200px",
                          }}
                        />
                      </div>
                    </div>
                    <br />
                    <div class="card-body pt-0">
                      <div class="text-center mt-4">
                        <div class="h6 mt-4">
                          <i class="ni business_briefcase-24 mr-2"></i>
                          Description : - <br />
                          {gallery.des}
                        </div>
                        <div class="h6 mt-4">
                          <i class="ni business_briefcase-24 mr-2"></i>
                          Upload date : - <br />
                          {gallery.entry_date}
                        </div>
                        <br />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
