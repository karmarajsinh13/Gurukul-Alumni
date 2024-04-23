import express from "express";

import multer from "multer";
import { deletegallerys, getgallerys, getgalleryss, insertgallerys, updategallerys } from "../controller/alumnigallery.js";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname + Date.now());
  },
  
});

const upload = multer({ storage: storage });

const router50 = express.Router();

router50.get("/", getgalleryss);
router50.get("/:id", getgallerys);
router50.put("/:id",upload.single("img"), updategallerys);
router50.post("/",upload.single("img"), insertgallerys);
router50.delete("/:id", deletegallerys);
export default router50;
