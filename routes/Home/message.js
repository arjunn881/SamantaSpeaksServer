import express from 'express';
import { verifyTokenAndAdmin } from '../verifyToken.js';
import { AddMessage, deleteMessage, getAllMessage, getMessage, updateMessage } from '../../controllers/Home/message.js';

const messageRouter = express.Router();

messageRouter.post("/add", verifyTokenAndAdmin, AddMessage)
messageRouter.put("/:id", verifyTokenAndAdmin, updateMessage)
messageRouter.delete("/:id", verifyTokenAndAdmin, deleteMessage)

messageRouter.get("/:id", getMessage)
messageRouter.get("/", getAllMessage)


export default messageRouter;