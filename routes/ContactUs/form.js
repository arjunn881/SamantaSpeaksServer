
import express  from "express";
import verify from "../verifyToken.js";
import { AddForm, deleteForm, getAllForm, getForm, updateForm } from "../../controllers/ContactUs/form.js";





const formRouter = express.Router();

formRouter.post("/add",verify, AddForm);
formRouter.put("/:id", verify, updateForm)
formRouter.delete("/:id", verify, deleteForm)

formRouter.get("/:id", getForm)
formRouter.get("/", getAllForm)


export default formRouter;