import express from "express";
import  verify from "./verifyToken.js";
import { deleteUser, getAllUser, getUser, getUserStats, update } from "../controllers/user.js";

const router = express.Router();

router.put('/:id', verify , update );

router.delete('/:id', verify , deleteUser );

router.get('/find/:id', verify, getUser );

router.get('/', verify, getAllUser );

router.get('/stats', verify , getUserStats );


export default router;

