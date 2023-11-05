import express from 'express';
import verify from "../verifyToken.js";
import { AddParliamentQuestion, deleteParliamentQuestion, getAllParliamentQuestion, getParliamentQuestion, updateParliamentQuestion } from '../../controllers/politics/parliamentQuestons.js';

const parliamentQuestionsRouter = express.Router();

parliamentQuestionsRouter.post("/add",verify, AddParliamentQuestion);
parliamentQuestionsRouter.put("/:id", verify, updateParliamentQuestion);
parliamentQuestionsRouter.delete("/:id", verify, deleteParliamentQuestion)

parliamentQuestionsRouter.get("/:id", getParliamentQuestion);
parliamentQuestionsRouter.get("/", getAllParliamentQuestion);


export default parliamentQuestionsRouter;