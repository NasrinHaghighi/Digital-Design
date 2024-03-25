import { NextResponse } from 'next/server';

import { PrismaClient } from '@prisma/client';
import prisma from '../../../utils/connect'
//const prisma = new PrismaClient();


//GET ALL CATEGORY//
export const GET = async () => {
   try{
       const categories = await prisma?.category.findMany()
       return new NextResponse(JSON.stringify(categories), { status: 200 });
   }catch(err){
    console.log(err)
    return new NextResponse(JSON.stringify({message:'error'}), {status: 500})
   }
}
//DELETE A CATEGORY BY PPOSTS ASSOSITED
export const DELETE = async (req: Request) => {
    const body = await req.json();
 

    const {slug } = body;
    //console.log('deleting category with slug', slug);
    try {
         // Delete all replies associated with comments of posts in the category
        await prisma.reply.deleteMany({
            where: {
                post: {
                    catSlug: slug as string
                }
            }
        }); 
        
        // Delete all comments associated with posts in the category
        await prisma.comment.deleteMany({
            where: {
                post: {
                    catSlug: slug as string
                }
            }
        });
          // Delete all posts in the category
          await prisma.post.deleteMany({
            where: {
                catSlug: slug as string
            }
        });
        await prisma.category.delete({
            where: {
                slug: slug as string
            }
        });
         // Fetch remaining categories
         const remainingCategories = await prisma.category.findMany();

        
        return new NextResponse(JSON.stringify({ message: 'Category and associated data deleted successfully' , remainingCategories}), {
            status: 200
        });

    } catch (error: any) {
        return new NextResponse(JSON.stringify({ message: error.message }), {
            status: 500
        });
    }
};