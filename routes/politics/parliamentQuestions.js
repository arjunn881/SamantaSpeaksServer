import express from 'express';
import { verifyTokenAndAdmin } from "../verifyToken.js";
import { AddParliamentQuestion, deleteParliamentQuestion, getAllParliamentQuestion, getParliamentQuestion, updateParliamentQuestion } from '../../controllers/politics/parliamentQuestons.js';

const parliamentQuestionsRouter = express.Router();

parliamentQuestionsRouter.post("/add",verifyTokenAndAdmin, AddParliamentQuestion);
parliamentQuestionsRouter.put("/:id", verifyTokenAndAdmin, updateParliamentQuestion);
parliamentQuestionsRouter.delete("/:id", verifyTokenAndAdmin, deleteParliamentQuestion)

parliamentQuestionsRouter.get("/:id", getParliamentQuestion);
parliamentQuestionsRouter.get("/", getAllParliamentQuestion);


export default parliamentQuestionsRouter;