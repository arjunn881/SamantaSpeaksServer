import  express  from "express";
import { verifyTokenAndAdmin } from "../verifyToken.js";
import { AddNews, deleteNews, getAllNews, getNews, updateNews } from "../../controllers/Home/news.js";

const newsRouter = express.Router();

newsRouter.post("/add",verifyTokenAndAdmin, AddNews);
newsRouter.put("/:id", verifyTokenAndAdmin, updateNews)
newsRouter.delete("/:id", verifyTokenAndAdmin, deleteNews)

newsRouter.get("/:id", getNews)
newsRouter.get("/", getAllNews)


export default newsRouter;