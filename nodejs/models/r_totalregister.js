import express from "express";
import {
    Totalinvite,
} from "../controller/Totalregister.js";

const router10 = express.Router();

router10.get("/", Totalinvite);

export default router10;
