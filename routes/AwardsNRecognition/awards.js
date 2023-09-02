import  express  from "express";
import { verifyTokenAndAdmin } from "../verifyToken.js";
import { AddAwards, deleteAwards, getAllAwards, getAwards, updateAwards } from "../../controllers/AwardsNRecognition/awards.js";



const awardsRouter = express.Router();

awardsRouter.post("/add",verifyTokenAndAdmin, AddAwards);
awardsRouter.put("/:id", verifyTokenAndAdmin, updateAwards)
awardsRouter.delete("/:id", verifyTokenAndAdmin, deleteAwards)

awardsRouter.get("/:id", getAwards)
awardsRouter.get("/", getAllAwards)


export default awardsRouter;