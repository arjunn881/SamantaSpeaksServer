import express from 'express';
import { verifyTokenAndAdmin } from '../verifyToken.js';
import { AddDebateSpeak, deleteDebateSpeak, getAllDebateSpeak, getDebateSpeak, updateDebateSpeak } from '../../controllers/politics/DebateSpeak.js';


const debateSpeakRouter = express.Router();

debateSpeakRouter.post("/add",verifyTokenAndAdmin, AddDebateSpeak);
debateSpeakRouter.put("/:id", verifyTokenAndAdmin, updateDebateSpeak)
debateSpeakRouter.delete("/:id", verifyTokenAndAdmin, deleteDebateSpeak)

debateSpeakRouter.get("/:id", getDebateSpeak)
debateSpeakRouter.get("/", getAllDebateSpeak)


export default debateSpeakRouter;