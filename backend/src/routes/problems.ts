import express from "express";
import { problemId, problems, problemsPost } from "../controllers/problemsHandler";
const router = express.Router();

router.get("/",problems);
router.post("/",problemsPost);
router.post("/problemId",problemId);


export default router;