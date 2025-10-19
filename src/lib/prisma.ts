import {PrismaClient} from "@prisma/client"

declare global {
    // allow global `prisma` variable in development to prevent multiple instances
    // eslint-disable-next-line no-var
    var prisma: PrismaClient | undefined;
}

let prisma: PrismaClient;

if(process.env.NODE_ENV === 'production'){
    prisma = new PrismaClient();
}else{
    if(!global.prisma){
        global.prisma = new PrismaClient()
    }
    prisma = global.prisma;
}

export {prisma};