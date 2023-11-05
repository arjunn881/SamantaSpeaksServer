import express from 'express';
import verify from '../verifyToken.js';
import { AddArticle, deleteArticle, getAllArticle, getArticle, updateArticle } from '../../controllers/Home/article.js';



const articleRouter = express.Router();

articleRouter.post("/add", verify, AddArticle)
articleRouter.put("/:id", verify, updateArticle)
articleRouter.delete("/:id",verify,  deleteArticle)

articleRouter.get("/:id", getArticle)
articleRouter.get("/", getAllArticle);



export default articleRouter;