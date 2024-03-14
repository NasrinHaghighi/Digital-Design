import { NextResponse } from 'next/server';
import { getAuthSession } from '../auth/[...nextauth]/route';
import prisma from '../../../utils/connect'



//CREAT A COMMENT//
export const POST = async (req: Request) => {
    const session = await getAuthSession();
 console.log('s',session)
    if (!session) {
        return new NextResponse(JSON.stringify({ message: 'not authenticated ' }), { status: 401 });
    }
   try{
    const body = await req.json();
    console.log('req body', body);
    const comment = await prisma.comment.create({ data: { ...body,  userEmail: session?.user?.email ?? '' ,userName: session?.user?.name ?? ''} });
    return new NextResponse(JSON.stringify(comment), { status: 200 });
   } catch(e:any){
    console.log(e)
    return new NextResponse(JSON.stringify({message:'SOME'}), {status: 500})
}
};
//GET ALL COMMENT FOR A POST//
export const GET = async (req: Request) => {
  const {searchParams}=new URL(req.url)
  const postSlug = searchParams.get('postSlug')
   
   try{
  
  
    const comments = await prisma.comment.findMany({
        where: {
           postSlug: postSlug as string
        },
        include: {user: true},
     });
    return new NextResponse(JSON.stringify(comments), { status: 200 });
   } catch(e:any){
    console.log(e)
    return new NextResponse(JSON.stringify({message:'SOME'}), {status: 500})
}
};

export const DELETE = async (req: Request) => {
    const body = await req.json();
   
    console.log('body', body);
    const { id } = body;
    // console.log(postId);
    try {
        await prisma.comment.delete({
            where: {
                id: id as string
            },

        });
        // Fetch the updated list of posts
        const updatedComments = await prisma.comment.findMany();
console.log(updatedComments)

        return new NextResponse(JSON.stringify({ message: 'Post deleted', comments: updatedComments }), {
            status: 200
        });

    } catch (error: any) {
        return new NextResponse(JSON.stringify({ message: error.message }), {
            status: 500
        });
    }
};