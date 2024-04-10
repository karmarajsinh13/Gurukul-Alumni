import express from "express";

import { getAdmin } from "../controller/adminlogin.js";

const router31 = express.Router();
router31.get("/", getAdmin);
export default router31;
