import express from "express";
import { PrismaClient } from '@prisma/client';
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import problemsRoutes from "./routes/problems"
import submissionRouter from "./routes/submission";

dotenv.config();

const prisma = new PrismaClient();
const app = express();


app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cors());


app.use("/api/problems", problemsRoutes);
app.use("/api/submission", submissionRouter);