import express from 'express';
import verify from '../verifyToken.js';
import { AddMessage, deleteMessage, getAllMessage, getMessage, updateMessage } from '../../controllers/Home/message.js';

const messageRouter = express.Router();

messageRouter.post("/add", verify, AddMessage)
messageRouter.put("/:id", verify, updateMessage)
messageRouter.delete("/:id", verify, deleteMessage)

messageRouter.get("/:id", getMessage)
messageRouter.get("/", getAllMessage)


export default messageRouter;