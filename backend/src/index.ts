import express from "express";
import { PrismaClient } from '@prisma/client';
import dotenv from "dotenv";
import cors from "cors";
import problemsRoutes from "./routes/problems"
import submissionRouter from "./routes/submission";
import userRouter from "./routes/userRoutes";
import ide from "./routes/compiler"

dotenv.config();

const prisma = new PrismaClient();
const app = express();


app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(cors());


app.use("/api/problems", problemsRoutes);
app.use("/api/submission", submissionRouter);
app.use("/api/user",userRouter);
app.use("/api/ide",ide)

app.listen(7777,()=>{
    console.log("Server is running on port 7777");
});