import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function returnCategories(req, res, next) {
    await prisma.$connect();
    try {
        const categories = await prisma.category.findMany({});
        
        if(!categories) {
            res.status(404).send({ message: 'No categories found. '})
        } else if(categories) {
            res.status(200).send(categories);
        } else {
            res.status(500).send({ message: 'Server error, please try again later.' })
        }

        await prisma.$disconnect();
    } catch (error) {
        console.log(error)
    }
}

export async function returnCategory(req, res, next) {
    await prisma.$connect();
    
    try {
        const category = await prisma.category.findUnique({
            where: {
                id: Number(req.params.id)
            }
        })
        if(!category) {
            res.status(404).send({ message: 'No category found for id ' + req.params.id})
        } else if(category) {
            res.status(200).send(category)
        } else {
            res.status(500).send({ message: 'Server error, please try again later.' })
        }
        console.log(Number(req.params.id))
        await prisma.$disconnect();
    } catch (error) {
        console.log(error);    
    }
}

export async function createCategory(req, res, next) {
    await prisma.$connect();
    try {
        const category = await prisma.category.create({
            data: req.body
        })
        res.status(201).send(category)
        await prisma.$disconnect();
    } catch (error) {
        console.log(error)
    }
};

export async function updateCategory(req, res, next) {
    
};

export async function deleteCategory(req, res, next) {
    await prisma.$connect();
    try {
        const category = await prisma.category.delete({
            where: {
                id: Number(req.params.id)
            }
        })
        if(!category) {
            res.status(404).send({ message: 'No category found for id'+ req.params.id})
        } else if(category) {
            res.status(200).send(category)
        } else {
            res.status(500).send({ message: 'Server error, please try again later.' })
        }
    } catch (error) {
        res.send(error)
    } finally {
        await prisma.$disconnect();
    }
};

export async function wipeCategories(req, res, next) {
    await prisma.$connect();
    try {
        await prisma.category.deleteMany({});
        res.status(200).send({ message: 'All categories deleted.' });
    } catch (error) {
        res.send(error)
    } finally {
        await prisma.$disconnect();
    }
};