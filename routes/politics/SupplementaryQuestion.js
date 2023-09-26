import express from 'express';
import { verifyTokenAndAdmin } from "../verifyToken.js";
import { AddSupplementaryQuestion, deleteSupplementaryQuestion, getAllSupplementaryQuestion, getSupplementaryQuestion, updateSupplementaryQuestion } from '../../controllers/politics/supplementaryQuestion.js';


const supplementaryQuestionRouter = express.Router();

supplementaryQuestionRouter.post("/add",verifyTokenAndAdmin, AddSupplementaryQuestion);
supplementaryQuestionRouter.put("/:id", verifyTokenAndAdmin, updateSupplementaryQuestion);
supplementaryQuestionRouter.delete("/:id", verifyTokenAndAdmin, deleteSupplementaryQuestion)

supplementaryQuestionRouter.get("/:id", getSupplementaryQuestion);
supplementaryQuestionRouter.get("/", getAllSupplementaryQuestion);

export default supplementaryQuestionRouter;