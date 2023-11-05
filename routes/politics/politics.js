
import express  from "express";
import verify from "../verifyToken.js";
import { AddPolitics, deletePolitics, getAllPolitics, getPolitics, updatePolitics } from "../../controllers/politics/politics.js";






const politicsRouter = express.Router();

politicsRouter.post("/add",verify, AddPolitics);
politicsRouter.put("/:id", verify, updatePolitics)
politicsRouter.delete("/:id", verify, deletePolitics)

politicsRouter.get("/:id", getPolitics)
politicsRouter.get("/", getAllPolitics)


export default politicsRouter;