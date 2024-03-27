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
/*CREATE NEW CATEGORY*/
export const POST = async (req: Request) => {
    
 

   try{
    const body = await req.json();
    
    console.log('req body', body);
    const category = await prisma.category.create({ data: { ...body,  } });
    return new NextResponse(JSON.stringify(category), { status: 200 });
   } catch(e:any){
    console.log(e)
    return new NextResponse(JSON.stringify({message:'SOME'}), {status: 500})
}
};

/*edite a category name*/
export const PUT = async (req: Request) => {
    const body = await req.json();
   

  const { slug, title } = body;
  console.log(slug,title)
  if (!slug || !title) {
    return new NextResponse(JSON.stringify({ message: 'Slug and title are required' }), {
        status: 400
    });
}
    try {
      const updatedCategoryName = await prisma.category.update({
            where: {
                slug: slug as string
            },
            data: {
                title: title // Assuming 'des' is the field you want to update
            }
        });
        // Fetch the updated list of comments
        const categories = await prisma.category.findMany();


        return new NextResponse(JSON.stringify({ categories }), {
            status: 200
        });

    } catch (error: any) {
        return new NextResponse(JSON.stringify({ message: error.message }), {
            status: 500
        });
    }
};