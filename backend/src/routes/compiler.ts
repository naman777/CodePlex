import express from "express";
import { compilerHandler } from "../controllers/compilerHandler";

const router = express.Router();

router.post("/",compilerHandler);

export default router;