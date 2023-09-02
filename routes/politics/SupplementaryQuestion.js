import express from 'express';
import { verifyTokenAndAdmin } from "../verifyToken.js";
import { AddSupplementaryQuestion, deleteSupplementaryQuestion, getSupplementaryQuestion, updateSupplementaryQuestion } from '../../controllers/politics/supplementaryQuestion.js';
import { getAllParliamentQuestion } from '../../controllers/politics/parliamentQuestons.js';

const supplementaryQuestionRouter = express.Router();

supplementaryQuestionRouter.post("/add",verifyTokenAndAdmin, AddSupplementaryQuestion);
supplementaryQuestionRouter.put("/:id", verifyTokenAndAdmin, updateSupplementaryQuestion);
supplementaryQuestionRouter.delete("/:id", verifyTokenAndAdmin, deleteSupplementaryQuestion)

supplementaryQuestionRouter.get("/:id", getSupplementaryQuestion);
supplementaryQuestionRouter.get("/", getAllParliamentQuestion);

export default supplementaryQuestionRouter;