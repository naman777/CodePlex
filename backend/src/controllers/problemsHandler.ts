import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const problems = async (req:Request, res:Response) => {
    try {
        const problems = await prisma.problems.findMany();
        res.status(200).json(problems);
    } catch (error) {
        res.status(500).json(error);
    }
}

export const problemId = async (req:Request, res:Response) => {
    try {
        const {id} = req.body;
        const problem = await prisma.problems.findUnique({
            where: {
                id: parseInt(id)
            }
        });
        res.status(200).json({
            id: problem?.id,
            title: problem?.title,
            description: problem?.description,
            tags:problem?.tags,
            sampleTestCase:problem?.sampleTestCase,
            sampleTestCaseAns:problem?.sampleTestCaseAns
        });
    } catch (error) {
        res.status(500).json(error);
        console.log(error);
    }
}

export const problemsPost = async (req:Request, res:Response) => {
    try {
        const { title, description, tags, testCases, testCaseAns, sampleTestCase, sampleTestCaseAns } = req.body;
        await prisma.problems.create({
            data: {
                title,
                description,
                tags,
                sampleTestCase,
                sampleTestCaseAns
            }
        })
        res.status(201).json({ message: 'Problem created successfully'});
    } catch (error) {
        res.status(500).json(error);
    }
}