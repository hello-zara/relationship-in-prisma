import { PrismaClient } from "@prisma/client";

const Prisma = new PrismaClient();

async function insertUser(username: string, password: string, firstName: string, lastName: string){
    const response = await Prisma.user.create({
        data:{
            username,
            password,
            firstName,
            lastName
        }
    })
    console.log(response)
}


insertUser("djnj", "njnfvfj", "fjdnjn", "nvjsdnfvj")