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
        const id = req.params.id;
        const problem = await prisma.problems.findUnique({
            where: {
                id: parseInt(id)
            }
        });
        res.status(200).json(problem);
    } catch (error) {
        res.status(500).json(error);
    }
}

export const problemsPost = async (req:Request, res:Response) => {
    try {
        const { title, description, code, tags } = req.body;
        await prisma.problems.create({
            data: {
                title,
                description,
                code,
                tags
            }
        })
        res.status(201).json({ message: 'Problem created successfully'});
    } catch (error) {
        res.status(500).json(error);
    }
}