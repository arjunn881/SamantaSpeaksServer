
import express  from "express";
import { verifyTokenAndAdmin } from "../verifyToken.js";
import { AddPolitics, deletePolitics, getAllPolitics, getPolitics, updatePolitics } from "../../controllers/politics/politics.js";






const politicsRouter = express.Router();

politicsRouter.post("/add",verifyTokenAndAdmin, AddPolitics);
politicsRouter.put("/:id", verifyTokenAndAdmin, updatePolitics)
politicsRouter.delete("/:id", verifyTokenAndAdmin, deletePolitics)

politicsRouter.get("/:id", getPolitics)
politicsRouter.get("/", getAllPolitics)


export default politicsRouter;