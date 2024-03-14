import { NextResponse } from 'next/server';

//import { PrismaClient } from '@prisma/client';
import { getAuthSession } from '../auth/[...nextauth]/route';
import prisma from '../../../utils/connect'


//const prisma = new PrismaClient();

//get all posts//
import { NextRequest } from 'next/server';
import { revalidatePath } from 'next/cache'

export const GET = async (req: NextRequest) => {

    const url = new URL(req.url)
    const page = url.searchParams.get('page') ?? '1';
    const cat = url.searchParams.get('cat');
    const sort = url.searchParams.get('sort');

    const search = url.searchParams.get('search');
//console.log(sort, search)
   
    const POST_PER_PAGE = 6;
    const RECENT_POST_COUNT = 3;
    const query: any = {
        take: POST_PER_PAGE,
        skip: POST_PER_PAGE * (Number(page) - 1),
        where: {
            ...(cat && { catSlug: cat }),
            ...(search && { title: { contains: search.toLowerCase(),   mode: 'insensitive'  } })
        },
        orderBy: sort === 'oldest' ? { createdAt: 'asc' } : { createdAt: 'desc' }
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
        const mostRecentPost = await prisma.post.findMany({
            orderBy: { createdAt: 'desc',  }, take: 4
        });
        
        return new NextResponse(JSON.stringify({ posts, count, lastPost, mostRecentPost }), { status: 200 });
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
    console.log('req body', body);
    const post = await prisma.post.create({ data: { ...body,  userEmail: session?.user?.email ?? '' ,userName: session?.user?.name ?? ''} });
    return new NextResponse(JSON.stringify(post), { status: 200 });
   } catch(e:any){
    console.log(e)
    return new NextResponse(JSON.stringify({message:'SOME'}), {status: 500})
}
};

//DELETE APOST//
export const DELETE = async (req: Request) => {
    const body = await req.json();
 

    const { postId } = body;
    
    try {
        await prisma.post.delete({
            where: {
                id: postId as string
            },

        });
        const updatedPosts = await prisma.post.findMany();

        
        return new NextResponse(JSON.stringify({ message: 'Post deleted', posts: updatedPosts }), {
            status: 200
        });

    } catch (error: any) {
        return new NextResponse(JSON.stringify({ message: error.message }), {
            status: 500
        });
    }
};










