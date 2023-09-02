
import express  from "express";
import { verifyTokenAndAdmin } from "../verifyToken.js";
import { AddForm, deleteForm, getAllForm, getForm, updateForm } from "../../controllers/ContactUs/form.js";





const formRouter = express.Router();

formRouter.post("/add",verifyTokenAndAdmin, AddForm);
formRouter.put("/:id", verifyTokenAndAdmin, updateForm)
formRouter.delete("/:id", verifyTokenAndAdmin, deleteForm)

formRouter.get("/:id", getForm)
formRouter.get("/", getAllForm)


export default formRouter;