import  express  from "express";
import verify from "../verifyToken.js";
import { AddDoctorates, deleteDoctorates, getAllDoctorates, getDoctorates, updateDoctorates } from "../../controllers/AwardsNRecognition/doctorates.js";

const doctoratesRouter = express.Router();

doctoratesRouter.post("/add",verify, AddDoctorates);
doctoratesRouter.put("/:id", verify, updateDoctorates)
doctoratesRouter.delete("/:id", verify, deleteDoctorates)

doctoratesRouter.get("/:id", getDoctorates)
doctoratesRouter.get("/", getAllDoctorates)


export default doctoratesRouter;