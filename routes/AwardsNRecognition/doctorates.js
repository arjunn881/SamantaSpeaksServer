import  express  from "express";
import { verifyTokenAndAdmin } from "../verifyToken.js";
import { AddDoctorates, deleteDoctorates, getAllDoctorates, getDoctorates, updateDoctorates } from "../../controllers/AwardsNRecognition/doctorates.js";

const doctoratesRouter = express.Router();

doctoratesRouter.post("/add",verifyTokenAndAdmin, AddDoctorates);
doctoratesRouter.put("/:id", verifyTokenAndAdmin, updateDoctorates)
doctoratesRouter.delete("/:id", verifyTokenAndAdmin, deleteDoctorates)

doctoratesRouter.get("/:id", getDoctorates)
doctoratesRouter.get("/", getAllDoctorates)


export default doctoratesRouter;