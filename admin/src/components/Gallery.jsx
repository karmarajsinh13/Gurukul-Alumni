import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Gallery() {
  const [gallery, setgallery] = useState([]);

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
    <div
      style={{ marginTop: "50px", marginLeft: "290px", marginRight: "20px" }}
    >
      <div class="row">
        <div class="col-12">
          <div class="card mb-4">
            <div className="card-body">
              <div class="card-header pb-0">
                <h2>Gallery table</h2>
                <li class="nav-item d-flex align-items-center">
                  <Link
                    class="btn btn-outline-primary btn-sm mb-0 me-3"
                    to="/Add_gallery"
                  >
                    Add Gallery
                  </Link>
                </li>
              </div>
              <div class="card-body px-0 pt-0 pb-2">
                <div class="table-responsive p-0">
                  <table class="table align-items-center mb-0">
                    <thead>
                      <tr role="row">
                        <th
                          className="text-center "
                          style={{
                            width: "40px",
                          }}
                        >
                          IMG
                        </th>
                        <th className="text-center " style={{ width: "25px" }}>
                          Gallery
                        </th>
                        <th className="text-center " style={{ width: "25px" }}>
                          Description
                        </th>
                        <th
                          className="text-center sorting"
                          style={{ width: "100px" }}
                        >
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {gallery.map((gallery) => (
                        <tr role="row" className="odd">
                          <td class="align-middle text-center">
                            <img
                              src={`http://localhost:3000/uploads/${gallery.img}`}
                              class="avatar avatayyr-lg me-6"
                              style={{
                                width: "200px",
                                height: "150px",
                                objectFit: "cover",
                                objectPosition: "center",
                                borderRadius: "10px",
                                cursor: "pointer",
                              }}
                              alt="user1"
                            />
                          </td>
                          <td class="align-middle text-center">
                            {gallery.title}
                          </td>
                          <td class="align-middle text-center">
                            {gallery.des}
                          </td>
                          <td className="text-center">
                            <button
                              className="btn btn-xs btn-primary edit_gallery"
                              type="button"
                            >
                               <Link to={`/Add_gallery/` + gallery.img_id}>Edit</Link>
                            </button> &nbsp;&nbsp;
                            <button
                              className="btn btn-xs btn-info edit_gallery"
                              type="button"

                            >
                              <Link to={`/All_gallery/` + gallery.img_id}>View</Link>
                            </button>
                            &nbsp;&nbsp;
                            <button
                              href="/Gallery"
                              class="btn btn-xs btn-danger delete_gallery"
                              onClick={() => deletegallery(gallery.img_id)}
                            >
                              <i class="far fa-trash-alt me-2"></i>
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
