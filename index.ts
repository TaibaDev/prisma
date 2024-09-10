import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
async function main(){
    const createUser = await prisma.user.create({
        data: {
            name: "Tayyab Sadiq",
            email: "tayyab@gmail.com",
    }})
    console.log(createUser)
}

console.log("Tayyab Sadiq");
// main().then(()=>{}).catch(()=>{});