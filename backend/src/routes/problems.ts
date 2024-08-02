import express from "express";
import { problemId, problems, problemsPost } from "../controllers/problemsCon";
const router = express.Router();

router.get("/",problems);
router.post("/",problemsPost);
router.get("/problemId",problemId);


export default router;