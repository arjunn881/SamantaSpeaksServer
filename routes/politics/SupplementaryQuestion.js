import express from 'express';
import verify from "../verifyToken.js";
import { AddSupplementaryQuestion, deleteSupplementaryQuestion, getAllSupplementaryQuestion, getSupplementaryQuestion, updateSupplementaryQuestion } from '../../controllers/politics/supplementaryQuestion.js';


const supplementaryQuestionRouter = express.Router();

supplementaryQuestionRouter.post("/add",verify, AddSupplementaryQuestion);
supplementaryQuestionRouter.put("/:id", verify, updateSupplementaryQuestion);
supplementaryQuestionRouter.delete("/:id", verify, deleteSupplementaryQuestion)

supplementaryQuestionRouter.get("/:id", getSupplementaryQuestion);
supplementaryQuestionRouter.get("/", getAllSupplementaryQuestion);

export default supplementaryQuestionRouter;