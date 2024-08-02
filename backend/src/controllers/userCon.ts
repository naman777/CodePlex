import { Request, Response } from "express";
import { PrismaClient } from '@prisma/client';
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();
const SECRET_KEY = process.env.JWT_SECRET_KEY!;

export const signup = async (req:Request,res:Response) => {
    const { name, email, password } = req.body;
    const existingUser = await prisma.user.findUnique({ 
        where:{
            email
        } 
    });

    if(existingUser){
        return res.status(409).json({"error":"Email already exists"});
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
        data:{
            name,
            email,
            password:hashedPassword
        }
    })

    const payload = { name, email };

    const token = jwt.sign(payload, SECRET_KEY, {
        expiresIn: '7d' 
    });

    return res.cookie('authToken', token, {
        httpOnly: true, 
        maxAge: 7000 * 60 * 60 * 24, 
        sameSite: 'strict' 
    }).status(201).json({ message: 'User signed up successfully' });

}


export const login = async (req:Request,res:Response) => {
    const { email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await prisma.user.findUnique({
        where:{
            email,
            password:hashedPassword
        }
    })

    if(user){
        const payload = { name: user.name, email: user.email };
        const token = jwt.sign(payload, SECRET_KEY, {
            expiresIn: '7d' 
        });
    
        return res.cookie('authToken', token, {
            httpOnly: true, 
            maxAge: 7000 * 60 * 60 * 24, 
            sameSite: 'strict' 
        }).status(200).json({ message: 'User Logined successfully' });
    }

    return res.status(409).json({
        "error": 'Invalid email or password',
    })
}