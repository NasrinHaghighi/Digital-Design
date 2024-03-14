import { NextResponse } from 'next/server';

//import { PrismaClient } from '@prisma/client';
import prisma from '../../../../../utils/connect'


//const prisma = new PrismaClient();

//get all posts//
export const GET = async (req: any,{params}:any) => {

    const {slug}=params
   // console.log('slug*****',params.slug)
    
    try {
       const comments = await prisma.comment.findMany({
        where: {
            postSlug: slug
           }
       })

        return new NextResponse(JSON.stringify(comments), { status: 200 });
    } catch (err) {
        console.log(err);
        return new NextResponse(JSON.stringify({ message: 'error' }), { status: 500 });
    }
}

