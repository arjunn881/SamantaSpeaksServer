import  express  from "express";

import { AddAwards, deleteAwards, getAllAwards, getAwards, updateAwards } from "../../controllers/AwardsNRecognition/awards.js";
import verify from "../verifyToken.js";



const awardsRouter = express.Router();

awardsRouter.post("/add",verify, AddAwards);
awardsRouter.put("/:id", verify, updateAwards)
awardsRouter.delete("/:id", verify, deleteAwards)

awardsRouter.get("/:id", getAwards)
awardsRouter.get("/", getAllAwards)


export default awardsRouter;