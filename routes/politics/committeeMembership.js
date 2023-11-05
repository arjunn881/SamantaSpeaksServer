
import express from 'express';
import verify from '../verifyToken.js';
import { AddCommitteeMembership, deleteCommitteeMembership, getAllCommitteeMembership, getCommitteeMembership, updateCommitteeMembership } from '../../controllers/politics/committeeMembership.js';


const committeeMembershipRouter = express.Router();

committeeMembershipRouter.post("/add",verify, AddCommitteeMembership);
committeeMembershipRouter.put("/:id", verify, updateCommitteeMembership)
committeeMembershipRouter.delete("/:id", verify, deleteCommitteeMembership)

committeeMembershipRouter.get("/:id", getCommitteeMembership)
committeeMembershipRouter.get("/", getAllCommitteeMembership)


export default committeeMembershipRouter;