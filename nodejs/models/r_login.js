import express from "express";

import { getUser } from "../controller/login.js";

const router30 = express.Router();
router30.get("/", getUser);
export default router30;
