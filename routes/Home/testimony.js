import  express  from "express";
import verify from "../verifyToken.js";
import { AddTestimony, deleteTestimony, getAllTestimony, getTestimony, updateTestimony } from "../../controllers/Home/testimony.js";


const testimonyRouter = express.Router();

testimonyRouter.post("/add",verify, AddTestimony);
testimonyRouter.put("/:id", verify, updateTestimony)
testimonyRouter.delete("/:id", verify, deleteTestimony)

testimonyRouter.get("/:id", getTestimony)
testimonyRouter.get("/", getAllTestimony)


export default testimonyRouter;