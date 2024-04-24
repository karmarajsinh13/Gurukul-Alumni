import React from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Viewgalleryimg() {
  const [gallery, setgallery] = useState([]);
  const location = useLocation();
  const img_id = location.pathname.split("/")[2]
    ? location.pathname.split("/")[2]
    : "";

  useEffect(() => {
    getgallery();
  }, []);

  const getgallery = async () => {
    const res = await axios.get(
      "http://localhost:3000/gurukulalumni/gallerys/" + img_id
    );
    setgallery(res.data);

    console.log(res.data);
  };
  return (
    <div>
      <div>
        <div className="margin-lr-8 margin-lr-md-0">
          <h2
            className="font-size-24 font-size-md-32 font-weight-bold"
            style={{
              marginLeft: "80px",
              marginBottom: "8px",
              color: "black",
              fontFamily: "sans-serif",
              fontWeight: "700",
              fontSize: "32px",
              lineHeight: "1.4",
              textAlign: "center",
            }}
            onClick={() => {
              window.history.back();
            }}
          >
            {gallery.title}
          </h2>
        </div>
        <div>
          <h5
            className="font-size-24 font-size-md-32 font-weight-bold"
            style={{
              marginLeft: "550px",
              marginBottom: "8px",
              color: "black",
              fontFamily: "sans-serif",
              fontWeight: "700",
              fontSize: "14px",
              lineHeight: "1.4",
              textAlign: "center",
            }}
          >
            Description: {gallery.des}{" "}
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Publish On :{gallery.entry_date}
          </h5>
        </div>
        <div
          style={{ marginBottom: "8px" }}
          className="aspect-ratio-1-1-parent"
        >
          <img
            className="aspect-ratio-child aspect-ratio-fit-photo border-radius-12 ng-isolate-scope"
            src={`http://localhost:3000/uploads/${gallery.img}`}
            alt=""
            style={{
              width: "800px",
              height: "500px",
              objectFit: "cover",
              borderRadius: "12px",
              objectPosition: "center",
              marginTop: "50px",
              marginLeft: "400px",
            }}
            //   onClick={() => {
            //     window.open(`http://localhost:3000/uploads/${gallery.img}`); image download code
            // }}
          />
        </div>
      </div>
    </div>
  );
}
