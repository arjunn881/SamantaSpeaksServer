import  express  from "express";
import verify from "../verifyToken.js";
import { AddNews, deleteNews, getAllNews, getNews, updateNews } from "../../controllers/Home/news.js";

const newsRouter = express.Router();

newsRouter.post("/add",verify, AddNews);
newsRouter.put("/:id", verify, updateNews)
newsRouter.delete("/:id", verify, deleteNews)

newsRouter.get("/:id", getNews)
newsRouter.get("/", getAllNews)


export default newsRouter;