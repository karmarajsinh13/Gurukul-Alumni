import express from "express";
import {
 Pastevent,
} from "../controller/Pastevent.js";

const router8 = express.Router();

router8.get("/", Pastevent);

export default router8;
