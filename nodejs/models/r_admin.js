import express from "express";
import {
  deleteAdmin,
  getAdmin,
  getAdmins,
  insertAdmin,
  updateAdmin,
} from "../controller/admin.js";
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

const router2 = express.Router();

router2.get("/", getAdmins);
router2.get("/:id", getAdmin);
router2.put("/:id",upload.single("photo"), updateAdmin);
router2.post("/",upload.single("photo"), insertAdmin);
router2.delete("/:id", deleteAdmin);
export default router2;
