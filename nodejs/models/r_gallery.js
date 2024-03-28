import express from "express";
import {
  deletegallery,
  getgallery,
  getgallerys,
  insertgallery,
  updategallery,
} from "../controller/gallery.js";

const router5 = express.Router();

router5.get("/", getgallerys);
router5.get("/:id", getgallery);
router5.put("/:id", updategallery);
router5.post("/", insertgallery);
router5.delete("/:id", deletegallery);
export default router5;
