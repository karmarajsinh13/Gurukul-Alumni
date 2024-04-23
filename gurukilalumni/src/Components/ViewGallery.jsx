import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import gurukullogo from "../gurukullogo.png";

export default function ViewGallery() {
  const [gallerys, setgallery] = useState([]);

  useEffect(() => {
    getgallery();
  }, []);

  const getgallery = async () => {
    const res = await axios.get("http://localhost:3000/gurukulalumni/gallerys");
    setgallery(res.data);
    console.log(res.data);
  };
  const deletegallery = async (img_id) => {
    let ans = window.confirm("are you sure?");
    if (ans) {
      const res = await axios.delete(
        "http://localhost:3000/gurukulalumni/gallerys/" + img_id
      );
      console.log(res.data);
      alert(res.data);
      getgallery();
    }
  };
  return (
    <div>
      <div
        ng-include="'./templates/pages/singleGallery.html'"
        className="ng-scope"
      >
        <style
          type="text/css"
          className="ng-scope"
          dangerouslySetInnerHTML={{
            __html:
              "\n\n\t.image-width-album-photo{\n\t\twidth: 216px !important;\n\t}\n\t.image-width-youtube-logo{\n\t\twidth:64px !important;\n\t}\n\t.yt-icon-dimen{\n\t\ttop: 27%;left: 36%;\n\t}\n\t.grid-item {\n\t   margin-bottom: 16px;\n\t}\n\n\t@media only screen and (max-width: 600px){\n\t\t.image-width-album-photo{\n\t\t\twidth: 30vw !important;\n\t\t}\n\t\t.image-width-youtube-logo{\n\t\t\twidth:20px !important;\n\t\t}\n\t\t.yt-icon-dimen{\n\t\t\ttop: 29%;left: 39%;\n\t\t}\n\t\t.grid-item {\n\t\t   margin-bottom: 5px;\n\t\t}\n\t\t.max-width-xs-226{\n\t\t\tmax-width: 226px;\n\t\t}\n\t}\n\n\t@media only screen and (min-width: 768px) and (max-width: 1024px){\n\t\t.image-width-album-photo{\n\t\t\twidth: 160px !important;\n\t\t}\n\t\t.image-width-youtube-logo{\n\t\t\twidth:44px !important;\n\t\t}\n\t}\n\n",
          }}
        />
        <div className="change-size margin-auto ng-scope">
          <div
            className="mdl-grid padding-lr-xs-0"
            style={{ overflowX: "hidden", overflowY: "hidden" }}
          >
            {/* <div className="mdl-cell margin-lr-xs-8 mdl-cell--12-col center-alignment padding-top-30 padding-top-md-30 padding-top-xs-20 rel-pos">
                <div
                  className="inline-block font-24 font-md-20 font-xs-18 mdl-typography--font-medium mdl-color-text--black padding-top-10 padding-top-xs-0 padding-top-md-0"
                  style={{ maxWidth: "610px" }}
                >
                  <span
                    className="line-height-30 ng-binding"
                    ng-bind-html="obj1.name"
                  >
                    {gallery.title}
                  </span>
                </div>
              </div> */}
            <div className="mdl-cell margin-lr-xs-8 mdl-cell--12-col center-alignment padding-top-30 padding-top-md-30 padding-top-xs-20 rel-pos">
              <div
                className="inline-block font-24 font-md-20 font-xs-18 mdl-typography--font-medium mdl-color-text--black padding-top-10 padding-top-xs-0 padding-top-md-0"
                style={{ maxWidth: "610px" }}
              >
                <span
                  className="line-height-30 ng-binding"
                  ng-bind-html="obj1.name"
                >
                  <img
                    className="ng-scope post-avatar link-detail"
                    style={{ width: "32px", height: "32px" }}
                    src={gurukullogo}
                  />
                </span>
              </div>
            </div>
            {/* <div className="mdl-cell margin-lr-xs-8 mdl-cell--12-col padding-top-24 padding-top-xs-18 margin-xs-0 center-alignment maximize-width">
                <div className="inline-block padding-left-40 padding-left-xs-16">
                  <div className="inline-block">
                    <img
                      className="ng-scope post-avatar link-detail"
                      style={{ width: "32px", height: "32px" }}
                      src={gurukullogo}
                    />
                  </div>
                  <div
                    className="inline-block padding-left-12 ellipsis-text"
                    style={{ maxWidth: "-165px", verticalAlign: "center" }}
                  >
                    <a className="link-detail  mdl-color-text--black font-16 font-xs-14 mdl-typography--font-medium new-icon ng-binding">
                      SSCCS
                    </a>
                  </div>
                </div>
                <div className="inline-block padding-left-40 padding-left-xs-0 maximize-width-xs padding-top-xs-16">
                  <span className="new-icon ng-binding" title="Creation Date">
                    <i className=" icon-event_note font-18 upper-icons mdl-color-text--grey-600" />
                    <span className="font-14 mdl-color-text--grey-600 ng-binding">
                      Created on: {gallery.entry_date}
                    </span>
                  </span>
                </div>
              </div> */}

            <div className="mdl-cell margin-lr-xs-8 mdl-cell--12-col padding-top-16 padding-top-xs-16 margin-xs-0 maximize-width-xs rel-pos">
              <div
                infinite-scroll="loadMore()"
                infinite-scroll-distance={1}
                infinite-scroll-disabled="lock ||no_more_data"
                id="gallery_photos"
                className="rel-pos ng-isolate-scope"
              >
                <div
                  className="rel-pos  margin-auto"
                  style={{ maxWidth: "93vw" }}
                >
                  {gallerys.map((gallery) => (
                    // <div
                    //   id="grid"
                    //   className=" margin-left-md-20 rel-pos"
                    //   style={{ position: "relative", height: "318.55px" }}
                    // >
                    //   <div
                    //     ng-repeat="n in obj"
                    //     className="get-options-no-width grid-item inline-block rel-pos ng-scope"
                    //     style={{
                    //       width: "auto",
                    //       marginLeft: "auto",
                    //       marginRight: "auto",
                    //       position: "absolute",
                    //       left: "0px",
                    //       top: "0px",
                    //     }}
                    //   >
                    //     <div className="border-radius-2 center-alignment rel-pos image-width-album-photo responsive-container-waterfall">
                    //       <img
                    //         className="link-detail border-radius-2 image-width-album-photo responsive ng-scope"
                    //         src={`http://localhost:3000/uploads/${gallery.img}`}
                    //       />
                    //     </div>
                    //   </div>

                    //   {/* <div
                    //   ng-repeat="n in obj"
                    //   className="get-options-no-width grid-item inline-block rel-pos ng-scope"
                    //   style={{
                    //     width: "auto",
                    //     marginLeft: "auto",
                    //     marginRight: "auto",
                    //     position: "absolute",
                    //     left: "232px",
                    //     top: "0px",
                    //   }}
                    // >
                    //   <div className="border-radius-2 center-alignment rel-pos image-width-album-photo responsive-container-waterfall">
                    //     <img
                    //       className="link-detail border-radius-2 image-width-album-photo responsive ng-scope"
                    //       src={`http://localhost:3000/uploads/${gallery.image2}`}
                    //     />
                    //     <div
                    //       ng-style="(n.type==1)?{'background-color': 'black'}:''"
                    //       className="link-detail border-radius-2"
                    //     ></div>
                    //   </div>
                    // </div>
                    // <div
                    //   ng-repeat="n in obj"
                    //   className="get-options-no-width grid-item inline-block rel-pos ng-scope"
                    //   style={{
                    //     width: "auto",
                    //     marginLeft: "auto",
                    //     marginRight: "auto",
                    //     position: "absolute",
                    //     left: "464px",
                    //     top: "0px",
                    //   }}
                    // >
                    //   <div className="border-radius-2 center-alignment rel-pos image-width-album-photo responsive-container-waterfall">
                    //     <img
                    //       className="link-detail border-radius-2 image-width-album-photo responsive ng-scope"
                    //       src={`http://localhost:3000/uploads/${gallery.image3}`}
                    //     />
                    //   </div>
                    // </div>
                    // <div
                    //   ng-repeat="n in obj"
                    //   className="get-options-no-width grid-item inline-block rel-pos ng-scope"
                    //   style={{
                    //     width: "auto",
                    //     marginLeft: "auto",
                    //     marginRight: "auto",
                    //     position: "absolute",
                    //     left: "696px",
                    //     top: "0px",
                    //   }}
                    // >
                    //   <div className="border-radius-2 center-alignment rel-pos image-width-album-photo responsive-container-waterfall">
                    //     <img
                    //       className="link-detail border-radius-2 image-width-album-photo responsive ng-scope"
                    //       src={`http://localhost:3000/uploads/${gallery.image4}`}
                    //     />
                    //   </div>
                    // </div>
                    // <div
                    //   ng-repeat="n in obj"
                    //   className="get-options-no-width grid-item inline-block rel-pos ng-scope"
                    //   style={{
                    //     width: "auto",
                    //     marginLeft: "auto",
                    //     marginRight: "auto",
                    //     position: "absolute",
                    //     left: "928px",
                    //     top: "0px",
                    //   }}
                    // >
                    //   <div className="border-radius-2 center-alignment rel-pos image-width-album-photo responsive-container-waterfall">
                    //     <img
                    //       className="link-detail border-radius-2 image-width-album-photo responsive ng-scope"
                    //       src={`http://localhost:3000/uploads/${gallery.image5}`}
                    //     />
                    //   </div>
                    // </div> */}
                    // </div>
                    <div className="margin-lr-8 margin-lr-md-0">
                      <div
                        style={{ marginBottom: "8px" }}
                        className="aspect-ratio-1-1-parent"
                      >
                        <img
                          className="aspect-ratio-child aspect-ratio-fit-photo border-radius-12 ng-isolate-scope"
                          src={`http://localhost:3000/uploads/${gallery.img}`}
                          alt="Image 1"
                          style={{
                            width: "100px",
                            height: "100px",
                            objectFit: "cover",
                            objectPosition: "center",
                            borderRadius: "12px",
                            border: "none",

                           
                           
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
