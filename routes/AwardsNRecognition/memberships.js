import  express  from "express";
import { verifyTokenAndAdmin } from "../verifyToken.js";
import { AddMemberships, deleteMemberships, getAllMemberships, getMemberships, updateMemberships } from "../../controllers/AwardsNRecognition/memberships.js";

const membershipsRouter = express.Router();

membershipsRouter.post("/add",verifyTokenAndAdmin, AddMemberships);
membershipsRouter.put("/:id", verifyTokenAndAdmin, updateMemberships)
membershipsRouter.delete("/:id", verifyTokenAndAdmin, deleteMemberships)

membershipsRouter.get("/:id", getMemberships)
membershipsRouter.get("/", getAllMemberships)


export default membershipsRouter;