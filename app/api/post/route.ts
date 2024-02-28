import { NextResponse } from 'next/server';

import { PrismaClient } from '@prisma/client';
import { getAuthSession } from '../auth/[...nextauth]/route';


const prisma = new PrismaClient();

//get all posts//
export const GET = async (req: any) => {
    const { searchParams } = new URL(req.url)
    const page = searchParams.get('page') ?? '1';
    const cat = searchParams.get('cat');
    // console.log('page', page);
    // console.log('cat', cat);
    const POST_PER_PAGE = 2;
    const RECENT_POST_COUNT = 3;
    const query: any = {
        take: POST_PER_PAGE,
        skip: POST_PER_PAGE * (Number(page) - 1),
        where: {
            ...(cat && { catSlug: cat })
        }
    };
    try {
        
        const [posts, count] = await prisma.$transaction([
            prisma.post.findMany(query),
            prisma.post.count({where: query.where})
            
        ]);
     // Fetch the most recent post
     const lastPost = await prisma.post.findFirst({
        orderBy: { createdAt: 'desc' },
    });
    const mostRecentPost = await prisma.post.findMany({
        orderBy: { createdAt: 'desc' }, take: RECENT_POST_COUNT
    });
        return new NextResponse(JSON.stringify({posts, count,mostRecentPost,lastPost}), { status: 200 });
    } catch (err) {
        console.log(err);
        return new NextResponse(JSON.stringify({ message: 'error' }), { status: 500 });
    }
}




/*CREATE NEW POST*/
export const POST = async (req: Request) => {
    const session = await getAuthSession();
 
 //console.log('s',session)
    if (!session) {
        return new NextResponse(JSON.stringify({ message: 'not authenticated ' }), { status: 401 });
    }
   try{
    

    const body = await req.json();
   // console.log('req body', body);
    const post = await prisma.post.create({ data: { ...body,  userEmail: session?.user?.email ?? '' ,userName: session?.user?.name ?? ''} });
    return new NextResponse(JSON.stringify(post), { status: 200 });
   } catch(e:any){
    console.log(e)
    return new NextResponse(JSON.stringify({message:e.message}), {status: 500})

   }
};
// GET POSTS BY CATEGORY //

// const { searchParams } = new URL(req.url)
//     const page = searchParams.get('page') ?? '1';
//     const cat = searchParams.get('cat');

//     const POST_PER_PAGE = 2;
//     const query = {
//         take: POST_PER_PAGE,
//         skip: POST_PER_PAGE * (Number(page) - 1),
//         where:{
//             ...(cat && { satSlug: cat})
//         }
//     };



