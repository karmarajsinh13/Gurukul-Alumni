import express from "express";
import {
  deleteEvent,
  getEvent,
  getEvents,
  insertEvent,
  updateEvent,
  Totalevent,

} from "../controller/event.js";
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

const router4 = express.Router();

router4.get("/", getEvents);
router4.get("/", Totalevent);

router4.get("/:id", getEvent);
router4.put("/:id",upload.single("image"), updateEvent);
router4.post("/",upload.single("image"), insertEvent);
router4.delete("/:id", deleteEvent);
export default router4;
