import express from "express";

import verify from "../verifyToken.js";
import { AddReport, deleteReport, getAllReports, getReport, updateReport } from "../../controllers/MPReport/reports.js";






const reportsRouter = express.Router();

reportsRouter.post("/add",verify,AddReport );
reportsRouter.put("/:id", verify,updateReport )
reportsRouter.delete("/:id", verify,deleteReport )

reportsRouter.get("/:id", getReport )
reportsRouter.get("/", getAllReports )


export default reportsRouter;