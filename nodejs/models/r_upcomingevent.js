import express from "express";
import {
 Upcomingevent,
} from "../controller/Upcomingevent.js";

const router9 = express.Router();

router9.get("/", Upcomingevent);

export default router9;
