import express from "express";
import {
  deletejob,
  getjob,
  getjobs,
  insertjob,
  updatejob,
} from "../controller/job.js";

const router6 = express.Router();

router6.get("/", getjobs);
router6.get("/:id", getjob);
router6.put("/:id", updatejob);
router6.post("/", insertjob);
router6.delete("/:id", deletejob);
export default router6;
