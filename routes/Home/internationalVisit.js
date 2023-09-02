import  express  from "express";
import { verifyTokenAndAdmin } from "../verifyToken.js";
import { AddInternationalVisit, deleteInternationalVisit, getAllInternationalVisit, getInternationalVisit, updateInternationalVisit } from "../../controllers/Home/internationalVisit.js";

const internationalVisitRouter = express.Router();

internationalVisitRouter.post("/add",verifyTokenAndAdmin, AddInternationalVisit);
internationalVisitRouter.put("/:id", verifyTokenAndAdmin, updateInternationalVisit)
internationalVisitRouter.delete("/:id", verifyTokenAndAdmin, deleteInternationalVisit)

internationalVisitRouter.get("/:id", getInternationalVisit)
internationalVisitRouter.get("/", getAllInternationalVisit)


export default internationalVisitRouter;