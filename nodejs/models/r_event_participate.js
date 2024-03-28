import express from "express";
import {
  deleteevent_participate,
  getevent_participate,
  getevent_participates,
  insertevent_participate,
  updateevent_participate,
} from "../controller/event_participate.js";

const router3 = express.Router();

router3.get("/", getevent_participates);
router3.get("/:id", getevent_participate);
router3.put("/:id", updateevent_participate);
router3.post("/", insertevent_participate);
router3.delete("/:id", deleteevent_participate);
export default router3;
