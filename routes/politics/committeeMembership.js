
import express from 'express';
import { verifyTokenAndAdmin } from '../verifyToken.js';
import { AddCommitteeMembership, deleteCommitteeMembership, getAllCommitteeMembership, getCommitteeMembership, updateCommitteeMembership } from '../../controllers/politics/committeeMembership.js';


const committeeMembershipRouter = express.Router();

committeeMembershipRouter.post("/add",verifyTokenAndAdmin, AddCommitteeMembership);
committeeMembershipRouter.put("/:id", verifyTokenAndAdmin, updateCommitteeMembership)
committeeMembershipRouter.delete("/:id", verifyTokenAndAdmin, deleteCommitteeMembership)

committeeMembershipRouter.get("/:id", getCommitteeMembership)
committeeMembershipRouter.get("/", getAllCommitteeMembership)


export default committeeMembershipRouter;