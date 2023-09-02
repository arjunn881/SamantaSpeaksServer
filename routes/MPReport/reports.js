import express from "express";

import { verifyTokenAndAdmin } from "../verifyToken.js";
import { AddReport, deleteReport, getAllReports, getReport, updateReport } from "../../controllers/MPReport/reports.js";






const reportsRouter = express.Router();

reportsRouter.post("/add",verifyTokenAndAdmin,AddReport );
reportsRouter.put("/:id", verifyTokenAndAdmin,updateReport )
reportsRouter.delete("/:id", verifyTokenAndAdmin,deleteReport )

reportsRouter.get("/:id", getReport )
reportsRouter.get("/", getAllReports )


export default reportsRouter;