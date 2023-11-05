import  express  from "express";
import verify from "../verifyToken.js";
import { AddInternationalVisit, deleteInternationalVisit, getAllInternationalVisit, getInternationalVisit, updateInternationalVisit } from "../../controllers/Home/internationalVisit.js";

const internationalVisitRouter = express.Router();

internationalVisitRouter.post("/add",verify, AddInternationalVisit);
internationalVisitRouter.put("/:id", verify, updateInternationalVisit)
internationalVisitRouter.delete("/:id", verify, deleteInternationalVisit)

internationalVisitRouter.get("/:id", getInternationalVisit)
internationalVisitRouter.get("/", getAllInternationalVisit)


export default internationalVisitRouter;