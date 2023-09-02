import express from 'express';
import { verifyTokenAndAdmin } from '../verifyToken.js';
import { AddSpecialMention, deleteSpecialMention, getAllSpecialMention, getSpecialMention, updateSpecialMention } from '../../controllers/politics/specialMention.js';


const specialMentaionRouter = express.Router();

specialMentaionRouter.post("/add",verifyTokenAndAdmin, AddSpecialMention);
specialMentaionRouter.put("/:id", verifyTokenAndAdmin, updateSpecialMention)
specialMentaionRouter.delete("/:id", verifyTokenAndAdmin, deleteSpecialMention)

specialMentaionRouter.get("/:id", getSpecialMention)
specialMentaionRouter.get("/", getAllSpecialMention)


export default specialMentaionRouter;