import express from "express";
import {
  deleteEvent,
  getEvent,
  getEvents,
  insertEvent,
  updateEvent,
} from "../controller/event.js";

const router4 = express.Router();

router4.get("/", getEvents);
router4.get("/:id", getEvent);
router4.put("/:id", updateEvent);
router4.post("/", insertEvent);
router4.delete("/:id", deleteEvent);
export default router4;
