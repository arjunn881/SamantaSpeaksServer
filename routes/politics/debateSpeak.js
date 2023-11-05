import express from 'express';
import verify from '../verifyToken.js';
import { AddDebateSpeak, deleteDebateSpeak, getAllDebateSpeak, getDebateSpeak, updateDebateSpeak } from '../../controllers/politics/DebateSpeak.js';


const debateSpeakRouter = express.Router();

debateSpeakRouter.post("/add",verify, AddDebateSpeak);
debateSpeakRouter.put("/:id", verify, updateDebateSpeak)
debateSpeakRouter.delete("/:id", verify, deleteDebateSpeak)

debateSpeakRouter.get("/:id", getDebateSpeak)
debateSpeakRouter.get("/", getAllDebateSpeak)


export default debateSpeakRouter;