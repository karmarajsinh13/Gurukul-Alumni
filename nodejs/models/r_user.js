import express from "express";
import {
  deleteuser,
  getuser,
  getusers,
  insertuser,
  updateuser,
} from "../controller/user.js";

const router7 = express.Router();

router7.get("/", getusers);
router7.get("/:id", getuser);
router7.put("/:id", updateuser);
router7.post("/", insertuser);
router7.delete("/:id", deleteuser);
export default router7;
