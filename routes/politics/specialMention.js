import express from 'express';
import verify from '../verifyToken.js';
import { AddSpecialMention, deleteSpecialMention, getAllSpecialMention, getSpecialMention, updateSpecialMention } from '../../controllers/politics/specialMention.js';


const specialMentaionRouter = express.Router();

specialMentaionRouter.post("/add",verify, AddSpecialMention);
specialMentaionRouter.put("/:id", verify, updateSpecialMention)
specialMentaionRouter.delete("/:id", verify, deleteSpecialMention)

specialMentaionRouter.get("/:id", getSpecialMention)
specialMentaionRouter.get("/", getAllSpecialMention)


export default specialMentaionRouter;