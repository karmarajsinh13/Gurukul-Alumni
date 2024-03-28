import express from "express";
import {
  deleteContact,
  getContacts,
  getContact,
  insertContact,
  updateContact,
} from "../controller/contact_us.js";

const router1 = express.Router();

router1.get("/", getContacts);
router1.get("/:id", getContact);
router1.put("/:id", updateContact);
router1.post("/", insertContact);
router1.delete("/:id", deleteContact);
export default router1;
