import  express  from "express";
import verify from "../verifyToken.js";
import { AddMemberships, deleteMemberships, getAllMemberships, getMemberships, updateMemberships } from "../../controllers/AwardsNRecognition/memberships.js";

const membershipsRouter = express.Router();

membershipsRouter.post("/add",verify, AddMemberships);
membershipsRouter.put("/:id", verify, updateMemberships)
membershipsRouter.delete("/:id", verify, deleteMemberships)

membershipsRouter.get("/:id", getMemberships)
membershipsRouter.get("/", getAllMemberships)


export default membershipsRouter;