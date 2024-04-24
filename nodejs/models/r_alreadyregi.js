import express from "express";
import {
    Alyreadyreg,
} from "../controller/Alreadyregi.js";

const router11 = express.Router();

router11.get("/", Alyreadyreg);

export default router11;
