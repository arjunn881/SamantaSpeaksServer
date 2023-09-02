import express from 'express';
import { verifyTokenAndAdmin } from '../verifyToken.js';
import { AddArticle, deleteArticle, getAllArticle, getArticle, updateArticle } from '../../controllers/Home/article.js';



const articleRouter = express.Router();

articleRouter.post("/add", verifyTokenAndAdmin, AddArticle)
articleRouter.put("/:id", verifyTokenAndAdmin, updateArticle)
articleRouter.delete("/:id", verifyTokenAndAdmin, deleteArticle)

articleRouter.get("/:id", getArticle)
articleRouter.get("/", getAllArticle);



export default articleRouter;