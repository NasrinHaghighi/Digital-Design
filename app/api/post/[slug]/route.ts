import { NextResponse } from 'next/server';

import { PrismaClient } from '@prisma/client';



const prisma = new PrismaClient();

//get all posts//
export const GET = async (req: any,{params}:any) => {

    const {slug}=params
    
    try {
       const post = await prisma.post.findUnique({
        where: {
               slug: slug
           }
       })

        return new NextResponse(JSON.stringify(post), { status: 200 });
    } catch (err) {
        console.log(err);
        return new NextResponse(JSON.stringify({ message: 'error' }), { status: 500 });
    }
}