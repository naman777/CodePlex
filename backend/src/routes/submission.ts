import  express  from "express";
import { submissionHandler } from "../controllers/submissionHandler";

const router = express.Router();

router.post("/",submissionHandler);


export default router;