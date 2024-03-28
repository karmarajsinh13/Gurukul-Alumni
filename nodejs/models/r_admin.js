import express from "express";
import {
  deleteAdmin,
  getAdmin,
  getAdmins,
  insertAdmin,
  updateAdmin,
} from "../controller/admin.js";

const router2 = express.Router();

router2.get("/", getAdmins);
router2.get("/:id", getAdmin);
router2.put("/:id", updateAdmin);
router2.post("/", insertAdmin);
router2.delete("/:id", deleteAdmin);
export default router2;
