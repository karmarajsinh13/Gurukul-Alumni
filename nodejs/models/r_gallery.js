import express from "express";
import {
  deletegallery,
  getgallery,
  getgallerys,
  insertgallery,
  updategallery,
} from "../controller/gallery.js";

import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname + Date.now());
  },
  
});

const upload = multer({ storage: storage });

const router5 = express.Router();

router5.get("/", getgallerys);
router5.get("/:id", getgallery);
router5.put("/:id",upload.single("image1","image2","image3","image4","image5"), updategallery);
router5.post("/",upload.single("image1","image2","image3","image4","image5"), insertgallery);
router5.delete("/:id", deletegallery);
export default router5;
