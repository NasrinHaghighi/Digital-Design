import { NextResponse } from 'next/server';

//import { PrismaClient } from '@prisma/client';
import { getAuthSession } from '../auth/[...nextauth]/route';
import prisma from '../../../utils/connect'


//const prisma = new PrismaClient();

//get all posts//
import { NextRequest } from 'next/server';

export const GET = async (req: NextRequest) => {

    const url = new URL(req.url)
    const page = url.searchParams.get('page') ?? '1';
    const cat = url.searchParams.get('cat');
    const sort = url.searchParams.get('sort');

     const search = url.searchParams.get('search');

   
    const POST_PER_PAGE = 4;
    const RECENT_POST_COUNT = 3;
    const query: any = {
        take: POST_PER_PAGE,
        skip: POST_PER_PAGE * (Number(page) - 1),
        where: {
            ...(cat && { catSlug: cat }),
            ...(search && { title: { contains: search.toLowerCase(),   mode: 'insensitive'  } })
        }
    };
    try {

        const [posts, count] = await prisma.$transaction([
            prisma.post.findMany(query),
            prisma.post.count({ where: query.where })

        ]);
        // Fetch the most recent post
        const lastPost = await prisma.post.findFirst({
            orderBy: { createdAt: 'desc' },
        });
        const mostOldPosts = await prisma.post.findMany({
            orderBy: { createdAt: 'asc' },
        });
        const mostRecentPost = await prisma.post.findMany({
            orderBy: { createdAt: 'desc' },
        });
        return new NextResponse(JSON.stringify({ posts, count, mostRecentPost, lastPost, mostOldPosts }), { status: 200 });
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




