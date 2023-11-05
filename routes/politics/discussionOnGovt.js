import express  from "express";
import verify from "../verifyToken.js";
import { AddDiscussionOnGovt, deleteDiscussionOnGovt, getAllDiscussionOnGovt, getDiscussionOnGovt, updateDiscussionOnGovt } from "../../controllers/politics/discussionOnGovt.js";



const discussionOnGovtRouter = express.Router();

discussionOnGovtRouter.post("/add",verify, AddDiscussionOnGovt);
discussionOnGovtRouter.put("/:id", verify, updateDiscussionOnGovt)
discussionOnGovtRouter.delete("/:id", verify, deleteDiscussionOnGovt)

discussionOnGovtRouter.get("/:id", getDiscussionOnGovt)
discussionOnGovtRouter.get("/", getAllDiscussionOnGovt)


export default discussionOnGovtRouter;