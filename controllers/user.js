import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt"

const prisma = new PrismaClient();


export async function createUser(req, res, next) {
    const { username, email, password} = req.body;
    const hashedPass = await bcrypt.hash(password, 10)
    await prisma.$connect();
    try {
        const newUser = await prisma.user.create({
            data: {
                username: username,
                email: email,
                password: hashedPass,

            }
        })
        res.status(200).send(newUser)
    } catch (error) {
        console.log(error)
    } finally {
        await prisma.$disconnect();
    }
}

export async function logUser(req, res, next) {
    const { username, password } = req.body;
    await prisma.$connect();
    try {
        const user = await prisma.user.findFirst({
            where: {
                username: username
            }

        })
        bcrypt.compare(password, user.password)
    } catch (error) {
        
    }
}