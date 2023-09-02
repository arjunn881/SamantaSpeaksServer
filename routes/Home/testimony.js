import  express  from "express";
import { verifyTokenAndAdmin } from "../verifyToken.js";
import { AddTestimony, deleteTestimony, getAllTestimony, getTestimony, updateTestimony } from "../../controllers/Home/testimony.js";


const testimonyRouter = express.Router();

testimonyRouter.post("/add",verifyTokenAndAdmin, AddTestimony);
testimonyRouter.put("/:id", verifyTokenAndAdmin, updateTestimony)
testimonyRouter.delete("/:id", verifyTokenAndAdmin, deleteTestimony)

testimonyRouter.get("/:id", getTestimony)
testimonyRouter.get("/", getAllTestimony)


export default testimonyRouter;