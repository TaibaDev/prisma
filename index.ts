import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
async function main(){
    // const createUser = await prisma.user.create({
    //     data: {
    //         name: "Tariq Sadiq",
    //         email: "tariq@gmail.com",
    // }})
    // console.log(createUser)
    // const createArticle = await prisma.article.create({
    //     data: {
    //         title: "Hello World",
    //         body: "This is my first article",
    //         author: {
    //             connect: {
    //                 id: 1,
    //             }
    //         }
    //     }
    // })
    // console.log(createArticle)

    const getArticles= await prisma.article.findMany({})
    console.log("getArticles", getArticles)
    // const getAllUser= await prisma.user.findMany();
    // console.log("getAllUser", getAllUser)
}

main().then(async()=>{await prisma.$disconnect()}).catch(async(e)=>{
    console.log(e);
    await prisma.$disconnect();
    process.exit(1);
});