import express  from "express";
import { verifyTokenAndAdmin } from "../verifyToken.js";
import { AddDiscussionOnGovt, deleteDiscussionOnGovt, getAllDiscussionOnGovt, getDiscussionOnGovt, updateDiscussionOnGovt } from "../../controllers/politics/discussionOnGovt.js";



const discussionOnGovtRouter = express.Router();

discussionOnGovtRouter.post("/add",verifyTokenAndAdmin, AddDiscussionOnGovt);
discussionOnGovtRouter.put("/:id", verifyTokenAndAdmin, updateDiscussionOnGovt)
discussionOnGovtRouter.delete("/:id", verifyTokenAndAdmin, deleteDiscussionOnGovt)

discussionOnGovtRouter.get("/:id", getDiscussionOnGovt)
discussionOnGovtRouter.get("/", getAllDiscussionOnGovt)


export default discussionOnGovtRouter;