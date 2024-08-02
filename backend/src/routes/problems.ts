import express from "express";
import { problemId, problems, problemsPost } from "../controllers/problemsCon";
const router = express.Router();

router.get("/",problems);
router.post("/",problemsPost);
router.get("/:id",problemId);


export default router;