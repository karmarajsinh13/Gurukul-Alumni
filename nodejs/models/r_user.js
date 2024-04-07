import express from "express";
import {
  deleteuser,
  getUser,
  getUsers,
  insertUser,
  updateUser,
} from "../controller/user.js";
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


const router7 = express.Router();

router7.get("/", getUsers);
router7.get("/:id", getUser);
router7.put("/:id",upload.single("photo"),  updateUser);
router7.post("/",upload.single("photo"),  insertUser);
router7.delete("/:id", deleteuser);
export default router7;
